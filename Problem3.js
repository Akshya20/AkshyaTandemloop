function OddLine(x){
    let limit=x;
    if(x%2==0){
        limit=limit-1;
    }
    let res="";
    let i=1;
    let count=0;
    
    while(count<limit){
      if(i%2!==0){
          res+=i;
          count++;
      }
      i++;
    }
    return res;
}
let u=4;
console.log(OddLine(u));