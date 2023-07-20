import React, { useState, useEffect } from 'react';

const About = () => {
  const testimonials = [
    {
      id: 1,
      image: 'https://i.pinimg.com/736x/31/bc/ce/31bcce221b74e84de5b9f25721ae77d8.jpg',
      text: 'Cualquier cosa que acelere tu corazon vale la pena'
    },
    {
      id: 2,
      image: 'https://pps.whatsapp.net/v/t61.24694-24/361146037_1297803287764282_993166041953139149_n.jpg?ccb=11-4&oh=01_AdRKhAC4dJg2ZlXsP-S6n55LsFz6kuzt-U_c3bGuSkrTjg&oe=64C476C9',
      text: 'Para muchos deportes se necesita una pelota. Para montar en moto se necesitan dos.'
    },
    {
      id: 3,
      image: 'https://s3.eu-west-1.amazonaws.com/cdn.motorbikemag.es/wp-content/uploads/2019/01/Yamaha-YZF-R1-2019-06-1200x800.jpg',
      text: 'Te puedes olvidar de tu rutina diaria cuando a tus rodillas les pegue la brisa.'
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [testimonials.length]);

  return (
    <section className="about" id="about">
      <div className="content">
        <div className="title">
          <span>Quienes Somos</span>
        </div>
        <div className="about-details">
          <div className="left">
            <div id="testimonial-carousel" className="carousel">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`testimonial ${index === currentTestimonialIndex ? 'active' : ''}`}
                >
                  <img src={testimonial.image} alt={`Testimonio ${testimonial.id}`} />
                  <p>{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="right">
            <div className="topic">¡Saludos a todos los entusiastas de las motos deportivas Yamaha!</div>
            <p>
              Bienvenidos a nuestro apasionado y vibrante club de motos deportivas Yamaha. Nos complace darles la bienvenida a nuestra página web, donde encontrarán todo lo que necesitan saber sobre nuestra comunidad de amantes de las motocicletas.
              Somos un grupo de personas apasionadas por la velocidad, la adrenalina y la emoción que brinda el mundo de las motos deportivas Yamaha. Nos reunimos para compartir experiencias, conocimientos y aventuras, mientras disfrutamos de la incomparable sensación de libertad que solo una moto deportiva puede ofrecer.
              ¡Prepárense para sentir la potencia, la emoción y la verdadera libertad sobre dos ruedas!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;