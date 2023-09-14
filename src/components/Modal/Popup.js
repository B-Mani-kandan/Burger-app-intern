import React, { useState } from "react";
import "../Modal/popup.css";
// import Payment from "../Payment";

// import Productdetail from "../../Productdetails";

export default function Popup() {
  const [popup, setpopup] = useState(false);

  const togglepopup = () => {
    setpopup(!popup);
  };

  if (popup) {
    document.body.classList.add("active-popup");
  } else {
    document.body.classList.remove("active-popup");
  }

  return (
    <>
      <button onClick={togglepopup} className="btn-popup">
        Order Now
      </button>

      {popup && (
        <div className="popup">
          <div className="popup-content">
            <h2 className="h2">Crispy Burger</h2>
            <img
              src="https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
            <p>
              Experience the ultimate satisfaction with our Crispy Burger at
              home. Crispy, golden perfection on the outside, succulent
              deliciousness on the inside – a taste that's simply irresistible.
            </p>
            <form className="firstform">
              <p className="diff">How to get it.</p>
              <input
                type="radio"
                id="html"
                className="html"
                name="fav_language"
                value="HTML"
              />
              <label htmlFor="html" className="local">
                Local Delivery
              </label>
              <p className="checkaddress">Check your address</p>
              <p className="notavail">Currently not available!</p>
              <input
                type="radio"
                id="css"
                className="html"
                name="fav_language"
                value="CSS"
              />

              <label htmlFor="html" className="local">
                Store Picup
              </label>

              <div className="address">Eat Crispy Burger</div>
              <div className="address">
                35, A.N. Elumalai Salai, near by Vinayagar Kovil, Moovendhar
                Nagar, Ashok Brindavan, Iyyappanthangal, Chennai, Tamil Nadu
                600077
              </div>
            </form>
            <form className="secondform">
              <p className="optional">Additional</p>
              <input
                type="checkbox"
                id="1"
                className="secondinput"
                name="checkbox"
                value=""
              />
              <label className="secondlabel" htmlFor="1">
                Add Extra Cheese
              </label>
              <div className="rupee">&#x20B9;20</div>
              <hr />
              <input
                type="checkbox"
                id="2"
                className="secondinput"
                name="checkbox"
                value=""
              />
              <label className="secondlabel" htmlFor="2">
                Add Extra! Extra! Cheese
              </label>
              <div className="rupee">&#x20B9;20</div>
              <hr />
              <input
                type="checkbox"
                id="3"
                className="secondinput"
                name="checkbox"
                value=""
              />
              <label className="secondlabel" htmlFor="3">
                Add Bacon
              </label>
              <div className="rupee">&#x20B9;20</div>

              <hr />
              <input
                type="checkbox"
                id="4"
                className="secondinput"
                name="checkbox"
                value=""
              />
              <label className="secondlabel" htmlFor="4">
                Add pastrami
              </label>
              <div className="rupee">&#x20B9;20</div>

              <hr />
              <input
                type="checkbox"
                id="5"
                className="secondinput"
                name="checkbox"
                value=""
              />
              <label className="secondlabel" htmlFor="5">
                Add Pickles
              </label>
              <div className="rupee">&#x20B9;20</div>

              <hr />
              <input
                type="checkbox"
                id="6"
                className="secondinput"
                name="checkbox"
                value=""
              />
              <label className="secondlabel" htmlFor="6">
                Add Mayonnaise
              </label>
              <div className="rupee">&#x20B9;20</div>

              <hr />
              <input
                type="checkbox"
                id="7"
                className="secondinput"
                name="checkbox"
                value=""
              />
              <label className="secondlabel" htmlFor="7">
                No Cheese
              </label>
              <div className="rupee">&#x20B9;20</div>

              <hr />
              <input
                type="checkbox"
                id="8"
                className="secondinput"
                name="checkbox"
                value=""
              />
              <label className="secondlabel" htmlFor="8">
                Add Extra Tomato
              </label>
              <div className="rupee">&#x20B9;20</div>

              <hr />
              <input
                type="checkbox"
                id="9"
                className="secondinput"
                name="checkbox"
                value=""
              />
              <label className="secondlabel" htmlFor="9">
                Add Cheddar Cheese Instead
              </label>
              <div className="rupee">&#x20B9;20</div>

              <hr />
              <input
                type="checkbox"
                id="10"
                className="secondinput"
                name="checkbox"
                value=""
              />
              <label className="secondlabel" htmlFor="10">
                Swis Cheese Instead
              </label>
              <div className="rupee">&#x20B9;20</div>
              <hr />
              <a className="payingbtn" href={"Payment"}>
                Go to Payment
              </a>
            </form>
            <button className="close-popup" onClick={togglepopup}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}
