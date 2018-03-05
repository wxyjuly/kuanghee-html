//用户信息
//$(function () {
//  var st = 100;
//  $('#m-nav-user ul .usr').mouseenter(function () {
//		$('#m-nav-user .uer-lt').show(1);
//		$('#m-list1').hide(1);
//		$('#m-list2').hide(1);
//		$('.ej-ejwk').hide(1);
//		$('.xil').children('.icon-angle-down').attr("class","icon-angle-up");
//  })
//		$("#m-nav-user .uer-lt").click(function () {
//              $(this).hide(1);
//         });	
//		$('#m-nav-user ul .usr').mouseleave(function () {
//      $('#m-nav-user .usr .uer-lt').hide(1);
//      $('.xil').children('.icon-angle-up').attr("class", "icon-angle-down");
//  });	
//});
//用户信息
$(function () {
   $("#m-nav-user ul .usr").click(function(event){
        var e=window.event || event;
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble = true;
        }   
        $("#m-nav-user .uer-lt").slideToggle(1);
       $(".ej-ejwk").hide(1);
       $(this).children('.xil').children('i').toggleClass("icon-angle-down  icon-angle-up");
       $('#m-list2').hide(1);
    });
    $("#m-nav-user .uer-lt").click(function(event){
        var e=window.event || event;
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble = true;
        }
		$("#m-nav-user .uer-lt").slideToggle(1);
    });
    
});	

//公告
$(function () {
    var st = 100;
    $('#m-nav-user ul #sd-notice1').mouseenter(function () {
		$('#m-list1').show(1);
		$('#m-list2').hide(1);
		$('.ej-ejwk').hide(1);
		$('#m-nav-user .uer-lt').hide(1);
    })
		$("#m-nav-user #m-list1").click(function () {
                $(this).hide(1);
           });	
		$('#m-nav-user ul').mouseleave(function () {
        $('#m-nav-user #m-list1').hide(1);
    });	
});
//消息
$(function () {
    var st = 100;
    $('#m-nav-user ul #sd-notice2').mouseenter(function () {
		$('#m-list2').show(1);
		$('#m-list1').hide(1);
		$('.ej-ejwk').hide(1);
		$('#m-nav-user .uer-lt').hide(1);
    })
		$("#m-nav-user #m-list2").click(function () {
                $(this).hide(1);
           });	
		$('#m-nav-user ul #sd-notice2').mouseleave(function () {
        $('#m-nav-user #m-list2').hide(1);
    });	
});
//table a 标签
$(function () {
    var st = 100;
    $('.table tr td .icon1').mouseenter(function () {
		$(this).children('.z-hid1').show(1);
		$(this).children('.z-hid2').hide(1);
		$(this).children('.z-hid3').hide(1);
		$(this).children('.z-hid4').hide(1);
		$(this).children('.z-hid5').hide(1);
    })
    $('.table tr td a').mouseleave(function () {
      $(this).children('.z-hid1').hide(1);
    })
    $('.table tr td .icon2').mouseenter(function () {
		$(this).children('.z-hid2').show(1);
		$(this).children('.z-hid1').hide(1);
		$(this).children('.z-hid3').hide(1);
		$(this).children('.z-hid4').hide(1);
		$(this).children('.z-hid5').hide(1);
    })
    $('.table tr td a').mouseleave(function () {
      $(this).children('.z-hid2').hide(1);
    })
    $('.table tr td .icon3').mouseenter(function () {
		$(this).children('.z-hid3').show(1);
		$(this).children('.z-hid1').hide(1);
		$(this).children('.z-hid2').hide(1);
		$(this).children('.z-hid4').hide(1);
		$(this).children('.z-hid5').hide(1);
    })
    $('.table tr td a').mouseleave(function () {
      $(this).children('.z-hid3').hide(1);
    })
    $('.table tr td .icon4').mouseenter(function () {
		$(this).children('.z-hid4').show(1);
		$(this).children('.z-hid1').hide(1);
		$(this).children('.z-hid2').hide(1);
		$(this).children('.z-hid3').hide(1);
		$(this).children('.z-hid5').hide(1);
    })
    $('.table tr td a').mouseleave(function () {
      $(this).children('.z-hid4').hide(1);
    })
    $('.table tr td .icon5').mouseenter(function () {
		$(this).children('.z-hid5').show(1);
		$(this).children('.z-hid1').hide(1);
		$(this).children('.z-hid2').hide(1);
		$(this).children('.z-hid3').hide(1);
		$(this).children('.z-hid4').hide(1);
    })
    $('.table tr td a').mouseleave(function () {
      $(this).children('.z-hid5').hide(1);
    })
    $('.m-trk-lst-ct .h-ic .icon1').mouseenter(function () {
		$('.z-hid1').show(1);
		$('.z-hid2').hide(1);
		$('.z-hid3').hide(1);
    })
     $('.m-trk-lst-ct .h-ic a').mouseleave(function () {
      $('.z-hid1').hide(1);
    })
      $('.m-trk-lst-ct .h-ic .icon2').mouseenter(function () {
		$('.z-hid2').show(1);
		$('.z-hid1').hide(1);
		$('.z-hid3').hide(1);
    })
     $('.m-trk-lst-ct .h-ic a').mouseleave(function () {
      $('.z-hid2').hide(1);
    })
      $('.m-trk-lst-ct .h-ic .icon3').mouseenter(function () {
		$('.z-hid3').show(1);
		$('.z-hid1').hide(1);
		$('.z-hid2').hide(1);
    })
     $('.m-trk-lst-ct .h-ic a').mouseleave(function () {
      $('.z-hid3').hide(1);
    })
      $('.m-cong-lst-rt-tt label .icon1').mouseenter(function () {
		$('.z-hid1').show(1);
		$('.z-hid2').hide(1);
		$('.z-hid3').hide(1);
    })
     $('.m-cong-lst-rt-tt label  a').mouseleave(function () {
      $('.z-hid1').hide(1);
    })
      $('.m-cong-lst-rt-tt label .icon1').mouseenter(function () {
		$('.z-hid1').show(1);
		$('.z-hid2').hide(1);
		$('.z-hid3').hide(1);
    })
     $('.m-cong-lst-rt-tt label  a').mouseleave(function () {
      $('.z-hid1').hide(1);
    })
      $('.m-cong-lst-rt-tt label .icon2').mouseenter(function () {
		$('.z-hid2').show(1);
		$('.z-hid1').hide(1);
		$('.z-hid3').hide(1);
    })
     $('.m-cong-lst-rt-tt label a').mouseleave(function () {
      $('.z-hid2').hide(1);
    })
      $('.m-cong-lst-rt-tt label .icon3').mouseenter(function () {
		$('.z-hid3').show(1);
		$('.z-hid1').hide(1);
		$('.z-hid2').hide(1);
    })
     $('.m-cong-lst-rt-tt label  a').mouseleave(function () {
      $('.z-hid3').hide(1);
    })
     $('.star-fb label .icon1').mouseenter(function () {
		$(this).parent().children('.z-hid1').show(1);
		$('.z-hid2').hide(1);
		$('.z-hid3').hide(1);
		$('.z-hid4').hide(1);
    })
     $('.star-fb label  a').mouseleave(function () {
      $('.z-hid1').hide(1);
    })
      $('.star-fb label .icon2').mouseenter(function () {
		$(this).parent().children('.z-hid2').show(1);
		$('.z-hid1').hide(1);
		$('.z-hid3').hide(1);
		$('.z-hid4').hide(1);
    })
     $('.star-fb label  a').mouseleave(function () {
      $('.z-hid2').hide(1);
    })
      $('.star-fb label .icon3').mouseenter(function () {
		$(this).parent().children('.z-hid3').show(1);
		$('.z-hid2').hide(1);
		$('.z-hid1').hide(1);
		$('.z-hid4').hide(1);
    })
     $('.star-fb label a').mouseleave(function () {
      $('.z-hid3').hide(1);
    })
     $('.star-fb label .icon4').mouseenter(function () {
		$(this).parent().children('.z-hid4').show(1);
		$('.z-hid2').hide(1);
		$('.z-hid1').hide(1);
		$('.z-hid3').hide(1);
    })
     $('.star-fb label  a').mouseleave(function () {
      $('.z-hid4').hide(1);
    })
});

//列表高级搜索展开
$(function () {
    $(".m-tab-tt .z-sh .a-dj").click(function () {
		$(this).children().children('i').toggleClass("icon-double-angle-down  icon-double-angle-up");
		$(this).parents().parents().children().children().children('.senior-sch').slideToggle(10);
		$(this).parents().children('.z-sch-int').slideToggle(1);
		
    });
});
//列表tab 展开
$(function () {
    $(".table tr .z-sel a").click(function () {
   	 	$(this).children('i').toggleClass("icon-angle-down  icon-angle-up");
		$(this).parent().parent().parent().children('.tr-hid').slideToggle(1);
    });
});	

//快捷入口 老版
//$(function(){
//$(".m-chtab").click(function () {
//              $(".m-chtab").each(function () {
//                  $(this).removeClass("z-current");
//              });
//              $(this).addClass("z-current");
//          });
//$('.m-chtab').click(function(){
//var index=$('.m-chtab').index(this);


