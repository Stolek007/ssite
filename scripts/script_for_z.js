let modal = document.getElementsByClassName('order_service_1')[0];
let modalBack = document.getElementsByClassName('modal-back')[0];
let contentClose = document.getElementsByClassName('close')[0];

modal.onclick = function popUp() {
	modalBack.style.display = "block";
}

contentClose.onclick = function closeContent() {
	modalBack.style.display = "none";
}

window.onclick = function closePopUp(event) {
	if (event.target == modalBack) {
			modalBack.style.display = "none";
	}
}