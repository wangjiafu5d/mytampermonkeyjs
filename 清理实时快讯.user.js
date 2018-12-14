// ==UserScript==
// @name         清理实时快讯
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://wallstreetcn.com/live/global
// @grant        none
// @require      http://code.jquery.com/jquery-1.8.2.js
// ==/UserScript==
(function(){
    window.setInterval(clear,5000);
    function clear(){
        $(document).ready(function(){
    $("div").each(function(index , element){
            if(element.children.length>10){
                   console.log(element);
                var allNews = element;
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
         if(singleNews.innerText.match("上海证券报")){
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
        }if(singleNews.innerText.match("券商中国")){
            hidden = 1;
        }if(singleNews.innerText.match("李开复")){
            hidden = 1;
        }
        if(hidden==1){
            singleNews.style.display = "none";
        }
    }
            }

    });
});
    }

})();
