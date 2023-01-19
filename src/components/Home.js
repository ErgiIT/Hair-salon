import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        //{" "}
        {/* <!-- //header -->
// <!-- banner --> */}
        <div class="banner_w3lspvt" id="home">
          <div class="csslider infinity" id="slider1">
            <input type="radio" name="slides" id="slides_1" />
            <input type="radio" name="slides" id="slides_2" />
            <input type="radio" name="slides" id="slides_3" />
            <input type="radio" name="slides" id="slides_4" />

            <ul class="banner_slide_bg">
              <li>
                <div class="slider-info bg1">
                  <div class="bs-slider-overlay">
                    <div class="banner-text">
                      <div class="container">
                        <h2 class="movetxt agile-title text-capitalize">
                          {/* Unleash the beauty within, at our salon */}
                          Zbuloni bukurine tuaj ne parukerine tone
                        </h2>
                        {/* <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. It has survived not only five
                          centuries.
                        </p> */}
                        <div className="rezervimi">
                          <a href="#rezervoni">Rezervoni Tani</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="slider-info bg2">
                  <div class="bs-slider-overlay1">
                    <div class="banner-text">
                      <div class="container">
                        <h4 class="movetxt agile-title text-capitalize">
                          {/* Transform your look, transform your life */}
                          Transformoni pamjen, transformoni jeten tuaj{" "}
                        </h4>
                        {/* <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. It has survived not only five
                          centuries.
                        </p> */}
                        <div className="rezervimi">
                          <a href="#rezervoni">Rezervoni Tani</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="slider-info bg3">
                  <div class="bs-slider-overlay1">
                    <div class="banner-text">
                      <div class="container">
                        <h2 class="movetxt agile-title text-capitalize">
                          {/* Elevate your style, elevate your confidence */}
                          Pemiresoni stilin, permiresoni konfidencen tuaj
                        </h2>
                        {/* <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. It has survived not only five
                          centuries.
                        </p> */}
                        <div className="rezervimi">
                          <a href="#rezervoni">Rezervoni Tani</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="slider-info bg4">
                  <div class="bs-slider-overlay1">
                    <div class="banner-text">
                      <div class="container">
                        <h4 class="movetxt agile-title text-capitalize">
                          {/* Where beauty meets elegance */}
                          Aty ku bukuria takon elegancen{" "}
                        </h4>
                        {/* <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. It has survived not only five
                          centuries.
                        </p> */}
                        <div className="rezervimi">
                          <a href="#rezervoni">Rezervoni Tani</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="navigation">
              <div>
                <label for="slides_1"></label>
                <label for="slides_2"></label>
                <label for="slides_3"></label>
                <label for="slides_4"></label>
              </div>
            </div>
          </div>
        </div>
        //{" "}
        {/* <!-- //banner -->
//  <!-- banner bottom grids --> */}
        <section class="content-info py-5" id="about">
          <div class="container py-md-5">
            <h3 class="heading text-center mb-3 mb-sm-5">Rreth Nesh</h3>

            <div class="info-w3pvt-mid text-center px-lg-5">
              <div class="title-desc text-center px-lg-5">
                <img
                  src="assets/images/about1.png"
                  alt="news image"
                  class="img-fluid"
                />
                <p class="px-lg-5">
                  {/* "Parukeri Estetike Lola" is a premier women's hair salon that
                  was founded in 2014 by a passionate stylist Lola. From the
                  moment you walk through our doors, you will be greeted with a
                  warm and welcoming atmosphere. Our salon is dedicated to
                  providing our clients with a luxurious and personalized hair
                  styling experience. We believe that every woman deserves to
                  feel beautiful, and our team of skilled stylists is committed
                  to helping you achieve your desired look. Our salon is
                  equipped with the latest technology and products to ensure
                  that you receive the highest quality services. Since our
                  opening, we have been continuously growing and expanding our
                  business, and we are proud to say that we have built a loyal
                  clientele base. At "Parukeri Estetike Lola" we strive to
                  provide you with an unforgettable hair styling experience,
                  where beauty meets elegance. */}
                  Parukeri & Estetikë Lola eshte nje sallon bukurie elitar i
                  cili eshte hapur ne 2014 nga Lola, nje parukiere pasionante.
                  Qe ne momentin e pare qe hyni ne ambjentet e sallonit tone do
                  te perballeni me nje atmosfere te ngrohte dhe mikpritese.
                  Salloni yne eshte i dedikuar per t’ju ofruar nje eksperience
                  unike. Ne besojme se cdo grua e meriton te ndihet e bukur dhe
                  ne jemi te gatshem t’ju ndihmojme tr arrini pamjen qe ju
                  deshironi. Salloni yne eshte i pajisur me teknologjine e
                  fundit dhe produktet me te mira me qellim qe te sigurohemi se
                  ju do te merrni sherbime te kualitetit me te larte. Qe ne
                  nisjen e punes tone, ne jemi kujdesur qe te rritemi dhe te
                  zgjerohemi si biznes, duke arritur te krijojme nje klientele
                  besnike. Ne Parukeri & Estetike Lola ju do te perballeni me
                  nje eksperience te paharrueshme, ku bukuria takon elegancen!
                </p>

                <Link
                  to="/about"
                  class="btn mt-lg-4 mt-3 read scroll"
                  role="button"
                >
                  Mesoni me shum
                </Link>
              </div>
            </div>
          </div>
        </section>
        //{" "}
        {/* <!-- //banner bottom grids -->

//  <!-- /services --> */}
        <section class="services py-5" id="services">
          <div class="container py-md-5">
            <h3 class="heading text-center mb-3 mb-sm-5">Sherbime</h3>
            <div class="row ab-info">
              <div class="col-md-6 ab-content ab-content1">
                <div class="ab-content-inner">
                  <Link to="/services">
                    <img
                      src="assets/images/services1.jpg"
                      alt="news image"
                      class="img-fluid krehje"
                    />
                  </Link>
                  <div class="ab-info-con">
                    <h4> Krehje</h4>
                    <Link
                      to="/services"
                      class="read-more two btn m-0 px-3"
                      role="button"
                    >
                      <span class="fa fa-arrow-circle-o-right"> </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-md-6 ab-content ab-content1">
                <div class="ab-content-inner">
                  <Link to="/gallery">
                    <img
                      src="assets/images/s1.jpg"
                      alt="news image"
                      class="img-fluid"
                    />
                  </Link>
                  <div class="ab-info-con">
                    <h4>Produkte </h4>
                    <a href="gallery" class="read-more two btn m-0 px-3">
                      <span class="fa fa-arrow-circle-o-right"> </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row ab-info second mt-lg-4">
              <div class="col-md-3 ab-content">
                <div class="ab-content-inner">
                  <Link to="/services">
                    <img
                      src="assets/images/ser3.jpg"
                      alt="news image"
                      class="img-fluid depilim"
                    />
                  </Link>
                  <div class="ab-info-con">
                    <h4>Depilim</h4>
                    <a href="services" class="read-more two btn m-0 px-3">
                      <span class="fa fa-arrow-circle-o-right"> </span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-3 ab-content">
                <div class="ab-content-inner">
                  <Link to="/services">
                    <img
                      src="assets/images/ser4.jpg"
                      alt="news image"
                      class="img-fluid manikyr"
                    />
                  </Link>
                  <div class="ab-info-con">
                    <h4>Manikyr</h4>
                    <a href="services" class="read-more two btn m-0 px-3">
                      <span class="fa fa-arrow-circle-o-right"> </span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-3 ab-content">
                <div class="ab-content-inner">
                  <Link to="/services">
                    <img
                      src="assets/images/ser5.jpg"
                      alt="news image"
                      class="img-fluid"
                    />
                  </Link>
                  <div class="ab-info-con">
                    <h4>Pedikyr</h4>
                    <a href="services" class="read-more two btn m-0 px-3">
                      <span class="fa fa-arrow-circle-o-right"> </span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-3 ab-content">
                <div class="ab-content-inner">
                  <Link to="/services">
                    <img
                      src="assets/images/services2.jpg"
                      alt="news image"
                      class="img-fluid"
                    />
                  </Link>
                  <div class="ab-info-con">
                    <h4>Lyerje</h4>
                    <a href="services" class="read-more two btn m-0 px-3">
                      <span class="fa fa-arrow-circle-o-right"> </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* // <!-- /services -->
 
