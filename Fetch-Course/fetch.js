/*API REST location and documentation: https://github.com/typicode/jsonplaceholder#how-to */

//Functions

/*
 * All of these functions made with es2015 use REST API to obtain data but only on "post" data
 * To choose the data you want to access you just must change the link 
 * And a bit the functions but it a light work
 */

const getPosts = async function(postId) {
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


const getPostId = async function(postId) {
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

const insertPost = async function() {
    try {

        let response = await fetch('http://localhost:3000/posts', {
            method: "POST",
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        });

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

const insertPostParameters = async function(bodyPost) {
    try {

        let response = await fetch('http://localhost:3000/posts', {
            method: "POST",
            body: bodyPost,
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        });

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

const updatePostId_put = async function(id) {
    try {
        let response = await fetch('http://localhost:3000/posts/' + id, {
            method: "PUT",
            body: JSON.stringify({
                id: id,
                title: 'Le pain',
                body: 'Ceci est mon corps',
                userId: 1
            }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        });
        if (response.ok) {
            let responseJson = await response.json();
            console.log(responseJson);
            return responseJson;
        } else {
            console.error("Error , Server status : " + response.status);
        }

    } catch (error) {
        console.error(error);
    }
}

const updatePostIdParameters_patch = async function(id, body) {
    try {
        let response = await fetch('http://localhost:3000/posts/' + id, {
            method: "PATCH",
            body: body,
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        });
        if (response.ok) {
            let responseJson = await response.json();
            console.log(responseJson);
            return responseJson;
        } else {
            console.error("Error , Server status : " + response.status);
        }

    } catch (error) {
        console.error(error);
    }
}

/**
 * @name deletePostId
 * Other method without function and es2015 syntax
 *  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
    })
 */

const deletePostId = async function(id) {
    try {

        let response = await fetch('http://localhost:3000/posts/' + id, {
            method: "DELETE"
        });

        if (response.ok) {
            console.log("id: " + id + " deleted");
        } else {
            console.error("Error , Server status : " + response.status);
        }
    } catch (error) {
        console.error(error);
    }
}

/**
 * @name FilteringOrNestedResources
 * Other method without function and es2015 syntax
 *  Filtering ressources : Will return all the posts that belong to the first user
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    .then(response => response.json())
    .then(json => console.log(json))
 *
 *
 * Nested ressources: equivalent to /comments?postId=1
  fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then(response => response.json())
  .then(json => console.log(json))
 *
 */

const FilteringOrNestedResources = async function(parameters) {
    try {

        let response = await fetch('http://localhost:3000/' + parameters);

        if (response.ok) {
            let responseJson = await response.json();
            console.log(responseJson);
            return responseJson;
        } else {
            console.error("Error , Server status : " + response.status);
        }
    } catch (error) {
        console.error(error);
    }
}


//Execution

getPosts();
getPostId(99);
insertPost();
insertPostParameters(JSON.stringify({
    title: 'Hello',
    body: 'World',
    userId: 11
}));
updatePostId_put(10);
updatePostIdParameters_patch(11, JSON.stringify({
    id: 11,
    title: 'Le Vin',
    body: 'Ceci est mon sang',
    userId: 1
}));
FilteringOrNestedResources('albums/?userId=2');
FilteringOrNestedResources('post/5/comments');