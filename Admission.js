$(document).ready(function(){
	$.ajax({
		type:"GET",
		url:"http://59e1a6285142a10012463195.mockapi.io/Admission",
		dataType:"json",
		success:function(result){
			var txt=""
			for(i=0;i<result.length;i++){
				txt+="<tr><td>"+result[i].id+"</td><td>"+result[i].name+"</td><td>"+result[i].age+"</td><td>"
				+result[i].sex+"</td><td>"+result[i].aadhar+"</td><td>"+result[i].address+"</td></tr>"
			}
			$("#tbody").html(txt);
		}
	})
});
