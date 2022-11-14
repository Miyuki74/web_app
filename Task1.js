var price = document.querySelectorAll('.price');
var total = document.querySelectorAll('.total');
var qty = document.querySelectorAll('#qty');
var field_total = document.querySelectorAll('.field_total');
var all_total = document.querySelectorAll('.all_total');

// ボタンの要素を取得
var button = document.getElementById("button");

// ボタンをクリックした時の処理
button.addEventListener("click", function(e) {    
	e.preventDefault(); 
     
	let len = total.length;
	a = 0;
	sum1 = 0;
	sum2 = 0;
	sum3 = 0;

// 2つの数値をかける 

for (let j = 0; j < 5; j++){   
	total[j].value = parseInt(price[j].value, 10) * parseInt(qty[j].value, 10);
	a = total[j].value;
	sum1 += parseInt(a, 10); 
	field_total[0].value =sum1;
}

for (let k = 5; k < 10; k++){   
	total[k].value = parseInt(price[k].value, 10) * parseInt(qty[k].value, 10);
	a = total[k].value;
	sum2 += parseInt(a, 10); 
	field_total[1].value =sum2;
}

for (let m = 10; m < 15; m++){   
	total[m].value = parseInt(price[m].value, 10) * parseInt(qty[m].value, 10);
	a = total[m].value;
	sum3 += parseInt(a, 10); 
	field_total[2].value =sum3;
}
// 総計を算出する
    t1 = parseInt(field_total[0].value,10);
	t2 = parseInt(field_total[1].value,10);
	t3 = parseInt(field_total[2].value,10);
	all_total[0].value = t1+t2+t3;
	
});

