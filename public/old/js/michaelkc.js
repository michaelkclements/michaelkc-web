// javascript section, I'd rather use jQuery but I wanted to show I could do this.

function buttonSlide(el) {
    var slideName = el.getAttribute('data-slide');
    var camera = '.cameraSlide' + slideName;
    var slides_array = document.getElementsByClassName('slides');

    removeClassArray(slides_array, 'active');

    document.getElementById('slide' + slideName).className += ' active';
    document.getElementById('camera').className += ' cameraSlide' + slideName;

    ajaxFunction(slideName);
}

// I'm doing mother flipping AJAX here!!!

function ajaxFunction(name) {
    var spinLoader = document.getElementById('slide' + name);
    spinLoader.innerHTML = "<div class='spinLoader'></div>";

    var ajaxRequest;
    ajaxRequest = new XMLHttpRequest;

    ajaxRequest.onreadystatechange = function () {
        if (ajaxRequest.readyState == 4) {
            var slideDisplay = document.getElementById('slide' + name);
            slideDisplay.innerHTML = ajaxRequest.responseText;
        }
    }
    ajaxRequest.open("GET", "slide" + name + ".html", true);
    ajaxRequest.send(null);
}

function goBack(el) {
    var slideName = el.getAttribute('data-slide');
    document.getElementById('slideOne').className += 'active';
    var slide = document.getElementById('slide' + slideName);
    removeClass(slide, 'active');
    var camera = document.getElementById('camera');
    removeClass(camera, 'cameraSlide' + slideName);
}

function removeClassArray(el_array, removeClass) {
    for (var i = 0; i < el_array.length; i++) {
        var currentClass = el_array[i].className;
        var newClass = currentClass.replace(removeClass, '');
        el_array[i].className = newClass;
    }
}

function removeClass(el, removeClass) {
    var className = el.className;
    var newClass = className.replace(removeClass, '');
    el.className = newClass;
}

function screenshotFocus(el) {
    var screenshotID = el.getAttribute('data-focus');
    var screenshotName = el.getAttribute('data-shotname');
    var screenshotURL = el.getAttribute('data-shoturl');
    var screenshotStatus = el.getAttribute('data-shotstatus');
    document.getElementById('slideTwo').className += ' opacity';
    document.getElementById('camera').className += ' cameraSlideTwoFocus';
    document.getElementById('slideTwoFocus').className += ' active';
    document.getElementById('largeFocus').className = 'focus' + screenshotID;
    document.getElementById('screenshotName').innerHTML = "<a href=\"" + screenshotURL + "\" title=\"" + screenshotName + "\">" + screenshotName + "</a>"
    document.getElementById('screenshotStatus').innerHTML = screenshotStatus;
}

/* function goBackFocus() {
    var slideTwoFocus = document.getElementById('slideTwoFocus');
    removeClass(slideTwoFocus, 'active');
    var camera = document.getElementById('camera');
    removeClass(slideTwoFocus, 'cameraSlideTwoFocus');
    var slideTwo = document.getElementById('slideTwo');
    removeClass(slideTwo, 'opacity');
} */

// jQuery section, I like jQuery because it's much easier to work with.

$(function () {

    $(".goBackFocus").click(function () {
        $("#slideTwoFocus").removeClass("active");
        $("#camera").removeClass("cameraSlideTwoFocus");
        $("#slideTwo").removeClass("opacity");
    });
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-12499097-3']);
_gaq.push(['_trackPageview']);

// Google Analytics

(function () {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();