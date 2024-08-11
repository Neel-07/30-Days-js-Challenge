document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.getElementById('profile-form');
    
    // Load existing profile info
    document.getElementById('profile-username').value = localStorage.getItem('username');
    document.getElementById('profile-email').value = localStorage.getItem('email');
    
    profileForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('profile-username').value;
        const email = document.getElementById('profile-email').value;
        
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);

        // Handle profile picture update
        const fileInput = document.getElementById('profile-pic-input');
        if (fileInput.files[0]) {
            const reader = new FileReader();
            reader.onload = () => {
                localStorage.setItem('profilePic', reader.result);
                document.getElementById('profile-pic').src = reader.result;
            };
            reader.readAsDataURL(fileInput.files[0]);
        }
        
        alert('Profile updated successfully!');
    });

    // Load profile picture if exists
    const profilePic = localStorage.getItem('profilePic');
    if (profilePic) {
        document.getElementById('profile-pic').src = profilePic;
    }
});
