var arr=['Bangladesh', 4, 65, 4,3,7, 9]
arr[2]='Barishal'
for(var i=0; i<arr.length; i++){

    console.log(arr[i])

}



for(var i=0; i<arr.length; i++){

    arr[i]+=2

}
console.log(arr)

for(var i=0; i<arr.length; i++){

    arr[i]=arr[i]/2

}
console.log(arr)


var arr=[5, 4, 65, 4,3,7, 9]

var main=0
for(var i=0; i<arr.length; i++){
  if(arr[i]%2==0){
      main+=arr[i]
  }
}
console.log(main)


var arr=[5, 4, 65, 4,3,7, 9]

var main=0
for(var i=0; i<arr.length; i++){
  if(arr[i]%2==1){
      main+=arr[i]
  }
}
console.log(main)


