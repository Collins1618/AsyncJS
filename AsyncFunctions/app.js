//declaring an async function
//which returns a promise by default
//simply declaring it as asynch makes it return a promise
async function hello(){

}

//declaring an arrow function as asynchronous 
const sing = async () => {
    // throw new Error('UH OH THAT FAILED');

    //Can also throw a string like so:
    throw 'OH NO, PROBLEM';

    return 'la la la la ';
}

// chaining async function with the then keyword
// sing().then((data) => {
//     console.log("PROMISE RESOLVE WITH: ", data)
// })
// .catch((err) => {
//     console.log('OH NO, PROMISE REJECTED');
//     console.log(err);
// })


const login= async (username, password) => {
    if(!username || !password) {
        throw 'missing credentials'
    }
    if(password === 'corgifeetarecute')
    {
        return 'WELCOME'
    }
    throw 'Invalid Password'
}

login('hellow', 'corgifeetarecute')
.then(msg => {
    console.log('Logged in');
    console.log(msg);
})
.catch(err => {
    console.log("ERROR!");
    console.log(err);
})