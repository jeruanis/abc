class FlashScript{
    constructor (){
        this._first_id_list=''
        this._second_id_list=''
        this._third_id_list=''
        this._fourth_id_list=''
        this._id = ''
        this._letter= ''
        this._dest_id=''
    }
    picker (item){
         this._first_id_list=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 'zo']
         this._second_id_list=['ab','bb','cb','db','eb','fb','gb','hb','ib','jb','kb','lb','mb','nb','ob','pb','qb','rb','sb','tb','ub','vb','wb','xb','yb','zb','zbo']
         this._third_id_list=['ac','bc','cc','dc','ec','fc','gc','hc','ic','jc','kc','lc','mc','nc','oc','pc','qc','rc','sc','tc','uc','vc','wc','xc','yc','zc','zco']
         this._fourth_id_list=['ad','bd','cd','dd','ed','fd','gd','hd','id','jd','kd','ld','md','nd','od','pd','qd','rd','sd','td','ud','vd','wd','xd','yd','zd','zdo']
        //getting the id that was clicked
         this._id = item.getAttribute('id');
        //getting the letter contained from the clicked id
         this._letter = item.innerHTML;
         //reflect the letter equivalent of the id clicked.
        if(this._first_id_list.includes(this._id))
            {this._dest_id='first'}
        else if(this._second_id_list.includes(this._id))
            {this._dest_id='second'}
        else if(this._third_id_list.includes(this._id))
            {this._dest_id='third'}
        else if(this._fourth_id_list.includes(this._id))
            {this._dest_id='fourth'}
        document.getElementById(this._dest_id).innerHTML=this._letter;
      }

    small_letters(){
        document.getElementById('first').classList.remove('text-uppercase')
        document.getElementById('second').classList.remove('text-uppercase')
        document.getElementById('third').classList.remove('text-uppercase')
        document.getElementById('fourth').classList.remove('text-uppercase')
        document.getElementById('first').classList.add('text-lowercase')
        document.getElementById('second').classList.add('text-lowercase')
        document.getElementById('third').classList.add('text-lowercase')
        document.getElementById('fourth').classList.add('text-lowercase')
    }

    capital_letters(){
        document.getElementById('first').classList.remove('text-lowercase')
        document.getElementById('second').classList.remove('text-lowercase')
        document.getElementById('third').classList.remove('text-lowercase')
        document.getElementById('fourth').classList.remove('text-lowercase')
        document.getElementById('first').classList.add('text-uppercase')
        document.getElementById('second').classList.add('text-uppercase')
        document.getElementById('third').classList.add('text-uppercase')
        document.getElementById('fourth').classList.add('text-uppercase') 
    }

    three_letter_word(){
        //jquery is working inside javascript class
        $('.fg, .sg, .tg, #first, #second, #third').show();
        $('#fourth, .ug.mb-3').removeClass('d-inline')
        $('#fourth, .ug.mb-3').hide();
    }

    two_letter_word(){
        $('.fg, .sg, #first, #second').show()
        $('#third, #fourth, .tg.mb-3, .ug.mb-3').removeClass('d-inline')
        $('#third, #fourth, .tg.mb-3, .ug.mb-3').hide()
    }

    clear_text() {
        $('#first').text('')
        $('#second').text('')
        $('#third').text('')
        $('#fourth').text('')
    }

    letter_width_adapt(){
        $('.fg, .sg, .tg, .ug').css({'max-width':'360px'})
    }
    letter_width_full(){
        $('.fg, .sg, .tg, .ug').css({'max-width':'100%'})
    }

    letters_color(){
        $('.fg.mb-3>span').addClass('bg-info');
        $('.sg.mb-3>span').addClass('bg-warning');
        $('.tg.mb-3>span').addClass('bg-success');
        $('.ug.mb-3>span').addClass('bg-primary');
    }

    hide_options(){
        $('#option').hide()
        $('#arrow_up').removeClass('d-none')
        $('#clear').removeClass('mr-5')
        $('#clear').css({'display':'inline-block', 'position':'absolute', 'right':'12px'})
    }

    show_options(){
        $('#option').slideToggle()
        $('#arrow_down').show()
        $('#arrow_up').addClass('d-none')
        $('#clear').css({'display':'block','position':'relative'})
    }

} export default FlashScript;
