// ==UserScript==
// @name        New script - viewasian.co
// @namespace   Violentmonkey Scripts
// @match       https://viewasian.co/drama/*
// @match       https://viewasian.co/watch/*
// @icon        http://www.google.com/s2/favicons?domain=viewasian.co
// @grant       none
// @version     1.0
// @author      -
// @description 9/8/2023, 11:11:59 PM
// ==/UserScript==


if (window.location.href.includes("/drama/")) {
console.log(document.getElementsByClassName("bwac-btn")[0].href)
document.getElementsByClassName("bwac-btn")[0].href = document.getElementsByClassName("bwac-btn")[0].href.replace("drama","watch") +"?ep=1";
}

document.addEventListener('keydown', (event) => {
  let name = event.key;
  let code = event.code;

  //Episode number
  numberofEp = document.getElementById("episodes-sv-1").getElementsByTagName("li").length;



  url = window.location.href;

  //gets episode number
  epnum = url.match(/ep=(\d+)/)[1]


  nextpg = url.replace(epnum,Number(epnum)+1)
  prevpg = url.replace(epnum,Number(epnum)-1)


  if (name ==='n' && epnum < numberofEp){

  window.location.replace(nextpg)
}

  if (name ==='b' && epnum > 1){

  window.location.replace(prevpg)
}
}, false);



