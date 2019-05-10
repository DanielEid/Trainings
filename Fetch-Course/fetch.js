//Functions

var getPosts = async function(postId) {
    try {
        let response = await fetch('http://localhost:3000/posts/');
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


var getPostId = async function(postId) {
    try {
        let response = await fetch('http://localhost:3000/posts/' + postId);
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

        let response = await fetch('http://localhost:3000/posts', {
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

        let response = await fetch('http://localhost:3000/posts', {
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

    getPosts();
    getPostId(8888);
    insertPosts();
    insertPostsParameters(JSON.stringify({
                title: 'test0',
                body: 'body du test0',
                userId: 11
            }),);
