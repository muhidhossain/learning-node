process.nextTick(() => console.log('this is process.nextTick 1'));
process.nextTick(() => {
  console.log('this is process.nextTick 2');
  process.nextTick(() =>
    console.log('this is inner next tick inside next tick')
  );
});
process.nextTick(() => console.log('this is process.nextTick 3'));

Promise.resolve().then(() => console.log('this is Promise.resolve 1'));
Promise.resolve().then(() => {
  console.log('this is Promise.resolve 2');
  process.nextTick(() =>
    console.log('this is the inner next tick inside Promise then block')
  );
});
Promise.resolve().then(() => console.log('this is Promise.resolve 3'));

// Promise.resolve().then(() => console.log('This is Promise.resolve 1'));
// process.nextTick(() => console.log('This is process.nextTick 1'));

// console.log('console.log 1');
// process.nextTick(() => {
//   console.log('this is process.next 1');
// });
// console.log('console.log 2');
