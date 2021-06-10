import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync } from 'state/actions'
import { buy, claim } from 'utils/callHelpers'
import { usePresale } from './useContract'

export const useBuy = () => {
    const { account } = useWallet()
    const presaleContract = usePresale()

    const handleBuy = useCallback(
        async (amount: string) => {
            const txHash = await buy(presaleContract, amount, account)
            console.info(txHash)
        },
        [account, presaleContract],
    )

    return { onBuy: handleBuy }
}

export const useClaim = () => {
    const { account } = useWallet()
    const presaleContract = usePresale()

    const handleClaim = useCallback(
        async () => {
            const txHash = await claim(presaleContract, account)
            console.info(txHash)
        },
        [account, presaleContract],
    )

    return { onClaim: handleClaim }
}


