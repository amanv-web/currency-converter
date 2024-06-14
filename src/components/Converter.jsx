import React, { useState } from "react";
import InputBox from "./InputBox.jsx";
import useCurrencyInfo from "./useCurrencyInfo.jsx";

function Converter() {
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr"); 
  const [result, setResult] = useState('');
  const currencyInfo = useCurrencyInfo(from);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(result);
    setResult(amount);
  };

  const options = Object.keys(currencyInfo);

  const convert = () => {
    setResult(amount * currencyInfo[to]);
  }

  return (
    <div className=" bg-indigo-600 h-96   w-full sm:w-full ">
      <nav className="flex justify-between bg-indigo-600 text-white p-3">
        <div className="flex gap-3">
          <img
            className="w-10 h-10 mix-blend-soft-light ml-6 "
            src="https://uxwing.com/wp-content/themes/uxwing/download/location-travel-map/exchange-inr-rupee-to-usd-dollar-icon.png"
            alt=""
          />
          <h1 className="font-bold text-3xl">Currency converter</h1>
        </div>
        <ul className="  flex justify-center align-center items-center gap-1 mr-6 font-bold">
          <li className=" hover:bg-white hover:text-black py-1 px-5 hover:shadow-lg rounded-2xl">
            INR
          </li>
          <li className=" hover:bg-white hover:text-black py-1 px-5 hover:shadow-lg rounded-2xl">
            USD
          </li>
          <li className=" hover:bg-white hover:text-black py-1 px-5 hover:shadow-lg rounded-2xl">
            CAD
          </li>
          <li className=" hover:bg-white hover:text-black py-1 px-5 hover:shadow-lg rounded-2xl">
            EUR
          </li>
        </ul>
      </nav>
      <div>
        <div className="flex justify-center items-center w-full h-screen p-5 rounded-xl flex-col -mt-10">
          <div className="text-white -mt-20 ">
            <h1 className="text-5xl font-bold mb-1">
              Online Currency Converter
            </h1>
            <h3 className="text-center font-bold">
              Get up-to-date exchange rate in just seconds
            </h3>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-lg mt-12">
            <div className="  gap-5 flex ">
              <InputBox
               label="From"
               amount={amount}
               currencyOptions={options}
               onCurrencyChange={(currency) => setFrom(currency)}
               selectCurrency={from}
               onAmountChange={(amount) => setAmount(amount)}
              />

              <button
                className="px-3 m-4 bg-indigo-600 text-white rounded-3xl "
                onClick={swap}
              >
                Swap
              </button>

              <InputBox
                     label="To"
                     amount={result}
                     currencyOptions={options}
                     onCurrencyChange={(currency) => setTo(currency)}
                     selectCurrency={to}
                     amountDisable
              />
            </div>
            <div className="flex justify-center mt-8">
              <button
                onClick={convert}
                type="submit"
                className="w-full bg-indigo-600 text-white font-bold text-xl p-2"
              >
                       Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Converter;