import React from "react";
import "./home.css";
import backgroundPicture from "../image/BackgroundPicture.jpg";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img className="backgroundPicture" src={backgroundPicture} alt="" />

        <div className="home__row">
          <Product
            id="1"
            title="Oppo A54 Pro | 6GB RAM | OLED | Snapdragon 865"
            price={22999}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/319YSGWHW0S._AC_SR400,600_.jpg"
          />

          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="Apple MacBook Pro (14-inch/35.97 cm, M1 Pro chip with 8‑core CPU, 14‑core GPU, 16GB RAM, 512GB SSD)"
            price={150000}
            rating={4}
            image="https://m.media-amazon.com/images/I/61vFO3R5UNL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="3254354345"
            title="Apple iPhone 13 Pro Max (128GB) - Sierra Blue"
            price={126000}
            rating={0}
            image="https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          {/* Clothing */}
          <Product
            id="1"
            title="Fashion Deals Indian Ethenic dress for couple"
            price={22999}
            rating={4}
            image="https://m.media-amazon.com/images/G/31/img22/Fashion/Event/JanART22/AFpage/Bottomwidget/01_all-fashion.jpg"
          />

          <Product
            id="23445930"
            title="Lymio
            Ruffle Cuff Floral Top Printed"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/G/31/img22/Fashion/Event/WRS22/eventpage/Bottomwidget/2_Fashion-dealsV2.jpg"
          />
          <Product
            id="3254354345"
            title="Clearance Store Greciilooks
            Rayon A-line Dresses"
            price={5900}
            rating={4}
            image="https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2022/SS_22/Search_card/Search-card.jpg"
          />
        </div>

        <div className="home__row">
          {/* Watches */}

          <Product
            id="90829332"
            title="Michael Kors Analog Blue Dial Men's Watch"
            price={41094.98}
            rating={3}
            image="https://m.media-amazon.com/images/I/81TpueADAjL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="90829332"
            title="Fossil
            Jacqueline Analog Women's Watch (Rose Gold Dial, Rose Band)"
            price={15000}
            rating={5}
            image="https://m.media-amazon.com/images/I/515j-dm1ryL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="4903850"
            title="Samsung LC49RG9 Not so Smartwatch"
            price={3899.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/61N8fIhXH0L._AC_UL480_QL65_.jpg"
          />
          <Product
            id="90829332"
            title="Maserati
            Sport Chronograph|Date|Small Seconds Analog Dial Color Blue"
            price={51000}
            rating={5}
            image="https://m.media-amazon.com/images/I/61jgH8637sL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="90829332"
            title="ponsored 
            Fossil
            Riley Analog White & Beige Dial Women's Watch -ES3466"
            price={19700}
            rating={5}
            image="https://m.media-amazon.com/images/I/61R4sSsQAmL._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          {/* Electronics */}
          <Product
            id="90829332"
            title="Samsung 189 cm (75 inches) 4K Ultra HD Smart QLED TV QA75Q70TAKXXL (Titan Gray)"
            price={410000}
            rating={3}
            image="https://m.media-amazon.com/images/I/71koQer7gLL._AC_UY327_QL65_.jpg"
          />
          <Product
            id="4123"
            title="EKSA E800 Gaming Headphones with Noise Cancelling, 50Mm"
            price={1799}
            rating={4}
            image="https://m.media-amazon.com/images/I/719rYtnnnyS._SL1400_.jpg"
          />

          <Product
            id="43332"
            title="STORE99® Z5 VR Virtual Reality Glasses Box Headset Helmet with Daydream 9-axis Gamepad"
            price={6299}
            rating={4}
            image="https://m.media-amazon.com/images/I/41kpihsHfbL._AC_UL480_QL65_.jpg"
          />
          <Product
            id="43232"
            title="Smiledrive Pro 3 Axis Gimbal Handheld Stabilizer-with Face Object Tracking"
            price={5299}
            rating={4}
            image="https://m.media-amazon.com/images/I/41l3sxmTHnL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="43232"
            title="Nikon Z50 Mirrorless Camera Body with Z DX 16-50mm f/3.5-6.3 VR Lens"
            price={80000}
            rating={4}
            image="https://m.media-amazon.com/images/I/61cBZ5Z+ekL._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
