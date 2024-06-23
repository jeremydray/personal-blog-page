const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submit = document.getElementById('submit');

let blogs = [];

// Takes user input in order to store into local storage to be used on blog.js page; automatically redirects the user to the blog page to see their new page.

submit.addEventListener('click', function (event) {
    event.preventDefault();

    // Checks inputs for any blanks and quits function/alerts user until all fields are filled.
    if (title.value === "") {
        alert("Title cannot be blank.")
    } else if (username.value === "") {
        alert("Username can't be blank.")
    } else if (content.value === "") {
        alert("Blog content cannot be blank.")
    } else {
        const blogPost = {
            username: username.value,
            title: title.value,
            content: content.value.trim(),
        }
        if (localStorage.getItem('submission') === null) {
            blogs.push(blogPost);
            username.value = '';
            title.value = '';
            content.value = '';
            localStorage.setItem('submission', JSON.stringify(blogs))
        }
        // Pulls the locally stored data, parses back into object array, adds the new blog post, and re-stringifies to local storage
        else {
            const blogSave = JSON.parse(localStorage.getItem('submission', blogPost)); {
                blogs = blogSave
                blogs.push(blogPost);
                username.value = '';
                title.value = '';
                content.value = '';
            }
            localStorage.setItem('submission', JSON.stringify(blogs))
        }
        document.location.href = "blog.html"
    }
})

