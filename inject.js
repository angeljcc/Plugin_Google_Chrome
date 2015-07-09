/**
 * Created by angel on 28/06/15.
 */
// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

(function(){
   $(document).ready(function(){


    var lista = new Array();

    //I go over the ul and get into an array.
    $('#js_itemlist').each(function(indice, elemento) {
        lista.push($(elemento).html());

    });
    //Drop the ul in #js_itemlist to be putting our slide
    $("#js_itemlist").html("");
    for(i=0;i<lista.length;i++) {
        //lista[i].next('.item_image').css()
       $("#js_itemlist").append(lista[i]);
    }
       //Add classes that we need, and I create in CSS
        $(".item").addClass('item2');
        $(".item_wrapper").addClass('item_wrapper2');
        $(".item_image").addClass('item_image2');
        $(".item_prices").addClass('item_prices2');

        //We remove classes that we do not need
        $(".item").removeClass('item');
        $(".item_image").removeClass('item_image');
        $(".item_prices").removeClass('item_prices');

        //Now, built the slide to pass each item.
        var $objetoSlide = $('#js_itemlist');

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