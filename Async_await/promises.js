const posts =[
    {title: 'Post one', body:'This is post one'},
    {title:'Post two', body:'This is post two'}
]

function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output+= `<li>${post.title}: ${post.body}</li>`
        });
        document.body.innerHTML= output;
    },1000)
}

function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            posts.push(post)

            const error=false;

            if(!error){
                resolve();
            }
            else{
                reject("Something went wrong")
            }
        },500)
    });    
}

// createPost({title:'post three', body:'this is post three'}).then(getPosts);


async function gg() {
    await createPost({title:'post three', body:'this is post three'})
    getPosts()
};

gg();

async function fetchUsers () {
    const res = await fetch
    ('https://jsonplaceholder.typicode.com/users');
    const data = await res. json();
    console. log (data);
}
    
 fetchUsers();