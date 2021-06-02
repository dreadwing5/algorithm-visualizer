import React, { useState, useEffect } from "react";
import "./ArrayBlocks.css";
const ArrayBlocks = ({ blocks, compare, sorted, swap }) => {
  const MIN_WIDTH = 50,
    HEIGHT_FACTOR = 50;
  const [width, setWidth] = useState(
    Math.min(MIN_WIDTH, Math.ceil(window.innerWidth / blocks.length) - 5)
  );
  console.log(width);
  const color =
    blocks.length <= MIN_WIDTH && width > 14 ? "#000814" : "transparent";

  useEffect(() => {
    const handleResize = () => {
      setWidth(
        Math.min(MIN_WIDTH, Math.ceil(window.innerWidth / blocks.length) - 8)
      );
    };

    window.addEventListener("resize", handleResize);

    setWidth(
      Math.min(MIN_WIDTH, Math.ceil(window.innerWidth / blocks.length) - 8)
    );
  }, [blocks.length]);

  return (
    <div className="array__blocks">
      {blocks.map((block, i) => {
        const height = (block * HEIGHT_FACTOR) / blocks.length;

        let bg = "#e5b3fe";

        // i th element is being compared with some other element
        if (compare && (i === compare[0] || i === compare[1])) {
          bg = "#fee440";
        }

        if (swap && (i === swap[0] || i === swap[1])) {
          bg = "#e76f51";
        }
        // i th element is in its correct position
        if (sorted && sorted.includes(i)) {
          bg = "#ff5c8a";
        }

        const style = {
          backgroundColor: bg,
          color: color,
          height: height,
          width: width,
        };
        return (
          <div key={i} className="block" style={style}>
            {block}
          </div>
        );
      })}
    </div>
  );
};

export default ArrayBlocks;
