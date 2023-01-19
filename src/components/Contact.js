import React, { Component } from "react";
import { Link } from "react-router-dom";
class Contact extends Component {
  render() {
    return (
      <div>
        <section class="inner-page-banner" id="home"></section>
        <div class="breadcrumb-agile">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Contact Us
            </li>
          </ol>
        </div>
        <section class="content-info py-5">
          <div class="container py-md-5">
            <div class="text-center px-lg-5">
              <h3 class="heading text-center mb-3 mb-sm-5">Contact Us</h3>
              <div class="title-desc text-center px-lg-5">
                <p class="px-lg-5 sub-wthree">
                  Praesent ullamcorper dui turpis.At vero eos et accusam et
                  justo duo dolores et ea rebum.Integer sit amet mattis quam,
                  sit amet ultricies velit. Praesent ullamcorper dui turpis.
                  Praesent ullamcorper dui turpis.
                </p>
              </div>
            </div>
            <div class="contact-w3pvt-form mt-5">
              <form action="#" class="w3layouts-contact-fm" method="post">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label>First Name</label>
                      <input
                        class="form-control"
                        type="text"
                        name="Name"
                        placeholder=""
                        required=""
                      />
                    </div>
                    <div class="form-group">
                      <label>Last Name</label>
                      <input
                        class="form-control"
                        type="text"
                        name="Name"
                        placeholder=""
                        required=""
                      />
                    </div>
                    <div class="form-group">
                      <label>Email</label>
                      <input
                        class="form-control"
                        type="email"
                        name="Email"
                        lowercase
                        placeholder=""
                        required=""
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label>Write Message</label>
                      <textarea
                        class="form-control"
                        name="Message"
                        placeholder=""
                        required=""
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group mx-auto mt-3">
                    <button type="submit" class="btn submit">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        <div class="map-w3layouts">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.065426123706!2d19.778534903111755!3d41.32919064609205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x920846f206994e7b!2sLOLA%20Hair%20%2C%20Nails%20%2C%20Beauty%20Salon!5e0!3m2!1sen!2s!4v1674063944973!5m2!1sen!2s"
            allowfullscreen=""
          ></iframe>
        </div>
      </div>
    );
  }
}
export default Contact;
