import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Button, Flex, Heading, IconButton, AddIcon, MinusIcon, useModal } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { getBalanceNumber } from 'utils/formatBalance'
import { useClaim } from 'hooks/usePresale'
import { useFarmUser } from 'state/hooks'
import BuyModal from './BuyModal'

const IconButtonWrapper = styled.div`
  display: flex;
  svg {
    width: 20px;
  }
`

const ClaimAction: React.FC = () => {
  const TranslateString = useI18n()
  const { onClaim } = useClaim()

  const renderStakingButtons = () => {
    return <Button fullWidth disabled onClick={onClaim}>Claim</Button>
  }

  return (
    <Flex justifyContent="space-between" alignItems="center" flexDirection="column">
      {renderStakingButtons()}
      <div style={{ paddingTop: '20px' }}>You can only claim after presale is over!</div>
    </Flex>
  )
}

export default ClaimAction