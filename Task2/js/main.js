let element = document.querySelectorAll(".menu-title a ")

element.forEach(x => {
    x.addEventListener('click',function(){
        let activeItem= document.querySelector(".active-item")
        activeItem.classList.remove("active-item")
        this.classList.add("active-item")
    })
});



let button = document.querySelectorAll(".contain .row .menu #nav .btn");

button.forEach(btn=>{
        btn.addEventListener('click',function(){
            let menuSize = document.querySelector('.contain .row .menu')
            let sideBarSize = document.querySelector('.contain .row .col-2')
            if(menuSize.classList == "menu col-12"){
                menuSize.classList.remove ('col-12')
                menuSize.classList.add('col-10')
                menuSize.classList.add('animation')


                sideBarSize.classList.add('sidebar-visibility')
                sideBarSize.classList.add('animation')
            }
            else{

                menuSize.classList.remove ('col-10')
                menuSize.classList.add('col-12')
                menuSize.classList.remove('animation')
                
                
                


                sideBarSize.classList.remove('sidebar-visibility')
                sideBarSize.classList.remove('animation')
                

            }
        })
    })
    
