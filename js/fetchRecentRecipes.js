


// export function getRecentRecipes(api){
//     let tmp = null;
//     $.ajax({
//         "url" : api, //URL of the API
//         "type" : "POST", //GET and POST 
//         "data" : "getRecentRecipes", //auth will be our php variable $_POST['auth']
//         "success" : function (response) { //success yung response
//             // console.log(response)
//             let parseResponse = JSON.parse(response);
//             tmp = parseResponse
       

//         },
//         "error" : function (xhr, status, error) { //error yung response
//             alert("Error")
//         }
//     });
    
    
// }

export let getRecentRecipes = function (api){
    let tmp = null;
    $.ajax({
        "url" : api, //URL of the API
        "type" : "POST", //GET and POST 
        "data" : "getRecentRecipes", //auth will be our php variable $_POST['auth']
        "success" : function (response) { //success yung response
            // console.log(response)
            let parseResponse = JSON.parse(response);
            tmp = parseResponse
       

        },
        "error" : function (xhr, status, error) { //error yung response
            alert("Error")
        }
    });
    return tmp
    
}();



