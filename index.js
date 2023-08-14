
let array=[]
function firstPalindrome(arr){
 for(let i=0; i<arr.length;i++){
  let words=arr[i];
  let allreversed=words.split('').reverse().join('')
  if(allreversed===words){
    array.push(allreversed)
  }
 }
}
firstPalindrome(['aba','book','cool','obzo'])
console.log(array)

