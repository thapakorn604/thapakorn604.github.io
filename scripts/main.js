 /* Toggle show/hide */
    function ShowAndHide() {
        $('.timeline-item.timeline-hide').fadeToggle('timeline-hide');
        $('.timeline-header.timeline-hide span.tag').fadeToggle();
        if ($('#moreless span i').attr('class').includes('fa fa-angle-down')) {
            $('#moreless span i').removeClass('fa fa-angle-down');
            $('#moreless span i').addClass('fa fa-angle-up');
            $('#moreless span i').text(' LESS..');
        } else {
            $('#moreless span i').removeClass('fa fa-angle-up');
            $('#moreless span i').addClass('fa fa-angle-down');
            $('#moreless span i').text(' MORE..');
            doScroll('#experiences');
        }
    }
    /* end */
    /* Show modal */
    function showModal() {
        $(".modal").addClass("is-active");
    }
    function exitModal() {
        $(".modal").removeClass("is-active");
    }
    /* end */
    /* Loading screen */
    $(window).on('load', function () {
        var viewportWidth = $(window).width();
        if (viewportWidth < 600) {
            $("#timeline-edu").removeClass("is-centered");
            $("#timeline-exp").removeClass("is-centered");
        }
        $(".se-pre-con").delay(1500).fadeOut("slow");
    });
    /* end */
    /* responsive timeline */
    $(window).on('resize', function () {
        var viewportWidth = $(window).width();
        if (viewportWidth < 600) {
            $("#timeline-edu").removeClass("is-centered");
            $("#timeline-exp").removeClass("is-centered");
        } else {
            $("#timeline-edu").addClass("is-centered");
            $("#timeline-exp").addClass("is-centered");
        }
    });
    /* end */
    function showMenu() {
        $('#menu').toggleClass('is-active');
        $('#nav-collapse').toggleClass('is-active');
    }
    /* START SCROLL TO SECTION */
    $(document).on('click', '.navbar-item', function (e) {
        var getElem = $(this).attr('href');
        var targetDistance = 20;
        if ($(getElem).length) {
            var getOffset = $(getElem).offset().top;
            $('html,body').animate({
                scrollTop: getOffset - targetDistance
            }, 500);
        }
        return false;
    });
    /* Expanded nav collapse when clicking link */
    $(document).on('click', '.navbar-item', function (e) {
        if ($(e.target).is('a')) {
            $('#menu').removeClass('is-active');
            $('#nav-collapse').removeClass('is-active');
        }
    });
    /* END */
    function doScroll(id) {
        var getOffset = $(id).offset().top;
        var targetDistance = 20;
        $('html,body').animate({
            scrollTop: getOffset - targetDistance
        }, 500);
    }
    /* END SCROLL TO SECTION */
    /* START GO TOP BUTTON,COLLAPSE EXPANDED NAV WHEN SCROLLING */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $(".navbar").css('background-color', '#1a1a1a');
            $('#menu').removeClass('is-active');
            $('#nav-collapse').removeClass('is-active');
        } else {
            $('.scrolltop').stop(true, true).fadeOut();
            $('.navbar').css('background-color', 'transparent');
        }
    });
    /* END GO TOP BUTTON */