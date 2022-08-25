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


const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext(); //check if doNext exists, otherwise it 
        //will be undefined
    }, delay)
}

delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () =>{
        delayedColorChange('yellow', 1000, () =>{
            delayedColorChange('green', 1000, () =>{
                delayedColorChange('blue', 1000, () =>{
                    delayedColorChange('indigo', 1000, () =>{
        
                    })
                })
            })
        })
    })
});