$(function(){
	
	var note = $('#note'),
		ts = new Date(2014, 0, 1),
		newYear = true;
	
	var start_actual_time  =  new Date().getTime();
	var end_actual_time    =  "08/15/2014 12:25";

	start_actual_time = new Date(start_actual_time);
	end_actual_time = new Date(end_actual_time);

	var diff = end_actual_time - start_actual_time;

	// alert(diff);
	
	var diffSeconds = diff/1000;
	var HH = Math.floor(diffSeconds/3600);
	var MM = Math.floor(diffSeconds%3600)/60;

	var formatted = ((HH < 10)?("0" + HH):HH) + ":" + ((MM < 10)?("0" + MM):MM)
	// alert(formatted);
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + diff;
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " hari"+ ", ";
			message += hours + " jam" + ", ";
			message += minutes + " menit" + " dan ";
			message += seconds + " detik" + " <br />";
			
			if(newYear){
				message += "left until the new year!";
			}
			else {
				message += "lagi sampai kamu bisa akses sesuatu yang keren! :D";
			}
			
			note.html(message);
		}
	});
	
});
