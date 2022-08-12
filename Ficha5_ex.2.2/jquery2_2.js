var isLarge = false;

function Anim() {
  if (isLarge) {
    $("#caixa").animate({ height: "100px", width: "100px" }, [1000]);
    $("#caixa").animate({ left: 0 });
    isLarge = false;
    console.log(isLarge);
  } else {
    $("#caixa").animate({ left: "200px" });
    $("#caixa").animate({ height: "200px", width: "200px" }, [1000]);
    isLarge = true;
    console.log(isLarge);
  }
}

$(document).ready(function () {
  $("#caixa").click(Anim);
});
