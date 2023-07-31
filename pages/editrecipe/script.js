import * as Routes from '../../js/routes.js'
import * as nav from '../../js/nav.js'
import * as footer from '../../js/createFooter.js'

let fileInput = document.getElementById('file')


///////fetch recipe to update


export let idUrl = ''


let prodImg = document.getElementById('prodImg')

function viewUser(id){
    window.location.href = '../pages/recipe/index.html?q=20'+id
}

const urlparams = new URLSearchParams(window.location.search)
idUrl = urlparams.get('q')
console.log('idUrl', idUrl)
show(urlparams.get('q'))



function show(){
    let idRequest = {
        "id" : idUrl
    } 

    $.ajax({
        "url" : Routes.recipeSinglePage, //URL of the API
        "type" : "GET", //GET and POST 
        "data" : "show=" + JSON.stringify(idRequest), //auth will be our php variable $_POST['auth']
        "success" : function (response) { //success yung response
            let parseResponse = JSON.parse(response);
            console.log(response)
            console.log(parseResponse.data)
			prodImg.src= `../../uploads/recipeImgs/${parseResponse.data.filePath}`

 
			$('#idRef').val(parseResponse.data.id)
			$('#title').val(parseResponse.data.title)
			$('#ingredients').val(parseResponse.data.ingredients)
			$('#howtocook').val(parseResponse.data.howtocook)
			$('#description').val(parseResponse.data.description)
			$('#privacy').val(parseResponse.data.privacy)
			$('#category').val(parseResponse.data.category)
			$('#filePathRef').val(parseResponse.data.filePath)

            // uploadedBy = parseResponse.data.uploadedBy
            // loggedUser = parseResponse.data.loggedUser


        },
        "error" : function (xhr, status, error) { //error yung response
            alert("Error")
        }
    });

}










///////uodate recipe post method
$(document).ready( ()=> {

	$("#updateRecipeForm").on('submit', update);


	function update(e){
		e.preventDefault();
		$.ajax({
			type: 'POST',
			url: Routes.updateRecipe,
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
					// $('#uploadNewRecipeForm')[0].reset();
					$('.statusMsg').html(`<span style="font-size:18px;color:#34A853">${parseResponse.description}</span>`);
					setTimeout(()=>
					{window.location.href = '../../index.html'}, 1000)
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
		prodImg.src = src
	});

	
});



nav.createNav("../../assets/imgs/logo.png", '../../api/logout.php', '../../api/checkIfLoggedIn.php', '../../index.html','../../pages/upload' ,'../../pages/login', '../../pages/allrecipes', '../../pages/allrecipes/index.html?search', '../../pages/profile','../../uploads/profpic/')
footer.createFooter('../../assets/imgs/logo.png');





