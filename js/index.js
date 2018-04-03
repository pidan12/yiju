$(".content4_left1").click(function(){
    $(".content4_left1").addClass("jiantou_active").siblings(".jiantou_active").removeClass("jiantou_active");
    $(".cl_1_tu2").hide();
    $(".cl_1_tu1").show();
});
$(".content4_left2").click(function(){
    $(".content4_left2").addClass("jiantou_active").siblings(".jiantou_active").removeClass("jiantou_active");
    $(".cl_1_tu2").show();
    $(".cl_1_tu1").hide();
});
//产品介绍
{
    $(".anli_content721").each(function(index,ele){
        $(this).mouseenter(function(){
            $(this).addClass("anli_content722").siblings(".anli_content722").removeClass("anli_content722");
            $(".chpi_content").eq(index).addClass("chpi_content_active").siblings(".chpi_content_active").removeClass("chpi_content_active");;
        })

    })
}
{
    let chanpin=document.querySelectorAll(".chpi_content");
    let choice=document.querySelectorAll(".anli_content721");
    let next=document.querySelector(".you_jian");
    let prev=document.querySelector(".zuo_jian");

    let n=0;
    function move(){
        n++;
        if(n===chanpin.length){
            n=0;
        }
        if(n<0){
            n=chanpin.length-1;
        }
        for(let i=0;i<chanpin.length;i++){
            chanpin[i].classList.remove("chpi_content_active");
            choice[i].classList.remove("anli_content722");
        }
        choice[n].classList.add("anli_content722");
        chanpin[n].classList.add("chpi_content_active");
    }
    next.onclick=function(){
        move();
    };
    prev.onclick=function(){
        n-=2;
        move();
    }

}