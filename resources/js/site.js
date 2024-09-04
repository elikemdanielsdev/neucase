// Supports weights 200-800
import '@fontsource-variable/manrope';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin'; // Import TextPlugin

gsap.registerPlugin(ScrollTrigger, TextPlugin); // Register the plugins

// Smooth scroll
document.addEventListener('DOMContentLoaded', () => {
  const lenis = new Lenis();

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  // Animate list items on scroll
  const showcaseItems = document.querySelectorAll('.showcase-item');

  showcaseItems.forEach((item) => {
    // Set initial clip-path to hide the item
    gsap.set(item, { clipPath: 'inset(0% 100% 0% 0%)' }); // Start hidden from the right

    gsap.to(item, {
      clipPath: 'inset(0% 0% 0% 0%)', // Reveal the item fully
      scrollTrigger: {
        trigger: item,
        start: 'top bottom', // Start when the top of the item hits the bottom of the viewport
        end: 'top center', // End when the top of the item hits the center of the viewport
        scrub: true, // Enable scrub for smooth control
        toggleActions: 'play none none reverse', // Play on enter, do nothing on leave, reverse on leave back
      },
      ease: "power1.in", // Change to easeIn
    });
  });

  // Animate title and subtitle on page load
  const title = document.querySelector('.hero-title');
  const subtitle = document.querySelector('.hero-subtitle');

  // Set initial clip-path and opacity to hide the title and subtitle
  gsap.set(title, { clipPath: 'inset(100% 0% 0% 0%)', opacity: 0, y: 20 }); // Start hidden from the bottom with a slight downward offset
  gsap.set(subtitle, { clipPath: 'inset(100% 0% 0% 0%)', opacity: 0, y: 20 }); // Start hidden from the bottom with a slight downward offset

  // Reveal title and subtitle on page load with stagger
  gsap.to([title, subtitle], {
    clipPath: 'inset(0% 0% 0% 0%)', // Reveal the title and subtitle fully
    opacity: 1, // Fade in the title and subtitle
    y: 0, // Move to original position
    duration: 1., // Increased duration for a slower reveal
    ease: "power1.in", // Easing function
    stagger: 0.5, // Stagger the reveal by 0.5 seconds
  });

  // Scroll-triggered animations for title and subtitle
  const revealTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: title,
      start: 'top top', // Start when the top of the title hits the top of the viewport
      end: 'bottom top', // End when the bottom of the title hits the top of the viewport
      scrub: true, // Enable scrub for smooth control
      toggleActions: 'play reverse play reverse', // Play on enter, reverse on leave
    },
  });

  // Animate subtitle first, then title with stagger
  revealTimeline.to(subtitle, {
    clipPath: 'inset(0% 0% 100% 0%)', // Swipe hide the subtitle
    opacity: 0, // Fade out the subtitle
    duration: 0.5, // Duration for swipe hide
    ease: "power1.in", // Easing function
  });

  revealTimeline.to(title, {
    clipPath: 'inset(0% 0% 100% 0%)', // Swipe hide the title
    opacity: 0, // Fade out the title
    duration: 0.5, // Duration for swipe hide
    ease: "power1.in", // Easing function
    immediateRender: false, // Ensure it waits for the subtitle animation
  });
});