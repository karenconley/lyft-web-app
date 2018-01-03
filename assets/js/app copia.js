$(document).ready(function(){

/* Splash */
	setTimeout(function() {
		$('.intro').fadeOut(800);
		},2500);
		setTimeout(function() {
			$('.home').fadeIn(1000);
		});
});


/*Botón y caracteres numéricos*/
$('#phoneNumber').keyup(function(){
	if($(this).val().length === 10){
		$('#btnCode').removeClass('disabled');
	}if($(this).val().length < 10){
		$('#btnCode').addClass('disabled');
	}if($(this).val().length > 10){
		$('#btnCode').addClass('disabled');
		$('#phoneNumber').prop('disabled',true); /*Desabilitar*/
		$('#phoneNumber').prop('disabled',false); /*Activar*/
	}if (isNaN($(this).val())){
		$('#contNumber').text('Only Number');
		$('#btnCode').addClass('disabled');
	}else{
		$('#contNumber').text('');
	}
	return false;
});


/*Código*/
$('#codeButton').click(code);
function code() {
	var code = '';
	var str = ('123456789');
	for (var i = 0; i < 3; i++) {
		code += str.charAt(Math.floor(Math.random() * str.length));
	}
	alert('Tu código: LAB-' + code);
}

$('#verifyButton').click(final);
function final() {
	$('.signUp').show();
	$('.home').hide();
}

$('#modal1').on('shown.bs.modal', function(){
	$('#myInput').focus()
})