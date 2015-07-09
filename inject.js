/**
 * Created by angel on 28/06/15.
 */
// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

(function(){
   $(document).ready(function(){


    var lista = new Array();
    $('#js_itemlist').each(function(indice, elemento) {
        //console.log('El elemento con el índice '+indice+' contiene '+$(elemento).html());
        lista.push($(elemento).html());

    });
    $("#js_itemlist").html("");
    //$("#js_itemlist").append('<section class="filtergroup cf">Mi primer hack</section>');
    for(i=0;i<lista.length;i++) {
        //lista[i].next('.item_image').css()
       $("#js_itemlist").append(lista[i]);
    }
        $(".item").addClass('item2');
        $(".item_wrapper").addClass('item_wrapper2');
        $(".item_image").addClass('item_image2');
        //$(".item_image img").addClass('item_image2 img');
        $(".item_prices").addClass('item_prices2');
        //$(".item_prices h3").addClass('item_prices2 h3');

        $(".item").removeClass('item');
        //$(".item_wrapper").removeClass('item_wrapper');
        $(".item_image").removeClass('item_image');
        //$(".item_image img").removeClass('item_image img');
        $(".item_prices").removeClass('item_prices');
        var $objetoSlide = $('#js_itemlist');
       // Oculto la ultima li que por defecto sale
        $objetoSlide.find('li:gt(0)').hide();

        var $actual,$siguiente;
       if($objetoSlide.has('.Activa')){
            $objetoSlide.find('li:first').addClass('Activa');
       }

       $actual = $objetoSlide.find('.Activa');

       if($actual.next().length>0){
           $siguiente = $actual.next();
       }else{
           $siguiente = $objetoSlide.find('li:first');
       }
        $siguiente.addClass('Activa').fadeIn();
       $actual.removeClass('Active').fadeOut();

   });
}());