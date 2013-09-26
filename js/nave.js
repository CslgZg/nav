$(function(){
	change();
	
});


function change(){

	$(".qiantaoa").mouseover(function(){
		$(".qiantaoa").css("height","113");
		$(".desa").css("display","block");
	});
	$(".qiantaoa").mouseout(function(){
		$(".qiantaoa").css("height","95");
		$(".desa").css("display","none");
	});


	$(".qiantaob").mouseover(function(){
		$(".qiantaob").css("height","113");
		$(".desb").css("display","block");
	});
	$(".qiantaob").mouseout(function(){
		$(".qiantaob").css("height","95");
		$(".desb").css("display","none");
	});

	$(".qiantaoc").mouseover(function(){
		$(".qiantaoc").css("height","60");
		$(".desc").css("display","block");
	});
	$(".qiantaoc").mouseout(function(){
		$(".qiantaoc").css("height","44");
		$(".desc").css("display","none");
	});

	$(".qiantaod").mouseover(function(){
		$(".qiantaod").css("height","85");
		$(".desd").css("display","block");
	});
	$(".qiantaod").mouseout(function(){
		$(".qiantaod").css("height","64");
		$(".desd").css("display","none");
	});
}

