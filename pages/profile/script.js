import * as Routes from '../../js/routes.js'
import * as nav from '../../js/nav.js'
import * as footer from '../../js/createFooter.js'
// import * as checkLoggedIn from '../../js/checkLoggedIn.js'



nav.createNav("../../assets/imgs/logo.png", '../../api/logout.php', '../../api/checkIfLoggedIn.php', '../../index.html','../../pages/upload' ,'../../pages/login', '../../pages/allrecipes', '../../pages/allrecipes/index.html?search', '#','../../uploads/profpic/')
footer.createFooter('../../assets/imgs/logo.png');




export let idUrl = ''


const recipePostSection = document.querySelector('.recipePostSection')

const urlparams = new URLSearchParams(window.location.search)
idUrl = urlparams.get('id')
console.log('idUrl', idUrl)







function show(idRequest){

    $.ajax({
        "url" : Routes.profile, //URL of the API
        "type" : "GET", //GET and POST 
        "data" : "show=" + JSON.stringify(idRequest), //auth will be our php variable $_POST['auth']
        "success" : function (response) { //success yung response
            let parseResponse = JSON.parse(response);
            let data = parseResponse.data

            console.log(parseResponse)

            $('#followersProfilePage').text(data.followers.length)
            $('#totalRecipeProfilePage').text(data.recipePostedData.length)
            $('#followingProfilePage').text(data.following.length)
            $('.profilePicProfilePage').attr('src', '../../uploads/profpic/'+data.profilePic )
            $('#firstLastNameProfilepage').text(`Name: ${data.firstName} ${data.lastName}`)
            $('#usernameProfilePage').text(`Username: ${data.username}`)
            $('#emailProfilePage').text(`Email: ${data.email}`)

            if(data?.userLoggedInData && data.userLoggedInData.username === data.username){
                $('.ctaProfilePage').text('EDIT PROFILE')
                $('.ctaProfilePage').on("click", function(){ 
                    window.location.href = `../../pages/editprofile/index.html?id=${data.id}`
                    ;})
                
                
            }
            
            if(!data.recipePostedData){
                recipePostSection.html = '<h3>No Posted Recipe</h3>'
            }


            ////////////////////LONG CODE FOR RECIPE POSTED
            data.recipePostedData.map((recipe)=>{

                    const card = document.createElement('div')
                    card.classList.add("card", "col-xs-4")
                    card.style["max-width"] = "35rem"
                    

                    const recipeImg = document.createElement('img')
                    recipeImg.classList.add('card-img-top' , 'card-img-post')
                    recipeImg.setAttribute('src', '../../uploads/recipeImgs/'+recipe.filePath)
                    card.append(recipeImg)

                    const cardBody = document.createElement('div')
                    cardBody.classList.add('card-body')
                    card.append(cardBody)

                    const title = document.createElement('h2')
                    title.classList.add('card-title', 'mb3')
                    title.innerText = recipe.title
                    const infoDiv = document.createElement('a')
                    infoDiv.classList.add('infoDiv')

                    const span1 = document.createElement('span')
                    span1.innerHTML = `<ion-icon name="eye-outline"></ion-icon> ${recipe.views} `
                    const span2 = document.createElement('span')
                    span2.innerHTML = `<ion-icon name="heart-outline"></ion-icon> `
                    const span3 = document.createElement('span')
                    span3.classList.add('text-muted', 'mb-1')
                    span3.innerHTML = `<ion-icon name="calendar-outline"></ion-icon> ${recipe.formattedDate}`
                    infoDiv.setAttribute('href', '../../pages/recipe/index.html?q='+recipe.id)


                    infoDiv.append(span1,  span3)
                    cardBody.append(title, infoDiv)

                    const actionBtns = document.createElement('div')
                    if(data.userLoggedInData.username != data.username || data.username === undefined){
                        actionBtns.style.display = 'none'
                    }
                    actionBtns.classList.add('actionBtns')
                    const actionEdit = document.createElement('a')
                    actionEdit.setAttribute('href', `../../pages/editrecipe/index.html?q=${recipe.id}`)
                    actionEdit.classList.add("actionBtn", "actionEditBtnProfile")
                    actionEdit.innerHTML = `<ion-icon name="create-outline"></ion-icon>`
                    const actionDelete = document.createElement('p')
                    actionDelete.classList.add("actionBtn", "actionDeleteBtnProfile")
                    actionDelete.innerHTML = `<ion-icon name="trash-outline"></ion-icon>`
                    actionDelete.addEventListener('click',()=> destroy(recipe.id))

                    actionBtns.append(actionEdit, actionDelete)
                    card.append(actionBtns)

                    recipePostSection.append(card)



            })

            ////////////////////LONG CODE FOR RECIPE POSTED




        },
        "error" : function (xhr, status, error) { //error yung response
            alert("Error")
        }
    });

}

show(idUrl)


function destroy(id){
    if(!confirm('Are you sure you want to delete?')){
        return;
    }

     


    $.ajax({
        "url" : Routes.profile, 
        "type" : "POST", 
        "data" : "destroy=" + JSON.stringify(id), 
        "success" : function (response) { 
            console.log(response)
        
            let parseResponse = JSON.parse(response);
            console.log(response)
            recipePostSection.innerHTML = ''
            show(idUrl)

        },
        "error" : function (xhr, status, error) { 
            alert("Error")
        }
    });
}