//快捷入口 tab  5.7新加
$(function(){
$("#new-table").on('click', 'ul',function () {
                $("#new-table ul").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
            });
//$('#new-table ul').click(function(){
//var index=$('#new-table ul').index(this);
//  if(index==0){
//   $('#mtab1').show();
//	 $('#mtab2').hide();
//	 $('#mtab3').hide();
//	 $('#mtab4').hide();
//	 $('#mtab5').hide();
//	 $('#mtab6').hide();
//	 $('#mtab7').hide();
//	 $('#mtab8').hide();
//	 $('#mtab9').hide();
//	 $('#mtab10').hide();
// }
// if(index==1){
//   $('#mtab2').show();
//	 $('#mtab1').hide();
//	 $('#mtab3').hide();
//	 $('#mtab4').hide();
//	 $('#mtab5').hide();
//	 $('#mtab6').hide();
//	 $('#mtab7').hide();
//	 $('#mtab8').hide();
//	 $('#mtab9').hide();
//	 $('#mtab10').hide();
// }
// if(index==2){
//   $('#mtab3').show();
//	 $('#mtab2').hide();
//	 $('#mtab1').hide();
//	 $('#mtab4').hide();
//	 $('#mtab5').hide();
//	 $('#mtab6').hide();
//	 $('#mtab7').hide();
//	 $('#mtab8').hide();
//	 $('#mtab9').hide();
//	 $('#mtab10').hide();
// }
// if(index==3){
//   $('#mtab4').show();
//	 $('#mtab3').hide();
//	 $('#mtab2').hide();
//	 $('#mtab1').hide();
//	 $('#mtab5').hide();
//	 $('#mtab6').hide();
//	 $('#mtab7').hide();
//	 $('#mtab8').hide();
//	 $('#mtab9').hide();
//	 $('#mtab10').hide();
// }
// if(index==4){
//   $('#mtab5').show();
//	 $('#mtab4').hide();
//	 $('#mtab3').hide();
//	 $('#mtab2').hide();
//	 $('#mtab1').hide();
//	 $('#mtab6').hide();
//	 $('#mtab7').hide();
//	 $('#mtab8').hide();
//	 $('#mtab9').hide();
//	 $('#mtab10').hide();
// }
// if(index==5){
//   $('#mtab6').show();
//	 $('#mtab2').hide();
//	 $('#mtab3').hide();
//	 $('#mtab4').hide();
//	 $('#mtab5').hide();
//	 $('#mtab1').hide();
//	 $('#mtab7').hide();
//	 $('#mtab8').hide();
//	 $('#mtab9').hide();
//	 $('#mtab10').hide();
// }
// if(index==6){
//   $('#mtab7').show();
//	 $('#mtab2').hide();
//	 $('#mtab3').hide();
//	 $('#mtab4').hide();
//	 $('#mtab5').hide();
//	 $('#mtab1').hide();
//	 $('#mtab6').hide();
//	 $('#mtab8').hide();
//	 $('#mtab9').hide();
//	 $('#mtab10').hide();
// }
// if(index==7){
//   $('#mtab8').show();
//	 $('#mtab2').hide();
//	 $('#mtab3').hide();
//	 $('#mtab4').hide();
//	 $('#mtab5').hide();
//	 $('#mtab1').hide();
//	 $('#mtab6').hide();
//	 $('#mtab7').hide();
//	 $('#mtab9').hide();
//	 $('#mtab10').hide();
// }
// if(index==8){
//   $('#mtab9').show();
//	 $('#mtab2').hide();
//	 $('#mtab3').hide();
//	 $('#mtab4').hide();
//	 $('#mtab5').hide();
//	 $('#mtab1').hide();
//	 $('#mtab6').hide();
//	 $('#mtab7').hide();
//	 $('#mtab8').hide();
//	 $('#mtab10').hide();
// }
//  if(index==9){
//   $('#mtab10').show();
//	 $('#mtab2').hide();
//	 $('#mtab3').hide();
//	 $('#mtab4').hide();
//	 $('#mtab5').hide();
//	 $('#mtab1').hide();
//	 $('#mtab6').hide();
//	 $('#mtab7').hide();
//	 $('#mtab8').hide();
//	 $('#mtab9').hide();
// }
//}); 
            
            
            
});

//$(document).ready(function(){
//  var a = $(".m-dot-left").height();
//  $(".m-dot-left").css("height",a);
//});

//自有实体
$(function () {
    var st = 100;
	$(document).on('click', '#file-one', function () {
		$('#file-show2').removeClass("webuploader-element-invisible");
		$('#file-show1').addClass("webuploader-element-invisible");
		$('#file-show2').show(1);
	})
	$(document).on('click', '#file-btn1', function () {
		$('#file-show4').removeClass("webuploader-element-invisible");
		$('#file-show3').addClass("webuploader-element-invisible");
		$('#file-show4').show(1);
	})
	$(document).on('click', '#file-btn2', function () {
		$('#file-show6').removeClass("webuploader-element-invisible");
		$('#file-show5').addClass("webuploader-element-invisible");
		$('#file-show6').show(1);
	})
	$(document).on('click', '#file-btn3', function () {
		$('#file-show8').removeClass("webuploader-element-invisible");
		$('#file-show7').addClass("webuploader-element-invisible");
		$('#file-show7').show(1);
	})
    
    $('.file-img ul li a').click(function () {
		$(this).parent('li').hide(1);
    })
    $('.m-xz-tab .table tr td i').click(function () {
		$(this).parent().parent('tr').remove();
    })
    $('#stp1-btn').click(function () {
		$('#stp2').show(1);
		$('#stp1').hide(1);
    })
     $('#stp2-btn').click(function () {
		$('#stp3').show(1);
		$('#stp2').hide(1);
    })
     $('#stp3-btn').click(function () {
		$('#stp4').show(1);
		$('#stp3').hide(1);
    })
     $('#stp4-btn').click(function () {
		$('#stp5').show(1);
		$('#stp4').hide(1);
    })
     $('#block2-btn').click(function () {
		$('#stp1').show(1);
		$('#stp2').hide(1);
    })
    $('#block3-btn').click(function () {
		$('#stp2').show(1);
		$('#stp3').hide(1);
    })
    $('#block4-btn').click(function () {
		$('#stp3').show(1);
		$('#stp4').hide(1);
    })
     $('#block5-btn').click(function () {
		$('#stp4').show(1);
		$('#stp5').hide(1);
    })
    $('#stp6-btn').click(function () {
		$('#stp7').show(1);
		$('#stp6').hide(1);
    })
    $('#block7-btn').click(function () {
		$('#stp6').show(1);
		$('#stp7').hide(1);
    })
     $('#stp7-btn').click(function () {
		$('#stp8').show(1);
		$('#stp7').hide(1);
    })
    $('#block8-btn').click(function () {
		$('#stp7').show(1);
		$('#stp8').hide(1);
    })
     $('#stp8-btn').click(function () {
		$('#stp9').show(1);
		$('#stp8').hide(1);
    })
    $('#block9-btn').click(function () {
		$('#stp8').show(1);
		$('#stp9').hide(1);
    })
});

//新增自有实体 tab
$(function(){
$("#step .adopt-green-border").click(function () {
                $("#step .adopt-green-border").each(function () {
                    $(this).removeClass("#step adopt-green-bj");
                });
                $(this).addClass("#step adopt-green-bj");
            });
$('#step .adopt-green-border').click(function(){
  var index=$('#step .adopt-green-border').index(this);
    if(index==0){
     $('#stp-tab1').show();
  	 $('#stp-tab2').hide();
  	 $('#stp-tab3').hide();
  	 $('#stp-tab4').hide();
  	 $('#stp-tab5').hide();
  	 $('#stp-tab6').hide();
  	 $('#stp-tab7').hide();
   }
   if(index==1){
     $('#stp-tab2').show();
  	 $('#stp-tab1').hide();
  	 $('#stp-tab3').hide();
  	 $('#stp-tab4').hide();
  	 $('#stp-tab5').hide();
  	 $('#stp-tab6').hide();
  	 $('#stp-tab7').hide();
   }
   if(index==2){
     $('#stp-tab3').show();
  	 $('#stp-tab1').hide();
  	 $('#stp-tab2').hide();
  	 $('#stp-tab4').hide();
  	 $('#stp-tab5').hide();
  	 $('#stp-tab6').hide();
  	 $('#stp-tab7').hide();
   }
   if(index==3){
     $('#stp-tab4').show();
  	 $('#stp-tab3').hide();
  	 $('#stp-tab2').hide();
  	 $('#stp-tab1').hide();
  	 $('#stp-tab5').hide();
  	 $('#stp-tab6').hide();
  	 $('#stp-tab7').hide();
   }
   if(index==4){
     $('#stp-tab5').show();
  	 $('#stp-tab3').hide();
  	 $('#stp-tab2').hide();
  	 $('#stp-tab1').hide();
  	 $('#stp-tab4').hide();
  	 $('#stp-tab6').hide();
  	 $('#stp-tab7').hide();	 
   }
   if(index==5){
     $('#stp-tab6').show();
  	 $('#stp-tab3').hide();
  	 $('#stp-tab2').hide();
  	 $('#stp-tab1').hide();
  	 $('#stp-tab4').hide();
  	 $('#stp-tab5').hide();
  	 $('#stp-tab7').hide();	 
   }
   if(index==6){
     $('#stp-tab7').show();
  	 $('#stp-tab3').hide();
  	 $('#stp-tab2').hide();
  	 $('#stp-tab1').hide();
  	 $('#stp-tab4').hide();
  	 $('#stp-tab6').hide();
  	 $('#stp-tab5').hide();	 
   }
  }); 
});

