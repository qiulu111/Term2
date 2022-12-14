/**
 * 购物车JS文件
 */
$(function () {
	//全选
	/* 
	 1.点击表头的全选框 获取表头全选框的选中状态
	 2.表格中的选择框状态需要一致
	 3.结算中 的全选状态一致
	 */
	//定义三个变量
	var $theadInput = $('table thead input[type=checkbox]');
	var $bodyInput = $('table tbody input[type=checkbox]');
	var $allPriceInput = $('.totalPrice input[type=checkbox]');
	$theadInput.change(function () {
		//获取选中状态
		var state = $(this).prop('checked');
		//表格中的选择框状态保持一致 且 结算中的选择框状态保持一致
		$bodyInput.prop('checked',state);
		$allPriceInput.prop('checked',state);
		//调用计算总价
		calcTotalPrice();
	})
	//2.结算中的选择框，也需要有相同的选择功能
	$allPriceInput.change(function () {
		//获取选中状态
		var state = $(this).prop('checked');
		//上面的全选 和 表格中的input 需要状态一致
		$bodyInput.prop('checked',state);
		$theadInput.prop('checked',state);
	})
	//表单中的选中状态 反过来影响全选
	$bodyInput.change(function () {
		//顶一个标杆
		var flag = true;
		/* //总价
		var totalPrice = 0; */
		//循环表格中所有选框的选中状态
		$bodyInput.each(function (i,input) {
		if (!$(input).prop('checked'))	{//只要有一个选择框没有选中那么状态变为false
			flag = false;
		} /* else{
			totalPrice += parseFloat( $(this).closest('tr').find('.subprice').text());
		} */
		})
		//把状态用来改变全选框
		$theadInput.prop('checked',flag)
		$allPriceInput.prop('checked',flag)
		/* //渲染到总价对应的位置
		$('.total').text( totalPrice.toFixed(2) ) */
		//调用计算总价
		calcTotalPrice();
		
	})
	//数量的加减
	//加
	$('.add').on('click',function () {
		//下一个input节点
		var $nextInput = $(this).next();
		//获取输入框的值
		var oldVal = parseInt($nextInput.val());
		//自增
		oldVal++;
		//重新赋值给这个输入框
		$nextInput.val(oldVal);
		
		
		//小计
		var subtotal = oldVal *parseFloat( $(this).closest('tr').find('.price').text() ).toFixed(2);
		//b把dom
		$(this).closest('tr').find('.subprice').text(subtotal)
		//调用计算总价
		calcTotalPrice();
		
		})
		
	//减少
	$('.reduce').on('click',function () {
		//上一个input节点
			var $prevInput = $(this).prev();
			//获取输入框的值
			var oldVal = parseInt($prevInput.val());
			//自增
			oldVal--;
			oldVal = oldVal < 1 ? 1 : oldVal;
			//重新赋值给这个输入框
			$prevInput.val(oldVal);
			
			//小计
			var subtotal = oldVal *parseFloat( $(this).closest('tr').find('.price').text() ).toFixed(2);
			//b把dom
			$(this).closest('tr').find('.subprice').text(subtotal)
			//调用计算总价
			calcTotalPrice();
		})	
		//删除
		$('.del').click(function () {
			//删除整行
			$(this).closest('tr').remove();
			calGoodsCount();
		})
		//计算总价的函数
		function calcTotalPrice() {
			//定义一个数量
			var count = 0;//调用商品总数量
			
			//定义变量
			var totalPrice = 0;
			//循环表格中所有选择框 如果是选中状态 那么计算总价
			$bodyInput.each(function (i,input) {
				if ($(input).prop('checked')) {
					//自增
					count++;
					//累加价格
					totalPrice += parseFloat( $(input).closest('tr').find('.subprice').text() )
				}
			})
			//把总价渲染到对应的位置
			$('.total').text( totalPrice.toFixed(2) )
			//把数量渲染到对象的位置
			$('.count').text(count)
		}
		
		//全部商品
		function calGoodsCount() {
		
		$('.goodsCount').text( $('table tbody tr').length )
		}
		calcTotalPrice();//一进入页面 就自定调用一次
		//删除选中商品
		$('.deleteChecked').on('click', function () {
			//循环单选框 如果选中 干掉自己
			$bodyInput.each(function (i,input) {
				if ($(this).prop('checked')) {
					$(this).closest('tr').remove();
				}
			})
			//计算总价
			calcTotalPrice();
			//计算商品数量
			calGoodsCount();
		})
})



