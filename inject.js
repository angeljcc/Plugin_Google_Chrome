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

       lista = $('#js_itemlist').children('li');

    //Drop the ul in #js_itemlist to be putting our slide
    $("#js_itemlist").html("");
    for(i=0;i<lista.length-1;i++) {
        //$(lista[i]).hide();
       $("#js_itemlist").append(lista[i]);
        $("#js_itemlist").find('li.hotel').hide();
        $("#js_itemlist").find('li:first').show().addClass('Activa');

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

        var numli=0;
        var actual= $('#js_itemlist').find('li:first');
       $(document).keydown(function(key) {
           switch(parseInt(key.which,10)) {
               case 37:
                   //LEFT
                   numli--;
                   console.log(numli);
                   if(numli<=0){
                       numli=lista.length-1;
                       $(actual).hide();
                       actual = $('#js_itemlist').find('li:nth-child(numli)').slideToggle();
                   }else {
                       $(actual).hide();
                       actual = $(actual).prev('li').slideToggle();
                   }
                   break;
               case 39:
                   //RIGHT
                   numli++;
                   console.log(numli);

                   if(numli >= lista.length-1){
                       numli=0;
                       $(actual).hide();
                       actual = $('#js_itemlist').find('li:first').slideToggle();
                   }else{
                       $(actual).hide();
                       actual= $(actual).next('li').slideToggle();
                   }
                   break;
           }
       });

   });
}());