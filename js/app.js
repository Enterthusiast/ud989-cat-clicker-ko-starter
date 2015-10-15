var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('???');
	this.title = ko.computed(function(){
		if(this.clickCount() >= 0 && this.clickCount() < 10) {
				return 'Newborn';
		}
		else if(this.clickCount() >= 10 && this.clickCount() < 20) {
				return 'Infant';
		}
		else if(this.clickCount() >= 20 && this.clickCount() < 30) {
				return 'Toddler';
		}
		else if(this.clickCount() >= 30 && this.clickCount() < 40) {
				return 'Kid';
		}
		else if(this.clickCount() >= 40 && this.clickCount() < 50) {
				return 'Teen';
		}
		else if(this.clickCount() >= 50 && this.clickCount() < 60) {
				return 'Hipster';
		} else {
			return "King of the Hill";
		}
	}, this);

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
};

ko.applyBindings(new ViewModel);