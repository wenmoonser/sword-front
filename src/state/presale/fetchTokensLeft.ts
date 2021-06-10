import { AbiItem } from 'web3-utils'
import presaleABI from 'config/abi/presale.json'
import { getPresaleAddress } from 'utils/addressHelpers'
import { getWeb3 } from 'utils/web3'
import BigNumber from 'bignumber.js'

const web3 = getWeb3()
const presaleContract = new web3.eth.Contract(presaleABI as unknown as AbiItem, getPresaleAddress())

const fetchTokensLeft = async () => {
    const tokensLeft = await presaleContract.methods.getADRTokensLeft().call()
    return new BigNumber(tokensLeft)
}

export default fetchTokensLeft
