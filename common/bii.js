var SNOW_Picture = biicore.webroot + '/common/imgs/heart.png';
var SNOW_no = 20;
var SNOW_browser_IE_NS = (document.body.clientHeight) ? 1 : 0;
var SNOW_browser_MOZ = (self.innerWidth) ? 1 : 0;
var SNOW_browser_IE7 = (document.documentElement.clientHeight) ? 1 : 0;
var SNOW_Time;
var SNOW_dx, SNOW_xp, SNOW_yp;
var SNOW_am, SNOW_stx, SNOW_sty;
var i, SNOW_Browser_Width, SNOW_Browser_Height;
if (SNOW_browser_IE_NS) {
	SNOW_Browser_Width = document.body.clientWidth;
	SNOW_Browser_Height = document.body.clientHeight;
} else if (SNOW_browser_MOZ) {
	SNOW_Browser_Width = self.innerWidth - 20;
	SNOW_Browser_Height = self.innerHeight;
} else if (SNOW_browser_IE7) {
	SNOW_Browser_Width = document.documentElement.clientWidth;
	SNOW_Browser_Height = document.documentElement.clientHeight;
}
SNOW_dx = new Array();
SNOW_xp = new Array();
SNOW_yp = new Array();
SNOW_am = new Array();
SNOW_stx = new Array();
SNOW_sty = new Array();
for (i = 0; i < SNOW_no; ++i) {
	SNOW_dx[i] = 0;
	SNOW_xp[i] = Math.random() * (SNOW_Browser_Width - 50);
	SNOW_yp[i] = Math.random() * SNOW_Browser_Height;
	SNOW_am[i] = Math.random() * 20;
	SNOW_stx[i] = 0.02 + Math.random() / 10;
	SNOW_sty[i] = 0.7 + Math.random();
	if (i == 0) document.write("<\div id=\"SNOW_flake" + i + "\" style=\"position: absolute; z-index: " + i + "; visibility: visible; top: 15px; left: 15px;\"><\img src=\"" + SNOW_Picture + "\" border=\"0\"><\/div>");
	else document.write("<\div id=\"SNOW_flake" + i + "\" style=\"position: absolute; z-index: " + i + "; visibility: visible; top: 15px; left: 15px;\"><\img src=\"" + SNOW_Picture + "\" border=\"0\"><\/div>");
}

SNOW_Time = setInterval(function SNOW_Weather() {
	for (i = 0; i < SNOW_no; ++i) {
		SNOW_yp[i] += SNOW_sty[i];
		if (SNOW_yp[i] > SNOW_Browser_Height - 50) {
			SNOW_xp[i] = Math.random() * (SNOW_Browser_Width - SNOW_am[i] - 30);
			SNOW_yp[i] = 0;
			SNOW_stx[i] = 0.02 + Math.random() / 10;
			SNOW_sty[i] = 0.7 + Math.random();
		}
		SNOW_dx[i] += SNOW_stx[i];
		document.getElementById("SNOW_flake" + i).style.top = SNOW_yp[i] + "px";
		document.getElementById("SNOW_flake" + i).style.left = SNOW_xp[i] + SNOW_am[i] * Math.sin(SNOW_dx[i]) + "px";
	}
}, 50);

