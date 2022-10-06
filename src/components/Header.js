import React, { useEffect } from "react";
// import logo from '../logo.svg';
import Child from "./Child";

const Header = (props) => {
  useEffect(() => {
    document.title = `${props.title}`;
  }, [props]);

  return (
    <>
      <div>
        <div className="header">
          <p style={{ textAlign: "center" }}>Weather News</p>
          {props.locationdata.city},<t /> {props.lastbuiltdate}
        </div>
        <img
          src="https://th.bing.com/th/id/OIP.RYIHSBcDzRLyBGF8CvCGYAHaEo?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          width={props.imagedata.width}
          height={props.imagedata.height}
          alt="weather prediction"
        />

        <div className="detailed-heading">
          Weather Today in {props.locationdata.city} city,{" "}
          {props.locationdata.region}, {props.locationdata.country}
        </div>

        <div className="temp-orient">
          <div class="temp-feel">
            21<sup>o</sup>
            <br />
            Feels like
          </div>

          <div class="astronomy">
            up<mark>{props.astronomy.sunrise}</mark>down{" "}
            <mark>{props.astronomy.sunset}</mark>
          </div>
        </div>

        {props.items.map((el, index) => {
          return <Child el={el} props={props} />;
        })}
      </div>
    </>
  );
};

export default Header;
