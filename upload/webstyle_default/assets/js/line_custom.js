$(function(){

	// 模駔1
    var tween_4 = TweenMax.staggerFromTo('#scollM1', 1, {
        //做事情
        opacity: 0,
        x:-80,
        y:0
    }, {
        opacity: 1,
        x:0,
        y: 0
	},.5) ;


    var tween_5 = TweenMax.staggerFromTo('#scollM12', 1, {
        //做事情
        opacity: 0,
        x:80,
        y:0
    }, {
        opacity: 1,
        x:0,
        y: 0
	},.5) ;


    var tl =  new TimelineMax()
    .set("#scollM1",{ opacity: 1, x:-80 },{opacity: 1,x:0},.5)
    .set("#scollM12",{ opacity: 1, x:80 },{opacity: 1,x:0},.5);

    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
    	triggerElement: ".line_step",
    	duration: 600,
    	offset:300
    })		    
    .setTween(tl)
    // .setTween(tween_4)
	.addIndicators({name: 'left1' }) // add indicators (requires plugin)
	.addTo(controller);



  

	// var tween_4 = TweenMax.staggerFromTo('.step_one',1, {
 //        //做事情
 //        opacity: 1,
 //        x:0,
 //        y:0
 //    }, {
 //        opacity: 0,
 //        x:-50,
 //        y: 0
	// },.5) ;	 
 //    new ScrollMagic.Scene({
 //    	triggerElement: ".line_step",
 //    	duration:1000,
 //    	offset:750
 //    })		    
 //    .setTween(tween_4)
	// .addIndicators({name: 'left0' }) // add indicators (requires plugin)
	// .addTo(controller);


	// -----------------sticky-------------------------------------
	var scene_sticky = new ScrollMagic.Scene({
         //做事情
          triggerElement: ".line_step",  //觸發點
          offset: 400, //離起始點多遠開始跑動畫
          duration: 1000 //開始結束距離
      })
        .setPin('.line_step')
        .addIndicators({name: 'sticky' }) //除錯，並找位置		        
        .addTo(controller);
	
	
	  
   



}) //$(function()