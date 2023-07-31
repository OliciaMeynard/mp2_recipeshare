import * as script from './script.js'
import * as Routes from '../../js/routes.js'

 function sub(subRequest) {

  

    $.ajax({
        "url" : Routes.subscribe, //URL of the API
        "type" : "POST", //GET and POST 
        "data" : "sub=" + JSON.stringify(subRequest), //auth will be our php variable $_POST['auth']
        "success" : function (response) { //success yung response
            let parseResponse = JSON.parse(response);
            console.log(response)
            console.log(parseResponse)
           parseResponse.data.ifSubbed > 0 ? subButton.textContent = "UNSUBSCRIBE"
           : subButton.textContent = "SUBSCRIBE"
            

        },
        "error" : function (xhr, status, error) { //error yung response
            alert("Error")
        }
    });

}




///////SUB
subButton.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(script.uploadedBy, script.loggedUser)
    if(script.loggedUser === undefined || script.loggedUser === null){
        window.location.href = '../login'
        return;
  
    }

    if(script.uploadedBy === script.loggedUser){
        return;
    }


    let subscribeRequest = {
        userTo : script.uploadedBy,
        userFrom : script.loggedUser,
    }

    sub(subscribeRequest)
  
})

