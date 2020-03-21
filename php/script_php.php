<?php

	//Получаем данные
	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$selector = $_POST['selector'];
	$contacts = $_POST['contacts'];
	$tz = $_POST['tz'];
	$is_message = $_POST['is_message'];

	// Устанавливаем тему сообщения
	$subject = "=?utf-8?B?".base64_encode("Форма Заказать Услугу")."?=";

	//Заголовки
	$headers = "From: $email\r\nReply-To: $email\r\nContent-tupe: text/html; charset=utf-8\r\n";

	//Тело сообщения
	$message = "<strong>Как обращаться к заказчику:</strong> $name<br><strong>Email заказчика:</strong> $email<br>
	<strong>Номер телефона:</strong> $phone<br>
	<strong>Вид услуги:</strong> $selector<br><strong>Как лучше связываться с заказчиком:</strong> $contacts<br><strong>Тех. Задание:</strong> $tz<br>
	<strong>Само тех.задание:</strong> $is_message<br>"

	// Отправка
	$success = mail("stolek007@cypcommunity.site", $subject, $message, $headers);

?>