let ivanInfoFirst = document.getElementsByClassName('ivan-info-fi')[0];
let ivanInfoSecond = document.getElementsByClassName('ivan-info-se')[0];
let ivanInfoThird = document.getElementsByClassName('ivan-info-th')[0];
let ivanInfoFourth = document.getElementsByClassName('ivan-info-fo')[0];

function showPhone() {
	ivanInfoFirst.classList.remove('ivan-info-fi');
	ivanInfoFirst.classList.add('ivan-info-fi-yes');
}

function showPhoneNo() {
	ivanInfoFirst.classList.remove('ivan-info-fi-yes');
	ivanInfoFirst.classList.add('ivan-info-fi');
}

function showEmail() {
	ivanInfoSecond.classList.remove('ivan-info-se');
	ivanInfoSecond.classList.add('ivan-info-se-yes');
}

function showEmailNo() {
	ivanInfoSecond.classList.remove('ivan-info-se-yes');
	ivanInfoSecond.classList.add('ivan-info-se');
}

function showTelega() {
	ivanInfoThird.classList.remove('ivan-info-th');
	ivanInfoThird.classList.add('ivan-info-th-yes');
}

function showTelegaNo() {
	ivanInfoThird.classList.remove('ivan-info-th-yes');
	ivanInfoThird.classList.add('ivan-info-th');
}

function showDiscord() {
	ivanInfoFourth.classList.remove('ivan-info-fo');
	ivanInfoFourth.classList.add('ivan-info-fo-yes');
}

function showDiscordNo() {
	ivanInfoFourth.classList.remove('ivan-info-fo-yes');
	ivanInfoFourth.classList.add('ivan-info-fo');
}