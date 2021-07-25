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
        href: 'https://exchange.pancakeswap.finance/#',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Presale',
    icon: 'TicketIcon',
    href: '/presale',
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
    href: 'https://poocoin.app/'
  },
  {
    label: 'Listings',
    icon: 'ListIcon',
    items: [
      {
        label: 'Coinsniper',
        href: `https://coinsniper.net/`,
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
        href: 'https://github.com/SwordFinance/contract',
      },
      {
        label: 'Docs',
        href: 'https://financesword.gitbook.io/sword-finance/',
      },
    ],
  },
]

export default config
