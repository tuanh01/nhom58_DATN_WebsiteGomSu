function addToCart(id)
	{
		$.ajax({
			type: "GET",		
			url: "http://localhost:8080/potteryshop/api/gio-hang/addSanPham?id="+id,
			success: function(result){
				if(result.status == "false")
				{
					window.alert("Sản phẩm đang hết hàng, quý khách vui lòng quay lại sau");	
				}else
				{$("#here").load(window.location.href + " #here" );
					window.alert("Đã thêm sản phẩm vào giỏ hàng");
				}
			},
			error : function(e){
				alert("Error: ",e);
				console.log("Error" , e );
			}
		});
		
		itemCount ++;
		$('#itemCount').html(itemCount).css('display', 'block');
		
	}