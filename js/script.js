function tipCalculate(){
	var totalBill = document.getElementById('bill').value;

	var percBtns = document.getElementsByClassName('tip-btn');
	console.log(percBtns);

//for loop// 

for(var i=0; i<percBtns.length; i++){
	if(percBtns[i].checked){
	var tipPerc = percBtns[i].value;
			}
		}

		//if something is true (), we're going to run something in the curly brackets; i represents each index making you check each button if what's in the straight brackets is true, then we want the property value through console.log[i].value // 

var tipTotal = totalBill * tipPerc;

var tipBox = document.getElementById('tipamount');
tipBox.innerHTML = '$'+tipTotal;

}
//var is a reference to the total bill]// 
