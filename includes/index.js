var mql=window.matchMedia('(max-width: 576px)');
var logoLink=document.createElement('a');
logoLink.style.background="url(../images/I_SMART_logo.png) no-repeat";
logoLink.style.width="165px";
logoLink.style.height="33px";
logoLink.style.display="block";
logoLink.style.cssFloat="left";
logoLink.id='logoLink';

var userBox=document.createElement('section');
userBox.style.width="100px";
userBox.style.height="50px";
userBox.style.backgroundColor="black";
userBox.style.cssFloat="left";




$form=$(" <form action='/action_page.php' class='form-inline' id='topMenuSearchBox'> <button class='btn btn-outline-success' type='submit' id='topMenuSearchButton'><section id='topMenuSearchLogo'></section></button>  <input class='form-control' type='search' placeholder='' aria-label='Search' id='topMenuSearchText'> </form>");

$(document).ready(function(){
        $('#userLogin').append(userBox)
        screenTest(mql);

        $.getJSON("includes/index.json",function(data){
                
                console.log(data);
           

        });

       




});







function screenTest(e){
    $('#topMenuSearchBox').remove();
    $('#logoLink').remove();
    if(e.matches){
        $('#LogoBoxMobile').append(logoLink);
        $('#addSearchFormMobile').append($form); 
    }else{
        $('#addSearchFormPc').append($form);      
    }
}

mql.addListener(screenTest);

