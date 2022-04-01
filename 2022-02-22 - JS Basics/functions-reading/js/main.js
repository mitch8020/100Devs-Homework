/*
============================
TASK 1: IS "ELSE" REQUIRED?
============================
*/

function checkAge(age) {
	if (age > 18) {
			return true;
	} else {
			return confirm('Did parents allow you?');
	}
}

// is the same as the following

function checkAge(age) {
  if (age > 18) {
  	return true;
  }
  return confirm('Did parents allow you?');
}

/*
============================
TASK 2: REWRITE THE FUNCTION USING '?' OR '||'
============================
*/

function checkAge(age) {
  if (age > 18) {
		return true;
	} else {
		return confirm('Did parents allow you?');
	}
}

function checkAge(age) {
	return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge(age) {
	return age > 18 || confirm('Did parents allow you?');
}

/*
============================
TASK 3: FUNCTION MIN(A,B)
============================
*/

function min(a,b) {
	return a > b ? b : a;
}

/*
============================
TASK 4: FUNCTION POW(X,N)
============================
*/

document.getElementById('submitButton').onclick = pow;

function pow(x,n) {
	x = document.getElementById('baseNumber').value;

	n = document.getElementById('exponentNumber').value;

	let result = x;
	for (i = 1; i < n; i++){
		result *= x;
	};
	
	document.querySelector('strong').innerHTML = result;
};

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n < 1) {
// 	alert(`Power ${n} is not supported, use a positive integer`)
// } else {
// 	alert( pow(x, n) );
// }
