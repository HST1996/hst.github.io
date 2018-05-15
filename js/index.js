	$(function(){
		var key=0;
		$('.lbt>ul>li img').css('width',$(window).width());
		changeUl();
		timer=setInterval(star,2000);
		$('.box').mouseenter(function(){
			clearInterval(timer);
			$('.prev').show();
			$('.next').show();
		})
		$('.box').mouseleave(function(){
			clearInterval(timer);
			timer=setInterval(star,2000);
			$('.prev').hide();
			$('.next').hide();
		})
		$('.prev').click(function(){
			key--;
			if(key<0){
				key=3;
				$('.lbt ul').removeClass('guodu');
				$('.lbt ul').css('left',-key*$('.lbt>ul>li img').width());
				if($('.lbt ul').position().left===-key*$('.lbt>ul>li img').width()){
					key--;
					changeUl();
				}
			}
			changeUl();	
		})
		$('.next').click(function(){
			star();
		})
		function star(){
			if(key>=3){
				key=0;
				$('.lbt ul').removeClass('guodu');
				$('.lbt ul').css('left',0);
				if($('.lbt ul').position().left===0){
					key++;
					changeUl();
				}
			}else{
				key++;
				changeUl();
			}
		}
		function changeUl(){
			if(key===3){
				$('.circ li').eq(0).css('color','white').siblings().css('color','black');
			}else{
				$('.circ li').eq(key).css('color','white').siblings().css('color','black');
			}
			$('.lbt ul').addClass('guodu');
			$('.lbt ul').css('left',-key*$('.lbt>ul>li img').width());
		}
		$('.search_bottom_left').mouseenter(function(){
			$('.search_bottom_left ul').css('display','block');
		})
		$('.search_bottom_left').mouseleave(function(){
					$('.search_bottom_left ul').css('display','none');
		})
		$('.middle_one_left_bottom').mouseenter(function(){
			$('.left').css('background','rgba(192,192,190,0.9)');
			$('.right').css('background','rgba(192,192,190,0.9)');
		})
		$('.middle_one_left_bottom').mouseleave(function(){
			$('.left').css('background','rgba(192,192,190,0.6)');
			$('.right').css('background','rgba(192,192,190,0.6)');
		})
		$('.left').click(function(){
			$('.middle_one_left_bottom_box').animate({left:''},10);
		})
		$('.right').click(function(){
			$('.middle_one_left_bottom_box').animate({left:'-85px'},10);
		})
		$('.middle_one_left_bottom_box img').click(function(){
			$('.tu').attr('src',$(this).attr('src'));
		})
		$('.middle_two_right_top_left').click(function(){
				$('.middle_two_right_top_right').removeClass('changeG');
				$('.middle_two_right_top_left').removeClass('changeW');
				$('.ul_two').css('left','400px');
				$('.ul_one').css('left','40px');
				
		})
		$('.middle_two_right_top_right').click(function(){
				$('.middle_two_right_top_left').addClass('changeW');
				$('.middle_two_right_top_right').addClass('changeG');
				$('.ul_one').css('left','-400px');
				$('.ul_two').css('left','40px');
		})
		$('.middle_three_bottom_prev').click(function(){
			$('.middle_three_bottom_box').animate({left:'0px'},500);
		})
		$('.middle_three_bottom_next').click(function(){
			$('.middle_three_bottom_box').animate({left:'-800px'},500);
		})
		
		
		
				
	})