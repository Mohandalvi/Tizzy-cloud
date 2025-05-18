
// FAQ Script

function toggleFAQ(id) {
    const allFAQs = document.querySelectorAll('.faq-container');

    allFAQs.forEach(faq => {
      const icon = faq.querySelector('.icon');
      if (faq.id === id) {
        const isOpen = faq.classList.contains('open');
        faq.classList.toggle('open');
        icon.textContent = isOpen ? '+' : '−';
      } else {
        faq.classList.remove('open');
        if (icon) icon.textContent = '+';
      }
    });
  }

  