
// // Function to find the missing number
// function find(arr,N){
//     let i;
//     let temp = [];
//     for (i = 0; i <= N; i++) {
//               temp[i] = 0;
//           }
   
//           for (i = 0; i < N; i++) {
//               temp[arr[i] - 1] = 1;
//           }
   
//           let ans = 0;
//           for (i = 0; i <= N; i++) {
//               if (temp[i] == 0)
//                   ans = i + 1;
//           }
//           console.log(ans);
//   }
   

//           let arr = [ 1, 3, 7, 5, 6, 2 ];
//           let n = arr.length;
   
        
//          find(arr,n);

//  duplicate item
// function dup(arr){
//     for(var i=0;i<arr.legth;i++){
//         for (var j=i;j<i-1;j++){
//             if(arr[i]>arr[j]){
//                 arr[i],arr[j]=arr[j],arr[i];
//             }
//         }
//     }
// console.log(arr)
// }
// var arr=[1,12,2,3,4,4];
// dup(arr);
