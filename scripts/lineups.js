// Agent color mapping
const agentColors = {
    'Sova': '#00b5ad',
    'Viper': '#5ab552',
    'Brimstone': '#ff6b35',
    'Phoenix': '#ff8c42',
    'Jett': '#7bb2d9',
    'Raze': '#f9cb40',
    'Breach': '#d93b3b',
    'Omen': '#7a5cff',
    'Killjoy': '#f0e14a',
    'Cypher': '#f5f5f5',
    'Sage': '#6de1ff',
    'Reyna': '#b94eff',
    'Skye': '#6de1a3',
    'Yoru': '#4d5eff',
    'Astra': '#b467ff',
    'KAYO': '#ffffff',
    'Chamber': '#f0e14a',
    'Neon': '#1a8cff',
    'Fade': '#8a4fff',
    'Harbor': '#00ffb3',
    'Gekko': '#00ff4d',
    'Deadlock': '#ff66b3',
    'Iso': '#ff4d4d',
    'Clove': '#ff66ff'
};

// Sample lineup data
const lineupData = {
    Ascent: {
        minimap: {
            attacking: "assets/images/minimaps/ascent.png",
            defending: "assets/images/minimaps/ASCENT-DEF.png"
        },
        lineups: [
            {
                agent: "Sova",
                title: "A Site Recon Bolt",
                video: "https://www.youtube.com/embed/y-JsYhJAqzc?si=lVTmbQqUvEbNcRXI",
                description: "Scan A site from A Main. Stand in the corner near the boxes and aim just a bit next to the corner, 1 charge no bounce",
                position: { x: 96, y: 33 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "B Cubby / Boat Recon Bolt",
                video: "https://www.youtube.com/embed/Y8c0lpG3-B8?si=Xb-pcio_Ma9LZUtT",
                description: "Scan B Cubby from B Main. Stand in the corner near the boxes and aim at the the P letter, Full charge 1 bounce",
                position: { x: 34, y: 36 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "B Ally Recon Bolt",
                video: "https://www.youtube.com/embed/mNE60FnPkdg?si=MU8QvL-swmMVBS2g",
                description: "Scan B lane from B lobby. good anti spam, Full charge 1 bounce",
                position: { x: 16, y: 39 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "B Site Recon Bolt",
                video: "https://www.youtube.com/embed/Mst0bWSDz-4?si=0H9rJ4rRGcbprjsY",
                description: "Scan B site and main from B lobby. Stand next to the 3rd window from the left, aim under the 2nd window from the right, Full charge 1 bounce",
                position: { x: 26, y: 23 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "B Market Recon Bolt",
                video: "https://www.youtube.com/embed/MOnboeDkfe8?si=G2eAq0ZeVq-UE_nn",
                description: "Scan B market from Top Mid. look at the 2nd line next to the box aim exactly on the 2nd line, Full charge 1 bounce",
                position: { x: 35, y: 27 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "B Market Recon Bolt",
                video: "https://www.youtube.com/embed/qtDlYjR2CA4?si=g4MGmIu6wMkSd56s",
                description: "Scan B market from B main. Stand in the corner aim at the bottom left of the sign, Full charge 1 bounce",
                position: { x: 36, y: 33 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "B Market Recon Bolt",
                video: "https://www.youtube.com/embed/QmFKKgpWDkM?si=aG5p7H_-R66gQlZT",
                description: "Full charge 2 bounces",
                position: { x: 44, y: 29 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "B Site Recon Bolt",
                video: "https://www.youtube.com/embed/1uUAFZiSlpY?si=mnvTzVeKY8xUpIzs",
                description: "full charge 1 bounces",
                position: { x: 23, y: 23 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "B Site / Lane Recon Bolt",
                video: "https://www.youtube.com/embed/xqpFZbxGVEQ?si=pM-g3ZXw5ISLy4kW",
                description: "Stand in the corner aim the tree, Full charge no bounces",
                position: { x: 7, y: 35 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "B Site Recon Bolt",
                video: "https://www.youtube.com/embed/VW6W-flNfCE?si=1FD9bha4z4zXWTUr",
                description: "Full charge 1 bounces",
                position: { x: 19, y: 23 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "Tree Recon Bolt",
                video: "https://www.youtube.com/embed/H8cix8Dtqhg?si=jOYFUxpvcbcKfqLK",
                description: "Scan tree from A main. Stand in the corner aim at the top of the tree, Full charge no bounces",
                position: { x: 72, y: 38 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "Mid Recon Bolt",
                video: "https://www.youtube.com/embed/QuBDObOwfY4?si=kM4eUWGRPER8S740",
                description: "Stand in the corner aim just under the line on the wall, Full charge 1 bounce ",
                position: { x: 55, y: 47 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "Mid bottom Recon Bolt",
                video: "https://www.youtube.com/embed/WtexcyDvMTE?si=m3OB8iK44REH3LYr",
                description: "At the stat of the round aim at the bottom of the lamp, Full charge 1 bounce ",
                position: { x: 51, y: 39 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "Pizza Recon Bolt",
                video: "https://www.youtube.com/embed/R-wXTZL1sRA?si=nojNlN5TxZ0kcSSY",
                description: "Stand in the corner , Aim just at the end of the blue line , jump and shoot, Full charge 1 bounce ",
                position: { x: 48, y: 29 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "Tree Recon Bolt",
                video: "https://www.youtube.com/embed/4qKrJQOqbjI?si=gNQ_Fdms1xyjL4Ij",
                description: "Full charge 1 bounce ",
                position: { x: 71, y: 40},
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "A Gen Recon Bolt",
                video: "https://www.youtube.com/embed/YzfxVEcpWZs?si=Hgzwp88D70WK6XJm",
                description: "Recon Bolt for Gen A, Full charge 1 bounce ",
                position: { x: 84, y: 29.7 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "A Site Recon Bolt",
                video: "https://www.youtube.com/embed/OVFyL_dmsio?si=cn6sTxOZenL9cg1T",
                description: "Stand in the corner near the boxes Aim at the blue flag, 1 charge no bounce ",
                position: { x: 81, y: 29.5 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "Heaven Recon Bolt",
                video: "https://www.youtube.com/embed/jQVPyeBmPJo?si=KTtSNkPxfEfzZ_km",
                description: "top right of the box, Full charge 2 bounces ",
                position: { x: 89, y: 26 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "A main Recon Bolt",
                video: "https://www.youtube.com/embed/1I2n_ryzyCU?si=s1uzXCulnb-kThW4",
                description: "Aim at the bottom left of the small window, Full charge 2 bounces ",
                position: { x: 88, y: 48 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "A Site Recon Bolt",
                video: "https://www.youtube.com/embed/uKaDLiDupHc?si=StbMvlKRi3eAzIHQ",
                description: "Stand in the Corner aim at the small Line, 1 charge 2 bounces ",
                position: { x: 92, y: 45 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "A Heaven Recon Bolt",
                video: "https://www.youtube.com/embed/pYRUcht9KUo?si=W5DYfWB3RnZWXeCs",
                description: "Stand in the corner btween the boxes aim at the blue flag, 1.5 charge no bounce ",
                position: { x: 81.6, y: 26 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "A Defualt Shock Dart",
                video: "https://www.youtube.com/embed/JDpbXVbqcPc?si=HABSUrSGz9lBt0HD",
                description: "For the Defualt Plant, 1 at the top of the line, 1 in the middle of it ",
                position: { x: 83.5, y: 37 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "B Defualt Shock Dart",
                video: "https://www.youtube.com/embed/K6qYlYsmBAk?si=pLHCZLGZEzJiS0Xz",
                description: "For the Defualt Plant",
                position: { x: 12, y: 32 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "A Main Shock Dart",
                video: "https://www.youtube.com/embed/ee9sP5i8nXk?si=JguPRBZpIozi2hew",
                description: "Aim next to the small window to the left, 2 charges 2 bounces ",
                position: { x: 89, y: 46 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "B Main Shock Dart",
                video: "https://www.youtube.com/embed/pB6hF9GOocs?si=cr28bS3S3n4-i1cv",
                description: "For the trips on B Main ",
                position: { x: 27, y: 38 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "Pizza Shock Dart",
                video: "https://www.youtube.com/embed/aqW7cehZFNU?si=kU1LtOJy_kc2aYor",
                description: "Keep the top of the left click icon on the middle of the gray box, 1.3 charge  ",
                position: { x: 53, y: 33 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "Under Heaven Recon Bolt",
                video: "https://www.youtube.com/embed/uIUEFwQIjME?si=yOFfnNYKOKw33itw",
                description: "aim at the top right corner, Full charge 2 bounces ",
                position: { x: 10, y: 79 },
                role: "defending"
            },
            {
                agent: "Sova",
                title: "B Link Recon Bolt",
                video: "https://www.youtube.com/embed/-uFEeh3zmTA?si=yocc_XWLpBpBl5Qa",
                description: "let the 2nd line of the charge on the bottom right of the window , Full charge 1 bounce ",
                position: { x: 64, y: 47 },
                role: "defending"
            },
            {
                agent: "Sova",
                title: "B Main Recon Bolt",
                video: "https://www.youtube.com/embed/iz7QjM8GZH4?si=zSxIVxukmbCkhfs-",
                description: "Full charge 1 bounce ",
                position: { x: 83, y: 54 },
                role: "defending"
            },
            {
                agent: "Sova",
                title: "B Market Recon Bolt",
                video: "https://www.youtube.com/embed/mGuSVLPrgAE?si=k5_1CEWxr3qCBy1c",
                description: "0.2 charge no bounce ",
                position: { x: 62, y: 72 },
                role: "defending"
            },
            {
                agent: "Sova",
                title: "B Site / Lane Recon Bolt",
                video: "https://www.youtube.com/embed/zET0-rIYWUg?si=kKZ8FvBH0mHONm-5",
                description: "Full charge 1 bounce ",
                position: { x: 83, y: 67 },
                role: "defending"
            },
            {
                agent: "Sova",
                title: "A Lobby Recon Bolt",
                video: "https://www.youtube.com/embed/I4wraSWxZvk?si=ee1n_Pd5b090lkjH",
                description: "Top left of the green sign, 1.6 charge 1 bounce ",
                position: { x: 22, y: 38 },
                role: "defending"
            },
            {
                agent: "Sova",
                title: "Tree Recon Bolt",
                video: "https://www.youtube.com/embed/WymSPNHTeGw?si=LGJxbfg4F6rDxQSt",
                description: "at the end of the rock, One click no bounce ",
                position: { x: 34, y: 60 },
                role: "defending"
            },
            {
                agent: "Sova",
                title: "B Lobby Recon Bolt",
                video: "https://www.youtube.com/embed/OMGDOamvAYw?si=TuSvF7uVzIoShmxA",
                description: "Jump shoot, Full charge 1 bounce ",
                position: { x: 74, y: 41 },
                role: "defending"
            },
            {
                agent: "Sova",
                title: "A Site Recon Bolt",
                video: "https://www.youtube.com/embed/t4Ouxd6W4uI?si=u3semTDFdqEM1mT6",
                description: "2 charge no bounce ",
                position: { x: 4, y: 64 },
                role: "defending"
            },
            {
                agent: "Sova",
                title: "B Main Shock Dart",
                video: "https://www.youtube.com/embed/sQOhdNVwZRM?si=ibmASJINSCUneMBr",
                description: "Double B Main Shock Dart",
                position: { x: 81, y: 56 },
                role: "defending"
            },
            {
                agent: "Sova",
                title: "A Main Shock Dart",
                video: "https://www.youtube.com/embed/xpEzmm803gg?si=kJyK30SUoIoDiYeJ",
                description: "Double A Main Shock Dart",
                position: { x: 25.5, y: 52 },
                role: "defending"
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "Breach",
                title: "B Site FlashPoint",
                video: "https://www.youtube.com/embed/fx-zsfXuItE?si=IcdOuF7TKMC_Zd7g",
                description: "Flash for B site from B Main.",
                position: { x: 15, y: 37 },
                role: "attacking"
            },
            {
                agent: "Breach",
                title: "Logs Aftershock",
                video: "https://www.youtube.com/embed/4FjL_ChTyXM?si=zusQmTx9e7itokhC",
                description: "Aftershock for logs from tiles",
                position: { x: 35, y: 35 },
                role: "attacking"
            },
            {
                agent: "Breach",
                title: "CT FlashPoint",
                video: "https://www.youtube.com/embed/qFvmFduUSbE?si=z1aOU6ETBS83sViW",
                description: "Post plant flash for CT from B site",
                position: { x: 27, y: 20 },
                role: "attacking"
            },
            {
                agent: "Breach",
                title: "A Site FlashPoint",
                video: "https://www.youtube.com/embed/vZwKiO5tznM?si=P2qbNDNuAe6XtydP",
                description: "Flash for A site from A Main.",
                position: { x: 84, y: 45 },
                role: "attacking"
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "clove",
                title: "B Main Meddle",
                video: "https://www.youtube.com/embed/A4fUcW6XyaQ?si=jLGwVvsOo8MGxFyA",
                description: "Meddle for B main from B Market Stairs.",
                position: { x: 81.7, y: 57 },
                role: "defending"
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "chamber",
                title: "Tp logs",
                video: "https://www.youtube.com/embed/2UQpIXTRDck?si=KV6JjR5cgjXl-kOT",
                description: "TP to peak Mid to B logs.",
                position: { x: 65, y: 70 },
                role: "defending"
            },
            {
                agent: "chamber",
                title: "Tp B Lobby",
                video: "https://www.youtube.com/embed/VyqFuGqnm_w?si=zYJMBvTIfuBSs_tF",
                description: "TP to peak B Main /Market /Ct /Stairs, to B Lobby.",
                position: { x: 24, y: 52 },
                role: "attacking"
            },
            {
                agent: "chamber",
                title: "TP Garden",
                video: "https://www.youtube.com/embed/sKG3XmF9IY4?si=vSHutYAHKu8cC440",
                description: "TP to peak B Link to Garden.",
                position: { x: 36.5, y: 73 },
                role: "defending"
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "Brimstone",
                title: "B Corner Molly",
                video: "https://www.youtube.com/embed/m-iRXGx1Uhg?si=SGsmgjFma8cs-X5m",
                description: "Molly for The Corner Plant. Stand a bit away from the corner and aim at the right of 1st the window.",
                position: { x: 8.5, y: 34.5 },
                role: "attacking"
            },
            {
                agent: "Brimstone",
                title: "B Defualt Molly",
                video: "https://www.youtube.com/embed/daZvRRH7aH0?si=K0jD_dGsmo13gmwE",
                description: "Molly for The Defualt Plant From B Lobby. Stand a bit away from the corner and aim at the right of 1st the window.",
                position: { x: 12, y: 32 },
                role: "attacking"
            },
            {
                agent: "Brimstone",
                title: "B Defualt Molly",
                video: "https://www.youtube.com/embed/iUnPy3ghvxA?si=WnZiW3Ik0dTozlX1",
                description: "Molly for The Defualt Plant To Take Control From CT. Stand a bit away from the corner and aim at the right of 1st the window.",
                position: { x: 88, y: 73 },
                role: "defending"
            },
            {
                agent: "Brimstone",
                title: "A Corner Molly",
                video: "https://www.youtube.com/embed/fw97Tsm06Ks?si=mjGc0Op9yDZKchSS",
                description: "Molly for The Corner Plant From A Lobby.",
                position: { x: 96, y: 33 },
                role: "attacking"
            },
            {
                agent: "Brimstone",
                title: "A Defualt Molly",
                video: "https://www.youtube.com/embed/KzlFeXCWPJw?si=q_3FNtX2rqdSStG2",
                description: "Molly for The Defualt Plant from wine.",
                position: { x: 83.6, y: 37 },
                role: "attacking"
            },
            {
                agent: "Brimstone",
                title: "A Defualt Molly",
                video: "https://www.youtube.com/embed/PLM45F4-9Ms?si=DTRBBwyUGZAu1Tim",
                description: "Molly for The Defualt Plant from Heaven.",
                position: { x: 16.6, y: 68 },
                role: "defending"
            },
            {
                agent: "Brimstone",
                title: "A Dice Molly",
                video: "https://www.youtube.com/embed/0l6WbmTG9GI?si=5OEunIEfLGobdlCR",
                description: "Molly for The Dice Plant from A Main.",
                position: { x: 90.5, y: 35.5 },
                role: "attacking"
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "Cypher",
                title: "A Site Trapwire",
                video: "https://www.youtube.com/embed/_j1IdK3M5KY?si=r2nBhkB3tRx1GNCz",
                description: "Trapwire for A Site / tree. Place it on the corner of the wall to catch enemies entering tree.",
                position: { x: 20, y: 63 },
                role: "defending",
            },
            {
                agent: "Cypher",
                title: "B Site Camera",
                video: "https://www.youtube.com/embed/fnKo9us5oqw?si=eOL2XbBKv4zVVS2l",
                description: "camera for B Site. Place it on the Top of the wall to catch enemies entering B site.",
                position: { x: 69.5, y: 65 },
                role: "defending",
            },
            {
                agent: "Cypher",
                title: "B Stairs Trapwire",
                video: "https://www.youtube.com/embed/-UYAj4m84tw?si=JTc_Opc3jWxZeZpT",
                description: "Trapwire for B Stairs. Place it on the corner of the wall to catch enemies entering B site.",
                position: { x: 78, y: 80 },
                role: "defending",
            },
            {
                agent: "Cypher",
                title: "B Lane Trapwire",
                video: "https://www.youtube.com/embed/sibIz5h2QsE?si=dImAGQZQn0_Cj5qa",
                description: "Trapwire for B Lane. Place it on the wall to catch enemies entering B site.",
                position: { x: 86, y: 68 },
                role: "defending",
            },
            {
                agent: "Cypher",
                title: "A Site Cage",
                video: "https://www.youtube.com/embed/OSP82FJqJ4U?si=hkeRjBPI8J1snmQA",
                description: "One Way Cage for A Site. You can see enimies but they cant see you",
                position: { x: 13.5, y: 60 },
                role: "defending",
            },
            {
                agent: "Cypher",
                title: "B Site Cage",
                video: "https://www.youtube.com/embed/PqE1aTYsxEg?si=hv080Uvs2otraGK3",
                description: "One Way Cage for B Site. You can see enimies but they cant see you",
                position: { x: 67, y: 66 },
                role: "defending",
            },
            {
                agent: "Cypher",
                title: "B Site Cage",
                video: "https://www.youtube.com/embed/t643rlXfjGs?si=EPeirEh12GUXRwip",
                description: "One Way Cage for B Site. You can see enimies but they cant see you",
                position: { x: 72, y: 66 },
                role: "defending",
            },
            {
                agent: "Cypher",
                title: "A Tree Cage",
                video: "https://www.youtube.com/embed/lfQfB0S6K3g?si=KnWn8r4MFOa-UpuZ",
                description: "Cage for A Tree. Block view from Tree to site.",
                position: { x: 78, y: 41.8 },
                role: "attacking",
            },
            {
                agent: "Cypher",
                title: "B CT Cage",
                video: "https://www.youtube.com/embed/A8UuZwo4ecM?si=NW5oatvQ1UWuIE0b",
                description: "Cage for B CT. Block view from CT to site.",
                position: { x: 30, y: 22 },
                role: "attacking",
            },
            {
                agent: "Cypher",
                title: "Mid Bottom Cage",
                video: "https://www.youtube.com/embed/EiwrfpHIuk8?si=8rvTEyCco2us6PrB",
                description: "Cage for Mid Bottom. Block view from Mid Bottom.",
                position: { x: 49, y: 45 },
                role: "attacking",
            },
            {
                agent: "Cypher",
                title: "B Site Trapwire",
                video: "https://www.youtube.com/embed/-Aazs9RuYHw?si=KSKk8kyrnv6hN_EW",
                description: "Trapwire for B Site. Place it on the corner of the white square on the wall to catch enemies entering B site.",
                position: { x: 74, y: 69 },
                role: "defending",
            },
            {
                agent: "Cypher",
                title: "A Site Cage",
                video: "https://www.youtube.com/embed/UtzJG20xbFY?si=pv0-yKNdl0VPzSDc",
                description: "One Way Cage for A Site. You can see enimies but they cant see you",
                position: { x: 10, y: 60 },
                role: "defending",
            },
            {
                agent: "Cypher",
                title: "A Site Camera",
                video: "https://www.youtube.com/embed/-n-1p-oVvrg?si=FEPeucuyYp8Mudfe",
                description: "camera for A Site. Place it on the Top of the left wall to catch enemies entering A site or tree.",
                position: { x: 4, y: 65 },
                role: "defending",
            },
            {
                agent: "Cypher",
                title: "A Heaven Trapwire",
                video: "https://www.youtube.com/embed/haeDnSWnKnw?si=s8aXpZojOCFCDPAS",
                description: "Trapwire for A Heaven. Place it on the corner of the Gen to catch enemies entering A site from heaven.",
                position: { x: 88, y: 27 },
                role: "attacking",
            },
            {
                agent: "Cypher",
                title: "A Site Trapwire",
                video: "https://www.youtube.com/embed/ygyyHYyACxM?si=3iFOQmTW-G0svcsG",
                description: "Trapwire for A Site. Place it on the boxes near A Main to catch enemies entering A site.",
                position: { x: 12, y: 61 },
                role: "defending",
            },
            {
                agent: "Cypher",
                title: "A Site Trapwire",
                video: "https://www.youtube.com/embed/r5DVh6C9d24?si=nF_51GALBjX14sbH",
                description: "Trapwire for A Site. Place it on the corner of the gen to catch enemies entering A site.",
                position: { x: 11, y: 65 },
                role: "defending",
            },
            {
                agent: "Cypher",
                title: "B Stairs Trapwire",
                video: "https://www.youtube.com/embed/-UYAj4m84tw?si=JTc_Opc3jWxZeZpT",
                description: "Trapwire for B Stairs. Take contol for post plant.",
                position: { x: 22, y: 25 },
                role: "attacking",
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "Deadlock",
                title: "B Main Barrier",
                video: "https://www.youtube.com/embed/rsTI12h7lUs?si=KMm6Mkg_noS2pBPM",
                description: "Barrier for B Main, From B stairs.",
                position: { x: 70.5, y: 65 },
                role: "defending",
            },
            {
                agent: "Deadlock",
                title: "B Main Gravnet",
                video: "https://www.youtube.com/embed/nIJPMsrExeM?si=uKT3RaZ-elVnqadZ",
                description: "Gravnet for B Main, From B out market.",
                position: { x: 79, y: 63 },
                role: "defending",
            },
            {
                agent: "Deadlock",
                title: "B Site Annihilation",
                video: "https://www.youtube.com/embed/rsTI12h7lUs?si=KMm6Mkg_noS2pBPM",
                description: "Annihilation (ULT) for B Site, From B CT.",
                position: { x: 87, y: 76 },
                role: "defending",
            },
            {
                agent: "Deadlock",
                title: "B CT Barrier",
                video: "https://www.youtube.com/embed/zp59r_TqXEk?si=ilX8Nwr7kPNNih7o",
                description: "Barrier for B CT, From B Main.",
                position: { x: 30, y: 23 },
                role: "attacking",
            },
            {
                agent: "Deadlock",
                title: "B Market Barrier",
                video: "https://www.youtube.com/embed/RJ2kvSrQNxE?si=w5NDEUVwJ-jR7mwk",
                description: "Barrier for B Market, From B Main.",
                position: { x: 37, y: 31.2 },
                role: "attacking",
            },
            {
                agent: "Deadlock",
                title: "Cubby Gravnet",
                video: "https://www.youtube.com/embed/WpRiL3iTE5U?si=OPUhL2_1coTDFMu_",
                description: "Gravnet for Cubby, From A lobby.",
                position: { x: 66, y: 49 },
                role: "attacking",
            },
            {
                agent: "Deadlock",
                title: "A Site Annihilation",
                video: "https://www.youtube.com/embed/RWuyyRbTIaQ?si=NxZCOhxRDI4XW0t8",
                description: "Annihilation (ULT) for A Site Defualt plant, From A Main.",
                position: { x: 83.5, y: 37 },
                role: "attacking",
            },
            {
                agent: "Deadlock",
                title: "B Site Gravnet",
                video: "https://www.youtube.com/embed/rwPzhBTVaH8?si=zgnyK3rOO6O97Vs4",
                description: "Gravnet for B Site, From B Main.",
                position: { x: 11, y: 31 },
                role: "attacking",
            },
            {
                agent: "Deadlock",
                title: "B Site Annihilation",
                video: "https://www.youtube.com/embed/XjdSZKKn12E?si=uK0IM3Fckxztpi_y",
                description: "Annihilation (ULT) for B Site, From B Main.",
                position: { x: 14, y: 32 },
                role: "attacking",
            },
            {
                agent: "Deadlock",
                title: "B Stairs Gravnet",
                video: "https://www.youtube.com/embed/eXLCuyBQ6pU?si=COJGEc2rMQp4zCoN",
                description: "Gravnet for B Stairs, From B Main.",
                position: { x: 23, y: 24.5 },
                role: "attacking",
            },
            {
                agent: "Deadlock",
                title: "A Gen Gravnet",
                video: "https://www.youtube.com/embed/X7NtdUshKPE?si=bfo_4EDEd93mKCfa",
                description: "Gravnet for A Site gen plant, From A Ramps.",
                position: { x: 16.7, y: 68 },
                role: "defending",
            },
            {
                agent: "Deadlock",
                title: "B Site Gravnet",
                video: "https://www.youtube.com/embed/ZqtqfmoJwhI?si=cWztkOQPUg3-7o-M",
                description: "Gravnet for B Site, From B Main.",
                position: { x: 78, y: 68 },
                role: "defending",
            },
            {
                agent: "Deadlock",
                title: "A Backsite Gravnet",
                video: "https://www.youtube.com/embed/DpGG_ptUvUA?si=mLzGS-FNp8ZALzFg",
                description: "Gravnet for A Backsite, From A Main.",
                position: { x: 90, y: 32 },
                role: "attacking",
            },
            {
                agent: "Deadlock",
                title: "A Main Barrier",
                video: "https://www.youtube.com/embed/EpKqCU80J9I?si=-1r-rnkYKJG7IXrj",
                description: "Barrier for A Main, From gen.",
                position: { x: 12, y: 60 },
                role: "defending",
            },
            {
                agent: "Deadlock",
                title: "A Gen Annihilation",
                video: "https://www.youtube.com/embed/IjLl5Nd30Dk?si=I3a4kigKtb43I-7p",
                description: "Annihilation (ULT) for A Site gen, From A Ramps.",
                position: { x: 17, y: 75 },
                role: "defending",
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "Fade",
                title: "A Site Haunt",
                video: "https://www.youtube.com/embed/hxOtRAgBUEo?si=CHwl27BP4Fc3SMJf",
                description: "Haunt for A Site. Reveals A site.",
                position: { x: 86, y: 45 },
                role: "attacking",
            },
            {
                agent: "Fade",
                title: "A Site Haunt",
                video: "https://www.youtube.com/embed/NEIEr2gCTSs?si=sc5lFvQPXcU2g4Ff",
                description: "Haunt for A Site. Reveals A site. From A Main",
                position: { x: 80, y: 38 },
                role: "attacking",
            },
            {
                agent: "Fade",
                title: "A Main/Lobby Haunt",
                video: "https://www.youtube.com/embed/Pow9gPqAMyw?si=0T1zilnr_zMzYF_v",
                description: "Haunt for A Site. Reveals A Main and A Lobby. From A Site",
                position: { x: 27, y: 52 },
                role: "defending",
            },
            {
                agent: "Fade",
                title: "B Lobby Haunt",
                video: "https://www.youtube.com/embed/fkL81qlAgxQ?si=mgZ3TPXt7LCVXJ4I",
                description: "Haunt for B Lobby. Reveals B Lobby.",
                position: { x: 81.7, y: 54 },
                role: "defending",
            },
            {
                agent: "Fade",
                title: "B Site Haunt",
                video: "https://www.youtube.com/embed/BmNzttbUmiQ?si=BdyP4HA2GT8WbiXF",
                description: "Haunt for B Site. Reveals B Site, From B Lobby",
                position: { x: 18, y: 39 },
                role: "attacking",
            },
            {
                agent: "Fade",
                title: "B CT/Site Haunt",
                video: "https://www.youtube.com/embed/HKaXdWyzmTQ?si=KxcGyPkej20IzdIf",
                description: "Haunt for B CT/Site. Reveals B Site and CT, From B Lobby",
                position: { x: 27, y: 23 },
                role: "attacking",
            },
            {
                agent: "Fade",
                title: "B Stairs Seize",	
                video: "https://www.youtube.com/embed/LGrqR49gkrk?si=ekQhSc9vLWmdidf9",
                description: "Seize for B Stairs. From B Main.",
                position: { x: 23, y: 24.5 },
                role: "attacking",
            },
            {
                agent: "Fade",
                title: "Mid Haunt",
                video: "https://www.youtube.com/embed/8iqBa9EIchk?si=77BSyVr_k2vYrTOg",
                description: "Haunt for Mid. Reveals Mid and Pizza, From B Link",
                position: { x: 46, y: 37 },
                role: "attacking",
            },
            {
                agent: "Fade",
                title: "Mid Bottom/Cubby Haunt",
                video: "https://www.youtube.com/embed/zKtos_EaBgc?si=1mJBb2RgHWhmRbuK",
                description: "Haunt for Mid Bottom/Cubby. Reveals Mid Bottom and Cubby, From B Link",
                position: { x: 55, y: 46 },
                role: "attacking",
            },
            {
                agent: "Fade",
                title: "Cubby Haunt",
                video: "https://www.youtube.com/embed/Gk_KBehZHyQ?si=idRPEEq9Z8x7E_hQ",
                description: "Haunt for Cubby. Reveals Cubby, From A Lobby",
                position: { x: 69, y: 51 },
                role: "attacking",
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "Gekko",
                title: "A Main Molly",
                video: "https://www.youtube.com/embed/yQm_Qoa5IOg?si=4otEqYtGvfmjAMYM",
                description: "Molly for A Main. From A Site.",
                position: { x: 25, y: 55 },
                role: "defending",
            },
            {
                agent: "Gekko",
                title: "A Site Molly",
                video: "https://www.youtube.com/embed/ckdu2woAILU?si=Sg6DYP3lW5liJvcx",
                description: "Molly for A Site defualt plant. From Ramps.",
                position: { x: 16.5, y: 68 },
                role: "defending",
            },
            {
                agent: "Gekko",
                title: "B Site Molly",
                video: "https://www.youtube.com/embed/Ir7JvyUPTRk?si=OwbVT1KVfNfeizxE",
                description: "Molly for B Site defualt plant. From CT.",
                position: { x: 89, y: 74 },
                role: "defending",
            },
            {
                agent: "Gekko",
                title: "B Main Molly",
                video: "https://www.youtube.com/embed/1L3R1rWhZgE?si=aVkY055YB6pnN_0F",
                description: "Molly for B Main. From Outside Maket.",
                position: { x: 81, y: 62 },
                role: "defending",
            },
            {
                agent: "Gekko",
                title: "B Site Molly",
                video: "https://www.youtube.com/embed/uBxBjKbcbyk?si=uxNxTDuW6yffgJu8",
                description: "Molly for The Corner plant. From B Main.",
                position: { x: 10, y: 35 },
                role: "attacking",
            },
            {
                agent: "Gekko",
                title: "Wingman For B Corner Plant from B Main",
                video: "https://www.youtube.com/embed/g8QzepRWUmg?si=zORQSvT6fsqRlKkK",
                description: "Wingman for The Corner plant. From B Main.",
                position: { x: 8, y: 34 },
                role: "attacking",
            },
            {
                agent: "Gekko",
                title: "A Site Molly",
                video: "https://www.youtube.com/embed/uGbXydtqVzY?si=piTlyAD9idaWJw4n",
                description: "Molly for A Site defualt plant. From Mid Cubby.",
                position: { x: 83, y: 38 },
                role: "attacking",
            },
            {
                agent: "Gekko",
                title: "A Site Molly",
                video: "https://www.youtube.com/embed/-tx7GafQkks?si=eGvyxbIE514GAVv5",
                description: "Molly for A Site defualt plant. From A Main.",
                position: { x: 83.5, y: 36 },
                role: "attacking",
            },
            {
                agent: "Gekko",
                title: "A Site Molly",
                video: "https://www.youtube.com/embed/0mqinz4qFEE?si=uTGu84IT2LlvY1bG",
                description: "Molly for A Site dice plant. From A Main.",
                position: { x: 90, y: 35 },
                role: "attacking",
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "Killjoy",
                title: "A Site Molly",
                video: "https://www.youtube.com/embed/r2i71ZuHkNc?si=--K9juPFEC_6AsCv",
                description: "Molly for A Site dice plant. From A Main.",
                position: { x: 90, y: 35 },
                role: "attacking",
            },
            {
                agent: "Killjoy",
                title: "B site Molly",
                video: "https://www.youtube.com/embed/HuwsAG24YTg?si=wpreRzQudbADLZhp",
                description: "Molly for B site dice plant. From B Lobby.",
                position: { x: 12, y: 31 },
                role: "attacking",
            },
            {
                agent: "Killjoy",
                title: "B site Molly",
                video: "https://www.youtube.com/embed/9q3RJQFOL90?si=piGbRjIM25Wx7sNX",
                description: "Molly for B site corner plant. From B Lobby.",
                position: { x: 9, y: 34 },
                role: "attacking",
            },
            {
                agent: "Killjoy",
                title: "A site Molly",
                video: "https://www.youtube.com/embed/PbzUEbxIYR4?si=eyfQpHv0FmhCOAGo",
                description: "Molly for B site defualt plant. From A Lobby.",
                position: { x: 83.5, y: 37 },
                role: "attacking",
            },
            {
                agent: "Killjoy",
                title: "B Main one way Molly",
                video: "https://www.youtube.com/embed/wBhgWUaHdDA?si=x1TUYnzWyf-2qV1i",
                description: "Molly for B Main to block the entrance. From A Lobby.",
                position: { x: 68, y: 66 },
                role: "defending",
            },
            {
                agent: "Killjoy",
                title: "B Main one way Molly",
                video: "https://www.youtube.com/embed/488LmpTlCR0?si=QnoSB5yDbRPE3eiW",
                description: "Molly for B Main to block the entrance.",
                position: { x: 71, y: 66 },
                role: "defending",
            },
            {
                agent: "Killjoy",
                title: "A Main one way Molly",
                video: "https://www.youtube.com/embed/qh1qciF55UE?si=sUWimGmCNpbxryU0",
                description: "Molly for A Main to block the entrance.",
                position: { x: 13, y: 58 },
                role: "defending",
            },
            {
                agent: "Killjoy",
                title: "A Site Molly",
                video: "https://www.youtube.com/embed/9Wc7aD6k_xc?si=0YvLNH73bwNx68MD",
                description: "Molly for A Site dice plant. From Ramps.",
                position: { x: 10, y: 70 },
                role: "defending",
            },
            {
                agent: "Killjoy",
                title: "A Site Molly",
                video: "https://www.youtube.com/embed/Z5Nqq94jnYc?si=npnFaWmsoQSRjEDw",
                description: "Molly for A Gen. From Ramps.",
                position: { x: 19, y: 71 },
                role: "defending",
            },
            {
                agent: "Killjoy",
                title: "B Site Setup",
                video: "https://www.youtube.com/embed/XBDyVPIAluo?si=KjKEzG2Np_J9hJ-T",
                description: "Molly + allarm Bot for B site setup.",
                position: { x: 86, y: 67.5 },
                role: "defending",
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "KAYO",
                title: "Garden knife",
                video: "https://www.youtube.com/embed/pcS4KR07Wlk?si=0VIlaXq04UKe_3sg",
                description: "Knife for Garden From A Lobby.",
                position: { x: 73, y: 39 },
                role: "attacking",
            },
            {
                agent: "KAYO",
                title: "Gen knife",
                video: "https://www.youtube.com/embed/OGkf3gc_YQ0?si=-L8wo8hoCy9RJONj",
                description: "Knife on top of gen for A Site From A Lobby.",
                position: { x: 83.5, y: 34 },
                role: "attacking",
            },
            {
                agent: "KAYO",
                title: "Dice knife",
                video: "https://www.youtube.com/embed/qe5GqIk85cg?si=xLqVhqioKtzfMXLe",
                description: "Knife on top of dice for A Site From A Lobby.",
                position: { x: 90, y: 33 },
                role: "attacking",
            },
            {
                agent: "KAYO",
                title: "A Site Flash",
                video: "https://www.youtube.com/embed/dhDhKxv1jyc?si=WTmJk6ntMwV7s-td",
                description: "One Way flash for A site",
                position: { x: 88.5, y: 45 },
                role: "attacking",
            },
            {
                agent: "KAYO",
                title: "Gen Plant FRAG/MENT",
                video: "https://www.youtube.com/embed/s0WolKR3jw8?si=bXyat5h9hpDstyIz",
                description: "FRAG/MENT for Gen Plant. From A Lobby.",
                position: { x: 83.5, y: 37.5 },
                role: "attacking",
            },
            {
                agent: "KAYO",
                title: "Dice Plant FRAG/MENT",
                video: "https://www.youtube.com/embed/s0WolKR3jw8?si=bXyat5h9hpDstyIz",
                description: "FRAG/MENT for Dice Plant. From A Lobby.",
                position: { x: 91, y: 35 },
                role: "attacking",
            },
            {
                agent: "KAYO",
                title: "Tree Flash",
                video: "https://www.youtube.com/embed/2oyfFjHQtWM?si=AvlfGXaVnqpty2RT",
                description: "Flash for tree from cubby.",
                position: { x: 67.3, y: 45 },
                role: "attacking",
            },
            {
                agent: "KAYO",
                title: "A Lobby knife",
                video: "https://www.youtube.com/embed/yef5SDNgYpc?si=9NUfyikqxVxlXzss",
                description: "Knife for A Lobby / Main From A Ramps.",
                position: { x: 23, y: 53 },
                role: "defending",
            },
            {
                agent: "KAYO",
                title: "B Site knife",
                video: "https://www.youtube.com/embed/26jLrcMu--A?si=UiB5PjK26ZFDo4kv",
                description: "Knife for B Site From B Main.",
                position: { x: 22, y: 31 },
                role: "attacking",
            },
            {
                agent: "KAYO",
                title: "B Site FRAG/MENT",
                video: "https://www.youtube.com/embed/nPBB20S5o0k?si=MIiJH6WaR2Af4zqS",
                description: "FRAG/MENT for B Site default plant, From B lobby.",
                position: { x: 12, y: 31 },
                role: "attacking",
            },
            {
                agent: "KAYO",
                title: "B Site Flash",
                video: "https://www.youtube.com/embed/I7DglnSqYDU?si=d43GxYEeYgKbx6JF",
                description: "Flash for B Site / Lane, From B lobby.",
                position: { x: 22, y: 38 },
                role: "attacking",
            },
            {
                agent: "KAYO",
                title: "B CT FRAG/MENT",
                video: "https://www.youtube.com/embed/WIuVhonlbso?si=7yBRwQ9ql6vSdRUe",
                description: "FRAG/MENT for B CT, From B Main.",
                position: { x: 30, y: 23 },
                role: "attacking",
            },
            {
                agent: "KAYO",
                title: "B Stairs FRAG/MENT",
                video: "https://www.youtube.com/embed/uvvS2BZpPCM?si=chTQ-QXqTv_otiKx",
                description: "FRAG/MENT for B Stairs, From B Main.",
                position: { x: 23, y: 24 },
                role: "attacking",
            },
            {
                agent: "KAYO",
                title: "B Market FRAG/MENT",
                video: "https://www.youtube.com/embed/bDULxtzf7yg?si=aHv9wRTszTWjMsqF",
                description: "FRAG/MENT for B Market, From B Main.",
                position: { x: 36, y: 31 },
                role: "attacking",
            },
            {
                agent: "KAYO",
                title: "Mid Flash",
                video: "https://www.youtube.com/embed/lwR-2vJp6To?si=ZULMiXhFkkGXud5t",
                description: "One way Flash Mid B Link.",
                position: { x: 59, y: 51 },
                role: "defending",
            },
            {
                agent: "KAYO",
                title: "A Main corner FRAG/MENT",
                video: "https://www.youtube.com/embed/7Zz5L1ClJ0s?si=TJwgYBYha7OqFqu5",
                description: "FRAG/MENT for A Main corner, From A Site.",
                position: { x: 26, y: 57 },
                role: "defending",
            },
            {
                agent: "KAYO",
                title: "A Dice plant FRAG/MENT",
                video: "https://www.youtube.com/embed/AnpOWg08Obk?si=wS04LHhzxlKm3uCe",
                description: "FRAG/MENT for A Dice Plant, From A Ramps.",
                position: { x: 10, y: 70 },
                role: "defending",
            },
            {
                agent: "KAYO",
                title: "A Site / under Flash",
                video: "https://www.youtube.com/embed/Sxd6ZJoDQ5o?si=nlqZEf_JWKopv-zj",
                description: "One way Flash A site / under.",
                position: { x: 10, y: 76 },
                role: "defending",
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "Phoenix", 
                title: "A Main Flash / Molly",
                video: "https://www.youtube.com/embed/gUWlEqcaDdc?si=cqFLKP50qggN6_6_",
                description: "Flash / Molly for A Main.",
                position: { x: 25, y: 55 },
                role: "defending",
            },
            {
                agent: "Phoenix", 
                title: "A gen Molly",
                video: "https://www.youtube.com/embed/hvs6aD9sIE0?si=iKiwWfAmg-r9SwS4",
                description: "Molly for A gen.",
                position: { x: 16.7, y: 68 },
                role: "defending",
            },
            {
                agent: "Phoenix", 
                title: "B Main Flash ",
                video: "https://www.youtube.com/embed/x_Q4wKcuCgw?si=NOGOXInkAb2SReRX",
                description: "One Way Flash for B Main.",
                position: { x: 74, y: 64 },
                role: "defending",
            },
            {
                agent: "Phoenix", 
                title: "B Corner Molly",
                video: "https://www.youtube.com/embed/asQeDRsEDPc?si=PmTltlTmXp1c6oqv",
                description: "Molly for B Corner.",
                position: { x: 80, y: 70 },
                role: "defending",
            },
            {
                agent: "Phoenix", 
                title: "B defualt plant Molly",
                video: "https://www.youtube.com/embed/1bs0o2mqj18?si=IH0jpJsQxgcH4XM9",
                description: "Molly for B default plant. from CT",
                position: { x: 89, y: 74 },
                role: "defending",
            },
            {
                agent: "Phoenix", 
                title: "A defualt plant Molly",
                video: "https://www.youtube.com/embed/-jc75EBY0Rg?si=HvfOgOmcs6L9XAWi",
                description: "Molly for A default plant. From A Lobby",
                position: { x: 83.5, y: 37 },
                role: "attacking",
            },
            {
                agent: "Phoenix", 
                title: "Tree Molly",
                video: "https://www.youtube.com/embed/sHybY63AOeU?si=0kcp2ZmIeWyERPlY",
                description: "Molly for Tree. From A Main",
                position: { x: 78, y: 41.5 },
                role: "attacking",
            },
            {
                agent: "Phoenix", 
                title: "B defualt plant Molly",
                video: "https://www.youtube.com/embed/Pq11O6W31xc?si=EVZK-bEkTnHTmK05",
                description: "Molly for B default plant. From B Main",
                position: { x: 12, y: 31 },
                role: "attacking",
            },
            {
                agent: "Phoenix", 
                title: "B CT Molly",
                video: "https://www.youtube.com/embed/5xqeVEHI_oA?si=RG6SsVEwkELIUXc9",
                description: "Molly for CT. From B Main",
                position: { x: 30, y: 23 },
                role: "attacking",
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "Raze",
                title: "B Main Paint Shells",
                video: "https://www.youtube.com/embed/-xdIq8imITY?si=CyKTYZJpfK0owmMu",
                description: "Paint Shells for B Main.",
                position: { x: 81.9, y: 55 },
                role: "defending"
            },
            {
                agent: "Raze",	
                title: "A Main Boom Bot",
                video: "https://www.youtube.com/embed/NyTh1LSOba0?si=xdWw4c6juqLh61u6",
                description: "Boom Bot for A Main. Perfect for clearing corners",
                position: { x: 88.6, y: 47 },
                role: "attacking"
            },
            {
                agent: "Raze",	
                title: "A Site Paint Shells",
                video: "https://www.youtube.com/embed/6RkYG5sDZ0M?si=v6hHhdnyaBJn4XTX",
                description: "Paint Shells A Site. Perfect For trips.",
                position: { x: 82, y: 44 },
                role: "attacking"
            },
            {
                agent: "Raze",	
                title: "A Dice Paint Shells",
                video: "https://www.youtube.com/embed/6RkYG5sDZ0M?si=v6hHhdnyaBJn4XTX",
                description: "Paint Shells A Dice. Perfect For Post Plant / trips.",
                position: { x: 90, y: 36 },
                role: "attacking"
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "Viper",
                title: "B Toxic Screen",
                video: "https://www.youtube.com/embed/9r848J_Cwkw?si=-qVCfhX03qlQRT4H",
                description: "Toxic Screen for B. Perfect for blocking off sightlines From CT + Market",
                position: { x: 30, y: 23 },
                role: "attacking"
            },
            {
                agent: "Viper",
                title: "Cubby Toxic Screen",
                video: "https://www.youtube.com/embed/Zpc3IDHGDUA?si=ka7IacOTsLZFwF_s",
                description: "Toxic Screen for Cubby From B Lobby. Perfect for blocking off sightlines From Bottom Mid",
                position: { x: 67, y: 45 },
                role: "attacking"
            },
            {
                agent: "Viper",
                title: "A Toxic Screen",
                video: "https://www.youtube.com/embed/YqGpy2i-EO0?si=iBMgmg044WbtA_l-",
                description: "Toxic Screen for A. Perfect for blocking off sightlines to enter site",
                position: { x: 88, y: 27 },
                role: "attacking"
            },
            {
                agent: "Viper",
                title: "A Viper's Pit /Snake Bite",
                video: "https://www.youtube.com/embed/6PNJF2r_ww4?si=gOSL19Xv-X5kAQnk",
                description: "Viper's Pit for A. For post plant situations. Snake Bite for A Site From Wine.",
                position: { x: 93, y: 38 },
                role: "attacking"
            },
            {
                agent: "Viper",
                title: "A gen Poison Cloud",
                video: "https://www.youtube.com/embed/ejOXbYh_GnM?si=hBuagBXu2ZT5iiLR",
                description: "Poison Cloud for A gen. One Way on top of gen",
                position: { x: 83.5, y: 35 },
                role: "attacking"
            },
            {
                agent: "Viper",
                title: "B Corner Plant Snake Bite",
                video: "https://www.youtube.com/embed/cHYGuoBj_GU?si=8I-ZgQ6MKIhNRN4q",
                description: "Snake Bite for B Corner Plant. From B Lobby.",
                position: { x: 9, y: 35 },
                role: "attacking"
            },
            {
                agent: "Viper",
                title: "B default Plant Snake Bite",
                video: "https://www.youtube.com/embed/O5Q4g0y1e6I?si=hoXA45Ayv9b1UEDN",
                description: "Snake Bite for B Corner Plant. From B Lobby.",
                position: { x: 12, y: 32 },
                role: "attacking"
            },
            {
                agent: "Viper",
                title: "B default Plant Poison Cloud",
                video: "https://www.youtube.com/embed/7LzgaDr9V2U?si=qTzAVlsbtwcKwy9N",
                description: "Poison Cloud for B Corner Plant. From B Lobby.",
                position: { x: 12, y: 30 },
                role: "attacking"
            },
            {
                agent: "Viper",
                title: "A gen Plant Snake Bite",
                video: "https://www.youtube.com/embed/ULh3uju-WdY?si=LBB6SDunuflUY1WC",
                description: "Snake Bite for A gen Plant. From Wine.",
                position: { x: 83.5, y: 37 },
                role: "attacking"
            },
            {
                agent: "Viper",
                title: "A Dice Plant Snake Bite",
                video: "https://www.youtube.com/embed/ZkhVgQYvaVY?si=5uvW4YzKe-PL9to0",
                description: "Snake Bite for A Dice Plant. From A Lobby.",
                position: { x: 90, y: 35 },
                role: "attacking"
            },
        ]
    },
    //2222222222222222222222222222222222222222222222222222222222222222222222222222222
    //2222222222222222222222222222222222222222222222222222222222222222222222222222222
    //2222222222222222222222222222222222222222222222222222222222222222222222222222222
    Haven: {
        minimap: {
            attacking: "assets/images/minimaps/haven.png",
            defending: "assets/images/minimaps/HAVEN-DEF.png"
        },
        lineups: [
            {
                agent: "Sova",
                title: "C Site Recon Bolt",
                video: "https://www.youtube.com/embed/5X-rviX56kY?si=B4DCGZGgvK0E6blC",
                description: "Recon bolt for C site. Perfect for gathering information on enemy positions On C Site.",
                position: { x: 1, y: 36 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "B Site Shock Dart",
                video: "https://www.youtube.com/embed/gWTJGzykkGw?si=zt8glkbP_S8AINuM",
                description: "Shock dart for B site. Perfect for default plant spot.",
                position: { x: 48, y: 44 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "C Site Shock Dart",
                video: "https://www.youtube.com/embed/YXRGwvwkbGg?si=sdK25v45cBLdSw25",
                description: "Shock dart for B site. Perfect for default plant spot.",
                position: { x: 10, y: 42 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "C Site Shock Dart",
                video: "https://www.youtube.com/embed/7jzEUis7shM?si=d43RhjaZ5G3agqBG",
                description: "Shock dart for B site. Pefect to damage enemies hiding Back site.",
                position: { x: 92, y: 38 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "C Lobby Recon Bolt",
                video: "https://www.youtube.com/embed/pL-EFjSW2ws?si=dg-ksCAbMFsPVSGp",
                description: "Recon bolt for C Lobby. Perfect for gathering information.",
                position: { x: 82, y: 31 },
                role: "defending"
            },
            {
                agent: "Sova",
                title: "A Lobby Recon Bolt",
                video: "https://www.youtube.com/embed/6D7zbbUqPH8?si=aKMCdtoIAoeAnOTy",
                description: "Recon bolt for A Lobby. Perfect for gathering information.",
                position: { x: 36, y: 35 },
                role: "defending"
            },
            {
                agent: "Sova",
                title: "A Main Recon Bolt",
                video: "https://www.youtube.com/embed/sEvkne79XuY?si=bZhxJD8w1x3ORuHF",
                description: "Recon bolt for A Main. Perfect for gathering information.",
                position: { x: 22, y: 38 },
                role: "defending"
            },
            {
                agent: "Sova",
                title: "B Site Recon Bolt",
                video: "https://www.youtube.com/embed/rR4Qn9si2m0?si=Zhw4SG5UoGla6plP",
                description: "Recon bolt for B Site. Perfect for gathering information Back site.",
                position: { x: 50.5, y: 35 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "A Site Recon Bolt",
                video: "https://www.youtube.com/embed/SsuhbP5j_Yk?si=i1pPUR9DeFOlnumV",
                description: "Recon bolt for A Site. Perfect for gathering information.",
                position: { x: 91, y: 35 },
                role: "attacking"
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "KAYO",
                title: "C Site Knife",
                video: "https://www.youtube.com/embed/TZlTTZ7G328?si=GnsAvxM6y6G61xSA",
                description: "Knife for C Site. Perfect for gathering information.",
                position: { x: 87, y: 63 },
                role: "defending"
            },
            {
                agent: "KAYO",
                title: "C site Knife",
                video: "https://www.youtube.com/embed/pPQEPxRX99c?si=1Tm4ZrAiEYx1TGaH",
                description: "Knife for C site. Perfect for gathering information.",
                position: { x: 13, y: 43 },
                role: "attacking"
            },
            {
                agent: "KAYO",
                title: "C Frag/ment",
                video: "https://www.youtube.com/embed/32T42gAaMSk?si=JCmeUcK19CF5Pg7s",
                description: "Frag/ment for C defualt plant. Perfect for Post plant situations.",
                position: { x: 10, y: 42 },
                role: "attacking"
            },
            {
                agent: "KAYO",
                title: "B Frag/ment",
                video: "https://www.youtube.com/embed/5WbCZi5TBWI?si=dEpmOhQtoHRhJPup",
                description: "Frag/ment for B defualt plant. Perfect for Post plant situations.",
                position: { x: 47, y: 45 },
                role: "attacking"
            },
            {
                agent: "KAYO",
                title: "A Frag/ment",
                video: "https://www.youtube.com/embed/Suz3ixQbFBs?si=cKfTIPen3P3KAOSQ",
                description: "Frag/ment for A defualt plant. Perfect for Post plant situations.",
                position: { x: 90, y: 43 },
                role: "attacking"
            },
            {
                agent: "KAYO",
                title: "A Lobby Knife",
                video: "https://www.youtube.com/embed/ttoQpHgq7hc?si=7lvzXhF5W8nVQtdk",
                description: "Knife for A lobby. Perfect for gathering information.",
                position: { x: 30, y: 40 },
                role: "defending"
            },
            {
                agent: "KAYO",
                title: "A Lobby Knife",
                video: "https://www.youtube.com/embed/kBjGTgfUCqI?si=ONRJGsXxKbxSlt65",
                description: "Knife for A lobby. Perfect for gathering information.",
                position: { x: 42, y: 38 },
                role: "defending"
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "Jett",
                title: "A Main Blade Storm",
                video: "https://www.youtube.com/embed/8yMh-jedbj0?si=Ju2pWfHMuT_mA7F_",
                description: "Blade Storm for A Main. To get an early pick.",
                position: { x: 68, y: 72 },
                role: "attacking"
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "Gekko",
                title: "C Site Mosh Pit",
                video: "https://www.youtube.com/embed/Fa-SSHsS6JU?si=zS6tbrBPbtf2KnTe",
                description: "Mosh Pit for C site. Perfect for default plant spot.",
                position: { x: 86, y: 63 },
                role: "defending"
            },
            {
                agent: "Gekko",
                title: "A Site Mosh Pit",
                video: "https://www.youtube.com/embed/LyTlVJr9dqU?si=-gNYdqFe3PMt4d7E",
                description: "Mosh Pit for A site. Perfect for default plant spot.",
                position: { x: 89, y: 43 },
                role: "attacking"
            },
            {
                agent: "Gekko",
                title: "B Site Mosh Pit",
                video: "https://www.youtube.com/embed/T-0FCRrzUB0?si=rh8XKiT9gPnHlCXM",
                description: "Mosh Pit for B site. Perfect for default plant spot.",
                position: { x: 47, y: 44.5 },
                role: "attacking"
            },
            {
                agent: "Gekko",
                title: "C Site Mosh Pit",
                video: "https://www.youtube.com/embed/y5s8vZtxO_o?si=pADbvPp-RYG0vggR",
                description: "Mosh Pit for C site. Perfect for default plant spot.",
                position: { x: 9, y: 42 },
                role: "attacking"
            },
            {
                agent: "Gekko",
                title: "A Under Wingman",
                video: "https://www.youtube.com/embed/68NaWPT6Gh0?si=n9nzSSttdxQ3a2l3",
                description: "Wingman for A Under. Perfect to clear corners.",
                position: { x: 6, y: 70 },
                role: "defending"
            },
            {
                agent: "Gekko",
                title: "A Site Mosh Pit",
                video: "https://www.youtube.com/embed/uwuRqoWt41Q?si=QRqL-2coer8JPgZT",
                description: "Mosh Pit for A site. Perfect for default plant spot.",
                position: { x: 9, y: 62 },
                role: "defending"
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "Fade",
                title: "A Main Haunt",
                video: "https://www.youtube.com/embed/kzIxGubUKgs?si=zmFhakwAssSZLLQ6",
                description: "Haunt for A Main.",
                position: { x: 10, y: 44 },
                role: "defending"
            },
            {
                agent: "Fade",
                title: "A Site Haunt",
                video: "https://www.youtube.com/embed/1MWYCGrfTqE?si=Fj1qe3cNsm_zqI6g",
                description: "Haunt for A site.",
                position: { x: 100, y: 37 },
                role: "attacking"
            },
            {
                agent: "Fade",
                title: "A Site Seize",
                video: "https://www.youtube.com/embed/ETy_elcko5o?si=XVwskxSUZ5fbXAS7",
                description: "Seize for A site.",
                position: { x: 90, y: 39 },
                role: "attacking"
            },
            {
                agent: "Fade",
                title: "C Site Haunt",
                video: "https://www.youtube.com/embed/hdVE0SVh36o?si=pkQXcr-Mtj2DRX-H",
                description: "Haunt for C site.",
                position: { x: 0, y: 37 },
                role: "attacking"
            },
            {
                agent: "Fade",
                title: "C Lobby Haunt",
                video: "https://www.youtube.com/embed/XygrGnE-Te0?si=sVOMkMmn7wZlikVd",
                description: "Haunt for C Lobby.",
                position: { x: 83, y: 35 },
                role: "defending"
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "Chamber",
                title: "C Site TP",
                video: "https://www.youtube.com/embed/gz5cKMhHpiU?si=dndUNeYuhkoy7kIr",
                description: "TP for C site.",
                position: { x: 88, y: 63 },
                role: "defending"
            },
            {
                agent: "Chamber",
                title: "A Short TP",
                video: "https://www.youtube.com/embed/7foX2ugfMj0?si=Rbc5r2Q_pOLBmQZ4",
                description: "TP for A Short.",
                position: { x: 68, y: 48 },
                role: "attacking"
            },
            {
                agent: "Chamber",
                title: "Mid garden TP",
                video: "https://www.youtube.com/embed/UhucM3QTFw0?si=0LCIkQ3RIfGBYKUl",
                description: "TP for mid.",
                position: { x: 39, y: 58 },
                role: "attacking"
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "Brimstone",
                title: "B Site Molly",
                video: "https://www.youtube.com/embed/OOWi3QGlJgs?si=fFvbbATlO81fCN5g",
                description: "Post-plant molly for B site. Covers the entire default plant spot.",
                position: { x: 47, y: 45 },
                role: "attacking"
            },
            {
                agent: "Brimstone",
                title: "C Site Molly",
                video: "https://www.youtube.com/embed/b7DMQVc9YIA?si=hs8VXxp1XZpBJqMJ",
                description: "Post-plant molly for C site. Covers the entire default plant spot.",
                position: { x: 9, y: 42 },
                role: "attacking"
            },
            {
                agent: "Brimstone",
                title: "C Site Molly",
                video: "https://www.youtube.com/embed/hi4kvEbl8Cs?si=mjLwGnwitGeVa6sU",
                description: "Covers the entire default plant spot.",
                position: { x: 91, y: 63 },
                role: "defending"
            },
            {
                agent: "Brimstone",
                title: "A Site Molly",
                video: "https://www.youtube.com/embed/1xD2oElPoWk?si=r43bpGnVA6Tp_7HH",
                description: "Covers the entire default plant spot.",
                position: { x: 10, y: 62 },
                role: "defending"
            },
            {
                agent: "Brimstone",
                title: "A Site Molly",
                video: "https://www.youtube.com/embed/fG4Ze5GmXWU?si=E1oJqAzsAbU6ikUd",
                description: "Post-plant molly for A site.",
                position: { x: 93, y: 43 },
                role: "attacking"
            },
            {
                agent: "Brimstone",
                title: "A Site Molly",
                video: "https://www.youtube.com/embed/f_KV9jQ7tJE?si=Xk7_H-MDGYxFqpih",
                description: "Post-plant molly for A site.",
                position: { x: 95, y: 40 },
                role: "attacking"
            },
            {
                agent: "Brimstone",
                title: "A corner Molly",
                video: "https://www.youtube.com/embed/VAx8-dnx6zA?si=wFC4WI14NvLF5g45",
                description: "Post-plant molly for A site corner plant",
                position: { x: 99, y: 37 },
                role: "attacking"
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "Cypher",
                title: "B site tripwire",
                video: "https://www.youtube.com/embed/zG0yiZu73Og?si=bKH96RHHHFcVllkE",
                description: "Tripwire for B site. Prevent enemies from entering B site.",
                position: { x: 50, y: 58 },
                role: "defending"
            },
            {
                agent: "Cypher",
                title: "B Site Camera",
                video: "https://www.youtube.com/embed/xuxxEJhQzOw?si=IPNaIGVcGQ7VlAW0",
                description: "Camera for B site. Perfect for gathering information.",
                position: { x: 42, y: 56 },
                role: "defending"
            },
            {
                agent: "Cypher",
                title: "C site tripwire",
                video: "https://www.youtube.com/embed/J-hBFTUXkvY?si=s2k_WU_Zgw4LHXc8",
                description: "Tripwire for C site. Prevent enemies from entering C site or planting",
                position: { x: 90, y: 60 },
                role: "defending"
            },
            {
                agent: "Cypher",
                title: "C Main cage",
                video: "https://www.youtube.com/embed/DNBa2NIXzOE?si=MBKZWMHKhciJIBjJ",
                description: "Cage for C Main. one way for C Main.",
                position: { x: 92, y: 51 },
                role: "defending"
            },
            {
                agent: "Cypher",
                title: "C Main cage",
                video: "https://www.youtube.com/embed/7JDsH8oEf7w?si=GH5tx2Ca1NcbZK5b",
                description: "Cage for C Main. one way for C Main. catch enemies entering C site from garage.",
                position: { x: 87, y: 52 },
                role: "defending"
            },
            {
                agent: "Cypher",
                title: "A site tripwire",
                video: "https://www.youtube.com/embed/KxkAEfQf2og?si=hwKlf5ziIIDjnHns",
                description: "Tripwire for A site. Prevent enemies from entering A site.",
                position: { x: 4, y: 67 },
                role: "defending"
            },
            {
                agent: "Cypher",
                title: "A site tripwire",
                video: "https://www.youtube.com/embed/yot9_-uJPTQ?si=LlOXjiIwcScBV0HW",
                description: "Tripwire for A site. catchs enemies trying to plant.",
                position: { x: 4, y: 62 },
                role: "defending"
            },
            {
                agent: "Cypher",
                title: "A site camera",
                video: "https://www.youtube.com/embed/ifNaiblB4DM?si=vxoVSpsyRIA6nGUT",
                description: "Camera for A site.",
                position: { x: 0, y: 69 },
                role: "defending"
            },
            {
                agent: "Cypher",
                title: "A Main cage",
                video: "https://www.youtube.com/embed/GYDd81zErII?si=IFTPRbXkSWzFb61p",
                description: "one way Cage for A Main.",
                position: { x: 8, y: 57 },
                role: "defending"
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "Deadlock",
                title: "A Site Annihilation",
                video: "https://www.youtube.com/embed/eVKxuCW-tRU?si=QMgkFILGhr6smfr6",
                description: "Annihilation for A site.",
                position: { x: 9, y: 62 },
                role: "defending"
            },
            {
                agent: "Deadlock",
                title: "C Site Annihilation",
                video: "https://www.youtube.com/embed/rCXPjI9bl_8?si=t-aVSAveoXPaRDiI",
                description: "Annihilation for c site.",
                position: { x: 87, y: 61 },
                role: "defending"
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "Killjoy",
                title: "C Site Nanoswarm",
                video: "https://www.youtube.com/embed/wrwf-FTRyp0?si=NUkhwXBKyUen7-te",
                description: "Nanoswarm for C site. Perfect post-plant.",
                position: { x: 13, y: 44 },
                role: "attacking"
            },
            {
                agent: "Killjoy",
                title: "A Site Nanoswarm",
                video: "https://www.youtube.com/embed/R4dUgCSzPSg?si=KggofDcJ6x1NkIpR",
                description: "Nanoswarm for A site. Perfect post-plant.",
                position: { x: 92, y: 43 },
                role: "attacking"
            },
            {
                agent: "Killjoy",
                title: "A Site Lockdown",
                video: "https://www.youtube.com/embed/6VKmKjK7IzI?si=qqcpc6QSoMq5Nlyo",
                description: "Lockdown for A site.",
                position: { x: 73, y: 48 },
                role: "attacking"
            },
            {
                agent: "Killjoy",
                title: "B Site Nanoswarm",
                video: "https://www.youtube.com/embed/DbbI_6oLW6s?si=lspt45SvMe6pp7Eg",
                description: "Nanoswarm for A site. Perfect post-plant.",
                position: { x: 47, y: 45 },
                role: "attacking"
            },
        ]
    },
    //2222222222222222222222222222222222222222222222222222222222222222222222222222222
    //2222222222222222222222222222222222222222222222222222222222222222222222222222222
    //2222222222222222222222222222222222222222222222222222222222222222222222222222222
    Pearl: {
        minimap: {
            attacking: "assets/images/minimaps/pearl.png",
            defending: "assets/images/minimaps/PEARL-DEF.png"
        },
        lineups: [
            {
                agent: "Sova",
                title: "B Recon Bolt",
                video: "https://www.youtube.com/embed/ck3h_UQcXNw?si=hnXH0aEby6R8S2f0",
                description: "Scans B Site from b main.",
                position: { x: 19, y: 37 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "Mid Recon Bolt",
                video: "https://www.youtube.com/embed/FiZJgpEu7A4?si=Jk8-Vbz9ByrJ7eWZ",
                description: "Scans B link",
                position: { x: 48, y: 50 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "A Recon Bolt",
                video: "https://www.youtube.com/embed/cb_a_Xr_Paw?si=iyMj-DvtA5aJdqnO",
                description: "Scans A Site and ART.",
                position: { x: 79, y: 37 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "A Shock Dart",
                video: "https://www.youtube.com/embed/Bf5udevdmAI?si=8B-3viQBAzP5M9TK",
                description: "double Shock dart for the default plant spot.",
                position: { x: 85, y: 37 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "B Main Recon Bolt",
                video: "https://www.youtube.com/embed/c0gHZho4p8E?si=Bg7vf6BIwvFfjYBN",
                description: "Reveals B Main.",
                position: { x: 95, y: 26 },
                role: "defending"
            },
            {
                agent: "Sova",
                title: "Mid Recon Bolt",
                video: "https://www.youtube.com/embed/tgvmNRpOJBw?si=yVju1AtT4jkFMzGT",
                description: "Reveals Mid and shop.",
                position: { x: 55, y: 38 },
                role: "defending"
            },
            {
                agent: "Sova",
                title: "A Main Recon Bolt",
                video: "https://www.youtube.com/embed/mIGXcV6q36k?si=P8z7giNve7fUaQOQ",
                description: "Reveals A Main.",
                position: { x: 26, y: 46 },
                role: "defending"
            },
            {
                agent: "Sova",
                title: "B Main Recon Bolt",
                video: "https://www.youtube.com/embed/Y0YEYXepWtM?si=YTqvnEuBvDjCUBmr",
                description: "Reveals B Main.",
                position: { x: 14, y: 55 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "B Shock Dart",
                video: "https://www.youtube.com/embed/eUApTyZqfj0?si=uqPaPuoG2GWEnQqW",
                description: "double Shock dart for the default plant spot.",
                position: { x: 15, y: 38 },
                role: "attacking"
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "Fade",
                title: "Mid Haunt",
                video: "https://www.youtube.com/embed/dy1Z2KLjkt4?si=BGoIaaB_rUqzzhA4",
                description: "Reveals Mid/Market/Shop.",
                position: { x: 46, y: 47 },
                role: "defending"
            },
            {
                agent: "Fade",
                title: "B Main Haunt",
                video: "https://www.youtube.com/embed/lX5jY-VDuDQ?si=3doQv2Alrqfb2TjL",
                description: "Reveals Main. enemies entering B site.",
                position: { x: 84, y: 47 },
                role: "defending"
            },
            {
                agent: "Fade",
                title: "B Site Haunt",
                video: "https://www.youtube.com/embed/JqCeSPIC4OE?si=-hmOhCZ3CHyaOFh-",
                description: "Reveals Site/ Heaven.",
                position: { x: 14, y: 49 },
                role: "attacking"
            },
            {
                agent: "Fade",
                title: "B Link Haunt",
                video: "https://www.youtube.com/embed/0cDXvg6B_kw?si=auw6POSzluaSuoBn",
                description: "Reveals B link",
                position: { x: 40, y: 56 },
                role: "attacking"
            },
            {
                agent: "Fade",
                title: "A Site Haunt",
                video: "https://www.youtube.com/embed/evs2QGYyTNQ?si=Yk0BhrA4JqfeDcaX",
                description: "Reveals A site.",
                position: { x: 82, y: 48 },
                role: "attacking"
            },
            {
                agent: "Fade",
                title: "A Main Haunt",
                video: "https://www.youtube.com/embed/fq0suR0OHfQ?si=ETZGvzPPtDMeCYSW",
                description: "Reveals A Main.",
                position: { x: 12, y: 58 },
                role: "defending"
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "Brimstone",
                title: "B Site Molly",
                video: "https://www.youtube.com/embed/dn6LxcNUOdI?si=KspniZZp5sJf5guv",
                description: "Covers the entire default plant spot.",
                position: { x: 86, y: 68 },
                role: "defending"
            },
            {
                agent: "Brimstone",
                title: "B Site Molly",
                video: "https://www.youtube.com/embed/tBG4HVTRObo?si=aPl0RYU-df9vRgdB",
                description: "post plant lineup from B lobby for the defaualt plant spot.",
                position: { x: 14, y: 38 },
                role: "attacking"
            },
            {
                agent: "Brimstone",
                title: "A Site Molly",
                video: "https://www.youtube.com/embed/-ESIabp3ggA?si=Pcd3zCC2m3OtrpUF",
                description: "post plant lineup from A Main for the defaualt plant spot.",
                position: { x: 85, y: 36 },
                role: "attacking"
            },
            {
                agent: "Brimstone",
                title: "A Site Molly",
                video: "https://www.youtube.com/embed/9OVKdtspMmU?si=R1ULsQWPYZSw_DgT",
                description: "Covers the entire default plant spot.",
                position: { x: 16, y: 70 },
                role: "defending"
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "Cypher",
                title: "B Main Camera",
                video: "https://www.youtube.com/embed/VhxJi8NC8jo?si=MJgXcRXGBYJbRWUw",
                description: "Hidden camera to catch enemies entering B site.",
                position: { x: 86, y: 45 },
                role: "defending"
            },
            {
                agent: "Cypher",
                title: "B Site Tripwire",
                video: "https://www.youtube.com/embed/JbPpYOhIqiY?si=orHk0fmCFEcE1EON",
                description: "Tripwire for B site.",
                position: { x: 89, y: 59 },
                role: "defending"
            },
            {
                agent: "Cypher",
                title: "B Site Tripwire",
                video: "https://www.youtube.com/embed/jw8QI0soVJY?si=C9Kx8LqUVdXguu7M",
                description: "Tripwire for B site.",
                position: { x: 88, y: 66 },
                role: "defending"
            },
            {
                agent: "Cypher",
                title: "A Site Tripwire",
                video: "https://www.youtube.com/embed/Y8FZGYkvSQ8?si=2hmDsvxjl-IygBM_",
                description: "Tripwire for A site.",
                position: { x: 13, y: 65 },
                role: "defending"
            },
            {
                agent: "Cypher",
                title: "A Site Tripwire",
                video: "https://www.youtube.com/embed/Y8FZGYkvSQ8?si=2hmDsvxjl-IygBM_",
                description: "Tripwire for A site.",
                position: { x: 15, y: 69 },
                role: "defending"
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "Deadlock",
                title: "A Site Sound sensor",
                video: "https://www.youtube.com/embed/HkR0UHVVg0s?si=6JojJhM0A-aEevb3",
                description: "sound sensor for A site.",
                position: { x: 20, y: 67 },
                role: "defending"
            },
            {
                agent: "Deadlock",
                title: "B Site Sound sensor",
                video: "https://www.youtube.com/embed/9y4KcvUi5wY?si=t0wryialumqJYhO0",
                description: "sound sensor for B site.",
                position: { x: 86, y: 58 },
                role: "defending"
            },
            {
                agent: "Deadlock",
                title: "B Site Sound sensor",
                video: "https://www.youtube.com/embed/ZDJFJ4kw2OQ?si=2929wAAAa3Hq9jyY",
                description: "sound sensor for B site.",
                position: { x: 91, y: 63 },
                role: "defending"
            },
            {
                agent: "Deadlock",
                title: "A Site Sound sensor",
                video: "https://www.youtube.com/embed/w6y2yLVJsE8?si=Z_6PZvopPhvyFroB",
                description: "sound sensor for A site.",
                position: { x: 16, y: 60 },
                role: "defending"
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "Gekko",
                title: "B Site Mosh Pit",
                video: "https://www.youtube.com/embed/qLRv7VkH72U?si=7L3VdRIk_rK3PcV6",
                description: "Mosh Pit for B site. Perfect for default plant spot.",
                position: { x: 86, y: 68.5 },
                role: "defending"
            },
            {
                agent: "Gekko",
                title: "B Site Mosh Pit",
                video: "https://www.youtube.com/embed/vlkR86Vg2gY?si=V3D9uwwDIll37hqP",
                description: "Mosh Pit for B site. Post plant lineup.",
                position: { x: 14, y: 39 },
                role: "attacking"
            },
            {
                agent: "Gekko",
                title: "B Main Dizzy",
                video: "https://www.youtube.com/embed/ZL9GIksgBVw?si=X6d4uEtU0y77U4jM",
                description: "Dizzy for B Main. Clear's close B Main",
                position: { x: 16, y: 74 },
                role: "attacking"
            },
            {
                agent: "Gekko",
                title: "A Site Mosh Pit",
                video: "https://www.youtube.com/embed/RFkyLvxfKIY?si=7Xh7jqokIiyQFZRB",
                description: "Mosh Pit for A site. Post plant lineup.",
                position: { x: 85, y: 37 },
                role: "attacking"
            },
            {
                agent: "Gekko",
                title: "B Site Mosh Pit",
                video: "https://www.youtube.com/embed/p09eCokMd9k?si=ad80MgiYLCzcdwS5",
                description: "Mosh Pit for B site. Perfect for default plant spot.",
                position: { x: 15, y: 71 },
                role: "defending"
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "KAYO",
                title: "B Site FRAG/MENT",
                video: "https://www.youtube.com/embed/jmVdQifDg8M?si=_8PsBJKenRrTMwdJ",
                description: "FRAG/MENT for B site. Post Plant for the default plant spot.",
                position: { x: 14, y: 39 },
                role: "attacking"
            },
            {
                agent: "KAYO",
                title: "A Site Knife",
                video: "https://www.youtube.com/embed/IhDy14x6vSQ?si=N6w3X4-JG_xAvPh0",
                description: "Knife for A site.",
                position: { x: 82, y: 36 },
                role: "attacking"
            },
            {
                agent: "KAYO",
                title: "A Site FRAG/MENT",
                video: "https://www.youtube.com/embed/yUWdOyTIIVs?si=b-55qAW7bDsY-FD0",
                description: "FRAG/MENT for A site. Post Plant for the default plant spot.",
                position: { x: 85, y: 37 },
                role: "attacking"
            },
            {
                agent: "KAYO",
                title: "A Main Knife",
                video: "https://www.youtube.com/embed/bJjF9irQhzo?si=YBu12z0Ydd-WE1L0",
                description: "Knife for A Main.",
                position: { x: 21, y: 41 },
                role: "defending"
            },
            {
                agent: "KAYO",
                title: "A Site FRAG/MENT",
                video: "https://www.youtube.com/embed/lsE0zqhf6vI?si=s4OA0OiirIzsYd-g",
                description: "FRAG/MENT for A site. for the default plant spot.",
                position: { x: 16, y: 71 },
                role: "defending"
            },
            {
                agent: "KAYO",
                title: "B Main Knife",
                video: "https://www.youtube.com/embed/vIaI22cPzjU?si=gA3708Y2rYv23a69",
                description: "Knife for B Main.",
                position: { x: 80, y: 34 },
                role: "defending"
            },
            {
                agent: "KAYO",
                title: "B Site FRAG/MENT",
                video: "https://www.youtube.com/embed/0SlY_8bJ1sc?si=_VRaSlezK-E3TPzW",
                description: "FRAG/MENT for B site. for the default plant spot.",
                position: { x: 86, y: 69 },
                role: "defending"
            },
            {
                agent: "KAYO",
                title: "A Site Flash",
                video: "https://www.youtube.com/embed/0k3XJk5EhMU?si=5Y9R2KAbsZXtDhsg",
                description: "Flash for A site.",
                position: { x: 13.5, y: 49 },
                role: "attacking"
            },
        ]
    },
    //2222222222222222222222222222222222222222222222222222222222222222222222222222222
    //2222222222222222222222222222222222222222222222222222222222222222222222222222222
    //2222222222222222222222222222222222222222222222222222222222222222222222222222222
    Icebox: {
        minimap: {
            attacking: "assets/images/minimaps/icebox.png",
            defending: "assets/images/minimaps/ICEBOX-DEF.png"
        },
        lineups: [
            {
                agent: "Sova",
                title: "A Site Shock Dart",
                video: "https://www.youtube.com/embed/L_60-SYjcvQ?si=6gnBj6nlT1AOvaQp",
                description: "Shock dart covering default plant spot",
                position: { x: 91, y: 37 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "B Site Recon Bolt",
                video: "https://www.youtube.com/embed/6EBVaiOOKnQ?si=V2FsAmfnjtb4bI45",
                description: "Recon bolt reavealing B site and the default plant spot",
                position: { x: 7, y: 43 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "B Site Double Shock Dart",
                video: "https://www.youtube.com/embed/hXTRI06hMBg?si=yhGxLqVKhpVtIxis",
                description: "Double Shock dart covering default plant spot",
                position: { x: 15, y: 51 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "Mid Recon Bolt",
                video: "https://www.youtube.com/embed/bAVJgFhmqrY?si=AtR0ZLEBruSzcV6Y",
                description: "Recon bolt reavealing Mid boiler and pallet area",
                position: { x: 50, y: 45 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "A Main Recon Bolt",
                video: "https://www.youtube.com/embed/EtXbz7Jr3Rk?si=bB0tFNnhfOPOFAXm",
                description: "Recon bolt reavealing A Main and Belt",
                position: { x: 18, y: 46 },
                role: "defending"
            },
            {
                agent: "Sova",
                title: "B Main Recon Bolt",
                video: "https://www.youtube.com/embed/Npfqi6P0Z9U?si=aof6W74e2-XPf6TM",
                description: "Recon bolt reavealing B Main and Belt",
                position: { x: 70, y: 40 },
                role: "defending"
            },
            {
                agent: "Sova",
                title: "A Main Recon Bolt",
                video: "https://www.youtube.com/embed/LQqKSxS7SEg?si=oNv4YUTbg4U4VBuB",
                description: "Recon bolt reavealing A Main / Jail / Pipes.",
                position: { x: 80, y: 47 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "A Site Recon Bolt",
                video: "https://www.youtube.com/embed/RmNGQFFAAhg?si=X9ulqDutdJKEYfgZ",
                description: "Fake reveal for A site from B Lobby",
                position: { x: 99, y: 35 },
                role: "attacking"
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "Brimstone",
                title: "A Site Molly",
                video: "https://www.youtube.com/embed/YzlB1x1kpME?si=DRj1I544hb7lNSPG",
                description: "molly for A site for the default plant spot. perfect for post plant",
                position: { x: 91, y: 37 },
                role: "attacking"
            },
            {
                agent: "Brimstone",
                title: "B Site Molly",
                video: "https://www.youtube.com/embed/TlF3meD0olU?si=I0PmU4yQGGjnUpes",
                description: "molly for B site for the default plant spot. perfect for post plant",
                position: { x: 15, y: 51 },
                role: "attacking"
            },
            {
                agent: "Brimstone",
                title: "B Site Molly",
                video: "https://www.youtube.com/embed/6Cd9k0qDrdE?si=hQwm8YQ_eDHR6UE0",
                description: "molly for B site for the default plant spot.",
                position: { x: 85, y: 55 },
                role: "defending"
            },
            {
                agent: "Brimstone",
                title: "A Site Molly",
                video: "https://www.youtube.com/embed/DhByJ4qRuYw?si=NmVL5A7SWAhBxpwP",
                description: "molly for A site for the default plant spot.",
                position: { x: 9, y: 70 },
                role: "defending"
            },
            {
                agent: "Brimstone",
                title: "A Site Molly",
                video: "https://www.youtube.com/embed/KpP_1AWCQ_k?si=b-xNyU6Tw_8JEvi0",
                description: "molly for A site for the default plant spot.",
                position: { x: 8, y: 73 },
                role: "defending"
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "Gekko",
                title: "B Site Mosh Pit",
                video: "https://www.youtube.com/embed/VX0Rj1kee5g?si=dx76-7vowDGdtlcF",
                description: "Mosh Pit for B site. Perfect for default plant spot. Post plant situation.",
                position: { x: 15, y: 51 },
                role: "attacking"
            },
            {
                agent: "Gekko",
                title: "B Site Mosh Pit",
                video: "https://www.youtube.com/embed/Vq_AZWPGnoY?si=tvqKZ6bPd-d3MwiU",
                description: "Mosh Pit for B site. Perfect for under nest plant.",
                position: { x: 16, y: 45 },
                role: "attacking"
            },
            {
                agent: "Gekko",
                title: "A site dizzy",
                video: "https://www.youtube.com/embed/QPZ8GEmxdks?si=crv0EOIOocvMfe3I",
                description: "Dizzy for A site, Blind's enemies entery site/ nest / pipes / Belt.",
                position: { x: 8, y: 77 },
                role: "defending"
            },
            {
                agent: "Gekko",
                title: "A Site Mosh Pit",
                video: "https://www.youtube.com/embed/QUYBWR_5IK0?si=eOhbHKaztPKVtTV2",
                description: "Mosh Pit for A site. default plant spot.",
                position: { x: 9, y: 69 },
                role: "defending"
            },
            {
                agent: "Gekko",
                title: "B Site Mosh Pit",
                video: "https://www.youtube.com/embed/EBPVSRtK_7M?si=4W3kOiFvzbzjIUMX",
                description: "Mosh Pit for B site. default plant spot.",
                position: { x: 85, y: 55 },
                role: "defending"
            },
            {
                agent: "Gekko",
                title: "A Site Wingman plant + Mosh Pit",
                video: "https://www.youtube.com/embed/de_QYciyWww?si=9z45H5Zrp6ig2kjr",
                description: "Wingman plant for nest + Mosh Pit for Nest.",
                position: { x: 89, y: 34 },
                role: "attacking"
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "KAYO",
                title: "A Site Knife",
                video: "https://www.youtube.com/embed/3sWakJP3nKQ?si=U0_aTHiXOs4-Nj70",
                description: "Knife for A site.",
                position: { x: 82, y: 36 },
                role: "attacking"
            },
            {
                agent: "KAYO",
                title: "A Site FRAG/MENT",
                video: "https://www.youtube.com/embed/lY_0v8oO0as?si=q2sBiYb1hrvIbS6o",
                description: "FRAG/MENT for A site. for the default plant spot.",
                position: { x: 95, y: 38 },
                role: "attacking"
            },
            {
                agent: "KAYO",
                title: "Mid Flash",
                video: "https://www.youtube.com/embed/dPUOx6101lI?si=vhONP8pBLkC3XCUR",
                description: "Flash for Mid Boiler.",
                position: { x: 54, y: 56 },
                role: "attacking"
            },
            {
                agent: "KAYO",
                title: "B Site Knife",
                video: "https://www.youtube.com/embed/yxE-BaRZ7Vs?si=TWdkP2ao0AlRHn2F",
                description: "Knife for B site.",
                position: { x: 20, y: 44 },
                role: "attacking"
            },
            {
                agent: "KAYO",
                title: "B Site FRAG/MENT",
                video: "https://www.youtube.com/embed/HC1vVIdjgcw?si=AMNhbmBHY5RZL_mX",
                description: "FRAG/MENT for B site. for the default plant spot.",
                position: { x: 15, y: 51 },
                role: "attacking"
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "Fade",
                title: "A Site Haunt",
                video: "https://www.youtube.com/embed/QZ19cM0h34k?si=64GmxVu38vpUeCeQ",
                description: "Reveals A site.",
                position: { x: 84, y: 41 },
                role: "attacking"
            },
            {
                agent: "Fade",
                title: "B Site Haunt",
                video: "https://www.youtube.com/embed/ycQEzZumQ6U?si=cYN4N6iFHlzrhdGK",
                description: "Reveals B site.",
                position: { x: 25, y: 50 },
                role: "attacking"
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "Cypher",
                title: "B Site Tripwire",
                video: "https://www.youtube.com/embed/Ad5NTBjHpfE?si=2DOresLIRnMYQXsL",
                description: "Tripwire for B site, catchs enemies entering B site",
                position: { x: 87, y: 50 },
                role: "defending"
                
            },
            {
                agent: "Cypher",
                title: "B Site Tripwire",
                video: "https://www.youtube.com/embed/XWJOxwGmn_E?si=Yfm0Arp5JMbJrbIL",
                description: "Tripwire for B site.",
                position: { x: 96, y: 56 },
                role: "defending"
            },
            {
                agent: "Cypher",
                title: "B Site cage",
                video: "https://www.youtube.com/embed/BOxKe-9hIa8?si=WgfN35AfTJ64FX-6",
                description: "one way cage on top of yellow.",
                position: { x: 94, y: 53 },
                role: "defending"
            },
            {
                agent: "Cypher",
                title: "Mid camera",
                video: "https://www.youtube.com/embed/NPj9OIoeNN4?si=hbcgBoSU-uo25ydv",
                description: "camera for Mid covers B lobby and mid under tube",
                position: { x: 68, y: 70 },
                role: "attacking"
            },
            {
                agent: "Cypher",
                title: "B site cage",
                video: "https://www.youtube.com/embed/GqOm0fKkVpc?si=r9dcgb5DAdBlGpv2",
                description: "Cage for B Site blocks vision to go behind yellow.",
                position: { x: 14, y: 57 },
                role: "attacking"
            },
            {
                agent: "Cypher",
                title: "Mid cage",
                video: "https://www.youtube.com/embed/1abrWVh8fR8?si=QaEvU78iP8aquvyt",
                description: "cage for mid blocks vision from boiler to go under tube or inside tube.",
                position: { x: 52, y: 52 },
                role: "attacking"
            },
            {
                agent: "Cypher",
                title: "A site camera",
                video: "https://www.youtube.com/embed/eOWDobYlYsY?si=3vnWrUWk5zcLKmkj",
                description: "camera A site povides clear look on A site / CT / nest / maze.",
                position: { x: 92, y: 47 },
                role: "attacking"
            },
            {
                agent: "Cypher",
                title: "A Site Tripwire",
                video: "https://www.youtube.com/embed/EK_523wEwEs?si=VJyx0X74D8kOou_l",
                description: "Tripwire for A site. catchs enemies entering A site",
                position: { x: 5, y: 67 },
                role: "defending"
            },
            {
                agent: "Cypher",
                title: "A Site Tripwire",
                video: "https://www.youtube.com/embed/Q50VojYYYy4?si=foRgejHmgFb48SAp",
                description: "Tripwire for A site. catchs enemies entering A site",
                position: { x: 19, y: 67 },
                role: "defending"
            },
            {
                agent: "Cypher",
                title: "A Site Camera",
                video: "https://www.youtube.com/embed/Q50VojYYYy4?si=foRgejHmgFb48SAp",
                description: "camera for A site. clear view on A Main / Nest / Maze",
                position: { x: 0, y: 70 },
                role: "defending"
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "Killjoy",
                title: "A Site Molly",
                video: "https://www.youtube.com/embed/MXdX27QysJE?si=X9pW0ErMXtOH7y9J",
                description: "Molly for A site. for the default plant spot from raffters.",
                position: { x: 9, y: 70 },
                role: "defending"
            },
            {
                agent: "Killjoy",
                title: "B Site Molly",
                video: "https://www.youtube.com/embed/ArxHUl4_Ycg?si=m4LM-xalQRNvxjQY",
                description: "Molly for B site. for the default plant spot.",
                position: { x: 85, y: 55 },
                role: "defending"
            },
            {
                agent: "Killjoy",
                title: "Mid Turret",
                video: "https://www.youtube.com/embed/7oUiBzGJIPI?si=v7NF3P052dXDFLRh",
                description: "Turret for Mid. covers B lobby, mid and under tube",
                position: { x: 67, y: 70 },
                role: "attacking"
            },
            {
                agent: "Killjoy",
                title: "B Site Turret",
                video: "https://www.youtube.com/embed/glSSQoMEwEk?si=8OkGlmEKPjcd7I8d",
                description: "Turret for B site. covers B Site and Snowman.",
                position: { x: 17, y: 62 },
                role: "attacking"
            },
            {
                agent: "Killjoy",
                title: "B Site Molly",
                video: "https://www.youtube.com/embed/mbpN0q2Uenk?si=XC0G1Dls7uCnoict",
                description: "Molly for B site. for the default plant spot, post plant lineup.",
                position: { x: 14, y: 51 },
                role: "attacking"
            },
            {
                agent: "Killjoy",
                title: "A Site Molly",
                video: "https://www.youtube.com/embed/QNr_HdUY6wI?si=WWfOqAPCPzepLwDD",
                description: "Molly for A site. for the default plant spot, post plant lineup.",
                position: { x: 95, y: 38 },
                role: "attacking"
            },
        ]
    },
    //2222222222222222222222222222222222222222222222222222222222222222222222222222222
    //2222222222222222222222222222222222222222222222222222222222222222222222222222222
    //2222222222222222222222222222222222222222222222222222222222222222222222222222222
    Fracture: {
        minimap: {
            attacking: "assets/images/minimaps/fracture.png",
            defending: "assets/images/minimaps/FRACTURE-DEF.png"
        },
        lineups: 
        [
            {
                agent: "Brimstone",
                title: "B Site Molly",
                video: "https://www.youtube.com/embed/bKVswa7za-E?si=SWcnWkUJc6rRB_Xo",
                description: "Molly for B site. Dice plant. post plant",
                position: { x: 14, y: 57 },
                role: "attacking"
            },
            {
                agent: "Brimstone",
                title: "A Site Molly",
                video: "https://www.youtube.com/embed/2rGqtWOJTWQ?si=m8jzpBMq02T4G2Fj",
                description: "Molly for A site. for the default plant spot. from rope",
                position: { x: 9, y: 57 },
                role: "defending"
            },
            {
                agent: "Brimstone",
                title: "B Site Molly",
                video: "https://www.youtube.com/embed/yqbjtc9GVoc?si=8k9kiqUEvJnFASR3",
                description: "Molly for B site. for the default plant spot. From B Link",
                position: { x: 94, y: 45 },
                role: "defending"
            },
            {
                agent: "Brimstone",
                title: "A Site Molly",
                video: "https://www.youtube.com/embed/oRZCXz1xQ6s?si=U91YpSJQocfhz_0H",
                description: "Molly for A site. default plant spot. post plant From A Lobby",
                position: { x: 91, y: 50 },
                role: "attacking"
            },
            {
                agent: "Brimstone",
                title: "A Site Molly",
                video: "https://www.youtube.com/embed/rd5kFm2cKiQ?si=3MH4XbwrRBBu1rir",
                description: "Molly for A site. behind the box plant, post plant. from dish",
                position: { x: 96, y: 57 },
                role: "attacking"
            },
            {
                agent: "Brimstone",
                title: "A Site Molly",
                video: "https://www.youtube.com/embed/rd5kFm2cKiQ?si=3MH4XbwrRBBu1rir",
                description: "Molly for A site. behind the box plant, from dish",
                position: { x: 4, y: 50 },
                role: "defending"
            },
            {
                agent: "Brimstone",
                title: "B Site Molly",
                video: "https://www.youtube.com/embed/RmqnqCSFrv8?si=48X7GoVD1vv9TABY",
                description: "Molly for B site. default plant spot, from arcade.",
                position: { x: 6, y: 62 },
                role: "attacking"
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "Chamber",
                title: "B Link TP",
                video: "https://www.youtube.com/embed/MnUHiLozN3s?si=-suYY-tc1OvgHxxm",
                description: "TP for B Link.",
                position: { x: 63, y: 62 },
                role: "defending"
            },
            {
                agent: "Chamber",
                title: "A Lobby TP",
                video: "https://www.youtube.com/embed/E1NvYZJ_l9Q?si=t9A4vHkomCwUZMHS",
                description: "TP for A Lobby.",
                position: { x: 65, y: 80 },
                role: "attacking"
            },
            {
                agent: "Chamber",
                title: "Spown TP",
                video: "https://www.youtube.com/embed/G_tfyp9ebRI?si=04sC7juYGyJBGuY_",
                description: "TP for Spown.",
                position: { x: 30, y: 62 },
                role: "defending"
            },
            {
                agent: "Chamber",
                title: "Rope TP",
                video: "https://www.youtube.com/embed/M_hpneOkjuI?si=7H5_QH3nlOn4rv-r",
                description: "TP for Rope",
                position: { x: 40, y: 38 },
                role: "defending"
            },
            {
                agent: "Chamber",
                title: "A Main TP",
                video: "https://www.youtube.com/embed/kMWtWWBCAvc?si=h70lQukWoLx6QcmG",
                description: "TP A Main.",
                position: { x: 13, y: 35 },
                role: "defending"
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "Cypher",
                title: "B Site Camera",
                video: "https://www.youtube.com/embed/t1BpzrJV_nM?si=2_rV7mPynxKb1W21",
                description: "Camera for B site. covers B site and Arcade.",
                position: { x: 80, y: 41 },
                role: "defending"
            },
            {
                agent: "Cypher",
                title: "B Main Camera",
                video: "https://www.youtube.com/embed/CBr_1EFw4pQ?si=i61If__QP0mGX4-5",
                description: "Camera for B Main to check close.",
                position: { x: 20, y: 85 },
                role: "attacking"
            },
            {
                agent: "Cypher",
                title: "A Main Camera",
                video: "https://www.youtube.com/embed/zjW_qu1hsi0?si=3fEI-e6oO9pmfC5X",
                description: "Camera for A Main to check close.",
                position: { x: 90, y: 82 },
                role: "attacking"
            },
            {
                agent: "Cypher",
                title: "A Site Cage",
                video: "https://www.youtube.com/embed/c6T0QGeed58?si=VhszR-imqh1TglGa",
                description: "one way Cage for A site.",
                position: { x: 6, y: 55 },
                role: "defending"
            },
            {
                agent: "Cypher",
                title: "A Site Camera",
                video: "https://www.youtube.com/embed/9kp4rKr6pgQ?si=QS3NyIQSoepRpg4-",
                description: "Camera for A Site covers A site and the enterance.",
                position: { x: 9, y: 60 },
                role: "defending"
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "Fade",
                title: "B Main Haunt",
                video: "https://www.youtube.com/embed/XXJWbMpdmrU?si=uRI3ozxmxT-aU4ob",
                description: "Reveals B Main.",
                position: { x: 79, y: 32 },
                role: "defending"
            },
            {
                agent: "Fade",
                title: "A Site Haunt",
                video: "https://www.youtube.com/embed/eEMcr5MEjII?si=btAFgNwL2pzWUI8n",
                description: "Reveals A Site",
                position: { x: 11, y: 56 },
                role: "defending"
            },
            {
                agent: "Fade",
                title: "A Site Haunt",
                video: "https://www.youtube.com/embed/qVNV2SD4Mtg?si=GfGGjAOYDl3OhF3M",
                description: "Reveals A Site",
                position: { x: 85, y: 61 },
                role: "attacking"
            },
            {
                agent: "Fade",
                title: "A Rope Haunt",
                video: "https://www.youtube.com/embed/riJGOYK-zBE?si=rpws49KR6l470bHU",
                description: "Reveals A Rope",
                position: { x: 65, y: 70 },
                role: "attacking"
            },
            {
                agent: "Fade",
                title: "B Site Haunt",
                video: "https://www.youtube.com/embed/YZb_lG3GPP4?si=9uILZn3-H6HFET9J",
                description: "Reveals B Site.",
                position: { x: 10, y: 61 },
                role: "attacking"
            },
            {
                agent: "Fade",
                title: "B Arcade Haunt",
                video: "https://www.youtube.com/embed/n8KMJw4V960?si=idBzzgkkIvwe4GyJ",
                description: "Reveals B Arcade.",
                position: { x: 81, y: 59 },
                role: "defending"
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "Gekko",
                title: "B Site Mosh Pit",
                video: "https://www.youtube.com/embed/EBPVSRtK_7M?si=4W3kOiFvzbzjIUMX",
                description: "Mosh Pit for B site. default plant spot.",
                position: { x: 94, y: 45 },
                role: "defending"
            },
            {
                agent: "Gekko",
                title: "A Site Mosh Pit",
                video: "https://www.youtube.com/embed/t2UXVNMK7BQ?si=Bdiipxbo3mKc0mb6",
                description: "Mosh Pit for A site. default plant spot.",
                position: { x: 9, y: 58 },
                role: "defending"
            },
            {
                agent: "Gekko",
                title: "A Site Mosh Pit",
                video: "https://www.youtube.com/embed/DJGncLlcCnY?si=WnyQgbB9pSUUbgLB",
                description: "Mosh Pit for A site. default plant spot.",
                position: { x: 92, y: 49 },
                role: "attacking"
            },
            {
                agent: "Gekko",
                title: "B Site Mosh Pit",
                video: "https://www.youtube.com/embed/ifuQpdq-D6g?si=ao8-Pn9s1F0X2BYN",
                description: "Mosh Pit for B site. default plant spot.",
                position: { x: 6, y: 62 },
                role: "attacking"
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "KAYO",
                title: "B Site Knife",
                video: "https://www.youtube.com/embed/LdzqVZhLDRY?si=mzLsWE_C6PGxlrGR",
                description: "Knife for B site.",
                position: { x: 7, y: 53 },
                role: "attacking"
            },
            {
                agent: "KAYO",
                title: "B Site FRAG/MENT",
                video: "https://www.youtube.com/embed/x7iinyXQ_iA?si=vFqXCKQ7lSXjizX3",
                description: "FRAG/MENT for B site.",
                position: { x: 6, y: 62 },
                role: "attacking"
            },
            {
                agent: "KAYO",
                title: "Dish Knife",
                video: "https://www.youtube.com/embed/4FXCXP17tFM?si=n0VcWfyZKhkwXXge",
                description: "Knife for dish",
                position: { x: 30, y: 86 },
                role: "defending"
            },
            {
                agent: "KAYO",
                title: "A Site Knife",
                video: "https://www.youtube.com/embed/boZDh7aGvzI?si=H4faymY1V7jLmtz5",
                description: "Knife for A site.",
                position: { x: 90, y: 56 },
                role: "attacking"
            },
            {
                agent: "KAYO",
                title: "A Site FRAG/MENT",
                video: "https://www.youtube.com/embed/8UQZAU52Grk?si=SXVUIZdM2HhSZHDq",
                description: "FRAG/MENT for A site.",
                position: { x: 92, y: 50 },
                role: "attacking"
            },
            {
                agent: "KAYO",
                title: "A Site FRAG/MENT",
                video: "https://www.youtube.com/embed/8UQZAU52Grk?si=SXVUIZdM2HhSZHDq",
                description: "FRAG/MENT for A site.",
                position: { x: 9, y: 58 },
                role: "defending"
            },
            //11111111111111111111111111111111111111111111111111111111111111111111111
            //11111111111111111111111111111111111111111111111111111111111111111111111
            {
                agent: "Sova",
                title: "B Site Recon Bolt",
                video: "https://www.youtube.com/embed/8ZydhZ6E0Ko?si=DTl58gwfYXT8UAYL",
                description: "Scan B site from B Main. ",
                position: { x: 18, y: 52 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "A Site Recon Bolt",
                video: "https://www.youtube.com/embed/Bf7aqQTrxms?si=_RKHmKjung_FGl5l",
                description: "Scan A site from A Main. ",
                position: { x: 0, y: 47 },
                role: "defending"
            },
            {
                agent: "Sova",
                title: "B Site Recon Bolt",
                video: "https://www.youtube.com/embed/cJ-hN0bDWbk?si=TzDbGFyjozpWZsV4",
                description: "Scan B site from B Link. ",
                position: { x: 98, y: 55 },
                role: "defending"
            },
            {
                agent: "Sova",
                title: "A Rope Recon Bolt",
                video: "https://www.youtube.com/embed/9Pvw130_sO8?si=_4DqU-QVrxS9ddOu",
                description: "Scan A Rope from A Spown. ",
                position: { x: 65, y: 70 },
                role: "attacking"
            },
            {
                agent: "Sova",
                title: "A Site Shock dart",
                video: "https://www.youtube.com/embed/UkoQNbVL_NI?si=KtvKb3yYIH8xVG8O",
                description: "Shock dart for a site for the default plant",
                position: { x: 91, y: 48 },
                role: "attacking"
            },
        ]
    }
};

let currentMap = '';
let currentAgent = '';
let currentRole = 'attacking';

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    currentMap = urlParams.get('map');
    currentAgent = urlParams.get('agent') || '';
    currentRole = urlParams.get('role') || 'all';

    const agentFilter = document.getElementById('agent-filter');
    if (agentFilter) {
        agentFilter.value = currentAgent;
        agentFilter.addEventListener('change', filterByAgent);
        if (currentAgent) updateAgentDisplay(currentAgent);
    }

    updateRoleButtons();
    renderLineups();
});

function updateRoleButtons() 
{
    const atkBtn = document.getElementById('attacking-btn');
    const defBtn = document.getElementById('defending-btn');
    atkBtn.classList.toggle('active', currentRole === 'attacking');
    defBtn.classList.toggle('active', currentRole === 'defending');
}

function updateAgentDisplay(agent) {
    const img = document.getElementById('agent-image');
    if (!img) return;
  
    img.src = `assets/images/agents/${agent}.png`;
    img.alt = agent;
    img.style.display = 'inline-block';
  }

function filterByAgent() {
    currentAgent = document.getElementById('agent-filter').value;
    if (currentAgent) {
        updateAgentDisplay(currentAgent);
    } else {
        document.getElementById('selected-agent-display').style.display = 'none';
    }
    updateUrl();
    renderLineups();
}

function filterByRole(role) {
    currentRole = role;
    updateRoleButtons();
    updateUrl();
    renderLineups();
}

function updateUrl() {
    const newUrl = new URL(window.location);
    if (currentAgent) newUrl.searchParams.set('agent', currentAgent);
    else newUrl.searchParams.delete('agent');

    if (currentRole && currentRole !== 'all') newUrl.searchParams.set('role', currentRole);
    else newUrl.searchParams.delete('role');

    window.history.pushState({}, '', newUrl);
}

function renderLineups() {
    const mapNameEl     = document.getElementById('map-name');
    const minimapEl     = document.getElementById('minimap');
    const dotsEl        = document.getElementById('dots-container');
    const mapViewEl     = document.getElementById('map-view');

    // If map is invalid, clear out and bail
    if (!currentMap || !lineupData[currentMap]) {
        mapNameEl.textContent = "Unknown Map";
        minimapEl.src = "";
        minimapEl.alt = "";
        dotsEl.innerHTML = "";
        return;
    }

    // Pull out the minimap URLs and lineup array
    const { minimap, lineups } = lineupData[currentMap];
    mapNameEl.textContent = currentMap;
    const mapImgEl = document.getElementById('map-image');
    mapImgEl.src = `assets/images/maps/${currentMap}.png`;
    mapImgEl.alt = currentMap;


    // Choose attacking vs defending image & label
    const isDef = (currentRole === 'defending' && minimap.defending);
    minimapEl.src = isDef ? minimap.defending : minimap.attacking;
    mapViewEl.textContent = isDef ? 'Defending View' : 'Attacking View';
    minimapEl.alt = `${currentMap} ${mapViewEl.textContent}`;

    // Clear old dots
    dotsEl.innerHTML = '';

    // Filter down to only lineups matching the chosen role AND agent
    const filtered = lineups.filter(l => {
        const agentMatch = !currentAgent || l.agent.toLowerCase() === currentAgent.toLowerCase();
        const roleMatch  = l.role === currentRole;
        return agentMatch && roleMatch;
    });

    // Create a dot for each filtered lineup
    filtered.forEach(l => {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.style.left            = `${l.position.x}%`;
        dot.style.top             = `${l.position.y}%`;
        dot.style.backgroundColor = agentColors[l.agent] || '#ff0000';
        dot.title                 = `${l.agent}: ${l.title} (${l.role})`;
        dot.onclick               = () => showPopup(l);
        dotsEl.appendChild(dot);
    });
}


function showPopup(lineup) {
    const popup = document.getElementById('popup');
    document.getElementById('popup-role-badge').textContent = lineup.role.charAt(0).toUpperCase() + lineup.role.slice(1);
    document.getElementById('popup-role-badge').className = `role-badge ${lineup.role}`;
    document.getElementById('popup-title').textContent = `${lineup.agent}: ${lineup.title}`;
    document.getElementById('popup-video').src = lineup.video;
    document.getElementById('popup-description').textContent = lineup.description;

    popup.style.display = 'block';
    const overlay = document.createElement('div');
    overlay.id = 'popup-overlay';
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);z-index:999';
    overlay.onclick = closePopup;
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('popup-video').src = '';
    const ov = document.getElementById('popup-overlay');
    if (ov) ov.remove();
    document.body.style.overflow = '';
}

window.filterByAgent = filterByAgent;
window.filterByRole  = filterByRole;
window.closePopup    = closePopup;