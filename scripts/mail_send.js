$("#sendMail").on("click", function() {

	// Получаем данные из полей, чекбоксов и т.д.
	var user_name = $("#user_name").val();
	var user_email = $("#user_email").val().trim();
	var user_phone = $("#user_phone").val().trim();
	var selector = $("#task option:selected").text();
	var contacts = $("#divchik option:checked").text();
	var tz = $("#yean_no option:checked").text();
	var is_message = $("#text-user").val();

	if(user_name=="")
	{
		alert("Поле \"Имя\" пустое!");
		// Обрабатываем исключения
	}

	$.ajax ({
		url: 'php/script_php.php', // Файл PHP, куда отправляются данные и где они будут обрабатываться
		type: 'POST', // Тип передачи - POST
		cache: false, // Отключение кеширования
		//Данные, которые будут передаваться, 'название элемента(по которому будут доступ в php получать)' - переменная, которую передаем
		data: {'name': user_name, 'email': user_email, 'phone': user_phone, 'selector': selector, 'contacts': contacts, 'tz': tz, 'is_message': is_message}, 
		dataType: 'html', // Кодировка html (в форме можно будет использовать теги html)
		beforeSend: function(){ // Что будет выполнено пока форма отправляется
			$("#sendMail").prop("disabled", true); // Кнопка "Отправить" становится не активной
		}
		success: function(data){ // Что будет выполнено после отправки формы
			$("#form_mail").trigger("reset"); // Форма полностью очищается
			alert('Сообщение отправлено!'); // Окно "Сообщение отправлено"
			setTimeout(() => {  $("sendMail").prop("disabled", false); }, 5000); // После 5 секунд кнопка снова станет активной
			
		}
	});
});