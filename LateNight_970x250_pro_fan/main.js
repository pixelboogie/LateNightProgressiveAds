/* = Define vars
-----------------------------------------------------------------------------*/

var mainClickTag		= document.querySelectorAll(".mainClickTag");
var ctaBtn				= document.querySelectorAll(".ctaBtn");
//var ctaBtnSize			= document.querySelectorAll(".ctaBtnSize");
var ctaBtnGrad			= document.querySelectorAll(".ctaBtn .gradient");

// ----- video panel -----
var vid_bg				= document.querySelector("#vid_bg");
var vid_cta1			= document.querySelector("#vid_cta1");
var vid_cta1Out			= document.querySelector("#vid_cta1Out");
//var vid_cta1Over		= document.querySelector("#vid_cta1Over");
//var vid_cta1Width		= document.querySelector("#vid_cta1").offsetWidth;
var vid_date			= document.querySelector("#vid_date");
//var vid_legal			= document.querySelector("#vid_legal");
var vid_mainClickTag 	= document.querySelector("#vid_mainClickTag");
var vid_panel			= document.querySelector("#vid_panel");
var vid_tt				= document.querySelector("#vid_tt");
//var vid_txt				= document.querySelector("#vid_txt");

// ----- video player -----
var vid_audioOffBtn		= document.querySelector("#vid_audioOffBtn");
var vid_audioOnBtn		= document.querySelector("#vid_audioOnBtn");
var vid_audioOnBtnXl	= document.querySelector("#vid_audioOnBtnXl");
var gen_overlayPlayBtn	= document.querySelectorAll(".gen_overlayPlayBtn");
var vid_pauseBtn		= document.querySelector("#vid_pauseBtn");
var vid_playBtn			= document.querySelector("#vid_playBtn");
var vid_progressBar		= document.querySelector("#vid_progressBar");
var vid_replayBtn 		= document.querySelector("#vid_replayBtn");
var vid_soundBtn		= document.querySelector("#vid_soundBtn");
var vid_vid				= document.querySelector("#vid_vid");
var vid_vidCont			= document.querySelector("#vid_vidCont");
var vid_vidLoader		= document.querySelector("#vid_vidLoader");
//var vid_vidMobile		= document.querySelector("#vid_vidMobile");
var vid_vidNav			= document.querySelector("#vid_vidNav");

// ----- end panel -----
//var end_audio 			= document.querySelector("#end_audio");
//var end_bar				= document.querySelector("#end_bar");
var end_bg				= document.querySelector("#end_bg");
//var end_box				= document.querySelector("#end_box");
//var end_char			= document.querySelector("#end_char");
var end_cta1			= document.querySelector("#end_cta1");
var end_cta1Out			= document.querySelector("#end_cta1Out");
//var end_cta1Shape		= document.querySelector("#end_cta1Shape");
//var end_cta1Over		= document.querySelector("#end_cta1Over");
var end_cta1Width		= document.querySelector("#end_cta1").offsetWidth;
var end_date			= document.querySelector("#end_date");
//var end_date2			= document.querySelector("#end_date2");
//var end_legal			= document.querySelector("#end_legal");
var end_mainClickTag 	= document.querySelector("#end_mainClickTag");
var end_panel			= document.querySelector("#end_panel");
var end_tt				= document.querySelector("#end_tt");
//var end_ttMaskImg		= document.querySelector("#end_ttMaskImg");
var end_txt				= document.querySelector("#end_txt");
var end_txt2			= document.querySelector("#end_txt2");

// ----- video js vars ----- 

// turn off volume for development
//vid_vid.volume = 0;

// 'continue to endpanel' before video is over
var vid_contPlay = true;
var vid_contTime = 12.0; // 12.3/24f = 12.125-.2

// 'timer events' during video
var vid_timerEvents = false;
// initial video
var vid_evt = false;
var vid_evtTime = 11;

// load video2 on replay/unmute
var vid_2load = false;
var vid_vid2/* = document.querySelector("#vid_vid2")*/;

var vid_2contPlay = true;
var vid_2contTime = 26.2; // 26.08/24f = 26.33-.2

var vid_2evt = false;
var vid_2evtTime = 25.1;

// show progress bar
var vid_progress = false;
var vid_progressWidth = 300;

// show "click for Sound" button (otherwise it only has the standard video nav)
var vid_soundShow = false;

// nav alpha strengh
var vid_vidNavAlpha = .7;

// show "pause/play" button
var vid_pausePlayShow = false;

// show "audio on/off" button
var vid_audioShow = true;

// allow for fullscreen on mobile
var vid_allowFullscreen = false;

// play mobile video
//var vid_mobileVideo = false;

// show "replay" button
var vid_replayShow = true;
// replay alpha strengh
var end_replayAlpha = 1;

// start banner with end timline
var end_iniStart = false;




/* = Presets
-----------------------------------------------------------------------------*/

//Create a custom bounce ease:
//CustomBounce.create("myBounce", {strength:.5});
//.from(mc, .5, {x:+300, ease:"myBounce"}, .8)




/* = VIDEO timeline
-----------------------------------------------------------------------------*/

var vid_tl = new TimelineMax({paused:true});

