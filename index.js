
var promise = new Promise((res,rej)=>{
  
   (res)=>{ setTimeout(()=>{
    res("OK")
    },1000)}

    (rej)=>{
      rej("Not Ok")
    }

},1000)


promise.then((val)=>console.log(val))
