$(document).ready(function () {
    $('#showit').click(function() {
        $('#pic').show('slow');
    });
    $('#hideit').click(function() {
        $('#pic').hide('slow');
    });
    $('#toggle').click(function () {
        $('#pic').toggle(1000, function () {
            alert('toggle clicked');
        });
    })

    //............fade In/Out......................

    $('#fadeup').click(function () {
        $('#pic').fadeOut(1000);
    });
    $('#fadedown').click(function () {
        $('#pic').fadeIn(1000);
    });
    $('#fadeupdown').click(function () {
        $('#pic').fadeToggle(1000);
    })

    //..............Slide Up/Down.....................

    $('#slideup').click(function () {
        $('#slide, p').animate({
            'fontSize': '25px',
            'marginTop':'-150px',
        }, function () {
                $(this).parent('#slideup').slideUp(1000);
        });
    });
    $('#slidedown').click(function () {
        $('#slide').slideDown(1000, function() {
            $(this).children('p').animate({
                'marginTop': '0px',
                'fontSize':'80px',
            });
        });
    });
    $('#updown').click(function () {
        $('#slide').stop().slideToggle(1000);
    })
    
});
