let xhr=new XMLHttpRequest();
let selectCity=`北京`;
let url=encodeURI(`http://localhost:8888/getCovidInfo?city=${selectCity}`);
xhr.open(`GET`,url,true);
xhr.onload=function(){

    console.log(xhr.responseText);
}
xhr.send();