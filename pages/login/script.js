import * as Routes from '../../js/routes.js'
import * as nav from '../../js/nav.js'
import * as footer from '../../js/createFooter.js'


const userName = document.getElementById('userName')
const password = document.getElementById('password')
let statusMsg = document.querySelector('.statusMsg')

console.log('login')





$('#signForm').on('submit', store)

function store(e){
    e.preventDefault();

    let data = {
        'userName' : userName.value,
        'password' : password.value,
      };


    $.ajax({
        type: 'POST',
        url: Routes.loginApi,
        data: "auth=" + JSON.stringify(data),
        beforeSend: function(){
            $('#add_button').attr("disabled","disabled");
            $('#uploadNewRecipeForm').css("opacity",".5");
        },
        success: function(response){
            let parseResponse = JSON.parse(response);
            console.log(parseResponse)
            $('.statusMsg').html('');
            if(parseResponse.status == 200){
                $('#signForm')[0].reset();
                $('.statusMsg').html(`<span style="font-size:18px;color:#34A853">${parseResponse.description}</span>`);
                setTimeout(()=>
                {window.location.href = '../../index.html'}, 1000)
            }else{

                parseResponse.data.map(d=>{
                    let markup = `<span style="font-size:18px;color:red">${d}</span><br>`
                    return statusMsg.insertAdjacentHTML('afterbegin', markup)
                })

            }
            $('#uploadNewRecipeForm').css("opacity","");
            $("#add_button").removeAttr("disabled");
        
        },
        // error: function(xhr, status, error){

        // }
    });
}


nav.createNav("../../assets/imgs/logo.png", '../../api/logout.php', '../../api/checkIfLoggedIn.php', '../../index.html','../../pages/upload' ,'../../pages/login', '../../pages/allrecipes', '../../pages/allrecipes/index.html?search', '../../pages/profile','../../uploads/profpic/')
footer.createFooter('../../assets/imgs/logo.png');
