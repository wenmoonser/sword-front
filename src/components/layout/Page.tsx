import styled from 'styled-components'
import Container from './Container'

const Page = styled(Container)`
  min-height: calc(100vh - 64px);
  padding-bottom: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-bottom: 24px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-bottom: 32px;
  }
`

export default Page
