require.config({
    paths: {
        "jquery": './lib/jquery-1.7.2.min',
        "hand": './lib/handlebars-v4.0.11',
        'fenlei': "./comment/fenlei"
    }
})
require(['fenlei'], function(fl) {
    fl.fenL();
})