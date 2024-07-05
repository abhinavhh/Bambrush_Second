// Home.tsx

import { useEffect, useRef } from 'react';
import image2 from '../assets/pexels-cottonbro-3737585.jpg';
import image1 from '../assets/pexels-marcus-aurelius-9788574.jpg'; // Replace with actual image path
import image3 from '../assets/pexels-mikhail-nilov-7814625.jpg'; // Replace with actual image path
import './home.css';

export default function Home() {
  const featuresData = [
    {
      title: 'Who we are and What we do',
      description:
        'At BamBrush, we are dedicated to providing eco-friendly products to businesses all over the world. Our mission is to reduce plastic waste and save the environment for future generations. We source the best bamboo from rural Vietnam farms to keep our prices low and affordable to businesses. Our goal is to change the attitude of how businesses buy plastic products and educate them on sustainable alternatives.',
      image: image1,
      alt: 'image1',
    },
    {
      title: 'The Plastic Pollution Problem',
      description:
        'Plastic pollution is one of the biggest environmental problems we face today. Over 264 million plastic toothbrushes are thrown away each year in the UK alone, contributing to the problem. This plastic waste harms wildlife and the environment. Businesses need to take responsibility and choose sustainable alternatives to help solve this problem.',
      image: image2,
      alt: 'image2',
    },
    {
      title: 'Bamboo Toothbrush - The Sustainable Solution',
      description:
        'Bamboo Toothbrush offers an affordable and sustainable solution to the plastic pollution problem. Our toothbrushes are made from bamboo, a renewable and biodegradable material. By choosing our bamboo toothbrushes, businesses can reduce their carbon footprint and help eliminate plastic waste.',
      image: image3,
      alt: 'image3',
    },
  ];

  // Refs for elements to animate
  const imageRefs = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      // Trigger animation for each features section and respective image
      featuresData.forEach((_feature, index) => {
        const featuresRef = document.getElementById(`feature-${index}`);
        const imageTop = imageRefs.current[index]?.getBoundingClientRect().top || 0;

        if (featuresRef && imageTop < windowHeight * 0.75) {
          featuresRef.classList.add('animate-fadeInLeft');
          imageRefs.current[index].classList.add('animate-fadeInUp');
        }
      });
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [featuresData]);

  return (
    <>
      <section className="card-container">
        <div className="container">
          <h1>Welcome to Bambrush</h1>
          <h3>Introducing Bamboo Toothbrush - The Sustainable Alternative to Plastic Toothbrushes</h3>
        </div>
      </section>
      <div className="main-content">
        {featuresData.map((feature, index) => (
          <div key={index} id={`feature-${index}`} className="features animate-fadeInRight">
            <div className="image-field">
              <img ref={(el) => (imageRefs.current[index] = el as HTMLImageElement)} src={feature.image} alt={feature.alt} />
            </div>
            <div className="features-container">
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
