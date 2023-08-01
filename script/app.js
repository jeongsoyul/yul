$(function(){
    //menu
    $("header .menu>li,.submenu").mouseover(function(){
        $(".submenu",this).stop(true).slideDown();
    });
    //menu
    $("header .menu>li,.submenu").mouseout(function(){
        $(".submenu",this).stop(true).slideUp();
    });

    //header logo 변경
    $("header").on({
        mouseover:function(){
            $("header .logo img").attr('src','./img/logo_b.png')
        },
        mouseout:function(){
            $("header .logo img").attr('src','./img/logo.png')
        }
    })

    //hamberger

    let open = document.querySelector(".open");
    console.log(open)

    let close = document.querySelector(".close");
    console.log(close)
    
    let nav = document.querySelector("nav");
    console.log(nav)
    
    open.addEventListener('click',()=>{
        nav.style.display="block"
    });
    
    close.addEventListener('click',()=>{
        nav.style.display="none"
    });
/////
});