// Initialiser la carte
var map = L.map('map').setView([45.9368, 6.1322], 18);

L.tileLayer('http://89.168.57.91:8080/LyceeLachenal/{z}/{x}/{y}.png', {
    minZoom: 15,
    maxZoom: 22,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);


// Définir les données GeoJSON pour chaque étage
var geojsonDataEtage1 = {
    "type": "FeatureCollection",
    "features": [
        { "type": "Feature", "properties": { "salle": "13" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132443855592967, 45.936792791783532 ], [ 6.132451800410498, 45.936862076107261 ], [ 6.132332645198166, 45.936867696926917 ], [ 6.132323764318674, 45.936798784599809 ], [ 6.132443855592967, 45.936792791783532 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "14" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132323764318674, 45.93679878003244 ], [ 6.132332645193752, 45.936867696937178 ], [ 6.132169440848435, 45.936875476859768 ], [ 6.132160492656691, 45.936806544549889 ], [ 6.132323764318674, 45.93679878003244 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "12" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132338097023253, 45.936716667911078 ], [ 6.132346542802771, 45.936781465154866 ], [ 6.132227172282988, 45.936787083013414 ], [ 6.132219251901891, 45.936722066542458 ], [ 6.132338097023253, 45.936716667911078 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "11" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132219253543763, 45.936722064258774 ], [ 6.132227180492344, 45.936787079587916 ], [ 6.132107560408311, 45.936792893842551 ], [ 6.132099429867845, 45.936727498286743 ], [ 6.132219253543763, 45.936722064258774 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "10" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132099431509721, 45.936727500570427 ], [ 6.132116122760606, 45.936862250362864 ], [ 6.132020322927197, 45.936866941039654 ], [ 6.132004120953585, 45.936731824727232 ], [ 6.132099431509721, 45.936727500570427 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "9" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132116189227633, 45.936862186893528 ], [ 6.132124696936733, 45.936927733982991 ], [ 6.132030014367759, 45.936932969021719 ], [ 6.132034131001193, 45.936967051293124 ], [ 6.131986299641299, 45.936969668810697 ], [ 6.131974067359097, 45.936869957663198 ], [ 6.132020328027306, 45.936866941377744 ], [ 6.132116189227633, 45.936862186893528 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "8" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132034162856094, 45.936967030843746 ], [ 6.132129805972868, 45.936962027567596 ], [ 6.132146782185027, 45.937094102999801 ], [ 6.132050178520454, 45.937099556148802 ], [ 6.132034162856094, 45.936967030843746 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "15" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132291844506018, 45.93705440405904 ], [ 6.132305228465431, 45.937189553478937 ], [ 6.132287198591141, 45.937205146048541 ], [ 6.13226320449913, 45.937221778117973 ], [ 6.132204944334536, 45.937188404911318 ], [ 6.132189418745586, 45.937059001748601 ], [ 6.132291844506018, 45.93705440405904 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "Escalier" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132429212643101, 45.936677276337036 ], [ 6.132434054588134, 45.936712841350747 ], [ 6.132395279821793, 45.936744510723749 ], [ 6.132342136044464, 45.936747360012134 ], [ 6.132338097823097, 45.936716658581339 ], [ 6.132385145062337, 45.936678840720951 ], [ 6.132429212643101, 45.936677276337036 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "Sanitaires" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132322925088437, 45.936918998692519 ], [ 6.132327943460623, 45.936952494757485 ], [ 6.132285071663862, 45.936986031700897 ], [ 6.132229085449164, 45.936950899707192 ], [ 6.132270918286057, 45.936921370819881 ], [ 6.132322925088437, 45.936918998692519 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "7.8" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132146752780492, 45.937094072325785 ], [ 6.132155613343883, 45.937160109923944 ], [ 6.132058539206915, 45.937165017752214 ], [ 6.132050227527985, 45.937099552740484 ], [ 6.132146752780492, 45.937094072325785 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "7" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132155652549918, 45.93716013718965 ], [ 6.132172550350009, 45.937297392623044 ], [ 6.132127541824469, 45.937332483498757 ], [ 6.132076181921632, 45.937303309267982 ], [ 6.132058534306163, 45.937165019456316 ], [ 6.132155652549918, 45.93716013718965 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "Escalier" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132124809654063, 45.936927665818267 ], [ 6.132129592790053, 45.936961966219414 ], [ 6.132034184909476, 45.936967024027155 ], [ 6.132030019268502, 45.936932969021555 ], [ 6.132124809654063, 45.936927665818267 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "Sanitaire" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132127490366544, 45.937332306272104 ], [ 6.132086245620142, 45.93736513407989 ], [ 6.132037159667203, 45.937368187828461 ], [ 6.132032611767408, 45.937336232522568 ], [ 6.132076130463709, 45.937303254736648 ], [ 6.132127490366544, 45.937332306272104 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "Sanitaire" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132138673887373, 45.937393728884139 ], [ 6.132143378611296, 45.937427101967195 ], [ 6.132192150915976, 45.937424484471208 ], [ 6.132237002617387, 45.937389093732136 ], [ 6.132232297893465, 45.93738816670168 ], [ 6.132208382213516, 45.937374043118204 ], [ 6.132186740483465, 45.937390893261785 ], [ 6.132161570210473, 45.937376715147792 ], [ 6.132138673887373, 45.937393728884139 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "6" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132343015729806, 45.937316239997791 ], [ 6.132350691535879, 45.937382440072874 ], [ 6.13223712023548, 45.937388848341719 ], [ 6.132236983014368, 45.937389039200923 ], [ 6.132232337099492, 45.93738816670168 ], [ 6.132208441022562, 45.937374084016618 ], [ 6.132231729405984, 45.937355952383939 ], [ 6.132203501062438, 45.937339702073515 ], [ 6.132224358671837, 45.937322579258051 ], [ 6.132343015729806, 45.937316239997791 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "Vie scolaire" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132400060507383, 45.937214102827369 ], [ 6.132407744889787, 45.93727924051597 ], [ 6.132272680107135, 45.937286629508058 ], [ 6.13233688121087, 45.937233275714483 ], [ 6.132359597431251, 45.93721620484137 ], [ 6.132400060507383, 45.937214102827369 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "Vie scolaire" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132343015729793, 45.93731622892107 ], [ 6.132555370305162, 45.937303652644516 ], [ 6.132492072165367, 45.937357025115475 ], [ 6.13246746057834, 45.937375797489615 ], [ 6.1323507001122, 45.937382440072881 ], [ 6.132343015729793, 45.93731622892107 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "Sanitaire" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132680458377678, 45.937160127816881 ], [ 6.132684692629208, 45.937194319011482 ], [ 6.132642644159137, 45.937228169363955 ], [ 6.13259702794009, 45.937201523971432 ], [ 6.132645770840243, 45.937162152296104 ], [ 6.132680458377678, 45.937160127816881 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "Sanitaire" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132695542898757, 45.937253478725957 ], [ 6.13274682438953, 45.937282925639479 ], [ 6.132787441839407, 45.937250643096419 ], [ 6.132783834884398, 45.937219560224705 ], [ 6.132734572504311, 45.937222835514987 ], [ 6.132695542898757, 45.937253478725957 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "Secrétariat proviseur adjoint" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132615381264143, 45.937431161982602 ], [ 6.132622359937963, 45.937493545595771 ], [ 6.132528637916793, 45.937499584914747 ], [ 6.13252459969542, 45.937463348991074 ], [ 6.132581409236804, 45.937459831733115 ], [ 6.132578939256744, 45.937433520455258 ], [ 6.132615381264143, 45.937431161982602 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": null }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132579331317066, 45.937317014512168 ], [ 6.132604815238322, 45.93733151982898 ], [ 6.132613205329322, 45.937411626190674 ], [ 6.132519581323232, 45.937417733682537 ], [ 6.132517459296714, 45.937399871311889 ], [ 6.132596861314435, 45.937337661411675 ], [ 6.132570946126824, 45.93732327197543 ], [ 6.132579331317066, 45.937317014512168 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "Proviseur adjoint" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132613122016498, 45.937411646639852 ], [ 6.132615395966392, 45.937431155166159 ], [ 6.132578944157489, 45.93743352045523 ], [ 6.132581411687172, 45.937459825768734 ], [ 6.132524582542757, 45.937463348138976 ], [ 6.132519534766045, 45.937417773728832 ], [ 6.132613122016498, 45.937411646639852 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "CDI" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132622357487582, 45.93749354474366 ], [ 6.132647576768123, 45.937722189765296 ], [ 6.132555050530928, 45.937728678939031 ], [ 6.132558432051241, 45.937762051820499 ], [ 6.132515922910283, 45.937764996485562 ], [ 6.132511727864784, 45.937730410294073 ], [ 6.132550933897492, 45.937699279976741 ], [ 6.13252862566488, 45.937499587470832 ], [ 6.132622357487582, 45.93749354474366 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "Intendance" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132752805759918, 45.937354016524857 ], [ 6.132759509991513, 45.937433850198289 ], [ 6.132697133193469, 45.937437531051373 ], [ 6.132695094479769, 45.937423053027864 ], [ 6.132672198156667, 45.937424361775903 ], [ 6.132665297894908, 45.937358542617325 ], [ 6.132752805759918, 45.937354016524857 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "Réunion" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.13268693962496, 45.937734152474675 ], [ 6.132724371584688, 45.937755917101136 ], [ 6.132730076062447, 45.937817775490217 ], [ 6.132523666101738, 45.937830593630423 ], [ 6.132515893505752, 45.93776498285284 ], [ 6.132659858057863, 45.937755058240391 ], [ 6.13268693962496, 45.937734152474675 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "2" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132732036364085, 45.937583762966582 ], [ 6.13278055627994, 45.937611251701604 ], [ 6.132786978718173, 45.937680022046131 ], [ 6.132836143083193, 45.93770783280651 ], [ 6.132840181304563, 45.937738206503354 ], [ 6.132791781457181, 45.937742078194205 ], [ 6.132705567391249, 45.937690246591977 ], [ 6.132696706827857, 45.937614066863524 ], [ 6.132732036364085, 45.937583762966582 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "1" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132780578333331, 45.937611251701561 ], [ 6.132823636358756, 45.937608586499657 ], [ 6.132819754961515, 45.937578267262815 ], [ 6.132732060867852, 45.937583761262459 ], [ 6.132780578333331, 45.937611251701561 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": null }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132759514279655, 45.937433845511926 ], [ 6.132760651254606, 45.937446578535969 ], [ 6.132728815956053, 45.937474662069 ], [ 6.132699019371199, 45.937458248199967 ], [ 6.132697137481632, 45.937437529773213 ], [ 6.132759514279655, 45.937433845511926 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "Secrétariat proviseur" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132760876689291, 45.937446506963816 ], [ 6.132827526944882, 45.937442962439214 ], [ 6.132832937377396, 45.937493676385046 ], [ 6.132767894569147, 45.937497548092971 ], [ 6.132728825757555, 45.937474651844404 ], [ 6.132760876689291, 45.937446506963816 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "Proviseur" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132896157105121, 45.937439158891394 ], [ 6.132901802773832, 45.937489872840708 ], [ 6.132832942278148, 45.937493669568639 ], [ 6.132827551448652, 45.937442969255599 ], [ 6.132896157105121, 45.937439158891394 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "Escalier" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.13289620121191, 45.937439206606143 ], [ 6.132947639526813, 45.937436534579568 ], [ 6.132953049959326, 45.937481250109293 ], [ 6.13290114117203, 45.937483758540381 ], [ 6.13289620121191, 45.937439206606143 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "Acceuil" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.13286554209434, 45.937540852582487 ], [ 6.132914000750758, 45.937569045129827 ], [ 6.132917607705767, 45.937602908886312 ], [ 6.132823513227285, 45.937608525578206 ], [ 6.132819759249651, 45.937578254055992 ], [ 6.13286554209434, 45.937540852582487 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": null }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132676921871012, 45.937470814216766 ], [ 6.132691349691046, 45.937470050781037 ], [ 6.132795480913898, 45.937530689356478 ], [ 6.132774623304502, 45.937547266797218 ], [ 6.1327354172718, 45.937549666163221 ], [ 6.132681940243197, 45.93751880158343 ], [ 6.132676921871012, 45.937470814216766 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "Escalier" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132533074937031, 45.937322475733509 ], [ 6.132581788432659, 45.937349455071761 ], [ 6.132538436362003, 45.93738344165758 ], [ 6.132492075228335, 45.937357041730223 ], [ 6.132533074937031, 45.937322475733509 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "Escalier" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.13255515773495, 45.937728684477079 ], [ 6.132558451041697, 45.937762111889391 ], [ 6.132631923146978, 45.93775698599061 ], [ 6.132629021900557, 45.937723394982591 ], [ 6.13255515773495, 45.937728684477079 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": null }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132203538430669, 45.937339741693542 ], [ 6.132179015057211, 45.93735817325333 ], [ 6.132208419581737, 45.937373987308597 ], [ 6.132231707965161, 45.937355937472724 ], [ 6.132203538430669, 45.937339741693542 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": null }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132109463555203, 45.937346721693224 ], [ 6.132161450754563, 45.937376713869369 ], [ 6.132138476019402, 45.937393727605723 ], [ 6.132086175171779, 45.937365098719432 ], [ 6.132109463555203, 45.937346721693224 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "Escalier" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132287223707468, 45.937205158402804 ], [ 6.132336936956933, 45.937233187526743 ], [ 6.132294516029551, 45.937268414771381 ], [ 6.132240725352684, 45.93723885878746 ], [ 6.132263249218473, 45.937221735940867 ], [ 6.132287223707468, 45.937205158402804 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "Sanitaire" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.133321263216929, 45.937318801689194 ], [ 6.133325654292591, 45.937364607938399 ], [ 6.133278607053349, 45.937398635413302 ], [ 6.133215250104506, 45.937403434158085 ], [ 6.133212231239987, 45.937350702473893 ], [ 6.133252299805406, 45.937320737549292 ], [ 6.133321263216929, 45.937318801689194 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "Salle des professeurs" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.133212231239984, 45.937350702473871 ], [ 6.133214740426077, 45.937402616190241 ], [ 6.13322101339131, 45.937454093608906 ], [ 6.133180866413824, 45.937491174770706 ], [ 6.133110721920537, 45.937495412859505 ], [ 6.133104448955305, 45.937431284251304 ], [ 6.133027918779474, 45.937434337996237 ], [ 6.133023414986497, 45.937360299971317 ], [ 6.133212231239984, 45.937350702473871 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": "Escalier" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.133331260755263, 45.937414449457016 ], [ 6.13328389986776, 45.937417503202859 ], [ 6.133290172832993, 45.937483594946983 ], [ 6.133336592775709, 45.937480977453667 ], [ 6.133331260755263, 45.937414449457016 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": null }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.132220627360129, 45.937257247778014 ], [ 6.132243053210834, 45.937271971235731 ], [ 6.13225183536216, 45.937265754665177 ], [ 6.132227684446018, 45.937251576519195 ], [ 6.132220627360129, 45.937257247778014 ] ] ] ] } },
        { "type": "Feature", "properties": { "salle": null }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 6.13281075656434, 45.937507327903141 ], [ 6.132811540684995, 45.937512671949321 ], [ 6.132903753273905, 45.937506782592266 ], [ 6.132903145580401, 45.937501043195077 ], [ 6.13281075656434, 45.937507327903141 ] ] ] ] } 
    }]
};

