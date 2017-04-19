$(document).ready(function()
{

	var chargerProfil = function()
	{		
		$.get('http://192.168.1.177/user').done(function(data)
		{
			console.log(data);
			$("#name").html(data.name);
			$("#lastname").html(data.lastName);
			$("#avatar").attr('src', data.avatar);		
		});		
				
	};

	chargerProfil();
	$('button').on('click', function()
	{
		chargerProfil();	
	});	
	

});