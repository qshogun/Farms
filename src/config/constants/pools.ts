import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'BEACH',
    tokenAddress: '0x73B807d262459C412Ce03009515B1811fe4715D2',   // token address
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x73B807d262459C412Ce03009515B1811fe4715D2',  // token address
    contractAddress: {
      97: '',
      56: '0x8D107b528D5E947CD53F10194CB3FE4ac1eC12d7',  /// masterchef address
    },
    poolCategory: PoolCategory.CORE,
    projectLink: '/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
 
]

export default pools
