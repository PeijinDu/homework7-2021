var video= document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video= document.querySelector("#player1");
    volume = document.querySelector("#volume");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	volume.innerHTML=slider.value + "%"
    // doucument.querySelector("#volume").innerHTML=video.volume *100 + "%"
});


document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	
	video.playbackRate = video.playbackRate*.95;
	console.log("New Speed is" + video.playbackRate);
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing Volume")
	console.log(this.value)
	video.volume = this.value /100
	volume.innerHTML=this.value + "%"
	console.log(video.volume)
	doucument.querySelector("#volume").innerHTML=video.volume *100 + "%"
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Faster the Video");
	video.playbackRate /=.95;
	console.log("New Speed is" +video.playbackRate);
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Changing CSS");
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Remove CSS");
    video.classList.remove("oldSchool");
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true){
		video.muted=false
		console.log("Unmute the Video");
		this.innerHTML="Mute"
	}
	else {
       video.muted=true
	   console.log("Mutted the Video")
	   this.innerHTML="Unmute"
	}
	
});

document.querySelector("#skip").addEventListener("click", function() {
	if(video.currentTime < video.duration -15){
		video.currentTime += 15
	}
	else{
		video.currentTime = 0
		console.log("Going back")
	}
});
