import React, { Component } from "react";

import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div>
        {/* <!-- banner --> */}
        {/* <section class="inner-page-banner" id="home"></section> */}
        {/* <!-- //banner -->
<!-- page details --> */}
        <div class="breadcrumb-agile">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              About Us
            </li>
          </ol>
        </div>
        {/* <!-- //page details -->
	<!--about-mid --> */}
        <section class="banner-bottom py-5" id="exp">
          <div class="container py-md-5">
            <h3 class="heading text-center mb-3 mb-sm-5">
              Me shume rreth nesh
            </h3>
            <div class="row mid-grids mt-lg-5 mt-3">
              <div class="col-md-5 content-w3pvt-img">
                <img src="assets/images/ab1.jpg" alt="" class="img-fluid" />
              </div>
              <div class="col-md-7 content-left-bottom entry-w3ls-info text-left mt-3">
                <h5 class="mt-1"> Stilime </h5>
                <h4>
                  Stilime te ndryshme
                  <br />
                  te flokeve
                </h4>
                <p class="mt-2 text-left">
                  At "Parukeri Estetike Lola", we pride ourselves on our wide
                  variety of hair styling services. Whether you're looking for a
                  classic cut and color, a trendy new look, or an elegant updo,
                  our team of skilled stylists has the expertise and experience
                  to bring your vision to life. We offer a wide range of
                  services, including cuts, colors, highlights, lowlights,
                  ombre, balayage, extensions, and much more. We use only
                  high-quality products and the latest techniques to ensure that
                  your hair looks and feels its best. In addition, we offer a
                  variety of special treatments such as hair spa, hair masks,
                  and hair oil treatments to nourish and strengthen your hair.
                  We also provide styling services for special occasions like
                  weddings and proms. At "Parukeri Estetike Lola" we understand
                  that every client is unique and we strive to provide a
                  personalized and customized service to meet your individual
                  needs and preferences.
                </p>
              </div>
            </div>
            <div class="row mid-grids mt-lg-5 mt-3 py-3">
              <div class="col-md-7 content-left-bottom entry-w3ls-info text-left mt-3">
                <h5 class="mt-1">Stilime</h5>
                <h4>
                  Varietet per
                  <br />
                  manikyr edhe pedikyr
                </h4>
                <p class="mt-2 text-left">
                  In addition to our hair styling services, "Parukeri Estetike
                  Lola" also offers a wide range of manicure and pedicure
                  options to keep your nails looking their best. Our
                  professional nail technicians provide a variety of services
                  including classic manicures and pedicures, gel manicures,
                  acrylic nails, and nail art. We use high-quality products and
                  sterilized equipment to ensure that your nails are healthy and
                  beautiful. We offer a wide range of colors and designs to
                  choose from, or you can bring in your own inspiration. Our
                  salon also offers a variety of special treatments such as
                  paraffin wax, hot stone, and sea salt scrubs to nourish and
                  hydrate your skin. Our manicure and pedicure services are
                  designed to leave your hands and feet feeling refreshed,
                  relaxed, and rejuvenated. We also provide services for special
                  occasions like weddings and proms. At "Parukeri Estetike Lola"
                  we understand that every client is unique, and we strive to
                  provide a personalized and customized service to meet your
                  individual needs and preferences.
                </p>
              </div>
              <div class="col-md-5 content-w3pvt-img mt-lg-0 mt-3">
                <img src="assets/images/ab2.jpg" alt="" class="img-fluid" />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- //about-mid -->
<!-- states --> */}
        {/* <!--//states -->

 <!--//team --> */}
        {/* <section class="banner-bottom  py-5">
          <div class="container py-md-5">
            <h3 class="heading text-center mb-3 mb-sm-5">Our Team</h3>
            <div class="row mt-lg-5 mt-4">
              <div class="col-md-4 team-gd text-center">
                <div class="team-img mb-4">
                  <img
                    src="assets/images/t1.jpg"
                    class="img-fluid"
                    alt="user-image"
                  />
                </div>
                <div class="team-info">
                  <h3 class="mt-md-4 mt-3">JAMES Men spa</h3>
                  <p>
                    Lorem Ipsum has been the industry's standard since the
                    1500s.
                  </p>
                  <ul class="list-unstyled team-icons mt-4">
                    <li>
                      <a href="#" class="t-icon">
                        <span class="fa fa-facebook-f"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="t-icon">
                        <span class="fa fa-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="t-icon">
                        <span class="fa fa-dribbble"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-md-4 team-gd second text-center my-md-0 my-5">
                <div class="team-img mb-4">
                  <img
                    src="assets/images/t2.jpg"
                    class="img-fluid"
                    alt="user-image"
                  />
                </div>
                <div class="team-info">
                  <h3 class="mt-md-4 mt-3">DEEN MUSTACHIO</h3>
                  <p>
                    Lorem Ipsum has been the industry's standard since the
                    1500s.
                  </p>
                  <ul class="list-unstyled team-icons mt-4">
                    <li>
                      <a href="#" class="t-icon">
                        <span class="fa fa-facebook-f"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="t-icon">
                        <span class="fa fa-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="t-icon">
                        <span class="fa fa-dribbble"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-4 team-gd text-center">
                <div class="team-img mb-4">
                  <img
                    src="assets/images/t3.jpg"
                    class="img-fluid"
                    alt="user-image"
                  />
                </div>
                <div class="team-info">
                  <h3 class="mt-md-4 mt-3"> CLINT HAIRISTA</h3>
                  <p>
                    Lorem Ipsum has been the industry's standard since the
                    1500s.
                  </p>
                  <ul class="list-unstyled team-icons mt-4">
                    <li>
                      <a href="#" class="t-icon">
                        <span class="fa fa-facebook-f"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="t-icon">
                        <span class="fa fa-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="t-icon">
                        <span class="fa fa-dribbble"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section id="rezervoni" class="order-sec py-5">
          <div class="container py-md-5">
            <div class="test-info text-center">
              <h3 class="tittle order">
                <span>NA TELEFONONI QE TE REZERVONI TAKIMIN TUAJ</span>Ne jemi
                gjithmone ne gatishmeri per klientet tane
              </h3>
              <h4 class="tittle my-2">0699150761 </h4>

              {/* <div class="read-more mx-auto m-0 text-center">
                <Link to="/contact" class="read-more scroll btn">
                  Click here
                </Link>
              </div> */}
            </div>
          </div>
        </section>
        <div class="map-w3layouts harta">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.065426123706!2d19.778534903111755!3d41.32919064609205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x920846f206994e7b!2sLOLA%20Hair%20%2C%20Nails%20%2C%20Beauty%20Salon!5e0!3m2!1sen!2s!4v1674063944973!5m2!1sen!2s"
            allowfullscreen=""
          ></iframe>
        </div>
      </div>
    );
  }
}
export default About;
