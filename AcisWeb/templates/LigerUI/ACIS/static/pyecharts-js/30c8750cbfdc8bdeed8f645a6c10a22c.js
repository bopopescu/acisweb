(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('龙山区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"220402","properties":{"name":"龙山区","cp":[125.136627,42.90158],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@@A@@@@@@@A@@@@@@@AA@@@@@@A@@@A@@@@@A@@@A@@@@@@@A@@AA@@@A@@@@@@@@A@@@@A@@@@@@@@A@@@@A@@@@A@@A@@@@@@@@@@@@@@@@A@@A@@@@@A@@@@@@@A@@@@@@@@@@@@AAA@@@A@AA@@@@A@A@A@@@AA@@A@@@A@A@A@@@@AA@@@@@AA@@@@@A@@@AB@@@@AA@@@@@@@@@@A@@@AA@@@@A@@@@A@@A@@A@@@@@@@A@B@@A@@A@@A@@@@@A@A@@@@@AAA@@@@AA@@A@@@A@@@A@A@@@@@@@A@@@AB@@A@@@AA@@A@A@AB@@@BA@@@@B@@A@@@A@A@@@A@@B@@AB@B@@B@@BAB@@AB@B@@@B@@@BBB@@@@@@@B@@@@@@AB@@@@@BAB@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@B@@@@@@A@@@A@@@@@@@@@A@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@B@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@ABA@@BA@@@A@@@A@@@AB@@A@@@A@@A@@@@@@@A@@AAA@@@@@@@@@@@@@CB@@A@@BA@@@A@@AAA@@@@@@@@@@@A@@A@@@@@@@@@@B@@@@@@A@@@@@@B@B@@@@@@@@@B@@@@@B@@@@@@A@@@@B@@@@B@@@@BA@@@@B@@@@@@@@@@@B@@@@AB@@@BA@@@@B@@A@@@@@@B@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@B@@@@@@@@A@@@@@@@@@@@@@@@@@A@AB@@C@@@A@@BA@EB@@@BAB@@@@@B@@@@@@@@@@@@A@@B@@@@@@@@AB@@@@@@@@@@@B@@A@@@@B@@@@@@BB@@@@@@@@@@@B@@@B@@@BA@BBAB@@@B@@@@@@@@@B@@@@@@@@@@B@@@@B@@@@@@@@B@@B@@@@@B@@@@@@@@@@B@@B@@@@@B@B@@BBB@@BB@@B@B@@@@@BB@@@@@@B@@A@@@A@@@@@A@@@AB@@@@@@A@@@@@@@AB@@@@@@A@@@@@@@A@@@@@@B@@@@@@@@@B@@@@A@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@B@@@@@@@@@B@@A@@B@@@@KBGDEHGJBD@F@DCDEBCDCD@H@FBDFFJF@@B@@@B@@@B@B@@@B@@@@@B@@@@@@@B@@@@A@@@@@@B@@@@A@@@@@@@@A@@@AA@@@@@@AA@@@@BA@@@@BA@@B@@@B@B@@B@@@@@B@@@B@@@@@@B@@@B@@A@@@@@@B@@@@@BA@@@@@@B@@@@A@@B@@@B@@@B@B@B@B@BAB@D@B@@@B@B@@@B@@@@@BBBB@B@@BB@@B@@@@@@A@A@@@AB@@@B@B@@@BAB@BABABCBA@A@@B@@B@@@B@@@@@@B@@@@@B@B@B@@@B@@B@@@@@@@@BB@@@@B@@@B@B@@A@@@AA@@@BA@@@@BBB@B@B@@@BBBB@@BBB@BBB@@@BB@@B@B@@@@@B@@@BA@@@@@@B@@@@@@A@@@@@@@A@@@@@@@@@A@@@@@@@@BAB@BAB@@@B@@@@B@@@@B@@@@@@@@@BA@@@@BA@@B@DA@AB@@@BA@@@@D@B@D@@@BB@@B@@@@@BB@@@@@B@@@@BB@B@D@@@@@@@@B@D@D@@AB@@@B@B@B@B@@@B@B@@@B@D@D@@@B@@@@@@@B@@B@@B@@@@B@@B@@@BB@@@@@@@@@B@@@B@@@BB@@B@@@@@B@@@BA@@@@@@B@@@@@@@B@@@@A@@@BB@@A@@@@B@@@@@@@@@@@B@@@@@@AB@@@@@@@@@B@@@@@B@@@@@B@@@@@BB@@@@B@@@@@@@B@@@@BB@@@@@@@@@B@@B@@@@@BB@@@@B@@@@@B@@B@@B@@@@@@@@@@BB@@@@@@@@B@@@@BB@@@@@@@@BB@@@@@B@@@@@B@@@@@@B@@@@@@B@@@@B@@@@@@@B@@@@@@B@@@@@@@@@BB@@@@@@@@@@B@@@@@@@@BB@@@@@@@@@@@@@@@@@B@@@@@@@@B@@@@@@@@@BB@@@@@@@@B@@B@@B@@@B@@@@@@B@@@@@@@@@@@B@@@@@BA@@@@@@B@@@@@@@@@B@@@@@@B@@B@@@@@@@BB@@@@B@@@@A@@@@B@@@@@B@@@@B@@B@@@@@B@@B@@@@@B@@@@@B@@@@B@@@@@@@@@@AB@@@@@@@@@@@@@B@@B@@@@@@@@@@B@@@@@@@@BB@@@@@@@@@@@@@B@@B@@@@@@B@@AB@@@B@B@@@@@@@@AB@@@@@B@@@@@@@BA@@@@@@B@@@@A@@@@@A@@@@@@B@@@@A@@@@@@B@@@@@@@@@B@@@@@@@@@@A@@@@@@B@@@@@@A@@BB@@BBBBB@B@@BBB@@BB@@BBB@BB@@@@@@@@@B@@@@B@@A@@@@B@@BB@B@@BBAB@@@@@@BBB@@@B@B@@@B@@@@B@@BBB@@@B@B@B@@@@@BBB@A@A@@@@D@@BB@@@DA@B@@BB@@BB@D@F@B@@B@@BB@@@@B@B@@BB@PABADBLFADEHABADBBLFFFHDJDHBLDNARIJKBIDCDCHCHGBGBABGAECEECBCB@JEDCDGCUDCBK@GDCHCLAFCDODCDG@MHGN@DEDEFGCQAKBEDEDCDG@KCCOGICICQDKDMDKBG@G@KA{[@@LCBGAA@@A@@AA@A@@AA@AAA@ACAA@AA@@@@A@@@@@@@AB@@@A@@@@@A@@@A@@@@A@@@@@@@@B@@@@@B@@@@@@@B@@A@@@A@@@@B@@@B@@@BA@@A@@@@@@@@@A@A@A@@@A@A@@@A@A@A@@@@@AA@@A@A@A@@A@@@@@@@A@AB@@ADA@@@A@@@@A@@@@@A@@@@@@@@@@@A@@@@BA@@@A@@B@@@@A@@@@@@@@@@B@@@@@@A@@@@@@@@@@@@@A@@@@@@@B@@AB@@A@@@@@@@A@@@@@@B@@@@@@@@AB@@@@@@@@A@@@@AAAAA@@@@@AACAAAA@@A@@@@@@@@@@@@@@AA@@A@@BA@@@A@@@A@A@@@@@A@@AA@@A@@@A@@@@AA@@A@A@@@A@@@@@@B@@@@@@@B@@A@@@@@@@@@A@@@@@@BA@@@@@@@@@@B@@B@@@@@BB@@@@@B@@ABA@AB@@A@A@@@A@@B@@@@@@@B@@@@@@@B@@@@@B@@@B@@A@@B@@A@@@AA@@A@@@@@AB@@@BA@@@@B@B@@@@@@BB@@@@@B@@@@@B@@A@@B@@@@@@A@@@A@@@@BA@@@@B@B@@@@@BA@AAC@A@@@@@@@@@AA@@@@@@@@@@@@@@A@@A@@@@@@@@AA@@@@@@@@A@AAA@C@A@A@AB@@@@@@@@A@@@@@@@@AA@@@@@@@@A@@@@@@A@@@@@@@A@@@@AA@@@@@@@A@@@@@@@A@@@@@A@@@A@@@@@A@@B@@A@@@A@@@@@AAA@AA@@AB@@@@A@@@@@@@A@@B@@A@@@@@A@@@"],"encodeOffsets":[[128172,43879]]}}],"UTF8Encoding":true});}));