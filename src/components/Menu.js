import React from "react";
// import Records from "../records.json";
import Records from "../Productdetails";
import Popup from "../components/Modal/Popup";

function Menu() {
  return (
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
                  <a className="nav-link" href="/#">
                    <i id="cart" className="fas fa-shopping-cart fa-lg"></i>
                    <span>0</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="top-div">
          <h1>The Crispy Burgers</h1>
          <p>
            Try one of our signature Original Crispy Burgers and see what
            everyone’s talking about
          </p>
        </div>
        <div className="container">
          <div className="row" id="menu">
            <div className="card-01">
              <strong>{Records[0].title}</strong>
              <img className="image" src="./img/1" alt="" />
              <p>{Records[0].content}</p>
              <span>&#x20B9;180</span>
              <Popup />
            </div>
            <div className="card-01">
              <strong>{Records[1].title}</strong>
              <img className="image" src="./img/1" alt="" />
              <p>{Records[1].content}</p>
              <span>&#x20B9;350</span>
              <Popup />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row" id="menu">
            <div className="card-01">
              <strong>{Records[1].title}</strong>
              <img className="image" src="./img/1" alt="" />
              <p>{Records[1].content}</p>
              <span>&#x20B9;500</span>
              <Popup />
            </div>
            <div className="card-01">
              <strong>The Original All American Single (1) Burger</strong>
              <img className="image" src="./img/2" alt="" />
              <p>
                Single(1) Certified Angus beef patty,melted American cheese,
                lettuce, pickles, ketchup & mustard on a Toasted Brioche Bun.
              </p>
              <span>&#x20B9;190</span>
              <Popup />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row" id="menu">
            <div className="card-01">
              <strong>The Original All American Double (2)Burger</strong>
              <img className="image" src="./img/2" alt="" />
              <p>
                Double(2) Certified Angus beef patty,melted American cheese,
                lettuce, pickles, ketchup & mustard on a Toasted Brioche Bun.
              </p>
              <span>&#x20B9;370</span>
              <Popup />
            </div>
            <div className="card-01">
              <strong>The Original All American Triple (3) Burger</strong>
              <img className="image" src="./img/2" alt="" />
              <p>
                Triple(3) Certified Angus beef patty,melted American cheese,
                lettuce, pickles, ketchup & mustard on a Toasted Brioche Bun.
              </p>
              <span>&#x20B9;520</span>
              <Popup />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row" id="menu">
            <div className="card-01">
              <strong>
                The Plain Triple (3) Cheese Burger <br />
                (Customize your Burger!)
              </strong>
              <img className="image" id="customize-burg" src="./img/3" alt="" />
              <p>
                Triple (3) Angus beef patties and melted American Cheese on a
                Toasted Brioche Bun.
              </p>
              <span>&#x20B9;520</span>
              <Popup />
            </div>
            <div className="card-01">
              <strong>
                The Plain Double (2) Cheese Burger <br />
                (Customize your Burger!)
              </strong>
              <img className="image" id="customize-burg" src="./img/3" alt="" />
              <p>
                Double (2) Angus beef patties and melted American Cheese on a
                Toasted Brioche Bun.
              </p>
              <span>&#x20B9;370</span>
              <Popup />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row" id="menu">
            <div className="card-01">
              <strong>
                The Plain Single (1) Cheese Burger <br />
                (Customize your Burger!)
              </strong>
              <img className="image" id="customize-burg" src="./img/3" alt="" />
              <p>
                Single (1) Angus beef patty and melted American Cheese on a
                Toasted Brioche Bun.
              </p>
              <span>&#x20B9;190</span>
              <Popup />
            </div>
            <div className="card-01">
              <strong>Crispy’s Chicken Sandwich</strong>
              <img className="image" id="customize-burg" src="./img/4" alt="" />
              <p>
                A Delicious Fried Crispy Chicken Breast with lettuce, tomato,
                and your choice of dressing. Choose your dressing!
              </p>
              <span>&#x20B9;260</span>
              <Popup />
            </div>
          </div>
        </div>
      </div>
      <div className="top-div">
        <h1>The Side Show</h1>
      </div>
      <div className="container">
        <div className="row" id="menu">
          <div className="card-01">
            <strong>French Fries (Regular Size)</strong>
            <img className="image" id="customize" src="./img/5" alt="" />
            <p>
              Golden and crispy on the outside, fluffy and tender on the inside,
              our French fries are the perfect sidekick to any meal
            </p>
            <span>&#x20B9;238</span>
            <Popup />
          </div>
          <div className="card-01">
            <strong>Half Fries - Half Onion Rings</strong>
            <img className="image" id="customize" src="./img/6" alt="" />
            <p>1/2 an order of fries AND 1/2 an order of Onion Rings</p>
            <span>&#x20B9;280</span>
            <Popup />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row" id="menu">
          <div className="card-01">
            <strong>Crispy’s Crazy Fries</strong>
            <img className="image" id="customize-burger" src="./img/7" alt="" />
            <p>
              French Fries topped with Grilled Onions, Melted American Cheese
              and Crispy Sauce (1000 Island).
            </p>
            <span>&#x20B9;250</span>
            <Popup />
          </div>
          <div className="card-01">
            <strong>Hash Brown Patty</strong>
            <img
              className="image"
              id="customize-burgers"
              src="./img/6"
              alt=""
            />
            <p>
              Crispy and golden hash brown patty, a delightful breakfast
              addition.
            </p>
            <span>&#x20B9;100</span>
            <Popup />
          </div>
        </div>
        <div className="top-div">
          <h1>Enjoy Dessert</h1>
        </div>

        <div className="container">
          <div className="row" id="menu">
            <div className="card-01">
              <strong>Coffee Milkshake</strong>
              <img className="image" id="coffe" src="./img/8" alt="" />
              <p>Rich Coffee Ice Cream & Milk with Whipped Cream. 16 oz.</p>
              <span>&#x20B9;100</span>
              <Popup />
            </div>
            <div className="card-01">
              <strong>Strawberry Milkshake</strong>
              <img
                className="image"
                id="customize-burger"
                src="./img/9"
                alt=""
              />
              <p>Strawberry Ice Cream & Milk with Whipped Cream. 16 oz.</p>
              <span>&#x20B9;150</span>
              <Popup />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row" id="menu">
            <div className="card-01">
              <strong>Oreo Shake</strong>
              <img className="image" id="oreo" src="./img/13" alt="" />
              <p>
                Vanilla Ice Cream and Milk blended with Oreo Cookies and topped
                with whipped cream!
              </p>
              <span>&#x20B9;190</span>
              <Popup />
            </div>
            <div className="card-01">
              <strong>Crazy Ding Dong Milkshake</strong>
              <img className="image" id="customize" src="./img/12" alt="" />
              <p>
                Vanilla Ice cream and milk blended with Ding Dongs and Whipped
                Cream on Top. 16 oz.
              </p>
              <span>&#x20B9;200</span>
              <Popup />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row" id="menu">
            <div className="card-01">
              <strong>Chocolate Milkshake</strong>
              <img
                className="image"
                id="customize-burger"
                src="./img/10"
                alt=""
              />
              <p>Milk Chocolate Ice Cream & Milk with Whipped Cream 16 oz.</p>
              <span>&#x20B9;150</span>
              <Popup />
            </div>
            <div className="card-01">
              <strong>Vanilla Milkshake</strong>
              <img
                className="image"
                id="customize-burgers"
                src="./img/11"
                alt=""
              />
              <p>Vanilla Ice Cream & Milk with Whipped Cream. 16 oz.</p>
              <span>&#x20B9;100</span>
              <Popup />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row" id="menu">
            <div className="card-01">
              <strong>Butterfinger Shake</strong>
              <img
                className="image"
                id="customize-burgers"
                src="./img/9"
                alt=""
              />
              <p>
                Vanilla Ice Cream and Milk blended with Butterfinger pieces and
                topped with whipped cream!
              </p>
              <span>&#x20B9;150</span>
              <Popup />
            </div>
            <div className="card-01">
              <strong>Rootbeer Float</strong>
              <img className="image" id="coffe" src="./img/15" alt="" />
              <p>Vanilla Ice Cream and Root Beer!</p>
              <span>&#x20B9;100</span>
              <Popup />
            </div>
          </div>
        </div>
        <div className="top-div">
          <h1>Beverages Pepsi Brands</h1>
        </div>

        <div className="container">
          <div className="row" id="menu">
            <div className="card-01">
              <strong>Fountain Drink 24oz. (Choose one)</strong>
              <img
                className="image"
                id="Fountaindrink"
                src="./img/bevarage"
                alt=""
              />
              <p>
                Choose from a variety of Pepsi Products including Pepsi, Diet
                Pepsi, and more.
              </p>
              <span>&#x20B9;100</span>
              <Popup />
            </div>
            <div className="card-01">
              <strong>Coke Glass Bottle (Mexico)</strong>
              <img
                className="image"
                id="customize-burg"
                src="./img/cokeglass"
                alt=""
              />
              <p>
                An ice-cold Coca-Cola in a glistening glass, effervescent and
                refreshing, the perfect thirst quencher
              </p>
              <span>&#x20B9;100</span>
              <Popup />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row" id="menu">
            <div className="card-01">
              <strong>Orange Juice (16 oz.)</strong>
              <img
                className="image"
                id="customize-burger"
                src="./img/orange"
                alt=""
              />
              <p>16 oz. Fresh Squeezed Orange Juice.</p>
              <span>&#x20B9;100</span>
              <Popup />
            </div>
            <div className="card-01">
              <strong>16 oz. Cup of Milk (Vitamin D)</strong>
              <img className="image" id="customize" src="./img/milk" alt="" />
              <p>A comforting cup of milk, creamy and nourishing</p>
              <span>&#x20B9;100</span>
              <Popup />
            </div>
          </div>
        </div>
        <div className="top-div">
          <h1>Kids Menu</h1>
        </div>

        <div className="container">
          <div className="row" id="menu">
            <div className="card-01">
              <strong>Kids Sliders w/kids fries (Choose one)</strong>
              <img className="image" id="kids" src="./img/kids" alt="" />
              <p>(2) Child size burger sliders with cheese and ketchup.</p>
              <span>&#x20B9;150</span>
              <Popup />
            </div>
            <div className="card-01">
              <strong>Chicken Nuggets w/kids fries (Mexico)</strong>
              <img
                className="image"
                id="kids"
                src="./img/chickennagates"
                alt=""
              />
              <p>
                All White Meat Breaded Chicken Breast Nuggets with kids size
                fries.
              </p>
              <span>&#x20B9;220</span>
              <Popup />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row" id="menu">
            <div className="card-01">
              <strong>Grilled Cheese Sandwich w/kids fries</strong>
              <img className="image" id="kids" src="./img/grilled" alt="" />
              <p>Grilled Cheese Sandwich w/kids fries</p>
              <span>&#x20B9;180</span>
              <Popup />
            </div>
            <div className="card-01">
              <strong>French Fries (Small)</strong>
              <img
                className="image"
                id="customize-burgers"
                src="./img/5"
                alt=""
              />
              <p>Small, crispy French fries, perfect for snacking.</p>
              <span>&#x20B9;120</span>
              <Popup />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row" id="menu">
            <div className="card-01">
              <strong>Orange Juice (16 oz.)</strong>
              <img
                className="image"
                id="customize-burger"
                src="./img/orange"
                alt=""
              />
              <p>16 oz. Fresh Squeezed Orange Juice.s</p>
              <span>&#x20B9;100</span>
              <Popup />
            </div>
            <div className="card-01">
              <strong>16 oz. Cup of Milk (Vitamin D)</strong>
              <img className="image" id="customize" src="./img/milk" alt="" />
              <p>A comforting cup of milk, creamy and nourishing</p>
              <span>&#x20B9;100</span>
              <Popup />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Menu;
