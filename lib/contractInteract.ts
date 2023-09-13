import { Signer, ethers } from 'ethers'
import { web3OnboardProvider } from './provider'
import { CONFIG } from './config'
import { Consensus } from './abi/Consensus'

export const getConsensusContract = (provider: ethers.providers.Provider | Signer | null = null) => {
    let contract
    if (provider)
        contract = new ethers.Contract(CONFIG.consensusAddress, Consensus, provider)
    else
        contract = new ethers.Contract(CONFIG.consensusAddress, Consensus)
    return contract
}

export const getTotalStakeAmount = async () => {
    const contract = getConsensusContract(web3OnboardProvider)
    const totalStakeAmount: number = await contract.totalStakeAmount()
    return ethers.utils.formatEther(totalStakeAmount)
}

export const getValidators = async () => {
    const contract = getConsensusContract(web3OnboardProvider)
    const validatorsMap: Map<number, string> = await contract.getValidators()
    const validators: string[] = []
    validatorsMap.forEach((value, _) => {
        validators.push(value)
    })
    return validators
}

export const getJailedValidators = async () => {
    const contract = getConsensusContract(web3OnboardProvider)
    const validatorsMap: Map<number, string> = await contract.jailedValidators()
    const validators: string[] = []
    validatorsMap.forEach((value, _) => {
        validators.push(value.toLowerCase())
    })
    return validators
}

export const getPendingValidators = async () => {
    const contract = getConsensusContract(web3OnboardProvider)
    const validatorsMap: Map<number, string> = await contract.pendingValidators()
    const validators: string[] = []
    validatorsMap.forEach((value, _) => {
        validators.push(value.toLowerCase())
    })
    return validators
}

export const fetchValidatorData = async (address: string) => {
    const contract = getConsensusContract(web3OnboardProvider)
    const stakeAmount = await contract.stakeAmount(address)
    const fee = await contract.validatorFee(address)
    let delegators: Array<Array<string>> = []
    const delegatorsMap: Map<number, string> = await contract.delegators(address)
    delegatorsMap.forEach((value, _) => {
        delegators.push([value, "0"])
    })
    return {
        stakeAmount: ethers.utils.formatEther(stakeAmount),
        fee: ethers.utils.formatUnits(fee, 16),
        delegatorsLength: delegators.length.toString(),
        delegators
    }
}

export const getStake = async (address: string, wallet: string | undefined) => {
    const contract = getConsensusContract(web3OnboardProvider)
    let delegatedAmount = 0
    if (web3OnboardProvider && wallet) delegatedAmount = await contract.delegatedAmount(wallet, address)
    return ethers.utils.formatEther(delegatedAmount)
}

export const delegate = async (amount: string, validator: string) => {
    const contract = getConsensusContract(web3OnboardProvider)
    const tx = await contract.delegate(validator, { value: ethers.utils.parseEther(amount) })
    await tx.wait()
    return tx.hash
}

export const withdraw = async (amount: string, validator: string) => {
    const contract = getConsensusContract(web3OnboardProvider)
    const tx = await contract.withdraw(validator, ethers.utils.parseEther(amount).toString())
    await tx.wait()
    return tx.hash
}

export const getDelegatedAmount = async (delegator: string, validator: string) => {
    const contract = getConsensusContract(web3OnboardProvider)
    const delegatedAmount = await contract.delegatedAmount(delegator, validator)
    return ethers.utils.formatEther(delegatedAmount)
}

export const getMaxStake = async () => {
    const contract = getConsensusContract(web3OnboardProvider)
    const maxStake = await contract.getMaxStake()
    return ethers.utils.formatEther(maxStake)
}

export const getMinStake = async () => {
    const contract = getConsensusContract(web3OnboardProvider)
    const maxStake = await contract.getMinStake()
    return ethers.utils.formatEther(maxStake)
}