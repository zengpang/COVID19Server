const covidData=require(`covid19package`);
const http=require(`http`);
const fs=require(`fs`);
const url=require(`url`);
http.createServer((req,res)=>{
   let pathObj=url.parse(req.url);
   let query=decodeURI(pathObj.query);
   
   //解除访问限制
   res.setHeader(`Access-Control-Allow-Origin`,`*`);
   if(pathObj.pathname==`/getCovidInfo`)
   {
       let cityName=query.split(`=`)[1];
       console.log(cityName);
       covidData(`中国`,cityName).then(data=>{
          console.log(data);
          res.end(JSON.stringify(data))
       });
   }
   else
   {
    res.writeHead(404,`路径错误`);
    res.end(`404 Not Found`);
   }
}).listen(8888);

