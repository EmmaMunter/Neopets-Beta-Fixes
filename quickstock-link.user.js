// ==UserScript==
// @name     Beta Fix - Quickstock link
// @version  1
// @grant    none
// @match    http://www.neopets.com/inventory.phtml
// @require  https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @run-at   document-idle
// ==/UserScript==

$('.navsub-right__2020')[0].innerHTML =
  `<a href="/quickstock.phtml">
		<div class="navsub-np-meter__2020">
			<span id="npanchor" class="np-text__2020">Quickstock</span>
		</div>
	</a>`
  + $('.navsub-right__2020')[0].innerHTML
