// Comment Section Function
// Step 1: Add Event Listener To The Post
document.getElementById('btn-post').addEventListener('click', function(){
    // Step 2: Get The Comment
    const commentBox = document.getElementById('new-comment');
    const newComment = commentBox.value;
    
    // Step 3: Set The Comment Inside The Container
    // i) Get The Comment Container
    // ii) Create a New Element (p Tag)
    // iii) Set The Text of The Comment as innerText of the Paragraph Tag
    // iv) Add The Paragraph TAg Using appendChild
    const commentContainer = document.getElementById('comment-container');
    const p = document.createElement('p');
    p.innerText = newComment;
    commentContainer.appendChild(p);

    // Step 4: Clear The Input Textarea
    commentBox.value = '';
})