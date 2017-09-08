(function () {
  'use strict';

  $(".checkout-btn.deposit").on('click', function(){
    $.ajax({
                url: '/deposit',
                dataType: 'text',
                type: 'post',
                contentType: 'application/x-www-form-urlencoded',
                data: {
                  address: $('.checkout-name').val(),
                  amount: $('.checkout-exp').val()
                },
                success: function( data, textStatus, jQxhr ){
                    console.log( data );
                },
                error: function( jqXhr, textStatus, errorThrown ){
                    console.log( errorThrown );
                }
            });
  });
  $(".checkout-btn.withdraw").on('click', function(){
    $.ajax({
                url: '/withdraw',
                dataType: 'text',
                type: 'post',
                contentType: 'application/x-www-form-urlencoded',
                data: {
                  address: $('.checkout-name').val(),
                  amount: $('.checkout-exp').val()
                },
                success: function( data, textStatus, jQxhr ){
                    console.log( data );
                },
                error: function( jqXhr, textStatus, errorThrown ){
                    console.log( errorThrown );
                }
            });
  });
  $(".checkout-btn.request").on('click', function(){
    $.ajax({
                url: '/request',
                dataType: 'text',
                type: 'post',
                contentType: 'application/x-www-form-urlencoded',
                data: {
                  address: $('.checkout-name').val(),
                  amount: $('.checkout-exp').val()
                },
                success: function( data, textStatus, jQxhr ){
                    console.log( data );
                },
                error: function( jqXhr, textStatus, errorThrown ){
                    console.log( errorThrown );
                }
            });
  });
})();
