import React, { useState, useEffect } from "react";
import arrow from "../src/assets/images/icon-arrow.svg";
import axios from "axios";
import Map from "./Map";
import Loader from "./Loader";

type dataDetailsType = {
  IPv4: string;
  city: string;
  state: string;
  country_name: string;
  latitude: number;
  longitude: number;
};

const App = () => {
  const [data, setData] = useState<dataDetailsType>();
  const [theIP, setTheIP] = useState<string>("");
  const [loading, setLoading] = useState(false);

  // This function fetches the data from the API
  const getLocation = async () => {
    try {
      const response = await axios.get(
        `https://geolocation-db.com/json/${theIP}`
      );
      const locationDetails = response.data;
      setData(locationDetails);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSearch = () => {
    setLoading(true);
    getLocation();
  };
  useEffect(() => {
    window.scrollY;
  }, []);
  return (
    <div className="container h-[100vh] max-w-full">
      <div className="bg-mobileBG h-[50vh] md:h-[25vh] md:bg-desktopBG z-20">
        <div className="flex flex-col justify-center gap-y-4 py-3">
          <h1 className="text-white font-semibold text-base md:text-lg text-center">
            IP Address Tracker
          </h1>

          <div className="flex flex-row justify-center px-10">
            <input
              type="text"
              value={theIP}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTheIP(e.target.value)
              }
              className="p-3 rounded-tl-xl w-full md:w-2/5 rounded-bl-xl outline-none placeholder:italic"
              placeholder="Type your IP address"
            />
            <div
              className="flex items-center justify-center rounded-tr-xl rounded-br-xl bg-black w-10 cursor-pointer"
              onClick={handleSearch}
            >
              <img src={arrow} alt="" className="w-3 h-3" />
            </div>
          </div>

          <div className="detailsCont flex flex-row justify-center z-20">
            <div className=" bg-white shadow-md shadow-slate-400 flex flex-col md:flex-row md:justify-around justify-center w-full mx-10 md:w-1/2 items-center rounded-xl py-3 gap-2">
              <div className="flex flex-col items-center gap-y-1">
                <h3 className="text-slate-500 font-semibold text-sm">
                  IP ADDRESS
                </h3>
                <p className="text-black font-semibold text-lg">
                  {data ? data.IPv4 : "-"}
                </p>
              </div>

              <div className="flex flex-col items-center gap-y-1">
                <h3 className="text-slate-500 font-semibold text-sm">STATE</h3>
                <p className="text-black font-semibold text-lg">
                  {data ? data.state : "-"}
                </p>
              </div>

              <div className="flex flex-col items-center gap-y-1">
                <h3 className="text-slate-500 font-semibold text-sm">CITY</h3>
                <p className="text-black font-semibold text-lg">
                  {data ? data.city : "-"}
                </p>
              </div>

              <div className="flex flex-col items-center gap-y-1">
                <h3 className="text-slate-500 font-semibold text-sm">
                  COUNTRY
                </h3>
                <p className="text-black font-semibold text-lg">
                  {data ? data.country_name : "-"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`h-[50vh] md:h-[75vh] relative ${!loading && "z-0"}`}>
        {loading ? (
          <Loader />
        ) : (
          <Map
            lat={data ? data.latitude : 48.8584}
            long={data ? data.longitude : 2.2945}
            location={
              data
                ? `${data.city + "," + data.state + "," + data.country_name}`
                : "Eiffel Tower, Paris, France"
            }
          />
        )}
      </div>
    </div>
  );
};

export default App;
