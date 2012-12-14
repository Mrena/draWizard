var hours = 0;
var minutes = 0;
var seconds = 0;
var moments = 0;

function countUp()
     {
		
		moments++;
		 
		if(moments==60)
		     {
		      
				moments = 0;
				seconds++;
				
				
				
						
						   
					
			}
			if(seconds==60)
				    {
				    seconds = 0;
						minutes++; 
				     
				     
				     }
				     
				    if(minutes==60)
						     {
								minutes = 0;
								hours++;
								
							} 
		
		displayTime();
	}
	
	
	function displayTime()
	     {
	        
	        
	      /*  
			hours < 10 ? hours = "0"+hours : "";
			minutes < 10 ? minutes = "0"+minutes : "";
			seconds < 10 ? seconds = "0"+seconds : "";
			moments < 10 ? moments = "0"+moments : ""; 
			*/
			
		   
			
			
		$("#timer").html("Time: "+hours+":"+minutes+":"+seconds+":"+moments);
		   hours =	parseInt(hours);
		   minutes =	parseInt(minutes);
		   seconds =	parseInt(seconds);
		   moments =	parseInt(moments); 
			
		}
		
	var timer =	setInterval("countUp()",100);