function init_vid_tl() {

vid_tl
	// console log
	.add( function(){ console.log("vid_tl start");})

	// other panel out
	.set(end_panel, {autoAlpha:0, display:"none"}, .1)
	
	// this panel in
	.to(vid_panel, 0, {autoAlpha:1, display:"block", ease:Power0.easeOut}, 0)
	// other panels stop
	.add( function(){ end_tl.stop(); }, 0)
	
	// remove end click tag over listener
	.add(removeClickTagOverOut, 0)
	
	// back to original width on 'replay'
	//.set(vid_progressBar, {width:0}, 0)
	
	// vid_cont in
	//.from(vid_vidLong, .2, {alpha:0, ease:Power0.easeOut }, 0)
	
	// bg in
	.from(vid_bg, 1, {alpha:0, x:20, ease:Power4.easeOut }, 0)
	
	// date
	.from(vid_date, .5, {alpha:0, ease:Power0.easeOut}, 0)
	
	//------------ btn
	.from(vid_cta1, .4, {scale:.8, ease:Back.easeOut}, 0)
	
	
	// tt
	.from(vid_tt, .1, {alpha:0, ease:Power0.easeIn}, 0)
	.from(vid_tt, 1.75, {scale:.8, transformOrigin:"10% 20%", ease:Elastic.easeOut}, 0)
	
	
	// legal
	//.from(vid_legal, 1, {alpha:0, ease:Power0.easeOut}, .2)


	// console log
	.add( function(){ console.log("vid_tl end (total: "+vid_tl.totalDuration()+"s)"); } )
;
}


/* = END timeline
-----------------------------------------------------------------------------*/

var end_tl = new TimelineMax({paused:true});

function init_end_tl() {

end_tl
	// console log
	.add( function(){ console.log("end_tl start"); } )

	// other panel out
	.to(vid_panel, 0, {autoAlpha:0, display:"none", ease:Power0.easeIn}, 0)
	// other panels stop
	.add( function(){ vid_tl.stop(); }, 0)
	
	// this panel in
	.to(end_panel, 0, {autoAlpha:1, display:"block", ease:Power0.easeOut}, 0)
	

	// fx in
	//.add( startAllFx, 0)
	//.add( function(){ fx_tl.restart(); }, "d1")
	/*.call(aniOut, [end_bgMask[0]], this, 0) // [total, time]*/
	
	// bg
	.from(end_bg, .2, {alpha:0, ease:Power0.easeOut}, 0)
	.from(end_bg, 2, {scale:1.1, transformOrigin:"35% 55%", ease:Power3.easeOut}, 0)
	
	// txt
	.from(end_txt, .75, {alpha:0, x:-50, ease:Power3.easeOut}, .1)
	.from(end_txt2, .75, {alpha:0, ease:Power1.easeOut}, .2)
	
	//------------ tt
	.add("t1", .5)
	.from(end_tt, .1, {alpha:0, ease:Power0.easeIn}, "t1")
	.from(end_tt, 1.75, {scale:.95, transformOrigin:"75% 20%", ease:Elastic.easeOut}, "t1")
	//.set(end_tt, {webkitFilter: "blur(1.5em)", filter: "blur(1.5em)"}, "t1")
	//.staggerTo(end_tt, 1.75, {webkitFilter: "blur(0)", filter: "blur(0)", ease:Power1.easeOut}, .2, "t1")

	//tt/mask in (attr plugin to get it to work in FF & IE)
	//.fromTo(end_ttMaskImg, 1.8, {attr:{x:-275}},{attr:{x:140}, ease:Power0.easeOut }, "t1")
	
	
	//------------ date
	.add("d1", "t1+=.2")
	// date
	.from(end_date, .5, {alpha:0, ease:Power1.easeOut}, "d1")
	
	// btn
	.from(end_cta1, .1, {alpha:0, ease:Back.easeOut}, "d1+=.05")
	.from(end_cta1, .4, {scale:.8, ease:Back.easeOut}, "d1+=.05")
	.call(btnReflect, [ctaBtnGrad[1], end_cta1Width], this, "d1+=.3") // [mc]

	// legal in
	//.from(end_legal, .7, {alpha:0, ease:Power0.easeOut}, "d1+=.5")
	
	
	// add end click tag over listener
	.add(addClickTagOverOut, 1)
	
	
	// vid_replayBtn
	.fromTo(vid_replayBtn, .5, {alpha:0, rotation:360}, {alpha:end_replayAlpha, rotation:0, ease:Power4.easeOut}, "d1+=.5")


	// console log
	.add( function(){ console.log("end_tl end (total: "+end_tl.totalDuration()+"s)"); } )
;
}


/* = FX
-----------------------------------------------------------------------------*/

/*function aniOut(mc) {
	TweenMax.fromTo(mc, 1, {scaleX:1}, {scaleX:0, transformOrigin:"0% 100%", ease:Power4.easeOut}, 0);

}*/

// fx
var fx_tl = new TimelineMax({paused:true});
fx_tl
	//------------ fx

	// console log
	.add( function(){ console.log("fx_tl end (total: "+fx_tl.totalDuration()+"s)"); } )
;


function startAllFx() {

	// FX in (only if they're at least x% done)

	// fx
	console.log("fx_tl progress: " + fx_tl.totalProgress());
	if (fx_tl.totalProgress() === 0 || fx_tl.totalProgress() >= .75)
	{
		fx_tl.restart();
	}
 

	/*if (!TweenMax.isTweening(end_bg)) {
		char_tl.restart();
	}*/
}




/* button reflect 
-----------------------------------------------------------------------------*/

