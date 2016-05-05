$(function(){
   // 关闭横条
   var hengtiao=$(".close")[0];
   var hengkuang=$(".hengtiao")[0];
   hengtiao.onclick=function(){
       hengkuang.style.display="none";
   }

  // input框
   var input=$(".input")[0];
   var input1=input.value;
   input.onfocus=function(){
       if(input1==this.value){
           this.value="";
       }
   }
   input.onblur=function(){
       if(this.value==""){
           this.value=input1;
       }
   }


  // 轮播
	var box=$(".lunbo-nei")[0];
  var box1=$(".lunbo")[0];
	var banner=$("a",box);  //获取banner
	var btn=$("li",$(".anniu")[0]);  //获取小按钮
	var LeftBtn=$(".btnleft")[0];
	var RightBtn=$(".btnright")[0];
  var flag=true;
	var index=0;
	var t=setInterval(move,2000);
	function move(){
    if(!flag){
        return;
    }
    flag=false;
		index++;
		if(index>banner.length-1){
			index=0;
		}
		for (var i = 0; i < banner.length; i++) {
		    animate(banner[i],{opacity:0})
		    btn[i].style.background="";
		};
		animate(banner[index],{opacity:1},function(){
       flag=true;
    });
		btn[index].style.background="#c81623";
	}
	// 小按钮经过
	for (var i = 0; i < btn.length; i++) {
		btn[i].aa=i;
		btn[i].onmouseover=function(){
			for (var j = 0; j < btn.length; j++) {
				animate(banner[j],{opacity:0});
				btn[j].style.background="";
			};
			animate(banner[this.aa],{opacity:1});
			this.style.background="#c81623";
			index=this.aa;
		}
	};
  // 鼠标经过
   box1.onmouseover=function(){
   	  clearInterval(t);
   }
   box1.onmouseout=function(){
   	   t=setInterval(move,2000);
   }

   // 左右按钮
   RightBtn.onclick=function(){
   	    move();
   }
   LeftBtn.onclick=function(){
       if(!flag){
           return;
       }
        flag=true;
        index--;
    		if(index<0){
    			index=banner.length-1;
    		}
    		for (var i = 0; i < banner.length; i++) {
    		    animate(banner[i],{opacity:0});
    		    btn[i].style.background="";
    		};
      		animate(banner[index],{opacity:1},function(){
              flag=true;
          });
      		btn[index].style.background="#c81623";
   }

   //banner左边的选项卡
   // var bannerZi1=$(".banner-zi1");
   // var dakuang=$(".dakuang");
   // var  zis,kuangs;

   // for(var i=0;i<bannerZi1.length;i++){
   //      zis=bannerZi1[i];
   //      kuangs=dakuang[i];
   //      Zi(zis,kuangs);
   // }
   // function Zi(zis,kuangs){
   //     zis.onmouseover=function(){
   //        kuangs.style.display="block";
   //     }
   //     zis.onmouseout=function(){
   //        kuangs.style.display="none";
   //     }
   // }
    //banner左边的选项卡[hover]
   var bannerZi1=$(".banner-zi1");
    for(var i=0;i<bannerZi1.length;i++){
        hover(bannerZi1[i],function(){
            var dakuang=$(".dakuang",this)[0];
            dakuang.style.display="block";
        },function(){
           var dakuang=$(".dakuang",this)[0];
           dakuang.style.display="none";
        })
   }




   // 右边的选项卡
    var hover1=$(".hover");
    var hoverKuang=$(".hover-kuang")[0];

    var huaTop=$("div",$(".hua-shang")[0]);  //每个小框
    var huaTopA=$("a",$(".hua-shang")[0]);
    var huaBottom=$(".hua-bottom",hoverKuang);
    var selerClose=$(".seler-close")[0];
    for(var i=0;i<hover1.length;i++){
       hover1[i].ts1=i;
       hover1[i].onmouseover=function(){
          if(!flag){return};
          animate(hoverKuang,{top:0},280,function(){
             flag=false;
           })
       }
    }
    selerClose.onclick=function(){
        animate(hoverKuang,{top:208},280,function(){
             flag=true;
           })
    }
    for(var i=0;i<huaTop.length;i++){
        huaTop[i].ts=i;
        huaTop[i].onmouseover=function(){
            for(var j=0;j<huaTop.length;j++){
               huaBottom[j].style.display="none";
               huaTop[j].className="";
               huaTopA[j].style.lineHeight="28px"
            }
            huaBottom[this.ts].style.display="block";
            huaTop[this.ts].className="hua-top";
            huaTopA[this.ts].style.lineHeight="26px"
        }
    }



   // 小横条的轮播
   var xiaokuaibig=$(".xiaokuai-big")[0]
   var xiaokuai=$("li",xiaokuaibig);  //li的集合
   var ws=parseInt(getStyle(xiaokuai[0],"width"));  //一个li的长度
   xiaokuaibig.style.width=ws*xiaokuai.length+"px";
   // console.log(xiaokuaibig.style.width)

   var xiaoLeft=$(".xiaokuai-leftbtn")[0];
   var xiaoRight=$(".xiaokuai-rightbtn")[0];
   // 右按钮
   xiaoRight.onclick=function(){
    	if(!flag){
    		return;
    	}
      flag=false;
      animate(xiaokuaibig,{marginLeft:-ws},800,function(){
        	flag=true;
        	xiaokuaibig.appendChild(getFirst(xiaokuaibig));
        	xiaokuaibig.style.marginLeft=0+"px";
      })
   }
   // 左按钮
   xiaoLeft.onclick=function(){
     	if(!flag){
     		return;
     	}
     	flag=false;
     	insertBefore(getLast(xiaokuaibig),getFirst(xiaokuaibig));
     	xiaokuaibig.style.marginLeft=-ws+"px";
     	animate(xiaokuaibig,{marginLeft:0},800,function(){
     		flag=true;
     	});
   }

  //所有的选项卡
    var xuan=$(".f1-top-right");
  // var spans=$(".f1-top-right");
    var biglis=$(".f1-bottom2-big");   //每一个大盒子
    var as,bs;
    for(var i=0;i<xuan.length;i++){
       as=$("a",xuan[i]);
       bs=$(".f1-bottom2",biglis[i])
       S=$("span",xuan[i]);
       tab(as,bs,S);
    }
  // 封装选项卡
    function tab(list,links,spans){
      for(var i=0;i<list.length;i++){
          list[i].aa=i;
          list[i].onmouseover=function(){
              for(var j=0;j<list.length;j++){
                  list[j].className="";
                  links[j].style.display="none";
                  spans[j].style.display="block";
              }
              this.className="f1-dapai";
              links[this.aa].style.display="block";
              spans[this.aa].style.display="none";
              if(this.aa>0){
                 spans[this.aa-1].style.display="none";
              }
              
          }
      }
    }
 
  //小轮播封装
    (function(){
      function  hanshu(k){
            var bigbox=$(".f1-bottom2-a3")[k];   //大盒子
            var lunbo=$(".f1-lunbo",bigbox)[0];   //大盒子
            var li=$("li",lunbo);       //轮播的li
            var lis=parseInt(getStyle(li[0],"width"));  //每个图片的宽度
            lunbo.style.width=lis*li.length+"px";   //整个的宽
            var btn=$(".f1-btn",bigbox)[0];
            var btns=$("li",btn);
            var t1=setInterval(move,3000);
            var ll=0;
            var lbtn=$(".f1-bigbtn-left",bigbox)[0];
            var ybtn=$(".f1-bigbtn-right",bigbox)[0];
            var flag=true;
            function move(){
                if(!flag){
                   return;
                }
                flag=false; 
                ll++;
                if(ll>li.length-1){
                  ll=0;
                }
                if(ll==-1){
                   ll=li.length-1;
                }
                for(var i=0;i<btns.length;i++){
                    btns[i].className="";
                }
                btns[ll].className="slider1";
                animate(lunbo,{marginLeft:-lis},400,
                  function(){
                      lunbo.appendChild(getFirst(lunbo));
                      lunbo.style.marginLeft=0;
                      flag=true;
                  });
            }
            bigbox.onmouseover=function(){
                clearInterval(t1)
            }
            bigbox.onmouseout=function(){
                t1=setInterval(move,3000);
            }
            ybtn.onclick=function(){
               move();
            }
            lbtn.onclick=function(){
                ll=ll-2;
                move();
            }
            //小按钮移上
            for(var i=0;i<btns.length;i++){
               btns[i].aa=i;
               btns[i].onmouseover=function(){
                  ll=this.aa-1;
                  move();
               }
            }
      }
      
      for (var i = 0; i <12;i++) {
          hanshu(i);
      };
    })();

  // 最底下的小轮播
    (function(){
        var bigbox=$(".f13-big-lunbo")[0];
        var li=$("li",bigbox);
        var liw=parseInt(getStyle(li[0],"height"));
        bigbox.style.height=liw*li.length+"px";
        setInterval(move,2500);
        function move(){
             insertBefore(getLast(bigbox),getFirst(bigbox));
             bigbox.style.marginTop=-liw+"px";
             animate(bigbox,{marginTop:0})
        }
    })();

  //楼层跳转
  var biggb=$(".leftding")[0];
  var anniu=$(".ding1");
  var load=$(".loading");  //按需加载
  var xgd=$(".ding-b");  //小按钮
  var xgz=$(".ding-a");  //字
  var gd=$(".f2");  //大盒子
  var arr=[];
  for(var i=0;i<gd.length;i++){
      arr.push(gd[i].offsetTop); 
  }
  var newarr=[];
  for(var i=0;i<load.length;i++){
    newarr.push(load[i].offsetTop);

  }
  window.onscroll=function(){
       var doc=document.body.scrollTop?document.body:document.documentElement;
       var st=doc.scrollTop;
       var Height=document.documentElement.clientHeight;  //浏览器的高度

       // 显示条
       if(doc.scrollTop+300<=arr[0] || doc.scrollTop-350>=arr[arr.length-1]){
           biggb.style.display="none";
       }else{
           biggb.style.display="block";
       }
       //按需加载
       for(var i=0;i<newarr.length;i++){
          if(st+Height>newarr[i]){
              imgbox(i);
          }
       }
  }
  function imgbox(a){
    var Img=$("img",load[a]);
    for(var j=0;j<Img.length;j++){
      Img[j].src=Img[j].getAttribute("asrc");
    }
  }
   window.onscroll();

 // 点击对应到相应的内容
  for(var i=0;i<anniu.length;i++){
     anniu[i].bb=i;
     anniu[i].onclick=function(){
         // doc=document.body.scrollTop?document.body:document.documentElement;
         animate(document.body,{scrollTop:arr[this.bb]},400)
         animate(document.documentElement,{scrollTop:arr[this.bb]},400)
     }
  };


 //返回顶部
  var dingbu=$(".aa4")[0];
  dingbu.onclick=function(){
     var doc=document.body.scrollTop?document.body:document.documentElement;   
     animate(doc,{scrollTop:0});
  };

 
 //图片移动
    var tian=$(".dijia-big1");
    var img;
    for(var i=0;i<tian.length;i++){
        img=$("img",tian[i])[0];
        tupian(img)
    }
    function tupian(img){
        img.onmouseover=function(){
            animate(img,{marginLeft:-12},300)
        }
        img.onmouseout=function(){
           animate(img,{marginLeft:0},300)
        };
    }
    
 //右边定位
    var dingli=$(".right1");
    var dingzi;
    for(var i=0;i<dingli.length;i++){
        dingzi=$(".ding-zi",dingli[i])[0];
        Fright(dingli[i],dingzi)
    }
    function Fright(dingli,dingzi){
        dingli.onmouseover=function(){
           animate(dingzi,{marginLeft:-61},200);
           dingzi.style.background="#c81623";
        };
        dingli.onmouseout=function(){
           animate(dingzi,{marginLeft:0},200);
           dingzi.style.background="#7a6e6e";
        }
    }
    


})