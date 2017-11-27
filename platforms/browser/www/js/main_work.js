
$(function(){
	
	/* $(".swipe").bind('swipeleft',function(event){
		console.log(event);
	});	
	
   $(".swipe").bind('swiperight',function(event){
		console.log(event);
	});
	
	$(".swipe").bind('swipeup',function(event){
		console.log(event);
	});
	
	$(".swipe").bind('swipedown',function(event){
		console.log(event);
	}); */
	
	$(".swipe").bind('swipe',function(event){
		console.log(event);
	});
	
   $(".swipe").bind('tap',function(event){
		console.log(event);
	});	
	
   $(".swipe").bind('taphold',function(event){
		console.log(event);
	});
	
	});


$(document).ready(function(){
  
			var canvas;
			var context;
			var image;
			
			var imageOffset = 0  				
			var img;
			var img1;
			var img2;
			var img3;
			var img4;
			var img5;
			var img6;
			var img7;
			var angle = 0;	
			
			var image1;
			var image2;
		    var image3;
		    var image4;
		    var image5;
		    var image6;
		    var image7;
		    
						


				
			$("#file").change(function() {
             loadImage(this);
            });
			
			function loadImage(input) {
			  if (input.files && input.files[0]) {
				var reader = new FileReader(); 
				canvas = null;	
				reader.onload = function(e) {
				  image = new Image();     	  
				  image.onload = validateImage;	   
				  image.src = e.target.result; 
				  document.getElementById("base64").value = image.src;
				}	
				reader.readAsDataURL(input.files[0]);					
			  }
			}
					
			
			function dataURLtoBlob(dataURL) {																																													
				  var BASE64_MARKER = ';base64,';
				  if (dataURL.indexOf(BASE64_MARKER) == -1) {
					var parts = dataURL.split(',');
					var contentType = parts[0].split(':')[1];
					var raw = decodeURIComponent(parts[1]);
					return new Blob([raw], {
					  type: contentType
					});
				  }
				  var parts = dataURL.split(BASE64_MARKER);
				  var contentType = parts[0].split(':')[1];
				  var raw = window.atob(parts[1]);
				  var rawLength = raw.length;
				  var uInt8Array = new Uint8Array(rawLength);
				  for (var i = 0; i < rawLength; ++i) {
					uInt8Array[i] = raw.charCodeAt(i);
				  }

				  return new Blob([uInt8Array], {
					type: contentType
				  });
			}
			   function validateImage() {   	
				  if (canvas != null) {      
					image = new Image();   
					//image.onload = restartJcrop;    
					image.src = canvas.toDataURL('image/png');
                    document.getElementById("base64").value = image.src;					
					//alert(image.src);
				  }  else restartJcrop();
				}
			
			function restartJcrop() {
				
					$("#views").empty();
					$("#views").append("<canvas id=\"canvas\">");               
					canvas = $("#canvas")[0];
					context = canvas.getContext("2d");
					canvas.width = image.width;
					canvas.height = image.height;   
					context.drawImage(image,0,0); 
					if(image.width > 4500)
					{
                    document.getElementById("imu").innerHTML = "Your Image Resolution is :"+image.width+"(Image width)"+"X"+image.height+"(Image Height)";				
					alert(document.getElementById("imu1").innerHTML = "Note :Please Make Sure that Reduce your Resolution Before Send to Next Page");				
					}
					else
					{
                     document.getElementById("imu").innerHTML = "Your Image Resolution is :"+image.width+"(Image width)"+"X"+image.height+"(Image Height)";				
                    }
			}
			
			function applyRotate() {
			  canvas.width = image.height;
			  canvas.height = image.width;
			  context.clearRect(0, 0, canvas.width, canvas.height);
			  context.translate(image.height / 2, image.width / 2);
			  context.rotate(Math.PI / 2);
			  context.drawImage(image, -image.width / 2, -image.height / 2);
			  //alert(canvas.width);
			  //alert(canvas.height);
              document.getElementById("imu").innerHTML = "Your Image Resolution is :"+image.height+"(Image width)"+"X"+image.width+"(Image Height)";				
			  validateImage();
			}
			
			$("#rotatebutton").click(function(e) {
             applyRotate();
             });
			 			 
			 $(function () {
			      $("#res").change(function () {
					  var ctx;
				  $("#Proceed").show();
				 var imgval = document.getElementById("res").value;				
				 if (imgval == 0)
				 {
					 image.height = 500;
			         image.width = 400;					 
					 canvas.width = image.width;
                     canvas.height= image.height; 					    
                     context.drawImage(image, 0, 0, canvas.width, canvas.height);
				     document.getElementById("imu").innerHTML = "Your Image Resolution is :"+image.width+"(Image width)"+"X"+image.height+"(Image Height)";									 
                     validateImage();
  
				 }else if(imgval == 1)
				 {
					 image.height = 600;
			         image.width = 450;					 
					 canvas.width = image.width;
                     canvas.height= image.height; 					        
                     context.drawImage(image, 0, 0, canvas.width, canvas.height);	
				     document.getElementById("imu").innerHTML = "Your Image Resolution is :"+image.width+"(Image width)"+"X"+image.height+"(Image Height)";									 					 
                     validateImage();
				 }else if(imgval == 2)
				 {
					 image.height = 800;
			         image.width = 600;					 
					 canvas.width = image.width;
                     canvas.height= image.height; 					           
                     context.drawImage(image, 0, 0, canvas.width, canvas.height);
					 document.getElementById("imu").innerHTML = "Your Image Resolution is :"+image.width+"(Image width)"+"X"+image.height+"(Image Height)";									 
					 //alert(image.width);
					 //alert(image.height);
                     validateImage();
					 
				 }
				 else if(imgval == 3)
				 {
					 image.height = 1100;
			         image.width = 800;					 
					 canvas.width = image.width;
                     canvas.height= image.height; 					           
                     context.drawImage(image, 0, 0, canvas.width, canvas.height);
					 document.getElementById("imu").innerHTML = "Your Image Resolution is :"+image.width+"(Image width)"+"X"+image.height+"(Image Height)";									 
					 //alert(image.width);
					 //alert(image.height);
                     validateImage();					 
				 }
				 else if(imgval == 4)
				 {
					 image.height = 2500;
			         image.width = 1500;					 
					 canvas.width = image.width;
                     canvas.height= image.height; 					           
                     context.drawImage(image, 0, 0, canvas.width, canvas.height);
					document.getElementById("imu").innerHTML = "Your Image Resolution is :"+image.width+"(Image width)"+"X"+image.height+"(Image Height)";									 
					 //alert(image.width);
					 //alert(image.height);
                     validateImage();					 
				 }
				 
			});
		   });
	
	
	$("#Proceed").click(function(e){
		   $("#title").show();
		   $("#addr").show();
		   $("#date").show();		
		   $("#wish").hide();		
		   $("#note").show();		
		   $("#range").show();		
		   		       
		<!---------start work -------->	   
	var options1 =
        {
            imageBox: '.imageBox1',
            thumbBox: '.thumbBox1',
            spinner: '.spinner1',
            imgSrc: ''
        }
		
		var cropper1 = new cropbox(options1);
		var image1 = new Image();
		//alert(document.getElementById("base64").value);
        image1.src = document.getElementById("base64").value;
        //alert(image1.src);		
        options1.imgSrc = image1.src;
        cropper1 = new cropbox(options1);
									
		document.querySelector('#btnCrop').addEventListener('click', function(){			
             img1 = cropper1.getDataURL();
            document.querySelector('.cropped').innerHTML += '<img src="'+img1+'">';
			//$('#imageBox').hide();
			$('#btnCrop').hide();
			$('#btnZoomIn').hide();
			$('#btnZoomOut').hide();
			///$('#titlebox').hide();
			
        });
        document.querySelector('#btnZoomIn').addEventListener('click', function(){
            cropper1.zoomIn();
        });
        document.querySelector('#btnZoomOut').addEventListener('click', function(){
            cropper1.zoomOut();
        });
						
		function applyReset(){
			             			 
			    var cropper1 = new cropbox(options1);
				var image1 = new Image();
				image1.src = document.getElementById("base64").value;		
				options1.imgSrc = image1.src;
				cropper1 = new cropbox(options1);
			
		}
				
		   $("#reset").click(function(e) {     
			   applyReset();
               document.querySelector('.cropped').innerHTML = "";       		   
       		   $('#btnCrop').show();
			   $('#btnZoomIn').show();
			   $('#btnZoomOut').show();
			   $('#spinner').hide();               	   
			   //$('#titlebox').show();               	   			             	   
			});
								
		<!------2nd image--------->
		
		var options2 =
        {
            imageBox: '.imageBox2',
            thumbBox: '.thumbBox2',
            spinner: '.spinner2',
            imgSrc: ''
        }
		
		var cropper2 = new cropbox(options2);
		var image2 = new Image();
        image2.src = document.getElementById("base64").value;		
        options2.imgSrc = image2.src;
        cropper2 = new cropbox(options2);
	
        document.querySelector('#btnCrop1').addEventListener('click', function(){
             img2 = cropper2.getDataURL();
            document.querySelector('.cropped1').innerHTML += '<img src="'+img2+'">';
		  //$('#imageBox').hide();
			$('#btnCrop1').hide();
			$('#btnZoomIn1').hide();
			$('#btnZoomOut1').hide();
			//$('#addrbox').hide();
        });
        document.querySelector('#btnZoomIn1').addEventListener('click', function(){
            cropper2.zoomIn();
        });
        document.querySelector('#btnZoomOut1').addEventListener('click', function(){
            cropper2.zoomOut();
        });
		
		function applyReset1(){
				
		var cropper2 = new cropbox(options2);
		var image2 = new Image();
        image2.src = document.getElementById("base64").value;		
        options2.imgSrc = image2.src;
        cropper2 = new cropbox(options2);
           		
			}
					
		$("#reset1").click(function(e) {     
			   applyReset1();
			   document.querySelector('.cropped1').innerHTML = ""; 	
               $('#btnCrop1').show();
			   $('#btnZoomIn1').show();
			   $('#btnZoomOut1').show();	
			   $('#spinner1').hide();	
               //$('#addrbox').show();				   
			});
   	     
       <!--------3rd imgae-------------->

	   var options3 =
        {
            imageBox: '.imageBox3',
            thumbBox: '.thumbBox3',
            spinner: '.spinner3',
            imgSrc: ''
        }
		
		var cropper3 = new cropbox(options3);
		var image3 = new Image();
        image3.src = document.getElementById("base64").value;		
        options3.imgSrc = image3.src;
        cropper3 = new cropbox(options3);	
		
        document.querySelector('#btnCrop2').addEventListener('click', function(){
             img3 = cropper3.getDataURL();
            document.querySelector('.cropped2').innerHTML += '<img src="'+img3+'">';
			//$('#imageBox').hide();
			$('#btnCrop2').hide();
			$('#btnZoomIn2').hide();
			$('#btnZoomOut2').hide();
			//$('#datebox').hide();
			//$('.edited_image').show();
        });
        document.querySelector('#btnZoomIn2').addEventListener('click', function(){
            cropper3.zoomIn();
        });
        document.querySelector('#btnZoomOut2').addEventListener('click', function(){
            cropper3.zoomOut();
        });
		
		function applyReset2(){
				
		var cropper3 = new cropbox(options3);
		var image3 = new Image();
        image3.src = document.getElementById("base64").value;		
        options3.imgSrc = image3.src;
        cropper3 = new cropbox(options3);		           		
			  }
					
		$("#reset2").click(function(e) {     
			   applyReset2();
			   document.querySelector('.cropped2').innerHTML = ""; 	
               $('#btnCrop2').show();
			   $('#btnZoomIn2').show();
			   $('#btnZoomOut2').show();	
			   $('#spinner2').hide();	
               //$('#datebox').show();
               //$('.edited_image').hide();			   
			});
		
		
		     $(function (){
			      $("#res1").change(function (e) {				  
				 var imgval1 = document.getElementById("res1").value;				
				 if (imgval1 == 0)
				 {
				     $("#item1").hide();
					 $("#item2").hide();
					 $("#item3").show();
					 $("#item4").hide();
					 
				 }else if(imgval1 == 1)
				 {
					  $("#item1").hide();
					  $("#item2").hide();
					  $("#item3").hide();
					 $("#item4").show();
					 
				 }else if(imgval1 == 2)
				 {
					   $("#item1").show();
					   $("#item2").hide();
					   $("#item3").hide();	
                       $("#item4").hide();					   
				 }
				 else if(imgval1 == 3)
				 {
					   $("#item1").hide();
					   $("#item2").show();
					   $("#item3").hide();
					   $("#item4").hide();					 
				 }				 
			});
	    });
			
		<!------items part----------->
		
		var options4 =
        {
            imageBox: '.imageBox4',
            thumbBox: '.thumbBox4',
            spinner: '.spinner4',
            imgSrc: ''
        }
		
		    
		var cropper4 = new cropbox(options4);
		var image4 = new Image();
        image4.src = document.getElementById("base64").value;		
        options4.imgSrc = image4.src;
        cropper4 = new cropbox(options4);
            		
		
		
		document.querySelector('#btnCrop5').addEventListener('click', function(){			
             img4 = cropper4.getDataURL();
            document.querySelector('.cropped5').innerHTML += '<img src="'+img4+'">';			
			$('#btnCrop5').hide();
			$('#btnZoomIn5').hide();
			$('#btnZoomOut5').hide();
			//$('#itembox5').hide();
			$('.edited_image').show();
        }); 
        
		document.querySelector('#btnZoomIn5').addEventListener('click', function(){
            cropper4.zoomIn();
        });
		
        document.querySelector('#btnZoomOut5').addEventListener('click', function(){
           cropper4.zoomOut();
        });
		
		function applyReset3(){				
				var cropper4 = new cropbox(options4);
				var image4 = new Image();
				image4.src = document.getElementById("base64").value;		
				options4.imgSrc = image4.src;
				cropper4 = new cropbox(options4);
			   }
					
		 $("#reset5").click(function(e) {     
			   applyReset3();
			   document.querySelector('.cropped5').innerHTML = ""; 			
               $('#btnCrop5').show();
			   $('#btnZoomIn5').show();
			   $('#btnZoomOut5').show();	
			   $('#spinner4').hide();	
               //$('#itembox5').show();					   
               $('.edited_image').hide();					   
			});
			
							
			<!----------item image range 25-50----------->
			
			var options5 =
        {
            imageBox: '.imageBox5',
            thumbBox: '.thumbBox5',
            spinner: '.spinner5',
            imgSrc: ''
        }
		
		    
		var cropper5 = new cropbox(options5);
		var image5 = new Image();
        image5.src = document.getElementById("base64").value;		
        options5.imgSrc = image5.src;
        cropper5 = new cropbox(options5);
            		
		
		
		document.querySelector('#btnCrop6').addEventListener('click', function(){			
             img5 = cropper5.getDataURL();
            document.querySelector('.cropped6').innerHTML += '<img src="'+img5+'">';			
			$('#btnCrop6').hide();
			$('#btnZoomIn6').hide();
			$('#btnZoomOut6').hide();
			//$('#itembox6').hide();
			$('.edited_image').show();
        }); 
        
		document.querySelector('#btnZoomIn6').addEventListener('click', function(){
            cropper5.zoomIn();
        });
		
        document.querySelector('#btnZoomOut6').addEventListener('click', function(){
           cropper5.zoomOut();
        });
		
		function applyReset4(){				
				var cropper5 = new cropbox(options5);
				var image5 = new Image();
				image5.src = document.getElementById("base64").value;		
				options5.imgSrc = image5.src;
				cropper5 = new cropbox(options5);
			   }
					
		 $("#reset6").click(function(e) {     
			   applyReset4();
			   document.querySelector('.cropped6').innerHTML = ""; 			
               $('#btnCrop6').show();
			   $('#btnZoomIn6').show();
			   $('#btnZoomOut6').show();	
			   $('#spinner5').hide();	
               //$('#itembox6').show();					   
               $('.edited_image').hide();					   
			});
					
			
			<!----------item image range 50-75  ----------->
			
			
			var options6 =
        {
            imageBox: '.imageBox6',
            thumbBox: '.thumbBox6',
            spinner: '.spinner6',
            imgSrc: ''
        }
		
		    
		var cropper6 = new cropbox(options6);
		var image6 = new Image();
        image6.src = document.getElementById("base64").value;		
        options6.imgSrc = image6.src;
        cropper6 = new cropbox(options6);
            		
		
		
		document.querySelector('#btnCrop3').addEventListener('click', function(){			
             img6 = cropper6.getDataURL();
            document.querySelector('.cropped3').innerHTML += '<img src="'+img6+'">';			
			$('#btnCrop3').hide();
			$('#btnZoomIn3').hide();
			$('#btnZoomOut3').hide();
			//$('#itembox3').hide();
			$('.edited_image').show();
        }); 
        
		document.querySelector('#btnZoomIn3').addEventListener('click', function(){
            cropper6.zoomIn();
        });
		
        document.querySelector('#btnZoomOut3').addEventListener('click', function(){
           cropper6.zoomOut();
        });
		
		function applyReset5(){				
				var cropper6 = new cropbox(options6);
				var image6 = new Image();
				image6.src = document.getElementById("base64").value;		
				options6.imgSrc = image6.src;
				cropper6 = new cropbox(options6);
			   }
					
		 $("#reset3").click(function(e) {     
			   applyReset5();
			   document.querySelector('.cropped3').innerHTML = ""; 			
               $('#btnCrop3').show();
			   $('#btnZoomIn3').show();
			   $('#btnZoomOut3').show();	
			   $('#spinner6').hide();	
               //$('#itembox3').show();					   
               $('.edited_image').hide();					   
			});
			
	
			<!----------item image range 75-100   ----------->
			
			
			var options7 =
        {
            imageBox: '.imageBox7',
            thumbBox: '.thumbBox7',
            spinner: '.spinner7',
            imgSrc: ''
        }
		
		    
		var cropper7 = new cropbox(options7);
		var image7 = new Image();
        image7.src = document.getElementById("base64").value;		
        options7.imgSrc = image7.src;
        cropper7 = new cropbox(options7);
            		
		
		
		document.querySelector('#btnCrop4').addEventListener('click', function(){			
             img7 = cropper7.getDataURL();
            document.querySelector('.cropped4').innerHTML += '<img src="'+img7+'">';			
			$('#btnCrop4').hide();
			$('#btnZoomIn4').hide();
			$('#btnZoomOut4').hide();
			//$('#itembox4').hide();
			$('.edited_image').show();
        }); 
        
		document.querySelector('#btnZoomIn4').addEventListener('click', function(){
            cropper7.zoomIn();
        });
		
        document.querySelector('#btnZoomOut4').addEventListener('click', function(){
           cropper7.zoomOut();
        });
		
		function applyReset6(){				
				var cropper7 = new cropbox(options7);
				var image7 = new Image();
				image7.src = document.getElementById("base64").value;		
				options7.imgSrc = image7.src;
				cropper7 = new cropbox(options7);
			   }
					
		 $("#reset4").click(function(e) {     
			   applyReset6();
			   document.querySelector('.cropped4').innerHTML = ""; 			
               $('#btnCrop4').show();
			   $('#btnZoomIn4').show();
			   $('#btnZoomOut4').show();	
			   $('#spinner7').hide();	
              // $('#itembox4').show();					   
               $('.edited_image').hide();					   
			});
	 });		
	 
	 <!--------   tesseract part   --------->
	 
            $(".edited_image").click(function(e) {
				$('#25').show();
				$(".edited_image").hide();	
				handleInputChange();
				//handleInputChange1();
				//handleInputChange2();
				
								
			
			
	 function handleInputChange(){ 
	       //alert("hi");
		  var language = 'eng'
          //var aa = $('#xxx')[0]
      //  var input = event.target;
      //  var file = event.canvas[0];
        console.log(img1);		
        Tesseract.recognize(img1)
		  .progress(function(message){
        	console.log(message);				
            })
          .then(function(result) {
			  //alert("tess1");
         var contentArea = document.getElementById('document_content');	     
        contentArea.innerHTML = result.text; 	
        //$('#load').show();
		handleInputChange1();				        

      })
            .catch(function(err){
                console.error(err);
            });
        $('#document_content').change(function(){
                    });
    }
	
	function handleInputChange1(){ 
	        $('#25').hide();
		    $('#50').show();
		  var language = 'eng'
         
             console.log(img2);		
             Tesseract.recognize(img2)
		     .progress(function(message){
        	  console.log(message);				
              }) 
						
          .then(function(result1) {
			  console.log('result is: ', result1);
         var contentArea1 = document.getElementById('document_content1');	     
        contentArea1.innerHTML = result1.text; 	
        //$('#load').show();
		   handleInputChange2();
      })
            .catch(function(err){
                console.error(err);
            });
        $('#document_content1').change(function(){
                    });
    }
	
	function handleInputChange2(){ 
	    $('#50').hide();	  
	    $('#75').show();
		
		  var language = 'eng'         
        console.log(img3);		
        Tesseract.recognize(img3)
		  .progress(function(message){
        	console.log(message);				
            })
          .then(function(result2) {
			  //alert("tess1");
         var contentArea2 = document.getElementById('document_content2');	     
        contentArea2.innerHTML = result2.text;
                    
					
				 var imgval2 = document.getElementById("res1").value;				
				 if (imgval2 == 0)
				 {	
                       $('#75').hide();	
                       $('#100').show();			 
				    handleInputChange5();
					
				 }else if(imgval2 == 1)
				 {
					 $('#75').hide();	
                     $('#100').show();	
					 handleInputChange6();
					 
				 }else if(imgval2 == 2)
				 {		
			         $('#75').hide();	
                     $('#100').show();	
					 handleInputChange3();
					 
				 }else if(imgval2 == 3)
				 {
					 $('#75').hide();	
                     $('#100').show();	
					 handleInputChange4();
					 
				 }
        		            	
      })
            .catch(function(err){
                console.error(err);
            });
        $('#document_content2').change(function(){
                    });
    }

	             
	
	
	    function handleInputChange3(){ 	              
				  var language = 'eng'         
				   console.log(img4);		
				   Tesseract.recognize(img4)
				  .progress(function(message){
					console.log(message);				
					})
				  .then(function(result3) {
					  //alert("tess1");
				 var contentArea3 = document.getElementById('document_content5');	     
				contentArea3.innerHTML = result3.text; 	
				//$('#load').hide();				
				$('#submit').show().css("background-color", " ");  

			  })
					.catch(function(err){
						console.error(err);
					});
				$('#document_content5').change(function(){
							});
			}
			
			function handleInputChange4(){ 
	               //$('#75').hide();	
                   //$('#100').show();
				  var language = 'eng'         
				   console.log(img5);		
				   Tesseract.recognize(img5)
				  .progress(function(message){
					console.log(message);				
					})
				  .then(function(result4) {
					  //alert("tess1");
				 var contentArea4 = document.getElementById('document_content6');	     
				contentArea4.innerHTML = result4.text; 	
				//$('#load').hide();
				//$('#document_content4').show();
				$('#submit').show().css("background-color", " ");  

			  })
					.catch(function(err){
						console.error(err);
					});
				$('#document_content6').change(function(){
							});
			}
			
			 function handleInputChange5(){ 	                 
				  var language = 'eng'         
				   console.log(img6);		
				   Tesseract.recognize(img6)
				  .progress(function(message){
					console.log(message);				
					})
				  .then(function(result5) {
					//console.log('result is: ', result5);
				 var contentArea5 = document.getElementById('document_content3');	     
				contentArea5.innerHTML = result5.text; 	
				//$('#load').hide();
				//$('#document_content4').show();
				$('#submit').show().css("background-color", " ");  

			  })
					.catch(function(err){
						console.error(err);
					});
				$('#document_content3').change(function(){
							});
			}
			
			function handleInputChange6(){ 
	               //$('#75').hide();	
                   //$('#100').show();
				  var language = 'eng'         
				   console.log(img7);		
				   Tesseract.recognize(img7)
				  .progress(function(message){
					console.log(message);				
					})
				  .then(function(result6) {
				  
				 var contentArea6 = document.getElementById('document_content4');	     
				contentArea6.innerHTML = result6.text; 	
				//$('#load').hide();
				//$('#document_content4').show();
				$('#submit').show().css("background-color", " ");  

			  })
					.catch(function(err){
						console.error(err);
					});
				$('#document_content4').change(function(){
							});
			} 
		});	
	 
		 
});	
				


    
	  /* var progressBar = $("div.progress-bar");
	  var x = 0;
	  var increment = function() {
	  x = (x > 100) ? 0 : x + 0.5;
	  progressBar.css('width', (x % 100) + '%');
	 };


	 window.setInterval(increment, 50); */
	