function btnReflect(btn, width) {
	//console.log("btn, width: "+btn.id, width);
	if (!TweenMax.isTweening(ctaBtnGrad)) {
		TweenMax.fromTo(ctaBtnGrad, .75, {x:-width+30}, {x:width-20, display:"inline", ease:Power0.easeOut});
		//TweenMax.fromTo(ctaBtnGrad, 1.5, {x:-btn.offsetWidth+30}, {x:btn.offsetWidth-20, display:"inline", ease:Power0.easeOut});
	}
}



/* = ad option check
-----------------------------------------------------------------------------*/

// function to read URL parameters in preview pages
function getURLParameter(name) {
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}


// get urlOpt: preview pages might have a "urlOpt=2" parameter
// in the URL and allow the banner to display other content.
// optionaly it might get pulled from "main-jsOpt.js"
/*var urlOpt = getURLParameter('urlOpt');
console.log("urlOpt: "+urlOpt);
console.log("jsOpt: "+jsOpt);

if (urlOpt === "alt" || jsOpt === "alt") {

	vid_bg.src = "vid_bgALT.jpg";
	TweenMax.set(vid_bg, {left:"0"});
	//end_legal.style.display = "none";
	// adjust btn
	//TweenMax.set(ctaBtnSize, {width:"98", height:"32"});
} */


/* = clickTag check
-----------------------------------------------------------------------------*/

// get urlCt: preview pages might have a "urlCt=http://www.google.com/" parameter
// in the URL and allow the banner to feature a clickTag for testing
var urlCt = getURLParameter('urlCt');
var urlCt2 = getURLParameter('urlCt2');
console.log("urlCt: "+urlCt);

// jshint ignore:start
if (urlCt) {
	clickTag = urlCt;
}
if (urlCt2) {
	clickTag2 = urlCt2;
}
// jshint ignore:end



/* = Date check
-----------------------------------------------------------------------------*/
var dateCheckerVer = 1.3;

// check which date assets to display

function dateChecker(){
	console.log("\n"+"dateChecker v"+dateCheckerVer+":");

	// ----> enter post targetDates 
	var targetDates = [
		// [month, day, year, hour]
		[6, 1, 2019, 0],	// targetDate2
		[6, 7, 2019, 0]	// targetDate3
	];

	// get urlDate: post preview page will have a "urlDate=2" parameter
	// in the URL and force the banner to display the date2
	var urlDate = getURLParameter('urlDate');
	console.log("urlDate: "+urlDate);

	// current date
	var currentDate = new Date();
	console.log("currentDate: "+currentDate);

	// render post dates
	var targetDate = [];
	for (var i = 2; i <= targetDates.length+1; ++i) {
		targetDate[i] = new Date(targetDates[i-2][2],targetDates[i-2][0] - 1,targetDates[i-2][1],targetDates[i-2][3],0,0,0);
		console.log("targetDate"+i+": "+targetDate[i]);
	}


	// adjust assets based on date or preview urlDate:
	if (currentDate >= targetDate[5] || urlDate === "5"){
		console.log("dateChecker: targetDate5");

		// adjust date
			vid_date.src = "vid_date3.png";
			end_date.src = "end_date3.png";

		vid_vid = document.querySelector("#vid_vidES");
		// reposition
		//TweenMax.set(end_cta1, {x:-180});
	}
	else
		if (currentDate >= targetDate[4] || urlDate === "4"){
			console.log("dateChecker: targetDate4");

			// adjust date
			vid_date.src = "vid_date2.png";
			end_date.src = "end_date2.png";

			// adjust video
			//vid_vid2 = document.querySelector("#vid_vidDate4");
		} 
	else
		if (currentDate >= targetDate[3] || urlDate === "3"){
			console.log("dateChecker: targetDate3");

			// adjust date
			vid_date.src = "vid_date2.png";
			end_date.src = "end_date2.png";

			//TweenMax.set(["#end_cta1 .ctaBtnSize", "#end_cta1.ctaBtnSize"], {width:151});

			// adjust video
			//vid_vid2 = document.querySelector("#vid_vidDate3");
		}
	else
		if (currentDate >= targetDate[2] || urlDate === "2"){
			console.log("dateChecker: targetDate2");

			// adjust date
			vid_date.src = "vid_date2.png";
			end_date.src = "end_date2.png";

			// adjust cta
			//vid_cta1Out.src = "vid_cta2.png";
			//end_cta1Out.src = "end_cta2.png";

			// reposition
			//TweenMax.set(end_cta1, {x:-11});

			// adjust video
			//vid_vid = document.querySelector("#vid_vidDate2");
			//vid_vid2 = document.querySelector("#vid_vid2Date2");
			//vid_contTime = 12.1; // 12.05/24f = 12.2-.1

			//end_date.setAttribute("data", "end_date2.svg");
			//vid_date.setAttributeNS('http://www.w3.org/1999/xlink','href', "vid_date2.png");

			//if (adTarget === "itunes" || urlOpt === "itunes") {
			//	TweenMax.set(end_cta1, {right:"22"});
			//}


		}

	else {

		console.log("dateChecker: targetDate false");

		// load default dates
		//vid_date.src = "end_date2.png";
		//end_date.src = "end_date.png";

		// fpo out
		//TweenMax.set("#vid_fpo", {display:"none"});
	}

	if (currentDate >= targetDate[2] || urlDate >= "2"){

		// adjust cta
		//vid_cta1Out.src = "vid_cta2.png";
		//vid_cta1Over.src = "vid_cta2B.png";

		//end_cta1Out.src = "end_cta2.png";
		//end_cta1Over.src = "end_cta2B.png";
		//TweenMax.set(end_cta1, {x:14, y:5, width:"99", height:"35"});
		//TweenMax.set(end_cta1Out, {width:"99", height:"35"});
	}
	console.log("\n");
}
dateChecker();





