
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

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

let checkBox = document.querySelector("input[type='checkbox']");

checkBox.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const hamburger = document.querySelector('.hamburger');
const navmenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('close');

  // Toggle the menu scale
  if (navmenu.classList.contains('scale-y-0')) {
    navmenu.classList.remove('scale-y-0');
    navmenu.classList.add('scale-y-100');
  } else {
    navmenu.classList.remove('scale-y-100');
    navmenu.classList.add('scale-y-0');
  }
});
