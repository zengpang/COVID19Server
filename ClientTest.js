let xhr=new XMLHttpRequest();
let selectprovince=`内蒙古`;
let url=encodeURI(`http://localhost:8888/getCovidInfo?province=${selectprovince}`);
xhr.open(`GET`,url,true);
xhr.onload=function(){

    console.log(xhr.responseText);
}
xhr.send();