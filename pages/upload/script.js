import * as Routes from '../../js/routes.js'
import * as nav from '../../js/nav.js'
import * as footer from '../../js/createFooter.js'
// import * as checkLoggedIn from '../../js/checkLoggedIn.js'



$(document).ready( ()=> {

	$("#uploadNewRecipeForm").on('submit', store);


	function store(e){
		e.preventDefault();
		$.ajax({
			type: 'POST',
			url: Routes.uploadApi,
			data: new FormData(this),
			contentType: false,
			cache: false,
			processData:false,
			beforeSend: function(){
				$('#add_button').attr("disabled","disabled");
				$('#uploadNewRecipeForm').css("opacity",".5");
			},
			success: function(response){
				let parseResponse = JSON.parse(response);
				console.log(parseResponse)
				$('.statusMsg').html('');
				if(parseResponse.status == 200){
					$('#uploadNewRecipeForm')[0].reset();
					$('.statusMsg').html(`<span style="font-size:18px;color:#34A853">${parseResponse.description}</span>`);
					setTimeout(()=>
					{window.location.href = '../../index.html'}, 1300)
				}else{
					$('.statusMsg').html(`<span style="font-size:18px;color:red">${parseResponse.description}</span>`);
				}
				$('#uploadNewRecipeForm').css("opacity","");
				$("#add_button").removeAttr("disabled");
			
			}
		});
	}

	//file type validation
	$("#file").change(function() {
		var file = this.files[0];
		var videoFile = file.type;
		var match= ["image/jpeg","image/png","image/jpg", "image/webp"];
		let src = URL.createObjectURL(file)



		// if(!((videoFile==match[0]) || (videoFile==match[1]) || (videoFile==match[2]) || (videoFile==match[3]))){
		if(!match.includes(videoFile)){
			alert('Please select a valid image file. JPEG/JPG/PNG/WEBP');
			$("#file").val('');
			return false;
		}
		 else{

			 let prodImg = document.createElement('img')
			 prodImg.setAttribute('id','prodImg')
			 prodImg.src = src
			 $('#prodImgDiv').append(prodImg)
		 }
	});
});



nav.createNav("../../assets/imgs/logo.png", '../../api/logout.php', '../../api/checkIfLoggedIn.php', '../../index.html','#' ,'../../pages/login', '../../pages/allrecipes', '../../pages/allrecipes/index.html?search', '../../pages/profile','../../uploads/profpic/')
footer.createFooter('../../assets/imgs/logo.png');