//渠道网点分配
$(function () {
    $(".m-dot-left-sch .m-more a").click(function () {
		$(this).children('i').toggleClass("icon-double-angle-down  icon-double-angle-up");
		$(this).parent().parent().parent().parent().children('.dot-senior').slideToggle(10);
		$(this).parent().parent().parent().children('.sh-hid').slideToggle(1);
		
    });
});
//网点分配
$(function () {
   var st = 100;
	$(".m-dot-list").on('click','.m-fp-tab', function () {
		if($(this).parent().siblings(".m-dot-left-sch").find(".m-my").hasClass("myCheck")) {
			$(this).children().children('.z-icon2').toggle(0);
			$(this).children().children('.z-icon1').toggle(0);
			// $(this).addClass("z-crt");
			$(this).toggleClass("z-crt");
		}else {
			$(".m-fp-tab").each(function () {
				$(this).removeClass("z-crt");
			});
			$(this).addClass("z-crt");
		}

	});

	$(".m-my").click(function () {
		$(this).toggleClass("myCheck");
		if($(this).hasClass("myCheck")) {
			$(this).parents("div").siblings(".m-dot-list").find(".m-fp-tab").each(function () {
				$(this).removeClass("z-crt");
			});
			$(this).parents("div").siblings(".m-dot-list").find('.m-fp-tab .z-icon2').hide();
			$(this).parents("div").siblings(".m-dot-list").find('.m-fp-tab .z-icon1').show();
		} else {
			$(this).parents("div").siblings(".m-dot-list").find(".m-fp-tab").each(function () {
				$(this).removeClass("z-crt");
				$(this).children().children('.z-icon2').css('display','');
				$(this).children().children('.z-icon1').css('display','');
			});
		}

	});
         
});
//新增自有实体 tab
$(function(){
$(".m-dot-left-table ul li").click(function () {
                $(".m-dot-left-table ul li").each(function () {
                    $(this).removeClass("current");
                });
                $(this).addClass("current");
            });
$('.m-dot-left-table ul li').click(function(){
  var index=$('.m-dot-left-table ul li').index(this);
    if(index==0){
     $('#dotbab1').show();
  	 $('#dotbab2').hide();
  	 $('#dotbab3').hide();
  	 $('#dotbab4').hide();
   }
   if(index==1){
     $('#dotbab2').show();
  	 $('#dotbab1').hide();
  	 $('#dotbab3').hide();
  	 $('#dotbab4').hide();
   }
   if(index==2){
     $('#dotbab3').show();
  	 $('#dotbab2').hide();
  	 $('#dotbab1').hide();
  	 $('#dotbab4').hide();
   }
   if(index==3){
     $('#dotbab4').show();
  	 $('#dotbab3').hide();
  	 $('#dotbab2').hide();
  	 $('#dotbab1').hide();
   }
  }); 
});
//渠道分组
$(function () {
   var st = 100;
   $(".eject-grouping ul li").click(function () { 
       $(this).toggleClass("current");
    });  
});
//巡店任务明细左侧 展开
$(function () {
    $(".ins-tab p").click(function () {
   	 	$(this).children('i').toggleClass("icon-angle-down  icon-angle-up");
		$(this).parent().children('.ins-tab ul').slideToggle(1);
    });
    $(".ins-tab ul li a").click(function () {
         $('.ins-tab ul').hide(1);
      });	
});	
//巡店任务明细左侧 选择
$(function () {
   var st = 100;
   $(".m-rw-tab").click(function () {
                $(".m-rw-tab").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
   });  
});
//新增自有实体 tab
$(function(){
$(".eject-tt ul li").click(function () {
                $(".eject-tt ul li").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
            });
$('.eject-tt ul li').click(function(){
  var index=$('.eject-tt ul li').index(this);
    if(index==0){
     $('#shtab1').show();
  	 $('#shtab2').hide();
  	 $('#shtab3').hide();
   }
   if(index==1){
     $('#shtab2').show();
  	 $('#shtab3').hide();
  	 $('#shtab1').hide();
   }
   if(index==2){
     $('#shtab3').show();
  	 $('#shtab2').hide();
  	 $('#shtab1').hide();
   }
  }); 
});

//新增渠道 图片放大功能
$(function(){	
     var x = 22;
	  var y = 20;

	$(document).on("mouseover mouseout", 'a.smallimage', function(event){
		if(event.type == "mouseover"){
			//鼠标悬浮
			$("body").append('<p id="bigimage"><img src="'+ this.rel + '" alt="" /></p>');
			$(this).find('img').stop().fadeTo('slow',0.5);
			widthJudge(event);
			$("#bigimage").fadeIn('fast');
		}else if(event.type == "mouseout"){
			// widthJudge(event);
			//鼠标离开
			$(this).find('img').stop().fadeTo('slow',1);
			$("#bigimage").remove();
		}
	})

	$(document).on("mousemove",'a.smallimage', function(event){
		widthJudge(event);
	})
	
    function widthJudge(e){
		var marginRight = document.documentElement.clientWidth - e.pageX; 
		var imageWidth = $("#bigimage").width();
		if(marginRight < imageWidth)
		{
		    x = imageWidth + 22;
			$("#bigimage").css({top:(e.pageY - y ) + 'px',left:(e.pageX - x ) + 'px'});	
		}else{
		    x = 22;
		    $("#bigimage").css({top:(e.pageY - y ) + 'px',left:(e.pageX + x ) + 'px'});
        }
		// 解决图片在页面底部时放大图片显示不全
        var dotRightHeight = $("#appInfoBox .m-dot-right").height();
        var pageY = e.pageY;
        if(dotRightHeight && pageY && parseInt(dotRightHeight) - parseInt(pageY) < 260){
        	$("#bigimage").css({top:(e.pageY - 260 ) + 'px'});
    	}		
	}
});



//我的工作 展开

//门户 点击选择城市
$(function () {
 $(".m-chart-tt .p-pos").click(function(event){
        var e=window.event || event;
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble = true;
        }   
        $(this).parents().parent().children(".m-ztree").slideToggle(1);
       $(this).children('i').toggleClass("icon-caret-down  icon-caret-up");
    });
$(".m-wk-tt-bt .p-pos").click(function(event){
        var e=window.event || event;
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble = true;
        }   
        $(this).parent().children(".m-ztree").slideToggle(1);
       $(this).children('i').toggleClass("icon-caret-down  icon-caret-up");
    });        
$(".wk-rt-tt .p-pos").click(function(event){
        var e=window.event || event;
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble = true;
        }   
        $(this).parents().parent().children(".m-ztree").slideToggle(1);
       $(this).children('i').toggleClass("icon-caret-down  icon-caret-up");
    });

 $(".m-ztree").click(function(event){
        var e=window.event || event;
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble = true;
        }
    });
});
//任务跟踪
$(function () {
   var st = 100;
   $(".z-senior-sch ul li p a").click(function () { 
       $(this).toggleClass("z-crt");
   });       
});
//列表高级搜索展开
$(function () {
    $(".m-trk-tt .right a").click(function () {
		$(this).children().children('i').toggleClass("icon-double-angle-down  icon-double-angle-up");
		$(this).parents().parents().children().children().children('.z-senior-sch').slideToggle(10);
		$(this).parents().children('.z-sch-int').slideToggle(1);
		
    });
});

//巡店管理 走访任务
$(function () {
   var st = 100;
   $(".p-mr p").click(function () {
         $(".p-mr p").each(function () {
            $(this).removeClass("z-crt");
           });
         $(this).addClass("z-crt");
     });  
});

//走访任务
$(function () {
   var st = 100;
   $(".m-we-lst-ct-left ul li").mouseenter(function () { 
       $(this).children(".m-we-lst-ct-left ul li label").show(1);
   });     
   $('.m-we-lst-ct-left ul li').mouseleave(function () {
        $(this).children(".m-we-lst-ct-left ul li label").hide(1);
    });	
});
//新增自有实体 tab
$(function(){
$(".m-vis-tab-lst ul li p").click(function () {
                $(".m-vis-tab-lst ul li  p").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
            });
$('.m-vis-tab-lst ul li  p').click(function(){
  var index=$('.m-vis-tab-lst ul li  p').index(this);
    if(index==0){
     $('#vtab1').show();
  	 $('#vtab2').hide();
  	 $('#vtab3').hide();
   }
   if(index==1){
     $('#vtab2').show();
  	 $('#vtab1').hide();
  	 $('#vtab3').hide();
   }
   if(index==2){
     $('#vtab3').show();
  	 $('#vtab2').hide();
  	 $('#vtab1').hide();
   }
  }); 
});
//走访任务弹出选择
$(function () {
   var st = 100;
   $(".ejct-lt-lst ul").click(function () { 
       $(this).toggleClass("z-crt");
   });       
});
$(function () {
   var st = 100;
   $(".m-ejct-rt ul li i").click(function () { 
       $(this).parent().parent('.m-ejct-rt ul').remove();
   });       
});
//选择指标 筛选
$(function () {
   var st = 100;
   $(".ejct-lt-tt ul li .ch-wh span").click(function () { 
       $(this).toggleClass("z-crt");
   });       
});
//走访非走访切换
//$(function () {
// $("#re-fzf").click(function () { 
//     $('#re-tab1').hide(1);
//     $('#re-tab2').show(1);
//     $('#zftab1').hide(1);
//     $('#zftab2').show(1);
// });     
// $("#re-zf").click(function () { 
//     $('#re-tab2').hide(1);
//     $('#re-tab1').show(1);
//     $('#zftab2').hide(1);
//     $('#zftab1').show(1);
// });     
//});
//渠道基础管理审批 筛选
$(function () {
   var st = 100;
   $(".m-dot-wd ul li p").click(function () { 
       $(this).toggleClass("z-crt");
   });       
});
//新增自有实体 tab
$(function(){
$(".m-dot-right-title p").click(function () {
                $(".m-dot-right-title p").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
            });
$('.m-dot-right-title p').click(function(){
  var index=$('.m-dot-right-title p').index(this);
    if(index==0){
     $('#extab1').show();
  	 $('#extab2').hide();
   }
   if(index==1){
     $('#extab2').show();
  	 $('#extab1').hide();
   }
    if(index==2){
     $('#extab3').show();
  	 $('#extab4').hide();
   }
   if(index==3){
     $('#extab4').show();
  	 $('#extab3').hide();
   }
  }); 
});
//工作台 删除
// $(function () {
//    var st = 100;
//    $(".m-wk-tt-rt ul li label").click(function () { 
//         $(this).parent(".m-wk-tt-rt ul li ").hide(1);
//         $(this).parent().parent().children(".m-wk-tt-rt ul a").show(1);
//    });      
   
