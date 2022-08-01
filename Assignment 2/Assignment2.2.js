// QUES 1
let res= new Promise((resolve)=>{   
        setTimeout(() => {
            resolve("success")
         }, 4000)
    })
// QUES 2

res.then((message)=>{
    console.log(message);
}).catch(()=>{
    console.log("error");
})

// QUES 3
async function example(){
    try {
        await Promise.resolve(1);
        const value_1 = await Promise.resolve(2);
        console.log(value_1);
        return await Promise.reject(3);
    } catch (err) {
        console.log(err);
    }
}
// QUES 4

const url="https://jsonplaceholder.typicode.com/users/"
async function fetch(url){
   
        await Promise.resolve(url);
        const value_1 = await response.json();
        console.log(value_1);
    
}

// QUES 5


const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
    ];
    const getData = async function () {
    const [users, posts, albums] = await Promise.all(
    urls.map(async (url) => {
        const resp = await fetch(url);
        return resp.json();
    }),
    );
    console.log("users", users);
    console.log("posta", posts);
    console.log("albums", albums);
    };

// QUES 6
const ur = [
            "https://jsonplaceholder.typicode.com/users",
            "https://jsonplaceholdeTYPO.typicode.com/posts",
            "https://jsonplaceholder.typicode.com/albums",
            ];

async function fetch(url){
    try {
        await Promise.resolve(url);
        const value_1 = await response.json();
        console.log(value_1);
    } catch (err) {
        console.log(err);
    }
}