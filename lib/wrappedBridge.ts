import { ethers } from "ethers";
import { WrappedTokenBridgeAbi } from "@/lib/abi/WrappedTokenBridge";
import { AdapterParams } from "@layerzerolabs/ui-core";
import { serializeAdapterParams } from "@layerzerolabs/ui-evm";
import { getPublicClient, getWalletClient } from "wagmi/actions";
import { Address } from "abitype";
import { createPublicClient, http, parseUnits } from "viem";
import { hex } from "./helpers";

const publicClient = (rpcUrl: string) => {
  return createPublicClient({
    transport: http(rpcUrl)
  })
}

export const bridgeWrapped = async (
  bridgeAddress: Address,
  address: Address,
  tokenAddress: Address,
  amount: string,
  decimals: number,
  lzChainId: number
) => {
  const publicClient = getPublicClient()
  const dstGasLimit = await publicClient.readContract({
    address: bridgeAddress,
    abi: WrappedTokenBridgeAbi,
    functionName: "minDstGasLookup",
    args: [lzChainId, 1]
  })
  const amt = parseUnits(amount, decimals);
  const adapterParams = AdapterParams.forV1(Number(dstGasLimit));
  const nativeFee = (await publicClient.readContract({
    address: bridgeAddress,
    abi: WrappedTokenBridgeAbi,
    functionName: "estimateBridgeFee",
    args: [lzChainId, false, serializeAdapterParams(adapterParams) as Address]
  }))[0]
  const increasedNativeFee = BigInt(Number(nativeFee) * 1.2); // 20% increase
  const callParams = {
    refundAddress: address,
    zroPaymentAddress: ethers.constants.AddressZero as Address,
  };
  const walletClient = await getWalletClient()
  let tx: Address = hex
  if (walletClient) {
    tx = await walletClient.writeContract({
      address: bridgeAddress,
      abi: WrappedTokenBridgeAbi,
      functionName: 'bridge',
      args: [
        tokenAddress,
        lzChainId,
        amt,
        address,
        false,
        callParams,
        serializeAdapterParams(adapterParams) as Address
      ],
      value: increasedNativeFee
    })
  }
  return tx
};

export const bridgeAndUnwrapNative = async (
  bridgeAddress: Address,
  address: Address,
  tokenAddress: Address,
  amount: string,
  decimals: number,
  lzChainId: number
) => {
  const publicClient = getPublicClient()
  const dstGasLimit = await publicClient.readContract({
    address: bridgeAddress,
    abi: WrappedTokenBridgeAbi,
    functionName: "minDstGasLookup",
    args: [lzChainId, 1]
  })
  const amt = parseUnits(amount, decimals);
  const adapterParams = AdapterParams.forV1(Number(dstGasLimit));
  const nativeFee = (await publicClient.readContract({
    address: bridgeAddress,
    abi: WrappedTokenBridgeAbi,
    functionName: "estimateBridgeFee",
    args: [lzChainId, true, serializeAdapterParams(adapterParams) as Address]
  }))[0]
  const increasedNativeFee = (Number(nativeFee) * 1.2).toFixed(0);
  const callParams = {
    refundAddress: address,
    zroPaymentAddress: ethers.constants.AddressZero as Address,
  };
  const walletClient = await getWalletClient()
  let tx: Address = hex
  if (walletClient) {
    tx = await walletClient.writeContract({
      address: bridgeAddress,
      abi: WrappedTokenBridgeAbi,
      functionName: 'bridge',
      args: [
        tokenAddress,
        lzChainId,
        amt,
        address,
        true,
        callParams,
        serializeAdapterParams(adapterParams) as Address
      ],
      value: BigInt(increasedNativeFee)
    })
  }
  return tx
};

export const estimateWrappedNativeFee = async (
  bridgeAddress: Address,
  lzChainId: number,
  rpcUrl: string
) => {
  const dstGasLimit = await publicClient(rpcUrl).readContract({
    address: bridgeAddress,
    abi: WrappedTokenBridgeAbi,
    functionName: "minDstGasLookup",
    args: [lzChainId, 1]
  })
  const adapterParams = AdapterParams.forV1(Number(dstGasLimit));
  const nativeFee = (
    await publicClient(rpcUrl).readContract({
      address: bridgeAddress,
      abi: WrappedTokenBridgeAbi,
      functionName: "estimateBridgeFee",
      args: [lzChainId, false, serializeAdapterParams(adapterParams) as Address]
    })
  )[0]
  const increasedNativeFee = (Number(nativeFee) * 1.2).toFixed(0);
  return increasedNativeFee;
};
