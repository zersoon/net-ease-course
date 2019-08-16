// 1.bubble
function bubble(array) {
    checkArray(array);
    for (let i = array.length - 1; i > 0; i--) {
        // 从0 到 length - 1 遍历
        for (let j = 0; j < i; j++) {
            if(array[j] > array[j+1]) {
                swap(array, j, j + 1)
            }
        }
    }
    return array;
}

// 2.insertion
function insertion(array) {
    checkArray(array);
    for(let i = 1; i < array.length; i++) {
        for (let j = i - 1; j >= 0 && array[j] > array[j+1]; j--) {
            swap(array, j, j + 1)
        }
    }   
}

// 3.selection
function selection(array) {
    checkArray(array);
    for(let i = 0; i < array.length - 1; j++) {
        let minIndex = i;
        for(let j = i + 1; j < array.length; j++) {
            minIndex = array[j] < array[minIndex] ? j : minIndex;
        }
        swap(array, i, minIndex);
    }
    return array;
}

// sort
function sort(array) {
    checkArray(array);
    mergeSort(array, 0, array.length - 1);
    return array;
}

function mergeSort(array, left, right) {
    //左右索引相同说明已经只有一个数
    if(left === right) return;
    let mid = parseInt(left + ((right - left) >> 1));
    mergeSort(array, left, mid);
    mergeSort(array, mid + 1, right);

    let help = [];
    let i =0; 
    let p1 = left;
    let p2 = mid + 1;
    while(p1 <= mid && p2 <= right) {
        help[i++] = array[p1] < array[p2] ? array[p1++] : array[p2++];
    }
    while(p1 <= mid) {
        help[i++] = array[p1++];
    }
    while(p2 <= right) {
        help[i++] = array[p2++];
    }
    for(let i = 0; i < help.length; i++) {
        array[left + i] = help[i];
    }
    return array;
}

// quickSort
function quickSort(array, left, right) {
    if(left < right) {
        swap(array, , right);
        let indexs = part(array, parseInt(Math.random()*(right - left + 1)) + left, right);
        quickSort(array, left, index[0]);
        quickSort(array, indexs[1] + 1, right)
    }
}