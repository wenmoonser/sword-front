import React from 'react'
import styled from 'styled-components'
import { Tag, Flex, Heading, Image } from '@pancakeswap-libs/uikit'
import { CommunityTag, CoreTag, NoFeeTag, RiskTag } from 'components/Tags'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  risk?: number
  depositFee?: number
  farmImage?: string
  tokenSymbol?: string
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 0.25rem;
  }

  [src*='martian-busd'],
  [src*='martian-bnb'],
  [src*='bnb-busd'] {
    width: 80%;
    height: auto;
  }
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
  background-color: #c45200;
  border: 1px solid #c45200;
`

const CardHeading: React.FC<ExpandableSectionProps> = ({
  lpLabel,
  multiplier,
  risk,
  farmImage,
  tokenSymbol,
  depositFee,
}) => {
  return (
    <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
      <Image src={`/images/farms/${farmImage}.png`} alt={tokenSymbol} width={64} height={64} />
      <Flex flexDirection="column" alignItems="flex-end">
        <Heading mb="4px">{lpLabel}</Heading>
        <Flex justifyContent="center">
          {depositFee === 0 ? <NoFeeTag /> : null}
          {/* {isCommunityFarm ? <CommunityTag /> : <CoreTag />} */}
          {/* <RiskTag risk={risk} /> */}
          <MultiplierTag>{multiplier}</MultiplierTag>
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default CardHeading
