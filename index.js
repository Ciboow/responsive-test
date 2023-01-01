document.querySelector('.theme-toggle-button').addEventListener('click',toggleTheme);

function toggleTheme(){
    document.body.classList.toggle('dark');
    saveTheme();
}
//for onLoad
function isDark(){
    const isPresent = document.body.classList.contains("dark");
    alert(isPresent);
}

function saveTheme(){
    const isPresent = document.body.classList.contains("dark");
    localStorage.setItem('darkTheme',isPresent);
}