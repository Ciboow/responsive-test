function loadTheme(){
    const isDark = localStorage.getItem('darkTheme');
    if(isDark=="true"){
        document.body.classList.add('dark');
    }
}