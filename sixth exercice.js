function uniqueElementsFromArray(arr1, arr2) {
    const mergedArray = arr1.concat(arr2);
  
    const uniqueSet = new Set(mergedArray);
  
    const uniqueArray = Array.from(uniqueSet);
  
    return uniqueArray;
  }
  
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [3, 4, 5, 6, 7];
  
  const uniqueArray = uniqueElementsFromArray(array1, array2);
  console.log(uniqueArray);