window.onload=function() {
    var myScroll;

    function loaded() {
        myScroll = new IScroll('#wrapper', {
            mouseWheel:true
        });
    }

    document.addEventListener('touchmove', function (e) {
        e.preventDefault();
    }, false);

    loaded();



    //设定iphone6的rem;100;
    function resize(Origin,type){
        var widths=document.documentElement.clientWidth;
        var heights=document.documentElement.clientHeight;
        var type=type||"x";
        if(type=="x"){
            var scale=widths/Origin*100;
        }else if(type=="y"){
            var scale=heights/Origin*100;
        }
        document.getElementsByTagName("html")[0].style.fontSize=scale+"px";
    }
    resize(750,"x");

    function app(){
        var swiper = new Swiper('.swiper-container', {
            pagination : '.swiper-pagination',
            autoplay:3000,
            loop: true
        });
    }
    app();

}
