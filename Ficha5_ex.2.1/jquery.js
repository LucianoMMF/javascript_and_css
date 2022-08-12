var large = false

function anime(){
    if (large) {$("#box").animate({height: "100px"}, [1000]); large = false} 
    else {$("#box").animate({height: "200px"}, [1000]); large = true}
}

$(document).ready(function(){
    $("#box").click(anime)
})