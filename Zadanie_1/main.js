const data = [
  { id: 1, firstName: 'Hobert', lastName: 'Rarężlak', marks: [3, 3.5, 3, 5] },
  { id: 2, firstName: 'Basia', lastName: 'Kasińska', marks: [5, 4.5, 3, 5] },
  { id: 3, firstName: 'Haciej', lastName: 'Mubert', marks: [2, 2.5, 5, 5] },
  { id: 4, firstName: 'Hawid', lastName: 'Dolisz', marks: [5, 4.5, 5, 5] },
  { id: 5, firstName: 'Dateusz', lastName: 'Mobija', marks: [2, 5, 2, 5] },
];

const arr = [];
let sum = 0;
const calcAvarage = () => {
  for (let i = 0; i < data.length; i++) {
    arr.push(
      data[i].marks.reduce((pre, next) => pre + next) / data[i].marks.length
    );
  }
  console.log(arr);

  let avarage = arr.reduce((pre, next) => pre + next) / arr.length;
  console.log(`arithmetic average: ${avarage}`);
  return arr, avarage;
};
calcAvarage();

// const arr1 = data[0].marks;
// const arr2 = data[1].marks;
// const arr3 = data[2].marks;
// const arr4 = data[3].marks;
// const arr5 = data[4].marks;

// const sum1 = arr1.reduce((pre, next) => pre + next);
// const sum2 = arr2.reduce((pre, next) => pre + next);
// const sum3 = arr3.reduce((pre, next) => pre + next);
// const sum4 = arr4.reduce((pre, next) => pre + next);
// const sum5 = arr5.reduce((pre, next) => pre + next);

// const avarageArr1 = sum1 / arr1.length;
// const avarageArr2 = sum2 / arr2.length;
// const avarageArr3 = sum3 / arr3.length;
// const avarageArr4 = sum4 / arr4.length;
// const avarageArr5 = sum5 / arr5.length;

// console.log(avarageArr1.toFixed(2));
// console.log(avarageArr2.toFixed(2));
// console.log(avarageArr3.toFixed(2));
// console.log(avarageArr4.toFixed(2));
// console.log(avarageArr5.toFixed(2));

// const avarageAll =
//   (avarageArr1 + avarageArr2 + avarageArr3 + avarageArr4 + avarageArr5) / 5;
// console.log(avarageAll);
