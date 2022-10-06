import { useState, useEffect } from "react";
import Header from "./Header";
import weather from "../weather.json";

const Practice = () => {
  const [Data, setData] = useState({});
  const [inner, setinner] = useState({});

  const [location, setlocation] = useState({});
  const [atmosphere, setatmosphere] = useState({});
  const [units, setunits] = useState({});
  const [astronomy, setAstronomy] = useState({});
  const [items, setitems] = useState([]);
  const [wind, setwind] = useState({});

  useEffect(() => {
    setData(weather.query.results.channel);
    setinner(weather.query.results.channel.image);
    setlocation(weather.query.results.channel.location);
    setatmosphere(weather.query.results.channel.atmosphere);
    setunits(weather.query.results.channel.units);
    setAstronomy(weather.query.results.channel.astronomy);
    setitems(weather.query.results.channel.item.forecast);
    setwind(weather.query.results.channel.wind);
  }, []);

  return (
    <>
      <Header
        title={Data.title}
        lastbuiltdate={Data.lastBuildDate}
        link={Data.link}
        imagedata={inner}
        locationdata={location}
        atmospheredata={atmosphere}
        units={units}
        astronomy={astronomy}
        items={items}
        wind={wind}
      />
    </>
  );
};

export default Practice;
