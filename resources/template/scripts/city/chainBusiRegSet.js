function ChainBusiRegCity(obj,e) {
    var ths = obj;
    var dal = '<div class="_citys" style="width: 280px;"><span title="关闭" id="cColse" >×</span><ul id="_citysheng" class="_citys0"><li class="citySel">省</li><li>地市</li><li id="clear" style="float: right;margin-right: 20px;">清除</li></ul><div id="_citys0" class="_citys1"></div><div style="display:none" id="_citys1" class="_citys1"></div><div style="display:none" id="_citys2" class="_citys1"></div></div>';
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
		data: {type: 'busi_reg_province_code'},
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
            		if(data.result.busiRegProvinceCode != ""){
            			$("a[data-id='"+data.result.busiRegProvinceCode+"']").addClass("AreaS");
            		}
            		if(data.result.busiRegCityCode != ""){
            			var g = getChainBusiCity(data.result.busiRegProvinceCode);
            			$("#_citys1").append(g);
            			$("._citys1:eq(0)").hide();
            			$("._citys1:eq(1)").show();
            			$("a[data-id='"+data.result.busiRegCityCode+"']").addClass("AreaS");
            		}
            	}
            }
    	})
    }
    $("#_citys0 a").click(function () {
    	var cityCurrent = $(this).data('id');
        var g = getChainBusiCity(cityCurrent);

		//清楚地市后面的
		$(ths).siblings("#busiRegCityCode").val("");

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
				"data-id": $(this).data("id"),
				id: "busiRegProvinceCode",
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
			$(ths).after(busiRegProvinceCode);
		}
		else {
			$(ths).siblings("#busiRegProvinceCode").val($(this).data("id"));
			$(ths).siblings("#busiRegProvinceCode").attr("valDesc", lev);
			$(ths).siblings("#busiRegProvinceCode").attr("data-id", $(this).data("id"));
		}

        $(ths).siblings("#busiRegCode").val($(ths).siblings("#busiRegProvinceCode").val());
		$(ths).siblings("#busiRegCode").attr("valDesc", lev);

		$("#_citys1 a").click(function () {
			$("#_citys1 a,#_citys2 a").removeClass("AreaS");
			$(this).addClass("AreaS");
			var lev =  $(this).data("name");
			if ($(ths).siblings("#busiRegCityCode").html() == undefined) {
				var busiRegCityCode = $('<input>', {
					type: 'hidden',
					name: "busiRegCityCode",
					"data-id": $(this).data("id"),
					id: "busiRegCityCode",
					val: $(this).data("id"),
					valDesc: lev
				});
				$(ths).after(busiRegCityCode);
			}
			else {
				$(ths).siblings("#busiRegCityCode").val($(this).data("id"));
				$(ths).siblings("#busiRegCityCode").attr("data-id", $(this).data("id"));
				$(ths).siblings("#busiRegCityCode").attr("valDesc", lev);
			}

			$(ths).siblings("#busiRegCode").val($(ths).siblings("#busiRegCityCode").val());
			$(ths).siblings("#busiRegCode").attr("valDesc", lev);

			// var bc = $(ths).siblings("#busiRegProvinceCode").attr("valDesc");
			// ths.value = bc+ "-" + $(this).data("name");
			ths.value = $(this).data("name");
			Iput.colse();
		});

    });
    
    $("#_citys1 a").click(function () {
		$("#_citys1 a,#_citys2 a").removeClass("AreaS");
		$(this).addClass("AreaS");
		var lev =  $(this).data("name");
		if ($(ths).siblings("#busiRegCityCode").html() == undefined) {
			var busiRegCityCode = $('<input>', {
				type: 'hidden',
				name: "busiRegCityCode",
				"data-id": $(this).data("id"),
				id: "busiRegCityCode",
				val: $(this).data("id"),
				valDesc: lev
			});
			$(ths).after(busiRegCityCode);
		}
		else {
			$(ths).siblings("#busiRegCityCode").val($(this).data("id"));
			$(ths).siblings("#busiRegCityCode").attr("data-id", $(this).data("id"));
			$(ths).siblings("#busiRegCityCode").attr("valDesc", lev);
		}

		$(ths).siblings("#busiRegCode").val($(ths).siblings("#busiRegCityCode").val());
		$(ths).siblings("#busiRegCode").attr("valDesc", lev);

		// var bc = $(ths).siblings("#busiRegProvinceCode").attr("valDesc");
		// ths.value = bc+ "-" + $(this).data("name");
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

function getChainBusiCity(obj) {
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