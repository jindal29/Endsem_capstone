import React from "react";
import "../styles/partials/animations.css";

const testimonials = [
  {
    quote: "This platform changed the way I cook! The recipes are easy to follow and delicious.",
    author: "Priya Sharma",
    img: "/images/chefs/img_1.jpg"
  },
  {
    quote: "A must-visit for every foodie. I love the variety and the presentation!",
    author: "Rahul Mehta",
    img: "/images/chefs/img_2.jpg"
  },
  {
    quote: "The chef tips and community are so helpful. My family loves my new dishes!",
    author: "Sneha Kapoor",
    img: "/images/chefs/img_3.jpg"
  },
  {
    quote: "Simple, beautiful, and inspiring. FoodiesHub is my go-to for meal ideas.",
    author: "Amit Verma",
    img: "/images/chefs/img_4.jpg"
  }
];

export default function TestimonialsSection() {
  return (
    <div className="section testimonials-section">
      <h2 className="title">What Our Users Say</h2>
      <div className="testimonials-container">
        {testimonials.map((t, i) => (
          <div
            className="testimonial-card"
            key={i}
            style={{ animation: `slideInLeft 0.7s ${i * 0.2 + 0.2}s both` }}
          >
            <div className="testimonial-img-wrap">
              <img src={t.img} alt={t.author} className="testimonial-img" />
            </div>
            <p className="testimonial-quote">"{t.quote}"</p>
            <p className="testimonial-author">- {t.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 