require.config({
    paths: {
        "jquery": './lib/jquery-1.7.2.min',
        "hand": './lib/handlebars-v4.0.11',
        'Code': "./comment/Code",
        'swiper': './lib/swiper-3.4.2.min'
    }
})
require(['Code'], function(code) {
    code.codes();
})