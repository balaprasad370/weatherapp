import React from "react";
import { useState } from "react";

const Child = ({ el, props }) => {
  const [showdetails, setshowdetails] = useState(false);

  return (
    <div className="forecast">
      <div className="forecast-box">
        <>
          <div className="forecast-val">
            <div className="forecast-left">
              <div>
                {el.date} <br />
              </div>
              <div> Day: {el.day}</div>
              <button
                type="button"
                onClick={() => {
                  setshowdetails((showdetails) => !showdetails);
                }}
                className="btn-style"
              >
                More Details
              </button>
            </div>
            <div className="forecast-right">
              <div>High {el.high}</div>
              <div>Low {el.low}</div>
              <div> {el.text}</div>
              {/* <div>{showdetails}</div> */}
            </div>
          </div>

          <div className="show-data">
            {showdetails ? (
              <div>
                <div className="row">
                  <div className="wrap-half">
                    <div className="condition">Humidity</div>
                    <div className="value">{props.atmospheredata.humidity}</div>
                  </div>

                  <div className="wrap-half">
                    <div className="condition">Wind</div>
                    <div className="value">
                      {props.wind.speed} {props.units.speed}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="wrap-half">
                    <div className="condition">High/Low</div>
                    <div className="value">
                      {el.high}/{el.low}
                      {props.units.temperature}
                    </div>
                  </div>

                  <div className="wrap-half">
                    <div className="condition">Dew point</div>
                    <div className="value">14</div>
                  </div>
                </div>

                <div className="row">
                  <div className="wrap-half">
                    <div className="condition">Pressure</div>
                    <div className="value">
                      {props.atmospheredata.pressure} {props.units.pressure}
                    </div>
                  </div>

                  <div className="wrap-half">
                    <div className="condition">Rising</div>
                    <div className="value">{props.atmospheredata.rising}</div>
                  </div>
                </div>

                <div className="row">
                  <div className="wrap-half">
                    <div className="condition">Visibility</div>
                    <div className="value">{el.text}</div>
                  </div>

                  <div className="wrap-half">
                    <div className="condition">Moon Phase</div>
                    <div className="value">Warning Gibbous</div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </>
      </div>
    </div>
  );
};

export default Child;
