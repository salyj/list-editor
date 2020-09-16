var ListObject = function(field1, field2, field3, field4) {

	// This is a comment.
	this.field1 = field1;
	this.field2 = field2;
	this.field3 = field3;
	this.field4 = field4;

	// listObject Getters
	this.getField1 = function() {
		return this.field1;
	};
	this.getField2 = function() {
		return this.field2;
	};
	this.getField3 = function() {
		return this.field3;
	};
	this.getField4 = function() {
		return this.field4;
	};

	// listObject Setters
	this.setField1 = function(field1) {
		this.field1 = field1;
	};
	this.setField2 = function(field2) {
		this.field2 = field2;
	};
	this.setField3 = function(field3) {
		this.field3 = field3;
	};
	this.setField4 = function(field4) {
		this.field4 = field4;
	};

};