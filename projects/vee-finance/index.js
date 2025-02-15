const {getCompoundV2Tvl} = require('../helper/compound')
const sdk = require('@defillama/sdk')

module.exports={
    methodology: 'As in Compound Finance, TVL counts the tokens locked in the contracts to be used as collateral to borrow or to earn yield on Avalanche and Heco. Borrowed coins are not counted towards the TVL, so only the coins actually locked in the contracts are counted.',
    tvl: sdk.util.sumChainTvls([
	//V1 & V2 on Avalanche
        getCompoundV2Tvl("0xA67DFeD73025b0d61F2515c531dd8D25D4Cfd0Db", "avax", addr=>`avax:${addr}`),
        getCompoundV2Tvl("0x43AAd7d8Bc661dfA70120865239529ED92Faa054", "avax", addr=>`avax:${addr}`, "0x6481490DBb6Bd0e8b7CB7E1317470f6d08aDa5A2", "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7"),
        getCompoundV2Tvl("0xAF7f6F7a1295dEDF52a01F5c3f04Ad1b502CdA6a", "avax", addr=>`avax:${addr}`),
        getCompoundV2Tvl("0xeEf69Cab52480D2BD2D4A3f3E8F5CcfF2923f6eF", "avax", addr=>`avax:${addr}`, "0x125605c515e3f75CAd62d3613c97A76F13d73A64", "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7"),
		
	//v1 on Heco
	getCompoundV2Tvl("0x484C6e804cD4Cc27fCFbCf06748d6b4BCA47db84", "heco", addr=>`heco:${addr}`),
        getCompoundV2Tvl("0x2a144ACaef8fb9258e4f2c2018945a76fE7342E2", "heco", addr=>`heco:${addr}`, "0x0F75aBfef98dAaa7A8170ddA97c8100a65ABA3cC", "0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F"),
    ])
}
