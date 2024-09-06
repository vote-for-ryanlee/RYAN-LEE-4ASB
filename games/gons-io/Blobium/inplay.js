
function getScript (src, callback) {
	var headElm = document.head || document.getElementsByTagName('head')[0];
	var script = document.createElement("script");
	var once = true;
	script.async = "async";
	script.type = "text/javascript";
	script.charset = "UTF-8";
	script.src = src;
	script.onload = script.onreadystatechange = function () {
		if (once && (!script.readyState || /loaded|complete/.test(script.readyState))) {
			once = false;
			callback();
			script.onload = script.onreadystatechange = null;
		}
	};

	headElm.appendChild(script);
}

getScript('//api.adinplay.com/player/v2/GNS/gons.io/player.min.js', initAipPreroll);

function playAd()
{
	adplayer.startPreRoll();
	
}
