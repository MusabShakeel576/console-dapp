import React, { useEffect, useState } from "react";
import { useAppDispatch } from "@/store/store";
import { fetchValidators } from "@/store/validatorSlice";
import copy from "@/assets/copy-black.svg";
import exit from "@/assets/sign-out.svg";
import Image, { StaticImageData } from "next/image";
import { motion, Variants } from "framer-motion";
import { useOutsideClick } from "@/lib/hooks/useOutsideClick";
import down from "@/assets/down-arrow.svg";
import downWhite from "@/assets/down-white.svg";
import {
  useAccount,
  useBalance,
  useDisconnect,
  useNetwork,
  useSwitchNetwork,
} from "wagmi";
import { setIsWalletModalOpen } from "@/store/navbarSlice";
import { IS_SERVER, eclipseAddress } from "@/lib/helpers";
import { arbitrum, polygon, fuse, optimism } from "wagmi/chains";
import fuseIcon from "@/assets/fuse-icon.svg";
import polygonIcon from "@/assets/polygon-icon.svg";
import optimismIcon from "@/assets/optimism-icon.svg";
import arbitrumIcon from "@/assets/arbitrum-icon.svg";
import { useMediaQuery } from "usehooks-ts";

const screenMediumWidth = 768;
const menu: Variants = {
  closed: {
    opacity: 0,
    transition: {
      delay: 0.15,
      duration: 0.3,
    },
    x: -50,
    y: -50,
    transitionEnd: {
      display: "none",
    },
  },
  closedChain: {
    opacity: 0,
    transition: {
      delay: 0.15,
      duration: 0.3,
    },
    x: `${!IS_SERVER && window.innerWidth > screenMediumWidth ? "-50%" : "0" }`,
    y: -50,
    transitionEnd: {
      display: "none",
    },
  },
  closedWrongChain: {
    opacity: 0,
    transition: {
      delay: 0.15,
      duration: 0.3,
    },
    y: -50,
    transitionEnd: {
      display: "none",
    },
  },
  open: {
    opacity: 1,
    display: "block",
    transition: {
      type: "spring",
      duration: 0.5,
    },
    y: 0,
  },
};

type Icons = {
  [key: string]: string | StaticImageData;
};

const icons: Icons = {
  [fuse.id]: fuseIcon,
  [polygon.id]: polygonIcon,
  [optimism.id]: optimismIcon,
  [arbitrum.id]: arbitrumIcon,
};