// });
//巡店管理 检查配置
$(function () {
   var st = 100;
   $(".m-cong-lst").click(function () {
   	 $(this).toggleClass("cong-lst-zrt");
//       $(".m-cong-lst").each(function () {
//          $(this).removeClass("cong-lst-zrt");
//         });
        
    }); 
//   $(".m-cong-lst-rt-tt .abtn").click(function () {
//   	$(this).parents().parent().children('.m-cong-lst-lt').addClass("lt-lst-crt");
//       $(this).parent().children('.abtn').hide();
//       $(this).parent().children(".bbtn").show(1);
//       
//  });
////    $(".m-cong-lst-rt-tt .bbtn").click(function () {
////       $(this).parent().children('.bbtn').hide(1);
////       $(this).parent().children(".abtn").show(1);
////       $(this).parents().parent().children('.m-cong-lst-lt').removeClass("lt-lst-crt");
////  });
   $(".sle-btn").click(function () { 
        $('.m-cong-lst').toggleClass("cong-lst-zrt");
   }); 
    $(".eb-btn").click(function () { 
        $('.cong-lst-zrt').children('.m-cong-lst-lt').addClass("lt-lst-crt");
        $('.cong-lst-zrt').children().children().children(".abtn").show(1);
        $('.cong-lst-zrt').children().children().children(".bbtn").hide(1);
   }); 
     $(".db-btn").click(function () { 
        $('.cong-lst-zrt').children('.lt-lst-crt').removeClass("lt-lst-crt");
        $('.lt-lst-crt').children(".bbtn").show(1);
        $('.lt-lst-crt').children(".abtn").hide(1);
        $('.cong-lst-zrt').children().children().children(".bbtn").show(1);
        $('.cong-lst-zrt').children().children().children(".abtn").hide(1); 
   }); 
});
//巡店管理 检查配置 弹出单选
$(function(){
$(".ej-inspect .m-rid p span").click(function () {
                $(".ej-inspect .m-rid p span").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
            });
$('.ej-inspect .m-rid p span').click(function(){
  var index=$('.ej-inspect .m-rid p span').index(this);
    if(index==0){
     $('#intab1').show();
  	 $('#intab2').hide();
   }
   if(index==1){
     $('#intab2').show();
  	 $('#intab1').hide();
   }
  }); 
});

//工作台 kpi指标
$(function(){
$(".kpi-tb ul li").click(function () {
                $(".kpi-tb ul li").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
            });
$('.kpi-tb ul li').click(function(){
  var index=$('.kpi-tb ul li').index(this);
    if(index==0){
     $('#kpitab1').show();
  	 $('#kpitab2').hide();
  	 $('#kpitab3').hide();
  	 $('#kpitab4').hide();
  	 $('#kpitab5').hide();
  	 $('#kpitab6').hide();
  	 $('#kpitab7').hide();
  	 $('#kpitab8').hide();
   }
    if(index==1){
     $('#kpitab2').show();
  	 $('#kpitab1').hide();
  	 $('#kpitab3').hide();
  	 $('#kpitab4').hide();
  	 $('#kpitab5').hide();
  	 $('#kpitab6').hide();
  	 $('#kpitab7').hide();
  	 $('#kpitab8').hide();
   }
   if(index==2){
     $('#kpitab3').show();
  	 $('#kpitab1').hide();
  	 $('#kpitab2').hide();
  	 $('#kpitab4').hide();
  	 $('#kpitab5').hide();
  	 $('#kpitab6').hide();
  	 $('#kpitab7').hide();
  	 $('#kpitab8').hide();
   }
   if(index==3){
     $('#kpitab4').show();
  	 $('#kpitab1').hide();
  	 $('#kpitab2').hide();
  	 $('#kpitab3').hide();
  	 $('#kpitab5').hide();
  	 $('#kpitab6').hide();
  	 $('#kpitab7').hide();
  	 $('#kpitab8').hide();
   }
   if(index==4){
     $('#kpitab5').show();
  	 $('#kpitab1').hide();
  	 $('#kpitab2').hide();
  	 $('#kpitab3').hide();
  	 $('#kpitab4').hide();
  	 $('#kpitab6').hide();
  	 $('#kpitab7').hide();
  	 $('#kpitab8').hide();
   }
   if(index==5){
     $('#kpitab6').show();
  	 $('#kpitab1').hide();
  	 $('#kpitab2').hide();
  	 $('#kpitab3').hide();
  	 $('#kpitab4').hide();
  	 $('#kpitab5').hide();
  	 $('#kpitab7').hide();
  	 $('#kpitab8').hide();
   }
   if(index==6){
     $('#kpitab7').show();
  	 $('#kpitab1').hide();
  	 $('#kpitab2').hide();
  	 $('#kpitab3').hide();
  	 $('#kpitab4').hide();
  	 $('#kpitab5').hide();
  	 $('#kpitab6').hide();
  	 $('#kpitab8').hide();
   }
   if(index==7){
     $('#kpitab8').show();
  	 $('#kpitab1').hide();
  	 $('#kpitab2').hide();
  	 $('#kpitab3').hide();
  	 $('#kpitab4').hide();
  	 $('#kpitab5').hide();
  	 $('#kpitab6').hide();
  	 $('#kpitab7').hide();
   }
  }); 
});
//任务跟踪列表删除
$(function () {
   var st = 100;
   $(".cls-icon").click(function () { 
       $(this).parents().parent('.m-trk-lst-ct').remove();
   });       
});
//我的消息列表展开
$(function () {
    $(".news-lst-tt ul").click(function () {
    	$(this).children('.rt').children().children('i').toggleClass("icon-angle-down  icon-angle-up");
    $(this).parents().children(".news-lst-ct").slideToggle(1).end().siblings(".news-lst-warp").children(".z-tx").hide();
	$(this).children('.rt').children(".bd").show(1);
    });
    $(".news-lst-tt ul").click(function () {
         $(".news-lst-tt ul").each(function () {
            $(this).removeClass("bj");
           });
         $(this).toggleClass("bj");
     }); 
});
//我的消息tab
$(function(){
$(".news-lst-tab ul li").click(function () {
                $(".news-lst-tab ul li").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
            });
$('.news-lst-tab ul li').click(function(){
  var index=$('.news-lst-tab ul li').index(this);
    if(index==0){
     $('#netab1').show();
  	 $('#netab2').hide();
   }
   if(index==1){
     $('#netab2').show();
  	 $('#netab1').hide();
   }
  }); 
});
//走访任务
$(function(){
$("#wk-list-tab ul li").click(function () {
                $("#wk-list-tab ul li").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
            });
$('#wk-list-tab ul li').click(function(){
  var index=$('#wk-list-tab ul li').index(this);
    if(index==0){
     $('#zftab1').show();
  	 $('#zftab2').hide();
   }
   if(index==1){
     $('#zftab2').show();
  	 $('#zftab1').hide();
   }
  }); 
});
//渠道资料管理删除
$(function () {
   var st = 100;
   $(".new-l-menu ul span").click(function () { 
       $(this).parent('#new-table ul').remove();
   });       
});

//
$(function () {
// $(".m-vis-fm ul .z-xz-zq").click(function () { 
//     $('.bl-da').slideToggle(1);
// });  
    $('.m-vis-fm ul .z-xz-zq').click(function (event) {  
         //取消事件冒泡  
         event.stopPropagation();  
         //按钮的toggle,如果div是可见的,点击按钮切换为隐藏的;如果是隐藏的,切换为可见的。  
         $('.bl-da').slideToggle(1);  
		 return false;
     });  
     //点击空白处隐藏弹出层，下面为滑动消失效果和淡出消失效果。
	 $(document).click(function(event){
		  var _con = $('.bl-da');   // 设置目标区域
		  if(!_con.is(event.target) && _con.has(event.target).length === 0){ // Mark 1
			//$('#divTop').slideUp('slow');   //滑动消失
			$('.bl-da').hide(1);          //淡出消失
		  }
	});
    $(".m-vis-fm ul .z-xz-zq .bl-da #dt2").click(function () { 
    	 $('#lsthid').hide();
    	 $('#int-dthid').hide();
    	 $('#int-wh').addClass('int170');
    });
     $(".m-vis-fm ul .z-xz-zq .bl-da #dt1").click(function () { 
    	 $('#lsthid').show();
    	 $('#int-dthid').show();
    	 $('#int-wh').removeClass('int170');
    });
});
//限制字符个数
$(document).ready(function(){
$('.m-ejct-rt ul li .wd').each(function(){
var maxwidth=46;
if($(this).text().length>maxwidth){
$(this).text($(this).text().substring(0,maxwidth));
$(this).html($(this).html()+'…');
}
});
$('.m-ejct-rt ul li .ct-wd').each(function(){
var maxwidth=23;
if($(this).text().length>maxwidth){
$(this).text($(this).text().substring(0,maxwidth));
$(this).html($(this).html()+'…');
}
});
$('.ejct-lt-lst ul li .wd-xq').each(function(){
var maxwidth=43;
if($(this).text().length>maxwidth){
$(this).text($(this).text().substring(0,maxwidth));
$(this).html($(this).html()+'…');
}
});
$('.wk-rt-list ul li .wodr-wh').each(function(){
var maxwidth=12;
if($(this).text().length>maxwidth){
$(this).text($(this).text().substring(0,maxwidth));
$(this).html($(this).html()+'…');
}
});
$('.add-lst-ct ul li .bt').each(function(){
var maxwidth=5;
if($(this).text().length>maxwidth){
$(this).text($(this).text().substring(0,maxwidth));
$(this).html($(this).html()+'…');
}
});
$('.kh-ct-wap ul li .bt').each(function(){
var maxwidth=10;
if($(this).text().length>maxwidth){
$(this).text($(this).text().substring(0,maxwidth));
$(this).html($(this).html()+'…');
}
});
$('.m-result-lst-ct ul li .bt').each(function(){
var maxwidth=10;
if($(this).text().length>maxwidth){
$(this).text($(this).text().substring(0,maxwidth));
$(this).html($(this).html()+'…');
}
});
});

