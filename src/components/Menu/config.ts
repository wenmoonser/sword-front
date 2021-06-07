import { MenuEntry } from '@pancakeswap-libs/uikit'
import { getCakeAddress } from 'utils/addressHelpers'

const tokenAddress = getCakeAddress()
const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Referrals',
    icon: 'ReferralsIcon',
    href: '/referrals',
  },
  {
    label: 'Price Chart',
    icon: 'ChartIcon',
    href: ''
  },
  {
    label: 'Features',
    icon: 'FeaturesIcon',
    items: [
      {
        label: 'Transfer Tax',
        href: '',
      },
      {
        label: 'Auto Burn',
        href: '',
      },
      {
        label: 'Auto LP',
        href: '',
      },
      {
        label: 'Harvesting Time Lock',
        href: '',
      },
      {
        label: 'Anti Whale Measures',
        href: '',
      },
    ],
  },
  {
    label: 'Listings',
    icon: 'ListIcon',
    items: [
      {
        label: 'Coinsniper (comingsoon)',
        href: ``,
      },
      {
        label: 'Coinhunt (comingsoon)',
        href: ``,
      },
      {
        label: 'PooCoin (comingsoon)',
        href: ``,
      },
      {
        label: 'DappRadar (comingsoon)',
        href: '',
      },
      {
        label: 'CoinMarketCap (comingsoon)',
        href: '',
      },
      {
        label: 'CoinGecko (comingsoon)',
        href: '',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/andromedafinance',
      },
      {
        label: 'Docs',
        href: 'https://andromedadefi.gitbook.io/andromeda-finance/',
      },
      {
        label: 'Blog',
        href: 'https://andromedadefi.medium.com/',
      },
    ],
  },
]

export default config
