import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import checkCircle from "@/assets/check-circle.svg"
import { useAccount, useConnect } from "wagmi";

interface SocialButtonProps {
  onClick?: () => void;
  icon: string | StaticImport;
  id: string;
  connectingWalletId: string;
  className?: string;
}

const SocialButton = ({
  onClick,
  icon,
  id,
  connectingWalletId,
  className
}: SocialButtonProps) => {
  const { connector, isConnected, isConnecting } = useAccount();
  const { isLoading, pendingConnector } = useConnect();

  return (
    <button
      className={
        "flex justify-center items-center relative rounded-md cursor-pointer h-10 disabled:opacity-75 disabled:cursor-default " +
        className
      }
      onClick={onClick}
      disabled={isConnected && connector?.id === id.split("-")[0] && connector.options.loginParams.loginProvider === id.split("-")[1]}
    >
      {((isConnecting && connectingWalletId === id) || (isLoading && pendingConnector?.id === id.split("-")[0] && pendingConnector.options.loginParams.loginProvider === id.split("-")[1])) &&
        <span className="absolute left-2 top-2 animate-spin border-2 border-light-gray border-t-2 border-t-[#555555] rounded-full w-4 h-4"></span>
      }
      {isConnected && connector?.id === id.split("-")[0] && connector.options.loginParams.loginProvider === id.split("-")[1] &&
        <Image src={checkCircle} alt="connected" className="absolute left-2 top-2 w-4 h-4" />
      }
      <Image src={icon} alt="icon" className="max-w-[35px] max-h-[35px]" />
    </button>
  );
};

export default SocialButton;
