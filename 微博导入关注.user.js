// ==UserScript==
// @name         微博导入关注
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://weibo.com/*
// @grant        none
// ==/UserScript==


(function() {
    var str = "3284683395,5983298982,5641607029,1788188817,2872341643,1744080731,2687853450,3902832217,1812611730,6493798272,1830604200,6464256573,2304008824,2771037733,3893484753,2101626143,2286104034,1082365135,5164717854,2254653472,5152892150,2300563711,2363547643,1743951792,2603361141,2172439982,5568957328,3986128403,2303490360,2611747047,2231473672,2811965707,2393831515,3200280940,1978278542,5259369874,5941132235,5410584587,1781855087,2875361802,2772910967,3214962651,5617567207,2213078567,1853995013,1720133422,2471736115,1649159940,6419085332,2392419102,1615292952,1728752564,3567347055,2217161387,2281201883,1763864272,3199651784,2486887981,2920572681,2966423350,2480482397,2346982167,5518029247,1808032940,3261134763,3524318993,2843881254,2374953391,5554651133,1672785037,6036815333,2524296492,5643044717,1913143684,2492326891,3180781497,1646804535,1581435817,5706715139,2785496162,1002666231,2940169432,1909576453,1822427143,1901508413,2613733105,1622563754,5273991291,3029882571,1886901593,1632765501,2003278807,6077913603,5623257231,1259174804,5170690953,1770433467,3985565306,1792743754,5916901393,1846844792,1867868814,3934975218,5651243307,3668822213,2342701562,1724883017,1560801042,6019954300,2120974225,5755913663,5283262611,1210604004,2632693365,5379215239,3921015143,1797491625,3919628624,2878419660,2155458774,5709740467,5592815152,3005997320,2313119293,2515409572,2168997540,2439377427,2078307855,2247286474,1171113502,5796973721,3595819167,1784882287,3941402335,2237969110,2862637710,2041046824,5764537898,5229870431,2432143202,3171577037,2313565271,1876856920,1823839082,1651509603,2058968702,5915747462,2500183700,2638169862,1931768734,5107180217,3802136340,1677416680,1599034781,1682050325,5611834208,2111697867,1680528203,5533906133,1259110474,5619779850,1571464383,2019674533,1912733330,1768281092,1744721702,1868003212,5710872787,1773377464,1844046695,1146513833,2771694271,5672969050,1804583301,1270344441,3473975960,1229385395,1787333810,2670687782,5549703752,2097981312,2423296524,1248041233,3616768682,2111353904,1828403547,1871943077,1917669823,2048075301,1667739150,2614419225,1786485173,1885923652,2005621400,3192159301,1673687881,1532415541,1747738961,1790446061,1378236401,1764019441,1279004761,1787449650,1782529153,1775781307,1906818151,2266537042,1836589294,1743974354,3608765643,1669879400,2106499092,2040632854,2830125342,5613071699,1640337222,1638782947";
    var ids = str.split(",");
    var xPath = "/html/body/div[1]/div/div[2]/div/div[1]/div[1]/div[1]/div/div[2]/div[4]/div/div[1]/a[1]";
    var nowPage = null;
    if(nowPage!=null){
    nowPage.close();
    nowPage = null;
    }
    console.log("start");
    document.onreadystatechange = function(){
    var btn = _x(xPath)[0];
   // console.log(btn);
        var count =0;
        if(window.localStorage.count!=null){
        count = window.localStorage.count;
        }
       if(count<ids.length-1){
           while(btn.innerText.match("+关注")){
        _x(xPath);
          }
   // console.log("11111");
    if(btn.innerText.match("已关注")){
        console.log("已关注");
        var url1 = "https://weibo.com/";
        window.localStorage.setItem("count",parseInt(count)+1);
        nowPage = window.open(url1+ids[count], "_self");
          }
       }
    }
    //window.setInterval( window.onload = function(){
      //    _x(xPath,url1+ids[count]);
       //    console.log("finish");
     //  },60000);
      //window.open("https://weibo.com/2811965707","_self");

     //window.open(url+ids[i], "_self");

    function _x(STR_XPATH) {
    var xresult = document.evaluate(STR_XPATH, document, null, XPathResult.ANY_TYPE, null);
    var btn;
    var xnodes = [];
    var xres;
    while (xres = xresult.iterateNext()) {
        xnodes.push(xres);
    }
        console.log(xnodes);
     btn =  xnodes[0];
     console.log(btn);
    var event = document.createEvent("MouseEvents");
    //初始化event
    event.initMouseEvent("click",true,true,document.defaultView,0,0,0,0,0,false,false,false,false,0,null);
    //click事件绑定事件处理程序
    btn.onclick = function () {
    console.log("click");
        var count =0;
        if(window.localStorage.count!=null){
        count = window.localStorage.count;
        }
        var url1 = "https://weibo.com/";
        window.localStorage.setItem("count",parseInt(count)+1);
        nowPage = window.open(url1+ids[count], "_self");
    }
    //触发事件
    btn.dispatchEvent(event); //hello
    //取消引用
    btn.onclick = null;
    return xnodes;
}
    function sleep(numberMillis) {
	var now = new Date();
	var exitTime = now.getTime() + numberMillis;
	while (true) {
		now = new Date();
		if (now.getTime() > exitTime){
		return;
	    }
    }
   }
})();