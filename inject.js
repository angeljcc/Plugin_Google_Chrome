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
        console.log(lista[0]);

    //Drop the ul in #js_itemlist to be putting our slide
    $("#js_itemlist").html("");
    for(i=0;i<lista.length;i++) {
        //$(lista[i]).hide();
       $("#js_itemlist").append(lista[i]);
        $("#js_itemlist").find('li.hotel').hide();
        $("#js_itemlist").find('li:first').show().addClass('Activa');
        console.log("i: "+i);
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
        var actual = $('#js_itemlist').find('li:first');
       $(document).keydown(function(key) {
           switch(parseInt(key.which,10)) {
               case 37:
                   //$('img').animate({left: "-=10px"}, 'fast');
                   $(actual).hide().removeClass('Activa');
                   actual= $(actual).prev('li').show().addClass('Activa');
                   console.log(numli);
                   numli--;
                   if(numli<=0){
                       numli=lista.length-numli;
                       actual = $('#js_itemlist').find('li:last');
                   }
                   break;
               case 39:
                   //RIGHT
                   $(actual).hide().removeClass('Activa');
                   actual= $(actual).next('li').show().addClass('Activa');
                    console.log(numli);
                   numli++;
                   if(numli >= lista.length){
                       numli=0;
                       actual = $('#js_itemlist').find('li:first');
                   }
                   break;
           }
       });

   });
}());