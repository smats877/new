import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Slider */}
      <div className="container-fluid">
        <img
          src="\src\components\cars.jpg"
          className="d-block w-100"
          alt="Slider 1"
        />
      </div>

      {/* About Us Section */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h2>About Us</h2>
            <p>
              Welcome to SMAT Car Modification, where innovation meets
              automotive excellence. Our passion for cars and dedication to
              cutting-edge technology drive us to provide you with the most
              advanced and efficient solutions for enhancing your vehicle's
              performance. At SMAT Car Modification, we bring together a team of
              experienced engineers and automotive enthusiasts who specialize in
              applying the Surface Mechanical Attrition Treatment (SMAT)
              technique to transform your car into a true masterpiece. With a
              commitment to quality, safety, and innovation, we've earned a
              reputation for excellence in the world of automotive
              modifications.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="\src\components\cars1.jpg"
              className="img-fluid"
              alt="About Us"
            />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mt-5">
        <h2>Customer Testimonials</h2>
        <div className="row">
          {/* Testimonial 1 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  "I can't express how impressed I am with SMAT Car
                  Modification. They transformed my ordinary car into a
                  high-performance machine. The increased power and efficiency
                  are beyond my expectations. Highly recommended!"
                </p>
                <p className="text-muted">- John Doe - Car Enthusiast</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  "SMAT Car Modification truly understands the art of automotive
                  enhancement. They not only improved my car's performance but
                  also ensured it remained street-legal and safe. I'm thrilled
                  with the results!"
                </p>
                <p className="text-muted">- Sarah Smith - Happy Customer</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  "As a fellow SMAT enthusiast, I was delighted to find a
                  modification shop that shares my passion. The team at SMAT Car
                  Modification is knowledgeable, professional, and genuinely
                  cares about their customers' satisfaction. They've earned a
                  customer for life."
                </p>
                <p className="text-muted">- Mike Johnson - SMAT Enthusiast</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
