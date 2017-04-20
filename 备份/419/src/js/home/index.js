require(['../require-config'], function() {
    require(["jquery", "jqueryui", "fullpage"], function($, jqueryui, fullpage) {
        if ($.browser.msie && $.browser.version < 10) {
            $('body').addClass('ltie10');
        }
        $(document).ready(function() {
            $('#fullpage').fullpage({
                //sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
                anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thPage', '7thpage', '8thpage', '9thPage', 'tenthpage', 'eleventhpage'],
                //menu: '#menu',//文字导航
                scrollingSpeed: 1000, //滑动速度
                //slidesNavigation:true,//幻灯片底部远点导航
                loopBottom: false, //滚动到最底部后是否滚回顶部
                css3: true, //是否使用 CSS3 transforms 滚动
                afterRender: function(){
                    //顶部花加载
                    // $('.js_page_top').find('img').hide().removeClass('dong');
                    // //中间图片加载
                    // $('.js_img_round_out').hide().removeClass('dong');
                    // //中间图片周边花树枝加载
                    // $('.js_round_flo').hide().removeClass('dong');
                    // //文字加载
                    // $('.js_word_out').hide().removeClass('dong');
                    // $('.js_word_out').find('span').removeClass('dong');
                    // //底部花加载
                    // $('.js_page_b').find('img').hide().removeClass('dong');
                },
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
                    }else if(index==3){
                        //顶部花
                        $('.js_page3_top').hide().removeClass('dong'); 
                        $('.js_page3_img_l').hide().removeClass('dong'); 
                        $('.js_page3_img_t').hide().removeClass('dong'); 
                        //中间文字
                        $('.js_page3_bdl').find('dt').find('img').hide().removeClass('dong');
                        $('.js_page3_bdl').find('dd').show().hide().removeClass('dong');  
                        //底部花加载
                        $('.js_page3_b').find('img').hide().removeClass('dong');                   
                    }else if(index==4){
                        //顶部花
                        $('.js_page4_top').hide().removeClass('dong'); 
                        $('.js_page4_img_l').hide().removeClass('dong'); 
                        $('.js_page4_img_t').hide().removeClass('dong'); 
                        //中间文字
                        $('.js_page4_bdl').find('dt').find('img').hide().removeClass('dong');
                        $('.js_page4_bdl').find('dd').show().hide().removeClass('dong');  
                        //底部花加载
                        $('.js_page4_b').find('img').hide().removeClass('dong');                   
                    }else if(index==5){
                        //顶部花
                        $('.js_page5_top').hide().removeClass('dong');    
                        //中间文字
                        $('.js_page5_img_l').hide().removeClass('dong');    
                        $('.js_page5_img_t').hide().removeClass('dong'); 
                        $('.js_page5_midt').hide().removeClass('dong'); 
                        $('.js_page5_midm').hide().removeClass('dong'); 
                        $('.js_page5_midb').hide().removeClass('dong');  
                        //底部花                        
                        $('.js_page5_ul').find('.js_li_l').hide().removeClass('dong');    
                        $('.js_page5_ul').find('.js_li_r').hide().removeClass('dong');    
                    }else if(index==6){
                        //顶部花
                        $('.js_page6_top').hide().removeClass('dong');
                        //底部花
                        $('.js_page6_b').find('img').hide().removeClass('dong'); 
                        //中间画
                        $('.js_page6_img').hide().removeClass('dong'); 
                        $('.js_tm_bg').hide().removeClass('dong'); 
                        $('.js_page6_word_l').hide().removeClass('dong');  
                        $('.js_page6_word_r').hide().removeClass('dong'); 
                        $('.js_page6_word').find('p').hide().removeClass('dong');   
                    }else if(index==7){
                        //顶部花
                        $('.js_page7_t').hide().removeClass('dong'); 
                        $('.js_page7_m').find('img').hide().removeClass('dong');
                        $('.js_page7_b').hide().removeClass('dong'); 
                        $('.js_page7_heart').find('img').hide().removeClass('dong');
                    }else if(index==8){
                        //顶部花
                        $('.js_page8_top').find('img').hide().removeClass('dong');
                        $('.js_page8_b').find('img').hide().removeClass('dong');
                        //中间图片加载
                        $('.js_page8_word').hide().removeClass('dong');
                        $('.js_page8_img_in').hide().removeClass('dong');
                        $('.js_page8_word').find('p').hide().removeClass('dong');
                        $('.js_ul8').find('li').hide().removeClass('dong');
                        $('.js_ul_flower').hide().removeClass('dong');
                        //中间图片周边花树枝加载
                        $('.js_round8_flo').hide().removeClass('dong');
                    }else if(index==9){
                        //顶部花加载 
                        $('.js_page9_l').hide().removeClass('dong');
                        $('.js_page9_r').hide().removeClass('dong');  
                        //文字
                        $('.js_page9_title').find('span').hide().removeClass('dong');  
                        $('.js_page9_body').hide().removeClass('dong');  
                        $('.js_page9_body').find('.page9_b_t').hide().removeClass('dong');
                        $('.js_page9_body').find('dl').hide().removeClass('dong'); 
                        $('.js_page9_body').find('.cage').hide().removeClass('dong');       
                        //底部花加载
                        $('.js_page9_b').find('img').hide().removeClass('dong');
                    }else if(index==10){
                        //顶部花加载 
                        $('.js_page10_l').hide().removeClass('dong');
                        $('.js_page10_r').hide().removeClass('dong');  
                        //文字
                        $('.js_page10_title').find('span').hide().removeClass('dong');  
                        $('.js_page10_body').hide().removeClass('dong'); 
                        $('.js_page10_body').find('.cage').hide().removeClass('dong');       
                        //底部花加载
                        $('.js_page10_b').find('img').hide().removeClass('dong');
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
                    }else if(index==3){
                        //顶部花
                        $('.js_page3_top').show().addClass('dong');
                        setTimeout(function(){
                            $('.js_page3_img_l').show().addClass('dong');
                            $('.js_page3_img_t').show().addClass('dong');
                        },1200)
                        //中间文字
                        setTimeout(function(){
                            $('.js_page3_bdl').find('dt').find('img').show().addClass('dong'); 
                            $('.js_page3_bdl').find('dd').show().addClass('dong');
                        },800) 
                        //底部花加载
                        setTimeout(function(){
                            $('.js_page3_b').find('img').show().addClass('dong');
                        },2000) 
                    }else if(index==4){
                        //顶部花
                        $('.js_page4_top').show().addClass('dong');
                        setTimeout(function(){
                            $('.js_page4_img_l').show().addClass('dong');
                            $('.js_page4_img_t').show().addClass('dong');
                        },1200)
                        //中间文字
                        setTimeout(function(){
                            $('.js_page4_bdl').find('dt').find('img').show().addClass('dong'); 
                            $('.js_page4_bdl').find('dd').show().addClass('dong');
                        },800) 
                        //底部花加载
                        setTimeout(function(){
                            $('.js_page4_b').find('img').show().addClass('dong');
                        },2000) 
                    }else if(index==5){
                        //顶部花
                        $('.js_page5_top').show().addClass('dong');
                        //中间文字
                        setTimeout(function(){
                            $('.js_page5_img_l').show().addClass('dong');
                            $('.js_page5_img_t').show().addClass('dong');
                        },800)
                        setTimeout(function(){
                            $('.js_page5_midt').show().addClass('dong'); 
                            $('.js_page5_midm').show().addClass('dong');
                            $('.js_page5_midb').show().addClass('dong');
                        },1000) 
                        //底部花                        
                        $('.js_page5_ul').find('.js_li_l').show().addClass('dong');
                        $('.js_page5_ul').find('.js_li_r').show().addClass('dong');
                    }else if(index==6){
                        //顶部花
                        $('.js_page6_top').show().addClass('dong');
                        //底部花
                        $('.js_page6_b').find('img').show().addClass('dong');
                        //中间画
                        $('.js_page6_img').show().addClass('dong');
                        $('.js_tm_bg').show().addClass('dong');
                        setTimeout(function(){
                            $('.js_page6_word_l').show().addClass('dong'); 
                            $('.js_page6_word_r').show().addClass('dong');
                            $('.js_page6_word').find('p').show().addClass('dong');
                        },1000) 
                    }else if(index==7){
                        //顶部花
                        $('.js_page7_t').show().addClass('dong');
                        $('.js_page7_m').find('img').show().addClass('dong');
                        $('.js_page7_b').show().addClass('dong');                        
                        setTimeout(function(){
                            $('.js_page7_heart').find('img').show().addClass('dong');
                        },1000) 
                    }else if(index==8){
                        //顶部花加载
                        $('.js_page8_top').find('img').show().addClass('dong');
                        //中间图片加载
                        $('.js_page8_img_in').show().addClass('dong');
                        //中间图片周边花树枝加载
                        $('.js_round8_flo').show().addClass('dong');
                        //文字加载
                        $('.js_page8_word').show().addClass('dong');
                        $('.js_page8_word').find('p').show().addClass('dong');
                        setTimeout(function(){
                            $('.js_ul8').find('li').show().addClass('dong');
                            $('.js_ul_flower').show().addClass('dong');
                        },1000);                        
                        //底部花加载
                        $('.js_page8_b').find('img').show().addClass('dong');
                    }else if(index==9){
                        //顶部花加载  
                        $('.js_page9_l').show().addClass('dong');
                        $('.js_page9_r').show().addClass('dong'); 
                        //文字
                        $('.js_page9_title').find('span').show().addClass('dong');
                        $('.js_page9_body').show().addClass('dong');  
                        setTimeout(function(){                            
                            $('.js_page9_body').find('.cage').show().addClass('dong');
                        },1000);     
                        //底部花加载
                        $('.js_page9_b').find('img').show().addClass('dong');
                    }else if(index==10){
                        //顶部花加载  
                        $('.js_page10_l').show().addClass('dong');
                        $('.js_page10_r').show().addClass('dong'); 
                        //文字
                        $('.js_page10_title').find('span').show().addClass('dong');
                        $('.js_page10_body').show().addClass('dong');  
                        setTimeout(function(){
                            $('.js_page10_body').find('.page9_b_t').show().addClass('dong');
                            $('.js_page10_body').find('dl').show().addClass('dong');
                            $('.js_page10_body').find('.cage').show().addClass('dong');
                        },1000);     
                        //底部花加载
                        $('.js_page10_b').find('img').show().addClass('dong');
                    }
                },
            });


        });
    })
})
