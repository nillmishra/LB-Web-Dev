// let content = fetch('https://jsonplaceholder.typicode.com/todos/1') //promise return karega

// async function utility(){
//     let content = fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let output = (await content).json()
//     console.log(output)
// }
// utility()


async function helper(){
    let options = {
        method: 'POST',
        body: JSON.stringify({
            title: 'Nill',
            body: 'Tagdi Body',
            userId: 1998,
            weight: 90
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    };
    
    let content = await fetch('https://jsonplaceholder.typicode.com/todos/1', options);
    let response = content.json();
    return response;
}


async function utility(){
    let ans =  await helper;
    console.log(ans);
}

utility()

