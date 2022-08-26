//declaring an async function
//which returns a promise by default
//simply declaring it as asynch makes it return a promise
async function hello(){

}

//declaring an arrow function as asynchronous 
const sing = async () => {
    return 'la la la la '
}

//chaining async function with the then keyword
sing().then((data) => {
    console.log("PROMISE RESOLVE WITH: ", data)
})