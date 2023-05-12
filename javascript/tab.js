$(document).ready(function () {
    var zindex = 5;

    $("div.card").click(function (e) {
        e.preventDefault();

        var isShowing = false;

        if ($(this).hasClass("infoshow")) {
            isShowing = true
        }

        if ($("div.cards").hasClass("infoshowing")) {
            // a card is already in view
            $("div.card.infoshow")
                .removeClass("infoshow");

            if (isShowing) {
                // this card was showing - reset the grid
                $("div.cards")
                    .removeClass("infoshowing");
            } else {
                // this card isn't showing - get in with it
                $(this)
                    .css({
                        zIndex: zindex
                    })
                    .addClass("infoshow");

            }

            zindex++;

        } else {
            // no cards in view
            $("div.cards")
                .addClass("infoshowing");
            $(this)
                .css({
                    zIndex: zindex
                })
                .addClass("infoshow");

            zindex++;
        }

    });
});
// logo animation part start 
const logoaniAnimation = anime.timeline({
    autoplay: true,
    delay: 200
});

logoaniAnimation.add({
    targets: '#logoani',
    translateY: [-100, 0],
    opacity: [0, 1],
    elasticity: 600,
    duration: 1600
}).add({
    targets: '#logoani-hexagon',
    rotate: [-90, 0],
    duration: 1200,
    elasticity: 600,
    offset: 100
}).add({
    targets: '#logoani-circle',
    scale: [0, 1],
    duration: 1200,
    elasticity: 600,
    offset: 500
}).add({
    targets: '#logoani-mask',
    scale: [0, 1],
    duration: 1000,
    elasticity: 600,
    offset: 550
}).add({
    targets: '#logoani-text',
    translateX: ['-100%', 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutExpo',
    offset: 1000
})

restart.addEventListener("click", () => logoaniAnimation.restart());