if(biicore.bgMusic){
	var audioPlayer = document.createElement("AUDIO");
	audioPlayer.style.display = "none";

	setTimeout(function(){
		if (audioPlayer.canPlayType("audio/mpeg")) {
			audioPlayer.setAttribute("src", biicore.bgMusic);
			document.getElementsByClassName("bii-player")[0].style.display = "block";
		}
		audioPlayer.volume = 0.3;
		audioPlayer.setAttribute("controls", "controls");
		document.body.appendChild(audioPlayer);
	}, 1000);
	
	var myInterval = setInterval(function(){
		if(document.querySelector(".bii-player")){
			setTimeout(function(){
				document.getElementsByClassName("bii-player")[0].classList.add("show-sec");
			},2000);
			setTimeout(function(){
				document.getElementsByClassName("bii-player")[0].classList.remove("show-sec");
			},10000);
			clearInterval(myInterval);
		}
	}, 200);

	function playPause() {
		document.getElementsByClassName("bii-player")[0].classList.remove("show-sec");
	    if (audioPlayer.paused) {
			audioPlayer.play();
			document.getElementById("playerVolumeOff").style.display = "none";
			document.getElementById("playerVolumeOn").style.display = "block";
		} else {
			audioPlayer.pause(); 
			document.getElementById("playerVolumeOff").style.display = "block";
			document.getElementById("playerVolumeOn").style.display = "none";
		}
	}
	document.write(`
	<style type="text/css">
	@-webkit-keyframes biilogo-pulse {
	  from {
	    -webkit-transform: scale3d(1, 1, 1);
	    transform: scale3d(1, 1, 1);
	  }
	  50% {
	    -webkit-transform: scale3d(0.95, 0.95, 0.95);
	    transform: scale3d(0.95, 0.95, 0.95);
	  }
	  to {
	    -webkit-transform: scale3d(1, 1, 1);
	    transform: scale3d(1, 1, 1);
	  }
	}
	
	@keyframes biilogo-pulse {
	  from {
	    -webkit-transform: scale3d(1, 1, 1);
	    transform: scale3d(1, 1, 1);
	  }
	  50% {
	    -webkit-transform: scale3d(0.95, 0.95, 0.95);
	    transform: scale3d(0.95, 0.95, 0.95);
	  }
	  to {
	    -webkit-transform: scale3d(1, 1, 1);
	    transform: scale3d(1, 1, 1);
	  }
	}
	.bii-player{position: fixed;bottom: 70px;left: 50px;width: 50px;height: 50px;z-index:99999;display:none;}
	.bii-player .playerIcon{cursor:pointer;display: block;width:50px;height:50px;-webkit-border-radius: 50%;-moz-border-radius: 50%;-o-border-radius: 50%;-ms-border-radius: 50%;border-radius: 50%;background-color: #df4758;padding-top: 7px;padding-left: 9px;position:absolute;z-index: 2;}
	.bii-player:after{content: "";position: absolute;-webkit-border-radius: 50%;-moz-border-radius: 50%;-o-border-radius: 50%;-ms-border-radius: 50%;border-radius: 50%;z-index: -1;background-color: rgba(242, 59, 67, 0.3);width: 120%;height: 120%;left: -10%;top: -10%;-webkit-animation: biilogo-pulse 1s infinite;animation: biilogo-pulse 1s infinite;z-index: 1;}
	.bii-player img{width: 100%;z-index: 99999;position: absolute;cursor:pointer;}
	.bii-player.show-sec .bii-player-secondary{visibility: visible;}
	.bii-player.show-sec .bii-player-secondary-content{ transform: translate3d(0, 0, 0);}
	.bii-player-secondary{position: absolute;width: 350px;left: 25px;height: 50px;overflow: hidden;visibility: hidden;}
	.bii-player-secondary-content{cursor:pointer;user-select: none;position: absolute;width: 350px;left: -25px;background: #fff;height: 50px;padding: 13px 11px 13px 58px;border: 1px solid #df4759;border-radius: 30px;z-index: 1;font-size:15px;transform: translate3d(-100%, 0, 0);transition: transform 175ms ease;font-family: arial;font-weight: 200;color: #000;}</style>
	<div class="bii-player">
		<div onclick="playPause();" class="bii-player-secondary"><div class="bii-player-secondary-content">Click vào đây nếu bạn muốn phát nhạc!</div></div>
		<div onclick="playPause();" class="playerIcon">
			<span id="playerVolumeOff">
				<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#fff" class="bi bi-volume-mute-fill" viewBox="0 0 16 16">
				  <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>
				</svg>
			</span>
			<span style="display:none;" id="playerVolumeOn">
				<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#fff" class="bi bi-volume-up-fill" viewBox="0 0 16 16">
				  <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
				  <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
				  <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>
				</svg>
			</span>
		</div>
	</div>
	`);
}