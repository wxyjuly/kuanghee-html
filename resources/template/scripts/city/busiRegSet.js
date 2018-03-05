﻿function BusiRegCity(obj,e) {
    var ths = obj;
    var dal = '<div class="_citys"  style="width: 520px;"><span title="关闭" id="cColse" >×</span><ul id="_citysheng" class="_citys0"><li class="citySel">地市</li><li>业务区县</li><li>片区</li><li>网格</li><li>微片区</li><li id="clear" style="float: right;margin-right: 20px;">清除</li></ul><div id="_citys0" class="_citys1"></div><div style="display:none" id="_citys1" class="_citys1"></div><div style="display:none" id="_citys2" class="_citys1"></div><div style="display:none" id="_citys3" class="_citys1"></div><div style="display:none" id="_citys4" class="_citys1"></div></div>';
    Iput.show({ id: ths, event: e, content: dal,width:"470"});
    $("#cColse").click(function () {
        Iput.colse();
    });
	$("#clear").click(function () {
		$(ths).val("");
		$(ths).siblings("input").val("");
	});
    var tb_province = [];
	var  citys =[];
	$.ajax({
		url: _base + "/ajax/busiAreaList",
		dataType: 'json',
		async: false,
		data: {type: 'busi_reg_city_code'},
		success: function(data) {
			citys = data.result;
		}
	});
	var b = citys;
	var busiRegCode;
    for (var i = 0, len = b.length; i < len; i++) {
        tb_province.push('<a data-level="0" data-pid="'+b[i]['parentId']+'" data-id="' + b[i]['id'] + '" data-name="' + b[i]['name'] + '">' + b[i]['name'] + '</a>');
    }
    $("#_citys0").append(tb_province.join(""));
    if($("#busiRegCode").val() != null){
    	$.ajax({
            url: _base + "/ajax/getBusiRegParentInfo",
            dataType: 'json',
            async: false,
            data: {"areaCode":$("#busiRegCode").val()},
            success: function (data) {
            		if(data.result){
            			if(data.result.busiRegCityCode != ""){
                			$("a[data-id='"+data.result.busiRegCityCode+"']").addClass("AreaS");
                		}
                		if(data.result.busiRegCountyCode != ""){
                			var g = getBusiCity(data.result.busiRegCityCode);
                			$("#_citys1").append(g);
                			$("._citys1:eq(0)").hide();
                			$("._citys1:eq(1)").show();
                			$("a[data-id='"+data.result.busiRegCountyCode+"']").addClass("AreaS");
                		}
                		if(data.result.busiRegAreaCode != ""){
                			var ar = getBusiArea(data.result.busiRegCountyCode);
                			$("#_citys2").append(ar);
                			$("._citys1:eq(1)").hide();
                			$("._citys1:eq(2)").show();
                			$("a[data-id='"+data.result.busiRegAreaCode+"']").addClass("AreaS");
                		}
                		if(data.result.busiRegGridCode != ""){
                			var ar = getBusiArea3(data.result.busiRegAreaCode);
                			$("#_citys3").append(ar);
                			$("._citys1:eq(2)").hide();
                			$("._citys1:eq(3)").show();
                			$("a[data-id='"+data.result.busiRegGridCode+"']").addClass("AreaS");
                		}
            		}
            	}
            })
    }
    $("#_citys0 a").click(function () {
    	var currentCity = $(this).data('id')
        var g = getBusiCity(currentCity);

		//清楚地市后面的
		$(ths).siblings("#busiRegCountyCode").val("");
		$(ths).siblings("#busiRegAreaCode").val("");
		$(ths).siblings("#busiRegGridCode").val("");
		$(ths).siblings("#busiRegMicroAreaCode").val("");

        $("#_citys1 a").remove();
        $("#_citys1").append(g);
        $("._citys1").hide();
        $("._citys1:eq(1)").show();
        $("#_citys0 a,#_citys1 a,#_citys2 a").removeClass("AreaS");
        $(this).addClass("AreaS");
        var lev = $(this).data("name");
        ths.value = $(this).data("name");
		if ($(ths).siblings("#busiRegProvinceCode").html() == undefined) {
			var busiRegProvinceCode = $('<input>', {
				type: 'hidden',
				name: "busiRegProvinceCode",
				"data-id": $(this).data("pid"),
				id: "busiRegProvinceCode",
				val: $(this).data("pid"),
			});
			$(ths).after(busiRegProvinceCode);
		} else {
			$(ths).siblings("#busiRegProvinceCode").val($(this).data("pid"));
		}
        if ($(ths).siblings("#busiRegCityCode").html() == undefined) {
            var busiRegCityCodes = $('<input>', {
                type: 'hidden',
                name: "busiRegCityCode",
                "data-id": $(this).data("id"),
                id: "busiRegCityCode",
				val: $(this).data("id"),
				valDesc: lev
            });
			busiRegCode = $('<input>', {
				type: 'hidden',
				name: "busiRegCode",
				id: "busiRegCode",
				val: $(this).data("id"),
				valDesc: lev
			});
			$(ths).after(busiRegCode);
            $(ths).after(busiRegCityCodes);
        }
        else {
			$(ths).siblings("#busiRegCityCode").val($(this).data("id"));
            $(ths).siblings("#busiRegCityCode").attr("valDesc", lev);
            $(ths).siblings("#busiRegCityCode").attr("data-id", $(this).data("id"));
        }

        $(ths).siblings("#busiRegCode").val($(ths).siblings("#busiRegCityCode").val());
		$(ths).siblings("#busiRegCode").attr("valDesc", lev);

        $("#_citys1 a").click(function () {
			//清楚地业务区域后的
			$(ths).siblings("#busiRegAreaCode").val("");
			$(ths).siblings("#busiRegGridCode").val("");
			$(ths).siblings("#busiRegMicroAreaCode").val("");

            $("#_citys1 a,#_citys2 a").removeClass("AreaS");
            $(this).addClass("AreaS");
            var lev =  $(this).data("name");
            if ($(ths).siblings("#busiRegCountyCode").html() == undefined) {
                var busiRegCityCodes = $('<input>', {
                    type: 'hidden',
                    name: "busiRegCountyCode",
                    "data-id": $(this).data("id"),
                    id: "busiRegCountyCode",
					val: $(this).data("id"),
					valDesc: lev
                });
                $(ths).after(busiRegCityCodes);
            }
            else {
				$(ths).siblings("#busiRegCountyCode").val($(this).data("id"));
                $(ths).siblings("#busiRegCountyCode").attr("data-id", $(this).data("id"));
                $(ths).siblings("#busiRegCountyCode").attr("valDesc", lev);
            }

			$(ths).siblings("#busiRegCode").val($(ths).siblings("#busiRegCountyCode").val());
			$(ths).siblings("#busiRegCode").attr("valDesc", lev);

            // var bc = $(ths).siblings("#busiRegCityCode").attr("valDesc");
            // ths.value = bc+ "-" + $(this).data("name");
			ths.value = $(this).data("name");
			var currentArea = $(this).data('id');
            var ar = getBusiArea(currentArea);

            $("#_citys2 a").remove();
            $("#_citys2").append(ar);
            $("._citys1").hide();
            $("._citys1:eq(2)").show();

            $("#_citys2 a").click(function () {
				//清楚网格后的
				$(ths).siblings("#busiRegGridCode").val("");
				$(ths).siblings("#busiRegMicroAreaCode").val("");

                $("#_citys2 a").removeClass("AreaS");
                $(this).addClass("AreaS");
                var lev = $(this).data("name");
                if ($(ths).siblings("#busiRegAreaCode").html() == undefined) {
                    var busiRegCityCodes = $('<input>', {
                        type: 'hidden',
                        name: "busiRegAreaCode",
                        "data-id": $(this).data("id"),
                        id: "busiRegAreaCode",
						val: $(this).data("id"),
						valDesc: lev
                    });
                    $(ths).after(busiRegCityCodes);
                }
                else {
					$(ths).siblings("#busiRegAreaCode").val($(this).data("id"));
                    $(ths).siblings("#busiRegAreaCode").attr("valDesc", lev);
                    $(ths).siblings("#busiRegAreaCode").attr("data-id", $(this).data("id"));
                }

				$(ths).siblings("#busiRegCode").val($(ths).siblings("#busiRegAreaCode").val());
				$(ths).siblings("#busiRegCode").attr("valDesc", lev);

                // var bc = $(ths).siblings("#busiRegCityCode").attr("valDesc");
                // var bp = $(ths).siblings("#busiRegCountyCode").attr("valDesc");
                // ths.value = bc + "-" + bp + "-" + $(this).data("name");
				ths.value = $(this).data("name");
				var currentArea3 = $(this).data('id');
                var ar = getBusiArea3(currentArea3);
                $("#_citys3 a").remove();
                $("#_citys3").append(ar);
                $("._citys1").hide();
                $("._citys1:eq(3)").show();

                $("#_citys3 a").click(function () {
					//微片区
					$(ths).siblings("#busiRegMicroAreaCode").val("");

					$("#_citys3 a").removeClass("AreaS");
					$(this).addClass("AreaS");
					var lev = $(this).data("name");
					if ($(ths).siblings("#busiRegGridCode").html() == undefined) {
						var busiRegCityCodes = $('<input>', {
							type: 'hidden',
							name: "busiRegGridCode",
							"data-id": $(this).data("id"),
							id: "busiRegGridCode",
							val: $(this).data("id"),
							valDesc: lev
						});
						$(ths).after(busiRegCityCodes);
					}
					else {
						$(ths).siblings("#busiRegGridCode").val($(this).data("id"));
						$(ths).siblings("#busiRegGridCode").attr("valDesc", lev);
						$(ths).siblings("#busiRegGridCode").attr("data-id", $(this).data("id"));
					}

					$(ths).siblings("#busiRegCode").val($(ths).siblings("#busiRegGridCode").val());
					$(ths).siblings("#busiRegCode").attr("valDesc", lev);

					// var bc = $(ths).siblings("#busiRegCityCode").attr("valDesc");
					// var bp = $(ths).siblings("#busiRegCountyCode").attr("valDesc");
					// var ba = $(ths).siblings("#busiRegAreaCode").attr("valDesc");
					// ths.value = bc + "-" + bp + "-" + ba + "-" + $(this).data("name");
					ths.value = $(this).data("name");

					 var ar = getBusiArea4($(this));
					$("#_citys4 a").remove();
					$("#_citys4").append(ar);
					$("._citys1").hide();
					$("._citys1:eq(4)").show();

					$("#_citys4 a").click(function () {
						$("#_citys4 a").removeClass("AreaS");
						$(this).addClass("AreaS");
						var lev = $(this).data("name");
						if ($(ths).siblings("#busiRegGridCode").html() == undefined) {
							var busiRegCityCodes = $('<input>', {
								type: 'hidden',
								name: "busiRegMicroAreaCode",
								"data-id": $(this).data("id"),
								id: "busiRegMicroAreaCode",
								val: $(this).data("id"),
								valDesc: lev
							});
							$(ths).after(busiRegCityCodes);
						}
						else {
							$(ths).siblings("#busiRegMicroAreaCode").val($(this).data("id"));
							$(ths).siblings("#busiRegMicroAreaCode").attr("valDesc", lev);
							$(ths).siblings("#busiRegMicroAreaCode").attr("data-id", $(this).data("id"));
						}

						$(ths).siblings("#busiRegCode").val($(ths).siblings("#busiRegMicroAreaCode").val());
						$(ths).siblings("#busiRegCode").attr("valDesc", lev);

						// var bc = $(ths).siblings("#busiRegCityCode").attr("valDesc");
						// var bp = $(ths).siblings("#busiRegCountyCode").attr("valDesc");
						// var ba = $(ths).siblings("#busiRegAreaCode").attr("valDesc");
						// var bt = $(ths).siblings("#busiRegGridCode").attr("valDesc");
						// ths.value = bc + "-" + bp + "-" + ba + "-" + bt + "-" + $(this).data("name");
						ths.value = $(this).data("name");
						Iput.colse();
					});

				});
            });

        });
    });
    
    $("#_citys1 a").click(function () {
		//清楚地业务区域后的
		$(ths).siblings("#busiRegAreaCode").val("");
		$(ths).siblings("#busiRegGridCode").val("");
		$(ths).siblings("#busiRegMicroAreaCode").val("");

        $("#_citys1 a,#_citys2 a").removeClass("AreaS");
        $(this).addClass("AreaS");
        var lev =  $(this).data("name");
        if ($(ths).siblings("#busiRegCountyCode").html() == undefined) {
            var busiRegCityCodes = $('<input>', {
                type: 'hidden',
                name: "busiRegCountyCode",
                "data-id": $(this).data("id"),
                id: "busiRegCountyCode",
				val: $(this).data("id"),
				valDesc: lev
            });
            $(ths).after(busiRegCityCodes);
        }
        else {
			$(ths).siblings("#busiRegCountyCode").val($(this).data("id"));
            $(ths).siblings("#busiRegCountyCode").attr("data-id", $(this).data("id"));
            $(ths).siblings("#busiRegCountyCode").attr("valDesc", lev);
        }

		$(ths).siblings("#busiRegCode").val($(ths).siblings("#busiRegCountyCode").val());
		$(ths).siblings("#busiRegCode").attr("valDesc", lev);

		ths.value = $(this).data("name");
		var currentArea = $(this).data('id');
        var ar = getBusiArea(currentArea);

        $("#_citys2 a").remove();
        $("#_citys2").append(ar);
        $("._citys1").hide();
        $("._citys1:eq(2)").show();

        $("#_citys2 a").click(function () {
			//清楚网格后的
			$(ths).siblings("#busiRegGridCode").val("");
			$(ths).siblings("#busiRegMicroAreaCode").val("");

            $("#_citys2 a").removeClass("AreaS");
            $(this).addClass("AreaS");
            var lev = $(this).data("name");
            if ($(ths).siblings("#busiRegAreaCode").html() == undefined) {
                var busiRegCityCodes = $('<input>', {
                    type: 'hidden',
                    name: "busiRegAreaCode",
                    "data-id": $(this).data("id"),
                    id: "busiRegAreaCode",
					val: $(this).data("id"),
					valDesc: lev
                });
                $(ths).after(busiRegCityCodes);
            }
            else {
				$(ths).siblings("#busiRegAreaCode").val($(this).data("id"));
                $(ths).siblings("#busiRegAreaCode").attr("valDesc", lev);
                $(ths).siblings("#busiRegAreaCode").attr("data-id", $(this).data("id"));
            }

			$(ths).siblings("#busiRegCode").val($(ths).siblings("#busiRegAreaCode").val());
			$(ths).siblings("#busiRegCode").attr("valDesc", lev);

			ths.value = $(this).data("name");
			var currentArea3 = $(this).data('id');
            var ar = getBusiArea3(currentArea3);
            $("#_citys3 a").remove();
            $("#_citys3").append(ar);
            $("._citys1").hide();
            $("._citys1:eq(3)").show();

            $("#_citys3 a").click(function () {
				//微片区
				$(ths).siblings("#busiRegMicroAreaCode").val("");

				$("#_citys3 a").removeClass("AreaS");
				$(this).addClass("AreaS");
				var lev = $(this).data("name");
				if ($(ths).siblings("#busiRegGridCode").html() == undefined) {
					var busiRegCityCodes = $('<input>', {
						type: 'hidden',
						name: "busiRegGridCode",
						"data-id": $(this).data("id"),
						id: "busiRegGridCode",
						val: $(this).data("id"),
						valDesc: lev
					});
					$(ths).after(busiRegCityCodes);
				}
				else {
					$(ths).siblings("#busiRegGridCode").val($(this).data("id"));
					$(ths).siblings("#busiRegGridCode").attr("valDesc", lev);
					$(ths).siblings("#busiRegGridCode").attr("data-id", $(this).data("id"));
				}

				$(ths).siblings("#busiRegCode").val($(ths).siblings("#busiRegGridCode").val());
				$(ths).siblings("#busiRegCode").attr("valDesc", lev);

				ths.value = $(this).data("name");

				 var ar = getBusiArea4($(this));
				$("#_citys4 a").remove();
				$("#_citys4").append(ar);
				$("._citys1").hide();
				$("._citys1:eq(4)").show();

				$("#_citys4 a").click(function () {
					$("#_citys4 a").removeClass("AreaS");
					$(this).addClass("AreaS");
					var lev = $(this).data("name");
					if ($(ths).siblings("#busiRegGridCode").html() == undefined) {
						var busiRegCityCodes = $('<input>', {
							type: 'hidden',
							name: "busiRegMicroAreaCode",
							"data-id": $(this).data("id"),
							id: "busiRegMicroAreaCode",
							val: $(this).data("id"),
							valDesc: lev
						});
						$(ths).after(busiRegCityCodes);
					}
					else {
						$(ths).siblings("#busiRegMicroAreaCode").val($(this).data("id"));
						$(ths).siblings("#busiRegMicroAreaCode").attr("valDesc", lev);
						$(ths).siblings("#busiRegMicroAreaCode").attr("data-id", $(this).data("id"));
					}

					$(ths).siblings("#busiRegCode").val($(ths).siblings("#busiRegMicroAreaCode").val());
					$(ths).siblings("#busiRegCode").attr("valDesc", lev);

					ths.value = $(this).data("name");
					Iput.colse();
				});

			});
        });

    });
    $("#_citys2 a").click(function () {
		//清楚网格后的
		$(ths).siblings("#busiRegGridCode").val("");
		$(ths).siblings("#busiRegMicroAreaCode").val("");

        $("#_citys2 a").removeClass("AreaS");
        $(this).addClass("AreaS");
        var lev = $(this).data("name");
        if ($(ths).siblings("#busiRegAreaCode").html() == undefined) {
            var busiRegCityCodes = $('<input>', {
                type: 'hidden',
                name: "busiRegAreaCode",
                "data-id": $(this).data("id"),
                id: "busiRegAreaCode",
				val: $(this).data("id"),
				valDesc: lev
            });
            $(ths).after(busiRegCityCodes);
        }
        else {
			$(ths).siblings("#busiRegAreaCode").val($(this).data("id"));
            $(ths).siblings("#busiRegAreaCode").attr("valDesc", lev);
            $(ths).siblings("#busiRegAreaCode").attr("data-id", $(this).data("id"));
        }

		$(ths).siblings("#busiRegCode").val($(ths).siblings("#busiRegAreaCode").val());
		$(ths).siblings("#busiRegCode").attr("valDesc", lev);

		ths.value = $(this).data("name");
		var currentArea3 = $(this).data('id');
        var ar = getBusiArea3(currentArea3);
        $("#_citys3 a").remove();
        $("#_citys3").append(ar);
        $("._citys1").hide();
        $("._citys1:eq(3)").show();

        $("#_citys3 a").click(function () {
			//微片区
			$(ths).siblings("#busiRegMicroAreaCode").val("");

			$("#_citys3 a").removeClass("AreaS");
			$(this).addClass("AreaS");
			var lev = $(this).data("name");
			if ($(ths).siblings("#busiRegGridCode").html() == undefined) {
				var busiRegCityCodes = $('<input>', {
					type: 'hidden',
					name: "busiRegGridCode",
					"data-id": $(this).data("id"),
					id: "busiRegGridCode",
					val: $(this).data("id"),
					valDesc: lev
				});
				$(ths).after(busiRegCityCodes);
			}
			else {
				$(ths).siblings("#busiRegGridCode").val($(this).data("id"));
				$(ths).siblings("#busiRegGridCode").attr("valDesc", lev);
				$(ths).siblings("#busiRegGridCode").attr("data-id", $(this).data("id"));
			}

			$(ths).siblings("#busiRegCode").val($(ths).siblings("#busiRegGridCode").val());
			$(ths).siblings("#busiRegCode").attr("valDesc", lev);

			ths.value = $(this).data("name");

			 var ar = getBusiArea4($(this));
			$("#_citys4 a").remove();
			$("#_citys4").append(ar);
			$("._citys1").hide();
			$("._citys1:eq(4)").show();

			$("#_citys4 a").click(function () {
				$("#_citys4 a").removeClass("AreaS");
				$(this).addClass("AreaS");
				var lev = $(this).data("name");
				if ($(ths).siblings("#busiRegGridCode").html() == undefined) {
					var busiRegCityCodes = $('<input>', {
						type: 'hidden',
						name: "busiRegMicroAreaCode",
						"data-id": $(this).data("id"),
						id: "busiRegMicroAreaCode",
						val: $(this).data("id"),
						valDesc: lev
					});
					$(ths).after(busiRegCityCodes);
				}
				else {
					$(ths).siblings("#busiRegMicroAreaCode").val($(this).data("id"));
					$(ths).siblings("#busiRegMicroAreaCode").attr("valDesc", lev);
					$(ths).siblings("#busiRegMicroAreaCode").attr("data-id", $(this).data("id"));
				}

				$(ths).siblings("#busiRegCode").val($(ths).siblings("#busiRegMicroAreaCode").val());
				$(ths).siblings("#busiRegCode").attr("valDesc", lev);

				ths.value = $(this).data("name");n
				Iput.colse();
			});

		});
    });
    $("#_citys3 a").click(function () {
		//微片区
		$(ths).siblings("#busiRegMicroAreaCode").val("");

		$("#_citys3 a").removeClass("AreaS");
		$(this).addClass("AreaS");
		var lev = $(this).data("name");
		if ($(ths).siblings("#busiRegGridCode").html() == undefined) {
			var busiRegCityCodes = $('<input>', {
				type: 'hidden',
				name: "busiRegGridCode",
				"data-id": $(this).data("id"),
				id: "busiRegGridCode",
				val: $(this).data("id"),
				valDesc: lev
			});
			$(ths).after(busiRegCityCodes);
		}
		else {
			$(ths).siblings("#busiRegGridCode").val($(this).data("id"));
			$(ths).siblings("#busiRegGridCode").attr("valDesc", lev);
			$(ths).siblings("#busiRegGridCode").attr("data-id", $(this).data("id"));
		}

		$(ths).siblings("#busiRegCode").val($(ths).siblings("#busiRegGridCode").val());
		$(ths).siblings("#busiRegCode").attr("valDesc", lev);

		ths.value = $(this).data("name");

		 var ar = getBusiArea4($(this));
		$("#_citys4 a").remove();
		$("#_citys4").append(ar);
		$("._citys1").hide();
		$("._citys1:eq(4)").show();

		$("#_citys4 a").click(function () {
			$("#_citys4 a").removeClass("AreaS");
			$(this).addClass("AreaS");
			var lev = $(this).data("name");
			if ($(ths).siblings("#busiRegGridCode").html() == undefined) {
				var busiRegCityCodes = $('<input>', {
					type: 'hidden',
					name: "busiRegMicroAreaCode",
					"data-id": $(this).data("id"),
					id: "busiRegMicroAreaCode",
					val: $(this).data("id"),
					valDesc: lev
				});
				$(ths).after(busiRegCityCodes);
			}
			else {
				$(ths).siblings("#busiRegMicroAreaCode").val($(this).data("id"));
				$(ths).siblings("#busiRegMicroAreaCode").attr("valDesc", lev);
				$(ths).siblings("#busiRegMicroAreaCode").attr("data-id", $(this).data("id"));
			}

			$(ths).siblings("#busiRegCode").val($(ths).siblings("#busiRegMicroAreaCode").val());
			$(ths).siblings("#busiRegCode").attr("valDesc", lev);

			ths.value = $(this).data("name");
			Iput.colse();
		});

	});
    $("#_citys4 a").click(function () {
		$("#_citys4 a").removeClass("AreaS");
		$(this).addClass("AreaS");
		var lev = $(this).data("name");
		if ($(ths).siblings("#busiRegGridCode").html() == undefined) {
			var busiRegCityCodes = $('<input>', {
				type: 'hidden',
				name: "busiRegMicroAreaCode",
				"data-id": $(this).data("id"),
				id: "busiRegMicroAreaCode",
				val: $(this).data("id"),
				valDesc: lev
			});
			$(ths).after(busiRegCityCodes);
		}
		else {
			$(ths).siblings("#busiRegMicroAreaCode").val($(this).data("id"));
			$(ths).siblings("#busiRegMicroAreaCode").attr("valDesc", lev);
			$(ths).siblings("#busiRegMicroAreaCode").attr("data-id", $(this).data("id"));
		}

		$(ths).siblings("#busiRegCode").val($(ths).siblings("#busiRegMicroAreaCode").val());
		$(ths).siblings("#busiRegCode").attr("valDesc", lev);
		ths.value = $(this).data("name");
		Iput.colse();
	});
    $("#_citysheng li").click(function () {
        $("#_citysheng li").removeClass("citySel");
        $(this).addClass("citySel");
        var s = $("#_citysheng li").index(this);
        $("._citys1").hide();
        $("._citys1:eq(" + s + ")").show();
    });
}
 
