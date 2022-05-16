let element = document.querySelectorAll('#menu .menu-item')


element.forEach(ele=>{
    
    ele.addEventListener("click",function(){
        let curretActiveItem = document.querySelector('.active-menu-item');
        curretActiveItem.classList.remove('active-menu-item');
        this.classList.add('active-menu-item');
        
        if(this.classList == "menu-item baki active-menu-item"){
            let menuText = document.querySelectorAll('.text .menu-text');

            menuText.forEach(x=>{
                
                if(x.classList == 'menu-text baki notvisible'){
                    x.classList.remove('notvisible')
                    x.classList.add('visible')

                    
                }
                else{
                    if(x.classList == 'menu-text seki visible' || x.classList == 'menu-text gence visible' ){
                        x.classList.remove('visible')
                        x.classList.add('notvisible')
                    }
                }
            }) 
        } 

 
        if(this.classList == "menu-item seki active-menu-item"){
            let menuText = document.querySelectorAll('.text .menu-text');

            menuText.forEach(x=>{
                
                if(x.classList == 'menu-text seki notvisible'){
                    x.classList.remove('notvisible')
                    x.classList.add('visible')

                }
                else{
                    if(x.classList == 'menu-text baki visible' || x.classList == 'menu-text gence visible' ){
                        x.classList.remove('visible')
                        x.classList.add('notvisible')
                    }
                }

            }) 
        } 

        if(this.classList == "menu-item gence active-menu-item"){
            let menuText = document.querySelectorAll('.text .menu-text');

            menuText.forEach(x=>{
                
                if(x.classList == 'menu-text gence notvisible'){
                    x.classList.remove('notvisible')
                    x.classList.add('visible')

                }
                else{
                    if(x.classList == 'menu-text baki visible' || x.classList == 'menu-text seki visible' ){
                        x.classList.remove('visible')
                        x.classList.add('notvisible')
                    }
                }
                
                
            }) 
        } 

        
    })
    

})

