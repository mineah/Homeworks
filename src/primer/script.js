function addComment(imageId) {
  var commentInput = document.getElementById('commentInput' + imageId);
  var commentList = document.getElementById('commentList' + imageId);

  // Get the value of the input field
  var commentText = commentInput.value;

  // Create a new list item for the comment
  var listItem = document.createElement('li');
  listItem.textContent = commentText;

  var deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-button';
  deleteButton.onclick = function () {
    deleteComment(imageId, Array.from(commentList.children).indexOf(listItem));
  };



  // Append the delete button to the comment list item
  listItem.appendChild(deleteButton);

  // Append the new comment to the comment list
  commentList.appendChild(listItem);

  // Clear the input field after adding the comment
  commentInput.value = '';
}



// Function to increment the like count for a specific image
function like(imageId) {
  var likeCountElement = document.getElementById('likeCount' + imageId);

  // Get the current like count
  var currentLikes = parseInt(likeCountElement.textContent);

  // Increment the like count
  var newLikes = currentLikes + 1;

  // Update the like count on the page
  likeCountElement.textContent = newLikes;
}

function deleteComment(imageId, commentIndex) {
  var commentList = document.getElementById('commentList' + imageId);

  // Remove the comment at the specified index
  commentList.removeChild(commentList.childNodes[commentIndex]);
}
