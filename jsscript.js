$(document).ready(function() {
    //Top Slide
    var slide_generator = 0;
  $(".left_bottom").click(function() {
      slide_generator -= 1;
      if (slide_generator == -1 || slide_generator == 2){
    $(".title_image").css('background-image', "url('images/bodyimage1.jpg')");
      $(".title_image").animate({'opacity':'0.5'}, 0);
      $(".title_image").animate({'opacity':'1'}, 400);}
      else if (slide_generator == -2 || slide_generator == 1) {
      $(".title_image").css('background-image', "url('images/bodyimage2.jpg')");
      $(".title_image").animate({'opacity':'0.5'}, 0);
      $(".title_image").animate({'opacity':'1'}, 400);
}
      else if (slide_generator == -3 || slide_generator == 3) {
      $(".title_image").css('background-image', "url('images/bodyimage.jpg')");
      $(".title_image").animate({'opacity':'0.5'}, 0);
      $(".title_image").animate({'opacity':'1'}, 400);
      slide_generator = 0;}
      else if (slide_generator == 0) {
        $(".title_image").css('background-image', "url('images/bodyimage.jpg')");
      $(".title_image").animate({'opacity':'0.5'}, 0);
      $(".title_image").animate({'opacity':'1'}, 400);
      }
      
  });
  $(".right_bottom").click(function() {
      slide_generator += 1;
      if (slide_generator == 1 || slide_generator == -2){
    $(".title_image").css('background-image', "url('images/bodyimage2.jpg')");
      $(".title_image").animate({'opacity':'0.5'}, 0);
      $(".title_image").animate({'opacity':'1'}, 400);}
      else if (slide_generator == 2 || slide_generator == -1) {
      $(".title_image").css('background-image', "url('images/bodyimage1.jpg')");
      $(".title_image").animate({'opacity':'0.5'}, 0);
      $(".title_image").animate({'opacity':'1'}, 400);}
      else if (slide_generator == 3 || slide_generator == -3) {
      $(".title_image").css('background-image', "url('images/bodyimage.jpg')");
      slide_generator = 0;
      $(".title_image").animate({'opacity':'0.5'}, 0);
      $(".title_image").animate({'opacity':'1'}, 400);}
      else if (slide_generator == 0) {
        $(".title_image").css('background-image', "url('images/bodyimage.jpg')");
      $(".title_image").animate({'opacity':'0.5'}, 0);
      $(".title_image").animate({'opacity':'1'}, 400);
      }
      
  });
    
    //Evaluate
    var counter = 8;
    $(".example_button_right").click(function(){
        if(counter > 5){
        $(".example_button_right").animate({backgroundColor: '#B8860B'}, 200);
        $(".box_example").animate({backgroundColor: '#B8860B'}, 200);
        $(".example_button_right").animate({backgroundColor: '#000000'}, 200);
        $(".box_example").animate({backgroundColor: '#000000'}, 200);
        counter -= 1;
        switch(counter){
            case 7:$(".example_flex div:nth-child(1)").hide(200);
        $(".example_flex div:nth-child(6)").show(200);break;
            case 6:$(".example_flex div:nth-child(2)").hide(200);
        $(".example_flex div:nth-child(7)").show(200);break;
            case 5:$(".example_flex div:nth-child(3)").hide(200);
        $(".example_flex div:nth-child(8)").show(200);break;
                      }
        }
        
    })
     $(".example_button_left").click(function(){
        if(counter < 8){
        $(".example_button_left").animate({'backgroundColor':'#B8860B'}, 200);
        $(".box_example").animate({backgroundColor: '#B8860B'}, 200);
        $(".example_button_left").animate({backgroundColor: '#000000'}, 200);
        $(".box_example").animate({backgroundColor: '#000000'}, 200);
        counter += 1;
        switch(counter){
            case 6:$(".example_flex div:nth-child(8)").hide(200);
        $(".example_flex div:nth-child(3)").show(200);break;
            case 7:$(".example_flex div:nth-child(7)").hide(200);
        $(".example_flex div:nth-child(2)").show(200);break;
            case 8:$(".example_flex div:nth-child(6)").hide(200);
        $(".example_flex div:nth-child(1)").show(200);break;
                      }
         }
        
    })
    //Menu selected
    $("li").click(function(){
 
    $(".selected").removeClass("selected");

    $(this).addClass("selected"); 
    });
    //Autio_track
    $(".example_flex>div:nth-child(1)>p").click(function(){
        $(".track_audio_box").animate({'opacity':'0.0'}, 200);
        $(".track_audio_box").animate({'opacity':'1'}, 400);
        $(".track_before").append('<audio controls src="audio/audio_trance.mp3"></audio>');
        $(".track_after").append('<audio controls src="audio/1.mp3"></audio>');
    })
    $(".example_flex>div:nth-child(2)>p").click(function(){
        $(".track_audio_box").animate({'opacity':'0.0'}, 200);
        $(".track_audio_box").animate({'opacity':'1'}, 400);
        $(".track_before").append('<audio controls src="audio/audio_trance.mp3"></audio>');
        $(".track_after").append('<audio controls src="audio/1.mp3"></audio>');
    })
    
    //Revies
    var removesid = 0;
    $(".revieves_box>div:nth-child(1)").hide(0);
    $(".revieves_box>div:nth-child(2)").hide(0);
    $(".revieves_box>div:nth-child(3)").hide(0);
    setInterval (function(){
        removesid++;
        if(removesid == 1) {
        $(".revieves_box>div:nth-child(1)").show(200);
        $(".revieves_box>div:nth-child(3)").hide(0);
        } else if(removesid == 2) {
        $(".revieves_box>div:nth-child(2)").show(200);
        $(".revieves_box>div:nth-child(1)").hide(0);
        }
        else {
        $(".revieves_box>div:nth-child(3)").show(200);
        $(".revieves_box>div:nth-child(2)").hide(0);
        removesid = 0;
        }
    }, 10000);
    

});

//Form

$(document).ready(function() {
    $(".send_track").click(function() {
        $(".form").css('display', "block");
    });
});
    

//Form
function valid (form){
  var login = form.login.value;
  var email = form.email.value;
  var password = form.password.value;
  var emailTest = /[0-9a-zA-Z_-]+@[0-9a-zA-Z_-]+\.[a-zA-Z]{2,5}/i;
  var loginFail = false;
    if(login == "" || login ==" ") {
      loginFail = "Укажите своё имя";
    }else if(emailTest.test(email) == false){
      loginFail = "email введен не правильно";
    }else if(password == "" || password == " "){
      loginFail = "Пожслста прикрепите трек"
    }


    if(loginFail) {
      alert(loginFail);
      return false;
    }else {
      return true;
    }
}

//Timer
var counterMin = 0;
var counterSec = -1;

function timer () {
  counterSec++;
  document.getElementById("sec").innerHTML = counterSec;
  setTimeout("timer()", 1000);
  if(counterSec == 1) {
    document.getElementById("hideZeroSec").innerHTML = "0";
  }
  if(counterSec == 10) {
    document.getElementById("hideZeroSec").innerHTML = "";
  }

  if(counterSec == 60) {
    counterSec = 0;
    counterMin++;
    document.getElementById("sec").innerHTML = "0";
    document.getElementById("min").innerHTML = counterMin;
    document.getElementById("hideZeroSec").innerHTML = "0";
    document.getElementById("sec").innerHTML = counterSec;
  }

  if(counterMin == 1) {
    document.getElementById("hideZeroMin").innerHTML = "0";
  }
  if(counterMin == 10) {
    document.getElementById("hideZeroMin").innerHTML = "";
  }
}