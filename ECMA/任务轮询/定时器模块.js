setTimeout(() => {
    console.log('定时器1');
}, 2000);
setTimeout(() => {
    console.log('定时器2');
}, 1000);
let sum = 0;
for (let index = 0; index < 10000; index++) {
    sum++;
}
console.log("sum:", sum);
setTimeout(() => {
    console.log('定时器3');
}, 995);