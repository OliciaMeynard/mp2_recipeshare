import * as Routes from '../../js/routes.js'
import * as nav from '../../js/nav.js'
import * as footer from '../../js/createFooter.js'

const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const userName = document.getElementById('userName')
const email = document.getElementById('email')
const email2 = document.getElementById('email2')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
let statusMsg = document.querySelector('.statusMsg')

console.log('register')





$('#signForm').on('submit', store)

function store(e){
    e.preventDefault();

    let data = {
        'firstName': firstName.value,
        'lastName' : lastName.value,
        'userName' : userName.value,
        'email' : email.value,
        'email2' : email2.value,
        'password' : password.value,
        'password2' : password2.value,
      };


    $.ajax({
        type: 'POST',
        url: Routes.registerApi,
        data: "register=" + JSON.stringify(data),
        beforeSend: function(){
            $('.signFormBtn').attr("disabled","disabled");
            $('#signForm').css("opacity",".5");
        },
        success: function(response){
            let parseResponse = JSON.parse(response);
            console.log(parseResponse)
            $('.statusMsg').html('');
            if(parseResponse.status == 200){
                $('#signForm')[0].reset();
                $('.statusMsg').html(`<span style="font-size:18px;color:#34A853">${parseResponse.description}</span>`);
                setTimeout(()=>
                {window.location.href = '../../index.html'}, 1300)
            }else{

                parseResponse.data.map(d=>{
                    let markup = `<span style="font-size:18px;color:red">${d}</span><br>`
                    return statusMsg.insertAdjacentHTML('afterbegin', markup)
                })

            }
            $('#signForm').css("opacity","");
            $('.signFormBtn').removeAttr("disabled");
        
        },
        // error: function(xhr, status, error){

        // }
    });
}

nav.createNav("../../assets/imgs/logo.png", '../../api/logout.php', '../../api/checkIfLoggedIn.php', '../../index.html','../../pages/upload' ,'../../pages/login', '../../pages/allrecipes', '../../pages/allrecipes/index.html?search', '../../pages/profile','../../uploads/profpic/')
footer.createFooter('../../assets/imgs/logo.png');


