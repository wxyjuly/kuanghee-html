function tjDeptRegCity(obj,chlKindId,busiRegCode,admRegCode,e) {
    var ths = obj;
    var dal = '<div class="_citys"><span title="关闭" id="cColse" >×</span><ul id="_citysheng" class="_citys0"><li class="citySel">部门</li><li>子部门</li></ul>' +
		'<div id="_citys0" class="_citys1"></div><div style="display:none" id="_citys1" class="_citys1"></div></div>';
    Iput.show({ id: ths, event: e, content: dal,width:"470"});
    $("#cColse").click(function () {
        Iput.colse();
    });
    var tb_dept = [];
	var  depts =[];
	$.ajax({
		url: _base + "/ajax/sysOfficeListTJ",
		dataType: 'json',
		async: false,
		data: {
			chlKindId: chlKindId,
			busiRegCode: busiRegCode,
			admRegCode: admRegCode
		},
		success: function(data) {
			depts = data.result;
		}
	});
    var b = depts;
	var deptId;
	if (b != null) {
		tb_dept.push('<a data-level="0" data-flag="'+b['flag']+'" data-id="' + b['deptId'] + '" data-name="' + b['deptName'] + '">' + b['deptName'] + '</a>');
	}

	$("#_citys0").append(tb_dept.join(""));
    $("#_citys0 a").click(function () {
        var g = getDeptTj($(this), 1);

		$("#_citys1 a").remove();
        $("#_citys1").append(g);
        $("._citys1").hide();
        $("._citys1:eq(1)").show();
        $("#_citys0 a,#_citys1 a,#_citys2 a").removeClass("AreaS");
        $(this).addClass("AreaS");
        var lev = $(this).data("name");
        ths.value = $(this).data("name");

        $("#deptId").val($(this).data("id"));
		$("#deptId").attr("valDesc", lev);
		getParentDeptTj($("#deptId").val());

        $("#_citys1 a").click(function () {
			$("#_citys1 a,#_citys2 a").removeClass("AreaS");
            $(this).addClass("AreaS");
            var lev =  $(this).data("name");

			$("#deptId").val($(this).data("id"));
			$("#deptId").attr("valDesc", lev);

            ths.value = $(this).data("name");
			getParentDeptTj($("#deptId").val());
			Iput.colse();
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


function getDeptTj(obj, index) {
    var g = '';
	if (obj.data('flag') == 1) {
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
	}
    $("#_citysheng li").removeClass("citySel");
    $("#_citysheng li:eq("+index+")").addClass("citySel");
    return g;
}

function getParentDeptTj(id) {
	//清空所有值
	$("#deptId1").val("");
	$("#deptId2").val("");
	$("#deptId3").val("");
	$("#deptId4").val("");
	$("#deptId5").val("");
	$("#deptId6").val("");

	$.ajax({
		url: _base + "/ajax/sysOfficeParentIds",
		dataType: 'json',
		async: false,
		data: {id: id},
		success: function(data){
			var pids = data.result;
			pids += id;

			var arr = pids.split(",")
			for (var i = 1; i <= arr.length; i++) {
				$("#deptId"+i).val(arr[i]);
			}
		}
	});
}