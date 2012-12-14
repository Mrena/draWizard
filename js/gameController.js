$(document).ready(function(){
 
 var manSpace = new Array(40,50);
 var images = ("yellowstar.gif","greenstar.gif","golfball.gif","pebble.gif");
 var hideImage = new Array();
 var hideImageCoords = new Array();
 var curr;
 
 var num; 
 var manSet = 0;
	
	
	 //setInterval("hideImage("+curr+")",1000);
	for(var i=1;i<=9;i++)
		      {
				
				for(var x=0;x<=9;x++)
				     {
					curr = i+""+x;
					
					if(curr!=manSpace[0] && curr!=manSpace[1])
									{
					$("#"+curr).html("<img src='images/wood.jpg' alt='wood' id='image"+curr+"' class='wood' />");
				    //$("#"+curr).html(curr);
				      
					
									}
									else if(manSet!=1)   {
									  $("#"+curr).html("<img src='images/singleL.gif' id='"+curr+"' class='man' />");
									  manSet = 1;
									  
											}
					
						
						
					}
			
			}
			
			
			$("button").css({height:50,width:50});
			$(".wood").css({height:35,width:35});
			
	
			
		
	function hideImage(n){
	 
				num = Math.floor(Math.random()*3);
				hideImagesCoords = n;
				hideImage = image[n];
				alert("Hiding "+image[n]);
				
			}
			
			$("#btnLeft").click(function(){
			 
			var manId =	parseInt($(".man").attr("id"));
			
			var manLeft = manId-10;
			alert($("#"+manLeft).html()!="");
		
			alert($($("p"),"#"+manLeft)!=null);
			if($("#"+manLeft).html()!="")
			     {
			      $("#"+manId).html("");
			      $("#"+manLeft).html("<img src='images/'");
			      
				} 
				
				
				
			})
			
			$("#btnRight").click(function(){
				
				
			})
			
			$("#btnDown").click(function(){
				
				
			})
		
	
})

	
	
		
		
	