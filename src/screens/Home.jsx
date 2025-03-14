import React, { useEffect } from "react";
import Card from "../components/Card";
import Heading from "../components/Heading";
import HeroSection from "../components/HeroSection";
import Testimonial from "../components/Testimonials";



function Home({ apidata } ) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroSection />
      <Heading head="Products" />
      <div className="card-container">
        {apidata &&
          apidata.map((product) => (
            <Card
              key={product?.id}
              title={product?.title}
              image={product?.image}
              price={product?.price}
            />
          ))}
      </div>
      <Heading head="Testimonials" />
      <Testimonial />
    </>
  );
}

export default Home;
