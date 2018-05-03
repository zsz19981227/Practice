define(['jquery', 'hand', '../../../mock/script.js'], function($, handn, template) {
    function fenL() {
        $.ajax({
            url: '../../../mock/data/fenlei.json',
            success: function(data) {
                paging(data)
            }
        })

        // $.ajax({
        //     url: '../../../mock/data/xianmian.json',
        //     success: function(data) {
        //         console.log(data)
        //     }
        // })

        function paging(data) {
            template("#ip1", {
                data: data.male
            }, '.ulOne');
            template("#ip2", {
                data: data.female
            }, '.ulTow');
        }
    }
    return {
        fenL: fenL
    }
})