function AdmRegCity(obj,e) {
    var ths = obj;
    var dal = '<div class="_citys"><span title="关闭" id="cColse" >×</span><ul id="_citysheng" class="_citys0"><li class="citySel">地市</li><li>区县</li><li>乡镇</li><li>村</li><li id="clear" style="float: right;margin-right: 20px;">清除</li></ul><div id="_citys0" class="_citys1"></div><div style="display:none" id="_citys1" class="_citys1"></div><div style="display:none" id="_citys2" class="_citys1"></div><div style="display:none" id="_citys3" class="_citys1"></div></div>';
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
		url: _base + "/ajax/areaList",
		dataType: 'json',
		async: false,
		data: {type: 'adm_reg_city_code'},
		success: function(data) {
			citys = data.result;
		}
	});
    var b = citys;
	var admRegCode;
    for (var i = 0, len = b.length; i < len; i++) {
        tb_province.push('<a data-level="0" data-pid="'+b[i]['parentId']+'" data-id="' + b[i]['id'] + '" data-name="' + b[i]['name'] + '">' + b[i]['name'] + '</a>');
    }
    $("#_citys0").append(tb_province.join(""));
    if($("#admRegCode").val() != null){
    	$.ajax({
            url: _base + "/ajax/getAdmRegParentInfo",
            dataType: 'json',
            async: false,
            data: {"areaCode":$("#admRegCode").val()},
            success: function (data) {
            		if(data.result){
            			if(data.result.admRegCityCode != ""){
                			$("a[data-id='"+data.result.admRegCityCode+"']").addClass("AreaS");
                		}
                		if(data.result.admRegCountyCode != ""){
                			var g = getCity(data.result.admRegCityCode);
                			$("#_citys1").append(g);
                			$("._citys1:eq(0)").hide();
                			$("._citys1:eq(1)").show();
                			$("a[data-id='"+data.result.admRegCountyCode+"']").addClass("AreaS");
                		}
                		if(data.result.admRegTownCode != ""){
                			var ar = getArea(data.result.admRegCountyCode);
                			$("#_citys2").append(ar);
                			$("._citys1:eq(1)").hide();
                			$("._citys1:eq(2)").show();
                			$("a[data-id='"+data.result.admRegTownCode+"']").addClass("AreaS");
                		}
                		if(data.result.admRegVillageCode != ""){
                			var ar = getArea3(data.result.admRegVillageCode);
                			$("#_citys3").append(ar);
                			$("._citys1:eq(2)").hide();
                			$("._citys1:eq(3)").show();
                			$("a[data-id='"+data.result.admRegVillageCode+"']").addClass("AreaS");
                		}
            		}
            	}
            })
    }
    $("#_citys0 a").click(function () {
    	var cityCurrent = $(this).data('id');
        var g = getCity(cityCurrent);

		//省

		//清空地市后面的所有值
		$(ths).siblings("#admRegCountyCode").val("");
		$(ths).siblings("#admRegTownCode").val("");
		$(ths).siblings("#admRegVillageCode").val("");

        $("#_citys1 a").remove();
        $("#_citys1").append(g);
        $("._citys1").hide();
        $("._citys1:eq(1)").show();
        $("#_citys0 a,#_citys1 a,#_citys2 a").removeClass("AreaS");
        $(this).addClass("AreaS");
        var lev = $(this).data("name");
        ths.value = $(this).data("name");
		if ($(ths).siblings("#admRegProvinceCode").html() == undefined) {
			var admRegProvinceCode = $('<input>', {
				type: 'hidden',
				name: "admRegProvinceCode",
				"data-id": $(this).data("pid"),
				id: "admRegProvinceCode",
				val: $(this).data("pid"),
			});
			$(ths).after(admRegProvinceCode);
		} else {
			$(ths).siblings("#admRegProvinceCode").val($(this).data("pid"));
		}
        if ($(ths).siblings("#admRegCityCode").html() == undefined) {
            var admRegCityCodes = $('<input>', {
                type: 'hidden',
                name: "admRegCityCode",
                "data-id": $(this).data("id"),
                id: "admRegCityCode",
				val: $(this).data("id"),
				valDesc: lev
            });

			admRegCode = $('<input>', {
				type: 'hidden',
				name: "admRegCode",
				id: "admRegCode",
				val: $(this).data("id"),
				valDesc: lev
			});
			$(ths).after(admRegCode);
            $(ths).after(admRegCityCodes);
        }
        else {
			$(ths).siblings("#admRegCityCode").val($(this).data("id"));
            $(ths).siblings("#admRegCityCode").attr("valDesc", lev);
            $(ths).siblings("#admRegCityCode").attr("data-id", $(this).data("id"));
        }

        $(ths).siblings("#admRegCode").val($(ths).siblings("#admRegCityCode").val());
		$(ths).siblings("#admRegCode").attr("valDesc", lev)

        $("#_citys1 a").click(function () {
			//清空区县后面的所有值
			$(ths).siblings("#admRegTownCode").val("");
			$(ths).siblings("#admRegVillageCode").val("");

			$("#_citys1 a,#_citys2 a").removeClass("AreaS");
            $(this).addClass("AreaS");
            var lev =  $(this).data("name");
            if ($(ths).siblings("#admRegCountyCode").html() == undefined) {
                var admRegCityCodes = $('<input>', {
                    type: 'hidden',
                    name: "admRegCountyCode",
                    "data-id": $(this).data("id"),
                    id: "admRegCountyCode",
					val: $(this).data("id"),
					valDesc: lev
                });
                $(ths).after(admRegCityCodes);
            }
            else {
				$(ths).siblings("#admRegCountyCode").val($(this).data("id"));
                $(ths).siblings("#admRegCountyCode").attr("data-id", $(this).data("id"));
                $(ths).siblings("#admRegCountyCode").attr("valDesc", lev);
            }

			$(ths).siblings("#admRegCode").val($(ths).siblings("#admRegCountyCode").val());
			$(ths).siblings("#admRegCode").attr("valDesc", lev)

            //var bc = $(ths).siblings("#admRegCityCode").attr("valDesc");
            //ths.value = bc+ "-" + $(this).data("name");
			ths.value = $(this).data("name");
			
			var countyCurrent = $(this).data('id');
            var ar = getArea(countyCurrent);

            $("#_citys2 a").remove();
            $("#_citys2").append(ar);
            $("._citys1").hide();
            $("._citys1:eq(2)").show();

            $("#_citys2 a").click(function () {
				//清空乡镇后面的所有值
				$(ths).siblings("#admRegVillageCode").val("");

                $("#_citys2 a").removeClass("AreaS");
                $(this).addClass("AreaS");
                var lev = $(this).data("name");
                if ($(ths).siblings("#admRegTownCode").html() == undefined) {
                    var admRegCityCodes = $('<input>', {
                        type: 'hidden',
                        name: "admRegTownCode",
                        "data-id": $(this).data("id"),
                        id: "admRegTownCode",
                        val: $(this).data("id"),
						valDesc: lev
                    });
                    $(ths).after(admRegCityCodes);
                }
                else {
					$(ths).siblings("#admRegTownCode").val($(this).data("id"));
                    $(ths).siblings("#admRegTownCode").attr("valDesc", lev);;
                    $(ths).siblings("#admRegTownCode").attr("data-id", $(this).data("id"));
                }

				$(ths).siblings("#admRegCode").val($(ths).siblings("#admRegTownCode").val());
				$(ths).siblings("#admRegCode").attr("valDesc", lev)

                // var bc = $(ths).siblings("#admRegCityCode").attr("valDesc");;
                // var bp = $(ths).siblings("#admRegCountyCode").attr("valDesc");;
                // ths.value = bc + "-" + bp + "-" + $(this).data("name");
				ths.value = $(this).data("name");
				var townCurrent = $(this).data('id');
                var ar = getArea3(townCurrent);
                $("#_citys3 a").remove();
                $("#_citys3").append(ar);
                $("._citys1").hide();
                $("._citys1:eq(3)").show();

                $("#_citys3 a").click(function () {
					$("#_citys3 a").removeClass("AreaS");
					$(this).addClass("AreaS");
					var lev = $(this).data("name");
					if ($(ths).siblings("#admRegVillageCode").html() == undefined) {
						var admRegCityCodes = $('<input>', {
							type: 'hidden',
							name: "admRegVillageCode",
							"data-id": $(this).data("id"),
							id: "admRegVillageCode",
							val: $(this).data("id"),
							valDesc: lev
						});
						$(ths).after(admRegCityCodes);
					}
					else {
						$(ths).siblings("#admRegVillageCode").val($(this).data("id"));
						$(ths).siblings("#admRegVillageCode").attr("valDesc", lev);;
						$(ths).siblings("#admRegVillageCode").attr("data-id", $(this).data("id"));
					}

					$(ths).siblings("#admRegCode").val($(ths).siblings("#admRegVillageCode").val());
					$(ths).siblings("#admRegCode").attr("valDesc", lev)

					// var bc = $(ths).siblings("#admRegCityCode").attr("valDesc");
					// var bp = $(ths).siblings("#admRegCountyCode").attr("valDesc");
					// var ba = $(ths).siblings("#admRegTownCode").attr("valDesc");
					// ths.value = bc + "-" + bp + "-" + ba + "-" + $(this).data("name");
					ths.value = $(this).data("name");
					Iput.colse();
				});
            });

        });
    });
    
    $("#_citys1 a").click(function () {
		//清空区县后面的所有值
		$(ths).siblings("#admRegTownCode").val("");
		$(ths).siblings("#admRegVillageCode").val("");

		$("#_citys1 a,#_citys2 a").removeClass("AreaS");
        $(this).addClass("AreaS");
        var lev =  $(this).data("name");
        if ($(ths).siblings("#admRegCountyCode").html() == undefined) {
            var admRegCityCodes = $('<input>', {
                type: 'hidden',
                name: "admRegCountyCode",
                "data-id": $(this).data("id"),
                id: "admRegCountyCode",
				val: $(this).data("id"),
				valDesc: lev
            });
            $(ths).after(admRegCityCodes);
        }
        else {
			$(ths).siblings("#admRegCountyCode").val($(this).data("id"));
            $(ths).siblings("#admRegCountyCode").attr("data-id", $(this).data("id"));
            $(ths).siblings("#admRegCountyCode").attr("valDesc", lev);
        }

		$(ths).siblings("#admRegCode").val($(ths).siblings("#admRegCountyCode").val());
		$(ths).siblings("#admRegCode").attr("valDesc", lev)

        //var bc = $(ths).siblings("#admRegCityCode").attr("valDesc");
        //ths.value = bc+ "-" + $(this).data("name");
		ths.value = $(this).data("name");
		
		var countyCurrent = $(this).data('id');
        var ar = getArea(countyCurrent);

        $("#_citys2 a").remove();
        $("#_citys2").append(ar);
        $("._citys1").hide();
        $("._citys1:eq(2)").show();

        $("#_citys2 a").click(function () {
			//清空乡镇后面的所有值
			$(ths).siblings("#admRegVillageCode").val("");

            $("#_citys2 a").removeClass("AreaS");
            $(this).addClass("AreaS");
            var lev = $(this).data("name");
            if ($(ths).siblings("#admRegTownCode").html() == undefined) {
                var admRegCityCodes = $('<input>', {
                    type: 'hidden',
                    name: "admRegTownCode",
                    "data-id": $(this).data("id"),
                    id: "admRegTownCode",
                    val: $(this).data("id"),
					valDesc: lev
                });
                $(ths).after(admRegCityCodes);
            }
            else {
				$(ths).siblings("#admRegTownCode").val($(this).data("id"));
                $(ths).siblings("#admRegTownCode").attr("valDesc", lev);;
                $(ths).siblings("#admRegTownCode").attr("data-id", $(this).data("id"));
            }

			$(ths).siblings("#admRegCode").val($(ths).siblings("#admRegTownCode").val());
			$(ths).siblings("#admRegCode").attr("valDesc", lev)

            // var bc = $(ths).siblings("#admRegCityCode").attr("valDesc");;
            // var bp = $(ths).siblings("#admRegCountyCode").attr("valDesc");;
            // ths.value = bc + "-" + bp + "-" + $(this).data("name");
			ths.value = $(this).data("name");
			var townCurrent = $(this).data('id');
            var ar = getArea3(townCurrent);
            $("#_citys3 a").remove();
            $("#_citys3").append(ar);
            $("._citys1").hide();
            $("._citys1:eq(3)").show();

            $("#_citys3 a").click(function () {
				$("#_citys3 a").removeClass("AreaS");
				$(this).addClass("AreaS");
				var lev = $(this).data("name");
				if ($(ths).siblings("#admRegVillageCode").html() == undefined) {
					var admRegCityCodes = $('<input>', {
						type: 'hidden',
						name: "admRegVillageCode",
						"data-id": $(this).data("id"),
						id: "admRegVillageCode",
						val: $(this).data("id"),
						valDesc: lev
					});
					$(ths).after(admRegCityCodes);
				}
				else {
					$(ths).siblings("#admRegVillageCode").val($(this).data("id"));
					$(ths).siblings("#admRegVillageCode").attr("valDesc", lev);;
					$(ths).siblings("#admRegVillageCode").attr("data-id", $(this).data("id"));
				}

				$(ths).siblings("#admRegCode").val($(ths).siblings("#admRegVillageCode").val());
				$(ths).siblings("#admRegCode").attr("valDesc", lev)

				// var bc = $(ths).siblings("#admRegCityCode").attr("valDesc");
				// var bp = $(ths).siblings("#admRegCountyCode").attr("valDesc");
				// var ba = $(ths).siblings("#admRegTownCode").attr("valDesc");
				// ths.value = bc + "-" + bp + "-" + ba + "-" + $(this).data("name");
				ths.value = $(this).data("name");
				Iput.colse();
			});
        });

    });
    
    $("#_citys2 a").click(function () {
		//清空乡镇后面的所有值
		$(ths).siblings("#admRegVillageCode").val("");

        $("#_citys2 a").removeClass("AreaS");
        $(this).addClass("AreaS");
        var lev = $(this).data("name");
        if ($(ths).siblings("#admRegTownCode").html() == undefined) {
            var admRegCityCodes = $('<input>', {
                type: 'hidden',
                name: "admRegTownCode",
                "data-id": $(this).data("id"),
                id: "admRegTownCode",
                val: $(this).data("id"),
				valDesc: lev
            });
            $(ths).after(admRegCityCodes);
        }
        else {
			$(ths).siblings("#admRegTownCode").val($(this).data("id"));
            $(ths).siblings("#admRegTownCode").attr("valDesc", lev);;
            $(ths).siblings("#admRegTownCode").attr("data-id", $(this).data("id"));
        }

		$(ths).siblings("#admRegCode").val($(ths).siblings("#admRegTownCode").val());
		$(ths).siblings("#admRegCode").attr("valDesc", lev)

        // var bc = $(ths).siblings("#admRegCityCode").attr("valDesc");;
        // var bp = $(ths).siblings("#admRegCountyCode").attr("valDesc");;
        // ths.value = bc + "-" + bp + "-" + $(this).data("name");
		ths.value = $(this).data("name");
		var townCurrent = $(this).data('id');
        var ar = getArea3(townCurrent);
        $("#_citys3 a").remove();
        $("#_citys3").append(ar);
        $("._citys1").hide();
        $("._citys1:eq(3)").show();

        $("#_citys3 a").click(function () {
			$("#_citys3 a").removeClass("AreaS");
			$(this).addClass("AreaS");
			var lev = $(this).data("name");
			if ($(ths).siblings("#admRegVillageCode").html() == undefined) {
				var admRegCityCodes = $('<input>', {
					type: 'hidden',
					name: "admRegVillageCode",
					"data-id": $(this).data("id"),
					id: "admRegVillageCode",
					val: $(this).data("id"),
					valDesc: lev
				});
				$(ths).after(admRegCityCodes);
			}
			else {
				$(ths).siblings("#admRegVillageCode").val($(this).data("id"));
				$(ths).siblings("#admRegVillageCode").attr("valDesc", lev);;
				$(ths).siblings("#admRegVillageCode").attr("data-id", $(this).data("id"));
			}

			$(ths).siblings("#admRegCode").val($(ths).siblings("#admRegVillageCode").val());
			$(ths).siblings("#admRegCode").attr("valDesc", lev)

			// var bc = $(ths).siblings("#admRegCityCode").attr("valDesc");
			// var bp = $(ths).siblings("#admRegCountyCode").attr("valDesc");
			// var ba = $(ths).siblings("#admRegTownCode").attr("valDesc");
			// ths.value = bc + "-" + bp + "-" + ba + "-" + $(this).data("name");
			ths.value = $(this).data("name");
			Iput.colse();
		});
    });
    
    $("#_citys3 a").click(function () {
		$("#_citys3 a").removeClass("AreaS");
		$(this).addClass("AreaS");
		var lev = $(this).data("name");
		if ($(ths).siblings("#admRegVillageCode").html() == undefined) {
			var admRegCityCodes = $('<input>', {
				type: 'hidden',
				name: "admRegVillageCode",
				"data-id": $(this).data("id"),
				id: "admRegVillageCode",
				val: $(this).data("id"),
				valDesc: lev
			});
			$(ths).after(admRegCityCodes);
		}
		else {
			$(ths).siblings("#admRegVillageCode").val($(this).data("id"));
			$(ths).siblings("#admRegVillageCode").attr("valDesc", lev);;
			$(ths).siblings("#admRegVillageCode").attr("data-id", $(this).data("id"));
		}

		$(ths).siblings("#admRegCode").val($(ths).siblings("#admRegVillageCode").val());
		$(ths).siblings("#admRegCode").attr("valDesc", lev)

		// var bc = $(ths).siblings("#admRegCityCode").attr("valDesc");
		// var bp = $(ths).siblings("#admRegCountyCode").attr("valDesc");
		// var ba = $(ths).siblings("#admRegTownCode").attr("valDesc");
		// ths.value = bc + "-" + bp + "-" + ba + "-" + $(this).data("name");
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


function getCity(obj) {
    var g = '';
    $.ajax({
        url: _base + "/ajax/areaList",
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
function getArea(obj) {
    var g = '';
    $.ajax({
        url: _base + "/ajax/areaList",
        dataType: 'json',
		async: false,
        data: {code: obj},
        success: function(data){
            var lists = data.result;
            for (var i = 0; i < lists.length; i++) {
                g += '<a data-level="1" data-id="' + lists[i]['id'] + '" data-name="' + lists[i]['name'] + '" title="' +lists[i]['name'] + '">' + lists[i]['name'] + '</a>'
            }
        }
    });

    $("#_citysheng li").removeClass("citySel");
    $("#_citysheng li:eq(2)").addClass("citySel");
    return g;
}
function getArea3(obj) {
    var g = '';

    $.ajax({
        url: _base + "/ajax/areaList",
        dataType: 'json',
		async: false,
        data: {code: obj},
        success: function(data){
            var lists = data.result;
            for (var i = 0; i < lists.length; i++) {
                g += '<a data-level="1" data-id="' + lists[i]['id'] + '" data-name="' + lists[i]['name'] + '" title="' +lists[i]['name'] + '">' + lists[i]['name'] + '</a>'
            }
        }
    });

    $("#_citysheng li").removeClass("citySel");
    $("#_citysheng li:eq(3)").addClass("citySel");
    return g;
}