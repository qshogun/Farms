import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'BEACH',
    lpAddresses: {
      97: '',
      56: '0x73B807d262459C412Ce03009515B1811fe4715D2',
    },
    tokenSymbol: 'SYRUP',
    tokenAddresses: {
      97: '',
      56: '0x73B807d262459C412Ce03009515B1811fe4715D2',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 1,
    lpSymbol: 'BEACH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x8e31c5061D323A86Cc36305ec65daFB8e0952012',   // lp address token-bnb
    },
    tokenSymbol: 'BEACH',
    tokenAddresses: {
      97: '',
      56: '0x73B807d262459C412Ce03009515B1811fe4715D2', // token address
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

]

export default farms
