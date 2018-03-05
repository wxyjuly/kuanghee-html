
$(function () {
    $(".wk-table tr .gb").click(function () {
		$(this).parents().parent("tr").addClass('fc-co');
    });
    $(".workflow-m-vis-fm ul .lst p").click(function () {
   	 	$(this).toggleClass("z-crt");
    });
    $('#tb1-btn').click(function () {
		$('#work-tb2').show(1);
		$('#work-tb1').hide(1);
    })
     $('#tb2-btn').click(function () {
		$('#work-tb3').show(1);
		$('#work-tb2').hide(1);
    })
     $('#bk-tb1-btn').click(function () {
		$('#work-tb1').show(1);
		$('#work-tb2').hide(1);
    })
      $('#bk-tb2-btn').click(function () {
		$('#work-tb2').show(1);
		$('#work-tb3').hide(1);
    })
});	

$(function () {
    $('.table tr td .icon1').mouseenter(function () {
		$(this).children('.z-hid1').show(1);
		$(this).children('.z-hid2').hide(1);
		$(this).children('.z-hid3').hide(1);
    })
    $('.table tr td .icon2').mouseenter(function () {
		$(this).children('.z-hid2').show(1);
		$(this).children('.z-hid1').hide(1);
		$(this).children('.z-hid3').hide(1);
    })
    $('.table tr td .icon3').mouseenter(function () {
		$(this).children('.z-hid3').show(1);
		$(this).children('.z-hid1').hide(1);
		$(this).children('.z-hid2').hide(1);
    })
    $('.table tr td a').mouseleave(function () {
      $(this).children('.z-hid1').hide(1);
      $(this).children('.z-hid2').hide(1);
      $(this).children('.z-hid3').hide(1);
    })
 });	   
 
$(function(){
$(".workflow-m-trk-tt ul li").click(function () {
                $(".workflow-m-trk-tt ul li").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
            });
$('.workflow-m-trk-tt ul li').click(function(){
  var index=$('.workflow-m-trk-tt ul li').index(this);
    if(index==0){
     $('#tab1').show();
  	 $('#tab2').hide();
   }
   if(index==1){
     $('#tab2').show();
  	 $('#tab1').hide();
   }
  }); 
});