/* = Initialize Banner
-----------------------------------------------------------------------------*/

function init() {
	console.log("init()");

	// init timelines
	init_vid_tl();
	init_end_tl();

	// start current timeline
	if (!end_iniStart) {
		vid_tl.restart();
		// load and play video
		//vid_vidLoad();
		//vid_vidPlay();
	} else {
		end_tl.restart();
		TweenMax.set(vid_replayBtn, {display:"none"});
		// also remember to remove "muted" from video tag
	}

	// initFx
	//initFx();
}

// page finished loading = start banner (comment out for DC)
/*window.onload = function() {
	init();
};*/



/* = DC enabler
-----------------------------------------------------------------------------*/

// If true, start function. If false, listen for INIT.
window.onload = function() {
	if (Enabler.isInitialized()) {
		enablerInitHandler();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
	}
};

function enablerInitHandler() {
	// Start ad, initialize animation,
	// load in your image assets, call Enabler methods,
	// and/or include other Studio modules.
	// Also, you can start the Polite Load

	init();
	// DC event

	// check if the page is loaded
	if (Enabler.isPageLoaded()) {
		loadPoliteAssets();
	} else {
		console.log("\n"+"Waiting for website to finish loading...");

		Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, loadPoliteAssets);
	}
}

/*Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START,
						 function() {
	Enabler.finishExpand();
});
Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START,
						 function() {
	Enabler.finishCollapse();
});
Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH,
						 function() {
});*/

function loadPoliteAssets(){
	console.log("\n"+"Website finished loading. Now loading polite assets & video...");

	//document.querySelector("#end_bg").src="end_bg.jpg";

	// load and play video
	vid_vidLoad();
	vid_vidPlay();
}


/* = Load content after page has loaded
-----------------------------------------------------------------------------*/

// check if page is done
/*
var interval = setInterval(function() {
	if(document.readyState === 'complete') {
		clearInterval(interval);
		pageLoadComplete();
	}    
}, 100);

function pageLoadComplete() {
	// add 1sec delay (due to IAB specs)
	var interval = setInterval(function() {
		clearInterval(interval);
		loadPoliteAssets();
	}, 1000);
	console.log("pageLoadComplete");
}

function loadPoliteAssets() {
	console.log("loadPoliteAssets"); 
	//document.querySelector("#end_bg").src="end_bg.jpg";
	end_ctaCont.style.backgroundImage = 'url(end_cta.png)';
}
*/




/* = Mobile device & Browser Detection
-----------------------------------------------------------------------------*/

// detect
var isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iPhone: function() {
		return navigator.userAgent.match(/iPhone|iPod/i);
	},
	iPad: function() {
		return navigator.userAgent.match(/iPad/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iPhone() || isMobile.iPad() || isMobile.Opera() || isMobile.Windows());
	}
};

// any mobile
if ( isMobile.any() ) {

	// don't continue to endpanel before video is over
	//vid_contPlay = false;

	/* move elements to the top */
	TweenMax.set([vid_vidNav, vid_vidLoader, vid_audioOnBtnXl, gen_overlayPlayBtn], {zIndex: 100});
}


// check for iOS <=9
function iOSversion() {
	// supports iOS 2.0 and later: <https://bit.ly/TJjs1V>
	var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
	return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
}
var ver;
if (/iP(hone|od|ad)/.test(navigator.platform)) {
	ver = iOSversion();
	if (ver[0] <= 9) {
		// show overlayPlayBtn & vid_audioOnBtnXl (since it doesn't auto play)
		TweenMax.set([gen_overlayPlayBtn, vid_audioOnBtnXl], {display: "inline"});
	}
}


// detect IE & Edge browser
var isIEdge;
if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof window.browser !== "undefined" && window.browser.msie == 1 || navigator.userAgent.indexOf("Edge") > -1)) {
	isIEdge = true;
	console.log("isIEdge: "+isIEdge);
}



/* = General Buttons
-----------------------------------------------------------------------------*/


// DC event (after 3sec)
/*document.body.addEventListener('click', function (e) { 
	Enabler.counter('DIS320 : RM Interactive Impression', false);
}, true);
var dcInterval;
document.body.addEventListener('mouseover', function (e) { 
	dcInterval = setInterval(function() {
		Enabler.counter('DIS320 : RM Interactive Impression', false);
	}, 3000);
}, true);
document.body.addEventListener('mouseout', function (e) { 
	clearInterval(dcInterval);
}, true); */


// ----- mainClickTag buttons -----

// addEventListener
for (var iMainTag=0; iMainTag<mainClickTag.length; iMainTag++){
	mainClickTag[iMainTag].addEventListener('click', mainClickTagHandler, false);
	//mainClickTag[iMainTag].addEventListener('mouseover', mainClickTagHandler, false);
	//mainClickTag[iMainTag].addEventListener('mouseout', mainClickTagHandler, false);
}

function addClickTagOverOut() {
	end_mainClickTag.addEventListener('mouseover', mainClickTagHandler, false);
	end_mainClickTag.addEventListener('mouseout', mainClickTagHandler, false);
}
function removeClickTagOverOut() {
	end_mainClickTag.removeEventListener('mouseover', mainClickTagHandler, false);
	end_mainClickTag.removeEventListener('mouseout', mainClickTagHandler, false);
}