//   <!--/order-now--> */}
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
        //{" "}
        <div class="map-w3layouts">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.065426123706!2d19.778534903111755!3d41.32919064609205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x920846f206994e7b!2sLOLA%20Hair%20%2C%20Nails%20%2C%20Beauty%20Salon!5e0!3m2!1sen!2s!4v1674063944973!5m2!1sen!2s"
            allowfullscreen=""
          ></iframe>
        </div>
        {/* <!--//order-now-->

//  <!--/testimonials--> */}
        {/* <section class="testimonials py-5" id="testimonials">
          <div class="container py-md-5">
            <h3 class="heading text-center mb-3 mb-sm-5">Client Reviews</h3>
            <div class="row mt-3">
              <div class="col-md-4 test-grid text-left px-lg-3">
                <div class="test-info">
                  <p>
                    Lorem Ipsum has been the industry's standard since the
                    1500s. Praesent ullamcorper dui turpis.
                  </p>
                  <h3 class="mt-md-4 mt-3"> Abraham Smith</h3>

                  <div class="test-img text-center mb-3">
                    <img
                      src="assets/images/test1.jpg"
                      class="img-fluid"
                      alt="user-image"
                    />
                  </div>
                  <div class="mobl-footer test-soc text-center">
                    <ul class="list-unstyled">
                      <li>
                        <a href="#">
                          <span class="fa fa-facebook-f"></span>
                        </a>
                      </li>
                      <li class="mx-1">
                        <a href="#">
                          <span class="fa fa-twitter"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-4 test-grid text-left px-lg-3 py-sm-5 py-md-0 py-3">
                <div class="test-info">
                  <p>
                    Lorem Ipsum has been the industry's standard since the
                    1500s. Praesent ullamcorper dui turpis.
                  </p>
                  <h3 class="mt-md-4 mt-3"> Mariana Noe</h3>
                  <div class="test-img text-center mb-3">
                    <img
                      src="assets/images/test2.jpg"
                      class="img-fluid"
                      alt="user-image"
                    />
                  </div>
                  <div class="mobl-footer test-soc text-center">
                    <ul class="list-unstyled">
                      <li>
                        <a href="#">
                          <span class="fa fa-facebook-f"></span>
                        </a>
                      </li>
                      <li class="mx-1">
                        <a href="#">
                          <span class="fa fa-twitter"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-4 test-grid text-left px-lg-3">
                <div class="test-info">
                  <p>
                    Lorem Ipsum has been the industry's standard since the
                    1500s. Praesent ullamcorper dui turpis.
                  </p>
                  <h3 class="mt-md-4 mt-3">Nebula Nairobi</h3>

                  <div class="test-img text-center mb-3">
                    <img
                      src="assets/images/test3.jpg"
                      class="img-fluid"
                      alt="user-image"
                    />
                  </div>
                  <div class="mobl-footer test-soc text-center">
                    <ul class="list-unstyled">
                      <li>
                        <a href="#">
                          <span class="fa fa-facebook-f"></span>
                        </a>
                      </li>
                      <li class="mx-1">
                        <a href="#">
                          <span class="fa fa-twitter"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        //{" "} */}
        {/* <!--//testimonials-->
// <!-- subscribe --> */}
        {/* <section class="subscribe" id="subscribe">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-5 d-flex subscribe-left p-lg-5 py-sm-5 py-4">
                <div class="news-icon mr-3">
                  <span class="fa fa-paper-plane" aria-hidden="true"></span>
                </div>
                <div class="text">
                  <h3>Subscribe To Our Newsletter</h3>
                </div>
              </div>
              <div class="col-md-7 subscribe-right p-lg-5 py-sm-5 py-4">
                <form action="#" method="post">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email here"
                    required=""
                  />
                  <button class="btn1">
                    <span class="fa fa-paper-plane" aria-hidden="true"></span>
                  </button>
                </form>
                <p>we never share your email with anyone else</p>
              </div>
            </div>
          </div>
        </section>
        //{" "} */}
        {/* <!-- //subscribe -->
// <!-- footer --> */}
      </div>
    );
  }
}
export default Home;
