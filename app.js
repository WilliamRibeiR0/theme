const switcher = document.querySelector('.btn')

switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "ligth-theme"){
        this.textContent = "ligth"
    }
    else{
        this.textContent = "dark"
    }
    console.log('current class name:' + className)
});


