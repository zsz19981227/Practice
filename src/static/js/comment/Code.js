define(['jquery', 'hand', 'swiper', '../../../mock/script.js'], function($, handn, swiper, template) {
    function codes() {
        $.ajax({
            url: "../../../mock/data/main.json",
            success: function(data) {;
                rendering(data)
            }
        })

        function rendering(data) {
            template("#ip1", {
                data: data.items[0].data.data
            }, '.banner');
            new Swiper('.banner', {
                autoPlay: 1000,
                loop: true,
            });
            template("#ip2", {
                data: data.items[1].data.data
            }, '.main-card');

            template("#ip3", {
                data: data.items[2].data.data
            }, '.tab__wrap');
            var ajd = data.items[2].data.data;

            $('.tab a').click(function() {
                $(this).addClass('lok').siblings().removeClass('lok');
                var index = $(this).index();
                $('.section').eq(index).addClass('show').siblings().removeClass('show');
            })
            $('.section').on('scroll', function() {
                // var offset = $('.loading').position().top;
                // console.log(offset)
                var scrollTop = $(this).scrollTop() + $(this).height();
            })

        }

        // $.ajax({
        //     url: "../../../mock/data/fenlei.json",
        //     success: function(data) {;
        //         console.log(data)
        //     }
        // })
    }
    return {
        codes: codes
    }
})