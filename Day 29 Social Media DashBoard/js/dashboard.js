document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('new-post-form');
    const postFeed = document.getElementById('post-feed');
    const notificationList = document.getElementById('notification-list');
    
    let posts = [];
    let notifications = [];

    postForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const postText = document.getElementById('post-text').value;
        const postImage = document.getElementById('post-image').files[0];
        
        if (postText || postImage) {
            const newPost = {
                id: posts.length + 1,
                text: postText,
                image: postImage ? URL.createObjectURL(postImage) : null,
                likes: 0,
                comments: [],
                timestamp: new Date().toLocaleString(),
            };
            
            posts.push(newPost);
            displayPosts();
            postForm.reset();
        }
    });

    function displayPosts() {
        postFeed.innerHTML = '';
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            
            const postContent = `
                <p>${post.text}</p>
                ${post.image ? `<img src="${post.image}" class="post-image" alt="Post Image">` : ''}
                <div class="post-actions">
                    <button class="like-btn" onclick="likePost(${post.id})">Like (${post.likes})</button>
                    <button class="comment-btn" onclick="toggleCommentSection(${post.id})">Comment</button>
                </div>
                <div class="comment-section" id="comment-section-${post.id}" style="display:none;">
                    <input type="text" id="comment-text-${post.id}" placeholder="Add a comment...">
                    <button onclick="addComment(${post.id})">Add Comment</button>
                    <div id="comments-${post.id}">
                        ${post.comments.map(comment => `<div class="comment">${comment}</div>`).join('')}
                    </div>
                </div>
                <p>${post.timestamp}</p>
            `;
            postElement.innerHTML = postContent;
            postFeed.appendChild(postElement);
        });
    }

    window.likePost = function(postId) {
        const post = posts.find(p => p.id === postId);
        if (post) {
            post.likes++;
            displayPosts();
            notifyUser(`Your post received a new like!`);
        }
    };

    window.toggleCommentSection = function(postId) {
        const commentSection = document.getElementById(`comment-section-${postId}`);
        if (commentSection) {
            commentSection.style.display = commentSection.style.display === 'none' ? 'block' : 'none';
        }
    };

    window.addComment = function(postId) {
        const commentText = document.getElementById(`comment-text-${postId}`).value;
        const post = posts.find(p => p.id === postId);
        if (post && commentText) {
            post.comments.push(commentText);
            document.getElementById(`comments-${postId}`).innerHTML += `<div class="comment">${commentText}</div>`;
            document.getElementById(`comment-text-${postId}`).value = '';
            notifyUser(`Your post received a new comment!`);
        }
    };

    function notifyUser(message) {
        const notification = document.createElement('li');
        notification.className = 'notification';
        notification.textContent = message;
        notificationList.appendChild(notification);
        setTimeout(() => notification.remove(), 5000);
    }
});
