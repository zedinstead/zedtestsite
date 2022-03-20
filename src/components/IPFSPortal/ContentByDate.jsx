import React, {useState} from 'react';

const ContentByDate = () => {

    let [PDF, setPDF] = useState("")


let handlePDFChange = (e) => {
  setPDF(e.target.value)
}

    let PDFs = [ 
        {
            label: "Diamond Handbook - Second Edition",
            author: "**Collection**",
            date: "",
            value: "https://ipfs.io/ipfs/QmcCtTrzgacB9PqexdP5MevpVnyuPU8dRHsM94qFnsS7uf?filename=DiamondHandbook.pdf",
            status: "active",
            url: "https://redd.it/nkcwns"
        },
        {
            label: "SuperStonk DD Mega Back Up",
            author: "**Collection**",
            date: "",
            value: "https://ipfs.io/ipfs/QmV3xXcJVQz2Taz9irG4diPqEfA17f4GeMnnDzEN3GjUC4?filename=SuperStonkDDMegaBackUp.pdf",
            status: "active",
            url: ""
        },
        {   
            label: "A Castle of Glass: Game On, Anon",
            author: "3for100Specials",
            date: "2021-07-14",
            value: "https://ipfs.io/ipfs/QmRSqHYAZbLuE1ZsRgmnxrg1oXMHzNdULFF2283efNirXP?filename=ACastleOfGlass.pdf",
            status: "active",
            url: ""
        }, 
        {
            label: "The Glass Castle",
            author: "3for100Specials",
            date: "2021-09-08",
            value: "https://ipfs.io/ipfs/QmZaifCUPSz4DGXJqdepXARQ7iHN389Ykk8oTmKcEcB5oZ?filename=TheGlassCastle.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Ultimate Guide to the Moon",
            author: "additional-ad5055",
            date: "2021-05-01",
            value: "https://ipfs.io/ipfs/QmPHV39FUJn9p5jEMnR6FWBKa8Rd5afkA7J1BVrMnovzSY?filename=UltimateGuideToTheMoon.pdf",
            status: "active",
            url: ""
        },
        {
            label: "NFTs, DAOs, WEB3 & The Metaverse",
            author: "additional-ad5055",
            date: "2021-12-28",
            value: "https://ipfs.io/ipfs/QmWyXMNLq7LaEjMwEx3xaPF2nPXbrrbmyQTbbiwtFJTtLr?filename=NFTsDAOsWEB3.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Collected Works of u/AlexanderHood",
            author: "AlexanderHood",
            date: "2021-09-21",
            value: "https://ipfs.io/ipfs/QmYuaUjfpYTSmod5r5Q8Uy2Jbzo96LFx5taTw2tsEuiU8p?filename=CollectedWorksOfAlexanderHood.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Fed and $10.8T",
            author: "ammoprofit",
            date: "2022-02-08", 
            value: "https://ipfs.io/ipfs/QmQUsWJ2ee34NL2BjwdCzfnXq59urcLr8d5cYyfb7zqeQC?filename=TheFedAnd10.8T.pdf",
            status: "active",
            url: ""    
        },
        {
            label: "Mystery of the Negative Beta Solved",
            author: "animasoul",
            date: "2021-03-25",
            value: "https://ipfs.io/ipfs/QmWBZKxeZHoeRCEyXNqtVLJ4YGViw9Ntc8EVHTr9Ktumc9?filename=MysteryOfTheNegativeBetaSolved.pdf",
            status: "active",
            url: ""
        },
        {
            label: "DD on Sears",
            author: "AnnihilationGod",
            date: "2021-09-05",
            value: "https://ipfs.io/ipfs/QmNnPHFaB7ksksgPxrcJKNE59j86i9NoCgSzZPBQ1UCnsL?filename=DDonSears.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Citadel Has No Clothes",
            author: "atobitt",
            date: "2021-03-13",
            value: "https://ipfs.io/ipfs/QmTqW7oXwVzrHvCtU1E5oKv4aAGYXMQx3RJSqTnYvd9Ctw?filename=CitadelHasNoClothes.pdf",
            status: "active",
            url: ""
        },
        {
            label: "BlackRock Bag Holders, Inc.",
            author: "atobitt",
            date: "2021-03-18",
            value: "https://ipfs.io/ipfs/QmdvuxNTBHYUdhdFZ1fvqNZeSBodjNDbko6h7dN1vv7JcZ?filename=BlackRockBagHolders.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Everything Short",
            author: "atobitt",
            date: "2021-03-30",
            value: "https://ipfs.io/ipfs/QmdFDFeBcqKqQ9yZaqp28Ja5f9u99jEM52Bsi8F8zBAN2E?filename=TheEverythingShort.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Walking Like a Duck, Talking Like a Duck",
            author: "atobitt",
            date: "2021-04-05",
            value: "https://ipfs.io/ipfs/QmWAE3nGYwRMzLdQk8oxry5MxEwNc7Wm8sA7LMYLiE8aMA?filename=WalkingLikeADuckTalkingLikeADuck.pdf",
            status: "active",
            url: ""
        },
        {
            label: "A House of Cards: Part I",
            author: "atobitt",
            date: "2021-04-21",
            value: "https://ipfs.io/ipfs/QmcCriHr7WThdshcBu9iiUNZg7rTUi6HCAodp4aVryxo2s?filename=HouseOfCards1.pdf",
            status: "active",
            url: ""
        },
        {
            label: "A House of Cards: Part II",
            author: "atobitt",
            date: "2021-05-26",
            value: "https://ipfs.io/ipfs/QmRMDAztLJ6CAjzF9Lhi3FBBkr4amM83c41L6oo7TJa1P1?filename=HouseOfCards2.pdf",
            status: "active",
            url: ""
        },
        {
            label: "A House of Cards: Part III",
            author: "atobitt",
            date: "2021-05-26",
            value: "https://ipfs.io/ipfs/QmRyKrYRJox974kSMj69hHF2KUxABsZ12PimAV5xvgvHTT?filename=HouseOfCards3.pdf",
            status: "active",
            url: ""
        },
        {
            label: "I Ain't Hear No Bell",
            author: "atobitt",
            date: "2021-07-21",
            value: "https://ipfs.io/ipfs/QmQLazwiQ5nNwESQS5xAZAn3BxResCUhydV1sAXFCJjUb8?filename=IAintHearNoBell.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Citadel Still Has No Clothes",
            author: "atobitt",
            date: "2022-02-28",
            value: "https://ipfs.io/ipfs/QmZ2eakQbXZ2XymbsTvSe6pbGi21ef5ztD7Cm8WkHgtGZJ?filename=CitadelStillHasNoClothes.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Smoking Gun",
            author: "atobitt",
            date: "2022-03-10",
            value: "https://ipfs.io/ipfs/QmeLNME9zdxuBvxoQza42eJchYRrRLxKFp2EYvP8qYrq3i?filename=TheSmokingGun.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Shell Game",
            author: "augrr",
            date: "2021-04-21",
            value: "https://ipfs.io/ipfs/QmSvZkP1Nor2YF73zX6KGqtcHAnxh7yLW5JoJErb1Dk8cm?filename=TheShellGame.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Hedge Funds Stole the American Economy",
            author: "AvidTreesFan",
            date: "2021-05-19",
            value: "https://ipfs.io/ipfs/QmTbreGAFy2zwQppmngTZGc7HWkcM7DpaVQP6RK9tXrFnn?filename=HedgeFundsStoleTheAmericanEconomy.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Billionaire Boys Club (Parts 1-10)",
            author: "BadassTrader",
            date: "2021-06-14",
            value: "https://ipfs.io/ipfs/QmTE3qnKcN8NSgcnspF9Y6RDSpt1ydHmHf9LgcvCqaPjen?filename=BillionaireBoysClub.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Citadel Has Hostages",
            author: "Bladeace",
            date: "2021-07-06",
            value: "https://ipfs.io/ipfs/QmSoG8mLyz8y55PuyKMvScM3iLq5hT5pCZdSECaDvoZAqG?filename=CitadelHasHostages.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Wargame Theory",
            author: "Blanderson_Snooper",
            date: "2021-04-21",
            value: "https://ipfs.io/ipfs/QmZTPhT1WNUePYRcP1zpKpFUAfT5xvMf8fupEXpraiT6aR?filename=TheWargameTheory.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Handbook of Cultural Due Diligence",
            author: "Blanderson_Snooper",
            date: "2021-05-21",
            value: "https://ipfs.io/ipfs/QmTxZKJh8f9eBu2GUtfcMM7mXGPAf6GZA17nCkg21tmpCx?filename=HandbookOfCulturalDueDiligence.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Infinity Pool",
            author: "BluPrince",
            date: "2021-04-12",
            value: "https://ipfs.io/ipfs/QmV8FFhQaMRWW6PLb4FLsf3YKEjWLXdErvBFsFeLdnL6Lp?filename=TheInfinityPool.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Collection of Updates: FTDs and Cycles",
            author: "bobsmith808",
            date: "2021-06-05",
            value: "https://ipfs.io/ipfs/QmR8LJUeCgdX3dqCxWv1mpCspYM1dge7b9uqvKBkp9P7Xs?filename=CollectionOfUpdatesFTDsAndCycles.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Compendium of Wrinkles: Correlating Different Theories",
            author: "bobsmith808",
            date: "2022-01-14",
            value: "https://ipfs.io/ipfs/Qmb2n1DH5MLn38qjGKZuhSNYHMGXHpm9aM3wHMNeKAhxrj?filename=CompendiumOfWrinkles.pdf",
            status: "active",
            url: ""
        },
        {
            label: "GME Prices are Supressed",
            author: "broccaaa",
            date: "2021-03-15",
            value: "https://ipfs.io/ipfs/QmVbj1bR79huwW364YYhs8kEquBXgaTCPg9XEcPt2aYbQR?filename=GMEPricesAreSuppressed.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Naked Short Scam I: Revealed",
            author: "broccaaa",
            date: "2021-03-30",
            value: "https://ipfs.io/ipfs/QmUfcJ2mRuz33Ww9rsnpXkfzvQHYEWxELDcX6ai9X4JXtg?filename=TheNakedShortScam1.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Naked Short Scam II: Using ETFs",
            author: "broccaaa",
            date: "2021-04-30",
            value: "https://ipfs.io/ipfs/Qmc2SFxFMdyfoJvvmnDJbaKBL4UsHTmywbiioM1AMWJnNv?filename=TheNakedShortScam2.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Naked Short Scam III: In Numbers Part Un",
            author: "broccaaa",
            date: "2021-04-21",
            value: "https://ipfs.io/ipfs/QmSQokWtbveEVKHr3bWK4NrNaJgvuuAoATzDVg8v1PW1zs?filename=TheNakedShortScam3.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Naked Short Scam IV: In Numbers Part Duex",
            author: "broccaaa",
            date: "2021-06-21",
            value: "https://ipfs.io/ipfs/QmXMQqPwMCDB5qsE2VjwsSYRYv2ESynC5SaQgmepeNyinF?filename=TheNakedShortScam4.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Start of the Swaps",
            author: "broccaaa",
            date: "2021-08-25",
            value: "https://ipfs.io/ipfs/QmRxThnCRroZBWBysFAW6kfPcAyXhgGfXQLnt8UrwoBLU5?filename=TheStartOfSwaps.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Swapping Regulations for Offshore Risk",
            author: "broccaaa",
            date: "2021-08-26",
            value: "https://ipfs.io/ipfs/QmdeuzskrA9g28h1YXVLnNLpQLsMh1oZQXawzFVUeZiSxN?filename=SwappingRegForOffshoreRisk.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Stevie: Portrait of a Hedge Fund Douchebag",
            author: "broviet_v2",
            date: "2021-07-01",
            value: "https://ipfs.io/ipfs/QmeBiDVpwPaq858SQrtDorBkp6W1Yu7eP9Mwqz7aELpa7q?filename=SteviePortraitofaHedgeFundDouchebag.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Origin of Ape: A Historical DD",
            author: "ButtFarm69",
            date: "2021-12-02",
            value: "https://ipfs.io/ipfs/Qmec4Bn717HJCpWMtmX65VPU98RXr3jP7wH5F9pYzQvoQT?filename=TheOriginOfApe.pdf",
            status: "active",
            url: ""
        },
        {
            label: "SuperStonk MOASS FAQ",
            author: "Bye_Triangle",
            date: "2021-03-13",
            value: "https://ipfs.io/ipfs/QmSdhuTR8Ke2kMBn345EmdbKPrKYdFtnChKUPoMVeU74kt?filename=SuperStonkMOASSFAQ.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Why Are We Trading Sideways?",
            author: "c-digs",
            date: "2021-04-05",
            value: "https://ipfs.io/ipfs/QmWi2VtYzqz7jhA9PoSEY9xfoXrKEM1F8KbczSNNtY7LP1?filename=WhyAreWeTradingSideways.pdf",
            status: "active",
            url: ""
        },
        {
            label: "World War Whale",
            author: "choompop",
            date: "2021-04-14",
            value: "https://ipfs.io/ipfs/QmdLEH9N9wyV5CLbKzkciG8rYyRuYTaTDPEs6AWDQRB2jx?filename=WorldWarWhale.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Final Date",
            author: "choompop",
            date: "2022-02-23",
            value: "https://ipfs.io/ipfs/QmZrQa7D54vyRskFCSz4ecUDHUuq8skPj7xEo5GU4qLjfW?filename=TheFinalDate.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Moonwalk - The UNO Reverse Card",
            author: "choompop",
            date: "2022-02-24",
            value: "https://ipfs.io/ipfs/QmYseMLBf7cEywzpQqRXtiRJQyVa335gTpqq6YJvD14WyQ?filename=UNOReverseCard.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Cart Driving the Horse",
            author: "choompop",
            date: "2022-02-27",
            value: "https://ipfs.io/ipfs/QmNPYRQwwACB7wMeCrLUFxkPbzk3NVpwvp8cPetLHhxF8c?filename=CartDrivingHorse.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Long Con: Markets are Frothing With Liquidity",
            author: "con101smd",
            date: "2021-06-22",
            value: "https://ipfs.io/ipfs/QmP5fcgBYCsPuTGxU1XRpuyWrq2cZUCZ1DRMKmSHBhsAzb?filename=TheLongCon.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Through the Looking Glass",
            author: "con101smd",
            date: "2021-06-28",
            value: "https://ipfs.io/ipfs/QmYohGtAvPnFEGE2uoWMTaawHPwvumBACXAtT2a3QfgA8k?filename=ThroughTheLookingGlass.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Insert Rocket Emoji Here",
            author: "CPTHubbard",
            date: "2020-12-08",
            value: "https://ipfs.io/ipfs/QmRJXVYYCPtVVNKrF1PqpyaKQfYVmAPcevhRmrPwvNEbaD?filename=InsertRocketEmojiHere.pdf",
            status: "active",
            url: ""
        },
        {
            label: "All Shorts Must Cover: Entering the Danger Zone I",
            author: "Criand",
            date: "2021-05-09",
            value: "https://ipfs.io/ipfs/QmXswYjmmGtptTdp5SdURxYuwtwiB5nBT4tt6LdZZB3kHW?filename=AllShortsMustCover1.pdf",
            status: "active",
            url: ""
        },
        {
            label: "I've Estimated the Current SI%",
            author: "Criand",
            date: "2021-05-13",
            value: "https://ipfs.io/ipfs/QmPyD8BAkC1XmnvcX1NjnRtPxTGbAGieMTzD6uqfEYprSY?filename=EstimatedTheCurrentSI.pdf",
            status: "active",
            url: ""
        },
        {
            label: "All Shorts Must Cover: Entering the Danger Zone II",
            author: "Criand",
            date: "2021-06-09",
            value: "https://ipfs.io/ipfs/QmcY67yDeKvGXEVEgqNmuYCBMkycp6GCfH4pxH6FzvVFb4?filename=AllShortsMustCover2.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Bigger Short",
            author: "Criand",
            date: "2021-06-15",
            value: "https://ipfs.io/ipfs/QmaCQLPDJ8AXTJtFMeyj16HH5pAHQgyutv5gpiHTQfmX1i?filename=TheBiggerShort.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Fed is Pinned into a Corner",
            author: "Criand",
            date: "2021-06-21",
            value: "https://ipfs.io/ipfs/QmW2K4D8UeKLQBNjnV7Y9XSHG96AK7LvnzbAVPB3V2mcWq?filename=FedIsPinnedInACorner.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Black Monday",
            author: "Criand",
            date: "2021-06-27",
            value: "https://ipfs.io/ipfs/QmNyWGCVJd5dYofQQnN2kZ5SViskb2shcabQY7bzLFmus6?filename=BlackMonday.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Are Futures & Swaps the Secret Sauce to Price Movement?",
            author: "Criand",
            date: "2021-08-12",
            value: "https://ipfs.io/ipfs/QmZ5TzfK1ERv7iUgbpC2zGb7HcGaogCvY14tdFwkyf7KV9?filename=AreFuturesAndSwapsTheSecretSauceToPriceMovement.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Theory of Everything",
            author: "Criand",
            date: "2021-08-24",
            value: "https://ipfs.io/ipfs/QmS38qF5V5kjkXj4AvdwuszqFZzg6cCA2uqomTrwmoP4gN?filename=TheTheoryOfEverything.pdf",
            status: "active",
            url: ""
        },
        {
            label: "DRS is the MOASS Key Handed on a Golden Platter",
            author: "Criand",
            date: "2021-09-16",
            value: "https://ipfs.io/ipfs/QmS3QPKU5yHypNwjCb9CnF3Z2cYgS67MNjSZ8idaCeb6vW?filename=DRSIsTheKeyToMOASS.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Kenny: Trusts,  Death, and Divorce",
            author: "CruxHub",
            date: "2022-01-18",
            value: "https://ipfs.io/ipfs/QmbVvq1LYpD87FcDDmie2poGZQiBtTtexVEhBzpvtG9aFQ?filename=Kenny-TrustsDeathDivorce.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Aviation (and other) Backed Securities DD",
            author: "csmbird",
            date: "2021-07-21",
            value: "https://ipfs.io/ipfs/QmNVK5Kd5e3BKTiwnx6JMqF923D3iErU2n9iLC8ASvkvAf?filename=AviationBackedSecurities.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Transferring Shares to ComputerShare",
            author: "da_squirrel_monkey",
            date: "2021-09-12",
            value: "https://ipfs.io/ipfs/QmURsF6AVGF9LECSWzUuVgKJ2FPEabfR5yeWFLzgLmTiNi?filename=TransferringSharesToComputerShare.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Being Rich Is Easy, Staying Rich Isn't",
            author: "damselindistress",
            date: "2021-05-03",
            value: "https://ipfs.io/ipfs/QmVbhUxYxs8suPTxwiUNxgMLhX4cgSEVZ4ed4BqXv8hjGY?filename=BeingRichIsEasyStayRichIsnt.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Some Of You Aren't Ready To Be Rich",
            author: "deepfrieddonkeydick",
            date: "2021-04-28",
            value: "https://ipfs.io/ipfs/QmPNv1m8CdR6o7pZc8562ne7cP1W4pLUMnJNCAVUk8XuJB?filename=SomeOfYouArentReadyToBeRich.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Bucket Short",
            author: "Digitlnoize",
            date: "2021-07-30",
            value: "https://ipfs.io/ipfs/QmUQSmfAYabBvTGHskLMuFCBzcLDJygqqBEJHc6yTZyHiu?filename=TheBucketShort.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Big Liquidity Issues in the Fixed Income Markets",
            author: "dilkmud0002",
            date: "2021-01-19",
            value: "https://ipfs.io/ipfs/QmWrX4Q3HWVp62oyvxPvp5zdyXpJEm2DHUqC891EkzeA4y?filename=BigLiquidityIssues.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Robinhood Became the Sacrificial Lamb for Citadel",
            author: "dilkmud0002",
            date: "2021-01-27",
            value: "https://ipfs.io/ipfs/QmZFGQubuui856HgqFYaw5ryzFdMeQxTuF8mPVwcFzaP61?filename=RobinhoodBecameTheLamb.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Inflation: The Match Lighting the Rocket",
            author: "dismal-jellyfish",
            date: "2021-06-11",
            value: "https://ipfs.io/ipfs/QmWWfyVVBhu3vnw2EytWnJf1q9Eyw6kwbpBGjXcyakgJLg?filename=InflationTheMatch.pdf",
            status: "active",
            url: ""
        },
        {
            label: "NYSE Removed GME Data",
            author: "djk943",
            date: "2022-01-01",
            value: "https://ipfs.io/ipfs/QmUBqRCmkVFL9xBnhmtkCS7gJUjUXJf8JktKPdfxKU3iaX?filename=NYSERemovedGMEData.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Who Is Abusing XRT?",
            author: "djk943",
            date: "2022-01-13",
            value: "https://ipfs.io/ipfs/QmW4hnn1YyMNaUnTtJv6fncX1y1TLPXFUS8GExQvEyyAnZ?filename=WhoIsAbusingXRT.pdf",
            status: "active",
            url: ""
        },
        {
            label: "They Still Haven't Told You",
            author: "djsneak666",
            date: "2022-01-12",
            value: "https://ipfs.io/ipfs/QmaUwVBXQujFp4Vnh99RB5wRKniVSX1P4m2whb5NfseEh3?filename=TheyStillHaventToldYou.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Cost Basis & Trade Price Issues | SI No. & Naked Shorting",
            author: "dlauer",
            date: "2021-06-21",
            value: "https://ipfs.io/ipfs/QmajzqhSJqaH9SNvabQ3Qxum2CCkEfAwdprM4K36paexwj?filename=DLauer1.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Dark Pools, Price Discovery, & Short Selling/Marking",
            author: "dlauer",
            date: "2021-06-24",
            value: "https://ipfs.io/ipfs/QmS5GrNGWzAE9t8U1b6ZAAyMXGDz8SxyMr7qQhkSauiryx?filename=DLauer2.pdf",
            status: "active",
            url: ""
        },
        {
            label: "FINRA! FINRA! FINRA!",
            author: "dlauer",
            date: "2021-07-08",
            value: "https://ipfs.io/ipfs/QmZ17MUfmU88oM7zV12A2fqf9ptTEHmRhNspczqnMnxEie?filename=DLauer3.pdf",
            status: "active",
            url: ""
        },
        {
            label: "On Glitches | Odd Lots",
            author: "dlauer",
            date: "2021-08-11",
            value: "https://ipfs.io/ipfs/QmYe8AALufpkLC5z7vB2hrECBNyyzq772yzhU2oGkej699?filename=DLauer4.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Citadel's Lawsuit Against the SEC",
            author: "dlauer",
            date: "2021-10-18",
            value: "https://ipfs.io/ipfs/Qmf66EPNsEftXgcsjzmsN5K8wQdJHdiPJ9xJfdJXVURPHo?filename=DLauer5.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Order Routing Inducements",
            author: "dlauer",
            date: "2021-11-02",
            value: "https://ipfs.io/ipfs/QmShNdWaHz86iACBuBTDUz1T76eJB4DVuJdBGyqnzv7CZE?filename=DLauer6.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Self Regulation, Complexity, and Market Structure",
            author: "dlauer",
            date: "2021-11-18",
            value: "https://ipfs.io/ipfs/QmS6UjdwmYYaXwi5yHDQCWhjLzQSJ5PLRibMnMrSL3Db3n?filename=DLauer7.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Attorneys And You: Guide to the Newly Rich",
            author: "dodecaphonicism",
            date: "2021-04-27",
            value: "https://ipfs.io/ipfs/QmQg4Pda4Z5qg8dMjsXCA1jPC5nPdpe9mnyA6ZGvxRaKix?filename=AttorneysAndYou.pdf",
            status: "active",
            url: ""
        },
        {
            label: " A Complete Guide to Computershare",
            author: "Doom_Douche",
            date: "2021-09-23",
            value: "https://ipfs.io/ipfs/QmUuTr9ZeUAxy2k4Lt7sKZq49ZPN5jwLnq9AijuMyYP7wu?filename=WhenYouWishUponAStar.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Predatory Human Behaviors & Counter-Tactics",
            author: "Eff_Robinhood",
            date: "2021-03-14",
            value: "https://ipfs.io/ipfs/QmZ2mEYGgEnHRJyitNwVsiSnMBTDgzZvMyjDGrqvrqAgho?filename=PredatoryHumanBehaviors.pdf",
            status: "active",
            url: ""
        },
        {
            label: "What You Should Do After MOASS",
            author: "einfachman",
            date: "2021-06-27",
            value: "https://ipfs.io/ipfs/QmbG63wh1E71TrHthDdJ8ChaMYPHgMf1ugLWVCeHujNeQY?filename=WhatYouShouldDoAfterMOASS.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Zombie Stocks Spiking Result of SHFs Covering",
            author: "einfachman",
            date: "2021-09-05",
            value: "https://ipfs.io/ipfs/QmQCVtjqmBFfb5iiqbGp4U8oWW57r2Lrq31w7fXyuXvXFR?filename=ZombieStocksAreAResultOfSHFsCovering.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Are Citadel Clients Leaving",
            author: "einfachman",
            date: "2021-10-01",
            value: "https://ipfs.io/ipfs/QmP54XsT3qcBbchwi3BepR896vTFPokts7jW1mCU3NVZeH?filename=AreCitadelClientsLeaving.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Mountains of GME Synthetic Shares",
            author: "einfachman",
            date: "2021-11-19",
            value: "https://ipfs.io/ipfs/Qmf9KkT7RRrdLsbeG49zi7rE7RxdkZmfeLeguTjZ8DNfEE?filename=MountainsOfGME.pdf",
            status: "active",
            url: ""
        },
        {
            label: "WeAreUnstoppable",
            author: "einfachman",
            date: "2022-02-28",
            value: "https://ipfs.io/ipfs/QmSGyyni3SQBJw4mL4RHG7XgfgqEuMgy4Ki3xw6YL8yPMd?filename=WeAreUnstoppable.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Ape History Series: Backing Up All GME Subs",
            author: "Elegant-Remote6667",
            date: "2021-07-21",
            value: "https://ipfs.io/ipfs/QmX7W5xLwsVc4YzmoBQbCzHoQKJPQHpRikAdTcThXJAh9Q?filename=ApeHistorySeries1.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Ape History Series: MSM UltraFUD",
            author: "Elegant-Remote6667",
            date: "2022-01-02",
            value: "https://ipfs.io/ipfs/Qme18DhbhTTwbeSw6ngUTU38aRUgGsKZfwYbR6cn4yExpt?filename=ApeHistorySeries3.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Ape History Series: MSM Negative Press",
            author: "Elegant-Remote6667",
            date: "2022-01-08",
            value: "https://ipfs.io/ipfs/QmPnFtneN5vypyXRLkQzgy74nK6xB1cYN3WYUdEs3DsiQp?filename=ApeHistorySeries2.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Dictionary for the Non-Ape",
            author: "endvisible",
            date: "2021-10-29",
            value: "https://ipfs.io/ipfs/QmQ3nvuJaizgo6ghYNS3wx8NdFti1yFARJRf9o3CXpGv16?filename=DictionaryForTheNon-Ape.pdf",
            status: "active",
            url: ""
        },
        {
            label: "BlackRock and the Great Reset",
            author: "exceedingly",
            date: "2021-07-18",
            value: "https://ipfs.io/ipfs/QmZoyC2iQ6quuSFF9EcZzGbV8bqQJsN42nWY8PWaQ2BCAo?filename=BlackRockAndTheGreatReset.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Over-Voting Prevention Exposed!",
            author: "Exotic-Tooth8166",
            date: "2021-06-10",
            value: "https://ipfs.io/ipfs/QmbDdHYKprzGAfU77KJvs6d1eSnRVWg6c1o6aijvAep2jx?filename=Over-votingPreventionExposed.pdf",
            status: "active",
            url: ""
        },
        {
            label: "GME EndGame (Parts 1-6)",
            author: "FatAspirations",
            date: "2021-01-12",
            value: "https://ipfs.io/ipfs/QmfShzfSBHEFELnxNLaAqiUJpKefVXkjbAvHKwMRJjaw2j?filename=GMEEndgame.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Anatomy of a Short Squeeze",
            author: "franciscogil90",
            date: "2021-04-11",
            value: "https://ipfs.io/ipfs/QmW5denvesjUL8hgAxGpVem15XeBoEnVtqKd4tyYRqg2jb?filename=AnatomyOfAShortSqueeze.pdf",
            status: "active",
            url: ""
        },
        {
            label: "COVID-19, The Cares Act, and Undeniable Greed",
            author: "freadom6",
            date: "2021-07-12",
            value: "https://ipfs.io/ipfs/QmfLQY5yAETwmmCJG68DMd7KLLdqYGJU77fLWdV5EZ63LY?filename=Covid19TheCaresActGreed.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Citadel Used Bailout Money to Short GME",
            author: "freadom6",
            date: "2021-07-23",
            value: "https://ipfs.io/ipfs/QmbpQjLFjai5hvGqGXrWebw9haXgAKFeXZUxaQZqPcMjif?filename=CitadelUsedBailoutMoneyToShortGME.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Short Game Exposed",
            author: "freadom6",
            date: "2021-10-05",
            value: "https://ipfs.io/ipfs/QmPqBrmg1BdDHRqc5JhiurXYoW8ZXag47nddTyvtMwk3wU?filename=TheShortGameExposed.pdf",
            status: "active",
            url: ""
        },
        {
            label: "CLOverfield",
            author: "freadom6",
            date: "2022-01-07",
            value: "https://ipfs.io/ipfs/QmZiNQr84WfZaz9vykCJDFoDAUyvWJGtShraxZcxwUy92p?filename=CLOvierfield.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Mother Of All GME Summaries",
            author: "frugihoyi",
            date: "2021-04-04",
            value: "https://ipfs.io/ipfs/QmQ75VyF6LfMa8QTo7TXmp2nUoTJmspBpDK7p7asLAfZRq?filename=TheMotherOfAllGMESummaries.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Google Consumer Survey of GME Ownership",
            author: "Get-It-Got",
            date: "2021-06-07",
            value: "https://ipfs.io/ipfs/QmWJn2mUZaDFhTsAqShy6cW81wqRvfkwa8LeTVwfmMQcN6?filename=GoogleConsumer19.pdf",
            status: "active",
            url: ""
        },
        {
            label: "More Zombie Company Talk",
            author: "Get-It-Got",
            date: "2021-09-06",
            value: "https://ipfs.io/ipfs/QmTd1bFmQmJbSpU3B7D1DCG7fu1VdxNFctCHt2rQ3pnvSD?filename=MoreZombieCompanyTalk.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Complete Bank of America GameStop DD",
            author: "gfountyyc",
            date: "2021-06-04",
            value: "https://ipfs.io/ipfs/QmVuYPFnmwtjqtPhZLFf9SWLkSCHCC7JdSPGnrTKDiTyAp?filename=BankOfAmericaGameStopDD.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Bank of America Quarterly Update",
            author: "gfountyyc",
            date: "2021-11-03",
            value: "https://ipfs.io/ipfs/QmcpSELM6RHU2ccDZ7SzKWMUkst735JHWxdVC3ApS4MPwf?filename=BankOfAmericaQuarterlyUpdate.pdf",
            status: "active",
            url: ""
        },
        {
            label: "January 2021 Report",
            author: "GMEdd.com",
            date: "2021-01-20",
            value: "https://ipfs.io/ipfs/QmbvxhBrBbzo6pA8V9S4q57H4e8jr5b1oLoEqzhqrphbcu?filename=GMEDDcomJan21Report.pdf",
            status: "active",
            url: ""
        },
        {
            label: "November 2021 Report",
            author: "GMEdd.com",
            date: "2021-11-16",
            value: "https://ipfs.io/ipfs/QmaniwqEMD4wZGeNMn1QBeANeLi4LFA3UCFzNfhw8MpBfF?filename=GMEDDcomNov21Report.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Infinity War: The Final Exit",
            author: "gherkinit",
            date: "2021-05-30",
            value: "https://ipfs.io/ipfs/QmZwakUHcta6kAzJfonZNBY9JFSRQPwqWkbrJ8p9vsob7e?filename=InfinityWarFinalExit.pdf",
            status: "active",
            url: ""
        },
        {
            label: "MOASS: The Trilogy (Books I-II-III)",
            author: "gherkinit",
            date: "2021-11-21",
            value: "https://ipfs.io/ipfs/QmWtYMLUNcmzPP1aNmpBV2dLa8EbE46SjU5KekYgjvbYPP?filename=MOASSTheTrilogy.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Student Loan Asset Backed Securities",
            author: "happyegg1000",
            date: "2021-12-25",
            value: "https://ipfs.io/ipfs/QmUj62Y1nVFDPzg9TTU8TpDWqM7TLoHvqNmzSxdGrxcfSr?filename=StudentLoanAssetBackedSecurities.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Big Short Again: Auto Loans Bubble Edition",
            author: "happyegg1000",
            date: "2021-12-28",
            value: "https://ipfs.io/ipfs/QmWKj25dza5GP1vK15iW9YE7CQ9ThryEoNRV6rkhp6YnVM?filename=AutoLoansBubbleEddition.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The MOASS Thesis: Summary 2.0",
            author: "HCMF_MaceFace",
            date: "2021-06-10",
            value: "https://ipfs.io/ipfs/QmVk1n9oUQuURQ95EekGo7L2yqeLWoERCxjFHVk1EuxdSw?filename=TheMOASSThesis2.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Big Changes Coming Could Affect OTC Zombie Stocks",
            author: "hmhemes",
            date: "2021-09-05",
            value: "https://ipfs.io/ipfs/QmeAvCevNWo593z2APU5UapvoXAFf9gWdAbFp53PvhD1pS?filename=BigChangesComingCouldAffectOTCZombieStocks.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Iliad Of GME",
            author: "HomeDepotHank69",
            date: "2021-03-21",
            value: "https://ipfs.io/ipfs/QmYKHPkbKX91thmNN6aA1GsgmhGB8cgWyuZ6Lpe5y5TMjE?filename=TheIliadOfGME.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Why MM/HFs Would Take These Crazy Risks",
            author: "HomeDepotHank69",
            date: "2021-05-03",
            value: "https://ipfs.io/ipfs/QmW6eFL1SyTsayBZR4h36xiCVcMAWPtkp2tkAbDpesw97K?filename=HelpingYouUnderstand.pdf",
            status: "active",
            url: ""
        },
        {
            label: "GME Theory Of Everything",
            author: "HomeDepotHank69",
            date: "2021-05-06",
            value: "https://ipfs.io/ipfs/QmW6eFL1SyTsayBZR4h36xiCVcMAWPtkp2tkAbDpesw97K?filename=GMETheoryOfEverything.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Hank Visits GME's Bermuda Triangle",
            author: "HomeDepotHank69",
            date: "2021-05-11",
            value: "https://ipfs.io/ipfs/Qmdgyux6rQZkWQ7RWkT14Ttoxu2CuK1ueFCAwh5LopNBkS?filename=HankVisitsGMEsBermudaTriangle.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Hank's Big Bang",
            author: "HomeDepotHank69",
            date: "2021-06-07",
            value: "https://ipfs.io/ipfs/QmaxX3tiDQQfDK6shHknUYRCV51fisLTMwNhDL7QZQdfwj?filename=HanksBigBang.pdf",
            status: "active",
            url: ""
        },
        {
            label: "COINTELPRO Techniques",
            author: "jakob_xavier",
            date: "2021-04-16",
            value: "https://ipfs.io/ipfs/QmYNpn2QRArAScRb8Ty1aNoFs8EA6PFPQnmXdwSXBhZWGB?filename=COINTELPRO.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Real Greatest Short Burn of the Century",
            author: "Jeffamazon",
            date: "2020-09-08",
            value: "https://ipfs.io/ipfs/QmQkFFGJFLW8V7xx28teZwKPFJDAo5unfsEHquY8oYfSUG?filename=TheRealGreatestShortBurnOfTheCentury.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The GameStop Big Picture",
            author: "jn_ku",
            date: "2021-01-21",
            value: "https://ipfs.io/ipfs/QmPjFEoC5B6K7g9nfepHshxMkwZBQvTgqvkYkqMgiAjaEx?filename=TheGameStopBigPicture.pdf",
            status: "active",
            url: ""
        },
        {
            label: "News Blackout on the Banks that got Repo Loans",
            author: "jolly-conclusion",
            date: "2022-01-03",
            value: "https://ipfs.io/ipfs/QmRqceXA7hoX2AnsCoNieqR8YmB7o9GNKNCpQZLvZ4rYXR?filename=NewsBlackoutOnTheRepoLoans.pdf",
            status: "active",
            url: ""
        },
        {
            label: "I Was Missing A Key Piece To The Puzzle",
            author: "jsmar18",
            date: "2021-03-28",
            value: "https://ipfs.io/ipfs/Qma4hzzGzHrjNmypKEUU8JMChqDdUEnWWLcZjajfAgUVez?filename=IWasMissingAKeyPieceToThePuzzle.pdf",
            status: "active",
            url: ""
        },
        {
            label: "How Financial Institutions are Using US Treasury Securitiies",
            author: "jsmar18",
            date: "2021-04-02",
            value: "https://ipfs.io/ipfs/QmUH4dM48B9RDoQ18oUjucfK1Fm5UytZsLBjtqVzjgoFVR?filename=HowFinancialInstitutionsAreUsingUSTreasurySecurities.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Macroeconomics: The GME Connection",
            author: "jsmar18",
            date: "2021-08-14",
            value: "https://ipfs.io/ipfs/QmVHrvDxRiJ5u9YABBeTadaVc5QBp35JkY37JnwRAFWMqL?filename=MacroeconomicsTheGMEConnection.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Amazon, Bain, and Citadel Bust Out the Competition",
            author: "jumpster81",
            date: "2021-05-31",
            value: "https://ipfs.io/ipfs/QmSSGC4FnYm3WzKVEMcoRndkmoQ3p3XEUycGhopHFwrkqm?filename=AmazonBainCitadelBustOutCompetition.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The DTCC Is Finished",
            author: "JustBeingPunny",
            date: "2021-07-02",
            value: "https://ipfs.io/ipfs/QmUMrF1Tu5aB1Z5neGS44revqcPj6gFump9C7RzyaJ5JfP?filename=TheDTCCIsFinished.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Where are the Shares?",
            author: "LeaveMeAnon",
            date: "2021-06-05",
            value: "https://ipfs.io/ipfs/QmR1oZW1obTLEjUyVF93R4pi4WEQ7WXfmsP1Ggqp952msV?filename=WhereAreTheShares.pdf",
            status: "active",
            url: ""
        },
        {
            label: "FTD Cycle Reset Theory",
            author: "Leenixus",
            date: "2021-05-16",
            value: "https://ipfs.io/ipfs/QmbMiGbZJHjQ9kKWwsRB8kyUYF34p1a5Yvipywhrzj5Hev?filename=FTDCycleResetRTheory.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Cycles & DTCC / NSCC Stuff",
            author: "Leenixus",
            date: "2021-08-10",
            value: "https://ipfs.io/ipfs/Qmbs9gEvmZCeHvLtCNFtWNBHNbCufTWHe72LUJTwbuHooP?filename=CyclesDTCC-NSCCStuff.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Darkpool & OTC Trades: GME & XRT Visualized",
            author: "Leenixus",
            date: "2021-08-19",
            value: "https://ipfs.io/ipfs/QmPdhcpsGTTjJEVPnFYDACGX2FWmi1gsg2uuuKnEW6CVxJ?filename=DarkpollAndOTCTrades.pdf",
            status: "active",
            url: ""
        },
        {
            label: "GME & Evidence of Predictable Cycles",
            author: "Leenixus",
            date: "2021-11-15",
            value: "https://ipfs.io/ipfs/QmX9cBTGp8JDHyU8hy5TTq996TZDuJQvB2hreBFBohkJpN?filename=GMEandEvidenceOfPredictableCycles.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Next GME Option Clearing Cycle & Bull Run",
            author: "Leenixus",
            date: "2022-01-10",
            value: "https://ipfs.io/ipfs/QmUaGn3AYZUKhZJ8dGuWA7VLiVB4H4d678oC4CjZpnqYUX?filename=NextGMEOptionClearingCycle.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Trio of Crime",
            author: "Longjumping_College",
            date: "2021-10-22",
            value: "https://ipfs.io/ipfs/QmTeyCsrsoBo1SfAjxFcGuzNhHFoZvGaAVqPgg8WNfM2mc?filename=TrioOfCrime.pdf",
            status: "active",
            url: ""
        },
        {
            label: "We're In 2008 On Repeat",
            author: "u/Longjumping_College",
            date: "2022-02-18",
            value: "https://ipfs.io/ipfs/QmeSmJkJURJUtX4nND4hwQfocBAdEtoYvHbTLFi7PN4PwB?filename=WereIn2008OnRepeat.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The MOASS Is Not A Straight Line",
            author: "Magistricide",
            date: "2021-05-23",
            value: "https://ipfs.io/ipfs/QmasoigYyejBf9TkDT7w5zA28qdzz8z4TjpCLvAxW3Gemi?filename=WhyMOASSisNotAStraitLine.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Critical Thinking: From a Psychology Academic",
            author: "Makataui",
            date: "2021-04-18",
            value: "https://ipfs.io/ipfs/Qmems8khtKbegozAY2ftk5ka4iMM9r8fKM9rZ41Bjyyo8X?filename=CriticalThinking.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Variance Swaps can Explain OI in Far OTM Puts",
            author: "MauerAstronaut",
            date: "2021-11-07",
            value: "https://ipfs.io/ipfs/QmUgrMNZ3vo9Z255Tarh5UogzqgsgPAE32WpV7niwzxmGB?filename=VarianceSwapsCanExplainOI.pdf",
            status: "active",
            url: ""
        },
        {
            label: "We're Living Through An Expirament by the Fed",
            author: "Missing_The_Point_",
            date: "2022-01-30",
            value: "https://ipfs.io/ipfs/QmYQKQHTvPL5NMKtNsNhSYLi3DgKwcLxDAUNEfE1m79yby?filename=We'reLivingThroughAnExpiriment.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Simian Game Theory",
            author: "mrrippington",
            date: "2021-05-07",
            value: "https://ipfs.io/ipfs/QmRKGpMXSvtx3vyEG1rc51z7uN6XUkBNumFdZnTgedVGfU?filename=SimianGameTheory.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Banging the Close",
            author: "myplayprofile",
            date: "2021-08-03",
            value: "https://ipfs.io/ipfs/QmbRw9SPgWaQtPqTQ7R9UyJqFQwiLUncnLn9Kj4yaqo9pV?filename=BangingTheClose.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Open Letter Regarding Destabilizing Risks",
            author: "myplayprofile",
            date: "2021-09-06",
            value: "https://ipfs.io/ipfs/QmVGwJ1YyMtiaEehBr1nGF1nUzBaBKSWRbrWBNPP1r1YTH?filename=OpenLetterRegardingRisks.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Do You Know Where Your GME Bananas Are?",
            author: "nayboyer2",
            date: "2021-04-21",
            value: "https://ipfs.io/ipfs/QmdZSrYhyskxpJ9mWTiPvqkHTb2TWQNfAY9v8WwQ7b9sCL?filename=DoYouKnowWhereYourBananasAre.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The OTC Conspiracy",
            author: "nayboyer2",
            date: "2021-04-25",
            value: "https://ipfs.io/ipfs/QmXs3jagvYPEx23TZsMZ2co8pG238syM4yCmiugGPLe4Gs?filename=TheOTCConspiracy.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Crooks Keep Cooking Like Nobody Is Looking",
            author: "nayboyer2",
            date: "2021-08-15",
            value: "https://ipfs.io/ipfs/QmVLsDdjAm11rupkR1kpKZQZibD1djkrNzKwYiS8oSQFEv?filename=TheCrooksKeepCookin.pdf",
            status: "active",
            url: ""
        },
        {
            label: "GME Exit Strategy: Using MACD and STOCH RSI Indicators",
            author: "NHNE",
            date: "2021-03-08",
            value: "https://ipfs.io/ipfs/QmTed6c4sJoWVbVDaeoA8MnaEfjgcADpFqBMBZsPBT6dmn?filename=GMEExitStrategy.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Citadel May Crash the Market",
            author: "NorthBalance",
            date: "2021-03-25",
            value: "https://ipfs.io/ipfs/QmeTuGfhXXyXiSvFmPxwe4bN8e1wkuUS3BCQaAABoSLenA?filename=CitadelMayCrashTheMarket.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Managing Behavior During A Short Squeeze",
            author: "oaf_king",
            date: "2021-03-07",
            value: "https://ipfs.io/ipfs/QmVyMVQN4dFkhon6R3iiMer3RGDXrgd83jftgibxZ36CwP?filename=ManagingBehavior.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Dollar Endgame: Part 1 'A New Rome'",
            author: "Peruvian_Bull",
            date: "2021-06-21",
            value: "https://ipfs.io/ipfs/QmTLakHsLZLK9Rm34F41V6fMRr8tJSaR67XzYRdHMxT4jT?filename=TheDollarEndgame1.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Dollar Endgame: Part 2 'The Ouroboros'",
            author: "Peruvian_Bull",
            date: "2021-06-24",
            value: "https://ipfs.io/ipfs/QmZa2owk6hAU1JnqsjEr2Yu1kZuMKEFKbxXhyonz8m4NUZ?filename=TheDollarEndgame2.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Dollar Endgame: Part 3 'The Money Machine'",
            author: "Peruvian_Bull",
            date: "2021-07-09",
            value: "https://ipfs.io/ipfs/QmXa2UqtMBdoGmd1xHb4TukkTdN2oZvaSKuGjTXmwKJmsB?filename=TheDollarEndgame3.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Dollar Endgame: Part 4 'At World's End'",
            author: "Peruvian_Bull",
            date: "2021-09-13",
            value: "https://ipfs.io/ipfs/QmUP7LKeYeCPi5JgLb4SMQMr9Ry4M8JHBvYemVwBzLMK9B?filename=TheDollarEndgame4.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Reverse Repo at $1T Just the Tip of the Iceberg",
            author: "Peruvian_Bull",
            date: "2021-08-04",
            value: "https://ipfs.io/ipfs/QmbmJXG6JiRa5CxY3mT4yRunVt7DMZije5mWsR2fbYeovU?filename=ReverseRepoHitting1T.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Big Picture Due Diligence",
            author: "plants69",
            date: "2021-04-17",
            value: "https://ipfs.io/ipfs/QmVP3X2pLmHCGuDoTUTdd2mHkE4nJ7XyjHybfkMwGJymvK?filename=TheBigPictureDueDiligence.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Most Manipulated Stock",
            author: "plants69",
            date: "2021-04-23",
            value: "https://ipfs.io/ipfs/QmXQqugWPDFtbmKfHQiRpVikdkvCiPPsRCzRUJ3F4VZSBQ?filename=TheMostManipulatedStock.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Imminent Liquidity Crisis & Reverse Repos Usage",
            author: "plants69",
            date: "2021-05-20",
            value: "https://ipfs.io/ipfs/QmR4BbarZ6872H6aw3vDokotu4Rr7jV899ieDxA2tonkPv?filename=TheImminentLiquidityCrisisAndReverseReposUsage.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Coordinating To Keep GME from Threshold Securities List",
            author: "plants69",
            date: "2021-08-16",
            value: "https://ipfs.io/ipfs/QmSSGC4FnYm3WzKVEMcoRndkmoQ3p3XEUycGhopHFwrkqm?filename=CoordinatingToKeepGMEFromTheNYSE.pdf",
            status: "active",
            url: ""
        },
        {
            label: "It Isn't Just GME",
            author: "PM_ME_YOUR_ZeU",
            date: "2021-03-23",
            value: "https://ipfs.io/ipfs/QmWkwWgspW56mQU5inso3FVAwDSKw54i6Ma6VQgc7Xu2Dj?filename=ItIsntJustGME.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Frog in the Ice Cream Machine",
            author: "Prof_Dankmemes",
            date: "2021-12-04",
            value: "https://ipfs.io/ipfs/QmbW2iooz7e72PCnMzPENLpYQWH8QdrwUjysrRZGJnLT9w?filename=FrogInTheIceCreamMachine.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Algorithm: I Think I Figured It Out",
            author: "pwnwtfbbq",
            date: "2021-07-08",
            value: "https://ipfs.io/ipfs/QmczFYpceqUKp9RDgy7K1wfxSs7jVk2aNuS8AzU4mWzKvV?filename=TheAlgorithhm1.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Algorithm: Has Been Doing This Shit For Years",
            author: "pwnwtfbbq",
            date: "2021-08-02",
            value: "https://ipfs.io/ipfs/QmacS9CWCQBxCupE7HQgiBaBnLDYLJqjcdadGmHs5Bh8pr?filename=TheAlgorithhm2.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Algorithm: The Ouroboros",
            author: "pwnwtfbbq",
            date: "2021-11-18",
            value: "https://ipfs.io/ipfs/Qmb9pXYptLo1EdZNmkkReQU4XTjThUWesKGGADhfAJ46Mr?filename=TheAlgorithhm3.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Chaos Theory 1: The Everything Connection",
            author: "sharkbaitlol",
            date: "2021-04-11",
            value: "https://ipfs.io/ipfs/QmYt4Dmn51GAyix87vUfhpbFpKV3pj866keH6niAiKDNnu?filename=ChaosTheory1.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Chaos Theory 2: Conflicts of Interest",
            author: "sharkbaitlol",
            date: "2021-04-12",
            value: "https://ipfs.io/ipfs/QmeMdeNP2u8KDj1GmGaS1HV7ZEFYUfKmyU7dZoCDV6GW4j?filename=ChaosTheory2.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Chaos Theory 3: The Final Connection",
            author: "sharkbaitlol",
            date: "2021-04-16",
            value: "https://ipfs.io/ipfs/QmbDrmbukvfjBMxZf6ibvNGr8hvpNZDbwmtevyXZjNtbfQ?filename=ChaosTheory3.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Naked Shorting: A Definitive Guide",
            author: "sharkbaitlol",
            date: "2021-06-05",
            value: "https://ipfs.io/ipfs/QmWpFsXS6KWppCnTSVKAKtrrbauSn5V9hayGmkXecYM7gK?filename=NakedShortingADefinitiveGuide.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The GME Warpath: The NFT Future",
            author: "sharkbaitlol",
            date: "2021-08-29",
            value: "https://ipfs.io/ipfs/QmPmRPiYYdocwZLUUKWQadcP3XZ3KNN3oCq49KwRjNa2Ah?filename=TheGMEWarpath.pdf",
            status: "active",
            url: ""
        },
        {
            label: "GME: Almost-Ultimate DD and Others",
            author: "ShortTheNasdaq",
            date: "2021-01-02",
            value: "https://ipfs.io/ipfs/Qmcorf2TExF9gaDYjbrFxJwQpg1m9PLFTQZZwE2r9WPKME?filename=ShortTheNasdaqGMEDDandOthers.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Finkle Is Einhorn",
            author: "Slyver21",
            date: "2021-08-03",
            value: "https://ipfs.io/ipfs/QmXiTxyxrrVaD1ehMJzTazfnZNUJpQgTd4fkG2ks4KJnTL?filename=FinkleIsEinhorn.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The MOASS Preparation Guide 2.0",
            author: "socrates6210",
            date: "2021-04-11",
            value: "https://ipfs.io/ipfs/QmYzXUQ81NVJpfvPQQzhMBXoDTPjEV2YNnRXfFWQePyyAV?filename=TheMOASSPreparationGuid2.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Financial Advisors, Tax Attorneys, CPAs, and Wills",
            author: "soluna7827",
            date: "2021-04-20",
            value: "https://ipfs.io/ipfs/QmT9fRudVXGprPTg9eP54UKqFDXGXqev78W7zddzjh6ra8?filename=FinancialAdvisorsTaxAttorneysCPAsandWills.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The March To Zero Liquidity",
            author: "suspicious-singer243",
            date: "2021-05-03",
            value: "https://ipfs.io/ipfs/QmbXqbpMf2oqMYsFGByEpgaNmnWzfL9q667QfojLM7wDmQ?filename=TheMarchToZeroLiquidity.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Sun Never Sets On Citadel: Part I",
            author: "swede_childe_of_mine",
            date: "2021-06-18",
            value: "https://ipfs.io/ipfs/QmeeeQsP8Y6eYJJsZoPdJAQRi4y2Fu5kCgWaks2vJm2B5y?filename=TheSunNeverSetsOnCitadel1.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Sun Never Sets On Citadel: Part II",
            author: "swede_childe_of_mine",
            date: "2021-07-03",
            value: "https://ipfs.io/ipfs/QmTQVNkyftCuYwruJnmx7X9G9QN2KeRpmn66hof9s9Ryzp?filename=TheSunNeverSetsOnCitadel2.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Sun Never Sets On Citadel: Part III",
            author: "swede_childe_of_mine",
            date: "2021-10-01",
            value: "https://ipfs.io/ipfs/QmYUQ6YUcagXzsKhG2d4N8mnbcpHtQuJqVeFCvjQpm1Z9n?filename=TheSunNeverSetsOnCitadel3.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Zombies: OTC Stocks Correlated with GME",
            author: "thabat",
            date: "2021-09-04",
            value: "https://ipfs.io/ipfs/QmXViv8be8ydPPoYxNWiCo6GfvFMes7DMUXebAhg7p2ptH?filename=ZombiesOTCStocksCorrelatedWithGME.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Loop Capital, Magic Johnson, Credit Suisse & Citadel",
            author: "thabat",
            date: "2021-09-09",
            value: "https://ipfs.io/ipfs/QmRmJu93Ln7SizSwgPWrDM9rPV5id9sNNGtzxZiKRF15ix?filename=LoopMagicCreditCitadelConnection.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Cellar Boxing",
            author: "thabat",
            date: "2021-09-11",
            value: "https://ipfs.io/ipfs/QmRZxyowT47JSNA1gVCicWVQGdiME6Jm319r7Jc1fmK33V?filename=CellarBoxing.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Volume Is Wrong!",
            author: "thabat",
            date: "2021-11-04",
            value: "https://ipfs.io/ipfs/QmZiCrkq1UqwQLHQ7kzydQ4dgufAjvQaUmw3LngukFNEBd?filename=TheVolumeIsWrong.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Ceiling Boxed",
            author: "thabat",
            date: "2021-11-23",
            value: "https://ipfs.io/ipfs/QmZmUBuXZPwW2QxdwkpN9N4Xa6Gga4yEZtb9Do3cj4rNxj?filename=CeilingBoxed.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Big Mall Short",
            author: "throwawaylurker012",
            date: "2022-01-16",
            value: "https://ipfs.io/ipfs/QmbiCfPuKYSZL921AeVravqRVsrb3DfCE1LzvHypJbi3ap?filename=TheBigMallShort.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Sears Got A Letter About Naked Shorting",
            author: "throwawaylurker012",
            date: "2022-02-06",
            value: "https://ipfs.io/ipfs/QmaLxe2kcNHpJ9qNU1P2DL4U1wv2Nm3kBUmRRDmaEP86UA?filename=SearsGotALetter.pdf",
            status: "active",
            url: ""
        },
        {
            label: "One DD To Rule Them",
            author: "TitusSupremus",
            date: "2021-01-17",
            value: "https://ipfs.io/ipfs/QmemWSJ8vpVZLHvk8pzdbLbeYwccGkPit72G1h5SFxLCNa?filename=OneDDToRuleThemAll.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Proof of Price Suppression and Its Source",
            author: "TheDude0007",
            date: "2021-08-12",
            value: "https://ipfs.io/ipfs/QmeDjrpRz26P5KJFygHsCjmLgF4R1mHZyWuXZhgJhHPjkK?filename=ProofOfPriceSupression.pdf",
            status: "active",
            url: ""
        },
        {
            label: "25 Reasons GME's Short Interest is High",
            author: "UncleZiggy",
            date: "2021-05-09",
            value: "https://ipfs.io/ipfs/QmeskCdcS41kucHAeiNF7WtFbPnyXpC23szbrJrDqVC8ca?filename=25ReasonsGMEsSIIsHigh.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Big Squeeze",
            author: "UncleZiggy",
            date: "2021-06-01",
            value: "https://ipfs.io/ipfs/QmbrBQiErBCoqfbq8Q2Vypno9y6HF9g1bknyiK3KAJFwZe?filename=TheBigSqueeze.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Thesis: SI is Upwards of 2000%",
            author: "Unowned-Instruction",
            date: "2021-03-28",
            value: "https://ipfs.io/ipfs/QmewJPWQhF5D4pHdqwXF5AiMebyqfQeBx4EZHM3SBXFAZR?filename=SIIsUpwardsOf2000.pdf",
            status: "active",
            url: ""
        },
        {
            label: "The Game We Play",
            author: "welcometosilentchill",
            date: "2021-07-20",
            value: "https://ipfs.io/ipfs/QmRqqJwEzTWjyXhTaGmppyK4nZ2RcsXJCC76WysMpERgdh?filename=TheGameWePlay.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Evergrande On The Brink Of Collapse",
            author: "wetdirtkurt",
            date: "2021-08-27",
            value: "https://ipfs.io/ipfs/QmZp7tR4KsuLktbRHoM8NTN9wtEaFAhE18VorFKTxqGqAb?filename=EvergrandOnTheBrinkOfCollapse.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Submitted this DD to the SEC: I Present, CTC",
            author: "wetdirtkurt",
            date: "2021-12-17",
            value: "https://ipfs.io/ipfs/QmS7Pkwp3jFQKB8a95t7afMLLPaNREDq68af1LNbCYC3Wy?filename=ChicagoTradingCompany.pdf",
            status: "active",
            url: ""
        },
        {
            label: "Volatility, Variance, Dispersion, Oh My!",
            author: "zinko83",
            date: "2021-11-04",
            value: "https://ipfs.io/ipfs/QmcDsjCSjgCC34A4sW5bHo63heTgKdQnEgfwTzq4W931R9?filename=VolatilityVarianceDispersionOhMy.pdf",
            status: "active",
            url: ""
        },
        {
            label: "TLDR: SuperStonk Monthly Digest January 2022",
            author: "nathanello",
            date: "2022-01-31",
            value: "https://ipfs.io/ipfs/QmPopeXqFNbYRn5KFeu3saqqeCcjAwm69jxiD6fqymaik7?filename=TLDR_JAN22.pdf",
            status: "active",
            url: ""
        },
        {
            label: "TLDR: SuperStonk Monthly Digest February 2022",
            author: "nathanello",
            date: "2022-02-28",
            value: "https://ipfs.io/ipfs/QmfHjvBcCaLkaM5vChY4hxcNSX75nYaqyc8A5LiQHwJv5t?filename=TLDR_FEB22.pdf",
            status: "active",
            url: ""
        },
        {
            label: "SuperStonk Guide #1",
            author: "zedinstead",
            date: "2021-06-15",
            value: "https://ipfs.io/ipfs/Qme31N5Ro2WURfFLYMqaPwwcwuq2ZN6Yvww2f2Pmk7Vzkm?filename=SuperStonkGuide1.pdf",
            status: "active",
            url: ""
        },
        {
            label: "SuperStonk Guide #2",
            author: "zedinstead",
            date: "2021-06-16",
            value: "https://ipfs.io/ipfs/QmXmbuffwPEfeDwyE4e5J298rqofRFnE1as86Rbi9nDgUE?filename=SuperStonkGuide2.pdf",
            status: "active",
            url: ""
        },
        {
            label: "SuperStonk Guide #3",
            author: "zedinstead",
            date: "2021-06-17",
            value: "https://ipfs.io/ipfs/QmSapsvp9VgPYwaExiSKnjBVJPkht8iaLQW1QHUmdVq2w7?filename=SuperStonkGuide3.pdf",
            status: "active",
            url: ""
        },
        {
            label: "SuperStonk Guide #4",
            author: "zedinstead",
            date: "2021-06-18",
            value: "https://ipfs.io/ipfs/QmRGNn2SaJNTeRyRjwHezAmiEqLUJkBAtD22x8owbgZaXi?filename=SuperStonkGuide4.pdf",
            status: "active",
            url: ""
        },
        {
            label: "SuperStonk Guide #5",
            author: "zedinstead",
            date: "2021-06-21",
            value: "http://ipfs.io/ipfs/QmcHZHwK2VRgC91VkJShNmQiF7eaa1jrqrWNysxERjsiru?filename=SuperStonkGuide5.pdf",
            status: "active",
            url: ""
        },
        {
            label: "SuperStonk Guide #6",
            author: "zedinstead",
            date: "2021-06-22",
            value: "http://ipfs.io/ipfs/QmNsJDMSxgri8BnBqBgmYiSR9qBaVXUAzwmixeARgWzL71?filename=SuperStonkGuide6.pdf",
            status: "active",
            url: ""
        },
        {
            label: "SuperStonk Guide #7",
            author: "zedinstead",
            date: "2021-06-23",
            value: "http://ipfs.io/ipfs/QmRKbEQFsY47cRLT55EE6AjyejFWDD3ZG1DKaoeQyLtcrw?filename=SuperStonkGuide7.pdf",
            status: "active",
            url: ""
        },
        {
            label: "SuperStonk Guide #8",
            author: "zedinstead",
            date: "2021-06-24",
            value: "http://ipfs.io/ipfs/QmUCqwMpCZqWTayq2jCUx9cYF9uhgZtKP8brrAWeontqJf?filename=SuperStonkGuide8.pdf",
            status: "active",
            url: ""
        },
        {
            label: "SuperStonk Guide #9",
            author: "zedinstead",
            date: "2021-06-25",
            value: "https://ipfs.io/ipfs/QmRqUkPiwBuutTVg6kyLmv4auLmmiSwe7ZWT59ew2Kf7aU?filename=SuperStonkGuide9.pdf",
            status: "active",
            url: ""
        },
        {
            label: "SuperStonk Guide #10",
            author: "zedinstead",
            date: "2021-06-28",
            value: "https://ipfs.io/ipfs/QmXXCtAiCGDo9g1ChQAAaUy7hNKmzqJQrN1TD84PL3ofbD?filename=SuperStonkGuide10.pdf",
            status: "active",
            url: ""
        },
        {
            label: "SuperStonk Guide #11",
            author: "zedinstead",
            date: "2021-06-29",
            value: "https://ipfs.io/ipfs/QmVem221NsCe2ZkzsTrDvFCj3nzuRSZNwaKnSXT6ZW6X5p?filename=SuperStonkGuide11.pdf",
            status: "active",
            url: ""
        },
        {
            label: "SuperStonk Guide #12",
            author: "zedinstead",
            date: "2021-06-30",
            value: "https://ipfs.io/ipfs/QmUbc6nwqhFg5orhgzkQmbXJq7WXEMGEiT3tVVpzHHyXvE?filename=SuperStonkGuide12.pdf",
            status: "active",
            url: ""
        },
        {
            label: "SuperStonk Guide #13",
            author: "zedinstead",
            date: "2021-07-01",
            value: "https://ipfs.io/ipfs/QmP9kaMqMcxsybLKHEyjkyy1Tf7DYcfAHgWe7MNEKDay2w?filename=SuperStonkGuide13.pdf",
            status: "active",
            url: ""
        },
        {
            label: "SuperStonk Guide #14",
            author: "zedinstead",
            date: "2021-07-02",
            value: "https://ipfs.io/ipfs/QmdDyezaL26qJBsbiJ9i28xgN3npsvFymNqhGGbUu6jpje?filename=SuperStonkGuide14.pdf",
            status: "active",
            url: ""
        },
        {
            label: "SuperStonk Guide #15",
            author: "zedinstead",
            date: "2021-07-06",
            value: "https://ipfs.io/ipfs/QmSM91V2qS3VJqaKykTeuRxKSd1kKPuXmytjkUysNLHMrd?filename=SuperStonkGuide15.pdf",
            status: "active",
            url: ""
        },
        {
            label: "SuperStonk Guide #16",
            author: "zedinstead",
            date: "2021-07-07",
            value: "https://ipfs.io/ipfs/Qmc1vyc5FgaqX5AU4oc3HJLQbKsAnEFByyLLkkrkmwDsyk?filename=SuperStonkGuide16.pdf",
            status: "active",
            url: ""
        },
        {
            label: "SuperStonk Guide #17",
            author: "zedinstead",
            date: "2021-07-08",
            value: "https://ipfs.io/ipfs/QmYHYHgvrgbaZDrdQoA1HwMddZfFbfpf8vWnp8WjEdejsq?filename=SuperStonkGuide17.pdf",
            status: "active",
            url: ""
        },
        {
            label: "SuperStonk Guide #18",
            author: "zedinstead",
            date: "2021-07-09",
            value: "https://ipfs.io/ipfs/QmctuwHfN28NUFTtJoNMdBsYjpYFn3muvC8rfbYgYoYzVx?filename=SuperStonkGuide18.pdf",
            status: "active",
            url: ""
        },
        {
            label: "SuperStonk Guide #19",
            author: "zedinstead",
            date: "2021-07-12",
            value: "https://ipfs.io/ipfs/QmULx6JubvF2vfbeZ7swvMxNR9Dc8yGAfCbWZyBbhSU2Wx?filename=SuperStonkGuide19.pdf",
            status: "active",
            url: ""
        },
        {
            label: "SuperStonk Guide #20",
            author: "zedinstead",
            date: "2021-07-13",
            value: "https://ipfs.io/ipfs/QmaTLw2tEhCdRKKF2wo6RuqU4T6BNk28gMKNhTPoumSzW6?filename=SuperStonkGuide20.pdf",
            status: "active",
            url: ""
        },
        {
            label: "SuperStonk Guide #21",
            author: "zedinstead",
            date: "2021-07-14",
            value: "https://ipfs.io/ipfs/Qmc1L72nG7XY7YD91f8zeJnwrLphRKtkRkN7HQDw6bZ7F3?filename=SuperStonkGuide21.pdf",
            status: "active",
            url: ""
        },
        {
            label: "SuperStonk Guide #22",
            author: "zedinstead",
            date: "2021-07-15",
            value: "https://ipfs.io/ipfs/QmZ76xX8cP9D3eistkMWK2Eu7QP36gNa6GUojzBCDdCtWd?filename=SuperStonkGuide22.pdf",
            status: "active",
            url: ""
        },
        {
            label: "SuperStonk Geographic July",
            author: "zedinstead",
            date: "2021-07-26",
            value: "https://ipfs.io/ipfs/QmPy2AeMYGv9mfzhtZW3RUAarucWFJ4heURARZJsycCq2h?filename=SuperStonkGeographicJuly.pdf",
            status: "active",
            url: ""
        },
        {
            label: "SuperStonk Geographic August",
            author: "zedinstead",
            date: "2021-08-11",
            value: "https://ipfs.io/ipfs/QmQczV2rZ4FtDypfLzVcQWD8Fnh1seXgeqcSor6wXmKFfh?filename=SuperStonkGeographicAugust.pdf",
            status: "active",
            url: ""
        },
        {
            label: "SuperStonk Geographic September",
            author: "zedinstead",
            date: "2021-09-27",
            value: "https://ipfs.io/ipfs/Qmf4SBepBE1qfHEtMBSLyyJjuS9qsH88qbhiiMJqUDBe7C?filename=SuperStonkGeographicSeptember.pdf",
            status: "active",
            url: ""
        }
        
        ];

        PDFs.sort(function (a, b) {
            var dateA = new Date(a.date), dateB = new Date(b.date)
            return dateA - dateB
        });

return (
<div> 
        <select onChange={handlePDFChange}> 
            <option value=""> -- Select a PDF -- </option>
            {PDFs.map((PDF) => <option value={PDF.value}>{PDF.date}&nbsp;|&nbsp;{PDF.author}&nbsp;|&nbsp;{PDF.label}</option>)}
        </select>
        <br></br>
            <iframe id="IPFS PDF LIBRARY PORTAL"
                title="IPFS PDF LIBRARY PORTAL"
                width="90%"
                height="900"
                src={PDF}>
            </iframe>
    </div>
)
}

export default ContentByDate;
