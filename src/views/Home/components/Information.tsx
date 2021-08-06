import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms } from '../../../state/hooks'

const StyledInformation = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  background-image: url('/images/egg/info.png');
  background-repeat: no-repeat;
  background-position: right;
  min-height: 376px;
  background-size: cover;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  margin-bottom: 20px;
`

// toChange

const Information = () => {
  const TranslateString = useI18n()

  return (
    <StyledInformation>
      <CardBody>
        <Heading color="#ebe4ce" size="xl" mb="24px">
          Important Features
        </Heading>
        <ul>
          <Row><li> Migrator Code Removed  </li></Row>
          <Row><li> Ownership transferred and timelocked (Will do after Launch)  </li></Row>
          <Row><li> Smart Tax  </li></Row>
          <Row><li> Soft cap Tokenomics to increase price sustainability </li></Row>
          <Row><li> High Auto Emission Reduction to limit supply of SWORD  </li></Row>
        </ul>
      </CardBody>
    </StyledInformation>
  )
}

export default Information
