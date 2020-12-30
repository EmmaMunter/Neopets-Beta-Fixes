// ==UserScript==
// @name     Beta Fix - Show pet backgrounds
// @version  1
// @grant    none
// @match    http://www.neopets.com/index.phtml
// @require  https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @run-at   document-idle
// ==/UserScript==

$('.hp-carousel-pet-container').each(function(){
  name = $(this).find('.hp-carousel-nameplate')[0].textContent
  if (name != "Create a Pet!") {
    $(this).find('.hp-carousel-pet')[0].style['background-image'] = `url(http://pets.neopets.com/cpn/${name.toLowerCase()}/1/9.png)`
  }
})
