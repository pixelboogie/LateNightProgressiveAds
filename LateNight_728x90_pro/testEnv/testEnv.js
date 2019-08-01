/* jshint undef: true, unused: false, -W008 , -W020*/
/* global 
	document:false,
	auto_tl:false, 
	col_tl:false, 
	exp_tl:false,
	vid_tl:false,
	end_tl:false,
	auto_vid:false,
	vid_vid:false,
	TweenMax:false,
	postDate:false,
	targetSet:false,
	auto_vid,
	closeAuto,
	vid_vidPlay
*/


/* = Buttons for testing environment
-----------------------------------------------------------------------------*/

function testEnv(){
	var panelName = {},
		tlName = {},
		pnlDiv = {},
		fpoDiv = {},

		tlPaused = {},
		fpoVisible = {},

		replayBtn = {},
		pauseBtn = {},
		stopBtn = {},
		speedBtn = {},
		fpoBtn = {};

	// connect functions/ids
	/*panelName[1] = "auto";*/
	panelName[1] = "vid";
	panelName[2] = "end";
	/*tlName[1] = auto_tl;*/
	tlName[1] = vid_tl;
	tlName[2] = end_tl;
	
	var mainVideo = vid_vid;


	for (var iNrTest = 1; iNrTest <= 2; iNrTest++) {
		// set values
		tlPaused[iNrTest] = false;
		fpoVisible[iNrTest] = false;
		// getElementById
		pnlDiv[iNrTest] = document.getElementById(panelName[iNrTest]+"_panel");
		fpoDiv[iNrTest] = document.getElementById("fpoImg"+iNrTest);
		replayBtn[iNrTest] = document.getElementById("replay"+iNrTest);
		pauseBtn[iNrTest] = document.getElementById("pausePlay"+iNrTest);
		stopBtn[iNrTest] = document.getElementById("stop"+iNrTest);
		fpoBtn[iNrTest] = document.getElementById("fpo"+iNrTest);
		// addEventListener
		replayBtn[iNrTest].addEventListener('click', testBtnHandler, false);
		pauseBtn[iNrTest].addEventListener('click', testBtnHandler, false);
		stopBtn[iNrTest].addEventListener('click', testBtnHandler, false);
		fpoBtn[iNrTest].addEventListener('click', testBtnHandler, false);
	}

	var speedBtn1 = document.getElementById("speed1");
	speedBtn1.addEventListener('click', testBtnHandler, false);

	var postBtn1 = document.getElementById("post1");
	postBtn1.addEventListener('click', testBtnHandler, false);

	// mouse events
	function testBtnHandler(evt)
	{	
		console.log("\n"+evt.target.id+" click");
		var btnName = evt.target.id.slice(0,-1);
		var pnlNr = evt.target.id.slice(-1);
		switch (btnName)
		{
			case "replay" :
				// pause & rewind video (if it exists)
				/*if (auto_vid){
					auto_vid.pause();
					auto_vid.currentTime = 0;
				}*/
				if (vid_vid){
					vid_vid.pause();
					vid_vid.currentTime = 0;
				}
				//
				pauseBtn[pnlNr].style.backgroundPosition = "5px -14px";
				tlName[pnlNr].restart();
				if(tlName[pnlNr] == vid_tl) {
					vid_vidPlay();
				}
				tlPaused[pnlNr] = false;
				break;
			case "pausePlay" :
				if (tlPaused[pnlNr]){
					pauseBtn[pnlNr].style.backgroundPosition = "5px -14px";
					tlName[pnlNr].play();
					tlPaused[pnlNr] = false;
					// play video (if it exists)
					/*if (auto_vid && !tlPaused[1]){
						auto_vid.play();
					}
					else*/ if (vid_vid && !tlPaused[3]){
						vid_vid.play();
					}
				} else {
					pauseBtn[pnlNr].style.backgroundPosition = "5px -30px";
					tlName[pnlNr].pause();
					tlPaused[pnlNr] = true;
					// pause video (if it exists)
					/*if (auto_vid){
						auto_vid.pause();
					}*/
					if (vid_vid){
						vid_vid.pause();
					}
				}
				break;
			case "stop" :
				// adjust this button style
				pauseBtn[pnlNr].style.backgroundPosition = "5px -14px";
				// set this button to true
				tlPaused[pnlNr] = true;
				// panels invisible/visible
				TweenMax.set(pnlDiv[1], {autoAlpha:0, display:"none"});
				TweenMax.set(pnlDiv[2], {autoAlpha:0, display:"none"});
				/*TweenMax.set(pnlDiv[3], {autoAlpha:0, display:"none"});*/
				TweenMax.set(pnlDiv[pnlNr], {autoAlpha:1, display:"block"});
				tlName[pnlNr].progress(1, false);
				// pause & rewind video to 3sec (if it exists)
				/*if (auto_vid){
					auto_vid.pause();
					auto_vid.currentTime = 1.5;
				}*/
				if (vid_vid){
					vid_vid.pause();
					vid_vid.currentTime = 1.5;
				}
				break;
			case "fpo" :
				if (fpoVisible[pnlNr]){
					// make invisible
					TweenMax.set(fpoDiv[pnlNr], {autoAlpha:0});
					fpoBtn[pnlNr].style.backgroundColor = "White";
					fpoVisible[pnlNr] = false;
				} else {
					// make visible
					TweenMax.set(fpoDiv[pnlNr], {autoAlpha:1});
					fpoBtn[pnlNr].style.backgroundColor = "LemonChiffon";
					fpoVisible[pnlNr] = true;
				}
				break;
			case "speed" :
				if (TweenMax.globalTimeScale() === 1){
					TweenMax.globalTimeScale(0.25);
					speedBtn1.style.backgroundColor = "LemonChiffon";
				} else {
					TweenMax.globalTimeScale(1);
					speedBtn1.style.backgroundColor = "White";
				}
				break;
			case "post" :
				if (!postDate){
					postDate = true;
					postBtn1.style.backgroundColor = "LemonChiffon";
				}
				targetSet();
				break;
		}
	}
}

testEnv();