var mouseOverAni;
// mouse events
function mainClickTagHandler(evt) {
	
	switch (evt.type) {
			
		case 'mouseover':
			
			switch (evt.target) {
				case end_mainClickTag:
				
					/*if (!fromCta) {*/
					
					//startAllFx();
					// reflect
					btnReflect(ctaBtnGrad[1], end_cta1Width);

					/*}*/

					//
					break;
			}

			break;
			
		case 'mouseout':

			switch (evt.target) {
				case end_mainClickTag:

					/*if (fromCta) {

						// mc out
						//TweenMax.to(mc, 2, {scale:1, ease:Power1.easeInOut});
					}*/
				

					//
					break;
			}

			fromCta = false;

			break;
			
		case 'click':
			
			console.log("\n" + evt.target.id + " click");
			switch (evt.target) {
				case vid_mainClickTag:

					// skip to endpanel (play end timeline?)
					skipToEnd(true);

					break;
				case end_mainClickTag:

					break;
			}
			// DC event
			Enabler.exit('Background Exit Click');
			//Enabler.exit('DIS320 : Main Exit');
	}
}



// ----- cta button -----

// ctaBtn addEventListener
for (var iCtaBtn=0; iCtaBtn<ctaBtn.length; iCtaBtn++){
	ctaBtn[iCtaBtn].addEventListener('click', ctaBtnHandler, false);
	ctaBtn[iCtaBtn].addEventListener('mouseover', ctaBtnHandler, false);
	ctaBtn[iCtaBtn].addEventListener('mouseout', ctaBtnHandler, false);
}
if (end_iniStart) {
	end_cta1.removeEventListener('click', ctaBtnHandler, false);
	end_cta1.addEventListener('click', replayBtnHandler, false);
}

// mouse events
var fromCta; // keeps track if mouse comes from cta or outside
function ctaBtnHandler(evt) {
	switch (evt.type) {
			
		case 'mouseover':

			//console.log(evt.currentTarget);
			
			// reflect
			btnReflect(this, end_cta1Width);

			fromCta = true;

			// if not mobile
			if (!isMobile.any()) {

				console.log(evt.target.id);
				
				
				switch (evt.currentTarget.id) {

					case "vid_cta1":
						
						break;
						
					case "end_cta1":
						
						//startAllFx();

						break;
						
				}
				
				// glow (x,y,blur,strength,(color,alpha))
				/*TweenMax.to(evt.currentTarget, .75, {
					boxShadow: "0px 0px 6px 1px rgba(255,255,255, 1)",
					ease: Power4.easeOut
				});*/
				
				//TweenMax.to(evt.currentTarget, 1, {scale:1.05, ease:Power4.easeOut});
				
				// brightness
				TweenMax.set(evt.currentTarget, {
					webkitFilter: "brightness(1)",
					filter: "brightness(1)"
				});
				TweenMax.to(evt.currentTarget, .5,{
					webkitFilter: "brightness(1.15)",
					filter: "brightness(1.2)",
					ease: Power4.easeOut
				});
				

				// mouse-over image in
				//TweenMax.to(evt.target, .3, {alpha:1, ease:Power4.easeOut});
				/*if ( evt.target.className == "end_cta ctaBtn" ) {
					evt.target.style.backgroundImage = 'url(end_ctaTxtOver.png)';
				}*/
				
			}

			break;
		case 'mouseout':

			// if not mobile
			if (!isMobile.any()) {

				//TweenMax.to(evt.currentTarget, 1, {scale:1, ease:Power4.easeOut});
				
				
				switch (evt.currentTarget.id) {
					
					case "vid_cta1":

						break;

				}
				
				// glow out
				/*TweenMax.to(evt.currentTarget, .4, {
					boxShadow: "0px 0px 6px 1px rgba(255,255,255, 0)",
					ease: Power0.easeOut
				});*/
				
				// brightness
				TweenMax.to(evt.currentTarget, .5,{
					webkitFilter: "brightness(1)",
					filter: "brightness(1)",
					ease: Power4.easeOut
				});

				

				/*// drop
				TweenMax.to(evt.currentTarget, .4, {
					boxShadow: "0px 2px 3px 1px rgba(0,0,0, .3)",
					ease: Power0.easeOut
				});*/

				// mouse-out image out
				//TweenMax.to(evt.target, .3, {alpha:0, ease:Power4.easeOut});
				/*if ( evt.target.className == "end_cta ctaBtn" ) {
					evt.target.style.backgroundImage = 'url(end_ctaTxt.png)';
				}*/

			}

			break;
		case 'click':
			console.log("\n" + evt.currentTarget.id + " click");

			switch (evt.currentTarget.id) {
				case "vid_cta1":

					// DC event
					//Enabler.exit('Video Panel CTA button Exit Click');
					//Enabler.exit('DIS320 : Tickets Button Exit');

					// skip to endpanel (play end timeline?)
					skipToEnd(true);

					break;
				case "end_cta1":
					
					// DC event
					//Enabler.exit('End Panel CTA button Exit Click');
					//Enabler.exit('DIS320 : Tickets Button Exit');

					// skip to endpanel (play end timeline?)
					skipToEnd(false);

					break;
			}
			// DC event
			Enabler.exit('CTA button Exit Click');
			//Enabler.exit('DIS320 : Name Exit');
			break;
	}
}


