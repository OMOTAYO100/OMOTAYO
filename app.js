
  // Function to open modal and populate content
  function openModal(title, imageUrl, description, liveUrl, codeUrl) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalImage').src = imageUrl;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('Demo').href = liveUrl;
    document.getElementById('Code').href = codeUrl;
    document.getElementById('projectModal').classList.remove('hidden');
  }

  // Function to close modal
  function closeModal() {
    document.getElementById('projectModal').classList.add('hidden');
  }

  // Set up click listeners for all project cards
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const title = card.dataset.title;
      const image = card.dataset.image;
      const desc = card.dataset.description;
      const live = card.dataset.live;
      const code = card.dataset.code;
      openModal(title, image, desc, live, code);
    });
  });

