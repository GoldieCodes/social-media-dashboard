const changeThemes = document.querySelector('.toggle-themes');

changeThemes.addEventListener('click', e => {
    myFunc()
    toggleThemes()
});

function myFunc(){
    changeThemes.classList.toggle('dark-theme');
} 
 
function toggleThemes(){
    //gets an array of all link tags on the html page and selects the third member
    var theme = document.getElementsByTagName('link')[2];
    var modes = document.querySelector('.toggle-text');

    if(theme.getAttribute('href') === 'css/lightTheme.css' ){
        theme.setAttribute('href', 'css/darkTheme.css');
        modes.innerHTML = 'Light Mode';
    }
    else{
        theme.setAttribute('href', 'css/lightTheme.css');        
        modes.innerHTML = 'Dark Mode';
    }
}