$(function() {
    /*首页大图轮播*/
    $('#banner').tyslide({
        boxh: 460, //盒子的高度
        w: 1000, //盒子的宽度
        h: 390, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 40, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 20, //控制按钮高度
        radius: 10, //控制按钮圆角度数
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
        isShowNum: true //是否显示数字
    });
    /*图书电子书小轮播*/
    $('#ebooks-banner1').tyslide({
        boxh: 223, //盒子的高度
        w: 332, //盒子的宽度
        h: 223, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 2, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
    });
    /*图书电子书小轮播*/
    $('#ebooks-banner2').tyslide({
        boxh: 223, //盒子的高度
        w: 332, //盒子的宽度
        h: 223, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 2, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
    });
    /*图书电子书小轮播*/
    $('#ebooks-banner3').tyslide({
        boxh: 223, //盒子的高度
        w: 332, //盒子的宽度
        h: 223, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 2, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
    });
    /*电子书tab切换*/
    $('.ebooks-list').eq(1).hide();
    $('.ebooks-list').eq(2).hide();
    $('.ebooks-nav > li').mouseenter(function() {
            // 导航激活类的切换
            $(this).addClass('active').siblings('li').removeClass('active')
                // 获取对应的索引
            var index = $(this).index();
            // 内容切换
            $('.ebooks-list').eq(index).show().siblings('.ebooks-list').hide();

        })
        /*新书列表手风琴效果*/
    $('.ebooks .right-box ul > li').mouseenter(function() {
        //    所有兄弟:隐藏详情 显示标题
        $(this).siblings().find('.desc').hide(); //隐藏详情
        $(this).siblings().find('.ebooks-title').show(); //显示标题
        //当前：隐藏标题 显示详情
        $(this).find('.ebooks-title').hide(); //隐藏标题
        $(this).find('.desc').show(); //显示详情

    });
    /*服装小轮播*/
    $('#clothes-banner3').tyslide({
        boxh: 340, //盒子的高度
        w: 426, //盒子的宽度
        h: 340, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 2, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
    });
    /*服装小轮播*/
    $('#clothes-banner2').tyslide({
        boxh: 340, //盒子的高度
        w: 426, //盒子的宽度
        h: 340, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 2, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
    });
    /*服装小轮播*/
    $('#clothes-banner3').tyslide({
        boxh: 340, //盒子的高度
        w: 426, //盒子的宽度
        h: 340, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 2, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
    });
    /* 服装tab切换 */
    $('.clothe .clothes-nav > li').mouseenter(function() {
        // 导航切换
        $(this).addClass('active').siblings('li').removeClass('active');
        // 获取索引
        var index = $(this).index();
        $('.clothes .clothes-content > .clothes-list').eq(index).show().siblings('.clothes-list').hide();
    })

    /*户外运动小轮播*/
    $('#sport-banner').tyslide({
        boxh: 400, //盒子的高度
        w: 400, //盒子的宽度
        h: 250, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 160, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 2, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
    });
    /*户外列表切换*/
    $('.sport .top ul li').mouseenter(function() {
            // 导航激活类的切换
            $(this).addClass('active').siblings('li').removeClass('active')
                // 获取对应的索引
            var index = $(this).index();
            // 内容切换
            $('.content-bottom').eq(index).show().siblings('.content-bottom').hide();

        })
        /*童装小轮播*/
    $('#childrens-banner').tyslide({
        boxh: 400, //盒子的高度
        w: 400, //盒子的宽度
        h: 250, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 160, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 2, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
    });
    /*童装列表切换*/
    $('.childrens .top ul li').mouseenter(function() {
            // 导航激活类的切换
            $(this).addClass('active').siblings('li').removeClass('active')
                // 获取对应的索引
            var index = $(this).index();
            // 内容切换
            $('.ebooks-list').eq(index).show().siblings('.ebooks-list').hide();

        })
        /*推广商品切换*/
    $('.promotion .top ul li').mouseenter(function() {
            // 导航激活类的切换
            $(this).addClass('active').siblings().removeClass('active')
                // 获取对应的索引
            var index = $(this).index();
            // 左右移动
            $('.promotion .promotion-content .inner-box').animate({
                'left': -index * 1200

            }, 300)
        })
        //     /*============返回顶部=============*/
        //     //绑定滚动事件
        // $(document).scroll(function() {
        //     //获取距离顶部的位置
        //     var topDistance = $('html, body').scrollTop();
        //     //判断
        //     if (topDistance > 500) {
        //         $('.backToTop').fadeIn();
        //     } else {
        //         $('.backToTop').fadeOut();
        //     }
        // });
        // //返回顶部功能
        // $('.backToTop').click(function() {
        //     $('html, body').animate({
        //         scrollTop: 0
        //     }, 300)
        // })
        /*--------二维码滑出效果============*/
    $('.qr-code .ticket').hover(function() {
            /*让二维码滑出来*/
            $('.qr-code div').stop(true).animate({
                left: '-100px'
            })
        }, function() {
            /*让二维码收回去*/
            $('.qr-code div').stop(true).animate({
                left: 0
            })
        })
        /*--------顶部搜索框============*/
    $(document).scroll(function() {
        //获取到顶部的距离
        var topDistance = $('html,body').scrollTop();
        //判断
        if (topDistance > 500) {
            //如果滚动距离大于500，滑下来
            $('.top-search-box').slideDown(300);
        } else {
            //否则，收回去
            $('.top-search-box').slideUp(300);
        }
    })
})