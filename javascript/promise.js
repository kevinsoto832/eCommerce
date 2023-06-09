//fetch('https://reqres.in/api/users/23').then(res => res.json()).then(data => console.log(data))

const posts = [
    { title: "post one", body: "This is post one" },
    { title: "post two", body: "This is post two" }
]

function getPosts() {
    setTimeout(function() {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });   
        document.body.innerHTML = output;
     
    }, 1000);
}

function createPost(post) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error) {
                resolve();
            } else {
                reject("Error: Something went wrong");
            }
        }, 2000)
    })

}


async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    console.log(data)
}

fetchUsers();

// async function init() {
//     await createPost({title: "Post Three", body: "This is post three"});
//     getPosts();
// }

// init();


// createPost({title: "Post Three", body: "This is post three"}).then(getPosts).catch(err => console.log(err));

// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'Goodbye')
// });

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then();

// Promise.all([promise1, promise2, promise3, promise4]).then((values) => {console.log(values)})