var geojsonDataEtage2 = {
    "type": "FeatureCollection",
    "features": [
        { "type": "Feature", "properties": { "salle": "24" }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 6.132218592433576, 45.936723513388131 ], [ 6.132342978502976, 45.936718186750738 ], [ 6.132350944113331, 45.936783171692035 ], [ 6.132225945304675, 45.936788498323175 ], [ 6.132218592433576, 45.936723513388131 ] ] ] } },
        { "type": "Feature", "properties": { "salle": "23" }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 6.132094512733808, 45.936727987763149 ], [ 6.132218592433576, 45.936723939519112 ], [ 6.132224719826159, 45.936788285257947 ], [ 6.132100946496017, 45.936793611888618 ], [ 6.132094512733808, 45.936727987763149 ] ] ] }
    }]
};

// Fonction de style par défaut
function getDefaultStyle() {
    return {
        color: "#16a34a",
        weight: 2,
        opacity: 1,
        fillColor: "#22c55e",
        fillOpacity: 0.4
    };
}

// Coordonnées et zoom de départ
var initialView = {
    center: [45.9368, 6.1322],
    zoom: 18
};

// Fonction d'interaction (survol et clic)
function onEachFeature(feature, layer) {
    var tooltip = L.tooltip({
        permanent: true,
        direction: "center",
        className: "leaflet-tooltip-custom"
    }).setContent(feature.properties.salle);

    layer.bindTooltip(tooltip);

    layer.on({
        mouseover: function(e) {
            e.target.setStyle({ fillColor: "#16a34a", color: "#15803d", fillOpacity: 0.7 });
        },
        mouseout: function(e) {
            e.target.setStyle(getDefaultStyle());
        },
        click: function(e) {
            map.fitBounds(e.target.getBounds());
        }
    });
}

