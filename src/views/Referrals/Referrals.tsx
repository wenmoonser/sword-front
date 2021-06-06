import React from 'react'
import Page from 'components/layout/Page'
import styled from 'styled-components'
import { Heading, Card, CardBody, CardFooter, Flex, Button } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import UnlockWalletCard from './components/UnlockWalletCard'
import ReferralCard from './components/ReferralCard'
import Divider from './components/Divider'

const Header = styled.div`
  align-items: center;
  background-image: url('/images/egg/referral_banner.png');
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: auto;
  padding-top: 20px;
  text-align: center;
  height: 60vh;
  background-size: cover;
`

const Referrals: React.FC = () => {
  const TranslateString = useI18n()
  const wallet = useWallet()

  return (
    <Page>
      <Header style={{ textAlign: 'center' }}>
        <Heading as="h1" size="lg" color="primary" mb="10px" mt="10px" style={{ textAlign: 'center' }}>
          {TranslateString(10006, 'Andromeda Referral Program')}
        </Heading>
        <Heading as="h2" color="secondary" mb="50px" style={{ textAlign: 'center' }}>
          {TranslateString(
            10007,
            "Share the referral link below to invite your friends and earn 3% of your friends' earnings FOREVER!",
          )}
        </Heading>
      </Header>
      <Divider />
      <div style={{ padding: '32px', paddingTop: '0px' }}>

        {wallet.status === 'connected' && <ReferralCard />}

        {wallet.status !== 'connected' && <UnlockWalletCard />}
      </div>
    </Page>
  )
}

export default Referrals
