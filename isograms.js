function isIsogram(str){
  const a = str.toLowerCase().split('');
  const b = a;
  let compare = 0;
  
  for (let i = 0; i < a.length; i++) {
    for(let j = 0; j < b.length; j++) {
      if(a[i] === b[j]) {
        compare++;
      }
    } 
  }
  
  if(compare === a.length) {
    return true;
  }
  else {
    return false;
  }

}
