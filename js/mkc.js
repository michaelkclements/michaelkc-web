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


        self.isFocusActive = ko.observable(false);
        self.focusItem = function() {
          self.isFocusActive(!self.isFocusActive())
        };

    };

    // Activates knockout.js
    ko.applyBindings(new ViewModel());


    var request = new XMLHttpRequest();
    request.open('GET', 'https://api.dribbble.com/players/MichaelKC/shots', true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);

        data.shots.forEach(function(i, shot){
          if (i >= 3) {
            return false;
          }
          console.log(data.shots);
        });

      } else {
        // We reached our target server, but it returned an error

      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();

});
