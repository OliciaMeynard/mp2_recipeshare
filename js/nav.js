
import * as logout from './logout.js'
import * as checkLoggedIn from './checkLoggedIn.js'

const headerNav = document.querySelector('.header-nav')

export function createNav (imgSrcLogo, apiLogout, apiCheckLogIn, homeLink,  shareRecipeLink, loginLink, allrecipelink, searchLink, profileLink, profilePicRoute) {




    
    checkLoggedIn.checkLoggedIn(apiCheckLogIn, profilePicRoute)
    const headerSec = document.createElement('header');
    headerSec.classList.add('header', 'section')
    headerSec.setAttribute('data-header', '')
    const headerInsideContainer = document.createElement('div');
    headerInsideContainer.classList.add("container")
    headerSec.appendChild(headerInsideContainer);

    ////logo of header
    const logo = document.createElement('a');
    logo.href = homeLink,
    logo.classList.add('logo')
    const logoImg = document.createElement('img');
    logoImg.classList.add('logoImgNav')
    logoImg.src = imgSrcLogo
    logo.appendChild(logoImg)
    headerInsideContainer.appendChild(logo);



    //////nav
    const nav= document.createElement('nav');
    nav.setAttribute('data-navbar', '')
    nav.classList.add('navbarr')
    headerInsideContainer.appendChild(nav);

    ///ul
    const ul= document.createElement('ul');
    ul.classList.add('navbar-list')


    //li
    const firstLi = document.createElement('li');
    const liLink1 = document.createElement('a');
    liLink1.textContent = 'Home'
    liLink1.href = homeLink
    liLink1.classList.add("navbar-link","hover:underline")
    liLink1.setAttribute('data-nav-link', '')
    firstLi.appendChild(liLink1)
    firstLi.classList.add("navbar-item")

    const secondLi = document.createElement('li');
    const liLink2 = document.createElement('a');
    liLink2.textContent = 'See All Recipes'
    liLink2.href = allrecipelink
    liLink2.setAttribute('data-nav-link', '')
    liLink2.classList.add("navbar-link","hover:underline")
    secondLi.appendChild(liLink2 )
    secondLi.classList.add("navbar-item")

    
    const thirdLi = document.createElement('li');
    thirdLi.setAttribute('id', 'profileLi')
    const liLink3 = document.createElement('a');
    liLink3.addEventListener('click', ()=> reRoute(checkLoggedIn.logInStatus, loginLink, profileLink, checkLoggedIn.logInAllData))
    liLink3.classList.add('profilenavProfileLink')
    const spanLink3 = document.createElement('span');
    spanLink3.classList.add('userProfileSpan')
    spanLink3.innerText = 'Profile'
    liLink3.append(spanLink3)
    const userProfileAvatar = document.createElement('img')
    userProfileAvatar.setAttribute('id', 'userProfileAvatar')
    liLink3.append(userProfileAvatar)
    liLink3.setAttribute('data-nav-link', '')
    liLink3.classList.add("navbar-link","hover:underline")
    thirdLi.appendChild(liLink3 )
    thirdLi.classList.add("navbar-item")
    
    
    
    ul.append(firstLi, secondLi, thirdLi )

    nav.appendChild(ul)




    ////////WRAPPER
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper')
    const searchBtn = document.createElement('button');
    searchBtn.classList.add('search-btn')
    searchBtn.setAttribute('aria-label', 'search')
    searchBtn.setAttribute('data-search-toggler', '')
    searchBtn.innerHTML = ' <ion-icon name="search-outline" aria-hidden="true"></ion-icon> <span class="span">Search</span>'

    const uploadBtn = document.createElement('button');
    uploadBtn.classList.add('upload-btn')
    uploadBtn.setAttribute('aria-label', 'upload')
    uploadBtn.innerHTML = ' <ion-icon name="duplicate-outline"></ion-icon> <span class="span">Share your Recipe</span>'
    uploadBtn.addEventListener('click', ()=> upload(checkLoggedIn.logInStatus, loginLink, shareRecipeLink))

    const navtoggleBtn = document.createElement('button');
    navtoggleBtn.setAttribute('aria-label',"toggle menu" )
    navtoggleBtn.classList.add('nav-toggle-btn')
    navtoggleBtn.setAttribute('data-nav-toggler','' )
    const span1 = document.createElement('span');
    span1.classList.add('span', 'one')
    const span2 = document.createElement('span');
    span2.classList.add('span', 'two')
    const span3 = document.createElement('span');
    span3.classList.add('span', 'three')

    navtoggleBtn.append(span1, span2, span3)
    headerInsideContainer.append(wrapper)
    const btnLogin = document.createElement('button');
    btnLogin.classList.add('btn', 'btn-logIn')
    btnLogin.textContent = 'Login'
    btnLogin.addEventListener('click',() => logout.logOut(checkLoggedIn.logInStatus, apiLogout, loginLink))
    wrapper.append(searchBtn, uploadBtn, navtoggleBtn, btnLogin)

    headerNav.appendChild(headerSec)




    //         <!-- 
    //             - #SEARCH BAR
    //         -->

    const searchBar = document.createElement('form');
    searchBar.setAttribute('data-search-bar', '')
    searchBar.classList.add("search-bar")
    document.body.prepend(searchBar)
    const inputWrapper = document.createElement('div');
    inputWrapper.classList.add("input-wrapper")
    searchBar.append(inputWrapper)


    
    //input
    const searchInputField = document.createElement('input');
    searchInputField.classList.add('input-field')
    searchInputField.setAttribute('type', 'search')
    searchInputField.setAttribute('name', 'search')
    searchInputField.setAttribute('placeholder', 'Search')
    inputWrapper.append(searchInputField)


    
    ///div for buttons
    const btnWrapper = document.createElement('div');
    btnWrapper.classList.add("btn-wrapper")
    inputWrapper.append(btnWrapper)





    //search button
    const searchBtnTop = document.createElement('a');
    searchBtnTop.classList.add('search-btn')  
    searchBtnTop.setAttribute('id', "search-btn-top")
    searchBtnTop.innerHTML = '<ion-icon name="search-outline"></ion-icon>'
    searchBtnTop.addEventListener('click', ()=> searchRecipe(searchInputField.value, searchLink))
    btnWrapper.append(searchBtnTop)

        //btn close
        const searchCloseBtn = document.createElement('button');
        searchCloseBtn.classList.add('search-close-btn')  
        searchCloseBtn.setAttribute('aria-label', "close search bar")
        searchCloseBtn.setAttribute('data-search-toggler', "")
        searchCloseBtn.innerHTML = '<ion-icon name="close-outline" aria-hidden="true"></ion-icon>'
        btnWrapper.append(searchCloseBtn)

    const searchBarText = document.createElement('p');
    searchBarText.classList.add('search-bar-text')
    searchBarText.textContent = 'Please enter at least 3 characters'

    searchBar.append(searchBarText)

    const overlay = document.createElement('div')
    overlay.classList.add('overlay')
    overlay.setAttribute('data-overlay', '')
    overlay.setAttribute('data-search-toggler', '')
    document.body.append(overlay)



}







function upload(logInStatus, loginLink, shareRecipeLink){

    console.log(logInStatus)

    if(logInStatus === 400){
        console.log('login')
        window.location.href = loginLink
    } else if(logInStatus === 200){
        console.log('logout')
        window.location.href = shareRecipeLink

    }
}

function reRoute(logInStatus, loginLink, reRouteLink, logInAllData){

    console.log(logInStatus)

    if(logInStatus === 400){
        console.log('login')
        window.location.href = loginLink
    } else if(logInStatus === 200){
        console.log('logout')
        window.location.href = reRouteLink+`/index.html?id=${logInAllData.id}`

    }
}

export function searchRecipe(param, searchLink){
   
    window.location.href = `${searchLink}=${param}`
    
    
}


function getlogInData(data){
    return data
}

// pages/allrecipes/?search










