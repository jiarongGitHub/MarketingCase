window.onload=function(){
	var music = document.querySelector('.music');
	var audioEle = document.querySelector('.music audio');
	musicPlay();
	//音乐逻辑
	function musicPlay() {
		//音乐图标转起来
		tools.addClass(music, 'play-music');
		//音乐播起来
		audioEle.play();

		var flag = true; //音乐在播放
		music.addEventListener('touchend', function() {
			if(flag) {
				//暂停音乐 并且图标停止转动
				audioEle.pause();
				tools.removeClass(music, 'play-music');
			} else {
				//播放音乐 并且图标开始转动
				audioEle.play();
				tools.addClass(music, 'play-music');
			}
			flag = !flag;
		})

	}
}
