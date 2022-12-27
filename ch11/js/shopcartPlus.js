/*购物车功能JS*/
$(function() {
    //把三个类型的input分别先获取
    var $theadInput = $('thead input[type=checkbox]'); //表头中的全选
    var $tbodyInputs = $('tbody input[type=checkbox]'); //表格中的每一行的选择框
    var $totalPriceInput = $('.totalPrice input[type=checkbox]'); //计算总价中的全选框
    /*全选 */
    //表头的全选
    $theadInput.change(function() {
        var checkState = $(this).prop('checked');
        $tbodyInputs.prop('checked', checkState);
        $totalPriceInput.prop('checked', checkState);
        allTotal(); //总计
    });
    $totalPriceInput.change(function() {
        var checkState = $(this).prop('checked'); //获取计算总价的全选状态
        $theadInput.prop('checked', checkState); //赋值
        $tbodyInputs.prop('checked', checkState);
        allTotal(); //总计
    });
    $tbodyInputs.change(function() { //绑定事件
            var flag = true; //定标杆为true
            $tbodyInputs.each(function(index, input) { //循环表格input
                var checkState = $(this).prop('checked'); //获取选中状态
                if (!checkState) { //如果有一个等于false，
                    flag = false; //标杆变为false(全选的状态变为false)
                }
            })
            $theadInput.prop('checked', flag); //把状态赋值给头部全选框
            $totalPriceInput.prop('checked', flag) //把状态赋值给计算价格全选框
            allTotal(); //总计
        })
        /* 加法功能*/
    $('.add').click(function() {
            var count = parseInt($(this).next().val()); //取后面输入框的值
            count++; //自增
            $(this).next().val(count); //把自增的值 赋值给后面输入框
            //小计
            subToal($(this), count);
            allTotal(); //总计
        })
        /*减法功能*/
    $('.reduce').click(function() {
        var count = parseInt($(this).prev().val());
        count--;
        count = count < 1 ? 1 : count; //边界判断
        $(this).prev().val(count);
        //小计
        subToal($(this), count);
        allTotal(); //总计
    })


    /*小计*/
    function subToal(dom, count) {
        //找到单价
        var singlePrice = parseFloat(dom.closest('tr').find('.price').text());
        var subToalPrice = singlePrice * count; //单价*数量=小计
        dom.closest('tr').find('.subprice').text(subToalPrice.toFixed(2)); //把小计的结果渲染对应的位置 保留两位小数

    }


    /*总计功能*/
    function allTotal() {
        var allPrice = 0; //定义一个变量 保存总价
        var selectedCount = 0; //定义一个变量 保存已选商品 数量
        $('tbody input[type=checkbox]').each(function() { //获取表格中的选择框 循环
                var checkState = $(this).prop('checked'); // 获取选中状态
                if (checkState) { //如果是true
                    allPrice += parseFloat($(this).closest('tr').find('.subprice').text()); //累加这一行的小计
                    selectedCount++; //数量+1
                }
            })
            //渲染
        $('.total').text(allPrice.toFixed(2)); //渲染总计
        $('.count').text(selectedCount); //渲染数量
    }


    /*删除*/
    $('.del').click(function() {
        $(this).closest('tr').remove();
        getGoodsCount(); //重新计算商品数量
        allTotal(); //计算总计
    })

    //删除选中
    $('.deleteChecked').click(function() {
        $('tbody input[type=checkbox]').each(function() {
            var checkState = $(this).prop('checked');
            if (checkState) {
                $(this).closest('tr').remove();
            }
        })
        allTotal(); //计算总计
        getGoodsCount(); //重新计算商品数量

    })


    //封装一个获取全部商品的函数
    function getGoodsCount() {
        //获取数量
        var goodsCount = $('table  tbody tr').length;
        //渲染
        $('.goodsCount').text(goodsCount);
    }
    getGoodsCount(); //页面加载调用一次
})