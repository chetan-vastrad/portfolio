import { useState } from "react";
import "./Projects.css";
import todo from "../assets/project/todo.png";
import lone from "../assets/project/lone.png";
import ltwo from "../assets/project/ltwo.png";
import lthree from "../assets/project/lthree.png";
import cart from "../assets/project/cart.png";
const Projects = () => {
  const images = [
    {
      image: todo,
      heading: "React To-Do App",
      subheading: "This To-Do application allows users to effortlessly manage daily tasks. With a clean and intuitive user interface, it supports adding, deleting, editing, and marking tasks as completed. Built using React functional components, hooks, and state management, this project demonstrates proficiency in core React concepts and clean UI practices.",
      links: [
        { text: "Learn More", url: "#link1" },
      ],
    },
    {
      image: lone,
      heading: "Product Launch Landing Page",
      subheading: "A high-converting, visually appealing landing page designed to introduce and promote a new product or service.Crafted with modern UI elements and responsive design, this page includes a compelling hero section, feature highlights, and a strong call-to-action to drive user engagement.",
      links: [
        { text: "Learn More", url: "#link1" }
      ],
    },
    {
      image: ltwo,
      heading: "Service-Based Landing Page",
      subheading: "An informative and clean landing page built to showcase business services with clarity and impact.The layout is optimized for conversion, featuring service descriptions, testimonials, and a contact form to convert visitors into leads.",
      links: [
        { text: "Learn More", url: "#link1" },
      ],
    },
    {
      image: lthree,
      heading: "Event Promotion Landing Page",
      subheading: "An engaging landing page built to promote an upcoming event, workshop, or webinar.Includes event details, speaker sections, schedule highlights, and a user-friendly registration form—all crafted for a seamless user experience across devices.",
      links: [
        { text: "Learn More", url: "#link1" },
      ],
    },
    {
      image: cart,
      heading: "E-Commerce Landing Page",
      subheading: "A sleek and conversion-focused landing page built to highlight featured products and drive online sales.This responsive and user-friendly design includes a promotional hero banner, product highlights, testimonials, and clear calls-to-action. It showcases modern UI/UX principles and React-based component structuring for optimal performance and scalability.",
      links: [
        { text: "Learn More", url: "#link1" },
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div>
      <div className="project-section">
        <div className="project-heading">
          <h2>⚙️ Projects</h2>
          <p>
            Key Projects & Innovations: Showcasing My Journey in Technology and
            Design
          </p>
        </div>
        {/* <div className="carousel">
          <button className="prev" onClick={prevSlide}>
            &#10094;
          </button>
          <div className="carousel-content">
            <div className="carousel-image">
              <img
                src={images[currentIndex].image}
                alt={`Slide ${currentIndex + 1}`}
              />
            </div>
            <div className="carousel-text">
              <h2>{images[currentIndex].heading}</h2>
              <p>{images[currentIndex].subheading}</p>
              <div className="carousel-links">
                {images[currentIndex].links.map((link, index) => (
                  <a key={index} href={link.url}>
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <button className="next" onClick={nextSlide}>
            &#10095;
          </button>
        </div> */}
        <div className="all-projects">
          <div className="project">
            <img src={todo} alt="To Do Image"/>
            <h3>React To-Do App</h3>
            <p>Take Control of Your Day with a Sleek, Powerful To-Do App Built in React</p>
            <a href="https://sampletodolists.netlify.app/" target="_blank"><button>View Live</button></a>
          </div>
          <div className="project">
            <img src={lone} alt=""/>
            <h3>Product Launch Landing Page</h3>
            <p>Get Ready for a Smarter, Sleeker Way to [Do Something] — The Future Is Here</p>
            <a href="https://app-scrip-store.netlify.app/" target="_blank"><button>View Live</button></a>
          </div>
          <div className="project">
            <img src={ltwo} alt=""/>
            <h3>Service-Based Landing Page</h3>
            <p>From Strategy to Execution — End-to-End Services That Drive Growth</p>
            <a href="https://sensational-fox-38afcd.netlify.app/" target="_blank"><button>View Live</button></a>
          </div>
          <div className="project">
            <img src={cart} alt=""/>
            <h3>E-Commerce Landing Page</h3>
            <p>Shop the Latest Trends, Best Deals, and Must-Have Essentials—All in One Place</p>
            <a href="https://yayitsbogo.netlify.app/" target="_blank"><button>View Live</button></a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
