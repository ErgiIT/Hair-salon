import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer class="footer-content">
        <div class="layer footer">
          <div class="container-fluid">
            <div class="row footer-top-inner-w3ls">
              <div class="col-lg-4 col-md-6 footer-top ">
                <h2>
                  <a href="index.html">Parukeri Estetike Lola</a>
                </h2>
                <p class="my-3">
                  Parukeri Estetike Lola eshte destinacioni juaj per nje
                  eksperience te personalizuar edhe luksoze te stilimit te
                  flokeve
                </p>
                <p>
                  {/* Our skilled stylists are dedicated to helping you achieve your
                  desired look and make you feel beautiful inside and out. */}
                  Ne jemi te dedikuar t'ju ndihmojme te arrini pamjen tuaj te
                  deshiruar edhe t'ju bejm te ndiheni me te bukur nga brenda
                  edhe nga jashte
                </p>
              </div>
              <div class="col-lg-4 col-md-6 mt-md-0 mt-5">
                <div class="footer-w3pvt">
                  <h3 class="mb-3 w3pvt_title">Orari i Punes</h3>
                  <hr />
                  <ul class="list-info-w3pvt last-w3ls-contact mt-lg-4">
                    <li>
                      <p> Hene - Shtune 09.00 - 21.00 </p>
                    </li>
                    <li class="my-2">
                      <p>Diel - Pushim</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 mt-lg-0 mt-5">
                <div class="footer-w3pvt">
                  <h3 class="mb-3 w3pvt_title">Na kontaktoni</h3>
                  <hr />
                  <div class="last-w3ls-contact">
                    <p>Email: parukeriestetikelola@gmail.com</p>
                  </div>
                  <div class="last-w3ls-contact my-2">
                    <p> Numri i telefonit: 0699150761 </p>
                  </div>
                  <div class="last-w3ls-contact">
                    <p>
                      Adresa: Rruga Mikel Maruli
                      <br />
                      Astir, Tirane
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p class="copy-right-grids text-li text-center my-sm-4 my-4">
              © 2023 Parukeri Estetike Lola. All Rights Reserved
            </p>
            <div class="w3ls-footer text-center mt-4">
              <ul class="list-unstyled w3ls-icons">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100062927576863"
                    target="blank"
                  >
                    <span class="fa fa-facebook-f"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/parukeriestetikelola/?hl=en"
                    target="blank"
                  >
                    <span class="fa fa-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="move-top text-right">
              <a href="#home" class="move-top">
                {" "}
                <span class="fa fa-angle-up  mb-3" aria-hidden="true"></span>
              </a>
            </div>
          </div>
          {/* <!-- //footer bottom --> */}
        </div>
      </footer>
    );
  }
}
export default Footer;
