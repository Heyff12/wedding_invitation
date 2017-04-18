require(['../require-config'], function() {
    require(["jquery", "jqueryui", "fullpage"], function($, jqueryui, fullpage) {
        if ($.browser.msie && $.browser.version < 10) {
            $('body').addClass('ltie10');
        }
        $(document).ready(function() {
            $('#fullpage').fullpage({
                //sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
                anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
                //menu: '#menu',//文字导航
                scrollingSpeed: 1000, //滑动速度
                //slidesNavigation:true,//幻灯片底部远点导航
                loopBottom: true, //滚动到最底部后是否滚回顶部
                css3: true, //是否使用 CSS3 transforms 滚动
                onLeave: function(index, nextIndex, direction) {
                    console.log("onLeave--" + "index: " + index + " nextIndex: " + nextIndex + " direction: " + direction);
                    if(index==1){
                        //顶部花加载
                        $('.js_page_top').find('img').hide().removeClass('dong');
                        //中间图片加载
                        $('.js_img_round_out').hide().removeClass('dong');
                        //中间图片周边花树枝加载
                        $('.js_round_flo').hide().removeClass('dong');
                        //文字加载
                        $('.js_word_out').hide().removeClass('dong');
                        $('.js_word_out').find('span').removeClass('dong');
                        //底部花加载
                        $('.js_page_b').find('img').hide().removeClass('dong');
                    }else if(index==2){
                        //顶部花
                        $('.js_page2_top').find('.img').hide().removeClass('dong');
                        $('.js_page2_top').find('.js_li_l').hide().removeClass('dong');
                        $('.js_page2_top').find('.js_li_r').hide().removeClass('dong');
                        //中间文字
                        $('.js_page2_title').find('span').hide().removeClass('dong');
                        $('.js_page2_word').hide().removeClass('dong');
                        //底部图片
                        $('.js_img_b_left').hide().removeClass('dong');
                        $('.js_img_b_right').hide().removeClass('dong');
                    }
                },
                afterLoad: function(anchorLink, index) {
                    console.log("afterLoad--" + "anchorLink: " + anchorLink + " index: " + index);
                    if(index==1){
                        //顶部花加载
                        $('.js_page_top').find('img').show().addClass('dong');
                        //中间图片加载
                        $('.js_img_round_out').show().addClass('dong');
                        //中间图片周边花树枝加载
                        $('.js_round_flo').show().addClass('dong');
                        //文字加载
                        setTimeout(function(){
                            $('.js_word_out').show().addClass('dong');
                            $('.js_word_out').find('span').addClass('dong');
                        },1200)
                        // setTimeout(function(){
                        //     $('.js_word_out').find('span').addClass('dong');
                        // },1500)
                        //底部花加载
                        $('.js_page_b').find('img').show().addClass('dong');
                        
                    }else if(index==2){
                        //顶部花
                        $('.js_page2_top').find('.img').show().addClass('dong');
                        $('.js_page2_top').find('.js_li_l').show().addClass('dong');
                        $('.js_page2_top').find('.js_li_r').show().addClass('dong');
                        //中间文字
                        $('.js_page2_title').find('span').show().addClass('dong');
                        $('.js_page2_word').show().addClass('dong');
                        //底部图片
                        setTimeout(function(){
                            $('.js_img_b_left').show().addClass('dong');
                            $('.js_img_b_right').show().addClass('dong');
                        },1200)
                        
                    }
                },
            });


        });
    })
})
