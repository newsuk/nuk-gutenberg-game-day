// Function to toggle content visibility
function toggleContent(event) {
	const label = event.target;
	const content = label.nextElementSibling;

	if (content.style.display === 'none' || content.style.display === '') {
	  content.style.display = 'block';
	} else {
	  content.style.display = 'none';
	}
  }

  // Add event listeners to all section labels
  document.addEventListener('DOMContentLoaded', () => {
	const sectionLabels = document.querySelectorAll('.section-label');
	sectionLabels.forEach(label => {
	  label.addEventListener('click', toggleContent);
	});
  });
