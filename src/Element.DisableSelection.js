
Element.implement({
		
	disableSelection: function(){
		if (typeof this.onselectstart!="undefined") //IE route
			this.onselectstart=function(){return false}
		else if (typeof this.style.MozUserSelect!="undefined") //Firefox route
			this.style.MozUserSelect="none"
		else //All other route (ie: Opera)
			this.onmousedown=function(){return false}
		this.style.cursor = "default"
		return this;
		this.addClass('-webkit-user-select','none');
	}
	
});