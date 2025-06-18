function scrollToBlog() {
  // Find the section with the data-section="blog" attribute
  const blogSection = document.querySelector('[data-section="blog"]');

  // Scroll to the section if it's found
  if (blogSection) {
    blogSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function toggleLike(button) {
  const icon = button.querySelector('i');
  const popup = document.getElementById('popup');
  const popupMessage = document.getElementById('popup-message');

  // Toggle the icon class between outline and filled heart
  if (icon.classList.contains('icon-heart-outline')) {
    icon.classList.remove('icon-heart-outline');
    icon.classList.add('icon-heart');

    // Display the popup with "Liked" message
    popupMessage.textContent = 'You liked this blog!';
  } else {
    icon.classList.remove('icon-heart');
    icon.classList.add('icon-heart-outline');

    // Display the popup with "Unliked" message
    popupMessage.textContent = 'You unliked this blog.';
  }

  // Show the popup
  popup.classList.add('active');

  // Hide the popup after 3 seconds
  setTimeout(function () {
    popup.classList.remove('active');
  }, 3000);
}
