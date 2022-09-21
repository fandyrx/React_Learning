let data = [
  {name:'一山',surname:"李",address:"厦门",area:"上海"},
  {name:'一山',surname:"张",address:"西藏",area:"北京"},
  {name:'尚山',surname:"王",address:"宁夏",area:"福州"},
  {name:'一山',surname:"张",address:"福建",area:"厦门"},
  {name:'五山',surname:"张",address:"北京",area:"北京"},
] 

data.sort(function(a,b){
      let asum = a.name +a.surname + a.address
      let bsum = b.name +b.surname + b.address
      if(asum<bsum ){
        return -1
      }else{
        return 1
      }

})




console.log(data);