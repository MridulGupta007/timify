import React, { useEffect, useState } from "react";
import { timezones } from "./constant";


function App() {
  const [date, setDate] = useState(new Date());
  const [information, setInformation] = useState({
    name: "",
    relation: "",
    country: "",
  });

  const [timeHands, setTimeHands] = useState({
    hour: parseInt(
      new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        dateStyle: "full",
        timeStyle: "full",
      })
        .format(date)
        .slice(30, 31)
    ),
    minute: parseInt(
      new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        dateStyle: "full",
        timeStyle: "full",
      })
        .format(date)
        .slice(32, 34)
    ),
    seconds: parseInt(
      new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        dateStyle: "full",
        timeStyle: "full",
      })
        .format(date)
        .slice(35, 37)
    ),
  });
  useEffect(() => {
    let intervalId = setInterval(() => {
      const date = new Date()
      setDate(date);
      setTimeHands({
        hour: parseInt(
          new Intl.DateTimeFormat("en-US", {
            timeZone: "Asia/Kolkata",
            dateStyle: "full",
            timeStyle: "full",
          })
            .format(date)
            .slice(30, 31)
        ),
        minute: parseInt(
          new Intl.DateTimeFormat("en-US", {
            timeZone: "Asia/Kolkata",
            dateStyle: "full",
            timeStyle: "full",
          })
            .format(date)
            .slice(32, 34)
        ),
        seconds: parseInt(
          new Intl.DateTimeFormat("en-US", {
            timeZone: "Asia/Kolkata",
            dateStyle: "full",
            timeStyle: "full",
          })
            .format(date)
            .slice(35, 37)
        ),
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    console.log(information);
  }, [information]);

  const addColleague = () => {};
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="w-1/2 h-2/3 bg-[#F9E6CF] rounded-md">
        <div className="w-full text-[30px] font-semibold font-sans uppercase text-center text-[#FB4141]">
          Timify
        </div>
        <div className="px-10 relative">
          <div className="flex flex-col gap-y-3">
            <input
              type="text"
              placeholder="enter name"
              value={information.name ?? ""}
              onChange={(event) =>
                setInformation((prev) => ({
                  ...prev,
                  name: event.target.value,
                }))
              }
              className="px-2 py-2 border-none outline-none focus:outline-none focus:border-none rounded-md"
            />
            <input
              type="text"
              placeholder="relation"
              value={information.relation ?? ""}
              onChange={(event) =>
                setInformation((prev) => ({
                  ...prev,
                  relation: event.target.value,
                }))
              }
              className="px-2 py-2 border-none outline-none focus:outline-none focus:border-none rounded-md"
            />
            <select
              value={information.country ?? ""}
              onChange={(event) => {
                setInformation((prev) => ({
                  ...prev,
                  country: event.target.value,
                }));
              }}
              className="px-2 py-2 border-none outline-none focus:outline-none focus:border-none rounded-md"
            >
              <option value="" selected disabled>
                Select Country
              </option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Australia">Australia</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Japan">Japan</option>
            </select>
            <input
              type="text"
              name="date"
              className="px-2 py-2 bg-[#DA498D] text-white border-none outline-none focus:outline-none focus:border-none rounded-md"
              disabled
              value={new Intl.DateTimeFormat("en-US", {
                timeZone: "Asia/Kolkata",
                dateStyle: "full",
                timeStyle: "full",
              }).format(date)}
            />
            <button
              className="bg-[#FF8383] text-white self-start py-2 px-3 rounded-lg"
              onClick={() => {
                addColleague();
              }}
            >
              Add Colleague
            </button>
          </div>
          <div className="relative border border-black w-[150px] h-[150px] rounded-full flex items-center justify-center bg-white">
            <div
              style={{ transform: `rotate(${6 * timeHands.seconds}deg)` }}
              className="absolute top-[6px] w-[2px] h-[68px] bg-black origin-bottom rounded-full"
            ></div>
            <div
              style={{ transform: `rotate(${6 * timeHands.minute}deg)` }}
              className="absolute top-[17px] left-[74px] w-[3px] h-[54px] bg-[#8D0B41] origin-bottom rounded-full"
            ></div>
            <div
              style={{ transform: `rotate(${30 * timeHands.hour}deg)` }}
              className="absolute top-[44px] w-[4px] h-[30px] bg-[#118B50] origin-bottom rounded-full"
            ></div>
            <div className="absolute w-[10px] h-[10px] bg-black rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
