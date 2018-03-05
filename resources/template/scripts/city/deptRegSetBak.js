function DeptRegCity(obj,e) {
    var ths = obj;
    var dal = '<div class="_citys">' + 
    			 '<span title="关闭" id="cColse" >×</span>' + 
    			 '<ul id="_citysheng" class="_citys0">' + 
    				'<li class="citySel">一级</li>' + 
    				'<li>二级</li>' + 
    				'<li>三级</li>' + 
    				'<li>四级</li>' + 
    				'<li>五级</li>' + 
    				'<li>六级</li>' + 
    			'</ul>' +
    			'<div id="_citys0" class="_citys1"></div>' + 
    			'<div style="display:none" id="_citys1" class="_citys1"></div>' + 
    			'<div style="display:none" id="_citys2" class="_citys1"></div>' + 
    			'<div style="display:none" id="_citys3" class="_citys1"></div>' + 
    			'<div style="display:none" id="_citys4" class="_citys1"></div>' + 
    			'<div style="display:none" id="_citys5" class="_citys1"></div>' + 
    		'</div>';
    
    Iput.show({ id: ths, event: e, content: dal,width:"470"});
    $("#cColse").click(function () {
        Iput.colse();
    });
    var tb_dept = [];
	var  depts =[];
	$.ajax({
		url: _base + "/ajax/sysOfficeList",
		dataType: 'json',
		async: false,
		success: function(data) {
			depts = data.result;
		}
	});
    var b = depts;
	var deptId;
    for (var i = 0, len = b.length; i < len; i++) {
        tb_dept.push('<a data-level="0" data-id="' + b[i]['id'] + '" data-name="' + b[i]['name'] + '">' + b[i]['name'] + '</a>');
    }
    $("#_citys0").append(tb_dept.join(""));
    $("#_citys0 a").click(function () {
        var g = getDept($(this), 1);

		//清空1级后面的所有值
		$("#deptId2").val("");
		$("#deptId3").val("");
		$("#deptId4").val("");
		$("#deptId5").val("");
		$("#deptId6").val("");


        $("#_citys1 a").remove();
        $("#_citys1").append(g);
        $("._citys1").hide();
        $("._citys1:eq(1)").show();
        $("#_citys0 a,#_citys1 a,#_citys2 a").removeClass("AreaS");
        $(this).addClass("AreaS");
        var lev = $(this).data("name");
        ths.value = $(this).data("name");
        if (document.getElementById("deptId1") == null) {
            var deptIds = $('<input>', {
                type: 'hidden',
                name: "deptId1",
                "data-id": $(this).data("id"),
                id: "deptId1",
				val: $(this).data("id"),
				valDesc: lev
            });
			deptId = $('<input>', {
				type: 'hidden',
				name: "deptId",
				id: "deptId",
				val: $(this).data("id"),
				valDesc: lev
			});
			$(ths).after(deptId);
            $(ths).after(deptIds);
        }
        else {
			$("#deptId1").val($(this).data("id"));
            $("#deptId1").attr("valDesc", lev);
            $("#deptId1").attr("data-id", $(this).data("id"));
        }

        $("#deptId").val($("#deptId1").val());
		$("#deptId").attr("valDesc", lev)

        $("#_citys1 a").click(function () {
			//清空2后面的所有值
			$("#deptId3").val("");
			$("#deptId4").val("");
			$("#deptId5").val("");
			$("#deptId6").val("");

			$("#_citys1 a,#_citys2 a").removeClass("AreaS");
            $(this).addClass("AreaS");
            var lev =  $(this).data("name");
            if (document.getElementById("deptId2") == null) {
                var deptIds = $('<input>', {
                    type: 'hidden',
                    name: "deptId2",
                    "data-id": $(this).data("id"),
                    id: "deptId2",
					val: $(this).data("id"),
					valDesc: lev
                });
                $(ths).after(deptIds);
            }
            else {
				$("#deptId2").val($(this).data("id"));
                $("#deptId2").attr("data-id", $(this).data("id"));
                $("#deptId2").attr("valDesc", lev);
            }

			$("#deptId").val($("#deptId2").val());
			$("#deptId").attr("valDesc", lev)

            var bc = $("#deptId1").attr("valDesc");
            ths.value = bc+ "-" + $(this).data("name");

            var ar =  getDept($(this), 2);

            $("#_citys2 a").remove();
            $("#_citys2").append(ar);
            $("._citys1").hide();
            $("._citys1:eq(2)").show();

            $("#_citys2 a").click(function () {
				//清空3后面的所有值
				$("#deptId4").val("");
				$("#deptId5").val("");
				$("#deptId6").val("");

                $("#_citys2 a").removeClass("AreaS");
                $(this).addClass("AreaS");
                var lev = $(this).data("name");
                if (document.getElementById("deptId3") == null) {
                    var deptIds = $('<input>', {
                        type: 'hidden',
                        name: "deptId3",
                        "data-id": $(this).data("id"),
                        id: "deptId3",
                        val: $(this).data("id"),
						valDesc: lev
                    });
                    $(ths).after(deptIds);
                }
                else {
					$("#deptId3").val($(this).data("id"));
                    $("#deptId3").attr("valDesc", lev);;
                    $("#deptId3").attr("data-id", $(this).data("id"));
                }

				$("#deptId").val($("#deptId3").val());
				$("#deptId").attr("valDesc", lev)

                var bc = $("#deptId1").attr("valDesc");;
                var bp = $("#deptId2").attr("valDesc");;
                ths.value = bc + "-" + bp + "-" + $(this).data("name");

                var ar =  getDept($(this), 3);
                $("#_citys3 a").remove();
                $("#_citys3").append(ar);
                $("._citys1").hide();
                $("._citys1:eq(3)").show();

                $("#_citys3 a").click(function () {
					$("#_citys3 a").removeClass("AreaS");
					$(this).addClass("AreaS");
					var lev = $(this).data("name");
					if (document.getElementById("deptId4") == null) {
						var deptIds = $('<input>', {
							type: 'hidden',
							name: "deptId4",
							"data-id": $(this).data("id"),
							id: "deptId4",
							val: $(this).data("id"),
							valDesc: lev
						});
						$(ths).after(deptIds);
					}
					else {
						$("#deptId4").val($(this).data("id"));
						$("#deptId4").attr("valDesc", lev);;
						$("#deptId4").attr("data-id", $(this).data("id"));
					}

					$("#deptId").val($("#deptId4").val());
					$("#deptId").attr("valDesc", lev)

					var bc = $("#deptId1").attr("valDesc");
					var bp = $("#deptId2").attr("valDesc");
					var ba = $("#deptId3").attr("valDesc");
					ths.value = bc + "-" + bp + "-" + ba + "-" + $(this).data("name");

					var ar =  getDept($(this), 4);

					$("#_citys4 a").remove();
					$("#_citys4").append(ar);
					$("._citys1").hide();
					$("._citys1:eq(4)").show();

					$("#_citys4 a").click(function () {
						//清空4后面的所有值
						$("#deptId5").val("");
						$("#deptId6").val("");

						$("#_citys4 a").removeClass("AreaS");
						$(this).addClass("AreaS");
						var lev = $(this).data("name");
						if (document.getElementById("deptId5") == null) {
							var deptIds = $('<input>', {
								type: 'hidden',
								name: "deptId5",
								"data-id": $(this).data("id"),
								id: "deptId5",
								val: $(this).data("id"),
								valDesc: lev
							});
							$(ths).after(deptIds);
						}
						else {
							$("#deptId5").val($(this).data("id"));
							$("#deptId5").attr("valDesc", lev);
							$("#deptId5").attr("data-id", $(this).data("id"));
						}

						$("#deptId").val($("#deptId5").val());
						$("#deptId").attr("valDesc", lev)

						var b1 = $("#deptId1").attr("valDesc");
						var b2 = $("#deptId2").attr("valDesc");
						var b3 = $("#deptId3").attr("valDesc");
						var b4 = $("#deptId4").attr("valDesc");
						ths.value = b1 + "-" + b2 + "-" + b3 + "-" + b4 + "-" + $(this).data("name");

						var ar =  getDept($(this), 5);

						$("#_citys5 a").remove();
						$("#_citys5").append(ar);
						$("._citys1").hide();
						$("._citys1:eq(5)").show();

						$("#_citys5 a").click(function () {
							//清空5后面的所有值
							$("#deptId6").val("");

							$("#_citys5 a").removeClass("AreaS");
							$(this).addClass("AreaS");
							var lev = $(this).data("name");
							if (document.getElementById("deptId6") == null) {
								var deptIds = $('<input>', {
									type: 'hidden',
									name: "deptId6",
									"data-id": $(this).data("id"),
									id: "deptId6",
									val: $(this).data("id"),
									valDesc: lev
								});
								$(ths).after(deptIds);
							}
							else {
								$("#deptId6").val($(this).data("id"));
								$("#deptId6").attr("valDesc", lev);
								$("#deptId6").attr("data-id", $(this).data("id"));
							}

							$("#deptId").val($("#deptId6").val());
							$("#deptId").attr("valDesc", lev)

							var b1 = $("#deptId1").attr("valDesc");
							var b2 = $("#deptId2").attr("valDesc");
							var b3 = $("#deptId3").attr("valDesc");
							var b4 = $("#deptId4").attr("valDesc");
							var b5 = $("#deptId5").attr("valDesc");
							ths.value = b1 + "-" + b2 + "-" + b3 + "-" + b4 + "-" + b5 + $(this).data("name");
							Iput.colse();
						});

					});


				});
            });

        });
    });
    $("#_citysheng li").click(function () {
        $("#_citysheng li").removeClass("citySel");
        $(this).addClass("citySel");
        var s = $("#_citysheng li").index(this);
        $("._citys1").hide();
        $("._citys1:eq(" + s + ")").show();
    });

}


function getDept(obj, index) {
    var g = '';
    $.ajax({
		url: _base + "/ajax/sysOfficeList",
		dataType: 'json',
		async: false,
        data: {parentId: obj.data('id')},
        success: function(data){
            var lists =  data.result;
            for (var i = 0; i < lists.length; i++) {
                g += '<a data-level="1" data-id="' + lists[i]['id'] + '" data-name="' + lists[i]['name'] + '" title="' +lists[i]['name'] + '">' + lists[i]['name'] + '</a>'
            }
        }
    });
    $("#_citysheng li").removeClass("citySel");
    $("#_citysheng li:eq("+index+")").addClass("citySel");
    return g;
}