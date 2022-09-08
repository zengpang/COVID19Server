let xhr=new XMLHttpRequest();
let selectprovince=`新疆维吾尔`;
let url=encodeURI(`http://localhost:8888/getCovidInfo?province=${selectprovince}`);
xhr.open(`GET`,url,true);
xhr.onload=function(){

    console.log(xhr.responseText);
}
xhr.send();