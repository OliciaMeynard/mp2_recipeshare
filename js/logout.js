export function logOut (status, apiLogout, loginLink){
    
    if(status === 200){

        $.post(apiLogout, 'LOGOUT')
        .done(function(data){
            let parseResponse = JSON.parse(data);
            console.log(parseResponse)
            window.location.href = loginLink
        });
    }
    if(status === 400){
        window.location.href = loginLink
    }

    // console.log(apiLogout)

}


console.log('i am logout js')
    