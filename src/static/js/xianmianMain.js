require.config({
    paths: {
        "jquery": './lib/jquery-1.7.2.min',
        "hand": './lib/handlebars-v4.0.11',
        'xianmian': "./comment/xianmian"
    }
})
require(['xianmian'], function(xm) {
    xm.xmS();
})