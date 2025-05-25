function Sequence(num){
    let res="";
    let i=1;
    let count=0;
    
    while(count<num){
      if(i%2!==0){
          res+=i;
          count++;
      }
      i++;
    }
    return res;
}
let target=3;
console.log(Sequence(target));
