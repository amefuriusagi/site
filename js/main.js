function imgch1(chrno){
var name1 = document.getElementById('name1').value
var name2 = document.getElementById('name2').value

localStorage.setItem("name1",name1)
localStorage.setItem("name2",name2)

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
	document.getElementById('name1').value=localStorage.getItem("name1")
	document.getElementById('name2').value=localStorage.getItem("name2")
	}
}


}

function rese(){
	for(var i=1;i<13;i++){
		localStorage.setItem("1st"+i,"img/"+i+".png")
		localStorage.setItem("2st"+i,"img/"+i+".png")
	}
	document.getElementById('name1').value=""
	document.getElementById('name2').value=""
	localStorage.setItem("name1","")
	localStorage.setItem("name2","")
disp()
}

function twit() {
	var s, url;
	s = "12キャラ対決結果 #ネトスマ";
	url = document.location.href;
	
	var dt = new Date();
	var y = dt.getFullYear();
	var m = ('00' + (dt.getMonth()+1)).slice(-2);
	var d = ('00' + dt.getDate()).slice(-2);
	var result = y + '-' + m + '-' + d;
	s=s +"%0D%0A"+ result
	s = s +"%0D%0A"+ document.getElementById('name1').value+"%0D%0A"
	for(var i=1;i<13;i++){
		var srcchk=document.getElementById('img1'+i).src.substr(-5,1)
		if(srcchk=="u"){
			s=s+"🗯"
		}else{
			s=s+"🎈"
		}
		if(i==6){
		s=s+"%0D%0A"}
	}
	
	s=s+"%0D%0A"+ document.getElementById('name2').value+"%0D%0A"
	for(var i=1;i<13;i++){
		var srcchk=document.getElementById('img2'+i).src.substr(-5,1)
		if(srcchk=="u"){
			s=s+"🗯"
		}else{
			s=s+"🎈"
		}
		if(i==6){
		s=s+"%0D%0A"}
	}	
	
	s = s +"%0D%0A"+"%0D%0A"
	
		if (s.length > 140) {
			//文字数制限
			alert("テキストが140字を超えています");
		} else {
			//投稿画面を開く
			url = "http://twitter.com/share?url=" + escape(url) + "&text=" + s;
			window.open(url,"_blank","width=600,height=300");
		}
}
