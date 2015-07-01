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

        workItems: ko.observableArray([
          { title: 'MKC Music', url: 'http://michaelkc.com/music'},
          { title: 'Old MichaelKC.com', url: 'http://michaelkc.com/old'},
          { title: 'Lit Fuse Films', url: 'http://litfusefilms.com' }
        ])

    };

    // Activates knockout.js
    ko.applyBindings(new ViewModel());

});