//我的工作下拉 5.7新加
$(function () {
   $("#m-nav-user ul .m-work").click(function(event){
        var e=window.event || event;
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble = true;
        }   
        $(".ej-ejwk").slideToggle(1);
        $(".uer-lt").hide(1);
       $(this).children('i').toggleClass("icon-caret-down  icon-caret-up");
       $('#m-list2').hide(1);
    });
    $(".ej-ejwk").click(function(event){
        var e=window.event || event;
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble = true;
        }
		$(".ej-ejwk").slideToggle(1);
    });
    document.onclick = function(){
        $(".ej-ejwk").hide(1)
        $("#m-nav-user ul .m-work").children('i').attr("class", "icon-caret-down");
        $(".m-ztree").hide(1);
		$(".wk-rt-tt .p-pos").children('i').attr("class", "icon-caret-down");
		$(".uer-lt").hide(1);
		$("#m-nav-user ul .usr").children().children('i').attr("class", "icon-angle-down");
//		$(".hn-ztree").hide(1);
//		$(".hn-store").hide(1);
		$(".hn-subm-obj .monthly-choice dl").hide(1);
    };
});	


//我的工作 展开
//$(function () {
//  $(".m-snav-left ul .m-work").click(function () {
// 	 	$(this).children('i').toggleClass(" icon-caret-down  icon-caret-up");
//		$(this).parent().parent().parent().children('.m-ejwk').slideToggle(1);
//  });
//});	
//星级配置
$(function(){
$("#srtatab ul").click(function () {
                $("#srtatab ul").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
            });
$('#srtatab ul').click(function(){
  var index=$('#srtatab ul').index(this);
    if(index==0){
     $('#srarlst1').show();
  	 $('#srarlst2').hide();
  	 $('#srarlst3').hide();
  	 $('#srarlst4').hide();
  	 $('#srarlst5').hide();
  	 $('#srarlst6').hide();
   }
   if(index==1){
     $('#srarlst2').show();
  	 $('#srarlst1').hide();
  	 $('#srarlst3').hide();
  	 $('#srarlst4').hide();
  	 $('#srarlst5').hide();
  	 $('#srarlst6').hide();
   }
   if(index==2){
     $('#srarlst3').show();
  	 $('#srarlst2').hide();
  	 $('#srarlst1').hide();
  	 $('#srarlst4').hide();
  	 $('#srarlst5').hide();
  	 $('#srarlst6').hide();
   }
   if(index==3){
     $('#srarlst4').show();
  	 $('#srarlst2').hide();
  	 $('#srarlst3').hide();
  	 $('#srarlst1').hide();
  	 $('#srarlst5').hide();
  	 $('#srarlst6').hide();
   }
   if(index==4){
     $('#srarlst5').show();
  	 $('#srarlst2').hide();
  	 $('#srarlst3').hide();
  	 $('#srarlst4').hide();
  	 $('#srarlst1').hide();
  	 $('#srarlst6').hide();
   }
   if(index==5){
     $('#srarlst6').show();
  	 $('#srarlst2').hide();
  	 $('#srarlst3').hide();
  	 $('#srarlst4').hide();
  	 $('#srarlst5').hide();
  	 $('#srarlst1').hide();
   }
  }); 
});


//星级查询点开
$(function () {
    $(".sh-ct-nb-tt .rt .lv-sh").click(function () {
		$(this).children().children('i').toggleClass("icon-double-angle-down  icon-double-angle-up");
		$(this).parents().parents().children().children().children('.z-senior-sch').slideToggle(10);
		$(this).parent().children('.sh-int').slideToggle(1);	
    });
});
//地市翻牌效果
$(function(){
	$(".m-add-view").hover(
		function(){
			var that=this;
			item2Timer=setTimeout(function(){
				$(that).find('.contcity').slideDown(300);
				$(that).find('.contlst').fadeOut(200);
			},100);
			
		},
		function(){
			var that=this;
			clearTimeout(item2Timer);
			$(that).find('.contcity').slideUp(300);
			$(that).find('.contlst').fadeIn(200);
		}
	);
});

//星级规则指标删除
$(function () {
   var st = 100;
   $(".star-close").click(function () { 
       $(this).parents().parent('.add-star-bd').remove();
   });  
   $(".iclose").click(function () { 
       $(this).parents('p').remove();
   });  
});
//指标单选
$(function(){
$(".add-star-radio p").click(function () {
                $(".add-star-radio p").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
            });
$('.add-star-radio p').click(function(){
  var index=$('.add-star-radio p').index(this);
    if(index==0){
     $('#srarlst1').show();
  	 $('#srarlst2').hide();
   }
   if(index==1){
     $('#srarlst2').show();
  	 $('#srarlst1').hide();
   }

  }); 
});
//星级查询 添加指标弹出
$(function () {
  $(".ej-add-zblst ul").click(function () {
       $(".ej-add-zblst ul").each(function () {
            $(this).removeClass("z-crt");
        });
        $(this).addClass("z-crt");
    });
   $(".ej-add-zblst ul").click(function () { 
       $(this).children().children("i").toggleClass("greenicon");
   });       
});


//门户菜单删除
$(function () {
   var st = 100;
   $(".m-wk-quick-rt ul label").click(function () { 
       $(this).parent('.m-wk-quick-rt  ul').remove();
   });       
});

//商圈高级搜索展开
$(function () {
    $(".m-trk-tt .right a").click(function () {
		$(this).children('i').toggleClass("icon-double-angle-down  icon-double-angle-up");
		$(this).parents().parents().children().children().children('.z-senior-fm').slideToggle(10);	
    });
});

//商圈级别配置文字显示
$(function () {
   $(".trading-lst table .word-wh p").mouseenter(function () { 
       $(this).parents().children('span').show(1);
   });  
   $(".trading-lst table .word-wh p").mouseleave(function () { 
       $(this).parents().children('span').hide(1);
   });  
});

// 营销任务管理
$(function(){
$('#srtatab ul').click(function(){
  var index=$('#srtatab ul').index(this);
    if(index==0){
     $('#m-yxrw-cj-0').show();
     $('#m-yxrw-cj-1').hide();
     $('#m-yxrw-cj-2').hide();
     $('#m-yxrw-cj-3').hide();
   }
   if(index==1){
     $('#m-yxrw-cj-0').hide();
     $('#m-yxrw-cj-1').show();
     $('#m-yxrw-cj-2').hide();
     $('#m-yxrw-cj-3').hide();
   }
   if(index==2){
     $('#m-yxrw-cj-0').hide();
     $('#m-yxrw-cj-1').hide();
     $('#m-yxrw-cj-2').show();
     $('#m-yxrw-cj-3').hide();
   }
   if(index==3){
     $('#m-yxrw-cj-0').hide();
     $('#m-yxrw-cj-1').hide();
     $('#m-yxrw-cj-2').hide();
     $('#m-yxrw-cj-3').show();
   }
  }); 
});

//任务跟踪 tab
$(function(){
$("#tastab1 ul li").click(function () {
                $("#tastab1 ul li").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
            });
$('#tastab1 ul li').click(function(){
  var index=$('#tastab1 ul li').index(this);
    if(index==0){
     $('#tas-tab1').show();
  	 $('#tas-tab2').hide();
  	 $('#tas-tab3').hide();
   }
   if(index==1){
     $('#tas-tab2').show();
  	 $('#tas-tab1').hide();
  	 $('#tas-tab3').hide();
   }
   if(index==2){
     $('#tas-tab3').show();
  	 $('#tas-tab2').hide();
  	 $('#tas-tab1').hide();
   }
  }); 
});
//任务跟踪 tab
$(function(){
$("#tastab-yx1 ul li").click(function () {
                $("#tastab-yx1 ul li").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
            });
$('#tastab-yx1 ul li').click(function(){
//var index=$('#tastab1 ul li').index(this);
//  if(index==0){
//   $('#tas-tab1').show();
//	 $('#tas-tab2').hide();
//	 $('#tas-tab3').hide();
// }
// if(index==1){
//   $('#tas-tab2').show();
//	 $('#tas-tab1').hide();
//	 $('#tas-tab3').hide();
// }
// if(index==2){
//   $('#tas-tab3').show();
//	 $('#tas-tab2').hide();
//	 $('#tas-tab1').hide();
// }
  }); 
});
$(function(){
$("#tastab-yx2 ul li").click(function () {
                $("#tastab-yx2 ul li").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
            });
$('#tastab-yx2 ul li').click(function(){
//var index=$('#tastab1 ul li').index(this);
//  if(index==0){
//   $('#tas-tab1').show();
//	 $('#tas-tab2').hide();
//	 $('#tas-tab3').hide();
// }
// if(index==1){
//   $('#tas-tab2').show();
//	 $('#tas-tab1').hide();
//	 $('#tas-tab3').hide();
// }
// if(index==2){
//   $('#tas-tab3').show();
//	 $('#tas-tab2').hide();
//	 $('#tas-tab1').hide();
// }
  }); 
});
//任务跟踪 tab
$(function(){
$("#tastab2 ul li").click(function () {
                $("#tastab2 ul li").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
            });
$('#tastab2 ul li').click(function(){
  var index=$('#tastab2 ul li').index(this);
    if(index==0){
     $('#tas-tab4').show();
  	 $('#tas-tab5').hide();
  	 $('#tas-tab6').hide();
   }
   if(index==1){
     $('#tas-tab5').show();
  	 $('#tas-tab4').hide();
  	 $('#tas-tab6').hide();
   }
   if(index==2){
     $('#tas-tab6').show();
  	 $('#tas-tab5').hide();
  	 $('#tas-tab4').hide();
   }
  }); 
});


