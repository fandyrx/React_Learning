function formatPrice(price){
  if(typeof price !== "number"){
    price = Number(price) || 0 ;
    // price = Number("aaa") || 0 ;
    // 传入参数 字符串,转换为数字, NAN 则执行 price=0
  }

  return "¥" + price.toFixed(2)
}