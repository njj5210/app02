window.onload=function(){
    var myScroll;

    function loaded () {
        myScroll = new IScroll('#wrapper', { mouseWheel: true });
    }

    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

    loaded();


}
