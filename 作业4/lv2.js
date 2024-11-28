let arr = [1, [2, 3], [4, 5, [6, 7, 8]], 9];
 
function flattenArray(inputArray) {
    let result = []; // 创建一个空数组来存储扁平化后的结果
 
    // 定义一个递归函数
    function recursiveFlatten(array) {
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                // 如果元素是数组，则递归调用该函数
                recursiveFlatten(array[i]);
            } else {
                // 如果元素不是数组，则添加到结果数组中
                result.push(array[i]);
            }
        }
    }
 
    // 调用递归函数开始扁平化过程
    recursiveFlatten(inputArray);
 
    // 返回扁平化后的结果数组
    return result;
}
 
// 调用函数并打印结果
console.log(flattenArray(arr)); // 输出: [1, 2, 3, 4, 5, 6, 7, 8, 9]
