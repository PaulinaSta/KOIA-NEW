new Glide('.banner__glide', {
    type: 'carousel',
    startAt: 0,
    gap: 0,
    autoplay: 4000,
    animationDuration: 800,
}).mount();

new Glide('.gallery__glide', {
    type: 'slider',
    startAt: 0,
    focusAt: 'center',
    gap: 0,
    animationDuration: 400,
}).mount();

// if (screen.availWidth > screen.availHeight) {
//     new Glide('.gallery__glide', {
//         perView: 2,
//         gap: 20,
//     }).mount();
// };

new Glide('.opinions__glide', {
    type: 'carousel',
    startAt: 0,
    gap: 0,
    animationDuration: 400,
}).mount();

lightbox.option({
    'albumLabel': "Zdjęcie %1 z %2",
    'positionFromTop': 100,
    'wrapAround': true,
});

function initMap() {
    // The location of Uluru
    const uluru = {
        lat: -25.344,
        lng: 131.036
    };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

const showMenu = () => {
    $('.menu__burger').on('click', function () {
        $('.menu__burger-icon').toggleClass('menu__burger-icon--show');
        $('.menu__list').toggleClass('menu__list--show');
    });
};

const goToSection = () => {
    var navbarHeight = $('.menu__navbar').height();
    $('.menu__link').on('click', function () {
        $('body, html').animate({
            scrollTop: $('[data-section=' + $(this).attr('id') + ']').offset().top - navbarHeight
        }, 1000);
        $('.menu__burger-icon').toggleClass('menu__burger-icon--show');
        $('.menu__list').toggleClass('menu__list--show');
    });
};

const goToOffer = () => {
    $('.js-button__link--offer').on('click', function () {
        $('body, html').animate({
            scrollTop: $('[data-section=' + $(this).attr('id') + ']').offset().top - 50
        }, 1000);
    });
};

const scrollPage = () => {
    $(window).on('scroll', function () {
        const scrollValue = $(window).scrollTop();
        const distanceAbout = $('.about').offset().top - 1;

        // toTopShow
        if (scrollValue > distanceAbout) {
            $('.to-top-btn').addClass('to-top-btn--show');
        }
        if (scrollValue < distanceAbout) {
            $('.to-top-btn').removeClass('to-top-btn--show');
        }

    })
}

const scrollToTop = () => {
    $('.to-top-btn').on('click', function () {
        $('body, html').animate({
            scrollTop: $('.banner').offset().top
        }, 1000);
    });
}




const app = () => {
    showMenu();
    goToSection();
    goToOffer();
    scrollPage();
    scrollToTop();
};

app();