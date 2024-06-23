const blogArea = document.querySelector('#posts');
const blogItem = document.querySelector('section');
const clearPost = document.querySelector('#clearAll');

let blogsStored = []

function blogRecall() {
    if (localStorage.getItem('submission')) {
        const blogEntry = JSON.parse(localStorage.getItem('submission'));
        if (blogEntry !== null) {
            blogsStored = blogEntry;
        }
    }
}
function blogAdd() {
    if (blogsStored !== null) {
        for (i = 0; i < blogsStored.length; i++) {

            const storedUsername = blogsStored[i].username;
            const storedTitle = blogsStored[i].title;
            const storedContent = blogsStored[i].content;

            const blogSection = document.createElement('section');
            blogArea.append(blogSection)

            const pTitle = document.createElement('p');
            pTitle.textContent = storedTitle;
            pTitle.setAttribute('style', 'font-size:28px; font-weight:bold; text-decoration:underline; padding:10px')
            blogSection.appendChild(pTitle)

            const pUsername = document.createElement('p');
            pUsername.textContent = "by " + storedUsername;
            pUsername.setAttribute('style', 'font-size:20px; font-weight:bold; font-style:italic;padding:5px');
            blogSection.appendChild(pUsername);


            const pContent = document.createElement('p');
            pContent.textContent = storedContent;
            pContent.setAttribute('style', 'padding:8px');
            blogSection.appendChild(pContent)
        }
    }
}


clearPost.addEventListener('click', function (event) {
    event.preventDefault();
    const confirm = window.confirm("Are you SURE you would like to delete these posts?")
    if (confirm) {
        const clear = localStorage.removeItem('submission')
        document.location.href = "index.html"
    }
    console.log(blogsStored)
}
)


blogRecall()
blogAdd()
console.log(blogsStored)
