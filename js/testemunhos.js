let currentIndex = 0;

function changeTestimonial(n) {
  const testimonials = document.getElementById('testimonial-container');
  const testimonialsCount = testimonials.children.length;

  currentIndex += n;

  if (currentIndex < 0) {
    currentIndex = testimonialsCount - 1;
  } else if (currentIndex >= testimonialsCount) {
    currentIndex = 0;
  }

  const percentage = (currentIndex * 100) / testimonialsCount;
  testimonials.style.transform = `translateX(${-percentage}%)`;
}