// skip video and show endpanel (play timeline?)
function skipToEnd(playEndTl){

	console.log('skipToEnd');

	// stop video
	stopPreloadPlay = true;
	vid_vid.removeEventListener('timeupdate', vid_timeListener, false);
	vid_vid.pause();
	// DC event
	/*Enabler.stopTimer('DIS320 : Video 1 View Timer');
	if (!vid_firstPlay) {
		Enabler.stopTimer('DIS320 : Engaged Video View Timer');
		Enabler.stopTimer('DIS320 : Video 2 View Timer');
	}*/

	// play END timeline
	end_tl.restart();
	if (!playEndTl){
		// skip to end of END timeline
		end_tl.progress(1, false);
	}
}




/* = VIDEO player
-----------------------------------------------------------------------------*/
var videoPlayerVer = 4.5; 

// first time it plays
var vid_firstPlay = true;
//vid_progressBar.value = 0;
var stopPreloadPlay;

// addEventListener
vid_pauseBtn.addEventListener('click', vid_playHandler, false);
vid_playBtn.addEventListener('click', vid_playHandler, false);
vid_audioOffBtn.addEventListener('click', vid_muteBtnHandler, false);
vid_audioOnBtn.addEventListener('click', vid_unmuteBtnHandler, false);
vid_audioOnBtnXl.addEventListener('click', vid_unmuteBtnHandler, false);
vid_soundBtn.addEventListener('click', vid_unmuteBtnHandler, false);
vid_vid.addEventListener('ended', vid_vidEndHandler, false);
vid_vid.addEventListener('webkitendfullscreen', function (e) { skipToEnd(true); }); // iOS
vid_vid.addEventListener('webkitfullscreenchange', checkFullScreen, false); // Android
/*if(vid_vid2) {
	vid_vid2.addEventListener('webkitendfullscreen', function (e) { skipToEnd(true); }); // iOS
	vid_vid2.addEventListener('webkitfullscreenchange', checkFullScreen, false); // Android
}
if(vid_vidMobile) {
	vid_vidMobile.addEventListener('webkitendfullscreen', function (e) { skipToEnd(true); }); // iOS
	vid_vidMobile.addEventListener('webkitfullscreenchange', checkFullScreen, false); // Android
}*/

// check fullscreen exit (Android)
var vid_fullScreen = false;
function checkFullScreen()
{
	if (vid_fullScreen){
		skipToEnd(true);
		vid_fullScreen = false;
	} else {
		vid_fullScreen = true;
	}
}

// DC video module
Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
	studio.video.Reporter.attach('Video1', vid_vid);
});



// load video
function vid_vidLoad() {
	console.log("\n"+"Video Player v"+videoPlayerVer+":");
	console.log("vidLoad:running");

	stopPreloadPlay = false;

	if (!vid_firstPlay) {

		console.log("vidLoad: firstPlay:false");

		// events to fade in/out logo/date
		vid_evt = true;

		// load video2 ?
		if (vid_2load) {
			/*console.log("vid_2load: true");

			// = video1 out
			TweenMax.set(vid_vid, {display:"none"});
			vid_vid.pause();
			vid_vid.removeEventListener('ended', vid_vidEndHandler, false);
			// DC video module
			studio.video.Reporter.detach('Video1');

			// video2 in
			vid_vid = vid_vid2;
			vid_contPlay = vid_2contPlay;
			vid_contTime = vid_2contTime;
			vid_evt = vid_2evt;
			vid_evtTime = vid_2evtTime;
			// DC video module
			studio.video.Reporter.attach('Video2', vid_vid2);

			// re-attach "ended" EventListener
			vid_vid.addEventListener('ended', vid_vidEndHandler, false);

			vid_2load = false;*/
		} 
		else {
			// rewind video
			vid_vid.currentTime = 0;
		}
	}

	TweenMax.set(vid_vid, {display:"block"});
	/*vid_vid.load();*/

	// log
	console.log("vid_vid loading: "+vid_vid.currentSrc);
}

// start video
function vid_vidPlay(){

	console.log("vidPlay:running");
	console.log("vidPlay: firstPlay:"+vid_firstPlay);
	console.log("vid_allowFullscreen: "+vid_allowFullscreen);

	// vidNav out
	TweenMax.set([vid_vidNav, vid_soundBtn], {display:"none"});

	// DC events
	//vid_vid.addEventListener('timeupdate', vid_midpointFunc, false);

	// if firstPlay = don't allow fullscreen (= autoplay will work on mobile)
	if (vid_firstPlay) {
		// DC events
		//Enabler.startTimer('DIS318 : Video 1 View Timer');

		vid_vid.setAttribute('playsinline','true');

		// fpo out
		//TweenMax.set("#vid_fpo", {display:"none"});
	}
	else {
		// fpo in
		//TweenMax.set("#vid_fpo", {display:"inline"});

		if (!vid_allowFullscreen) {
			vid_vid.setAttribute('playsinline','true');
		}

		// DC events
		/*Enabler.stopTimer('DIS318 : Video 1 View Timer');
		Enabler.startTimer('DIS318 : Video 2 View Timer');
		Enabler.counter('DIS318 : Engaged Video View Ctr', false);
		Enabler.startTimer('DIS318 : Engaged Video View Timer');*/

	}

	// add event listener for 'continue to endpanel' / 'timer events'
	if (vid_contPlay || vid_timerEvents || vid_progress) {
		console.log("'vid_timeListener' EventListener added");
		vid_vid.addEventListener('timeupdate', vid_timeListener, false);
	}

	// show preloader
	TweenMax.set(vid_vidLoader, {delay:2, display: "inline"});

	// play video
	vid_vid.play();

	// start preloader
	vid_preLoader();

}