function getBusiCity(obj) {
	var g = '';
	$.ajax({
		url: _base + "/ajax/busiAreaList",
		dataType: 'json',
		async: false,
		data: {code: obj},
		success: function(data){
			var lists =  data.result;
			for (var i = 0; i < lists.length; i++) {
				g += '<a data-level="1" data-id="' + lists[i]['id'] + '" data-name="' + lists[i]['name'] + '" title="' +lists[i]['name'] + '">' + lists[i]['name'] + '</a>'
			}
		}
	});
    $("#_citysheng li").removeClass("citySel");
    $("#_citysheng li:eq(1)").addClass("citySel");
    return g;
}
function getBusiArea(obj) {
	var g = '';
	$.ajax({
		url: _base + "/ajax/busiAreaList",
		dataType: 'json',
		async: false,
		data: {code: obj},
		success: function(data){
			var lists =  data.result;
			for (var i = 0; i < lists.length; i++) {
				g += '<a data-level="1" data-id="' + lists[i]['id'] + '" data-name="' + lists[i]['name'] + '" title="' +lists[i]['name'] + '">' + lists[i]['name'] + '</a>'
			}
		}
	});
    $("#_citysheng li").removeClass("citySel");
    $("#_citysheng li:eq(2)").addClass("citySel");
    return g;
}
function getBusiArea3(obj) {
	var g = '';
	$.ajax({
		url: _base + "/ajax/busiAreaList",
		dataType: 'json',
		async: false,
		data: {code: obj},
		success: function(data){
			var lists =  data.result;
			for (var i = 0; i < lists.length; i++) {
				g += '<a data-level="1" data-id="' + lists[i]['id'] + '" data-name="' + lists[i]['name'] + '" title="' +lists[i]['name'] + '">' + lists[i]['name'] + '</a>'
			}
		}
	});
    $("#_citysheng li").removeClass("citySel");
    $("#_citysheng li:eq(3)").addClass("citySel");
    return g;
}

function getBusiArea4(obj) {
	var g = '';
	$.ajax({
		url: _base + "/ajax/busiAreaList",
		dataType: 'json',
		async: false,
		data: {code: obj.data('id')},
		success: function(data){
			var lists =  data.result;
			for (var i = 0; i < lists.length; i++) {
				g += '<a data-level="1" data-id="' + lists[i]['id'] + '" data-name="' + lists[i]['name'] + '" title="' +lists[i]['name'] + '">' + lists[i]['name'] + '</a>'
			}
		}
	});
    $("#_citysheng li").removeClass("citySel");
    $("#_citysheng li:eq(4)").addClass("citySel");
    return g;
}