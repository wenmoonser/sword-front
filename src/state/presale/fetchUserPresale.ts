import { AbiItem } from 'web3-utils'
import presaleABI from 'config/abi/presale.json'
import cakeABI from 'config/abi/cake.json'
import busdABI from 'config/abi/busd.json'
import { getBusdAddress, getCakeAddress, getPresaleAddress } from 'utils/addressHelpers'
import { getWeb3 } from 'utils/web3'
import BigNumber from 'bignumber.js'

const web3 = getWeb3()
const busdContract = new web3.eth.Contract(busdABI as unknown as AbiItem, getBusdAddress())
const cakeContract = new web3.eth.Contract(busdABI as unknown as AbiItem, getCakeAddress())
const presaleContract = new web3.eth.Contract(presaleABI as unknown as AbiItem, getPresaleAddress())

export const fetchUserPresaleAllowances = async (address) => {
    const presaleAllowances = await busdContract.methods.allowance(address, getPresaleAddress()).call()
    return new BigNumber(presaleAllowances)
}

export const fetchUserPresaleBalance = async (address) => {
    const busdBalance = await busdContract.methods.balanceOf(address).call()
    const cakeBalance = await cakeContract.methods.balanceOf(address).call()
    return [new BigNumber(busdBalance), new BigNumber(cakeBalance)]
}

export const fetchUserTokensUnclaimed = async (address) => {
    const tokensUnclaimed = await presaleContract.methods.tokensUnclaimed(address).call()
    return new BigNumber(tokensUnclaimed)
}

