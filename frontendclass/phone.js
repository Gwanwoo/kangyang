console.log("hello java");

var number = "";
function ApplePhone(options) {
	this.model = "iPhone";
	this.color = options.color;
	this.price = options.price;

}

ApplePhone.prototype.call = function() {
	if (this.number === "") {
		console.log("�����ϼ���");
	} else {
		console.log("��ȭ�� �̴ϴ�.");
		console.log(number);
	}

};
ApplePhone.prototype.setNumber = function(userNumber) {
	number = userNumber;
};

var myPhone = new ApplePhone({
	color : "white",
	price : 200
});

console.log(myPhone.model);

myPhone.setNumber("01024600726");
myPhone.call();