//星级 规则积分 tab
$(function(){
$("#rule ul li").click(function () {
                $("#rule ul li").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
            });
$('#rule ul li').click(function(){
  var index=$('#rule ul li').index(this);
    if(index==0){
     $('#rule-tb1').show();
  	 $('#rule-tb2').hide();
  	 $('#rule-tb3').hide();
  	 $('#rule-tb4').hide();
  	 $('#rule-tb5').hide();
   }
   if(index==1){
     $('#rule-tb2').show();
  	 $('#rule-tb1').hide();
  	 $('#rule-tb3').hide();
  	 $('#rule-tb4').hide();
  	 $('#rule-tb5').hide();
   }
   if(index==2){
     $('#rule-tb3').show();
  	 $('#rule-tb1').hide();
  	 $('#rule-tb2').hide();
  	 $('#rule-tb4').hide();
  	 $('#rule-tb5').hide();
   }
   if(index==3){
     $('#rule-tb4').show();
  	 $('#rule-tb1').hide();
  	 $('#rule-tb3').hide();
  	 $('#rule-tb2').hide();
  	 $('#rule-tb5').hide();
   }
   if(index==4){
     $('#rule-tb5').show();
  	 $('#rule-tb1').hide();
  	 $('#rule-tb3').hide();
  	 $('#rule-tb2').hide();
  	 $('#rule-tb4').hide();
   }
  }); 
});
$(function(){
$("#rule1 ul li").click(function () {
                $("#rule1 ul li").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
            });
$('#rule1 ul li').click(function(){
  var index=$('#rule1 ul li').index(this);
    if(index==0){
     $('#rule-sm1').show();
  	 $('#rule-sm2').hide();
   }
   if(index==1){
     $('#rule-sm2').show();
  	 $('#rule-sm1').hide();
   }
  }); 
});
//星级 评分规则 tab
$(function(){
$(".score-tb ul li").click(function () {
                $(".score-tb ul li").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
            });
$('.score-tb ul li').click(function(){
  var index=$('.score-tb ul li').index(this);
    if(index==0){
     $('#zbtba1').show();
  	 $('#zbtba2').hide();
  	 $('#zbtba3').hide();
   }
   if(index==1){
     $('#zbtba2').show();
  	 $('#zbtba1').hide();
  	 $('#zbtba3').hide();
   }
    if(index==2){
     $('#zbtba3').show();
  	 $('#zbtba2').hide();
  	 $('#zbtba1').hide();
   }
  }); 
});

//规则选择地市
$(function () {
   var st = 100;
   $(".ej-cty-lst ul li p").click(function () { 
       $(this).toggleClass("z-crt");
   }); 
    $(".ej-cty-lst ul li span").click(function () { 
    
       $(this).parent().children("p").toggleClass("z-crt");
   }); 
   $(".khcity-tt").click(function () { 
   	  $(this).children('i').toggleClass("icon-double-angle-down  icon-double-angle-up");
       $(this).parent().children("ul").slideToggle(1);
   }); 
   $(".m-vis-fm ul li #city2").click(function () { 
       $(".ej-cty-lst").slideToggle(1);
   }); 
// $(".ej-cty-lst ul li span").click(function () { 
//     $(".ej-cty-lst ul li p").toggleClass("z-crt");
// });  
});

//星级 评分规则 硬件基础得分 tab
$(function(){
$("#yj-tab ul .tabs p").click(function () {
                $("#yj-tab ul .tabs p").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
            });
$('#yj-tab ul .tabs p').click(function(){
  var index=$('#yj-tab ul .tabs p').index(this);
    if(index==0){
     $('#gztb1').show();
  	 $('#gztb2').hide();
  	 $('#gztb3').hide();
  	 $('#gztb4').hide();
  	 $('#gztb5').hide();
  	 $('#gztb6').hide();
   }
   if(index==1){
     $('#gztb2').show();
  	 $('#gztb1').hide();
  	 $('#gztb3').hide();
  	 $('#gztb4').hide();
  	 $('#gztb5').hide();
  	 $('#gztb6').hide();
   }
    if(index==2){
     $('#gztb3').show();
  	 $('#gztb2').hide();
  	 $('#gztb1').hide();
  	 $('#gztb4').hide();
  	 $('#gztb5').hide();
  	 $('#gztb6').hide();
   }
   if(index==3){
     $('#gztb4').show();
  	 $('#gztb2').hide();
  	 $('#gztb3').hide();
  	 $('#gztb1').hide();
  	 $('#gztb5').hide();
  	 $('#gztb6').hide();
   }
   if(index==4){
     $('#gztb5').show();
  	 $('#gztb2').hide();
  	 $('#gztb3').hide();
  	 $('#gztb4').hide();
  	 $('#gztb1').hide();
  	 $('#gztb6').hide();
   }
   if(index==5){
     $('#gztb6').show();
  	 $('#gztb2').hide();
  	 $('#gztb3').hide();
  	 $('#gztb4').hide();
  	 $('#gztb5').hide();
  	 $('#gztb1').hide();
   }
  }); 
});
$(function(){
$("#kf-tab ul .tabs p").click(function () {
                $("#kf-tab ul .tabs p").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
            });
$('#kf-tab ul .tabs p').click(function(){
  var index=$('#kf-tab ul .tabs p').index(this);
    if(index==0){
     $('#gztb7').show();
  	 $('#gztb8').hide();
  	 $('#gztb9').hide();
  	 $('#gztb10').hide();
   }
   if(index==1){
     $('#gztb8').show();
  	 $('#gztb7').hide();
  	 $('#gztb9').hide();
  	 $('#gztb10').hide();
   }
    if(index==2){
     $('#gztb9').show();
  	 $('#gztb8').hide();
  	 $('#gztb7').hide();
  	 $('#gztb10').hide();
   }
   if(index==3){
     $('#gztb10').show();
  	 $('#gztb9').hide();
  	 $('#gztb8').hide();
  	 $('#gztb7').hide();
   }
  }); 
});
//营销高级搜索
$(function () {
    $(".track-tab .rt .lv-sh").click(function () {
		$(this).children().children('i').toggleClass("icon-double-angle-down  icon-double-angle-up");
		$(this).parents().parents().children().children().children('.z-senior-sch').slideToggle(10);
		$(this).parent().children('.sh-int').slideToggle(1);	
    });
});
//积分规则 删除
$(function () {
   var st = 100;
   $(".add-star-bd ul li p .sq-gb").click(function () { 
       $(this).parents('li').remove();
   });       
});
//积分规则 选择
$(function(){
$(".add-star-bd .sq-lst li p .crt-bd a").click(function () {
                $(".add-star-bd .sq-lst li p .crt-bd a").each(function () {
                    $(this).removeClass("crt");
                });
                $(this).addClass("crt");
            });
});
//商圈 新增配置 tab
$(function(){
$("#sq-tab p").click(function () {
                $("#sq-tab p").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
            });
$('#sq-tab p').click(function(){
  var index=$('#sq-tab p').index(this);
    if(index==0){
     $('#sq-lst1').show();
  	 $('#sq-lst2').hide();
   }
   if(index==1){
     $('#sq-lst2').show();
  	 $('#sq-lst1').hide();
   }
  }); 
});
//$(function () {
//  var $xiding = $(".xuanf1");
//  $(window).on("scroll",function(){
//      var $this = $(this);
//      var st = $this.scrollTop();
//      if(st>0){
//	       $('.xuanf1').addClass("additional");
//	       $xiding.stop(true,true).show(1);  
//	       $(".l-hd").hide(1);
//	       $(".m-star-cty").hide(1);
//	       $(".m-trk-sch").addClass("mt-cty");
//	       
//      }  else {
//	       $xiding.stop(true,true).show(1);
//	       $('.xuanf1').removeClass("additional");
//	       $(".l-hd").show(1);
//	        $(".m-star-cty").show(1);
//	       $(".m-trk-sch").removeClass("mt-cty");
//      }
//  });
//});
//河南巡店管理  新增检查项
$(function () {
    $(".jcx-pos ul #open-mrz").click(function () {
		$(this).parent().children('.ej-mrz').slideToggle(1);	
    });
    $(".m-zf-lst-ct ul").click(function () { 
       $(this).toggleClass("z-crt");
   }); 
   $(".m-zf-lst-ct label").click(function () { 
       $(this).parent().children().children('ul').toggleClass("z-crt");
   }); 
    $(".m-zf-lst-ct label").click(function () { 
       $(this).children('i').toggleClass("i-z-crt");
   }); 
    $(".m-vis-fm ul .phone p i").click(function () { 
       $(this).parent('p').remove();
   });
});
//任务跟踪列表删除
$(function () {
   var st = 100;
   $(".ej-mrz p span i").click(function () { 
       $(this).parent().parent('p').remove();
   });       
});
$(function () {
//$(".m-routine-lst ul:last").css("border-bottom","none");
$(".ej-mrz p:last").css("border-bottom","none");
$(".m-channel-lst-ct p span:last").css("border-right","none");
});
//星级配置
$(function(){
$("#asstab ul li").click(function () {
                $("#asstab ul li").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
            });
$('#asstab ul li').click(function(){
  var index=$('#asstab ul li').index(this);
    if(index==0){
     $('#ass-tab1').show();
  	 $('#ass-tab2').hide();
  	 $('#ass-tab3').hide();
  	 $('#ass-tab4').hide();
  	 $('#ass-tab5').hide();
  	 $('#ass-tab6').hide();
   }
    if(index==1){
     $('#ass-tab2').show();
  	 $('#ass-tab1').hide();
  	 $('#ass-tab3').hide();
  	 $('#ass-tab4').hide();
  	 $('#ass-tab5').hide();
  	 $('#ass-tab6').hide();
   }
    if(index==2){
     $('#ass-tab3').show();
  	 $('#ass-tab2').hide();
  	 $('#ass-tab1').hide();
  	 $('#ass-tab4').hide();
  	 $('#ass-tab5').hide();
  	 $('#ass-tab6').hide();
   }
    if(index==3){
     $('#ass-tab4').show();
  	 $('#ass-tab2').hide();
  	 $('#ass-tab3').hide();
  	 $('#ass-tab1').hide();
  	 $('#ass-tab5').hide();
  	 $('#ass-tab6').hide();
   }
    if(index==4){
     $('#ass-tab5').show();
  	 $('#ass-tab2').hide();
  	 $('#ass-tab3').hide();
  	 $('#ass-tab4').hide();
  	 $('#ass-tab1').hide();
  	 $('#ass-tab6').hide();
   }
    if(index==5){
     $('#ass-tab6').show();
  	 $('#ass-tab2').hide();
  	 $('#ass-tab3').hide();
  	 $('#ass-tab4').hide();
  	 $('#ass-tab1').hide();
  	 $('#ass-tab5').hide();
   }
  }); 
});
// 考核渠道添加
$(function () {
   $(".m-result-lst-ct ul").click(function () { 
       $(this).toggleClass("z-crt");
   }); 
    $(".kh-ct-wap ul").click(function () { 
       $(this).toggleClass("z-crt");
   }); 
    $(".m-result-lst-tt .rt").click(function () { 
    	   $(this).children('i').toggleClass("z-crt");
       $(this).parents().children().children('ul').toggleClass("z-crt");
   });  
  $(".m-result-lst-ct ul .rt .close-rm").click(function () { 
       $(this).parent().parent('ul').remove();
   }); 
  }); 
