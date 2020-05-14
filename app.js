     var express=require("express");
var app= express();
var request= require("request");



app.get("/", function(req, res){
      res.redirect("/markets/filter");
});

app.get("/markets/filter", function(req, res){
      request('https://api.wazirx.com/api/v2/market-status', function(error,response,body){
            if(error){
        console.log("something went wrong");
        console.log(error);
  }else{
        if(response.statusCode ==200){
              var data= JSON.parse(body);
              var markets=data["markets"];
                  console.log("All the coins matching these specifications are...");
                  for(var i=0;i<markets.length-1;i++){
                        if(markets[i].minBuyAmount==10 && markets[i].status=="active"){
                              console.log(markets[i]);
                        }
                  }
              
        }
  }
      });
});







app.listen(process.env.PORT||3000, process.env.IP, function(){
      console.log("server started");
});
