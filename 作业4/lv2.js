let arr = [1, [2, 3], [4, 5, [6, 7, 8]], 9];

function BParr(arr) {
    let arr2 = [];
    function BP(arr){
        for (let i = 0;i < arr.length; i++) {
            if(Array.isArray(arr[i])){
                BP(arr[i]);
            }else{
                arr2.push(arr[i]);
            }
        }
    }
    BP(arr);
    return arr2;
}
console.log(BParr(arr));

