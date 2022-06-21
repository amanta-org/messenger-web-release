'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "package.json": "c7c00f40378d08d0d1e745ddcb87b3b4",
"assets/assets/images/image.jpg": "b2f30d5d634bbf02a3245698c1d6933d",
"assets/assets/images/open_source.png": "0222303a7bb87988401e5d2050bdeb29",
"assets/assets/images/cross_platform.png": "6718ed079484e7534cbde024b9f7bb96",
"assets/assets/images/pokemon_icons.png": "46f462a086e5c4e733bd1f9fc1f46073",
"assets/assets/images/b.png": "a7168f1887a5f30d2ff58062ba98b877",
"assets/assets/images/beautiful_messenger.png": "b600224b7053198dda1be6a224b459a0",
"assets/assets/tgs/1_1258816259754017.json": "038beabb59dc8004db7082fd000223d4",
"assets/assets/tgs/1_1258816259754023.json": "cc3d99d8da67ce59840a55d1d4a2374e",
"assets/assets/tgs/1_1258816259754215.json": "4b33944c72aa26ae056152345c5b1ca3",
"assets/assets/tgs/1_1258816259754253.json": "6c712599a9caa4d0b9b8e81b887a08cc",
"assets/assets/tgs/1_1258816259753969.json": "2ca167023dbc0a23a91ddfc5de94d449",
"assets/assets/tgs/1_5003882799602599169.json": "2ac98223b5e3e9493e5b75bdaa4abe79",
"assets/assets/tgs/1_4994645669273666239.json": "4560a38e335eb41a6b9af0cfdb51de5f",
"assets/assets/tgs/1_4996758977866891918.json": "a3d27601b151e469c598c6b138bda5a1",
"assets/assets/tgs/1_5003888112477143419.json": "072df7effde660416a3925c885b3e677",
"assets/assets/tgs/1_1258816259754171.json": "6a06ac16c5a04ab3c58b7b428833de3b",
"assets/assets/tgs/1_4997080288665272696.json": "010cfdb2aea578d2299488035973d363",
"assets/assets/tgs/1_5003632871160676988.json": "bd9cec9f5c88a83b8022895087ea63d2",
"assets/assets/tgs/1_1258816259753947.json": "10193b525c904b288ead1f3384c45130",
"assets/assets/tgs/1_1258816259754107.json": "909ba51ae72a6927b95dc2264b08765f",
"assets/assets/tgs/1_1258816259754160.json": "95815d22fa06e41cb5ae078b15e33870",
"assets/assets/tgs/1_1258816259754051.json": "7bda5c08fb4ea041ea3692ea3b7f68fa",
"assets/assets/tgs/1_1258816259753944.json": "c7a2fbc64228041525de0fe36d319fe7",
"assets/assets/tgs/1_1258816259753963.json": "cee50b61e6d4ae722d711871fb2ffd47",
"assets/assets/tgs/1_4909109965349716329.json": "2f8a68f31ba509b5bf50748100b22bf2",
"assets/assets/tgs/1_1258816259753972.json": "2b3c6ab9f819407650eb621a8408408e",
"assets/assets/tgs/1_5003870030664827359.json": "acd83f1f38d1fa7ec0af61394c72c4f0",
"assets/assets/tgs/1_1258816259754218.json": "f27478f908e157d24cfc7f01205927ea",
"assets/assets/tgs/1_1258816259754135.json": "6482faa2a20d66a96acd874347698ea5",
"assets/assets/tgs/1_1258816259754099.json": "b84cde64f804179b929c047f9bf292ca",
"assets/assets/tgs/1_1258816259754185.json": "418a281610c0df7f6053aa618fe845c2",
"assets/assets/tgs/1_1258816259754147.json": "ab7031ab25746b3b4d7598fa9287bbad",
"assets/assets/tgs/1_1258816259754063.json": "d112943be6614a27043df87e28c7cabf",
"assets/assets/tgs/1_1258816259754130.json": "d7e2d5891aee9b88e4aa11151565b7b0",
"assets/assets/tgs/1_1258816259754062.json": "35d129391fd7640f132641d6aeeeac2a",
"assets/assets/tgs/1_1258816259754176.json": "1fd22f2759eba31dd1aead7b0dd5ed6c",
"assets/assets/tgs/1_1258816259753981.json": "8acc64835784f996411ed80dbc74f3e5",
"assets/assets/tgs/1_5003897432556175750.json": "3d30eb9df40ba08747099e3ed0f810f7",
"assets/assets/tgs/1_4909282794833707479.json": "6728fccf2705d52a409d5b92b3ba4d63",
"assets/assets/tgs/1_1258816259754162.json": "e849c0dfb0e83412578a99066d353ca1",
"assets/assets/tgs/1_4997089153477771778.json": "c07e1cf6f320092285955951e534ca84",
"assets/assets/tgs/1_1258816259754232.json": "e07bceb849c5ba962fb68a84014843e9",
"assets/assets/tgs/1_1258816259754103.json": "bd988351d31b6ef16ebf26ffc14cd436",
"assets/assets/tgs/1_1258816259754029.json": "8034722e1c49576ebbb5d336e1334644",
"assets/assets/tgs/1_5003908698255393250.json": "a49bcfa665b1edc4033b28e8e925f481",
"assets/assets/tgs/1_1258816259754159.json": "caabe6887395bc13586e5915398d51b0",
"assets/assets/tgs/1_1258816259754245.json": "2ef8ca298755718d7c060584c1ec06a4",
"assets/assets/tgs/1_1258816259754016.json": "c6bf3e2367eff1e71e1ffd475e40a95e",
"assets/assets/tgs/1_1258816259754243.json": "302db860f52c544c461a182fb2951a30",
"assets/assets/tgs/1_4909167977472983473.json": "dcb76e9d7ba6c52c9e6c8c8116790bc6",
"assets/assets/tgs/1_1258816259754049.json": "8e2d96c7f6b9aa3a2d90531ad875576a",
"assets/assets/tgs/1_1258816259754279.json": "b6d65566292ee3fe19b072b9aca33cdb",
"assets/assets/tgs/1_1258816259754282.json": "9334f2998c74916f36c50b6efb061c51",
"assets/assets/tgs/1_1258816259754193.json": "4d31f93dfc8e7a5e8e774a2b52f60789",
"assets/assets/tgs/1_1258816259753997.json": "e85930122d920e482f7a57456fa7d46c",
"assets/assets/tgs/1_1258816259754133.json": "900a9918fa641904b3449fb286b68056",
"assets/assets/tgs/4_893053232757081029.json": "55c2b202fd7653695759ee850e80487f",
"assets/assets/tgs/1_1258816259754025.json": "bff2d8735f3255f2156b5aedd6f3b4b8",
"assets/assets/tgs/1_1258816259754181.json": "d337fcf14ad704a8cde9c0a888ad7773",
"assets/assets/tgs/1_5003589934372619612.json": "fc0a1714049e82eca8c1dd6fadc43e41",
"assets/assets/tgs/1_1258816259754155.json": "2d257909d248bbb6d258025c384a03aa",
"assets/assets/tgs/1_1258816259754251.json": "14f3078ec322734031c3a0ddb19059ac",
"assets/assets/tgs/1_4922435870184702539.json": "65018f964af69964236f391fcdb44b23",
"assets/assets/tgs/1_1258816259754148.json": "c5aa15b4538c7bef865641e119b9b742",
"assets/assets/tgs/1_1258816259754041.json": "97c50b5b2a81f297742cb19cf93662d5",
"assets/assets/tgs/1_1258816259754175.json": "1be6a4c9e476e69c7539733d222df9dd",
"assets/assets/tgs/1_1258816259754004.json": "f7f9f6da07fcfd1b6f5cdff46757ab8b",
"assets/assets/tgs/1_4922452560427614939.json": "81bde8eb7f5836f46838856afe62b520",
"assets/assets/tgs/1_1258816259754244.json": "584d126d5d257fbed8d2bb7a79f10d22",
"assets/assets/tgs/1_1258816259753943.json": "890c35623202a245fcf4c6291ff82b9d",
"assets/assets/tgs/1_1258816259754182.json": "e1898cfa1913787862efff52f63ca515",
"assets/assets/tgs/1_1258816259754287.json": "dda53319dae0733347b3d6ab9deecc74",
"assets/assets/tgs/1_4996966686780293620.json": "74011d1a84eac50adbfa0a9c0c8f26eb",
"assets/assets/tgs/1_1258816259754207.json": "4da2d3d484c00d6ce391124326d0cfb3",
"assets/assets/tgs/1_1258816259754140.json": "1cedb32bd6e052f0cd2d64b06f9f1414",
"assets/assets/tgs/1_1258816259753962.json": "2b07892607142400765ffd3f41f69034",
"assets/assets/tgs/1_4997302089366373000.json": "e45619a84d2cf9fe9fbbe06a79eac84b",
"assets/assets/tgs/1_1258816259754273.json": "828f015d50e1045298cdfaca3c4edfa3",
"assets/assets/tgs/1_5003817193977151807.json": "52b755481aead88196a1f916260a0d7b",
"assets/assets/tgs/1_1258816259754211.json": "2673f76173b44d27e478cacabdc635a7",
"assets/assets/tgs/1_1258816259754285.json": "c1ef1a36eff9cfaa908a5c1fe03c95e6",
"assets/assets/tgs/1_1258816259753930.json": "386dfd76b0a2a98fee7715bf9d211856",
"assets/assets/tgs/1_1258816259754276.json": "09e14167482bb1e74a47be76f01c9373",
"assets/assets/tgs/1_1258816259754065.json": "f140b2a0920edc81011085f06fdc76cd",
"assets/assets/tgs/1_1258816259753991.json": "d18769e13432d39fe6a8994b7b5b9894",
"assets/assets/tgs/1_1258816259753964.json": "6d8b0ad57a3bb713587ae335a6996850",
"assets/assets/tgs/1_1258816259754137.json": "bab86c777ec26fd7aefaa6a5c1f1860a",
"assets/assets/tgs/1_1258816259754105.json": "1ebadb2658a14766d017a44719002532",
"assets/assets/tgs/1_1258816259754151.json": "74180046ce2d89d320737a0714e74632",
"assets/assets/tgs/1_4996745032108081615.json": "db35b5296412fe867ca322d17281b81f",
"assets/assets/tgs/1_1258816259754034.json": "107cde4f193606f7634de1d379249253",
"assets/assets/tgs/1_1258816259754050.json": "0a25f604e94036834f3b37005b5d47a2",
"assets/assets/tgs/1_1258816259753994.json": "c99986289ab533d5b3e8fb9d5302562f",
"assets/assets/tgs/1_1258816259753971.json": "2b6a55904dd8ec631242dec88ef0c508",
"assets/assets/tgs/1_1258816259754169.json": "697902b33c8f7626ebf84c4a53157374",
"assets/assets/tgs/1_1258816259754265.json": "4e3276dac3e7e8225fd3656ef9150935",
"assets/assets/tgs/1_1258816259754156.json": "e470070850e29992bf5ab58176570f69",
"assets/assets/tgs/1_4996797460773863803.json": "3b907718708db932893f6e749b62f0ba",
"assets/assets/tgs/1_1258816259754208.json": "7453627a8c38f0c3698846fbdc2d6e5f",
"assets/assets/tgs/1_1258816259754152.json": "581d8aa670871656f70561978cff94c2",
"assets/assets/tgs/1_4907053809886299033.json": "6a18f124aed4c5f431d928c69bde5fa1",
"assets/assets/tgs/1_1258816259753945.json": "acc23626d03c0789412642bcc3f50be5",
"assets/assets/tgs/1_1258816259754002.json": "fc57453bc8bd1d2b1ddb9422ce4da28b",
"assets/assets/tgs/1_5004025345272185234.json": "733e7ff4603ca042b2367c424a784b2b",
"assets/assets/tgs/1_1258816259754264.json": "e47cd52d6868e086295ab362e285cf53",
"assets/assets/tgs/1_1258816259754179.json": "159f3f04703c9f4af50b7f6ada6e0ee2",
"assets/assets/tgs/1_1258816259754104.json": "3defc7192e08b31ef03f10940278260c",
"assets/assets/tgs/1_4994525010757419362.json": "2e3293cea7850941fb78ec59ba480595",
"assets/assets/tgs/1_1258816259754170.json": "f75fc9f3a4176a4c5379927fdebcc872",
"assets/assets/tgs/1_1258816259754165.json": "7aed8f064df3ab47e5716fe25dcc6b5a",
"assets/assets/tgs/1_1258816259754007.json": "9aa11ef957893441d13df5075379a1a7",
"assets/assets/tgs/1_5003913173611315615.json": "0735a9ca3e96daf1859c29a79905fb52",
"assets/assets/tgs/1_1258816259754112.json": "fbfb7600e953cf0c54bb49f8357db21b",
"assets/assets/tgs/1_1258816259754258.json": "c383b16c833f68402faf927bcfd3f913",
"assets/assets/tgs/1_5003927093600322109.json": "e2917ad4b5798d594b7d635451f4ef63",
"assets/assets/tgs/1_1258816259754046.json": "3501a56444950110c35524790c59f918",
"assets/assets/tgs/1_1258816259754126.json": "fc7c9fd6e6e3a702002b968f82692d2c",
"assets/assets/tgs/1_1258816259754247.json": "29f1860736b65b2f3c0127f641396e31",
"assets/assets/tgs/1_1258816259754145.json": "e41854f47a2f631e14e8110fc6210e20",
"assets/assets/tgs/1_1258816259754161.json": "8463aa7517625c1895d475dfbbf9d5e1",
"assets/assets/tgs/1_1258816259753937.json": "125ca078aca5d79855672abf1cadab60",
"assets/assets/tgs/1_4996912694746415526.json": "31a33ea509d7d8cc8e0b2a31cb02e89f",
"assets/assets/tgs/1_1258816259754202.json": "0c30f9b36d949717b05fb0c18a22e046",
"assets/assets/tgs/1_4996871325621420488.json": "5abbaf344a72214a5c6eab0d1b3575bc",
"assets/assets/tgs/1_1258816259754203.json": "11e75728ee2fac6c3f63d097cc2abf60",
"assets/assets/tgs/1_1258816259754271.json": "9e3d10a776370dd7920a4ab43b2b5d7d",
"assets/assets/tgs/1_1258816259754122.json": "e0185b1b07d304f4dc5e51ccb7d1c4b2",
"assets/assets/tgs/1_1258816259754021.json": "da058093b9a75e00805ea684efbcd16a",
"assets/assets/tgs/1_1258816259754167.json": "1064f2cdc020dfb72191e8852fe5ae3c",
"assets/assets/tgs/1_1258816259754280.json": "afed5fbf732205b9180970988604fa6c",
"assets/assets/tgs/1_1258816259753968.json": "d60de1c937e689c822442a0b91e9d813",
"assets/assets/tgs/1_1258816259754275.json": "b3c220aef4bff016c8876d2c28489675",
"assets/assets/tgs/1_1258816259754001.json": "1578d3ccb16583edba1771f53b0d96d4",
"assets/assets/tgs/1_1258816259754223.json": "d8c24bd8de6a6e87763a265ce26396ba",
"assets/assets/tgs/1_1258816259754154.json": "72e000f5264325d54c3a56193fc24635",
"assets/assets/tgs/1_4997181095842677144.json": "f6a5855068f02c68dca01df279de8498",
"assets/assets/tgs/1_4994987363986833989.json": "c1b3377221419cb01e710ce7b438454c",
"assets/assets/tgs/1_1258816259754172.json": "783e1c8b3052e58c238f2e1bda4960a5",
"assets/assets/tgs/1_1258816259754270.json": "4169fede36efe6c450e7a3597e5afe5c",
"assets/assets/tgs/1_1258816259754125.json": "3ceb1bf51ef70c0fa4bf066acec120e6",
"assets/assets/tgs/1_1258816259753966.json": "8f234bef77cc23cb1a4286f0d975fc9a",
"assets/assets/tgs/1_5006110981391122877.json": "cabbdcc9c5ca46e30001a76c1c7658dc",
"assets/assets/tgs/1_4909129915472806854.json": "9b613d20057589a824e12b9fca3d87fb",
"assets/assets/tgs/1_1258816259753953.json": "6193a7a042e18e9565efdde5e7116b50",
"assets/assets/tgs/1_4996983162274840933.json": "6d05a82e43402065c4393812d0e096c3",
"assets/assets/tgs/1_1258816259754209.json": "bed61bed14389296386c7bcb69ed5d11",
"assets/assets/tgs/1_1258816259754242.json": "d20f8fe8ab7bc4334ca8a3fbfc83240f",
"assets/assets/tgs/1_1258816259753929.json": "72a4d800349016afc188f848732c80c0",
"assets/assets/tgs/1_1258816259753958.json": "4a67eaf6620426df95bdce3a934fec98",
"assets/assets/tgs/1_1258816259754116.json": "6b561cefd8394d0d3d758af6c29d36b0",
"assets/assets/tgs/1_4997056335632663013.json": "f9b09ff2ef342593dea64240630c12e0",
"assets/assets/tgs/1_1258816259754129.json": "0cf2c5dcd3c938c3fd1a27faea94ec04",
"assets/assets/tgs/1_1258816259754019.json": "b6975767b572949375adc26182344504",
"assets/assets/tgs/1_1258816259753976.json": "ab05686a7a25ded8651fd8f3b2c27567",
"assets/assets/tgs/1_1258816259754204.json": "31039493084c81f994761e5ed4eb566a",
"assets/assets/tgs/1_1258816259754027.json": "c19e800d9f666102d6df7ad44c551ec7",
"assets/assets/tgs/1_4997038468568711536.json": "3fcf667b99a2729af97d0fe14d6ca743",
"assets/assets/tgs/1_1258816259754281.json": "177095818e08541decb3417fcf54cef2",
"assets/assets/tgs/1_1258816259754284.json": "7c1f5fc10ccff0e1296a6838a773cccd",
"assets/assets/tgs/1_1258816259753933.json": "999d98ec0af8f9e9bc2ad08c8a7de1d5",
"assets/assets/tgs/1_1258816259754252.json": "1008a2c5c8836b53bfc02cf20cfb0a4c",
"assets/assets/tgs/1_1258816259754100.json": "76850950e59afcadf3e8981d407c8379",
"assets/assets/tgs/1_1258816259754106.json": "f9bb5d5fea467e423ea26677c8f40198",
"assets/assets/tgs/1_1258816259753960.json": "27629c7ca214876efe47da3e9bc3e230",
"assets/assets/tgs/1_1258816259754274.json": "1af1fecc0b4730d07f42ade89c935466",
"assets/assets/tgs/1_1258816259753941.json": "913fd4e24454e4986fe3c31560eb5b95",
"assets/assets/tgs/1_1258816259754101.json": "1cc7a2a1c26353d7484a700e36f9213a",
"assets/assets/tgs/1_5005780895974556041.json": "c686dd06d8ab7a62f7c897d5568d36c7",
"assets/assets/tgs/1_1258816259754277.json": "dd253e9f86503c3b2b6c32c7b7c125bb",
"assets/assets/tgs/1_1258816259754056.json": "1d49d60384be94c1a9be6aefdc410403",
"assets/assets/tgs/1_1258816259754018.json": "c1cf1e02b6496718d08e30304b1d76db",
"assets/assets/tgs/1_5004061921213678092.json": "3e5ddcd89b1f09909ac9d3e02ac667fc",
"assets/assets/tgs/1_4920398037051769531.json": "c96723774de29a569ba0c70ca47cc0f5",
"assets/assets/tgs/1_1258816259754020.json": "2aa87eb5b5d0d04d609d26908244a071",
"assets/assets/tgs/1_5003894005172273420.json": "203f2c0d4047e66f48f76d6676b8e798",
"assets/assets/tgs/1_1258816259753975.json": "213aca0f655f384d68e6be0fec513cb6",
"assets/assets/tgs/1_1258816259754234.json": "9e9ff1626d50b3af0e3ac994477aa1ec",
"assets/assets/tgs/1_1258816259754266.json": "d32a855a5323e26af1b5b15b71d3ef73",
"assets/assets/tgs/1_5003622485929754973.json": "0399448487b333a8dfb379c2d0fdbc29",
"assets/assets/tgs/1_1258816259754120.json": "9743f13dc01745e3dead0606473171b9",
"assets/assets/tgs/1_4922489621700412068.json": "1eb54d54ac63131404efd7a4b570d829",
"assets/assets/tgs/1_1258816259754109.json": "b4786e3bdb7e3da3a17891b71ff772fd",
"assets/assets/tgs/1_4996975689031745990.json": "d092b0bc24541fc1b3e68b250dc34d43",
"assets/assets/tgs/1_5003922304711786795.json": "ac97fe7bf05d9fe0623cf4ac6e345f6b",
"assets/assets/tgs/1_1258816259754263.json": "3a27b71aa6f7342abd5315d2bc29903b",
"assets/assets/tgs/1_4994831594112942483.json": "b768783b554fcc1b5bec4e3890d05438",
"assets/assets/tgs/1_1258816259753995.json": "f255df601640bae4f77211783a813b5d",
"assets/assets/tgs/1_1258816259754239.json": "55f6c1b8f3becb30ddac0844f8b2367a",
"assets/assets/tgs/1_1258816259754158.json": "b9c83f64d7c9d46f827d4d0c8086ed54",
"assets/assets/tgs/1_1258816259754219.json": "402422d8e7250f6f0d84bd5357e48f4f",
"assets/assets/tgs/1_1258816259753961.json": "1db0921ff9bef6fcd5fbf649430c75cb",
"assets/assets/tgs/1_1258816259754127.json": "a92fdc0f243ed2eaccfa02fd9c47c0d4",
"assets/assets/tgs/1_1258816259754113.json": "97d53f3a9080b66fdb04a3a4932a6b4d",
"assets/assets/tgs/1_1258816259754136.json": "d73c0e751a5c298ff34369719d469c30",
"assets/assets/tgs/1_1258816259753998.json": "ca0d2925bdb5ebdd4048eed8e92bb50d",
"assets/assets/tgs/1_1258816259753970.json": "06da7fe743eaf77a8699859fa4ce0180",
"assets/assets/tgs/1_1258816259754188.json": "896114a063d28a13e4e627fb9a38ef0b",
"assets/assets/tgs/1_5021586753580958116.json": "6efae27bafb8ca2bf2c41f461003c51a",
"assets/assets/tgs/1_1258816259753999.json": "6273850e577a005bba1df79cd58b47e8",
"assets/assets/tgs/1_1258816259754059.json": "bb30694d61a4a76166f5a1556f765c10",
"assets/assets/tgs/1_1258816259753959.json": "eb79f79e2f6c8bb8c41f26b31b285068",
"assets/assets/tgs/1_1258816259754097.json": "efc68fa11ac1449ff264ccda13f5415e",
"assets/assets/tgs/1_1258816259754235.json": "38d73803b39f4ba8df96567f2b417142",
"assets/assets/tgs/1_1258816259754141.json": "5b5e45aa55bc3b9957a46439bcf740d4",
"assets/assets/tgs/1_1258816259754200.json": "78509cf23c7cb27d1f048eda18c956a6",
"assets/assets/tgs/1_1258816259754201.json": "46f022e7331aa625385dbcb96c952fa0",
"assets/assets/tgs/1_1258816259753967.json": "c3a01a61fcf86a248c59898379f71c9a",
"assets/assets/tgs/1_1258816259754206.json": "6e6d607d9cea12de00579e18392d6d07",
"assets/assets/tgs/1_1258816259754214.json": "7dcfdad37f14f9d4de14993ea5cf4ca7",
"assets/assets/tgs/1_1258816259754164.json": "19b06a4c87e9132ec98a4cd3badc038c",
"assets/assets/tgs/1_1258816259754119.json": "2d32582e482b6bbe276e7ff01d0c4649",
"assets/assets/tgs/1_1258816259753946.json": "3fe32d5fa7dcef2a279f50109b75ca52",
"assets/assets/tgs/1_4909154302297113117.json": "71b8a0be85c6db8934bfb275b2fecbfb",
"assets/assets/tgs/1_1258816259754268.json": "f0ee604ca9be82ce4fde1465356c5d66",
"assets/assets/tgs/1_1258816259754286.json": "da4202189b32d904cd3f1bda9e08249e",
"assets/assets/tgs/1_1258816259754030.json": "addc4721a65dae086be780044672784b",
"assets/assets/tgs/1_1258816259754272.json": "6a912b7fc88b6c1de87ab3633f41e5ee",
"assets/assets/tgs/1_4922628233179956179.json": "0bcd9fdb08a4da2020b40af2bb006aa4",
"assets/assets/tgs/1_4996955824808001839.json": "261db26ec1f769a8aaf729af7e68911f",
"assets/assets/tgs/1_1258816259754110.json": "3a4c7c37be60a388273558ebd61cb5c0",
"assets/assets/tgs/1_4994736546486681981.json": "77178dcb6ef23f21e36befac71bd5b4f",
"assets/assets/tgs/1_1258816259754138.json": "1f4dd900a14b2d69b181d628d2d222b8",
"assets/assets/tgs/1_5087170393089769725.json": "03f3bfae669817987ed27a2da3eb30d2",
"assets/assets/tgs/1_1258816259754233.json": "0c8b7df7950baf99eff78e69b0701bb0",
"assets/assets/tgs/1_1258816259754278.json": "665f1b6d7638b48ab46fa29aaa8b677a",
"assets/assets/tgs/1_1258816259754157.json": "f4653767909b09c16fb15bd3dc3f31c5",
"assets/assets/tgs/1_1258816259754178.json": "113b8881ea28f996db4f1c09f50ef3ac",
"assets/assets/tgs/1_4994661685206712726.json": "5110573686a60c27f2e7661a11c905ad",
"assets/assets/tgs/1_1258816259753980.json": "a8aeef020e059d3262004acf38c7f43c",
"assets/assets/tgs/1_1258816259754166.json": "fb1f31eb19b51fe51407a9f53e501dfd",
"assets/assets/tgs/1_1258816259754132.json": "fbf69f0cc246673a314b7402d42bde6a",
"assets/assets/tgs/1_1258816259754054.json": "22990eb180f8434be1f02a3b9deb7035",
"assets/assets/tgs/1_1258816259754213.json": "5d3db6c13b57031857d3797398d9ccf0",
"assets/assets/tgs/1_1258816259754259.json": "bde59fd3b51862cab0a7da183af15d85",
"assets/assets/tgs/1_1258816259754037.json": "02aa0d3bd54bdfba7dc45a7c7ffc0064",
"assets/assets/tgs/1_5003771684503683543.json": "7ac2759f0d6dde2b5c6910b61986b1a7",
"assets/assets/tgs/1_1258816259753957.json": "fe1ddd4b880037b38d6840af0c2e368a",
"assets/assets/tgs/1_1258816259754224.json": "843cdaa43c00effb5c2acade428914c7",
"assets/assets/tgs/1_1258816259754102.json": "47facd949be5f87b442e4e47fadf77ee",
"assets/assets/tgs/1_4907135676257927509.json": "3e1ff6b87c386fdd75b9f4afd1e717a4",
"assets/assets/tgs/1_1258816259754173.json": "4d94813f72f09276ce125df49518b8c3",
"assets/assets/tgs/1_1258816259754024.json": "9963df8dd9e489055b04ec249d3a1d95",
"assets/assets/tgs/1_1258816259754194.json": "f6bddd64b469c9f700383f4fdae9ba08",
"assets/assets/tgs/1_1258816259754267.json": "719b889eb9836ba868aa9e86eb2affa1",
"assets/assets/tgs/1_1258816259754217.json": "2fd6a61a8cba7073b0a1add3565974a0",
"assets/assets/tgs/1_1258816259753992.json": "f79e16284e8f9d9098fffa9d6bde7f5b",
"assets/assets/tgs/a.txt": "8811740da26aa39faa51981c1a469fac",
"assets/assets/tgs/1_4908986605299040560.json": "c4c9aa461d7f50a527277f0b0f549f58",
"assets/assets/tgs/1_5006140530766119365.json": "04e9883c63e1864f80dc8a71bbcfa036",
"assets/assets/tgs/1_5003855200142754324.json": "cc91c581c805c5b5a2855715e98ca04b",
"assets/assets/tgs/1_5003553654783869291.json": "50b1c35b3b4eac6a85c3ba14be19c88f",
"assets/assets/tgs/1_1258816259754153.json": "9bc08c4b6d93a1070d7aa38dc5f2e60c",
"assets/assets/tgs/1_5143232717168574788.json": "b05bb1e2915bb82e69213646f25db2ef",
"assets/assets/tgs/1_1258816259753989.json": "0a9dcece22c0bd8eab790b930717cea1",
"assets/assets/tgs/1_1258816259754221.json": "0ee0cea89bcd8890470607dc5bb854aa",
"assets/assets/tgs/1_1258816259754212.json": "903b5aca4b634184f169aea6272a77b8",
"assets/assets/tgs/1_4922520957781803481.json": "0563e68009baa15057375dbff17a44d6",
"assets/assets/tgs/1_1258816259754174.json": "2a1b023ef931af68f664ab1ac046248e",
"assets/assets/tgs/1_1258816259754131.json": "2414c1c989792fadb709cfd1513d8e83",
"assets/assets/tgs/1_1258816259754003.json": "891d2b2e54dd3c18625d64366d849bc2",
"assets/assets/tgs/1_1258816259754220.json": "45bb595da6b8ef30c5ba10e79949b2fb",
"assets/assets/tgs/1_5003989868842320217.json": "50c7931257de444bf2bbf1777315a314",
"assets/assets/tgs/1_1258816259754249.json": "6a5106c50790c6f9fdcc239d33059ac3",
"assets/assets/tgs/1_1258816259754128.json": "c4e6acf5f188bcdb1e94becfad3c7f96",
"assets/assets/tgs/1_1258816259753993.json": "778b80a387628b70aacf63b3f4498faa",
"assets/assets/tgs/1_1258816259754150.json": "0ff044b7078e89e7418de86fefd5a5ac",
"assets/assets/tgs/1_1258816259754163.json": "a38c370ef54b3ee162665e056a20d7fc",
"assets/assets/tgs/1_1258816259754005.json": "020dd8714d2684d447d39d7929a3211a",
"assets/assets/tgs/1_4997193731636461883.json": "5e6c9b1b7d2c40fe22f6cfd424045024",
"assets/assets/tgs/1_4996793668317741417.json": "34f366678c93cfe8b95698ab8ea0175b",
"assets/assets/tgs/1_1258816259753996.json": "a0cb812e35820daad258519b9bdd9344",
"assets/assets/tgs/1_1258816259754196.json": "7581462d573767ca4750ea8acba68d9a",
"assets/assets/tgs/1_1258816259753938.json": "9c1a52395c3a81b8457a8ab4b19609eb",
"assets/assets/tgs/1_1258816259754225.json": "50bcd099a77f27870411794ee7f44d20",
"assets/assets/tgs/1_1258816259754144.json": "5e9078e7aa345d9eff155c177b92636c",
"assets/assets/tgs/1_1258816259754262.json": "8d385c0258fb89f2eb9958551a0478a3",
"assets/assets/tgs/1_4994524881908400500.json": "db4ad64e473a30e900e553b3dde2e6d4",
"assets/assets/tgs/1_1258816259754139.json": "9b1d4778f250f91bd47046e6a9158e1f",
"assets/assets/tgs/1_1258816259754236.json": "cc41c8bcaffca55843bea08aadb41e1a",
"assets/assets/tgs/1_1258816259754124.json": "f058674cfe0ea1ddc134140154730a98",
"assets/assets/tgs/1_1258816259754111.json": "816702f03bef664eefc0d20302d25905",
"assets/assets/tgs/1_1258816259754216.json": "bb6d596e1c3492a5206a5f536f8260a6",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.json": "3a93c74536175c807673158254b4eb1b",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "56746ccca124291de7131607cd007ddf",
"manifest.json": "df96caad9837496f89f0b57e43608b2f",
"main.dart.js": "ece6eab1c901e44cba71e52ad658a304",
"index.html": "71496568753e9bdef356019580ce18e2",
"/": "71496568753e9bdef356019580ce18e2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"version.json": "477159eec3b5b2434742dc2b04e39fa2",
"worker.dart": "f14b518acaec64a988845bb472d04c6a",
"sqlite3.wasm": "a45b384873354f72e609cd7d31ca8017",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
