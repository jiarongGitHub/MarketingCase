(function(w){
	w.tools=Object.create(null);
	w.tools.addClass=function (node,className){
										var reg=new RegExp("\\b"+className+"\\b");
										if(!reg.test(node.className)){
											node.className +=(" "+className); 
										}
									}
	
	w.tools.removeClass=function (node,className){
		if(node.className){
			var reg=new RegExp("\\b"+className+"\\b");
			var classes = node.className;
			node.className=classes.replace(reg,"");
			if(/^\s*$/g.test(node.className)){
				node.removeAttribute("class");
			}
		}else{
			node.removeAttribute("class");
		}
	}
	
	w.tools.getDis = function (p1,p2){
		var a = p1.clientY - p2.clientY;
		var b = p1.clientX - p2.clientX;
		
		return Math.sqrt(a*a+b*b);
	}
	
	w.tools.getAngle = function (p1,p2){
		var a = p1.clientY - p2.clientY;
		var b = p1.clientX - p2.clientX;
		return Math.atan2(a,b)*180/Math.PI;
	}
})(window)