// Définir les styles spécifiques pour les calques
var layerEtage1 = L.geoJSON(geojsonDataEtage1, { 
    style: getDefaultStyle, 
    onEachFeature: onEachFeature,
});

var layerEtage2 = L.geoJSON(geojsonDataEtage2, { 
    style: getDefaultStyle, 
    onEachFeature: onEachFeature,
});

var baseMaps = { "Étage 1": layerEtage1, "Étage 2": layerEtage2 };


L.control.layers(baseMaps, null, { 
    collapsed: false,
})
.addTo(map, true);
// Ajouter un contrôle des calques avec position personnalisée




// Gestion des labels en fonction du zoom
map.on('zoomend', function() {
    var currentZoom = map.getZoom();
    var showLabels = currentZoom >= 20; // Affiche les labels pour un zoom >= 16

    map.eachLayer(function(layer) {
        if (layer instanceof L.GeoJSON) {
            layer.eachLayer(function(subLayer) {
                if (subLayer.getTooltip()) {
                    if (showLabels) {
                        subLayer.openTooltip();
                    } else {
                        subLayer.closeTooltip();
                    }
                }
            });
        }
    });
});

// Géolocalisation
map.locate({setView: true, maxZoom: 16});

map.on('locationfound', function(e) {
    var radius = e.accuracy;
    
    // Création du marqueur à la position actuelle
    L.marker(e.latlng).addTo(map)
        .bindPopup("Vous êtes dans les " + radius + " m").openPopup();

    // Création d'un cercle autour de la position
    L.circle(e.latlng, {
        radius: radius,
        color: "#15803d",        // Couleur du contour du cercle
        fillColor: "#16a34a",     // Couleur de remplissage du cercle
        fillOpacity: 0.2         // Opacité du remplissage
    }).addTo(map);
});


