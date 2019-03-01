(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('梅县区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"441403","properties":{"name":"梅县区","cp":[116.081656,24.265926],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@G@CACAEAGAAACCGCAAC@@A@@IACACDADAB@DADADABCB@FAFAH@FABAF@BB@BBD@BBBBB@D@D@BBDDAFAB@@@B@DBBB@B@@B@D@D@BBBB@B@B@BDBBBBB@BBDBFDFDDB@@@BAB@BAB@@A@AAA@A@C@AAABABAB@BBBAB@BABCAAACACEEAA@CBABA@CBA@CAC@CBEBEBADABCBCDCB@D@@DBDF@DAFAB@@AB@D@D@D@FADCFCHAFCDEBE@EBKDED@@ADCBE@EBCBADADAFCFABA@A@CEAAEAG@GAA@CBCFEDEFADB@A@AHAD@B@DBDDBF@D@@BABAD@@BB@@D@F@D@BDBBBBF@FADA@@DAJABA@@@A@AAE@A@@D@@@B@BDBDDBB@J@B@FBH@F@@B@BABABABAD@B@@@BCBABA@AB@D@BEDCBCB@@CDCFC@CBABADBDBBBDAB@DAB@B@BABBD@FDFDDF@F@B@@BBBADCD@DB@B@B@BDDDDDFFBBDBD@FCFCJBFDBDABBBDBB@@DEBEDADCFEB@BAB@B@BBD@DBBFBF@H@H@D@BB@D@@A@ABED@@EDADAJAFCJ@@A@AD@@AACCAAEBEBGBCDCF@@AHAFBDB@FABBDBBD@FADCF@BADCBAB@B@@@DBB@B@B@DCB@@CD@B@B@BBBBB@BAFAFAHAFABEDABGBCAGCA@A@C@A@ABADA@@BA@EJEFC@@@A@@B@D@BAB@@@@A@@@A@AE@@AA@AA@@@C@@BC@EFCDEBGDA@A@A@@@IBC@C@ABABAD@BBBBFAFCJCDGDABAD@@C@AB@B@@@BDBBBDH@HCFCFAB@@GH@@EBCB@B@DBF@FEDAFAHEDABADBF@BABABGAGAI@AB@DAFADABC@CA@@CAABCBA@CBABC@E@CAAAC@C@A@GFCFAB@D@D@B@BA@EB@@@@GLCJA@ABE@EBEBCD@B@BDBBBBBBDBB@BABADC@CDAB@DDTBJ@N@BHBFBBD@D@F@JBFFDDF@FBH@DAB@@@@@DBBDBDBDDNRDH@JF@FDFDF@F@BADABABAFCF@FBDFB@DDHDF@HAB@HA@@F@B@DFBBJJ@BBBD@DABCBCBCDCBA@@HDHBJ@BBDDBDNAVCD@DA@@BABC@C@CBEBCDEDGBC@@BEAGBCFAFCTKFCHCBCAGCI@CBADABCDABAAE@CDADADCDC@AFAHAFAJCB@BBABADAF@DDDBBBB@H@J@FAH@HBDBBDAD@NEREJCDBB@D@BADAFDDD@F@BCHAB@BE@C@CBABAF@FAHAJAFAH@F@FAF@DABABABCDAB@@@BB@@@B@D@@@B@B@@BB@@B@D@@B@@@B@B@B@B@DAFB@@HAHANCFBFFFH@DBDDFD@F@F@FADADABADAFAJBFAHADADAHCFAD@FAFCHCHGBCBADE@C@EACAA@AAA@CB@B@B@FAFAFEFE@ABCBC@C@C@E@C@EBEFGFEBAD@FBFDBB@@@BFBFHB@@D@DADADCF@D@FDDBD@B@DBDBDDJB@F@F@HAF@F@DDFFDDFB@B@DCDCDCDCFCDAD@D@D@BBBFBHBD@DBBB@DADADABAD@DADADBD@BDBBADBBBBB@@D@F@D@D@B@BB@D@DBDBD@D@F@B@BBBBBCPALAB@B@F@F@D@D@FAF@D@D@BB@F@D@HDDBB@BAD@DCBCBCDC@ABAB@B@DBDBDADAD@DBDBBBH@B@@BBB@BB@@@BADAB@B@D@@@FDDDDDD@B@DCBEF@D@@@@B@F@B@@B@BA@ABA@A@@FBD@BC@CACBEDCF@F@BBDBB@D@D@FABAB@D@D@BDBFBFDFDDFD@B@BDBBB@DBB@BAB@BDDDBBB@BAD@D@D@BHTAB@BABABADAD@D@D@LADEBSCICEDEFDRBBDBBBBBAB@BBB@BDBDDFBDBDDDBFBHDDBBBDBDB@JALBDRDDBDBADBDBFCHC@AB@D@BBBDDDD@B@DABAD@BBD@BABCBCB@DBDDDFFBD@D@BA@A@A@A@@@@BBB@B@D@@@BDAD@FBDDFBDBBD@@@BBB@DF@DB@F@B@B@DDBF@HBFBBDBB@@ABAB@DAD@D@BCBABAB@D@BBBFFFDR@@@B@BABAB@@AB@BB@@@BBD@BB@@@BB@@B@B@B@@BCBABADEFCF@B@BHDBB@BAB@@@BFBB@HAJ@F@FDFDD@BCBC@A@A@ABC@ABC@@@ABABCBADADCB@FEFEDC@@@A@@@ABA@@BC@A@@C@A@AACC@A@AJG@AC@CA@@A@@A@AAA@ABA@ABABAB@BAD@B@D@D@BA@@@@B@@A@A@A@ABABABBB@D@@@BAB@BA@@@@BCBCBMDKHEJAJ@RFJFB@B@B@BAB@BAB@B@B@@@B@BBB@@BB@@BB@@@B@B@@@BA@@BABAB@@ABA@A@ABA@ABCBCB@BCDCBADCBABA@ABA@AB@@C@A@A@A@AAA@AAC@A@A@A@ABC@C@E@EBCBCBABCBABABABABA@A@@BA@A@@@A@AB@BA@@B@B@BA@@@A@AB@@CA@@C@@AAAAA@AA@CAA@C@A@A@A@A@A@@@AAA@@@@AA@AAA@A@A@ABA@AAA@@@AA@AA@@@AA@FIBABADABAB@DAB@DABABADCBA@@BA@@B@B@B@B@DBDBDBDBDBDBDBD@B@DBD@F@AAAC@@@ABGBEBABABADCBA@AA@CACCCCCEAGAC@AAAA@AEACAACAACAC@E@ABCBEDCFCHAB@BA@A@AFADAACAECEAEC@AAAC@ACCACCACAAAACAEACBC@C@EACBG@E@AAAAAA@C@CDABCBEB@@E@CAEAACCAECE@CAGBC@A@AA@ABEBAACAAECCC@EBEBCBA@C@CAC@@AAACAA@AAAAACACAAAQ@QAC@AAAACAAE@CACACAA@ACAC@EAC@CAAAAAAA@AC@C@CBABC@AAA@AA@A@A@CAAEACAAAAAAC@CCGCI@@@@AE@E@C@@AC@AAA@A@A@@@@DABABA@@BC@C@A@CBA@A@A@AA@EACCACBCBEDGBABADAB@@ABA@C@ABCBADCDCDAF@@A@C@@@A@@AACCAAACCGCGCAACAA@A@@@CBCBGDEBC@AACCCQQACACAEACEA@AA@E@A@CBABABCAEACAAACEAA@A@CAACECEACCAAE@@AEA@@@AACAIAGCEACACACA@A@@BCACACACA@MAI@GCGBGLGFE@CAA@C@EBW@EAE@EFAHGDGHADBJ@BCBCAEAMHGDAD@FMJKHKHEDGL@HCDI@GAEECAEBDHFFTLCDADBF@BGAAGC@ABAACCE@KFOHADEJGFGDC@CAAGEEECAACFMF[FKACI@QGGQCQAC@G@A@KFABADCFAF@LFP@H@BBRAF@@GJEDABIHGHIJ@@AD@@ADAB@B@B@DABABADA@AD@@CB@@A@A@@AAA@@@ABA@A@@A@A@A@@BA@EFABINGJGNGFMDG@E@CCGMCEACACCCAAECIE@@C@C@CBCBCBEDA@EDA@CGAOEOMS@A@ABCBGFE@I@A@MAMCEEAGC@AACAC@@@EDCFCHEDCDEDEFCD@FAJCD@@@@@F@JDLHJDFAJEDGFI@AD@FCFCDEFGDC@A@@B@@@BADABA@@@@@AHABAHCHA@@@BB@@@BB@@@@B@@@@@@@D@H@D@BBBB@@B@@@F@B@B@DBDBBB@@@@@@@@DBBB@@B@B@@A@C@A@G@CCG@AA@AGCC@AAAEECA@AAACA@@ECEGAAACAAACAE@G@EBG@@BABA@@BCBADABADAB@B@FA@AD@@@@ADCBCDGDEEGGE@AA@C@A@AAAA@@AABA@EBC@ABA@@ACCCECCAA@AACAUIAAACAKDMBGFMFA@@NDRAPGNQRKRALAB@HCF@H@JCBAHCB@@@HCDAHANILIPI@@CC@C@AD@F@FAHCFCDA@EAEAC@C@E@EEAC@CAIF@FE@E@EGCBEBC@A@AA@A@A@ABC@G@EAEAEAAAAAGAEAA@C@A@CBCBC@@@AAC@A@@AAA@@AA@@A@A@A@@@A@CAA@@ACAAACAA@C@@@A@AAA@BA@ABA@A@CB@@AACAAA@@AAC@ACA@EACBE@A@C@@CBABCBC@CACCAGEKGCCEAEGQICCECIGBCGCEAE@C@CAAA@GBGBEBC@AA@AA@A@EBEBCBCBBD@D@B@D@DCAACAAA@GAAE@IAECA@@AA@@A@ABC@ACAACCEEECACCEGGCEECCAAK@K@IA"],"encodeOffsets":[[118829,24498]]}}],"UTF8Encoding":true});}));