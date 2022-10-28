import FlashScript from "./flash.js";

const picker = new FlashScript()
document.querySelectorAll('.px-3').forEach(item => {
  item.addEventListener('click', function(){
    picker.picker(item)
  })
})

  $(function(){    
    picker.letters_color()
    $('#small').on('click', function(){
        picker.small_letters()
    })
    $('#capital').on('click', function(){       
        picker. capital_letters()
      })
    $('#three_letter_word').on('click', function(){
        picker.three_letter_word()
    })
    $('#two_letter_word').on('click', function(){
        picker.two_letter_word()
    })
    $('#clear').on('click', function(){
       picker.clear_text()
     })

     if(window.matchMedia("(max-width:600px)").matches){
       picker.letter_width_adapt()
     }else{
       picker.letter_width_full
     }

     $('#arrow_down').on('click', function(){
       $(this).hide()
       picker.hide_options()
     })
     $('#arrow_up').on('click', function(){
       picker.show_options()
     })
})
