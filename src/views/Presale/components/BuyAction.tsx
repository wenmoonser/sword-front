import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Button, Flex, Heading, IconButton, AddIcon, MinusIcon, useModal } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { getBalanceNumber } from 'utils/formatBalance'
import { useBuy } from 'hooks/usePresale'
import { useFarmUser } from 'state/hooks'
import BuyModal from './BuyModal'

const IconButtonWrapper = styled.div`
  display: flex;
  svg {
    width: 20px;
  }
`


interface BuyActionProps {
    busdBalance?: BigNumber
    tokensUnclaimed?: BigNumber
    tokenBalance?: BigNumber
    tokensLeft?: BigNumber
}


const BuyAction: React.FC<BuyActionProps> = ({ busdBalance, tokensUnclaimed, tokenBalance, tokensLeft }) => {
    const TranslateString = useI18n()
    const { onBuy } = useBuy()

    const [onPresentBuy] = useModal(
        <BuyModal max={busdBalance} onConfirm={onBuy} tokenName="BUSD" tokensUnclaimed={tokensUnclaimed} tokenBalance={tokenBalance} tokensLeft={tokensLeft} />
    )

    const renderStakingButtons = () => {
        return <Button fullWidth onClick={onPresentBuy}>Buy</Button>
    }

    return (
        <Flex justifyContent="space-between" alignItems="center" flexDirection="column">
            {renderStakingButtons()}
            <div style={{ paddingTop: '20px' }}>Presale is over! To buy, head over to <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xC4C11d45f3563033Ed1e86f6d21C8BE6C98017eB" style={{ textDecoration: 'underline', fontWeight: 700 }}>Pancake Swap</a>!</div>
        </Flex>
    )
}

export default BuyAction