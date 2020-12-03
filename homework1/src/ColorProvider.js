import React, { createContext, useState, useContext } from "react";
import data from "./normal/components/data";

const ColorContext = createContext();
console.log('ColorContext',ColorContext)

export const useColors = () => useContext(ColorContext);

export default function ColorProvider(props) {
  console.log('props',props)
  const [colors, setColors] = useState(data);
  console.log("-----", colors);
  const addColor = (title, color) => {
    const newColors = [
      {
        id: Math.random(),
        color: color,
        title: title,
        rating: 3,
      },
      ...colors,
    ];
    setColors(newColors);
  };

  const rateColor = (id, rating) => {
    console.log(">>>>>", id, rating);

    const newColors = colors.map((c) =>
      c.id !== id
        ? c
        : {
            ...c,
            rating,
          }
    );
    setColors(newColors);
  };

  const removeColor = (id) => {
    console.log(">>>>>", id);
    const newColors = colors.filter((c) => c.id !== id);
    setColors(newColors);
  };

  return (
    <ColorContext.Provider value={ {colors, addColor, removeColor, rateColor }}>
      {props.children}
    </ColorContext.Provider>
  );
}
