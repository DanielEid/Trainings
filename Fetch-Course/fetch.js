//Functions

var getTodos = async function(todoId) {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/');
        if (response.ok) {
            let responseJson = await response.json();
            console.log(responseJson); //Just for the display of the test
            return responseJson;
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
            console.log(responseJson); //Just for the display of the test
            return responseJson;
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
            console.log(responseJson); //Just for the display of the test
            return responseJson;
        }
        else{
            console.error("Error , Server status : " + response.status);
        }

    } catch (error) {
        console.error(error);
    }
}

var insertPostsParameters = async function(bodyPost) {
    try {

        let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: bodyPost,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.ok){
            let responseJson= await response.json();
            console.log(responseJson); //Just for the display of the test
            return responseJson;
        }
        else{
            console.error("Error , Server status : " + response.status);
        }

    } catch (error) {
        console.error(error);
    }
}

   
//Execution

    getTodos();
    getTodoId(8888);
    insertPosts();
    insertPostsParameters(JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            }),);
