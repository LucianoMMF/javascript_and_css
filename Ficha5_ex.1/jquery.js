function HideBlock1(){
    $("#bloco1").hide();
}

$(document).ready(function (){
    $("#bloco2").hide();
})

function ShowBlock2(){
    $("#bloco2").show();
}

function ToggleBlock3(){
    $("#bloco3").toggle();
}

/*
function AnimateBlock1(){
    $("#bloco1").animate({
        left: '150px',
        opacity: '1',
        width: '0px', 
        height: '100px'
    }, 1000)
}*/

function AnimateBlock1(){
    $("#bloco1").slideUp(1000)
}

function AnimateBlock2(){
    $("#bloco2").slideDown(1000)
}
