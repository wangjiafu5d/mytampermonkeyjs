// ==UserScript==
// @name         微博关注导出
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://weibo.com/*
// @grant        none
// ==/UserScript==

(function() {
    //console.log(document);
    window.setTimeout(followOut,5000);
    var outString = "";
    function followOut(){
    var follow = document.getElementById("Pl_Official_RelationMyfollow__92");
        var list = follow.children[0].children[0].children[0].children[2].children[0].children;
        console.log(list);
        for(var i = 0; i < list.length; i++){
            var item = list[i].children[0].children[1].children[0].children[0];
           // console.log(item.getAttribute("usercard"));
            //console.log(item.text);
            outString = outString + "\r\n" + item.getAttribute("usercard") + "\t" + item.text;
        }
        console.log(outString);
        doSave(outString, "text/latex", "微博关注.txt");
    }
            //写文件
        function doSave(value, type, name) {
            var blob;
            if (typeof window.Blob == "function") {
                blob = new Blob([value], {type: type});
            } else {
                var BlobBuilder = window.BlobBuilder || window.MozBlobBuilder || window.WebKitBlobBuilder || window.MSBlobBuilder;
                var bb = new BlobBuilder();
                bb.append(value);
                blob = bb.getBlob(type);
            }
            var URL = window.URL || window.webkitURL;
            var bloburl = URL.createObjectURL(blob);
            var anchor = document.createElement("a");
            if ('download' in anchor) {
                anchor.style.visibility = "hidden";
                anchor.href = bloburl;
                anchor.download = name;
                document.body.appendChild(anchor);
                var evt = document.createEvent("MouseEvents");
                evt.initEvent("click", true, true);
                anchor.dispatchEvent(evt);
                document.body.removeChild(anchor);
            } else if (navigator.msSaveBlob) {
                navigator.msSaveBlob(blob, name);
            } else {
                location.href = bloburl;
            }
        }

        var test = {
            a: [1, 2],
            b: [3, 4]
        }
        
})();