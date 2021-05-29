import React from 'react';
import "./Home.css";
import Product from "./Product.js";

function Home() {
    return (
        <div className="home">
            <img  className="home_image"
                  src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                  />
<div className="home_row">
 <Product
         id="00777119"
         title="Apple Watch
         Silver Aluminium Case with Sport Band"
            price={40900}
            rating={4}
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MTPK2_VW_34FR+watch-44-alum-silver-nc-6s_VW_34FR_WF_CO_GEO_IN?wid=750&hei=712&trim=1,0&fmt=p-jpg&qlt=95&.v=1566419578393,1601923080000"/>

<Product
         id="00777120"
         title="Adidas Easy Vulc 2.0 Men's Skateboarding Shoes"
            price={1481}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71U8gcoMsiL._UL1500_.jpg"/>

          </div>

         < div className="home_row">
 <Product
         id="007771121"
         title="Boldfit N95 mask for face (Pack of 5) Anti Pollution, protective.Third Party Tested by manufacturer at SGS & Ministry of Textiles"
            price={499.0}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/51dfcbeGMlS._SL1106_.jpg"/>

<Product
         id="00777122"
         title="Infrared Multi Functional Thermometer with 6in1 Function 65ft. (White)"
            price={2500.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/41DW2mdUg9L.jpg"/>

<Product
         id="00777123"
         title="Haier 195 L 4 Star Direct-Cool Single-Door Refrigerator (HED- 20CFDS, Dazzle Steel)"
            price={14000}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61DWru8Y9NL._SX679_.jpg"
          />
          </div>       

 <div className="home_row">
 <Product
         id="00777124"
         title="Acer Nitro 5 Intel Core i7 10750H 15.6 FHD IPS 144Hz Display Thin and Light Gaming Laptop (8GB Ram/1TB HDD + 256 GB SSD/Windows 10 Home /GTX" 
            price={81000}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71Pp8PLPNAL._SL1500_.jpg"
          />


          </div>

     
        </div>
       
      

       

    );
}

export default Home;

