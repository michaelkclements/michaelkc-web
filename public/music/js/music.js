// Created by Michael K. Clements
// Guidance from David Ferguson

window.onload = function(){

    function song(songName, artistName, albumArtistName, albumName, releaseYear, trackNumber, fileName, imageName){
        this.songName = songName;
        this.artistName = artistName;
        this.albumArtistName = albumArtistName;
        this.albumName = albumName;
        this.releaseYear = releaseYear;
        this.trackNumber = trackNumber;
        this.fileName = fileName;
        this.imageName = imageName;
    }

    // Hard coded songs
    var songs = [];
    songs.push(new song("Make It Bun Dem (Bypass Bandits Remix)", "Skrillex & Damian Marley", "Skrillex & Damian Marley", "Bypass Bandits 2012", 2012, 1, "makeitbundem", "cover-skrillex"));
    songs.push(new song("ONE (Bypass Bandits Remix)", "Bypass Bandits", "Bypass Bandits", "Bunch of stuff", 2012, 1, "one", "cover-one"));
    songs.push(new song("The Turret Anthem", "Lars Erik Fjosne", "Lars Erik Fjosne", "Turret Anthem", 2013, 1, "turretanthem", "cover-turretanthem"));

    songs.push(new song("The LitFuse Song", "Lars Erik Fjosne", "Lars Erik Fjosne", "Lit Fuse Films Collection 1", 2007, 1, "litfuse-01", "cover-litfusefilms"));
    songs.push(new song("I'm Doing My Part", "Lars Erik Fjosne", "Lars Erik Fjosne", "Lit Fuse Films Collection 1", 2007, 2, "litfuse-02", "cover-litfusefilms"));
    songs.push(new song("Background Blues", "Lars Erik Fjosne", "Lars Erik Fjosne", "Lit Fuse Films Collection 1", 2007, 3, "litfuse-03", "cover-litfusefilms"));
    songs.push(new song("Insurance", "Lars Erik Fjosne", "Lars Erik Fjosne", "Lit Fuse Films Collection 1", 2007, 4, "litfuse-04", "cover-litfusefilms"));
    songs.push(new song("I Need A Stick", "Lars Erik Fjosne", "Lars Erik Fjosne", "Lit Fuse Films Collection 1", 2007, 5, "litfuse-05", "cover-litfusefilms"));
    songs.push(new song("Line Up", "Lars Erik Fjosne", "Lars Erik Fjosne", "Lit Fuse Films Collection 1", 2007, 6, "litfuse-06", "cover-litfusefilms"));
    songs.push(new song("Summersamba", "Lars Erik Fjosne", "Lars Erik Fjosne", "Lit Fuse Films Collection 1", 2007, 7, "litfuse-07", "cover-litfusefilms"));
    songs.push(new song("This Is For Betty", "Lars Erik Fjosne", "Lars Erik Fjosne", "Lit Fuse Films Collection 1", 2007, 8, "litfuse-08", "cover-litfusefilms"));
    songs.push(new song("Bunker", "Lars Erik Fjosne", "Lars Erik Fjosne", "Lit Fuse Films Collection 1", 2007, 9, "litfuse-09", "cover-litfusefilms"));
    songs.push(new song("Kill Me Mommy", "Lars Erik Fjosne", "Lars Erik Fjosne", "Lit Fuse Films Collection 1", 2007, 10, "litfuse-10", "cover-litfusefilms"));
    songs.push(new song("Kill Me Mommy (Electronic)", "Lars Erik Fjosne", "Lars Erik Fjosne", "Lit Fuse Films Collection 1", 2007, 11, "litfuse-11", "cover-litfusefilms"));
    songs.push(new song("Combine Nation - Original Theme", "Lars Erik Fjosne", "Lars Erik Fjosne", "Lit Fuse Films Collection 1", 2007, 12, "litfuse-12", "cover-litfusefilms"));
    songs.push(new song("Combine Nation - Beat Box Theme", "Lars Erik Fjosne", "Lars Erik Fjosne", "Lit Fuse Films Collection 1", 2007, 13, "litfuse-13", "cover-litfusefilms"));
    songs.push(new song("Combine Nation - Funky Flash Theme", "Lars Erik Fjosne", "Lars Erik Fjosne", "Lit Fuse Films Collection 1", 2007, 14, "litfuse-14", "cover-litfusefilms"));
    songs.push(new song("Combine Nation - Trance Theme", "Lars Erik Fjosne", "Lars Erik Fjosne", "Lit Fuse Films Collection 1", 2007, 15, "litfuse-15", "cover-litfusefilms"));
    songs.push(new song("Combine Nation - Guitar Theme", "Lars Erik Fjosne", "Lars Erik Fjosne", "Lit Fuse Films Collection 1", 2007, 16, "litfuse-16", "cover-litfusefilms"));
    songs.push(new song("Combine Nation - Horror Theme", "Lars Erik Fjosne", "Lars Erik Fjosne", "Lit Fuse Films Collection 1", 2007, 17, "litfuse-17", "cover-litfusefilms"));
    songs.push(new song("I'm Just The Janitor", "Lars Erik Fjosne", "Lars Erik Fjosne", "Lit Fuse Films Collection 1", 2007, 18, "litfuse-18", "cover-litfusefilms"));
    songs.push(new song("We'll Not Go Quietly", "Lars Erik Fjosne", "Lars Erik Fjosne", "Lit Fuse Films Collection 1", 2007, 19, "litfuse-19", "cover-litfusefilms"));
    songs.push(new song("Break All My Stuff", "Lars Erik Fjosne", "Lars Erik Fjosne", "Lit Fuse Films Collection 1", 2007, 20, "litfuse-20", "cover-litfusefilms"));
    songs.push(new song("Movements", "Lars Erik Fjosne", "Lars Erik Fjosne", "Lit Fuse Films Collection 1", 2007, 21, "litfuse-21", "cover-litfusefilms"));
    songs.push(new song("Ignis Solus", "Lars Erik Fjosne", "Lars Erik Fjosne", "Lit Fuse Films Collection 1", 2007, 22, "litfuse-22", "cover-litfusefilms"));

    songs.push(new song("Rock Star (Blarsa Remix)", "Da Shop Boyz", "Blarsa", "Blarsa", 2010, 1, "rockstar", "cover-blarsa"));
    songs.push(new song("dwmbbwip", "Blarsa", "Blarsa", "Blarsa", 2010, 2, "dwmbbwip", "cover-blarsa"));
    songs.push(new song("Tribute", "Blarsa", "Blarsa", "Blarsa", 2010, 3, "tribute", "cover-blarsa"));
    songs.push(new song("Tonight", "Blarsa", "Blarsa", "Blarsa", 2010, 4, "tonight", "cover-blarsa"));
    songs.push(new song("Grim Grinning Ghosts", "Buddy Baker", "Blarsa", "Blarsa", 2010, 5, "grimgrinningghosts", "cover-blarsa"));
    songs.push(new song("Garden Party", "Blarsa", "Blarsa", "Blarsa", 2010, 6, "gardenparty", "cover-blarsa"));

    songs.push(new song("Awakening", "Lars Erik Fjøsne", "Lars Erik Fjøsne", "Living Lars", 2013, 1, "lars-01", "cover-livinglars"));
    songs.push(new song("Into Oblivion", "Lars Erik Fjøsne", "Lars Erik Fjøsne", "Living Lars", 2013, 2, "lars-02", "cover-livinglars"));
    songs.push(new song("Video Game Locations Soundtrack", "Lars Erik Fjøsne & Arslan Qureshi", "Lars Erik Fjøsne", "Living Lars", 2013, 3, "lars-03", "cover-livinglars"));
    songs.push(new song("Marienlyst", "Lars Erik Fjøsne", "Lars Erik Fjøsne", "Living Lars", 2013, 4, "lars-04", "cover-livinglars"));
    songs.push(new song("Popeye (Living Lars Remix)", "Hilde Marie Kjersem", "Lars Erik Fjøsne", "Living Lars", 2013, 5, "lars-05", "cover-livinglars"));

    // Array
    var playlists = [],

    // Array to capture the history of songs being played
        historyArray = [],

        albums = {},
        albumsContainer = document.getElementById("albums");

    // Push songs into albums based on albumName
    for(var i = 0; i < songs.length; i++){
        if (albums[songs[i].albumName] === undefined) {
            albums[songs[i].albumName] = {
                songs: []
            };
        }

        albums[songs[i].albumName].songs.push(songs[i]);
    }

    // Creating the album playlists
    var albumIndex = 0;
    for(var a in albums){
        playlists[albumIndex] = new album(albums[a].songs);
        albumIndex++;
    }

    // The music player object
    var player = {

        isPlaying: false,
        isShuffled: false,
        isRepeated: false,
        isMuted: false,
        isSeeking: false,
        currentAlbum: null,
        currentPlaylist: null,
        duplicatePlaylist: null,
        currentSongNumber: null,
        currentSong: null,
        trackDuration: null,
        trackCurrentTime: null,
        trackPercentage: function(){
            var percentage = (player.audio.currentTime / (player.trackDuration) * 100) + "%";
            return percentage;
        },
        playButton: document.getElementById("play-button"),
        rewindButton: document.getElementById("rewind-button"),
        forwardButton: document.getElementById("forward-button"),
        repeatButton: document.getElementById("repeat-button"),
        shuffleButton: document.getElementById("shuffle-button"),
        volumeButton: document.getElementById("volume-button"),
        volumeSlider: document.getElementById("volume-slider"),
        trackSlider: document.getElementById("time-slider"),
        timeProgress: document.getElementById("time-progress"),
        playerSongName: document.getElementById("player-song-name"),
        playerArtistName: document.getElementById("player-artist-name"),
        playerAlbumArt: document.getElementById("player-album-art"),
        playerSongTime: document.getElementById("player-song-time"),
        audio: document.getElementById("music-player"),
        setup: function(){
            player.playButton.addEventListener('click', this.play, false);
            player.forwardButton.addEventListener('click', this.next, false);
            player.rewindButton.addEventListener('click', this.previous, false);
            player.repeatButton.addEventListener('click', this.repeat, false);
            player.shuffleButton.addEventListener('click', this.shuffle, false);
            player.volumeButton.addEventListener('click', this.volumeMute, false);
            player.volumeSlider.addEventListener('input', this.volumeSlide, false);
            player.volumeSlider.value = 100;
            player.trackSlider.addEventListener('input', this.trackSlide, false);
            player.trackSlider.value = 0;
            player.audio.addEventListener('timeupdate', this.trackSlideUpdate, false);
            player.audio.addEventListener('loadedmetadata', this.trackInfo, false);
            player.audio.addEventListener('ended', this.ended, false);
        },
        play: function(){
            player.playerSongName.innerHTML = player.currentSong.songName;
            player.playerArtistName.innerHTML = player.currentSong.artistName;
            player.playerAlbumArt.innerHTML = "<img src='images/" + player.currentSong.imageName + ".jpg'>";
            if(player.audio.paused){
                player.currentAlbum.songPlaying();
                player.isPlaying = true;
                player.playButton.className = "button pause";
                player.forwardButton.className = "button";
                player.rewindButton.className = "button";
                player.audio.play();
            }
            else {
                player.currentAlbum.songPaused();
                player.isPlaying = false;
                player.audio.pause();
                player.playButton.className = "button";
            }
        },
        stop: function(){
            player.currentAlbum.songStopped();
            player.isPlaying = false;
            player.audio.src = "";
            player.playerSongName.innerHTML = "";
            player.playerArtistName.innerHTML = "";
            player.playerAlbumArt.innerHTML = "";
            player.audio.pause();
            player.playButton.className = "button";
            player.forwardButton.className = "button disabled";
            player.rewindButton.className = "button disabled";
            player.currentSongNumber = null;
            player.currentSong = null;
        },
        next: function(){
            if(player.isPlaying === false && player.audio.src === undefined){
                return;
            }

            else if(player.isShuffled === true){
                player.determineShuffle();
            }

            else if(player.isShuffled === true && player.isRepeated === true){
                player.determineShuffle();
                player.determineRepeat();
            }

            else if(player.isRepeated === true && (player.currentSong === player.currentPlaylist[player.currentPlaylist.length - 1])){
                player.determineRepeat();
            }

            else if((player.isRepeated === false) && (player.isShuffled === false) && (player.currentSong === player.currentPlaylist[player.currentPlaylist.length - 1])){
                player.stop();
            }

            else {
                var songArrayPosition = player.currentPlaylist.indexOf(player.currentSong);
                player.currentSong = player.currentPlaylist[songArrayPosition + 1];
                player.history(player.currentSong);
                player.removeFromArray(player.currentSong);
                player.audio.setAttribute("src", "music/" + player.currentSong.fileName + ".mp3");
                player.play();
            }

        },
        previous: function(){
            if(player.isPlaying === false && player.audio.src === ""){
                return;
            }
            if(historyArray.length === 1){
                player.stop();
                return;
            }
            player.currentSong = historyArray[historyArray.length - 2];
            player.duplicatePlaylist.push(player.currentSong);

            historyArray.pop();
            historyArray.pop();

            player.history(player.currentSong);
            player.removeFromArray(player.currentSong);
            player.audio.setAttribute("src", "music/" + player.currentSong.fileName + ".mp3");
            player.play();
        },
        shuffle: function(){
            if(player.isShuffled === true){
                player.isShuffled = false;
                player.shuffleButton.className = "button";
            }
            else {
                player.isShuffled = true;
                player.shuffleButton.className = "button active";
            }
        },
        determineShuffle: function(){
            randomTrackNumber = Math.floor(Math.random() * player.duplicatePlaylist.length);
            if(player.duplicatePlaylist.length === 0 && player.isRepeated === true) {
                console.log("HIYA!!!");
                player.refreshArray();

            }
            else if(player.duplicatePlaylist.length === 0) {
                player.stop();
                return;
            }
            player.currentSong = player.duplicatePlaylist[randomTrackNumber];
            player.history(player.currentSong);
            player.removeFromArray(player.currentSong);
            player.audio.setAttribute("src", "music/" + player.currentSong.fileName + ".mp3");
            player.play();
        },
        repeat: function(){
            if(player.isRepeated === true){
                player.isRepeated = false;
                player.repeatButton.className = "button";
            }
            else {
                player.isRepeated = true;
                player.repeatButton.className = "button active";
            }
        },
        determineRepeat: function(){
            if(player.isShuffled === false){
                player.currentSongNumber = 0;
                player.refreshArray();
            }
            player.currentSong = player.currentPlaylist[player.currentSongNumber];
            player.history(player.currentSong);
            player.removeFromArray(player.currentSong);
            player.audio.setAttribute("src", "music/" + player.currentSong.fileName + ".mp3");
            player.play();
        },
        setPlaylist: function(playlist) {
            if(this.currentAlbum !== null){
                this.currentAlbum.songStopped();
            }
            this.currentAlbum = playlist;
            this.currentPlaylist = playlist.songs;
            this.duplicatePlaylist = this.currentPlaylist.slice(0);
            this.currentSongNumber = 0;
            this.currentSong = this.currentPlaylist[this.currentSongNumber];
            this.audio.setAttribute("src", "music/" + this.currentSong.fileName + ".mp3");
            //reset all buttons to default values
            this.playButton.className = "button";
            this.forwardButton.className = "button disabled";
            this.rewindButton.className = "button disabled";
        },
        ended: function(){
            player.next();
        },
        removeFromArray: function(currentSong) {
            var songArrayPosition = player.duplicatePlaylist.indexOf(currentSong);
            if(songArrayPosition > -1) {
                player.duplicatePlaylist.splice(songArrayPosition, 1);
            }
        },
        refreshArray: function(){
            player.duplicatePlaylist = player.currentPlaylist.slice(0);
        },
        history: function(currentSong) {
            historyArray.push(currentSong);
        },
        volumeMute: function(){
            if(player.isMuted === true){
                player.isMuted = false;
                player.audio.muted = false;
                player.volumeSlide();
            }
            else {
                player.isMuted = true;
                player.audio.muted = true;
                player.volumeButton.className = "button mute";
            }
        },
        volumeSlide: function(){
            if(player.volumeSlider.value === 0){
                player.volumeButton.className = "button mute";
            }
            else if(player.volumeSlider.value >= 1 && player.volumeSlider.value <= 33 && player.isMuted === false){
                player.volumeButton.className = "button quieter";
            }
            else if(player.volumeSlider.value >= 34 && player.volumeSlider.value <= 66 && player.isMuted === false){
                player.volumeButton.className = "button quiet";
            }
            else if(player.volumeSlider.value >= 67 && player.volumeSlider.value <= 100 && player.isMuted === false) {
                player.volumeButton.className = "button";
            }
            player.audio.volume = (player.volumeSlider.value / 100);
        },
        trackInfo: function(){
            player.trackDuration = player.audio.duration;
            player.trackSlider.max = player.trackDuration;
            if(player.isPlaying === true){
                player.playerSongTime.innerHTML = player.audio.duration + "s";
            }
            player.trackPercentage();
            player.timeProgress.style.width = player.trackPercentage();
        },
        trackSlide: function(){
            player.trackCurrentTime = player.trackSlider.value;
            player.audio.currentTime = player.trackCurrentTime;
            player.trackPercentage();
            player.timeProgress.style.width = player.trackPercentage();
        },
        trackSlideUpdate: function(){
            player.trackSlider.step = 0.0001;
            player.trackSlider.value = player.audio.currentTime;
            player.timeProgress.style.width = player.trackPercentage();
        }
    };

    player.setup();
    player.setPlaylist(playlists[0]);

    function album(songs){
        this.songs = songs;

        // Some variables set
        var self = this,
            albumElement = document.createElement("div");

        // Adding the album elements into the page
        albumElement.className = "album";
        albumElement.innerHTML = "<img src='images/" + songs[0].imageName + ".jpg'>";
        albumElement.innerHTML += "<div class='song-count'>" + songs.length + "<div class='play'></div></div>";
        this.playIcon = albumElement.getElementsByClassName("play");
        albumsContainer.appendChild(albumElement);

        // Adding the songs into a container
        var songsContainer = document.createElement("div");
        songsContainer.className = "songs-container";
        for(var i = 0; i < songs.length; i++){
            songsContainer.innerHTML += "<div class='song'><div class='track-number'>" + songs[i].trackNumber + "</div>" + songs[i].songName + "</div>";
        }
        albumElement.appendChild(songsContainer);

        // Clicking an album does the below function
        albumElement.onclick = function(){
            // Empty history array
            historyArray = [];
            // Set the songs in this album
            player.setPlaylist(self);
            if(player.isShuffled === true){
                player.determineShuffle();
            }
            else if(player.isRepeated === true){
                player.determineRepeat();
            }
            else {
                player.history(player.currentSong);
                player.play();
            }
        };
        this.songPlaying = function(){
            // Add the active class to the album played
            albumElement.className = "album active";
            // Creating the spinner on the play button when active
            if(self.spinnyBit === undefined){
                //create the icon for the first time
                self.spinnyBit = document.createElement("div");
                self.spinnyBit.className = "spinny-bits";
                self.playIcon[0].parentElement.appendChild(self.spinnyBit);
            }
            self.playIcon[0].className = "play active";
            // Play the spinner animation
            self.spinnyBit.style.WebkitAnimationPlayState = "running";
        };
        this.songPaused = function(){
            // Pause the spinner animation
            self.spinnyBit.style.WebkitAnimationPlayState = "paused";
        };
        this.songStopped = function(){
            // Remove the spinner is the album is not active
            albumElement.className = "album";
            if (self.spinnyBit !== undefined){
                self.playIcon[0].parentElement.removeChild(self.spinnyBit);
                self.spinnyBit = undefined;
                self.playIcon[0].className = "play";
            }
        };
    }
};

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-12499097-3']);
_gaq.push(['_trackPageview']);

// Google Analytics

(function (){
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
