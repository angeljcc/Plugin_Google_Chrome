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
    $("#js_itemlist").append('<section class="filtergroup cf">Mi primer hack</section>');
    for(i=0;i<lista.length;i++) {
        //lista[i].next('.item_image').css()
       $("#js_itemlist").append(lista[i]);
    }

   });
}());