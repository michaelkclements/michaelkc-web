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
        self.isWorkShown = ko.observable(false);
        
        self.openNav = function () {
            self.isNavClicked(!self.isNavClicked())
        };
        
        self.showWork = function () {
            self.isWorkShown(!self.isWorkShown())
        };

    };
    
    // Activates knockout.js
    ko.applyBindings(new ViewModel());
    
});
