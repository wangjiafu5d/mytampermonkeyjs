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
    var xPath = "/html/body/div[1]/div/div[2]/div/div[1]/div[1]/div[1]/div/div[2]/div[4]/div/div[1]/a[1]";
    console.log("start");
    document.onreadystatechange = function(){
     _x(xPath);
        console.log("finish");
        window.open("https://weibo.com/5710872787", "_self")
    };
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
    }
    //触发事件
    btn.dispatchEvent(event); //hello
    //取消引用
    btn.onclick = null;
    return xnodes;
}
})();