// Définir un style de surbrillance
function getHighlightStyle() {
    return {
        color: "#eab308", // Jaune pour attirer l'attention
        weight: 3,
        opacity: 1,
        fillColor: "#facc15",
        fillOpacity: 0.7
    };
}

// Ajouter une barre de recherche avec surbrillance et basculement de calque
var searchControl = new L.Control.Search({
    layer: L.layerGroup([layerEtage1, layerEtage2]),
    propertyName: 'salle',
    initial: true,
    collapsed: false,
    position: 'topright',
    zoom: 21,
    marker: false,
    autocomplete: true,
    moveToLocation: function(latlng, title, map) {
        var foundLayer = null;

        // Trouver le calque contenant la salle recherchée
        [layerEtage1, layerEtage2].forEach(function(layer) {
            layer.eachLayer(function(subLayer) {
                if (subLayer.feature && subLayer.feature.properties.salle === title) {
                    foundLayer = subLayer;
                }
            });
        });

        if (foundLayer) {
            // Activer le calque correspondant si nécessaire
            var parentLayer = foundLayer.feature.properties.salle <= 20 ? layerEtage1 : layerEtage2;
            map.eachLayer(function(layer) {
                if (layer instanceof L.GeoJSON) {
                    map.removeLayer(layer);
                }
            });
            parentLayer.addTo(map);

            // Centrer et zoomer sur la salle trouvée
            map.setView(latlng, 21); // Centrer sur les coordonnées avec le zoom spécifié

            // Changer temporairement le style de la salle recherchée
            foundLayer.setStyle(getHighlightStyle());

            // Réinitialiser le style après 3 secondes
            setTimeout(function() {
                parentLayer.resetStyle(foundLayer);
            }, 3000);
        }
    }
});

// Ajouter le contrôle de recherche à la carte
map.addControl(searchControl);


// Ajouter les couches sur la carte
layerEtage1.addTo(map);
layerEtage2.addTo(map);

document.querySelector('.leaflet-control-search input').placeholder = "Rechercher..."; // Personnaliser le placeholder

// Gestion des labels en fonction du zoom
function updateLabelsVisibility() {
    var currentZoom = map.getZoom();
    var showLabels = currentZoom >= 20; // Affiche les labels pour un zoom >= 20

    map.eachLayer(function(layer) {
        if (layer instanceof L.GeoJSON) {
            layer.eachLayer(function(subLayer) {
                if (subLayer.getTooltip()) {
                    if (showLabels) {
                        subLayer.openTooltip();
                    } else {
                        subLayer.closeTooltip();
                    }
                }
            });
        }
    });
}

// Appliquer les labels au changement de zoom
map.on('zoomend', updateLabelsVisibility);

// Mettre à jour les labels lors du changement de calque
map.on('baselayerchange', function(e) {
    setTimeout(updateLabelsVisibility, 50); // Petit délai pour permettre le rendu du calque
});

// Ajouter les couches sur la carte
layerEtage1.addTo(map);
updateLabelsVisibility(); // Initialiser l'état des labels
