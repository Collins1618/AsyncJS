// console.log('Sending request to server');
// setTimeout(() => {
//     console.log("Here is your data from the server...")
// }, 3000);

// console.log("I AM AT THE END OF THE FILE!")


// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                     setTimeout(() => {
//                         document.body.style.backgroundColor = 'indigo';
//                         setTimeout(() => {
//                             document.body.style.backgroundColor = 'violet';
//                         },1000);
//                     },1000);
//                 },1000);
//             },1000);
//         },1000);
//     },1000);
// },1000);


const delayedColorChange = (newColor, delay) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
    }, delay)
}

delayedColorChange('olive', 3000);