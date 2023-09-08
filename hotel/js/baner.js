var slider = $('#caja');
$()
var siguiente = $('#boton-siguiente');
var atras = $('#boton-atras');
$('#caja .section_caja:last').insertBefore('#caja .section_caja:first');
slider.css('margin-left','-'+100+'%');
function moverD(){
    slider.animate({
        marginLeft:'-'+200+'%'
    },5000,function(){
        $('#caja.section_caja').insertBefore(
            'caja.Section_cala:last');
            slider.css('marginleft','-',+100+'%');
    })
}
function moverI(){
    slider.animate({
        marginLeft:'-'+200+'%'
    },5000,function(){
        $('#caja.section_caja').insertBefore(
            'caja.Section_cala:last');
            slider.css('marginleft','-',+100+'%');
    })
}

function autoPlay(){
    interval=setInterval(function(){
        moverD();
    },5000);
}
siguiente.on('click',function(){
    moverD();
    clearInterval(interval);
    autoPlay
})

anterior.on('click',function(){
    moverI();
    clearInterval(interval);
    autoPlay();
})

autoPlay();