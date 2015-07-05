/// <reference path="../typings/knockout/knockout.d.ts"/>
function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    }
    else {
      document.addEventListener('DOMContentLoaded', fn);
    }
}
ready(function () {

    function ViewModel() {
        var self = this;

        self.isNavClicked = ko.observable(false);
        self.openNav = function() {
          self.isNavClicked(!self.isNavClicked())
        };

        self.workItems = ko.observableArray([
            {
              title: "MichaelKC Music",
              url: "http://michaelkc.com/music/",
              imgUrl: "images/work-music.jpg",
              desc: "<p>A little music project I wanted to try to put together using HTML 5, CSS 3 and Javascript.</p><p>It was amazingly simple getting the audio to play using the new HTML tags using Javascript.</p><p>The tough parts was getting the logic for shuffling, repeating and both.</p><p>Thanks for my friend Lars for the music.</p>"
            },
            {
              title: "Old MichaelKC.com",
              url: "http://michaelkc.com/old/",
              imgUrl: "images/work-oldmkc.jpg",
              desc: "<p>I set out to put my CSS3 3D transform knowledge to the test.</p><p>Clicking on a link would move the site around in a 3D environment.</p><p>The use of HTML 5 video was also used to portray a video I created using the Unreal engine.</p><p>Sorry about the use of Lobster font.</p>"
            },
            {
              title: "Lit Fuse Films",
              url: "http://litfusefilms.com/",
              imgUrl: "images/work-litfusefilms.jpg",
              desc: "<p>This was a group of talented people that made video game videos (Machinima).</p><p>Being a part of this group taught me how to organise and work in a team.</p><p>The website shown now is something quick I put together to link to our videos.</p>"
            },
            {
              title: "Football site",
              url: "http://michaelkc.com/football/",
              imgUrl: "images/work-football.jpg",
              desc: "<p>This is a work in progress site for tracking five-a-side football.</p><p>The idea being players could say if they're going to play that week and sort the teams.</p><p>This site was using Angular to learn more about it.</p>"
            },
            {
              title: "Wonderflix.com",
              url: "http://wonderflix.com/",
              imgUrl: "images/work-wonderflix.jpg",
              desc: "<p>A website I put together for a friend for his Photography.</p><p>After a few design iterations, I was able to put the site into a Wordpress template.</p><p>Using Wordpress allowed my friend to update the website easily.</p><p>His photography is pretty good too!</p>"
            },
            {
              title: "Robert Stoneman WIP",
              url: "http://michaelkc.com/rs/",
              imgUrl: "images/work-rs.jpg",
              desc: "<p>A little music project I wanted to try to put together using HTML 5, CSS 3 and Javascript.</p><p>It was amazingly simple getting the audio to play using the new HTML tags using Javascript.</p><p>The tough parts was getting the logic for shuffling, repeating and both.</p><p>Thanks to my friend Lars for the music.</p>"
            }
        ]);

        self.isFocusActive = ko.observable(false);
        self.activeItem = ko.observable({});

        // Clicking an item
        self.focusItem = function(data) {
            self.activeItem(data);
            self.isFocusActive(!self.isFocusActive())
        };

        self.myAge = ko.computed(function() {
          var today = new Date();
          var birthday = new Date(1986, 08, 05);
          var years = today.getFullYear() - birthday.getFullYear();

          birthday.setFullYear(today.getFullYear());

          if (today < birthday){
            years--;
          }

          return years;
        }, this);
    };

    // Activates knockout.js
    ko.applyBindings(new ViewModel());

});
