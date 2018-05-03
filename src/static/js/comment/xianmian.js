define(['jquery', 'hand', '../../../mock/script.js'], function($, handn, template) {
    function xmS() {
        $.ajax({
            url: '../../../mock/data/xianmian.json',
            success: function(data) {
                exemption(data)
            }
        })

        function exemption(data) {
            var admission = data.items;
            for (var i = 0; i < admission.length; i++) {
                var title = `<h2 class="channel-group__title channel-group__title_left h2left">${admission[i].ad_name}</h2>
                <p class="channel-group__desc pleft">${admission[i].ad_copy}</p>`;
            }
            $(title).appendTo($('.nav'));
            $('.h2left').remove();
            $('.pleft').remove();
            for (var i = 0; i < admission.length; i++) {
                var content = admission[i].data.data;
                console.log(admission[i].data.data)
                for (var i = 0; i < content.length; i++) {
                    var iso = content[i];
                    var xr = ` <li data-track="${i}">
                        <div class="u-book -vertical" data-href="#page=book&amp;source_id=383726&amp;source=2" da="ch_664.0.b.21*2_383726" expose="">
                            <div class="book-cover Lazy_loading Lazy_loaded" data-id="383726" id="Tag__308"><img alt="无限制神话" src="${content[i].book_cover}">
                                <div class="u-tagRT -freefiction"></div>
                            </div>
                            <div class="info">
                                <h3 class="title">${content[i].title}</h3>
                            </div>
                        </div>
                    </li>`;
                    $('.table-book').append(xr)
                }
                if ($('.nav').children().eq(0).html() == '今日限免') {

                }
            }
        }
    }
    return {
        xmS: xmS
    }
})