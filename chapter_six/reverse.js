var arr=[1, 2, 3, 4, 5]

 for(var i=0; i<=(arr.length/2); i++){
     var temp=arr[i]
     arr[i]=arr[arr.length-1 -i]
     arr[arr.length-1-i] = temp
 }

console.log(arr)

var arr=[1, 2, 3, 4, 5]

console.log(arr.reverse())