//考核
$(function () {
    $('.m-result-lst-ct ul li').click(function () {
		$(this).parent().children('.ass-ej-xq').slideToggle(1);
    });
    $('.m-result-lst-ct ul .ass-ej-xq .amenclose-btn a').click(function () {
		$(this).parents('.ass-ej-xq').hide(1);
    });
	$('.kh-ct-wap ul').mouseenter(function () {
       $(this).children('.ass-ej-xq').show(1);
     
    });	
    $('.kh-ct-wap ul').mouseleave(function () {
       $(this).children('.ass-ej-xq').hide(1);
     
    });	
     $(".add-lst-ct ul li p i").click(function () { 
       $(this).parent('p').remove();
   });
    $(".add-lst-ct ul .w10 .cs-ic").click(function () { 
       $(this).parents('.add-lst-ct').remove();
   });
});
//考核对象维护高级搜索展开
$(function () {
    $(".assess-tab .rt .gj").click(function () {
		$(this).children('i').toggleClass("icon-double-angle-down  icon-double-angle-up");
		$(this).parents().parent().children().children().children('.m-vis-fm').slideToggle(1);
		$(this).parent().children('.sh').slideToggle(1);	
    });
     $(".m-result-lst-tt .rtb .gj").click(function () {
		$(this).children('i').toggleClass("icon-double-angle-down  icon-double-angle-up");
		$(this).parents().parent().children('.senior-sh').slideToggle(1);
		$(this).parent().children('.sh').slideToggle(1);	
    });
     $(".m-result-lst-tt .rtb .qx").click(function () { 
    	   $(this).children('i').toggleClass("z-crt");
       $(this).parents().children().children().children('.kh-ct-wap ul').toggleClass("z-crt");
   });  
   $(".m-asse-fold").click(function () {
		$(this).children().children('i').toggleClass("icon-double-angle-down  icon-double-angle-up");
		$(this).parent().children('#lstct-hid').slideToggle(1);
		$('.m-asse-fold .b').slideToggle(0);
		$('.m-asse-fold .a').slideToggle(0);
    });
     $(".m-vis-fm ul .z-down .lt i").click(function () { 
       $(this).parents('.z-down').remove();
   });
   $(".ind-lst-ct .rt i").click(function () {
        $(this).parents('ul').remove();
   	}); 
   	 $(".star-fm .yx-bj i").click(function () {
        $(this).parent('p').remove();
   	}); 
   	$(".m-vis-fm  ul .xz-df p").click(function () {
         $(".m-vis-fm  ul .xz-df p").each(function () {
             $(this).removeClass("z-crt");
             });
          $(this).addClass("z-crt");
     });  	
});
//河南巡店 任务模块新增选择
$(function () {
	$(".shop-ct-lst ul .rt p").click(function () {
       $(this).toggleClass("z-crt");	
   	}); 
   	$(".shop-cate-lt-ct ul li").click(function () {
       $(this).toggleClass("z-crt");	
   	}); 
   
    $(".shop-cate-rt-ct ul li i").click(function () { 
       $(this).parent('li').remove();
   });
   	$(".shop-cate-rt-ct ul li").click(function () {
       $(this).toggleClass("z-crt");	
   	}); 
   	$(".shop-tt-cs i").click(function () {
        $(this).parents('.shop-add-lst').remove();
   	}); 
   
});
//任务模版 tab
$(function(){
$("#xdtab1 .s-sh .date-icon p").click(function () {
                $("#xdtab1 .s-sh .date-icon p").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
            });
$('#xdtab1 .s-sh .date-icon p').click(function(){
  var index=$('#xdtab1 .s-sh .date-icon p').index(this);
    if(index==0){
     $('#shop1').show();
  	 $('#shop2').hide();
   }
   if(index==1){
     $('#shop2').show();
  	 $('#shop1').hide();
   }
  }); 
});
//任务模版 tab
$(function(){
$("#xdtab2 .s-sh .date-icon p").click(function () {
                $("#xdtab2 .s-sh .date-icon p").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
            });
$('#xdtab2 .s-sh .date-icon p').click(function(){
  var index=$('#xdtab2 .s-sh .date-icon p').index(this);
    if(index==0){
     $('#shop3').show();
  	 $('#shop4').hide();
   }
   if(index==1){
      $('#shop4').show();
  	 $('#shop3').hide();
   }
  }); 
});

//青海违规
$(function(){
 $(".m-trk-tt .rt .gj").click(function () {
		$(this).children('i').toggleClass("icon-double-angle-down  icon-double-angle-up");
		$(this).parents().parent().children().children().children('.m-xd-sh').slideToggle(1);
		$(this).parents().parent().children().children().children('#m-xd-sh').slideToggle(1);
		$(this).parents().parent().children().children().children('.z-senior-sch').slideToggle(1);
		$(this).parents().parent().children().children().children('.z-senior-fm').slideToggle(1);
		$(this).parent().children('.sh').slideToggle(1);	
    });
   	$(".m-channel-lt-lst ul").click(function () {
       $(this).children('span').toggleClass("z-crt");	
   	});  
   	$(".m-channel-lst-ct ul .rt .close-rm").click(function () { 
       $(this).parent().parent('ul').remove();
   }); 
   	$(".m-channel-lst-ct ul").click(function () { 
       $(this).toggleClass("z-crt");
   });
   	$(".upload-chan-lst ul .bd span i").click(function () { 
       $(this).parent('span').remove();
   }); 
});
//考核打分
$(function(){
	 $(".m-mark-table table tr .a-show i").click(function () { 
	 	$(this).toggleClass("icon-angle-down  icon-angle-up");
	    $(this).parents().parent().children('.tab-d').slideToggle(1);
	  }); 
	  $(".mark-add-lst-tt .rt i").click(function () { 
       $(this).parents().parent('.mark-add-lst').remove();
   }); 
   $(".appro-lst-tt ul .rt i").click(function () { 
	 	$(this).toggleClass("icon-angle-down  icon-angle-up");
	    $(this).parents().parents().children('.mark-step').slideToggle(1);
	  }); 
	
});

$(function(){
	$(".table tr  .asw .z-wd-sl").mouseenter(function () {
		$(this).parent().children('.z-wd-hid').show(1);	
    });
    $('.table tr  .asw .z-wd-sl').mouseleave(function () {
       $(this).parent().children('.z-wd-hid').hide(1);	
    });	

});

//资源
$(function(){
	 $(".resou-bt .rt .icon-double-angle-down").click(function () { 
	 	$(this).toggleClass("icon-double-angle-down  icon-double-angle-up");
	    $(this).parents().parent().children('.resou-newlst-warp').slideToggle(1);
	    $(this).parent().children('.gj-sh').slideToggle(1);
	  });
	  $(".resou-bt .rt .gj-sh a").click(function () { 
	  	$(this).parents().parents().children().children('.m-xd-sh').slideToggle(1);
	  }); 	
});	  

//省采计划 地市
$(function () {
   var st = 100;
   $(".m-xd-sh ul .x-wh .lst span").click(function () {
                $(".m-xd-sh ul .x-wh .lst span").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
   });  
});
//考核展示标题
$(function () {
    $(".add-lst-ct ul li p").mouseenter(function () {
		$(this).children('label').show(1);
    });
    $('.add-lst-ct ul li p').mouseleave(function () {
       $(this).children('label').hide(1);
    });	
});	
$(function () {
    $(".kh-ct-wap ul").mouseenter(function () {
		$(this).children('label').show(1);
    });
    $('.kh-ct-wap ul').mouseleave(function () {
       $(this).children('label').hide(1);
    });	
});	
//内蒙kpi
$(function () {
   var st = 100;
   $(".kpi-lt ul li").click(function () {
         $(".kpi-lt ul li").each(function () {
             $(this).removeClass("z-crt");
          });
     $(this).addClass("z-crt");
   });  
   $(".nmtable tr .a-show i").click(function () { 
	 	$(this).toggleClass("icon-angle-down  icon-angle-up");
	    $(this).parents().children('.tr-hd').slideToggle(1);
	  }); 
});

//青海
$(function () {
    $(".m-tab table tr .sj-hide").mouseenter(function () {
		$(this).children('label').show(1);
    });
    $('.m-tab table tr .sj-hide').mouseleave(function () {
       $(this).children('label').hide(1);
    });	
});	

