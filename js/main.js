function imgch1(chrno){
var srcchk=document.getElementById('img1'+chrno).src.substr(-5,1)
if(srcchk=="u"){
document.getElementById('img1'+chrno).src="img/"+chrno+".png"
localStorage.setItem("1st"+chrno,"img/"+chrno+".png")
}else{
document.getElementById('img1'+chrno).src="img/"+chrno+"u.png"
localStorage.setItem("1st"+chrno,"img/"+chrno+"u.png")
}
}

function imgch2(chrno){
	var srcchk=document.getElementById('img2'+chrno).src.substr(-5,1)
	if(srcchk=="u"){
		document.getElementById('img2'+chrno).src="img/"+chrno+".png"
		localStorage.setItem("2st"+chrno,"img/"+chrno+".png")
	}else{
		document.getElementById('img2'+chrno).src="img/"+chrno+"u.png"
	localStorage.setItem("2st"+chrno,"img/"+chrno+"u.png")
	}
}

function disp(){
if (localStorage.getItem("1st1")===null){
	for(var i=1;i<13;i++){
		localStorage.setItem("1st"+i,"img/"+i+".png")
		localStorage.setItem("2st"+i,"img/"+i+".png")
	}
}else{
	for(var i=1;i<13;i++){
	document.getElementById('img1'+i).src=localStorage.getItem("1st"+i)
	document.getElementById('img2'+i).src=localStorage.getItem("2st"+i)
	}
}
}

function rese(){
	for(var i=1;i<13;i++){
		localStorage.setItem("1st"+i,"img/"+i+".png")
		localStorage.setItem("2st"+i,"img/"+i+".png")
	}
disp()
}
