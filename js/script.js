
new WOW().init();


//header bg's height settings
var headerHeight = $('header').css('height');

$('.stars, .twinkling').css('height', headerHeight);
$('#particles-js').css('height', headerHeight);
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "star",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.2,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 100,
      "color": "#ffffff",
      "opacity": 0.2,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 130,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});



// var soc = document.querySelector('.social');
// var com = document.querySelector('.comment');


// com.addEventListener('click', function () {
//     if (soc.classList.contains('active1')) {
//         soc.classList.remove('active1');
//     }
//     else {
//         soc.classList.add('active1');
//     }
//     console.log(soc, com);

// })
// function start() {

//  var text = document.querySelector('.text');
//     var str = text.innerHTML;
//     text.innerHTML = '';
//     var i = 0
//     function print() {

//         text.innerHTML += str.charAt(i);
//         i++;

//     }


    
//     print()
//     setInterval(print, 100)
//     console.log(text);
//     console.log(str);
// }
// start()

function star() {
    var set = new SetNextTo('.h4 .par', 'active')
    var set = new SetNextTo('.h4 .par', 'TOGGLE')
    function SetNextTo(pattern, active) {
        this.slider = document.querySelectorAll(pattern);

        console.log(this.slider);

        this.i = 0;

        var dot = this;
        function SetNext() {
            dot.slider[dot.i].classList.remove(active);

            dot.i++;

            if (dot.i >= dot.slider.length) {
                dot.i = 0;
            }
            dot.slider[dot.i].classList.add(active);
        }
        this.int = setInterval(SetNext, 2000);
    }


}
star()
// function name() {
//     var set = new BackGrow('.form-header', 'deep-purple', 'indigo', 'blue', 'rgba-red-strong', 'rgba-pink-strong', 'rgba-orange-strong');
//     var set2 = new BackGrow('.rac', 'indigo', 'deep-purple', 'blue', 'rgba-pink-strong', 'rgba-orange-strong', 'rgba-red-strong');
//     var set3 = new BackGrow('.Sectionmain', 'ripe-malinka-gradient', 'blue-gradient', 'aqua-gradient', 'peach-gradient', 'purple-gradient', 'morpheus-den-gradient');
//     function BackGrow(form, morpheus, young, blue, red, pink, purple) {
//         this.blueGradient = document.querySelectorAll(form);
//         console.log(this.blueGradient);
//         var dod = this;
//         function setHire() {
//             for (dod.i = 0; dod.i < dod.blueGradient.length; dod.i++) {
//                 if (dod.blueGradient[dod.i].classList.contains(blue)) {
//                     dod.blueGradient[dod.i].classList.remove(blue);
//                     dod.blueGradient[dod.i].classList.add(morpheus);
//                 }
//                 else if (dod.blueGradient[dod.i].classList.contains(morpheus)) {
//                     dod.blueGradient[dod.i].classList.remove(morpheus);
//                     dod.blueGradient[dod.i].classList.add(young);
//                 }
//                 else if (dod.blueGradient[dod.i].classList.contains(young)) {
//                     dod.blueGradient[dod.i].classList.remove(young);
//                     dod.blueGradient[dod.i].classList.add(red);
//                 }
//                 else if (dod.blueGradient[dod.i].classList.contains(red)) {
//                     dod.blueGradient[dod.i].classList.remove(red);
//                     dod.blueGradient[dod.i].classList.add(pink);
//                 }
//                 else if (dod.blueGradient[dod.i].classList.contains(pink)) {
//                     dod.blueGradient[dod.i].classList.remove(pink);
//                     dod.blueGradient[dod.i].classList.add(purple);
//                 }
//                 else if (dod.blueGradient[dod.i].classList.contains(purple)) {
//                     dod.blueGradient[dod.i].classList.remove(purple);
//                     dod.blueGradient[dod.i].classList.add(blue);
//                 }
//             }
//         }
//         this.int = setInterval(setHire, 2000);
//     }


// }
// name()
// function name1() {
//     let rac1 = document.querySelectorAll('.rac1');
//     let parag = document.querySelectorAll('.rac1 p');
//     for (let i = 0; i < rac1.length; i++) {
//         rac1[i].addEventListener('mouseover', () => {
//             rac1[i].classList.add('blue')
//             rac1[i].classList.add('amber-text')
//             if (parag[i].classList.contains('dark-grey-text')) {
//                 parag[i].classList.remove('dark-grey-text')
//                 parag[i].classList.add('amber-text')
//             }




//         })
//         rac1[i].addEventListener('mouseout', () => {
//             rac1[i].classList.remove('blue')
//             rac1[i].classList.remove('amber-text')
//             if (parag[i].classList.contains('amber-text')) {
//                 parag[i].classList.remove('amber-text')
//                 parag[i].classList.add('dark-grey-text')
//             }
//             parag[i].classList.remove('amber-text')

//         })
//     }
// }
// name1()
// $(function(){
//   $('#carousel').elastislide();
// });

// vivus settings
new Vivus('svg1', {
  duration: 200,

});
// new Vivus('css',{
//   duration:70
// });
// new Vivus('js',{
//   duration:70
// });
// new Vivus('php',{
//   duration:120
// });
// new Vivus('bots',{
//   duration:70
// });
// new Vivus('jq',{
//   duration:70
// });
// new Vivus('grid',{
//   duration:50
// });
// new Vivus('less',{
//   duration:100
// });
// new Vivus('sass',{
//   duration:90
// });
// new Vivus('gulp',{
//   duration:70
// });
// new Vivus('open',{
//   duration:70
// });
// new Vivus('word',{
//   duration:100
// });
// new Vivus('ass',{
//   duration:100
// });


    setTimeout(function () {
      new Typed('header .hell', {
        strings: ["Hi I'm Abdumannon"],
        typeSpeed:120,
        showCursor: false,
     
      onComplete: function () {
        new Typed('.name2', {
          strings: ['Welcome to my WORLD!'],
          typeSpeed: 20,
          showCursor: false,
        })
     
      }
    })
    }, 150);



$(document).ready(function () {
    $('.menu-link').click(function () {
      $('menu').css('transform', 'translateX(0%) translateY(0%)');
  })
  $('.close-btn').click(function () {
      $('menu').css('transform', 'translateX(100%) translateY(-100%)');

  })
  let $links = $('menu ul li a')
  $links.click(function (e) {
      e.preventDefault();

      $links.removeClass('active')

      let $id = $(this).addClass('active').attr('href');

      let $target = $($id).offset().top;

      console.log($target, $id);

      $('html , body').animate({

          scrollTop: $target,

      }, 2000)


  });
  $(window).scroll(function () {
      $scroll = $(this).scrollTop();
      console.log($scroll);
      $links.each(function () {
          let $id = $(this).attr('href');
          let $target = $($id).offset().top;
          if($scroll >= $target){
              $links.removeClass('active')
              $(this).addClass('active')
          }


  })

});
$('section').imagesLoaded({
  background: true
}).done(function (instance) {
  $('.loading').fadeOut(2000);
})

});

