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


// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext(); //check if doNext exists, otherwise it 
//         //will be undefined
//     }, delay)
// }

//NOTE THE KIND OF NESTING DONE BELOW IS BAD
//IT CREATE A PROBLEM CALLED CALLBACK HELL WHERE YOU'RE
//NESTING CALLBACKS
// delayedColorChange('red', 1000, () => {
//     delayedColorChange('orange', 1000, () =>{
//         delayedColorChange('yellow', 1000, () =>{
//             delayedColorChange('green', 1000, () =>{
//                 delayedColorChange('blue', 1000, () =>{
//                     delayedColorChange('indigo', 1000, () =>{
        
//                     })
//                 })
//             })
//         })
//     })
// });

//creating delayed color change function using promises
const delayedColorChange = (color, delay) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// delayedColorChange('red', 1000)
// //using implicit return in arrowfunctions
// .then(()=> delayedColorChange('orange', 1000))
// .then(()=> delayedColorChange('yellow', 1000))
// .then(()=> delayedColorChange('green', 1000))
// .then(()=> delayedColorChange('blue', 1000))
// .then(()=> delayedColorChange('indigo', 1000))
// .then(()=> delayedColorChange('violet', 1000))


//using asynchrounous function to do the color change
//async and await keywords will be used
async function rainbow(){
   await delayedColorChange('red', 1000)
   await delayedColorChange('orange', 1000)
   await delayedColorChange('yellow', 1000)
   await delayedColorChange('green', 1000)
   await delayedColorChange('blue', 1000)
   await delayedColorChange('indigo', 1000)
   await delayedColorChange('violet', 1000)
   return "ALL DONE!"
}

// rainbow().then(() => {
//     console.log('end of rainbow')
// })

async function printRainbow() {
    await rainbow();
    console.log("END OF RAINBOW")
}
printRainbow();