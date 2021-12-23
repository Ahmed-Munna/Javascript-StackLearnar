// // var arr=[
// //     [25, 26, 27],
// //     [28, 29, 30],
// //     [31, 32, 33]
// // ]
// // var def=0



// // for(var i=0; i<arr.length; i++){
// //     for(var j=0; j<arr[i].length; j++){
// //         def+=arr[i][j]
// //     }
// // }
// // console.log(def)


// var arr=[
//     [
//         [25, 13, 20,],

//         [1, 2, 3],

//         [4, 5, 6]
//     ],


//     [
//         [45, 13, 20,]
//     ],


//     [
//         [70, 80, 33]
//     ]
// ]

// var dif=0

// for(var i=0; i<arr.length; i++){

//     for(var j=0; j<arr[i].length; j++){
//         for(var k=0; k<arr[i][j].length; k++){
//             dif=dif+arr[i][j][k]
//         }
//         console.log(dif)
//     }

    

// }





var arr=[
    
    [
   
        [22,23,24],

        [22,23,24],

        [22,23,24]

    ],

    [
   
        [22,23,24],

        [22,23,24],

        [22,23,24]

    ],

    [
   
        [22,23,24],

        [22,23,24],

        [22,23,24]

    ]



]

var dif=0


for(var i=0; i<arr.length; i++){

      for(var j=0; j<arr[i].length; j++){
          for(var k=0; k<arr[i][j].length; k++){
              
              if(arr[i][j][k]%2==0){
                  dif+=arr[i][j][k]
              }
          }
          
      }
      
      
}

console.log(dif)
