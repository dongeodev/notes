function format(str){
  let pos = str.search(':')
  return str.slice(0,pos)
}
function format2(str){
  let pos = str.search(':')
  return str.slice(pos)
}

module.exports={
  format,
  format2,
}