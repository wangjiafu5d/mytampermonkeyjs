// ==UserScript==
// @name         清理实时快讯
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://wallstreetcn.com/live/global
// @grant        none
// ==/UserScript==

(function() {
    window.setInterval(clear,5000);
    function clear(){
        var xPath = "/html/body/div/div/main/div/div[1]/div/div[2]/div[1]/div";
        //var xPath2 = "/html/body/div/div/main/div/div[1]/div/div[2]/div[1]/div";
      var allNews = _x(xPath).children;
        //var page = document.getElementById("page-livenews");
    //console.log(page==null);
   // console.log(page.children[0]);
    //allNews = page.children[0].children[0].children[1].children[0].children[0].children;
    //console.log(allNews==null);
    console.log(allNews);
    for(var i=0;i<allNews.length;i++){
        var hidden = 0;
        var singleNews = allNews[i];
        if(singleNews.style.display=="none"){
           continue;
           }
        if(singleNews.innerText.match("经济日报")){
            hidden = 1;
        }
        if(singleNews.innerText.match("证券时报")){
            hidden = 1;
        }
        if(singleNews.innerText.match("证券日报")){
            hidden = 1;
        }
        if(singleNews.innerText.match("经参")){
            hidden = 1;
        }
        if(singleNews.innerText.match("中证报")){
            hidden = 1;
        }
        if(singleNews.innerText.match("上证报")){
            hidden = 1;
        }
         if(singleNews.innerText.match("中国证券报")){
            hidden = 1;
        }if(singleNews.innerText.match("中国基金报")){
            hidden = 1;
        }if(singleNews.innerText.match("21世纪经济报道")){
            hidden = 1;
        }if(singleNews.innerText.match("中国基金业协会")){
            hidden = 1;
        }
        if(hidden==1){
            singleNews.style.display = "none";
        }
    }
    }
   function _x(STR_XPATH) {
    var xresult = document.evaluate(STR_XPATH, document, null, XPathResult.ANY_TYPE, null);
    var xnodes = [];
    var xres;
    while (xres = xresult.iterateNext()) {
        xnodes.push(xres);
    };
     console.log(xnodes);
     return xnodes[0];
   }

})();