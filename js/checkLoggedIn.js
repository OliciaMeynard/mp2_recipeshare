// import * as Routes from './routes.js'

export let logInStatus;
export let logInAllData;


export function checkLoggedIn (apiLogIn, profilePicRoute) {
    $.ajax({
        url : apiLogIn, //URL of the API
        type : "POST", //GET and POST 
        success : function (response) { //success yung response
            console.log(response)

            let parseResponse = JSON.parse(response);
            console.log(parseResponse)

            logInAllData = parseResponse.data
            logInStatus = parseResponse.status
            let logInData = parseResponse.data
            
            
            if(parseResponse.status == 200){
                $('#divData').html(`<p>You are logged In as ${parseResponse.data.username}</p>`)
                $('.btn-logIn').text('logout');
                $('#userProfileAvatar').attr('src', profilePicRoute+logInData.profilePic);
                $('.userProfileSpan').text(logInData.username)
                $('#profileLi').css('display', 'block')

            } else {
                $('#divData').html(`<p>You are not logged in</p>`)
                $('.btn-logIn').text('login');
                $('#userProfileAvatar').attr('src', profilePicRoute+'default.webp');
                
            }
           
            // $("#total_users").text(parseResponse.data[0].total_users);

        },
        "error" : function (xhr, status, error) { //error yung response
            console.log(parseResponse)
        }
    });

    

}