const ConnectWallet = ({
  disableAccountCenter = false,
  className = "",
  containerClassName = "",
}: {
  disableAccountCenter?: boolean;
  className?: string;
  containerClassName?: string;
}) => {
  const dispatch = useAppDispatch();
  const [isChainOpen, setIsChainOpen] = React.useState(false);
  const [isAccountsOpen, setIsAccountsOpen] = React.useState(false);
  const [isWrongNetwoksOpen, setIsWrongNetwoksOpen] = React.useState(false);
  const { address, connector, isConnected } = useAccount();
  const { chain, chains } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();
  const { disconnect } = useDisconnect();
  const balance = useBalance({
    address,
    watch: true,
  });
  const matches = useMediaQuery(`(min-width: ${screenMediumWidth}px)`);

  const chainRef = useOutsideClick(() => {
    if (isChainOpen) {
      setIsChainOpen(false);
    }
  });
  const accountsRef = useOutsideClick(() => {
    if (isAccountsOpen) {
      setIsAccountsOpen(false);
    }
  });
  const wrongNetworkRef = useOutsideClick(() => {
    if (isWrongNetwoksOpen) {
      setIsWrongNetwoksOpen(false);
    }
  });

  const checkCorrectNetwork = () => {
    const network = chains.find((c) => c.id === chain?.id);
    if (!network) return false;
    return true;
  };

  useEffect(() => {
    dispatch(fetchValidators());
  }, [connector, chain]);

  return !isConnected ? (
    <div className={"flex justify-end " + containerClassName}>
      <button
        className={
          "bg-fuse-black text-white px-4 py-2 rounded-full font-medium md:text-sm " +
          className
        }
        onClick={() => dispatch(setIsWalletModalOpen(true))}
      >
        Connect Wallet
      </button>
    </div>
  ) : !disableAccountCenter && checkCorrectNetwork() ? (
    <div className="flex justify-end md:justify-center relative w-[410px] md:w-[90%] h-9 md:h-7">
      <div
        className="flex bg-lightest-gray px-[14.8px] py-[7px] md:py-3.5 rounded-full cursor-pointer items-center relative text-base/4 md:text-[8px] font-bold whitespace-nowrap justify-center"
        ref={chainRef}
        onClick={() => setIsChainOpen(!isChainOpen)}
      >
        <div className="flex w-full justify-center items-center">
          <Image
            src={icons[chain?.id ?? 0]}
            alt="Fuse"
            className="border-[0.5px] border-gray-alpha-40 rounded-full me-2 md:me-[2px]"
            width={matches ? 25 : 17}
            height={matches ? 25 : 17}
          />
          <p>{chain?.name}</p>
          <Image
            src={down.src}
            alt="down"
            className={`ms-2 md:ms-[2px] ${isChainOpen && "rotate-180"}`}
            width={11.39}
            height={5.7}
          />
        </div>
      </div>
      <div
        className="flex bg-lightest-gray px-[20.3px] py-3 md:py-3.5 rounded-full cursor-pointer items-center relative text-base/4 md:text-[8px]/[25px] font-normal ml-2 md:ml-1"
        ref={accountsRef}
        onClick={() => setIsAccountsOpen(!isAccountsOpen)}
      >
        <div className="flex w-full justify-between">
          <p>
            {eclipseAddress(String(address))}
          </p>
          <Image
            src={down.src}
            alt="down"
            className={`ms-2 mr-2 ${isAccountsOpen && "rotate-180"} md:ms-1`}
            width={10}
            height={10}
          />
        </div>
        <motion.div
          animate={isAccountsOpen ? "open" : "closed"}
          initial="closed"
          exit="closed"
          variants={menu}
          className="absolute top-[120%] left-0 bg-white rounded shadow-xl p-[6px] z-50 w-60 text-xs md:text-[8px] font-medium"
        >
          <div className="flex items-center px-[6px] rounded">
            <Image
              src={icons[chain?.id ?? 0]}
              alt={chain?.name ?? "Fuse"}
              className="h-8 me-2"
              width={15}
              height={15}
            />
            <p>
              {parseFloat(balance.data?.formatted || "0").toFixed(4)}{" "}
              {balance.data?.symbol}
            </p>
            <p className="ml-auto text-[10px] md:text-[8px]">
              {eclipseAddress(String(address))}
            </p>
          </div>
          <div
            className="bg-modal-bg w-full rounded px-[9px] py-[7px] flex"
            onClick={() => {
              navigator.clipboard.writeText(String(address));
            }}
          >
            Copy address
            <Image
              src={copy.src}
              alt="copy"
              className="ml-auto"
              width={15}
              height={15}
            />
          </div>
          <div
            className="bg-[#FD0F0F] text-white w-full rounded px-[9px] py-[7px] flex mt-1"
            onClick={() => disconnect()}
          >
            Disconnect
            <Image
              src={exit.src}
              alt="exit"
              className="ml-auto"
              width={15}
              height={15}
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        animate={isChainOpen ? "open" : "closedChain"}
        initial="closedChain"
        exit="closedChain"
        variants={menu}
        className="absolute top-[120%] bg-white rounded shadow-xl p-[6px] z-50 text-xs md:text-[8px] font-medium min-w-[230px]"
      >
        {chains.map((c) => (
          <div
            className={
              chain?.id === c.id
                ? "flex items-center px-[6px] bg-lightest-gray rounded cursor-pointer"
                : "flex items-center px-[6px] cursor-pointer"
            }
            onClick={() => {
              switchNetwork && switchNetwork(c.id);
            }}
            key={c.id}
          >
            <Image
              src={icons[c.id]}
              alt={c.name}
              className="h-8 me-2 md:h-7"
              width={15}
              height={15}
            />
            <p className="text-xs/3 font-medium">{c.name}</p>
            {chain?.id === c.id && (
              <>
                <div className="h-[6px] w-[6px] rounded-full bg-[#66E070] ml-auto" />
                <p className="text-[10px] md:text-[8px] font-medium ml-1">
                  Connected
                </p>
              </>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  ) : !disableAccountCenter ? (
    <div className="flex relative w-[410px] justify-end md:me-2">
      <div
        className="flex bg-[#FD0F0F] text-white px-[10px] py-[6px] md:py-1 md:px-2 rounded cursor-pointer items-center relative text-xs md:text-[8px] font-medium justify-center"
        ref={wrongNetworkRef}
        onClick={() => setIsWrongNetwoksOpen(!isWrongNetwoksOpen)}
      >
        <div className="flex w-full justify-center">
          <p className="text-xs/5 md:text-[8px]">Wrong Network</p>
          <Image
            src={downWhite.src}
            alt="down"
            className={`ml-2 ${isWrongNetwoksOpen && "rotate-180"}`}
            width={10}
            height={10}
          />
        </div>
      </div>
      <motion.div
        animate={isWrongNetwoksOpen ? "open" : "closedWrongChain"}
        initial="closedWrongChain"
        exit="closedWrongChain"
        variants={menu}
        className="absolute top-[120%] bg-white rounded shadow-xl z-50 text-xs/5 md:text-[8px] font-medium w-[192px]"
      >
        <div className="flex px-[12px] pt-[12px] pb-[6px] flex-col w-full border-b-[1px] border-lighter-blue mb-[6px]">
          <p className="font-bold text-xs md:text-[8px]">Switch Network</p>
          <p className="text-xs/[15px] md:text-[8px] font-normal text-text-heading-gray mt-1">
            Wrong network detected, switch or disconnect to continue
          </p>
        </div>
        {chains.map((c) => (
          <div
            className="flex items-center px-[12px] cursor-pointer"
            onClick={() => {
              switchNetwork && switchNetwork(c.id);
            }}
            key={c.id}
          >
            <Image
              src={icons[c.id]}
              alt={c.name}
              className="h-8 me-2 md:h-7"
              width={15}
              height={15}
            />
            <p>{c.name}</p>
          </div>
        ))}
        <div
          className="bg-[#FD0F0F] text-white rounded px-[9px] py-[7px] flex mt-1 mx-[6px] mb-2 cursor-pointer"
          onClick={() => disconnect()}
        >
          Disconnect
          <Image
            src={exit.src}
            alt="exit"
            className="ml-auto"
            width={15}
            height={15}
          />
        </div>
      </motion.div>
    </div>
  ) : (
    <></>
  );
};

export default ConnectWallet;
