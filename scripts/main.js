var loginPage = document.querySelector('.login-page')
var taskPage = document.querySelector('.tasks-page')

// btn.addEventListener('click', init)

var currentPage = ''
var pages = {
    loginPage : loginPage,
    taskPage : taskPage, 
    
};



//Sets default page to Login Page
function init() {
    setPage('loginPage')
}
//Switching Between Pages

// setPage('taskPage')
// setPage('pageC')
// setPage('loginPage')



function setPage(key) {
   const page = pages[key]
    if(page){
        // show the page
        page.style.display = 'block'

        // remove previous page
        if (currentPage !== '') {
            const previousPage = pages[currentPage]
            previousPage.style.display = 'none'
        }

        currentPage = key
    }
}
