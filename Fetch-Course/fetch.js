var getTodos = async function(todoId) {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/');
        if (response.ok) {
            let responseJson = await response.json();
            console.log(responseJson);
        } else {
            console.error("Error , Server status : " + response.status);
        }
    } catch (error) {
        console.error(error);
    }
}


var getTodoId = async function(todoId) {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/' + todoId);
        if (response.ok) {
            let responseJson = await response.json();
            console.log(responseJson);
        } else {
            console.error("Error ,Server status : " + response.status);
        }
    } catch (error) {
        console.error(error);
    }
}

var insertPosts = async function() {
    try {

        let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.ok){
            let responseJson= await response.json();
            console.log(responseJson);
        }
        else{
            console.error("Error , Server status : " + response.status);
        }

    } catch (error) {
        console.error(error);
    }
}


    insertPosts();
    getTodos();
    getTodoId(8888);