import * as nav from '../../js/nav.js'
import * as footer from '../../js/createFooter.js'
import * as Routes from '../../js/routes.js'

const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const userName = document.getElementById('userName')
const email = document.getElementById('email')
const email2 = document.getElementById('email2')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
let statusMsg = document.querySelector('.statusMsg')

// http://localhost/recipeClips(MP2)/pages/editprofile/indes.html?id=6



nav.createNav("../../assets/imgs/logo.png", '../../api/logout.php', '../../api/checkIfLoggedIn.php', '../../index.html','../../pages/upload' ,'../../pages/login', '../../pages/allrecipes', '../../pages/allrecipes/index.html?search', '../../pages/profile','../../uploads/profpic/')
footer.createFooter('../../assets/imgs/logo.png');


console.log('edit profile')


export function getUserLoggedin() {
    $.ajax({
        url : '../../api/checkIfLoggedIn.php', //URL of the API
        type : "POST", //GET and POST 
        success : function (response) { //success yung response
           
            let parseResponse = JSON.parse(response);
            let data = parseResponse.data
            $('#firstName').val(data.firstName)
            $('#lastName').val(data.lastName)
            $('#email').val(data.email)
            $('#prodImg').attr("src", "../../uploads/profpic/"+data.profilePic)
            $('#profilePicRef').val(data.profilePic)
            $('#idRef').val(data.id)

          
           
            // $("#total_users").text(parseResponse.data[0].total_users);

        },
        "error" : function (xhr, status, error) { //error yung response
            console.log(parseResponse)
        }
    });

    

}

getUserLoggedin()

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



    ////////////////////////////////////
    ///////////////UPDATE FUNCTION

    
	$("#signForm").on('submit', update);


	function update(e){
		e.preventDefault();
		$.ajax({
			type: 'POST',
			url: Routes.updateProfile,
			data: new FormData(this),
			contentType: false,
			cache: false,
			processData:false,
			beforeSend: function(){
				$('.signFormBtn').attr("disabled","disabled");
				$('.signForm').css("opacity",".5");
			},
			success: function(response){
				let parseResponse = JSON.parse(response);
				console.log(parseResponse)
				$('.statusMsg').html('');
				if(parseResponse.status == 200){
					// $('#uploadNewRecipeForm')[0].reset();
					$('.statusMsg').html(`<span style="font-size:18px;color:#34A853">${parseResponse.description}</span>`);
                    setTimeout(()=>
                    {window.location.href = '../../index.html'}, 1300)
				}else{
					$('.statusMsg').html(`<span style="font-size:18px;color:red">${parseResponse.description}</span>`);
				}
				$('.signForm').css("opacity","");
				$('.signFormBtn').removeAttr("disabled");
			
			}
		});
	}
