import React, { Component } from "react";
class Services extends Component {
  render() {
    return (
      <div>
        {/* <section class="inner-page-banner" id="home">
            </section> */}

        <div class="breadcrumb-agile">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Services
            </li>
          </ol>
        </div>

        <section class="what-we-do py-5">
          <div class="container py-md-5">
            <h3 class="heading text-center mb-3 mb-sm-5">Sherbimet tona</h3>
            <div class="row what-we-do-grid">
              <div class="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0">
                <img
                  src="assets/images/sp1.jpg"
                  class="img-fluid krehjeimg"
                  alt=""
                />
              </div>
              <div class="col-lg-3 col-md-6 bg-grid-clr">
                <h4 class="mt-md-0 my-2">Krehje</h4>
                <p class="">Nxirrni rrezatimin edhe bukurine e flokeve tuaj.</p>
              </div>
              <div class="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0 mt-lg-0 mt-4">
                <img
                  src="assets/images/sp2.jpg"
                  class="img-fluid lyerjeimg"
                  alt=""
                />
              </div>
              <div class="col-lg-3 col-md-6 bg-grid-clr mt-lg-0 mt-md-4">
                <h4 class="mt-md-0 my-2">Lyerje</h4>
                <p class="">
                  Zbuloni anen tuaj te re me sherbimet e lyerjes te flokeve.
                </p>
              </div>

              <div class="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0 mt-lg-5 mt-4">
                <img
                  src="assets/images/sp3.jpg"
                  class="img-fluid depilimimg"
                  alt=""
                />
              </div>
              <div class="col-lg-3 col-md-6 bg-grid-clr mt-lg-5 mt-md-4">
                <h4 class="mt-md-0 my-2">Depilim</h4>
                <p class="">
                  Bute edhe embel, depilim i bere ne menyren e duhur
                </p>
              </div>
              <div class="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0 mt-lg-5 mt-4">
                <img
                  src="assets/images/sp4.jpg"
                  class="img-fluid manikyrimg"
                  alt=""
                />
              </div>
              <div class="col-lg-3 col-md-6 bg-grid-clr mt-lg-5 mt-md-4">
                <h4 class="mt-md-0 my-2">Manikyr</h4>
                <p class="">
                  Thonj perfekt edhe te shndritshem, manikyr i bere me se miri.
                </p>
              </div>
              <div class="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0 mt-lg-5 mt-4">
                <img
                  src="assets/images/sp5.jpg"
                  class="img-fluid pedikyrimg"
                  alt=""
                />
              </div>
              <div class="col-lg-3 col-md-6 bg-grid-clr mt-lg-5 mt-md-4">
                <h4 class="mt-md-0 my-2">Pedikyr</h4>
                <p class="">Shijoni luksin e sherbimeve tona te pedikjurit.</p>
              </div>
              <div class="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0 mt-lg-5 mt-4">
                <img
                  src="assets/images/sp6.jpg"
                  class="img-fluid makeupimg"
                  alt=""
                />
              </div>
              <div class="col-lg-3 col-md-6 bg-grid-clr mt-lg-5 mt-md-4">
                <h4 class="mt-md-0 my-2">Makeup</h4>
                <p class="">
                  Zbuloni bukurine tuaj te brendshme me sherbimet tona te
                  makeup-it.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="stats-count">
          <div class="overlay fotomes py-5">
            <div class="container py-md-5">
              {/* <div class="row text-center">
                <div class="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info ">
                  <h5>700</h5>
                  <h6 class="pt-2">Clients</h6>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info">
                  <h5>250 +</h5>
                  <h6 class="pt-2">Awards</h6>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info">
                  <h5>150</h5>
                  <h6 class="pt-2">styles</h6>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info">
                  <h5>125</h5>
                  <h6 class="pt-2">Men spas</h6>
                </div>
              </div> */}
            </div>
          </div>
        </section>

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
        </section> */}
      </div>
    );
  }
}
export default Services;
