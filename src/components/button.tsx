import "../index.css";
import { useState } from "react";

function Burtula() {
  const buttonNumber = [1, 2, 3, 4, 5];
  const [orangeSelected, setOrangeSelected] = useState<null | number>(null);
  console.log(orangeSelected);
  return (
    <div className="w-[343px] flex flex-row items-center gap-7 mb-8 ">
      {buttonNumber.map((number, index) => {
        return (
          <button
            key={index}
            onClick={() => setOrangeSelected(number)}
            className={`selected ${
              number === orangeSelected ? "bg-[#FC7614]" : "bg-[#262E38]"
            }`}
          >
            {number}
          </button>
        );
      })}
    </div>
  );
}

export default Burtula;
/*<button className="selected">1</button>
      <button className="selected">2</button>
      <button className="selected">3</button>
      <button className="selected">4</button>
      <button className="selected">5</button>
      {`selected ${
              orangeSelected == number ? "bg-[#FC7614]" : "bg-[#262E38]"
            }`}
      */