// preLoader
function vid_preLoader() {

	if (vid_vid.readyState === 1) {
		// 1 = HAVE_METADATA - metadata for the audio/video is ready

		// log
		console.log("vid_vid.readyState === 1");
	}

	if (vid_vid.readyState >= 3 || isIEdge ) {
		//3 = HAVE_FUTURE_DATA - enough data available to start playing

		if (!vid_firstPlay && vid_allowFullscreen) {

			// if mobile go full screen (Android)
			if ( isMobile.any() ) {
				goFullscreen();
			}
		}

		// log
		if (!isIEdge) {
			console.log("vid_vid.readyState >= 3");
		} else {
			console.log("isIEdge: skipping preLoader readyState");
		}

		// checks if user exists banner while video is loading
		if (!stopPreloadPlay) {

			if (!vid_firstPlay) {
				// unmute audio (code has to be here for it to work in Chrome)
				vid_vid.muted = false;
				console.log("vid_vid.muted: "+vid_vid.muted);
			}

			// play video
			/*vid_vid.play();*/

			// DC event
			/*if (vid_firstPlay) {
				Enabler.counter('DIS318 : Video 1 Play Ctr', true);
			} else {
				Enabler.counter('DIS318 : Video 2 Play Ctr', true);
			}*/

			// log
			console.log("vid_vid playing: "+vid_vid.currentSrc);

			// loader out
			TweenMax.killTweensOf(vid_vidLoader);
			TweenMax.set(vid_vidLoader, {display: "none"});

			// if "vid_soundShow" is true
			if (vid_soundShow) {

				// sound button in
				TweenMax.set(vid_soundBtn, {display: "inline"});

			} else {

				// sound button out
				TweenMax.set(vid_soundBtn, {display: "none"});

				// if "vid_pausePlayShow" is true
				if (vid_pausePlayShow)
				{
					// button in
					TweenMax.set(vid_pauseBtn, {display:"inline", autoAlpha:1});
					TweenMax.set(vid_playBtn, {display:"inline", autoAlpha:0});
				}
				else {
					// button out
					TweenMax.set(vid_pauseBtn, {display:"none"});
					TweenMax.set(vid_playBtn, {display:"none"});
				}

				// if "vid_audioShow" is true
				if (vid_audioShow)
				{
					// button in
					TweenMax.set(vid_audioOnBtn, {display:"inline"});
					TweenMax.set(vid_audioOffBtn, {display:"inline"});
					if (vid_firstPlay)
					{
						// but audioOff button invisible
						TweenMax.set(vid_audioOffBtn, {autoAlpha:0});
					}
				}
				else {
					// button out
					TweenMax.set(vid_audioOnBtn, {display:"none"});
					TweenMax.set(vid_audioOffBtn, {display:"none"});
				}

				// vidNav in
				TweenMax.set(vid_vidNav, {display:"inline", autoAlpha:vid_vidNavAlpha});
			}
		}

	} else {

		// run preLoader again
		setTimeout(vid_preLoader, 100);
	}
}

// go fullscreen
function goFullscreen(){

	if (typeof(vid_vid.webkitEnterFullscreen) != "undefined") {
		// Safari
		vid_vid.webkitEnterFullscreen();
	} else if (typeof(vid_vid.webkitRequestFullscreen)  != "undefined") {
		// Chrome/Safari/Edge
		vid_vid.webkitRequestFullscreen();
	} else if (typeof(vid_vid.mozRequestFullScreen)  != "undefined") {
		// Firefox
		vid_vid.mozRequestFullScreen();
	}
}

// play/pause video
function vid_playHandler(evt){
	console.log("\n"+evt.target.id+" click");

	if (!vid_vid.paused) {
		// currently not paused:

		// pause video
		vid_vid.pause();

		// DC event
		/*Enabler.stopTimer('DIS318 : Video 1 View Timer');
		if (!vid_firstPlay) { // = user Engaged Video
			Enabler.stopTimer('DIS318 : Engaged Video View Timer');
			Enabler.stopTimer('DIS318 : Video 2 View Timer');
		}*/


		// button in/out
		TweenMax.set(vid_pauseBtn, {autoAlpha:0});
		TweenMax.set(vid_playBtn, {autoAlpha:1});

	} else {
		// currently paused:

		// set to false
		vid_firstPlay = false;

		// mute audio first
		//vid_vid.muted = true;
		// unmute/restart
		//vid_audioToggle();

		// play video
		vid_vidPlay();
	}
}


// mute button handler
function vid_muteBtnHandler(evt) {

	console.log("\n"+evt.target.id+" click");

	vid_audioToggle();
}

// unmute button handler
function vid_unmuteBtnHandler(evt) {

	console.log("\n"+evt.target.id+" click");

	vid_audioToggle();
}

function vid_audioToggle() {

	if (!vid_vid.muted) {
		// currently unmuted:

		// DC event
		//Enabler.counter('DIS318 : Video 2 Mute Ctr', true);

		// mute audio
		vid_vid.muted = true;

		// button in/out
		TweenMax.set(vid_audioOffBtn, {autoAlpha:0});
		TweenMax.set(vid_audioOnBtn, {autoAlpha:1});

	} else {
		// currently muted:

		// DC event
		//Enabler.counter('DIS318 : Video 2 Unmute Ctr', true);

		// if this is the first time it plays
		if (vid_firstPlay)
		{		

			// overlayPlay & audioXL button out [iOS <=8]
			TweenMax.set([gen_overlayPlayBtn, vid_audioOnBtnXl], {display: "none"});

			// set to false
			vid_firstPlay = false;
			vid_soundShow = false;

			// load video 2?
			if (vid_2load) {
				vid_vidLoad();
			}
			else {
				// rewind video
				vid_vid.currentTime = 0;
			}

			// play video
			vid_vidPlay();
		}

		// unmute audio
		vid_vid.muted = false;

		// button in/out
		TweenMax.set(vid_audioOffBtn, {autoAlpha:1});
		TweenMax.set(vid_audioOnBtn, {autoAlpha:0});

	}
}


