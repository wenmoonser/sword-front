import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { fetchUserTokensUnclaimedDataAsync, fetchUserBalanceDataAsync, fetchTokensLeftDataAsync } from 'state/actions'
import { buy, claim } from 'utils/callHelpers'
import { usePresale } from './useContract'

export const useBuy = () => {
    const { account } = useWallet()
    const dispatch = useDispatch()
    const presaleContract = usePresale()

    const handleBuy = useCallback(
        async (amount: string) => {
            const txHash = await buy(presaleContract, amount, account)
            dispatch(fetchUserTokensUnclaimedDataAsync(account))
            dispatch(fetchUserBalanceDataAsync(account))
            dispatch(fetchTokensLeftDataAsync())
            console.info(txHash)
        },
        [account, dispatch, presaleContract],
    )

    return { onBuy: handleBuy }
}

export const useClaim = () => {
    const { account } = useWallet()
    const dispatch = useDispatch()
    const presaleContract = usePresale()

    const handleClaim = useCallback(
        async () => {
            const txHash = await claim(presaleContract, account)
            dispatch(fetchUserTokensUnclaimedDataAsync(account))
            dispatch(fetchUserBalanceDataAsync(account))
            dispatch(fetchTokensLeftDataAsync())
            console.info(txHash)
        },
        [account, dispatch, presaleContract],
    )

    return { onClaim: handleClaim }
}


