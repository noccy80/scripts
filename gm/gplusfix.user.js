// @name WideScreen G+ Fix
// @description Will center the G+ content and restrict it to 1000px in width
// @include http://plus.google.com/*

try {
    var cdiv = document.getElementById('contentPane');
    if (cdiv) {
        cdiv.style.maxWidth = '1000px';
        cdiv.style.margin = 'auto';
    }
} catch(e) { }
