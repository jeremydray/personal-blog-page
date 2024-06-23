const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submit = document.getElementById('submit');

let blogs = [];

submit.addEventListener('click', function (event) {
    event.preventDefault();

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

