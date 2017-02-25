var lose = 0;
var win = 0;
var crystalValue = Math.floor(Math.random() * (102)+ 19)
var gemArray = [];
var total = 0;

$(document).ready(function(){

	function gemFunc() {

		for (var i = 0; i < 4; i++){

		var gem = Math.floor(Math.random() * 12) + 1 ;
		
		gemArray.push(gem);
	}
};

	gemFunc();
	$('.numberToMatch').html(crystalValue);
	//cheat sheet
	console.log(gemArray)



	$('.pic1').on("click", function(){
		var gem1value = (gemArray[0]);
		console.log(gem1value);
		total = total + gem1value;
		$('.score').html(total);
		checkit();
	});
	
	$('.pic2').on("click", function(){
	//take the value and push it to total score
	// gemFunc();
		var gem2value = (gemArray[1]);
		console.log(gem2value);
		total = total + gem2value;
		$('.score').html(total);
		checkit();
	});
	
	$('.pic3').on("click", function(){
	//take the value and push it to total score
	// gemFunc();
		var gem3value = (gemArray[2]);
		console.log(gem3value);
		total = total + gem3value;
		$('.score').html(total);
		checkit();
	});

	$('.pic4').on("click", function(){
	//take the value and push it to total score
	// gemFunc();
		var gem4value = (gemArray[3]);
		console.log(gem4value);
		total = total + gem4value;
		$('.score').html(total);
		checkit();
	});

	function checkit(){
if (crystalValue === total) {
	$("#winlossmessage").html("You won that round!");
	win = win + 1;
	$("#wins").html(win);
	reset();

	}
else if (crystalValue < total) {
	$("#winlossmessage").html("You loss that round!");
	lose = lose + 1;
	console.log(lose);
	$("#losses").html(lose);
	reset();
}

};
function reset(){
	gemArray.length = 0;
	gemFunc();
	crystalValue = Math.floor(Math.random() * (102)+ 19)
	$('#numberToMatch').html(crystalValue);
	total = 0;
	$('.score').html(total);
	console.log(gemArray)
	}
});