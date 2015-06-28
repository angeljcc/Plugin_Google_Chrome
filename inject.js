/**
 * Created by angel on 28/06/15.
 */
// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

(function(){
   $(document).ready(function(){
        $("#js_itemlist").append('<section class="filtergroup cf">Mi primer hack</section>');


    $('#js_itemlist ul li').each(function(indice, elemento) {
        console.log('El elemento con el índice '+indice+' contiene '+$(elemento).text());
    });

   });
}());