document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const dashboard = document.getElementById('dashboard');
    const postForm = document.getElementById('post-form');
    const postFeed = document.getElementById('post-feed');
    let posts = [];
    let currentUser = '';

    // Handle login form submission
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            // Store username in localStorage
            localStorage.setItem('username', username);
            currentUser = username;
            dashboard.style.display = 'block';
            document.getElementById('login-section').style.display = 'none';
        }
    });

    // Handle post form submission
    postForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission
        const postUsername = document.getElementById('post-username').value;
        const postText = document.getElementById('post-text').value;
        const postImage = document.getElementById('post-image').files[0];
        const timestamp = new Date().toLocaleString();

        if (postUsername && postText) {
            const newPost = {
                username: postUsername,
                text: postText,
                image: postImage ? URL.createObjectURL(postImage) : null,
                timestamp: timestamp,
                likes: 0,
                comments: []
            };
            posts.push(newPost);
            displayPosts();
        }
    });

    // Display posts in the feed
    function displayPosts() {
        postFeed.innerHTML = '';
        posts.forEach((post, index) => {
            const postElement = document.createElement('div');
            postElement.className = `post post-animated ${post.username === currentUser ? 'logged-in-user' : ''}`;

            const image = post.image ? `<img src="${post.image}" alt="Post Image">` : '';
            postElement.innerHTML = `
                <div class="username">${post.username}</div>
                <div class="timestamp">${post.timestamp}</div>
                <div class="text">${post.text}</div>
                ${image}
                <div class="actions">
                    <button onclick="likePost(${index})">Like (${post.likes})</button>
                    <button onclick="toggleCommentBox(${index})">Comment (${post.comments.length})</button>
                </div>
                <div id="comment-box-${index}" class="comment-box" style="display:none;">
                    <input type="text" id="comment-input-${index}" placeholder="Add a comment...">
                    <button onclick="addComment(${index})">Submit</button>
                </div>
                <div id="comments-${index}">
                    ${post.comments.map(comment => `<div>${comment}</div>`).join('')}
                </div>
            `;
            postFeed.appendChild(postElement);
        });
    }

    // Like a post
    window.likePost = (index) => {
        posts[index].likes += 1;
        displayPosts();
    };

    // Toggle the comment box visibility
    window.toggleCommentBox = (index) => {
        const commentBox = document.getElementById(`comment-box-${index}`);
        commentBox.style.display = commentBox.style.display === 'none' ? 'block' : 'none';
    };

    // Add a comment to a post
    window.addComment = (index) => {
        const commentInput = document.getElementById(`comment-input-${index}`);
        if (commentInput.value) {
            posts[index].comments.push(commentInput.value);
            commentInput.value = '';
            displayPosts();
        }
    };

    // Initialize with stored username if exists
    if (localStorage.getItem('username')) {
        currentUser = localStorage.getItem('username');
        dashboard.style.display = 'block';
        document.getElementById('login-section').style.display = 'none';
    }
});
