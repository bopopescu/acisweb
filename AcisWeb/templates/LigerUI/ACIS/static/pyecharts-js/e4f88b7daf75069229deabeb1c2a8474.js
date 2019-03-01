(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('宣威市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"530381","properties":{"name":"宣威市","cp":[104.10455,26.219735],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@B@B@BB@@B@BBD@BBB@DB@@D@@@B@BA@@BABABA@@BEHCL@PBB@HBL@L@H@FCFIH@D@BBBBBBDBD@@@BBB@@BBBDBB@@ABB@BBBBB@BD@BB@@@B@@BD@@@B@@A@A@@B@BAHBD@B@BCH@BBD@B@@ABAD@BBD@@A@ADADABBDAD@B@BAB@BA@BDBDBBBB@BBBBBBBAB@@A@@B@D@BBB@@DB@AB@DDDBBBDB@@BBBB@@BB@BBBDBB@@BBB@DDBBB@BBBBBB@BB@BAB@@FD@@@B@B@BBBBBBBF@DB@B@D@@@B@@@D@@@BDBBBBB@BBB@BB@BD@@B@B@B@@BABDFBDBD@BBDDB@DB@@B@BFD@@DBDDBBB@JAF@HAB@D@DBD@B@@@FF@BF@B@D@B@D@HGD@DCBADC@ADCB@FBD@B@DAB@@@BBDDB@D@BBBAB@@A@@@A@A@@@A@@B@@AB@B@@@BA@@@AB@BA@@B@FEDAB@BAB@BBB@B@FADAB@B@BABAB@B@BCB@B@BBD@B@DA@AB@@BB@@@BBBDBBHDBBBAB@B@BB@@B@B@DAD@D@@@BCB@@@B@BABC@@BCBA@@DB@@B@BAB@BAD@@@B@D@DB@@BBDB@B@DBB@D@B@BAB@BBD@@@BB@DBB@D@D@D@D@D@DAD@D@DABAD@BAB@BABA@@BABA@@BABAB@@A@A@@@A@@@E@C@C@ABB@@BAB@B@DA@@DB@@B@@@B@@@B@BBB@B@@BBB@@B@B@HDBBF@@@B@B@@@B@D@BBB@B@BAB@@@B@BBB@@@B@FAB@@@@@@BB@D@B@B@@BDD@BB@@@@D@@BBBDBB@BD@@@B@BB@B@BAB@B@BBBBF@DBBB@BBB@D@@@B@@BBB@@D@D@@@B@@@DDB@@BBB@D@@BB@@AB@@@@B@@BBB@@AF@BAB@DBBBDB@BDBB@BB@BBB@@B@B@DB@BBBB@@@@@B@BBBBDBBFFB@AD@D@B@DBB@B@B@B@BAF@B@BBB@B@@@D@B@@BBBB@@D@@@B@F@@@@BBBDBB@B@B@@@DABA@AB@@BB@DBB@@BB@BABABC@A@CA@@AB@@CB@B@B@BA@ABA@@BAB@B@B@@@BA@@@A@@BA@C@CB@DABABCDABE@@@ABA@@@AACAAAABA@A@@@A@ABADADCFADABA@@B@BABA@@@@B@BA@@B@@AAA@A@@BAB@B@@A@EBA@AB@B@B@DABA@@BAAA@@@A@EBA@@AA@A@@@AACAC@@@A@A@@@@@A@AA@AA@@BA@@@A@@AA@@@ACA@@@AA@@@@@@@@A@A@@@@@@@A@@@A@@@@AA@@@@@@@A@@@@@@@AB@@A@@@A@@@AA@@A@@@A@@@A@A@@@@@@A@@A@@@A@@@@@A@@@A@@BA@A@@@A@A@A@C@@@@@A@@B@@A@@B@@A@ABCBA@@@AB@@A@@B@@@BAB@BCDADCDA@ABA@@D@@@DCB@BADADCB@B@B@@@DDFBBBBBBB@@@B@B@@D@@@DBBBB@D@B@B@BABA@AB@B@B@BBB@D@B@B@D@@@D@DAD@B@DB@@B@BAB@B@B@FAB@F@BBBADA@@B@BBDBB@B@B@BB@DB@B@B@BBB@B@DADA@@BABAFA@ABADA@@@ADCDABE@A@EA@@C@A@@DAB@D@D@B@@@@A@A@@BAAC@@BE@ABC@@ACAAAAAA@AA@CEAC@A@CA@@CAA@AC@AA@A@CAC@ABA@A@ABC@A@CB@BAB@FBDBB@B@DAB@D@DAB@DAB@D@B@BABAB@@A@@B@BBBAB@DCDABA@A@AB@BA@AFADCB@BA@B@@@@B@@@@@@@@@BA@@@@@A@ADE@AD@BA@A@A@A@@@ADAFEBABAB@DCBABA@A@ABABADCBCBA@ABAAA@AA@@EAC@@@AAC@AAA@@AAAA@AAABE@C@C@A@A@ABABADC@@DC@ABA@A@ADCBAB@DAB@B@BBD@BADAD@D@@@B@D@BAD@BAB@BA@A@AAC@ABC@@@C@A@A@A@@@AAA@ABABA@A@ABEBA@CBA@AAAACCCAA@A@A@C@@BCBADCBA@A@C@ABABABAB@@AD@@ABADA@@DCBAFA@@AA@@@A@C@CBA@AACACA@ACA@AAA@A@CBCBC@A@AACAAAA@ACCAAACC@CAA@C@@@AB@@A@A@A@C@A@ABC@A@A@A@A@@@A@@@AA@@AA@CA@@A@A@A@CAAAA@AAC@E@GAC@AAE@AAEBA@A@A@C@A@C@A@ACAAGCAAA@C@GAE@A@C@AAAAGAA@AAA@@AAA@@@AACACCCCCAAAEAA@@AA@A@ABA@AAC@@AA@ACACCAACCAAA@AA@AACAACAAAECC@CAA@@AAACAACCGAE@@ACACAEAACACC@@AA@@@@AA@@BC@@@C@@@A@A@AB@@A@A@@@AAAB@@A@@BABE@@@ABA@ABA@C@ABA@A@@@AD@DAB@@AAA@@A@BA@@AA@AAA@A@A@C@@AA@@A@A@C@A@AAA@AC@@AAAA@A@AAA@ABEBA@A@A@AAEAAAAACAA@CAAAA@@AE@@@EACCE@AA@@A@@EA@AAAAAA@AAAACA@A@@@A@A@A@C@E@C@AAA@@@C@ABCAA@A@A@G@A@A@A@A@ABA@A@C@A@A@CBABA@ABABA@A@@BABABABA@A@CBEBA@CAA@A@C@@@AACAABA@C@A@AAAAEA@@A@@@@AAAA@AACACAACAAAEAC@AACACA@AAABC@A@AA@AA@AAAAACAA@@@A@@@A@@@A@C@C@@BABABA@ABA@A@CBA@A@ABA@CBABABAB@@GBCB@@AFABABC@CAA@AAA@A@CI@@AA@AAA@A@A@A@ABA@ALCDEFGFGFK@E@CCEAEAG@ICEE@CA@@@A@CBA@A@CBA@A@ABCBC@ABA@AB@@AB@@A@@BA@A@@AAAAA@@AAAAA@A@A@A@A@@@A@AAACAAA@G@CBE@A@AACACCACCAACECE@ACCACAA@CAAAACCACAC@M@CFADEAGKC@@ADAD@BA@C@CBA@CBABADCBADCDADCDAB@DA@ABCBCBCB@BCBCFCD@HAPABA@@@AA@C@EBE@AAA@@C@IAC@A@E@ACGSKSCGGCG@MDM@SAQASE@AAA@@CACCEAECC@A@ABA@CA@@CC@A@@BA@@BA@@@AAA@AA@AA@@EB@@@@SDGFCFA@ADCBA@A@E@AAC@CAEACAEAC@C@A@C@C@ABA@CCCCCCCCCACCCAACAAACAA@CCGCEEMACGEACC@C@AAE@AAAAAC@AA@A@A@A@@B@@@F@BABABA@A@AAAA@AA@EBCBA@A@@@AGC@C@CBAF@DDDBDABABCD@DCBE@CA@@AB@@AB@@@D@B@B@BBBFB@B@@ABID@B@BBFDFBBAB@B@BDBBBA@CD@BBBB@BA@AB@@BBDB@@BAJAP@BABC@A@A@AABE@C@@A@KCA@@@A@@B@BA@EFEFCFADABCFABC@@@@F@BC@E@CA@CCAC@ADEHCDEDE@MAC@CAEAC@EBCDAFA@AC@C@CAACBEB@DE@ED@F@BCBA@CBCBACCCGGECEAAEAECCACCCC@A@ABCBE@CAABADCAC@@DBD@DCBAB@DA@CBBD@BBFCBCBADC@GCCCEAECECEAC@ADBDBDFF@FA@ADFBBB@@@DABA@CDCD@B@B@BADBHCN@BSbEFED@BCAE@A@CBG@CA@A@CCC@AEBG@M@E@KKGGGCGGIICCI@K@@@@@A@K@CC@C@A@AB@@@@A@@@A@@@C@E@@@CBGBE@AAA@A@A@ABA@@BA@@@@@@AAC@CAACAA@@A@@@AB@@@@A@@@@A@AAA@A@A@ABABA@A@@@@B@B@@@BA@CA@A@A@@A@A@@@AB@@@BAB@D@BAB@BA@AB@DA@@@A@A@C@@@AA@@@ABAB@BCBCBC@C@A@AACEAA@CAAAAA@A@@@@@A@@@A@AAA@A@@@@@@BB@BB@BA@@B@@B@DF@@@@ABA@A@@@@@CCAAA@A@KCA@ACCAICIAGAGCC@C@GDE@MBA@C@C@EACBCDA@CECCA@C@ABA@@DDF@D@BABA@CAA@C@C@EAG@CB@B@F@D@B@@@@@B@@CAA@ABA@@DABA@@@AAGIA@A@@@@@BDDDDF@HDH@BCBC@CBQBCAICIGOEWMGIG@EBC@A@AAAAC@C@CDABAB@@@@@@@DDFDB@D@BABE@CDA@CECGCECCCEECE@EDIFGDABCHOHM@M@K@@@@@@@QCGEA@EAC@ADAHELADCD@D@F@BAFADABA@CAC@CACBADADBB@BA@A@AAGEAAAABAJIDA@A@AAAEACBAB@B@B@@BB@B@DABABA@CAAAA@@BAD@BCBC@GBC@ABC@AAGIAA@@ABA@CDCB@@BB@BFB@B@F@DBB@BB@B@B@B@BBBD@@@B@@ABA@ABA@A@@@@B@@@B@@BD@BBBFJBBDBD@B@FDFF@@@BAB@DBBB@BBBB@B@BABCB@B@@@@A@CBA@@BBFBFDHBH@F@J@F@FBDABCDG@I@GBIDAJCJ@F@H@FCDCD@J@B@BB@@@B@@BBBEL@DA@@@E@G@E@C@CBCF@J@HJlJZDJFDH@H@PODAF@BBBBBD@DBDBBDDBBD@D@DBBBBBBBBBBBBF@@@D@DBD@BB@BBFDHBBB@BBDBD@D@BBD@DBBBD@BBBBBBBBDBD@B@DADABA@C@@BADBBBDA@GF@B@@@@CD@@@@CBSJCB@B@B@BBB@@@DBDD@B@FPBH@@@DBD@@@BBB@BAH@F@DBBHDHDBBBJFLHT@FFXBVBF@JEJ@PHRCHEFQHAF@FDFHFN@RAHDD@D@DAD@BB@FBJHFHFH@DA@EB@D@@@DB@BB@B@BB@@BBD@B@BBBB@B@B@B@BABCD@BAB@D@@@B@BABAB@B@@@BB@BBB@D@BBBBD@DB@BDBD@BBBBBDBB@DB@BD@BNHHF@J@HAHABABAD@B@@EJADAD@@BDDDBBFBDBD@H@H@BBHHDDD@DABA@EBCD@B@BBBAD@BCDCBCFEDGBCBCBAH@F@NIJCPCH@JBB@HBH@DA@CACACBEDAD@FBDBB@@C@CDABBBBBBF@D@DB@F@F@BD@DAF@BBBB@D@BB@D@@DEH@BBHFFDFHFHFF@DBB@BAB@D@@@B@BB@@BB@BABADABABADABABABAB@B@BB@@BD@DBBBBBB@@D@B@B@DABAB@BBBB@BB@@@@DBDB@D@FBDFDDFBBDFBHDF@F@D@@B@B@DAB@B@B@B@B@B@BBB@B@BBB@BBB@BBB@D@B@@@B@B@B@DBB@B@D@B@BBD@B@B@D@BBB@B@B@DBB@B@@@BBB@BAB@B@B@DAB@B@@@BADAB@B@BAB@@@BAB@BBD@B@B@BBDAB@BAB@B@B@BB"],"encodeOffsets":[[106482,27154]]}}],"UTF8Encoding":true});}));