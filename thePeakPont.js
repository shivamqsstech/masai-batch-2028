function peakPoint(n,arr){
    let max = Math.max(...arr);
    for(let i=0 ; i<arr.length; i++){
      if(arr[i]===max){
        console.log(i)
      }
      
    }
  }