// ==UserScript==
// @name         HFUT视听说自动刷新
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       AIerYao
// @match        http://172.31.241.173/book/*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

    // Your code here...
    function myrefresh()
    {
        window.location.reload();
    }
    setTimeout(myrefresh,Math.round(Math.random())*600000); //指定10min内刷新一次
})();
