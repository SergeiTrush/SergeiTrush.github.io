$(document).ready(function() {

	var wavesurfer = WaveSurfer.create({
	    container: '.player__form',
	    waveColor: '#fff',
	    progressColor: '#ff9114',
	    hideScrollbar: true,
	    height: 50,
	    cursorWidth: 0,
	});

		var playerBtn = $(".player__btn");
	var isPlaying = false;

	playerBtn.on("click", function() {
		wavesurfer.playPause();
		isPlaying = !isPlaying;	
		if (isPlaying) {
			playerBtn.removeClass("player__btn_play").addClass("player__btn_pause");
		} else {
			playerBtn.removeClass("player__btn_pause").addClass("player__btn_play");		
		} 
	});

	wavesurfer.load('http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3');

	var wavesurfer2 = WaveSurfer.create({
	    container: '.player__form_2',
	    waveColor: '#fff',
	    progressColor: '#ff9114',
	    hideScrollbar: true,
	    height: 50,
	    cursorWidth: 0,
	});	

	var playerBtn2 = $(".player__btn_2");
	var isPlaying2 = false;
	playerBtn2.on("click", function() {
		wavesurfer2.playPause();
		isPlaying2 = !isPlaying2;			
		if (isPlaying2) {
			playerBtn2.removeClass("player__btn_play").addClass("player__btn_pause");
		} else {
			playerBtn2.removeClass("player__btn_pause").addClass("player__btn_play");		
		} 
	});

	wavesurfer2.load('https://ia801404.us.archive.org/23/items/gd79-09-04.sbd.clugston.9452.sbeok.shnf/gd79-09-04Sbdd1t03.mp3');
})