// video ended handler
function vid_vidEndHandler() {
	console.log("vid_vid end (current: "+vid_vid.currentTime+"s / total: "+vid_vid.duration+"s)");

	vid_vid.pause();

	if (vid_allowFullscreen) {
		// exit full-screen
		if (vid_vid.exitFullscreen) {
			vid_vid.exitFullscreen();
		} else if (vid_vid.webkitExitFullscreen) {
			vid_vid.webkitExitFullscreen();
		} else if (vid_vid.mozCancelFullScreen) {
			vid_vid.mozCancelFullScreen();
		} else if (vid_vid.msExitFullscreen) {
			vid_vid.msExitFullscreen();
		}
	}

	// DC events
	/*if (!vid_firstPlay) {
		Enabler.stopTimer('DIS318 : Engaged Video View Timer');
		Enabler.counter('DIS318 : Engaged Video View Complete Ctr', true);
		Enabler.stopTimer('DIS318 : Video 2 View Timer');
		Enabler.counter('DIS318 : Video 2 Complete Ctr', true); 
	} else {
		Enabler.stopTimer('DIS318 : Video 1 View Timer');
		Enabler.counter('DIS318 : Video 1 Complete Ctr', true); 
	}*/

	if (!vid_contPlay) {
		// play end_tl
		end_tl.restart();
	}
}

// 'continue to endpanel' / 'timer events' before video is over
function vid_timeListener() {

	// update progress bar
	var percentage = Math.floor((100 / vid_vid.duration) * vid_vid.currentTime);
	// adjust for final bar width
	//percentage = percentage*(vid_progressWidth/100);
	vid_progressBar.value = percentage;
	//console.log("percentage: "+percentage);
	vid_progressBar.style.width = percentage+"px";

	if (vid_contPlay) {
		if (vid_vid.currentTime >= vid_contTime) {
			console.log("vid_contTime reached: " + vid_contTime + " (current: "+vid_vid.currentTime+")");

			vid_vid.removeEventListener('timeupdate', vid_timeListener, false);

			// play end_tl
			end_tl.restart();
		}
	}
	if (vid_timerEvents) {
		if (vid_evt && vid_vid.currentTime >= vid_evtTime) {
			console.log("vid_evt timer reached");

			// tt out
			TweenMax.to([/*vid_tt, vid_cta1*/], 1, {alpha:0, ease:Power0.easeOut});
			vid_evt = false;
		}
	}
}

// event listener for DC video midpoint
/*function vid_midpointFunc() {
	// DC events
	if (vid_vid.currentTime >= vid_vid.duration/2) {
		if (!vid_firstPlay) {
			Enabler.counter('DIS318 : Engaged Video View Midpoint Ctr', true);
			Enabler.counter('DIS318 : Video 2 Midpoint Ctr', true);
		} else {
			Enabler.counter('DIS318 : Video 1 Midpoint Ctr', true);
		}
		vid_vid.removeEventListener('timeupdate', vid_midpointFunc, false);
	}
}*/


// ----- replay button ——

if (vid_replayShow) {
	// addEventListener
	vid_replayBtn.addEventListener('click', /*vid_unmuteBtnHandler*/replayBtnHandler, false);
	vid_replayBtn.addEventListener('mouseover', replayBtnHandler, false);
	vid_replayBtn.addEventListener('mouseout', replayBtnHandler, false);
} else {
	TweenMax.set(vid_replayBtn, {display:"none"});
}


// replay button handler
function replayBtnHandler(evt) {
	switch (evt.type)
	{
		case "mouseover" :

			fromCta = true;

			TweenMax.to(vid_replayBtn, .5, {rotation:-360});
			TweenMax.to(vid_replayBtn, .2, {alpha:1});
			break;
		case "mouseout" :
			TweenMax.set(vid_replayBtn, {rotation:0});
			TweenMax.to(vid_replayBtn, .2, {alpha:end_replayAlpha});
			break;
		case "click" :
			console.log("\n"+evt.target.id+" click");

			// play video timeline
			vid_tl.restart();

			// if this is the first time it plays
			if (vid_firstPlay)
			{
				// set to false
				vid_firstPlay = false;
				vid_soundShow = false;
			}

			// load & play video
			vid_vidLoad();
			vid_vidPlay();

			// button in/out
			TweenMax.set(vid_audioOffBtn, {autoAlpha:1});
			TweenMax.set(vid_audioOnBtn, {autoAlpha:0});

			// if banner starts with endpanel
			if (end_iniStart) {
				//end_cta1.removeEventListener('click', replayBtnHandler, false);
				//end_cta1.addEventListener('click', ctaBtnHandler, false);
				TweenMax.set(vid_replayBtn, {display:"inline"});
				end_iniStart = false;
			} else {
				// DC event
				//Enabler.counter('DIS318 : Video 2 Replay Ctr', true);
			}

			break;
	}
}


/* = VIDEO player END.
-----------------------------------------------------------------------------*/