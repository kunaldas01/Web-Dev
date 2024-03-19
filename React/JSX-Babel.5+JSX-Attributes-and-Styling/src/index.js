import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img
        className="food"
        src="https://th.bing.com/th/id/OIP.1FJpYbgWkvNg--4_i7RtNQHaK1?rs=1&pid=ImgDetMain"
        alt="noodles"
      />
      <img
        className="food"
        src="https://th.bing.com/th/id/OIP.GQwrjEd8ntBZyz7F5Q7vNgHaE8?rs=1&pid=ImgDetMain"
        alt="biriyani"
      />
      <img
        className="food"
        src="https://th.bing.com/th/id/OIP.povaUd1_FMyb0x0mjclU8gHaHY?rs=1&pid=ImgDetMain"
        alt="gulab-jamun"
      />
    </div>
    <div>
      <p>Random Images</p>
      <img src="https://picsum.photos/200" alt="Random-image" />
    </div>
  </div>,
  document.getElementById("root")
);
