
function guidGenerator() {
  var S4 = function() {
     return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}
const colors = ['red','blue', 'yellow', 'green', 'black'];
const data = [
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {id: guidGenerator(), height: Math.floor(Math.random() * 100), width: 100, backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
]
export default data