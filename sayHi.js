console.log('Hello world.');

function add(x, y){
  if(isNaN(x)) throw new Error('Allow only number.');
  return x + y;
}

function sub(x, y){
  if(isNaN(x)) throw new Error('Allow only number.');
  return x - y;
}
