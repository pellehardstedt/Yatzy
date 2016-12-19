function sumOf(dice, face) {
	var sum = 0;
	for (var i = 0; i < 5; i++) {
		if (dice[i] === face) {
			sum += face;
		}
	}
	return sum;
}

function nbrOf(dice, face) {
	var nbr = 0;
	for (var i = 0; i < 5; i++) {
		if (dice[i] === face) {
			nbr++;
		}
	}
	return nbr;
}

//returns an array with of length 6, this felt smoother than 6 methods doing 99% the same thing
function acesToSixes(dice) {
	var upper = [];
	for (var i = 0; i < 6; i++) {
		upper.push(sumOf(dice, i+1));
	}
	return upper;
}

function onePair(dice) {
	var best = 0;
	var counter = 0;
	for (var i = 1; i <= 6; i++) {
		if (nbrOf(dice, i) >= 2) {
			best = i * 2;
			counter++;
		}
		if (counter > 1) {
			return best;
		}
	}
	return best;
}

function twoPairs(dice) {
	var sum = 0;
	var counter = 0;
	for (var i = 1; i <= 6; i++) {
		if (nbrOf(dice, i) >= 2) {
			sum += i * 2;
			counter++;
			if (counter === 2) {
				return sum;
			}
		}
	}
	return 0;
}

function threeOfAKind(dice) {
	for (var i = 1; i <= 6; i++) {
		if (nbrOf(dice, i) >= 3) {
			return i*3;
		}
	}
	return 0;
}

function fourOfAKind(dice) {
	for (var i = 1; i <= 6; i++) {
		if (nbrOf(dice, i) >= 4) {
			return i*4;
		}
	}
	return 0;
}

function smallStraight(dice) {
	if (nbrOf(dice, 1) === 1 && nbrOf(dice, 2) === 1 && nbrOf(dice, 3) === 1 && nbrOf(dice, 4) === 1 && nbrOf(dice, 5) === 1) {
		return 15;
	}
	return 0;
}

function largeStraight(dice) {
	if (nbrOf(dice, 2) === 1 && nbrOf(dice, 3) === 1 && nbrOf(dice, 4) === 1 && nbrOf(dice, 5) === 1 && nbrOf(dice, 6) === 1) {
		return 20;
	}
	return 0;
}

function fullHouse(dice) {
	var sum = 0;
	var pair = false;
	var thrice =  false;
	for (var i = 1; i <= 6; i++) {
		if (nbrOf(dice, i) === 2) {
			sum += i * 2;
			pair = true;
		}
		if (nbrOf(dice, i) === 3) {
			sum += i * 3;
			thrice = true;
		}
		if (pair && thrice) {
			return sum;
		}
	}
	return 0;
}

function chance(dice) {
	var sum = 0;
	for (var i = 0; i < 5; i++) {
		sum += dice[i];
	}
	return sum;
}

function yatzy(dice) {
	if (nbrOf(dice, 1) === 5 || nbrOf(dice, 2) === 5 || nbrOf(dice, 3) === 5 || nbrOf(dice, 4) === 5 || nbrOf(dice, 5) === 5 || nbrOf(dice, 6) === 5) {
		return 50;
	}
	return 0;
}