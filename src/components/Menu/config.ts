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
        href: 'https://pancakeswap.finance/swap#/swap?outputCurrency=0x0a9ba9adBcA7c0F90796536BbD4273ba99eA83aA',
      },
      {
        label: 'Liquidity',
        href: 'https://pancakeswap.finance/liquidity',
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
    label: 'LAYERED FARMING (SWORD)',
    icon: 'HamburgerIcon',
    href: 'https://www.sword-layer2-shield.com',
  },
  {
    label: 'Referrals',
    icon: 'ReferralsIcon',
    href: '/referrals',
  },
  {
    label: 'Price Chart',
    icon: 'ChartIcon',
    href: 'https://poocoin.app/tokens/0x0a9ba9adbca7c0f90796536bbd4273ba99ea83aa'
  },
  {
    label: 'Listings',
    icon: 'ListIcon',
    items: [
      {
        label: 'Rugdoc',
        href: `https://rugdoc.io/project/sword-finance/`,
      },
      {
        label: 'JagoSafer',
        href: 'https://jagosafer.io/sword-finance',
      },
      {
        label: 'Dappradar',
        href: `https://dappradar.com/binance-smart-chain/defi/sword-finance`,
      },
      {
        label: 'Coinsniper',
        href: `https://coinsniper.net/coin/10434`,
      },
      {
        label: 'Ape O Clock',
        href: 'https://www.apeoclock.com/launch/sword-finance-fair-launch/',
      },
    ],
  },
  {
    label: 'More info',
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