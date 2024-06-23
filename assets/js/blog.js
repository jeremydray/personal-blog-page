const blogArea = document.querySelector('#posts');
const blogItem = document.querySelector('section');
const clearPost = document.querySelector('#clearAll');

let blogsStored = []

// Calls locally stored data in usable object format in order to use for blogAdd() function below. 
function blogRecall() {
    if (localStorage.getItem('submission')) {
        const blogEntry = JSON.parse(localStorage.getItem('submission'));
        if (blogEntry !== null) {
            blogsStored = blogEntry;
        }
    }
}

// Loop that uses locally stored data called above to create and append the section elements containing each blog post, both previously submitted and newly added
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

// Function that allows user to click a button in order to remove all locally saved data to start over; provides confirmation in order to prevent accidental deletion
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
