window.addEventListener("load", function(){

	var container = document.querySelector("[data-parallax]");


		var childNodes = container.children;
		for(var n=0; n<childNodes.length; n++){
			childNodes[n].setAttribute("data-index", n+1);
		}

		container.addEventListener("mousemove", function(e){
			var elms = this.children;
			for(var c=0; c<elms.length; c++){
				var motion = parseInt(elms[c].getAttribute("data-index"))/10;

				var x = ((e.clientX)*motion)+"px";
				var y = ((e.clientY)*motion)+"px";

				elms[c].style.backgroundPosition = x + " " + y;
			}
		});


});
