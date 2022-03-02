const arr1 = [1, 2, 3, 5, 6];

const arr2 = arr1.map((e) => e + 1);

const arr3 = arr1.map((e) => e + 2);

function f2(a1, a2) {
  return a1[0] + a2[0];
}

f2(arr2, arr3);
