const covidData=require(`covid19package`);
const http=require(`http`);
const url=require(`url`);
http.createServer((req,res)=>{
   let pathObj=url.parse(req.url);
   let query=decodeURI(pathObj.query);
   
   //解除访问限制
   res.setHeader(`Access-Control-Allow-Origin`,`*`);
   if(pathObj.pathname==`/getCovidInfo`)
   {
       let provinceName=query.split(`=`)[1];
       console.log(provinceName);
       covidData(`中国`,provinceName).then(data=>{
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

