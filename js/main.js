$(document).ready(function() {

    // HIDE
    /*
    $('.trigger').click(function() {
        $('.element').hide(2000, function() {
            console.log('transition done !')
        });
    });
    */

    // SHOW
    /*
    $('.trigger').click(function() {
        $('.element').show(2000, function() {
            console.log('transition done !')
        });
    });
    */

    // TOGGLE
    /*
    $('.trigger').click(function() {
        $('.element').toggle(2000, function() {
            console.log('transition done !')
        });
    });
    */



    // -------- FADE IN AND FADE OUT ----------------------------------

    /*

    $('.fadeIn').click(function() {
        $('.element').fadeIn(2000, function() {
            console.log(`transition done`);
        });
    });

    $('.fadeOut').click(function() {
        $('.element').fadeOut(2000, function() {
            console.log(`transition done`);
        });
    });
    */


    /*
    $('.fadeIn').click(function() {
        $('.element').fadeTo(2000, 1, function() {
            console.log(`transition done`);
        });
    });

    $('.fadeOut').click(function() {
        $('.element').fadeTo(2000, 0.3, function() {
            console.log(`transition done`);
        });
    });
    */


    $('.fadeIn, .fadeOut').click(function() {
        $('.element').fadeToggle(2000, function() {
            console.log('Transition Complete !')
        })
    })





});











