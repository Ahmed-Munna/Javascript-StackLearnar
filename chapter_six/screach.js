// var arr=['Dhaka', 'Barishal', 'Rongpur', 'Cumillah', 'Rajshahi', 'Chitagong','Sylet']

// var find='Rongpur'

// var founde=false

// for(var i=0; i<arr.length; i++){
//     if(arr[i]==find){
//             console.log('Founded at index '+i)
//             founde=true
//             break
//     }
// }

// if(!founde){
//     console.log('Not Founded')
// }


// var arr=[1, 2, 3, 4, 5, 6, 7]

// var find=2
// var founded=false

// for(var i=0; i<arr.length; i++){
//       if(arr[i]==find){
//           console.log('founded at index '+i)
//           founded=true
//           break
//       }

// }


// if(!founded){
//     console.log('Not founded')
// }

var arr=[1, 2, 3, 4, 5, 6]

var find=6
var founded=true

for(var i=0; i<arr.length; i++){
    if(arr[i]==find){
        console.log('Founded at index '+i)
        founded=false
        break
    }
}

if(founded){
    console.log('Not founded')
}