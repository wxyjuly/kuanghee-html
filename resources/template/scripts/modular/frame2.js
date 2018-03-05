//用户信息
$(function () {
    var st = 100;
    $('#m-nav-user ul .usr').mouseenter(function () {
		$('#m-nav-user .uer-lt').show(1);
		$('#m-list1').hide(1);
		$('#m-list2').hide(1);
		$('.ej-ejwk').hide(1);
		$('.xil').children('.icon-angle-down').attr("class","icon-angle-up");
    })
		$("#m-nav-user .uer-lt").click(function () {
                $(this).hide(1);
           });	
		$('#m-nav-user ul .usr').mouseleave(function () {
        $('#m-nav-user .usr .uer-lt').hide(1);
        $('.xil').children('.icon-angle-up').attr("class", "icon-angle-down");
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
		$('#m-nav-user ul').mouseleave(function () {
        $('#m-nav-user #m-list2').hide(1);
    });	
});
//table a 标签
$(function () {
    var st = 100;
    $('.table tr td .icon1').mouseenter(function () {
		$('.z-hid1').show(1);
		$('.z-hid2').hide(1);
		$('.z-hid3').hide(1);
		$('.z-hid4').hide(1);
    })
    $('.table tr td a').mouseleave(function () {
      $('.z-hid1').hide(1);
    })
    $('.table tr td .icon2').mouseenter(function () {
		$('.z-hid2').show(1);
		$('.z-hid1').hide(1);
		$('.z-hid3').hide(1);
		$('.z-hid4').hide(1);
    })
    $('.table tr td a').mouseleave(function () {
      $('.z-hid2').hide(1);
    })
    $('.table tr td .icon3').mouseenter(function () {
		$('.z-hid3').show(1);
		$('.z-hid1').hide(1);
		$('.z-hid2').hide(1);
		$('.z-hid4').hide(1);
    })
    $('.table tr td a').mouseleave(function () {
      $('.z-hid3').hide(1);
    })
    $('.table tr td .icon4').mouseenter(function () {
		$('.z-hid4').show(1);
		$('.z-hid1').hide(1);
		$('.z-hid2').hide(1);
		$('.z-hid3').hide(1);
    })
    $('.table tr td a').mouseleave(function () {
      $('.z-hid4').hide(1);
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
      $('.z-hid2').hide(1);
    })
      $('.m-cong-lst-rt-tt label .icon2').mouseenter(function () {
		$('.z-hid2').show(1);
		$('.z-hid1').hide(1);
		$('.z-hid3').hide(1);
    })
     $('.m-cong-lst-rt-tt label  a').mouseleave(function () {
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

//我的工作 展开
$(function () {
    $(".ej-ejwk label").click(function () {
   	 	$(".ej-ejwk").hide(1);
	
    });
});	
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
                    $(this).removeClass("");
                });
                $(this).addClass("");
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
    $(this).parents().children(".news-lst-ct").slideToggle(1).end().siblings(".news-lst-warp").children(".news-lst-ct").hide();
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
       $(this).children('i').toggleClass("icon-caret-down  icon-caret-up");
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
        $(".ej-ejwk").hide(1);
         $("#m-nav-user ul .m-work").children('i').attr("class", "icon-caret-down");
          $(".m-ztree").hide(1);
		$(".wk-rt-tt .p-pos").children('i').attr("class", "icon-caret-down");
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


//任务分配 里面的切换
$(function(){
$("#rwfptab ul").click(function () {
    $("#rwfptab ul").each(function () {
        $(this).removeClass("current");
    });
    $(this).addClass("current");
});
$('#rwfptab ul').click(function(){
  var index=$('#rwfptab ul').index(this);
    if(index==0){
     $('#m-rwfp-qh-0').show();
     $('#m-rwfp-qh-1').hide();
     $('#m-rwfp-qh-2').hide();
   }
   if(index==1){
     $('#m-rwfp-qh-0').hide();
     $('#m-rwfp-qh-1').show();
     $('#m-rwfp-qh-2').hide();
   }
   if(index==2){
     $('#m-rwfp-qh-0').hide();
     $('#m-rwfp-qh-1').hide();
     $('#m-rwfp-qh-2').show();
   }
  }); 
});

$(".tab_nr_0").attr("state", "close");
    $(".tab_nr_0").click(function(){
        $(".tab_nr_1").css("display","none");
        var state = $(this).attr("state");
        $(".tab_nr_0").attr("state", "close");
        if(state == "close"){
            $(this).attr("state", "open");
            $(this).parents().siblings(".tab_nr_1").css("display","block");
        }
    });
 $(".tab_nr_2").attr("state", "close");
    $(".tab_nr_2").click(function(){
        $(".tab_nr_3").css("display","none");
        var state = $(this).attr("state");
        $(".tab_nr_2").attr("state", "close");
        if(state == "close"){
            $(this).attr("state", "open");
            $(this).parents().siblings(".tab_nr_3").css("display","block");
        }
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