function myData () {
 
  {
	var patient={
		name: $("#name").val(),
		age: $("#age").val(),
		sex:  $('input[name=contact]:checked').val(),
		aadhar: $("#aadhar").val(),
		address: $("#address").val()

	}

$.post ("http://59e1a6285142a10012463195.mockapi.io/Admission",patient)

}

};