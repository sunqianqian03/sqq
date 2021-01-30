// window.onresize=r;
// function r(resizeNum){
//     document.getElementsByTagName("html")[0].style.fontSize=window.innerWidth*0.15625+"px";
// }

window.onload=function(){
    document.getElementsByTagName("html")[0].style.fontSize=0.15625*window.innerWidth+"px";
}


// var winW = window.innerWidth;
// document.getElementsByTagName("html")[0].style.fontSize=winW*0.15625+"px";

// window.onresize = r;
// function r(resizeNum){
// 	var winW = window.innerWidth;
// 	document.getElementsByTagName("html")[0].style.fontSize=winW*0.15625+"px";
// 	if(winW>window.screen.width&&resizeNum<=10){
// 		setTimeout(function(){
// 			r(++resizeNum)
// 		}, 100);
// 	}
// 	else{
// 		document.getElementsByTagName("body")[0].style.opacity = 1;
// 	}
// };
// setTimeout(function(){r(0)}, 100);

// window.onresize=window.onload=function(){
//     document.getElementsByTagName("html")[0].style.fontSize=0.266*window.innerWidth+"px";
// }
