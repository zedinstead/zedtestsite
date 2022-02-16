import React, { useState } from "react";
import styled from "styled-components";

class DropDown extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      console.log('You have chosen wisely: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
          <div>
        <form onSubmit={this.handleSubmit}>
          <label>
          Choose an item from the Library: &nbsp;
            <select value={this.state.value} onChange={this.handleChange}>
            <option value="">Items are organized alphabetically by author's reddit username</option>
              <option value="https://ipfs.io/ipfs/QmcCtTrzgacB9PqexdP5MevpVnyuPU8dRHsM94qFnsS7uf?filename=DiamondHandbook.pdf">**Collection** - Diamond Handbook - Second Edition</option>
              <option value="https://ipfs.io/ipfs/QmV3xXcJVQz2Taz9irG4diPqEfA17f4GeMnnDzEN3GjUC4?filename=SuperStonkDDMegaBackUp.pdf">**Collection** - SuperStonk DD Mega Back Up</option>
              <option value="https://ipfs.io/ipfs/QmRSqHYAZbLuE1ZsRgmnxrg1oXMHzNdULFF2283efNirXP?filename=ACastleOfGlass.pdf">3for100Specials - 07-14-21 - A Castle of Glass: Game On, Anon</option>
              <option value="https://ipfs.io/ipfs/QmZaifCUPSz4DGXJqdepXARQ7iHN389Ykk8oTmKcEcB5oZ?filename=TheGlassCastle.pdf">3for100Specials - 09-08-21 - The Glass Castle</option>
              <option value="https://ipfs.io/ipfs/QmYuaUjfpYTSmod5r5Q8Uy2Jbzo96LFx5taTw2tsEuiU8p?filename=CollectedWorksOfAlexanderHood.pdf">AlexanderHood - 04-18-21 - Collected Works of u/AlexanderHood</option>
              <option value="https://ipfs.io/ipfs/QmQUsWJ2ee34NL2BjwdCzfnXq59urcLr8d5cYyfb7zqeQC?filename=TheFedAnd10.8T.pdf">ammoprofit - 02-08-22 - The Fed and $10.8T</option>
              <option value="https://ipfs.io/ipfs/QmWBZKxeZHoeRCEyXNqtVLJ4YGViw9Ntc8EVHTr9Ktumc9?filename=MysteryOfTheNegativeBetaSolved.pdf">animasoul - 03-25-21 - Mystery of the Negative Beta Solved</option>
              <option value="https://ipfs.io/ipfs/QmNnPHFaB7ksksgPxrcJKNE59j86i9NoCgSzZPBQ1UCnsL?filename=DDonSears.pdf">AnnihilationGod - 09-05-21 - DD on Sears</option>
              <option value="https://ipfs.io/ipfs/QmTqW7oXwVzrHvCtU1E5oKv4aAGYXMQx3RJSqTnYvd9Ctw?filename=CitadelHasNoClothes.pdf">atobitt - 03-13-21 - Citadel Has No Clothes</option>
              <option value="https://ipfs.io/ipfs/QmdvuxNTBHYUdhdFZ1fvqNZeSBodjNDbko6h7dN1vv7JcZ?filename=BlackRockBagHolders.pdf">atobitt - 03-18-21 - BlackRock Bag Holders, Inc.</option>
              <option value="https://ipfs.io/ipfs/QmdFDFeBcqKqQ9yZaqp28Ja5f9u99jEM52Bsi8F8zBAN2E?filename=TheEverythingShort.pdf">atobitt - 03-30-21 - The Everything Short</option>
              <option value="https://ipfs.io/ipfs/QmWAE3nGYwRMzLdQk8oxry5MxEwNc7Wm8sA7LMYLiE8aMA?filename=WalkingLikeADuckTalkingLikeADuck.pdf">atobitt - 04-05-21 - Walking Like a Duck, Talking Like a Duck</option>
              <option value="https://ipfs.io/ipfs/QmcCriHr7WThdshcBu9iiUNZg7rTUi6HCAodp4aVryxo2s?filename=HouseOfCards1.pdf">atobitt - 04-21-21 - A House of Cards: Part I</option>
              <option value="https://ipfs.io/ipfs/QmRMDAztLJ6CAjzF9Lhi3FBBkr4amM83c41L6oo7TJa1P1?filename=HouseOfCards2.pdf">atobitt - 05-26-21 - A House of Cards: Part II</option>
              <option value="https://ipfs.io/ipfs/QmRyKrYRJox974kSMj69hHF2KUxABsZ12PimAV5xvgvHTT?filename=HouseOfCards3.pdf">atobitt - 05-26-21 - A House of Cards: Part III</option>
              <option value="https://ipfs.io/ipfs/QmQLazwiQ5nNwESQS5xAZAn3BxResCUhydV1sAXFCJjUb8?filename=IAintHearNoBell.pdf">atobitt - 07-21-21 - I Ain't Hear No Bell</option>
              <option value="https://ipfs.io/ipfs/QmSvZkP1Nor2YF73zX6KGqtcHAnxh7yLW5JoJErb1Dk8cm?filename=TheShellGame.pdf">augrr - 04-21-21 - The Shell Game</option>
              <option value="https://ipfs.io/ipfs/QmTbreGAFy2zwQppmngTZGc7HWkcM7DpaVQP6RK9tXrFnn?filename=HedgeFundsStoleTheAmericanEconomy.pdf">AvidTreesFan - 05-19-21 - Hedge Funds Stole the American Economy</option>
              <option value="https://ipfs.io/ipfs/QmTE3qnKcN8NSgcnspF9Y6RDSpt1ydHmHf9LgcvCqaPjen?filename=BillionaireBoysClub.pdf">BadassTrader - 06-14-21 - The Billionaire Boys Club (Parts 1-10)</option>
              <option value="https://ipfs.io/ipfs/QmSoG8mLyz8y55PuyKMvScM3iLq5hT5pCZdSECaDvoZAqG?filename=CitadelHasHostages.pdf">Bladeace - 07-06-21 - Citadel Has Hostages</option>
              <option value="https://ipfs.io/ipfs/QmZTPhT1WNUePYRcP1zpKpFUAfT5xvMf8fupEXpraiT6aR?filename=TheWargameTheory.pdf">Blanderson_Snooper - 04-21-21 - The Wargame Theory</option>
              <option value="https://ipfs.io/ipfs/QmTxZKJh8f9eBu2GUtfcMM7mXGPAf6GZA17nCkg21tmpCx?filename=HandbookOfCulturalDueDiligence.pdf">Blanderson_Snooper - 05-21-21 - Handbook of Cultural Due Diligence</option>
              <option value="https://ipfs.io/ipfs/QmV8FFhQaMRWW6PLb4FLsf3YKEjWLXdErvBFsFeLdnL6Lp?filename=TheInfinityPool.pdf">BluPrince - 04-12-21 - The Infinity Pool</option>
              <option value="https://ipfs.io/ipfs/QmR8LJUeCgdX3dqCxWv1mpCspYM1dge7b9uqvKBkp9P7Xs?filename=CollectionOfUpdatesFTDsAndCycles.pdf">bobsmith808 - 06-05-21 - Collection of Updates: FTDs and Cycles</option>
              <option value="https://ipfs.io/ipfs/QmdcfbiqjMdWNNs8spnSsguEsjTHBHqPv7aWKNQ1Rg7KjP?filename=SubmittedThisDDToTheSECIPresentCTC.pdf">bobsmith808 - 12-17-21 - Submitted this DD to the SEC: I Present, CTC</option>
              <option value="https://ipfs.io/ipfs/Qmb2n1DH5MLn38qjGKZuhSNYHMGXHpm9aM3wHMNeKAhxrj?filename=CompendiumOfWrinkles.pdf">bobsmith808 - 01-14-22 - Compendium of Wrinkles: Correlating Different Theories</option>
              <option value="https://ipfs.io/ipfs/QmVbj1bR79huwW364YYhs8kEquBXgaTCPg9XEcPt2aYbQR?filename=GMEPricesAreSuppressed.pdf">broccaaa - 03-15-21 - GME Prices are Supressed</option>
              <option value="https://ipfs.io/ipfs/QmUfcJ2mRuz33Ww9rsnpXkfzvQHYEWxELDcX6ai9X4JXtg?filename=TheNakedShortScam1.pdf">broccaaa - 03-30-21 - The Naked Short Scam I: Revealed</option>
              <option value="https://ipfs.io/ipfs/Qmc2SFxFMdyfoJvvmnDJbaKBL4UsHTmywbiioM1AMWJnNv?filename=TheNakedShortScam2.pdf">broccaaa - 04-30-21 - The Naked Short Scam II: Using ETFs</option>
              <option value="https://ipfs.io/ipfs/QmSQokWtbveEVKHr3bWK4NrNaJgvuuAoATzDVg8v1PW1zs?filename=TheNakedShortScam3.pdf">broccaaa - 04-21-21 - The Naked Short Scam III: In Numbers Part Un</option>
              <option value="https://ipfs.io/ipfs/QmXMQqPwMCDB5qsE2VjwsSYRYv2ESynC5SaQgmepeNyinF?filename=TheNakedShortScam4.pdf">broccaaa - 06-21-21 - The Naked Short Scam IV: In Numbers Part Duex</option>
              <option value="https://ipfs.io/ipfs/QmRxThnCRroZBWBysFAW6kfPcAyXhgGfXQLnt8UrwoBLU5?filename=TheStartOfSwaps.pdf">broccaaa - 08-25-21 - The Start of the Swaps</option>
              <option value="https://ipfs.io/ipfs/QmdeuzskrA9g28h1YXVLnNLpQLsMh1oZQXawzFVUeZiSxN?filename=SwappingRegForOffshoreRisk.pdf">broccaaa - 08-26-21 - Swapping Regulations for Offshore Risk</option>
              <option value="https://ipfs.io/ipfs/QmeBiDVpwPaq858SQrtDorBkp6W1Yu7eP9Mwqz7aELpa7q?filename=SteviePortraitofaHedgeFundDouchebag.pdf">broviet_v2 - 07-01-21 - Stevie: Portrait of a Hedge Fund Douchebag</option>
              <option value="https://ipfs.io/ipfs/Qmec4Bn717HJCpWMtmX65VPU98RXr3jP7wH5F9pYzQvoQT?filename=TheOriginOfApe.pdf">ButtFarm69 - 12-2-21 - The Origin of Ape: A Historical DD</option>
              <option value="https://ipfs.io/ipfs/QmSdhuTR8Ke2kMBn345EmdbKPrKYdFtnChKUPoMVeU74kt?filename=SuperStonkMOASSFAQ.pdf">Bye_Triangle - 03-13-21 - SuperStonk MOASS FAQ</option>
              <option value="https://ipfs.io/ipfs/QmWi2VtYzqz7jhA9PoSEY9xfoXrKEM1F8KbczSNNtY7LP1?filename=WhyAreWeTradingSideways.pdf">c-digs - 04-05-21 - Why Are We Trading Sideways?</option>
              <option value="https://ipfs.io/ipfs/QmP5fcgBYCsPuTGxU1XRpuyWrq2cZUCZ1DRMKmSHBhsAzb?filename=TheLongCon.pdf">con101smd - 06-22-21 - The Long Con: Markets are Frothing With Liquidity</option>
              <option value="https://ipfs.io/ipfs/QmYohGtAvPnFEGE2uoWMTaawHPwvumBACXAtT2a3QfgA8k?filename=ThroughTheLookingGlass.pdf">con101smd - 06-28-21 - Through the Looking Glass</option>
              <option value="https://ipfs.io/ipfs/QmXswYjmmGtptTdp5SdURxYuwtwiB5nBT4tt6LdZZB3kHW?filename=AllShortsMustCover1.pdf">Criand - 05-09-21 - All Shorts Must Cover: Entering the Danger Zone I</option>
              <option value="https://ipfs.io/ipfs/QmPyD8BAkC1XmnvcX1NjnRtPxTGbAGieMTzD6uqfEYprSY?filename=EstimatedTheCurrentSI.pdf">Criand - 05-13-21 - I've Estimated the Current SI%</option>
              <option value="https://ipfs.io/ipfs/QmcY67yDeKvGXEVEgqNmuYCBMkycp6GCfH4pxH6FzvVFb4?filename=AllShortsMustCover2.pdf">Criand - 06-09-21 - All Shorts Must Cover: Entering the Danger Zone II</option>
              <option value="https://ipfs.io/ipfs/QmaCQLPDJ8AXTJtFMeyj16HH5pAHQgyutv5gpiHTQfmX1i?filename=TheBiggerShort.pdf">Criand - 06-15-21 - The Bigger Short</option>
              <option value="https://ipfs.io/ipfs/QmW2K4D8UeKLQBNjnV7Y9XSHG96AK7LvnzbAVPB3V2mcWq?filename=FedIsPinnedInACorner.pdf">Criand - 06-21-21 - The Fed is Pinned into a Corner</option>
              <option value="https://ipfs.io/ipfs/QmNyWGCVJd5dYofQQnN2kZ5SViskb2shcabQY7bzLFmus6?filename=BlackMonday.pdf">Criand - 06-27-21 - Black Monday</option>
              <option value="https://ipfs.io/ipfs/QmZ5TzfK1ERv7iUgbpC2zGb7HcGaogCvY14tdFwkyf7KV9?filename=AreFuturesAndSwapsTheSecretSauceToPriceMovement.pdf">Criand - 08-12-21 - Are Futures & Swaps the Secret Sauce to Price Movement?</option>
              <option value="https://ipfs.io/ipfs/QmS38qF5V5kjkXj4AvdwuszqFZzg6cCA2uqomTrwmoP4gN?filename=TheTheoryOfEverything.pdf">Criand - 08-24-21 - The Theory of Everything</option>
              <option value="https://ipfs.io/ipfs/QmS3QPKU5yHypNwjCb9CnF3Z2cYgS67MNjSZ8idaCeb6vW?filename=DRSIsTheKeyToMOASS.pdf">Criand - 09-16-21 - DRS is the MOASS Key Handed on a Golden Platter</option>
              <option value="https://ipfs.io/ipfs/QmbVvq1LYpD87FcDDmie2poGZQiBtTtexVEhBzpvtG9aFQ?filename=Kenny-TrustsDeathDivorce.pdf">CruxHub - 01-18-22 - Kenny: Trusts,  Death, and Divorce</option>
              <option value="https://ipfs.io/ipfs/QmNVK5Kd5e3BKTiwnx6JMqF923D3iErU2n9iLC8ASvkvAf?filename=AviationBackedSecurities.pdf">csmbird - 07-21-21 - Aviation (and other) Backed Securities DD</option>
              <option value="https://ipfs.io/ipfs/QmURsF6AVGF9LECSWzUuVgKJ2FPEabfR5yeWFLzgLmTiNi?filename=TransferringSharesToComputerShare.pdf">da_squirrel_monkey - 09-12-21 - Transferring Shares to ComputerShare</option>
              <option value="https://ipfs.io/ipfs/QmVbhUxYxs8suPTxwiUNxgMLhX4cgSEVZ4ed4BqXv8hjGY?filename=BeingRichIsEasyStayRichIsnt.pdf">damselindistress - 05-03-21 - Being Rich Is Easy, Staying Rich Isn't</option>
              <option value="https://ipfs.io/ipfs/QmPNv1m8CdR6o7pZc8562ne7cP1W4pLUMnJNCAVUk8XuJB?filename=SomeOfYouArentReadyToBeRich.pdf">deepfrieddonkeydick - 04-28-21 - Some Of You Aren't Ready To Be Rich</option>
              <option value="https://ipfs.io/ipfs/QmUQSmfAYabBvTGHskLMuFCBzcLDJygqqBEJHc6yTZyHiu?filename=TheBucketShort.pdf">Digitlnoize - 07-30-21 - The Bucket Short</option>
              <option value="https://ipfs.io/ipfs/QmWWfyVVBhu3vnw2EytWnJf1q9Eyw6kwbpBGjXcyakgJLg?filename=InflationTheMatch.pdf">dismal-jellyfish - 06-11-21 - Inflation: The Match Lighting the Rocket</option>
              <option value="https://ipfs.io/ipfs/QmW4hnn1YyMNaUnTtJv6fncX1y1TLPXFUS8GExQvEyyAnZ?filename=WhoIsAbusingXRT.pdf">djk943 - 01-13-21 - Who Is Abusing XRT?</option>
              <option value="https://ipfs.io/ipfs/QmaUwVBXQujFp4Vnh99RB5wRKniVSX1P4m2whb5NfseEh3?filename=TheyStillHaventToldYou.pdf">djsneak666 - 01-12-21 - They Still Haven't Told You</option>
              <option value="https://ipfs.io/ipfs/QmajzqhSJqaH9SNvabQ3Qxum2CCkEfAwdprM4K36paexwj?filename=DLauer1.pdf">dlauer - 06-21-21 - Cost Basis & Trade Price Issues | SI No. & Naked Shorting</option>
              <option value="https://ipfs.io/ipfs/QmS5GrNGWzAE9t8U1b6ZAAyMXGDz8SxyMr7qQhkSauiryx?filename=DLauer2.pdf">dlauer - 06-24-21 - Dark Pools, Price Discovery, & Short Selling/Marking</option>
              <option value="https://ipfs.io/ipfs/QmZ17MUfmU88oM7zV12A2fqf9ptTEHmRhNspczqnMnxEie?filename=DLauer3.pdf">dlauer - 07-08-21 - FINRA! FINRA! FINRA!</option>
              <option value="https://ipfs.io/ipfs/QmYe8AALufpkLC5z7vB2hrECBNyyzq772yzhU2oGkej699?filename=DLauer4.pdf">dlauer - 08-11-21 - On Glitches | Odd Lots</option>
              <option value="https://ipfs.io/ipfs/Qmf66EPNsEftXgcsjzmsN5K8wQdJHdiPJ9xJfdJXVURPHo?filename=DLauer5.pdf">dlauer - 10-18-21 - Citadel's Lawsuit Against the SEC</option>
              <option value="https://ipfs.io/ipfs/QmShNdWaHz86iACBuBTDUz1T76eJB4DVuJdBGyqnzv7CZE?filename=DLauer6.pdf">dlauer - 11-02-21 - Order Routing Inducements</option>
              <option value="https://ipfs.io/ipfs/QmS6UjdwmYYaXwi5yHDQCWhjLzQSJ5PLRibMnMrSL3Db3n?filename=DLauer7.pdf">dlauer - 11-18-21 - Self Regulation, Complexity, and Market Structure</option>
              <option value="https://ipfs.io/ipfs/QmQg4Pda4Z5qg8dMjsXCA1jPC5nPdpe9mnyA6ZGvxRaKix?filename=AttorneysAndYou.pdf">dodecaphonicism - 04-27-21 - Attorneys And You: Guide to the Newly Rich</option>
              <option value="https://ipfs.io/ipfs/QmUuTr9ZeUAxy2k4Lt7sKZq49ZPN5jwLnq9AijuMyYP7wu?filename=WhenYouWishUponAStar.pdf">Doom_Douche - 09-23-21 - A Complete Guide to Computershare</option>
              <option value="https://ipfs.io/ipfs/QmZ2mEYGgEnHRJyitNwVsiSnMBTDgzZvMyjDGrqvrqAgho?filename=PredatoryHumanBehaviors.pdf">Eff_Robinhood - 03-14-21 - Predatory Human Behaviors & Counter-Tactics</option>
              <option value="https://ipfs.io/ipfs/QmbG63wh1E71TrHthDdJ8ChaMYPHgMf1ugLWVCeHujNeQY?filename=WhatYouShouldDoAfterMOASS.pdf">einfachman - 06-27-21 - What You Should Do After MOASS</option>
              <option value="https://ipfs.io/ipfs/QmQCVtjqmBFfb5iiqbGp4U8oWW57r2Lrq31w7fXyuXvXFR?filename=ZombieStocksAreAResultOfSHFsCovering.pdf">einfachman - 09-05-21 - Zombie Stocks Spiking Result of SHFs Covering</option>
              <option value="https://ipfs.io/ipfs/QmQNDAczgWhBE41fH66uv6hWkUyWaHqMpekesVfJYhda43?filename=MountainsOfGMESyntheticShares.pdf">einfachman - 11-19-21 - Mountains of GME Synthetic Shares</option>
              <option value="https://ipfs.io/ipfs/QmX7W5xLwsVc4YzmoBQbCzHoQKJPQHpRikAdTcThXJAh9Q?filename=ApeHistorySeries1.pdf">Elegant-Remote6667 - 07-17-21 - Ape History Series: Backing Up All GME Subs</option>
              <option value="https://ipfs.io/ipfs/Qme18DhbhTTwbeSw6ngUTU38aRUgGsKZfwYbR6cn4yExpt?filename=ApeHistorySeries3.pdf">Elegant-Remote6667 - 01-02-22 - Ape History Series: MSM UltraFUD</option>
              <option value="https://ipfs.io/ipfs/QmPnFtneN5vypyXRLkQzgy74nK6xB1cYN3WYUdEs3DsiQp?filename=ApeHistorySeries2.pdf">Elegant-Remote6667 - 01-08-22 - Ape History Series: MSM Negative Press</option>
              <option value="https://ipfs.io/ipfs/QmQ3nvuJaizgo6ghYNS3wx8NdFti1yFARJRf9o3CXpGv16?filename=DictionaryForTheNon-Ape.pdf">endvisible - 10-29-21 - Dictionary for the Non-Ape</option>
              <option value="https://ipfs.io/ipfs/QmZoyC2iQ6quuSFF9EcZzGbV8bqQJsN42nWY8PWaQ2BCAo?filename=BlackRockAndTheGreatReset.pdf">exceedingly - 07-18-21 - BlackRock and the Great Reset</option>
              <option value="https://ipfs.io/ipfs/QmbDdHYKprzGAfU77KJvs6d1eSnRVWg6c1o6aijvAep2jx?filename=Over-votingPreventionExposed.pdf">Exotic-Tooth8166 - 06-10-21 - Over-Voting Prevention Exposed!</option>
              <option value="https://ipfs.io/ipfs/QmfShzfSBHEFELnxNLaAqiUJpKefVXkjbAvHKwMRJjaw2j?filename=GMEEndgame.pdf">FatAspirations - 01-12-21 - GME EndGame (Parts 1-6)</option>
              <option value="https://ipfs.io/ipfs/QmW5denvesjUL8hgAxGpVem15XeBoEnVtqKd4tyYRqg2jb?filename=AnatomyOfAShortSqueeze.pdf">franciscogil90 - 04-11-21 - Anatomy of a Short Squeeze</option>
              <option value="https://ipfs.io/ipfs/QmfLQY5yAETwmmCJG68DMd7KLLdqYGJU77fLWdV5EZ63LY?filename=Covid19TheCaresActGreed.pdf">freadom6 - 07-12-21 - COVID-19, The Cares Act, and Undeniable Greed</option>
              <option value="https://ipfs.io/ipfs/QmbpQjLFjai5hvGqGXrWebw9haXgAKFeXZUxaQZqPcMjif?filename=CitadelUsedBailoutMoneyToShortGME.pdf">freadom6 - 07-23-21 - Citadel Used Bailout Money to Short GME</option>
              <option value="https://ipfs.io/ipfs/QmPqBrmg1BdDHRqc5JhiurXYoW8ZXag47nddTyvtMwk3wU?filename=TheShortGameExposed.pdf">freadom6 - 10-05-21 - The Short Game Exposed</option>
              <option value="https://ipfs.io/ipfs/QmZiNQr84WfZaz9vykCJDFoDAUyvWJGtShraxZcxwUy92p?filename=CLOvierfield.pdf">freadom - 01-07-22 - CLOverfield</option>
              <option value="https://ipfs.io/ipfs/QmQ75VyF6LfMa8QTo7TXmp2nUoTJmspBpDK7p7asLAfZRq?filename=TheMotherOfAllGMESummaries.pdf">frugihoyi - 04-04-21 - The Mother Of All GME Summaries</option>
              <option value="https://ipfs.io/ipfs/QmVtxgt8uhwv7dBT7DT7Sgezbs4D9rMRf68M3cBckzn1Jc?filename=GoogleConsumerSurveyofGMEOwnership.pdf">Get-It-Got - 06-17-21 - Google Consumer Survey of GME Ownership</option>
              <option value="https://ipfs.io/ipfs/QmTd1bFmQmJbSpU3B7D1DCG7fu1VdxNFctCHt2rQ3pnvSD?filename=MoreZombieCompanyTalk.pdf">Get-It-Got - 09-06-21 - More Zombie Company Talk</option>
              <option value="https://ipfs.io/ipfs/QmVuYPFnmwtjqtPhZLFf9SWLkSCHCC7JdSPGnrTKDiTyAp?filename=BankOfAmericaGameStopDD.pdf">gfountyyc - 06-04-21 - The Complete Bank of America GameStop DD</option>
              <option value="https://ipfs.io/ipfs/QmcpSELM6RHU2ccDZ7SzKWMUkst735JHWxdVC3ApS4MPwf?filename=BankOfAmericaQuarterlyUpdate.pdf">gfountyyc - 11-03-21 - Bank of America Quarterly Update</option>
              <option value="https://ipfs.io/ipfs/QmbvxhBrBbzo6pA8V9S4q57H4e8jr5b1oLoEqzhqrphbcu?filename=GMEDDcomJan21Report.pdf">GMEdd.com - 01-20-21 - January 2021 Report </option>
              <option value="https://ipfs.io/ipfs/QmaniwqEMD4wZGeNMn1QBeANeLi4LFA3UCFzNfhw8MpBfF?filename=GMEDDcomNov21Report.pdf">GMEdd.com - 11-16-21 - November 2021 Report </option>
              <option value="https://ipfs.io/ipfs/QmZwakUHcta6kAzJfonZNBY9JFSRQPwqWkbrJ8p9vsob7e?filename=InfinityWarFinalExit.pdf">gherkinit - 05-30-21 - Infinity War: The Final Exit</option>
              <option value="https://ipfs.io/ipfs/QmWtYMLUNcmzPP1aNmpBV2dLa8EbE46SjU5KekYgjvbYPP?filename=MOASSTheTrilogy.pdf">gherkinit - 11-21-21 - MOASS: The Trilogy (Books I-II-III)</option>
              <option value="https://ipfs.io/ipfs/QmUj62Y1nVFDPzg9TTU8TpDWqM7TLoHvqNmzSxdGrxcfSr?filename=StudentLoanAssetBackedSecurities.pdf">happyegg1000 - 12-25-21 - Student Loan Asset Backed Securities</option>
              <option value="https://ipfs.io/ipfs/QmWKj25dza5GP1vK15iW9YE7CQ9ThryEoNRV6rkhp6YnVM?filename=AutoLoansBubbleEddition.pdf">happyegg1000 - 12-28-21 - The Big Short Again: Auto Loans Bubble Edition</option>
              <option value="https://ipfs.io/ipfs/QmVk1n9oUQuURQ95EekGo7L2yqeLWoERCxjFHVk1EuxdSw?filename=TheMOASSThesis2.pdf">HCMF_MaceFace - 06-10-21 - The MOASS Thesis: Summary 2.0</option>
              <option value="https://ipfs.io/ipfs/QmeAvCevNWo593z2APU5UapvoXAFf9gWdAbFp53PvhD1pS?filename=BigChangesComingCouldAffectOTCZombieStocks.pdf">hmhemes - 09-05-21 - Big Changes Coming Could Affect OTC Zombie Stocks</option>
              <option value="https://ipfs.io/ipfs/QmYKHPkbKX91thmNN6aA1GsgmhGB8cgWyuZ6Lpe5y5TMjE?filename=TheIliadOfGME.pdf">HomeDepotHank69 - 03-21-21 - The Iliad Of GME</option>
              <option value="https://ipfs.io/ipfs/QmW6eFL1SyTsayBZR4h36xiCVcMAWPtkp2tkAbDpesw97K?filename=HelpingYouUnderstand.pdf">HomeDepotHank69 - 05-03-21 - Why MM/HFs Would Take These Crazy Risks</option>
              <option value="https://ipfs.io/ipfs/QmW6eFL1SyTsayBZR4h36xiCVcMAWPtkp2tkAbDpesw97K?filename=GMETheoryOfEverything.pdf">HomeDepotHank69 - 05-06-21 - GME Theory Of Everything</option>
              <option value="https://ipfs.io/ipfs/Qmdgyux6rQZkWQ7RWkT14Ttoxu2CuK1ueFCAwh5LopNBkS?filename=HankVisitsGMEsBermudaTriangle.pdf">HomeDepotHank69 - 05-11-21 - Hank Visits GME's Bermuda Triangle</option>
              <option value="https://ipfs.io/ipfs/QmaxX3tiDQQfDK6shHknUYRCV51fisLTMwNhDL7QZQdfwj?filename=HanksBigBang.pdf">HomeDepotHank69 - 06-07-21 - Hank's Big Bang</option>
              <option value="https://ipfs.io/ipfs/QmYNpn2QRArAScRb8Ty1aNoFs8EA6PFPQnmXdwSXBhZWGB?filename=COINTELPRO.pdf">jakob_xavier - 04-16-21 - COINTELPRO Techniques</option>
              <option value="https://ipfs.io/ipfs/QmQkFFGJFLW8V7xx28teZwKPFJDAo5unfsEHquY8oYfSUG?filename=TheRealGreatestShortBurnOfTheCentury.pdf">Jeffamazon - 09-08-20 - The Real Greatest Short Burn of the Century</option>
              <option value="https://ipfs.io/ipfs/QmPjFEoC5B6K7g9nfepHshxMkwZBQvTgqvkYkqMgiAjaEx?filename=TheGameStopBigPicture.pdf">jn_ku - 01-21-21 - The GameStop Big Picture</option>
              <option value="https://ipfs.io/ipfs/QmRqceXA7hoX2AnsCoNieqR8YmB7o9GNKNCpQZLvZ4rYXR?filename=NewsBlackoutOnTheRepoLoans.pdf">jolly-conclusion - 01-03-22 - News Blackout on the Banks that got Repo Loans</option>
              <option value="https://ipfs.io/ipfs/Qma4hzzGzHrjNmypKEUU8JMChqDdUEnWWLcZjajfAgUVez?filename=IWasMissingAKeyPieceToThePuzzle.pdf">jsmar18 - 03-28-21 - I Was Missing A Key Piece To The Puzzle</option>
              <option value="https://ipfs.io/ipfs/QmUH4dM48B9RDoQ18oUjucfK1Fm5UytZsLBjtqVzjgoFVR?filename=HowFinancialInstitutionsAreUsingUSTreasurySecurities.pdf">jsmar18 - 04-02-21 - How Financial Institutions are Using US Treasury Securitiies</option>
              <option value="https://ipfs.io/ipfs/QmVHrvDxRiJ5u9YABBeTadaVc5QBp35JkY37JnwRAFWMqL?filename=MacroeconomicsTheGMEConnection.pdf">jsmar18 - 08-14-21 - Macroeconomics: The GME Connection</option>
              <option value="https://ipfs.io/ipfs/QmSSGC4FnYm3WzKVEMcoRndkmoQ3p3XEUycGhopHFwrkqm?filename=AmazonBainCitadelBustOutCompetition.pdf">jumpster81 - 05-31-21 - Amazon, Bain, and Citadel Bust Out the Competition</option>
              <option value="https://ipfs.io/ipfs/QmUMrF1Tu5aB1Z5neGS44revqcPj6gFump9C7RzyaJ5JfP?filename=TheDTCCIsFinished.pdf">JustBeingPunny - 07-02-21 - The DTCC Is Finished</option>
              <option value="https://ipfs.io/ipfs/QmR1oZW1obTLEjUyVF93R4pi4WEQ7WXfmsP1Ggqp952msV?filename=WhereAreTheShares.pdf">LeaveMeAnon - 06-05-21 - Where are the Shares?</option>
              <option value="https://ipfs.io/ipfs/QmbMiGbZJHjQ9kKWwsRB8kyUYF34p1a5Yvipywhrzj5Hev?filename=FTDCycleResetRTheory.pdf">Leenixus - 05-16-21 - FTD Cycle Reset Theory</option>
              <option value="https://ipfs.io/ipfs/Qmbs9gEvmZCeHvLtCNFtWNBHNbCufTWHe72LUJTwbuHooP?filename=CyclesDTCC-NSCCStuff.pdf">Leenixus - 08-10-21 - Cycles & DTCC / NSCC Stuff</option>
              <option value="https://ipfs.io/ipfs/QmPdhcpsGTTjJEVPnFYDACGX2FWmi1gsg2uuuKnEW6CVxJ?filename=DarkpollAndOTCTrades.pdf">Leenixus - 08-19-21 - Darkpool & OTC Trades: GME & XRT Visualized</option>
              <option value="https://ipfs.io/ipfs/QmX9cBTGp8JDHyU8hy5TTq996TZDuJQvB2hreBFBohkJpN?filename=GMEandEvidenceOfPredictableCycles.pdf">Leenixus - 11-15-21 - GME & Evidence of Predictable Cycles</option>
              <option value="https://ipfs.io/ipfs/QmUaGn3AYZUKhZJ8dGuWA7VLiVB4H4d678oC4CjZpnqYUX?filename=NextGMEOptionClearingCycle.pdf">Leenixus - 01-10-21 - The Next GME Option Clearing Cycle & Bull Run</option>
              <option value="https://ipfs.io/ipfs/QmasoigYyejBf9TkDT7w5zA28qdzz8z4TjpCLvAxW3Gemi?filename=WhyMOASSisNotAStraitLine.pdf">Magistricide - 05-23-21 - The MOASS Is Not A Straight Line</option>
              <option value="https://ipfs.io/ipfs/Qmems8khtKbegozAY2ftk5ka4iMM9r8fKM9rZ41Bjyyo8X?filename=CriticalThinking.pdf">Makataui - 04-18-21 - Critical Thinking: From a Psychology Academic</option>
              <option value="https://ipfs.io/ipfs/QmUgrMNZ3vo9Z255Tarh5UogzqgsgPAE32WpV7niwzxmGB?filename=VarianceSwapsCanExplainOI.pdf">MauerAstronaut - 11-07-21 - Variance Swaps can Explain OI in Far OTM Puts</option>
              <option value="https://ipfs.io/ipfs/QmUes4X3trrBQ3hfR4etDsmnmx6iBncgEKswxdfPqLjZTL?filename=LivingThroughAnExpiramentbytheFed.pdf">MissingThePoint - 01-30-21 - We're Living Through An Expirament by the Fed</option>
              <option value="https://ipfs.io/ipfs/QmRKGpMXSvtx3vyEG1rc51z7uN6XUkBNumFdZnTgedVGfU?filename=SimianGameTheory.pdf">mrrippington - 05-07-21 - Simian Game Theory</option>
              <option value="https://ipfs.io/ipfs/QmTed6c4sJoWVbVDaeoA8MnaEfjgcADpFqBMBZsPBT6dmn?filename=GMEExitStrategy.pdf">NHNE - 03-08-21 - GME Exit Strategy: Using MACD and STOCH RSI Indicators</option>
              <option value="https://ipfs.io/ipfs/QmeTuGfhXXyXiSvFmPxwe4bN8e1wkuUS3BCQaAABoSLenA?filename=CitadelMayCrashTheMarket.pdf">NorthBalance - 03-25-21 - Citadel May Crash the Market</option>
              <option value="https://ipfs.io/ipfs/QmVyMVQN4dFkhon6R3iiMer3RGDXrgd83jftgibxZ36CwP?filename=ManagingBehavior.pdf">oaf_king - 03-07-21 - Managing Behavior During A Short Squeeze</option>
              <option value="https://ipfs.io/ipfs/QmTLakHsLZLK9Rm34F41V6fMRr8tJSaR67XzYRdHMxT4jT?filename=TheDollarEndgame1.pdf">Peruvian_Bull - 06-21-21 - The Dollar Endgame: Part 1 "A New Rome"</option>
              <option value="https://ipfs.io/ipfs/QmZa2owk6hAU1JnqsjEr2Yu1kZuMKEFKbxXhyonz8m4NUZ?filename=TheDollarEndgame2.pdf">Peruvian_Bull - 06-24-21 - The Dollar Endgame: Part 2 "The Ouroboros"</option>
              <option value="https://ipfs.io/ipfs/QmXa2UqtMBdoGmd1xHb4TukkTdN2oZvaSKuGjTXmwKJmsB?filename=TheDollarEndgame3.pdf">Peruvian_Bull - 07-09-21 - The Dollar Endgame: Part 3 "The Money Machine"</option>
              <option value="https://ipfs.io/ipfs/QmUP7LKeYeCPi5JgLb4SMQMr9Ry4M8JHBvYemVwBzLMK9B?filename=TheDollarEndgame4.pdf">Peruvian_Bull - 09-13-21 - The Dollar Endgame: Part 4 "At World's End"</option>
              <option value="https://ipfs.io/ipfs/QmbmJXG6JiRa5CxY3mT4yRunVt7DMZije5mWsR2fbYeovU?filename=ReverseRepoHitting1T.pdf">Peruvian_Bull - 08-04-21 - Reverse Repo at $1T Just the Tip of the Iceberg"</option>
              <option value="https://ipfs.io/ipfs/QmVP3X2pLmHCGuDoTUTdd2mHkE4nJ7XyjHybfkMwGJymvK?filename=TheBigPictureDueDiligence.pdf">plants69 - 04-17-21 - The Big Picture Due Diligence</option>
              <option value="https://ipfs.io/ipfs/QmXQqugWPDFtbmKfHQiRpVikdkvCiPPsRCzRUJ3F4VZSBQ?filename=TheMostManipulatedStock.pdf">plants69 - 04-23-21 - The Most Manipulated Stock</option>
              <option value="https://ipfs.io/ipfs/QmR4BbarZ6872H6aw3vDokotu4Rr7jV899ieDxA2tonkPv?filename=TheImminentLiquidityCrisisAndReverseReposUsage.pdf">plants69 - 05-20-21 - The Imminent Liquidity Crisis & Reverse Repos Usage</option>
              <option value="https://ipfs.io/ipfs/QmSSGC4FnYm3WzKVEMcoRndkmoQ3p3XEUycGhopHFwrkqm?filename=CoordinatingToKeepGMEFromTheNYSE.pdf">plants69 - 08-16-21 - Coordinating To Keep GME from Threshold Securities List</option>
              <option value="https://ipfs.io/ipfs/QmWkwWgspW56mQU5inso3FVAwDSKw54i6Ma6VQgc7Xu2Dj?filename=ItIsntJustGME.pdf">PM_ME_YOUR_ZeU - 03-23-21 - It Isn't Just GME</option>
              <option value="https://ipfs.io/ipfs/QmbW2iooz7e72PCnMzPENLpYQWH8QdrwUjysrRZGJnLT9w?filename=FrogInTheIceCreamMachine.pdf">Prof_Dankmemes - 12-04-21 - Frog in the Ice Cream Machine</option>
              <option value="https://ipfs.io/ipfs/QmczFYpceqUKp9RDgy7K1wfxSs7jVk2aNuS8AzU4mWzKvV?filename=TheAlgorithhm1.pdf">pwnwtfbbq - 07-08-21 - The Algorithm: I Think I Figured It Out</option>
              <option value="https://ipfs.io/ipfs/QmacS9CWCQBxCupE7HQgiBaBnLDYLJqjcdadGmHs5Bh8pr?filename=TheAlgorithhm2.pdf">pwnwtfbbq - 08-02-21 - The Algorithm: Has Been Doing This Shit For Years</option>
              <option value="https://ipfs.io/ipfs/Qmb9pXYptLo1EdZNmkkReQU4XTjThUWesKGGADhfAJ46Mr?filename=TheAlgorithhm3.pdf">pwnwtfbbq - 11-18-21 - The Algorithm: The Ouroboros</option>
              <option value="https://ipfs.io/ipfs/QmYt4Dmn51GAyix87vUfhpbFpKV3pj866keH6niAiKDNnu?filename=ChaosTheory1.pdf">sharkbaitlol - 04-11-21 - Chaos Theory 1: The Everything Connection</option>
              <option value="https://ipfs.io/ipfs/QmeMdeNP2u8KDj1GmGaS1HV7ZEFYUfKmyU7dZoCDV6GW4j?filename=ChaosTheory2.pdf">sharkbaitlol - 04-12-21 - Chaos Theory 2: Conflicts of Interest</option>
              <option value="https://ipfs.io/ipfs/QmbDrmbukvfjBMxZf6ibvNGr8hvpNZDbwmtevyXZjNtbfQ?filename=ChaosTheory3.pdf">sharkbaitlol - 04-16-21 - Chaos Theory 3: The Final Connection</option>
              <option value="https://ipfs.io/ipfs/QmWpFsXS6KWppCnTSVKAKtrrbauSn5V9hayGmkXecYM7gK?filename=NakedShortingADefinitiveGuide.pdf">sharkbaitlol - 06-05-21 - Naked Shorting: A Definitive Guide</option>
              <option value="https://ipfs.io/ipfs/QmPmRPiYYdocwZLUUKWQadcP3XZ3KNN3oCq49KwRjNa2Ah?filename=TheGMEWarpath.pdf">sharkbaitlol - 08-29-21 - The GME Warpath: The NFT Future</option>
              <option value="https://ipfs.io/ipfs/Qmcorf2TExF9gaDYjbrFxJwQpg1m9PLFTQZZwE2r9WPKME?filename=ShortTheNasdaqGMEDDandOthers.pdf">ShortTheNasdaq - 01-02-21 - GME: Almost-Ultimate DD and Others</option>
              <option value="https://ipfs.io/ipfs/QmXiTxyxrrVaD1ehMJzTazfnZNUJpQgTd4fkG2ks4KJnTL?filename=FinkleIsEinhorn.pdf">Slyver21 - 08-03-21 - Finkle Is Einhorn</option>
              <option value="https://ipfs.io/ipfs/QmYzXUQ81NVJpfvPQQzhMBXoDTPjEV2YNnRXfFWQePyyAV?filename=TheMOASSPreparationGuid2.pdf">socrates6210 - 04-11-21 - The MOASS Preparation Guide 2.0</option>
              <option value="https://ipfs.io/ipfs/QmT9fRudVXGprPTg9eP54UKqFDXGXqev78W7zddzjh6ra8?filename=FinancialAdvisorsTaxAttorneysCPAsandWills.pdf">soluna7827 - 04-20-21 - Financial Advisors, Tax Attorneys, CPAs, and Wills</option>
              <option value="https://ipfs.io/ipfs/QmbXqbpMf2oqMYsFGByEpgaNmnWzfL9q667QfojLM7wDmQ?filename=TheMarchToZeroLiquidity.pdf">suspicious-singer243 - 05-03-21 - The March To Zero Liquidity</option>
              <option value="https://ipfs.io/ipfs/QmeeeQsP8Y6eYJJsZoPdJAQRi4y2Fu5kCgWaks2vJm2B5y?filename=TheSunNeverSetsOnCitadel1.pdf">swede_childe_of_mine - 06-18-21 - The Sun Never Sets On Citadel: Part I</option>
              <option value="https://ipfs.io/ipfs/QmTQVNkyftCuYwruJnmx7X9G9QN2KeRpmn66hof9s9Ryzp?filename=TheSunNeverSetsOnCitadel2.pdf">swede_childe_of_mine - 07-03-21 - The Sun Never Sets On Citadel: Part II</option>
              <option value="https://ipfs.io/ipfs/QmYUQ6YUcagXzsKhG2d4N8mnbcpHtQuJqVeFCvjQpm1Z9n?filename=TheSunNeverSetsOnCitadel3.pdf">swede_childe_of_mine - 10-01-21 - The Sun Never Sets On Citadel: Part III</option>
              <option value="https://ipfs.io/ipfs/QmXViv8be8ydPPoYxNWiCo6GfvFMes7DMUXebAhg7p2ptH?filename=ZombiesOTCStocksCorrelatedWithGME.pdf">thabat - 09-04-21 - Zombies: OTC Stocks Correlated with GME</option>
              <option value="https://ipfs.io/ipfs/QmRmJu93Ln7SizSwgPWrDM9rPV5id9sNNGtzxZiKRF15ix?filename=LoopMagicCreditCitadelConnection.pdf">thabat - 09-09-21 - Loop Capital, Magic Johnson, Credit Suisse & Citadel</option>
              <option value="https://ipfs.io/ipfs/QmRZxyowT47JSNA1gVCicWVQGdiME6Jm319r7Jc1fmK33V?filename=CellarBoxing.pdf">thabat - 09-11-21 - Cellar Boxing</option>
              <option value="https://ipfs.io/ipfs/QmZiCrkq1UqwQLHQ7kzydQ4dgufAjvQaUmw3LngukFNEBd?filename=TheVolumeIsWrong.pdf">thabat - 11-04-21 - The Volume Is Wrong!</option>
              <option value="https://ipfs.io/ipfs/QmZmUBuXZPwW2QxdwkpN9N4Xa6Gga4yEZtb9Do3cj4rNxj?filename=CeilingBoxed.pdf">thabat - 11-23-21 - Ceiling Boxed</option>    
              <option value="https://ipfs.io/ipfs/QmemWSJ8vpVZLHvk8pzdbLbeYwccGkPit72G1h5SFxLCNa?filename=OneDDToRuleThemAll.pdf">TitusSupremus - 01-17-21 - One DD To Rule Them</option>
              <option value="https://ipfs.io/ipfs/QmeDjrpRz26P5KJFygHsCjmLgF4R1mHZyWuXZhgJhHPjkK?filename=ProofOfPriceSupression.pdf">TheDude0007 - 08-12-21 - Proof of Price Suppression and Its Source</option>
              <option value="https://ipfs.io/ipfs/QmeskCdcS41kucHAeiNF7WtFbPnyXpC23szbrJrDqVC8ca?filename=25ReasonsGMEsSIIsHigh.pdf">UncleZiggy - 05-09-21 - 25 Reasons GME's Short Interest is High</option>
              <option value="https://ipfs.io/ipfs/QmbrBQiErBCoqfbq8Q2Vypno9y6HF9g1bknyiK3KAJFwZe?filename=TheBigSqueeze.pdf">UncleZiggy - 06-01-21 - The Big Squeeze</option>
              <option value="https://ipfs.io/ipfs/QmewJPWQhF5D4pHdqwXF5AiMebyqfQeBx4EZHM3SBXFAZR?filename=SIIsUpwardsOf2000.pdf">Unowned-Instruction - 03-28-21 - Thesis: SI is Upwards of 2000%</option>
              <option value="https://ipfs.io/ipfs/QmRqqJwEzTWjyXhTaGmppyK4nZ2RcsXJCC76WysMpERgdh?filename=TheGameWePlay.pdf">welcometosilentchill - 07-20-21 - The Game We Play</option>
              <option value="https://ipfs.io/ipfs/QmZp7tR4KsuLktbRHoM8NTN9wtEaFAhE18VorFKTxqGqAb?filename=EvergrandOnTheBrinkOfCollapse.pdf">wetdirtkurt - 08-27-21 - Evergrande On The Brink Of Collapse</option>
              <option value="https://ipfs.io/ipfs/QmcDsjCSjgCC34A4sW5bHo63heTgKdQnEgfwTzq4W931R9?filename=VolatilityVarianceDispersionOhMy.pdf">zinko83 - 11-04-21 - Volatility, Variance, Dispersion, Oh My!</option>
              <option value="https://ipfs.io/ipfs/Qme31N5Ro2WURfFLYMqaPwwcwuq2ZN6Yvww2f2Pmk7Vzkm?filename=SuperStonkGuide1.pdf">zedinstead - 06-15-21 - SuperStonk Guide #1</option>
              <option value="https://ipfs.io/ipfs/QmXmbuffwPEfeDwyE4e5J298rqofRFnE1as86Rbi9nDgUE?filename=SuperStonkGuide2.pdf">zedinstead - 06-16-21 - SuperStonk Guide #2</option>
              <option value="https://ipfs.io/ipfs/QmSapsvp9VgPYwaExiSKnjBVJPkht8iaLQW1QHUmdVq2w7?filename=SuperStonkGuide3.pdf">zedinstead - 06-17-21 - SuperStonk Guide #3</option>
              <option value="https://ipfs.io/ipfs/QmRGNn2SaJNTeRyRjwHezAmiEqLUJkBAtD22x8owbgZaXi?filename=SuperStonkGuide4.pdf">zedinstead - 06-18-21 - SuperStonk Guide #4</option>
              <option value="http://ipfs.io/ipfs/QmcHZHwK2VRgC91VkJShNmQiF7eaa1jrqrWNysxERjsiru?filename=SuperStonkGuide5.pdf">zedinstead - 06-21-21 - SuperStonk Guide #5</option>
              <option value="http://ipfs.io/ipfs/QmNsJDMSxgri8BnBqBgmYiSR9qBaVXUAzwmixeARgWzL71?filename=SuperStonkGuide6.pdf">zedinstead - 06-22-21 - SuperStonk Guide #6</option>
              <option value="http://ipfs.io/ipfs/QmRKbEQFsY47cRLT55EE6AjyejFWDD3ZG1DKaoeQyLtcrw?filename=SuperStonkGuide7.pdf">zedinstead - 06-23-21 - SuperStonk Guide #7</option>
              <option value="http://ipfs.io/ipfs/QmUCqwMpCZqWTayq2jCUx9cYF9uhgZtKP8brrAWeontqJf?filename=SuperStonkGuide8.pdf">zedinstead - 06-24-21 - SuperStonk Guide #8</option>
              <option value="https://ipfs.io/ipfs/QmRqUkPiwBuutTVg6kyLmv4auLmmiSwe7ZWT59ew2Kf7aU?filename=SuperStonkGuide9.pdf">zedinstead - 06-25-21 - SuperStonk Guide #9</option>
              <option value="https://ipfs.io/ipfs/QmXXCtAiCGDo9g1ChQAAaUy7hNKmzqJQrN1TD84PL3ofbD?filename=SuperStonkGuide10.pdf">zedinstead - 06-28-21 - SuperStonk Guide #10</option>
              <option value="https://ipfs.io/ipfs/QmVem221NsCe2ZkzsTrDvFCj3nzuRSZNwaKnSXT6ZW6X5p?filename=SuperStonkGuide11.pdf">zedinstead - 06-29-21 - SuperStonk Guide #11</option>
              <option value="https://ipfs.io/ipfs/QmUbc6nwqhFg5orhgzkQmbXJq7WXEMGEiT3tVVpzHHyXvE?filename=SuperStonkGuide12.pdf">zedinstead - 06-30-21 - SuperStonk Guide #12</option>
              <option value="https://ipfs.io/ipfs/QmP9kaMqMcxsybLKHEyjkyy1Tf7DYcfAHgWe7MNEKDay2w?filename=SuperStonkGuide13.pdf">zedinstead - 07-01-21 - SuperStonk Guide #13</option>
              <option value="https://ipfs.io/ipfs/QmdDyezaL26qJBsbiJ9i28xgN3npsvFymNqhGGbUu6jpje?filename=SuperStonkGuide14.pdf">zedinstead - 07-02-21 - SuperStonk Guide #14</option>
              <option value="https://ipfs.io/ipfs/QmSM91V2qS3VJqaKykTeuRxKSd1kKPuXmytjkUysNLHMrd?filename=SuperStonkGuide15.pdf">zedinstead - 07-06-21 - SuperStonk Guide #15</option>
              <option value="https://ipfs.io/ipfs/Qmc1vyc5FgaqX5AU4oc3HJLQbKsAnEFByyLLkkrkmwDsyk?filename=SuperStonkGuide16.pdf">zedinstead - 07-07-21 - SuperStonk Guide #16</option>
              <option value="https://ipfs.io/ipfs/QmYHYHgvrgbaZDrdQoA1HwMddZfFbfpf8vWnp8WjEdejsq?filename=SuperStonkGuide17.pdf">zedinstead - 07-08-21 - SuperStonk Guide #17</option>
              <option value="https://ipfs.io/ipfs/QmctuwHfN28NUFTtJoNMdBsYjpYFn3muvC8rfbYgYoYzVx?filename=SuperStonkGuide18.pdf">zedinstead - 07-09-21 - SuperStonk Guide #18</option>
              <option value="https://ipfs.io/ipfs/QmULx6JubvF2vfbeZ7swvMxNR9Dc8yGAfCbWZyBbhSU2Wx?filename=SuperStonkGuide19.pdf">zedinstead - 07-12-21 - SuperStonk Guide #19</option>
              <option value="https://ipfs.io/ipfs/QmaTLw2tEhCdRKKF2wo6RuqU4T6BNk28gMKNhTPoumSzW6?filename=SuperStonkGuide20.pdf">zedinstead - 07-13-21 - SuperStonk Guide #20</option>
              <option value="https://ipfs.io/ipfs/Qmc1L72nG7XY7YD91f8zeJnwrLphRKtkRkN7HQDw6bZ7F3?filename=SuperStonkGuide21.pdf">zedinstead - 07-14-21 - SuperStonk Guide #21</option>
              <option value="https://ipfs.io/ipfs/QmZ76xX8cP9D3eistkMWK2Eu7QP36gNa6GUojzBCDdCtWd?filename=SuperStonkGuide22.pdf">zedinstead - 07-15-21 - SuperStonk Guide #22</option>
              <option value="https://ipfs.io/ipfs/QmPy2AeMYGv9mfzhtZW3RUAarucWFJ4heURARZJsycCq2h?filename=SuperStonkGeographicJuly.pdf">zedinstead - 07-26-21 - SuperStonk Geographic July</option>
              <option value="https://ipfs.io/ipfs/QmQczV2rZ4FtDypfLzVcQWD8Fnh1seXgeqcSor6wXmKFfh?filename=SuperStonkGeographicAugust.pdf">zedinstead - 08-11-21 - SuperStonk Geographic August</option>
              <option value="https://ipfs.io/ipfs/Qmf4SBepBE1qfHEtMBSLyyJjuS9qsH88qbhiiMJqUDBe7C?filename=SuperStonkGeographicSeptember.pdf">zedinstead - 09-27-21 - SuperStonk Geographic September</option>

              
              
              

            </select>
          </label>
        </form>
        <br></br>
        <iframe id="IPFS PDF LIBRARY PORTAL"
title="IPFS PDF LIBRARY PORTAL"
width="90%"
height="900"
src={this.state.value}>
</iframe>
</div>
      );
    }
  }

  export default DropDown;