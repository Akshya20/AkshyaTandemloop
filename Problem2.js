function OddLine(x){
    let res="";
    let i=1;
    let count=0;
    
    while(count<x){
      if(i%2!==0){
          res+=i;
          count++;
      }
      i++;
    }
    return res;
}
let u=3;
console.log(OddLine(u));