//内蒙门户
$(function () {
    $(".table tr .j-plus i").click(function () {
   	 	$(this).toggleClass("icon-plus  icon-minus");
		$(this).parents().children('.remun-cs').slideToggle(1);
    });
    $(".m-chart-tt ul .shuz").click(function () {
   	 	$(this).children('i').toggleClass("icon-caret-down  icon-caret-up");
   	 	$(this).toggleClass("z-crt-bd");
		$(this).children('.qd-tabel').slideToggle(1);
    });
});	
$(function(){
$(".qd-tabel dl dt").click(function () {
                $(".qd-tabel dl dt").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
            });
$('.qd-tabel dl dt').click(function(){
  var index=$('.qd-tabel dl dt').index(this);
    if(index==0){
     $('#fa-tabel-1').show();
  	 $('#fa-tabel-2').hide();
  	 $('#fa-tabel-3').hide();
  	 $('#fa-tabel-4').hide();
  	 $('#fa-tabel-5').hide();
  	 $('#fa-tabel-6').hide();
  	 $('#fa-tabel-7').hide();
  	 $('#fa-tabel-8').hide();
   }
   if(index==1){
     $('#fa-tabel-2').show();
  	 $('#fa-tabel-1').hide();
  	 $('#fa-tabel-3').hide();
  	 $('#fa-tabel-4').hide();
  	 $('#fa-tabel-5').hide();
  	 $('#fa-tabel-6').hide();
  	 $('#fa-tabel-7').hide();
  	 $('#fa-tabel-8').hide();
   }
    if(index==2){
     $('#fa-tabel-3').show();
  	 $('#fa-tabel-1').hide();
  	 $('#fa-tabel-2').hide();
  	 $('#fa-tabel-4').hide();
  	 $('#fa-tabel-5').hide();
  	 $('#fa-tabel-6').hide();
  	 $('#fa-tabel-7').hide();
  	 $('#fa-tabel-8').hide();
   }
    if(index==3){
     $('#fa-tabel-4').show();
  	 $('#fa-tabel-1').hide();
  	 $('#fa-tabel-2').hide();
  	 $('#fa-tabel-3').hide();
  	 $('#fa-tabel-5').hide();
  	 $('#fa-tabel-6').hide();
  	 $('#fa-tabel-7').hide();
  	 $('#fa-tabel-8').hide();
   }
    if(index==4){
     $('#fa-tabel-5').show();
  	 $('#fa-tabel-1').hide();
  	 $('#fa-tabel-2').hide();
  	 $('#fa-tabel-4').hide();
  	 $('#fa-tabel-3').hide();
  	 $('#fa-tabel-6').hide();
  	 $('#fa-tabel-7').hide();
  	 $('#fa-tabel-8').hide();
   }
    if(index==5){
     $('#fa-tabel-6').show();
  	 $('#fa-tabel-1').hide();
  	 $('#fa-tabel-2').hide();
  	 $('#fa-tabel-4').hide();
  	 $('#fa-tabel-5').hide();
  	 $('#fa-tabel-3').hide();
  	 $('#fa-tabel-7').hide();
  	 $('#fa-tabel-8').hide();
   }
    if(index==6){
     $('#fa-tabel-7').show();
  	 $('#fa-tabel-1').hide();
  	 $('#fa-tabel-2').hide();
  	 $('#fa-tabel-4').hide();
  	 $('#fa-tabel-5').hide();
  	 $('#fa-tabel-6').hide();
  	 $('#fa-tabel-3').hide();
  	 $('#fa-tabel-8').hide();
   }
    if(index==7){
     $('#fa-tabel-8').show();
  	 $('#fa-tabel-1').hide();
  	 $('#fa-tabel-2').hide();
  	 $('#fa-tabel-4').hide();
  	 $('#fa-tabel-5').hide();
  	 $('#fa-tabel-6').hide();
  	 $('#fa-tabel-7').hide();
  	 $('#fa-tabel-3').hide();
   }
  });
});
$(function(){
    $(".nm-date span").click(function () {
                $(".nm-date span").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
     });
$('.nm-date span').click(function(){
  var index=$('.nm-date span').index(this);
    if(index==0){
     $('#date-big-tb1').show();
  	 $('#date-big-tb2').hide();
   }
   if(index==1){
     $('#date-big-tb2').show();
  	 $('#date-big-tb1').hide();
   }
 }); 
});
$(function(){
    $(".nm-date-cj span").click(function () {
                $(".nm-date-cj span").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
     });
$('.nm-date-cj span').click(function(){
  var index=$('.nm-date-cj span').index(this);
    if(index==0){
     $('#date-big-tb3').show();
  	 $('#date-big-tb4').hide();
   }
   if(index==1){
     $('#date-big-tb4').show();
  	 $('#date-big-tb3').hide();
   }
 }); 
});
$(function(){
    $(".nm-xs-cj span").click(function () {
                $(".nm-xs-cj span").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
     });
$('.nm-date-cj span').click(function(){
  var index=$('.nm-date-cj span').index(this);
    if(index==0){
     $('#date-big-tb3').show();
  	 $('#date-big-tb4').hide();
   }
   if(index==1){
     $('#date-big-tb4').show();
  	 $('#date-big-tb3').hide();
   }
 }); 
});

$(function(){
    $(".broad-lst-tt").click(function () {
                $(".broad-lst-tt").each(function () {
                    $(this).removeClass("zn-crt");
                });
                $(this).addClass("zn-crt");
    });
  }); 
//北京 资源
$(function(){
    $(".suspen-lst p").click(function () {
                $(".suspen-lst p").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
     });
     $(".trading-tab ul").click(function () {
                $(".trading-tab ul").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
     });
     $(".w290 ul li").click(function () {
                $(".w290 ul li").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
     });
  });    
//厅店
$(function () {
    $(".m-tab table tr .name-lst").mouseenter(function () {
		$(this).children('.tz-hid').show(1);
    });
    $('.m-tab table tr .name-lst').mouseleave(function () {
       $(this).children('.tz-hid').hide(1);
    });
     $(".m-pb-result-lst-ct ul").click(function () { 
       $(this).toggleClass("z-crt");
   }); 
   $(".m-pb-result-lst-ct ul").mouseenter(function () {
		$(this).children('.tz-hid').show(1);
    });
    $('.m-pb-result-lst-ct ul').mouseleave(function () {
       $(this).children('.tz-hid').hide(1);
    });
     $(".kq-lst ul span").click(function () {
   	 	$(this).toggleClass("z-crt");
    });
    $(".m-vis-fm ul .qd  span i").click(function () {
        $(this).parent('span').remove();
   	}); 
   	$('.tips-donw .z-crt').mouseenter(function () {
       $(this).parent().children('.tips-donw-lst').show(1);
        $(this).children('i').show(1);
    });
    $('.tips-donw').mouseleave(function () {
      $(this).children('.tips-donw-lst').hide(1);
      $(this).children().children('i').hide(1);
    });
    $('.menu1 ul li a').click(function () {
       $(this).children().children('i').toggleClass("icon-caret-down  icon-caret-up");
    });
//   $(".menu1 ul li").click(function () {
//              $(".w290 ul li").each(function () {
//                  $(this).removeClass("z-crt");
//              });
//              $(this).addClass("z-crt");
//   });
});	

$(function () {
	$(document).on("click",'.bj-sp-lst span a', function(){
				$(this).children('i').toggleClass("icon1 icon2");
				$(this).parents().children('#splist').slideToggle(1);
			});
	
});
$(function () {
	  $('.btnnewadd').click(function () {
       $(this).parents().children('.ej-newadd').slideToggle(1);
    	});
    	 $('.ej-newadd ul li').click(function () {
       $(this).parents('.ej-newadd').slideToggle(1);
    	});
	
});

$(function(){
    $("#hn-kpi-title1 ul li").click(function () {
                $("#hn-kpi-title1 ul li").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
     });
$('#hn-kpi-title1 ul li').click(function(){
  var index=$('#hn-kpi-title1 ul li').index(this);
    if(index==0){
     $('#chart0').show();
  	 $('#chart1').hide();
  	 $('#chart2').hide();
   }
   if(index==1){
     $('#chart2').show();
  	 $('#chart0').hide();
  	 $('#chart1').hide();
   }
   if(index==2){
     $('#chart2').show();
  	 $('#chart0').hide();
  	 $('#chart1').hide();
   }
 }); 
});
$(function(){
    $("#hn-kpi-title2 ul li").click(function () {
                $("#hn-kpi-title2 ul li").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
     });
$('#hn-kpi-title2 ul li').click(function(){
  var index=$('#hn-kpi-title2 ul li').index(this);
    if(index==0){
     $('#chart3').show();
  	 $('#chart4').hide();
   }
   if(index==1){
     $('#chart4').show();
  	 $('#chart3').hide();
   }
 }); 
});

$(document).ready(function(){
		$('.hn-menu li').hover(function(){
			$(this).children('ul').show();
			$(this).focus().addClass('focusa')	
		},function(){
		$(this).children('ul').hide();
			$(this).focus().removeClass('focusa')	
		});	
});

//湖南信息
  $(".hn-floor-lst-rt-hf-lst-btn .btn").click(function () { 
       $("#hf-lst-int").slideToggle(0);
   }); 
    $(".hf-lst-rt ul li .reply-btn").click(function () { 
     $(this).parents().parents().children(".hn-floor-lst-rt-hf-lst-int").slideToggle(0);
   }); 
    $(".hn-floor-lst-rt-wd ul li .reply-1").click(function () { 
     $(this).parent().children(".hn-floor-lst-rt-wd ul li .reply-2").show(1);
     $(this).hide(1);
      $(this).parents().parents().children(".hn-floor-lst-rt-hf").slideToggle(0);
   }); 
    $(".hn-floor-lst-rt-wd ul li .reply-2").click(function () { 
     $(this).parent().children(".hn-floor-lst-rt-wd ul li .reply-1").show(1);
     $(this).hide(1);
     $(this).parents().parents().children(".hn-floor-lst-rt-hf").slideToggle(0);
   }); 
// 考核    考核内容已被删除
//新疆指标
$(function () {
   var st = 100;
   $(".zb-mr p").click(function () {
        $(this).toggleClass("z-crt");
     });  
});

$(function(){
$(".m-vis-fm ul .cbj a").click(function () {
                $(".m-vis-fm ul .cbj a").each(function () {
                    $(this).removeClass("z-crt");
                });
                $(this).addClass("z-crt");
            });
$('.m-vis-fm ul .cbj a').click(function(){
  var index=$('.m-vis-fm ul .cbj a').index(this);
    if(index==0){
     $('#dispatching-tab1').show();
  	 $('#dispatching-tab2').hide();
   }
   if(index==1){
     $('#dispatching-tab2').show();
  	 $('#dispatching-tab1').hide();
   }
 });  
 
});