// step 1: set even handler to button
document.getElementById('btn-post-comment')
    .addEventListener('click', function(){
        console.log('Post comment btn clicked')

        // step 2: get the text that written in the comment text area
        const commentTextBox = document.getElementById('comment-text-box');
        console.log(commentTextBox);

        const newComment = commentTextBox.value;
        console.log(newComment)

        // step 3: get the parent node where to publish comment
        const commentContainer = document.getElementById('comment-container');
        console.log(commentContainer);

        // step 4: creat a comment p and set the innerText
        const commentElement = document.createElement('p');
        commentElement.classList.add('comment'); //add class
        commentElement.innerText = newComment;

        // step 5: append the new p tag to the parent Node
        commentContainer.appendChild(commentElement)

        // step 6: last clean the text area
        commentTextBox.value = ''

    })