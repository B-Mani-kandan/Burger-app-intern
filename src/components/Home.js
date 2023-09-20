import React from "react";
// import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home(props) {
  const notify = () => toast("✅Successfully Booked your Table");
  return (
    <div>
      <header className="py">
        <div className="container">
          <nav className="navbar navbar-expand-md">
            <a href={"/"} className="navbar-brand">
              <img src="./img/logo.png" alt="Burger House" />
            </a>
            <button
              className="navbar-toggler"
              data-bs-target="#nav"
              data-bs-toggle="collapse"
            >
              <span className="fas fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="nav">
              <div className="ms-auto">
                <div className="desktop">
                  <img
                    src={"./img/bike.png"}
                    alt="bike image"
                    aria-hidden="true"
                  />
                  <span>Express Delivery +1234 567 890</span>
                </div>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" href={"/"}>
                      home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href={"Menu"}>
                      menu
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href={"Contact"}>
                      contact us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href={"Login"}>
                      {props.name ? `Welcome - ${props.name}` : "Login please"}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#">
                      <i className="fas fa-shopping-cart fa-lg"></i>
                      <span>0</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="row">
            <div className="content col-md-7 col-lg-6 d-flex justify-content-center flex-column">
              <h4>It is a good time for the great taste of burgers</h4>
              <h1>burger</h1>
              <h2>week</h2>
            </div>
            <div className="col-md-5 col-lg-6">
              <img
                className="img-fluid"
                src="./img/burger.png"
                alt="burger with drink"
              />
            </div>
          </div>
        </div>
      </header>
      <section className="popular container py">
        <div className="row">
          <div className="col-md-6">
            <div className="dish">
              <img className="img-fluid" src="./img/dish-1.png" alt="dish-1" />
              <div className="details">
                <h4>try it today</h4>
                <h2>Most popular burger</h2>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column">
            <div className="dish">
              <img className="img-fluid" src="./img/dish-2.png" alt="dish-2" />
              <div className="details">
                <h4>try it today</h4>
                <h2>
                  More fun
                  <br />
                  more taste
                </h2>
              </div>
            </div>
            <div className="dish mt-auto">
              <img className="img-fluid" src="./img/dish-3.png" alt="dish-3" />
              <div className="details">
                <h4>try it today</h4>
                <h2>fresh & chili</h2>
              </div>
            </div>
          </div>
          <button className="text-center">Always tasty burger</button>
        </div>
      </section>

      <section className="order py container">
        <h1>choose & enjoy</h1>
        <p>
          Choose from our delectable menu and savor every bite – it's time to
          enjoy a culinary delight that will satisfy your taste buds!
        </p>
        <div className="row align-items-end justify-content-between">
          <div className="col-md-4">
            <img className="img-fluid" src="./img/burger-1.png" alt="burger1" />
            <h2>Beef burger</h2>
            <p>
              Savor the juiciest beef burger, perfectly seasoned and grilled to
              perfection, a mouthwatering delight in every bite.
            </p>
            <button className="btn btn-lg">ORDER NOW</button>
          </div>
          <div className="col-md-4">
            <img className="img-fluid" src="./img/burger-1.png" alt="burger2" />
            <h2>BBQ burger</h2>
            <p>
              Indulge in our BBQ burger, a smoky sensation with savory flavors
              that ignite your taste buds, pure burger bliss.
            </p>
            <button className="btn btn-lg">ORDER NOW</button>
          </div>
          <div className="col-md-4">
            <img className="img-fluid" src="./img/burger-1.png" alt="burger3" />
            <h2>Chicken burger</h2>
            <p>
              Indulge in our savory chicken burger, featuring tender, flavorful
              chicken nestled in a soft bun for an irresistible taste.
            </p>
            <button className="btn btn-lg">ORDER NOW</button>
          </div>
        </div>
      </section>

      <section className="slider container">
        <div>
          <div className="owl-theme owl-carousel">
            <div className="item row">
              <div className="col-md-6">
                <h5>DISCOVER</h5>
                <h3>UPCOMING EVENTS</h3>
                <p>
                  Stay tuned for exciting upcoming events at our burger shop!
                  Join us for mouthwatering burger challenges, live music
                  nights, themed food festivals, and exclusive offers. Whether
                  you're a burger enthusiast or just looking for a fun dining
                  experience, our events promise great food, entertainment, and
                  a welcoming atmosphere. Keep an eye on our website and social
                  media for event announcements, dates, and reservations. Don't
                  miss out on the next delicious adventure at our burger home!
                </p>
              </div>
              <div className="col-md-6">
                <img
                  className="img-fluid"
                  src="./img/slider.png"
                  alt="Burger"
                />
              </div>
            </div>
            {/* <div className="item row">
              <div className="col-md-6">
                <h5>DISCOVER</h5>
                <h3>UPCOMING EVENTS</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  neque laboriosam eum, officiis consequatur corrupti tempore
                  eaque voluptatibus optio facilis ab. Veniam deserunt,
                  voluptatum quasi optio at dolorum cumque illo sit qui
                  inventore recusandae iusto. Aut molestias facere officiis
                  deleniti consectetur officia quisquam soluta aliquam
                  exercitationem quod suscipit, odit laboriosam.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  className="img-fluid"
                  src="./img/slider.png"
                  alt="Burger"
                />
              </div>
            </div>
            <div className="item row">
              <div className="col-md-6">
                <h5>DISCOVER</h5>
                <h3>UPCOMING EVENTS</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  neque laboriosam eum, officiis consequatur corrupti tempore
                  eaque voluptatibus optio facilis ab. Veniam deserunt,
                  voluptatum quasi optio at dolorum cumque illo sit qui
                  inventore recusandae iusto. Aut molestias facere officiis
                  deleniti consectetur officia quisquam soluta aliquam
                  exercitationem quod suscipit, odit laboriosam.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  className="img-fluid"
                  src="./img/slider.png"
                  alt="Burger"
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <div className="reservation">
        <div className="container py text-center">
          <h4>RESERVATION</h4>
          <h1>BOOK YOUR TABLE</h1>
          <form className="row">
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <input type="text" placeholder="Name" />
              <input type="date" placeholder="Date" />
              <input type="number" placeholder="People" />
            </div>
            <div className="col-md-4">
              <input type="email" placeholder="Email" />
              <input type="time" placeholder="Time" />
              <input
                type="submit"
                className="booktable"
                onClick={notify}
                name="submit"
                value="Book Table"
              />
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>

      <footer className="py">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-xl-5">
              <img
                className="img-fluid"
                src="./img/logo-white.png"
                alt="Burger logo"
              />
              <p>
                35, A.N. Elumalai Salai, near by Vinayagar Kovil, Moovendhar
                Nagar, Ashok Brindavan, Iyyappanthangal, Chennai, Tamil Nadu
                600077
              </p>
            </div>
            <div className="col-md-1 col-lg-2 col-xl-3"></div>
            <div className="col-md-5 col-lg-5 col-xl-4">
              <h4>
                <i className="fas fa-map-marker-alt"></i>Elumalai Salai, Burger
                Home, Tamil Nadu
              </h4>
              <h4>
                <i className="fas fa-envelope"></i>info@burgerhome.com
              </h4>
              <h4>
                <i className="fas fa-heart"></i>Developed by Manikandan
                B,Thiruvarur
              </h4>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <p>&copy;Burger Home 2023. all rights reseved.</p>
            <ul>
              <li>
                <a href="/#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/_soul_fury_/">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="/#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://wa.me/6379763494">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/manikandan-33">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
