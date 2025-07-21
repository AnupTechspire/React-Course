import { useState } from "react";
import "./State.css"

// React Hooks
// State in React
const State = () => {
  const [value, setValue] = useState(0);
  const clickHandler = () => {
    setValue(() => value + 1)
  }
  return (
    <>
    <button className='btn-state' onClick={clickHandler}>Click Me!</button>
    <h1>{value}</h1>
    </>
  )
};

export default State;

// Increament, Decreament, Reset(Optional)



















// const State = () => {
//     const [count, setCount] = useState(0);

//     const increment = () => {
//         setCount((prevCount) => prevCount + 1);
//     };

//     const decrement = () => {
//         setCount((prevCount) => prevCount - 1);
//     };

//     const reset = () => {
//         setCount(0);
//     };

//     return (
//         <div className="div-state">
//             <h1 className="h1-state">
//                 The current count is: {count}
//             </h1>
//             <button className="button-state-increase" onClick={increment}>
//                 Increase
//             </button>
//             <button className="button-state-decrease" onClick={decrement}>
//                 Decrease
//             </button>
//             <button className="button-state-reset" onClick={reset}>
//                 Reset
//             </button>
//         </div>
//     );
// };

// export default State;

























// Set dark mode or light mode based on button onClick

// Liked or Disliked when clicking on button and showing its value

// Pick color of <p></p> tag based on button click red, blue, green, yellow

// yes and no vote based on two button clicked i.e. Yes or No

// import React from 'react'

// const State = () => {
//   const value = 0;
//   const style = {
//       background: value === 0 ? "red": "white",
//     };
//   return (
//     <div style={style}>State</div>
//   )
// }

// export default State



















// const DarkMode = () => {
//   const [darkMode, setDarkMode] = useState(true);

//   const clickHandler = () => {
//     setDarkMode((value) => !value)
//   }

//   const style = {
//     backgroundColor: darkMode ? "black" : "white",
//     height: "100vh"
//   }

//   return (
//     <div style={style}>
//     <button onClick={clickHandler} className="btn-state">Mode</button>
//     </div>
//   )
// }

// export default DarkMode;


// const Reaction = () => {
//   const [reaction, setReaction] = useState("");

//   const likedClickHandler = () => {
//     setReaction(() => "Liked")
//   }

//   const dislikedClickHandler = () => {
//     setReaction(() => "Disliked")
//   }

//   return (
//     <div>
//     <button className="btn-state" onClick={likedClickHandler} style={{marginRight: '2rem'}}>Liked</button>
//     <button className="btn-state" onClick={dislikedClickHandler}>Disliked</button>
//     <p>{reaction}</p>
//     </div>
//   )
// }

// export default Reaction;


// const ChangeColor = () => {
//   const [color, setColor] = useState("black");

//   const colorClickHandler = (colorName) => {
//     setColor(() => colorName)
//   }

//   const style = (colorName) => {
//     return {
//       marginRight: '2rem',
//       color: "white",
//       backgroundColor: colorName
//     }
//   }

//   return (
//     <div>
//     <button className="btn-state" onClick={() => colorClickHandler('red')} style={style('red')}>Red</button>
//     <button className="btn-state" onClick={() => colorClickHandler('blue')} style={style('blue')}>Blue</button>
//     <button className="btn-state" onClick={() => colorClickHandler('green')} style={style('green')}>Green</button>
//     <button className="btn-state" onClick={() => colorClickHandler('yellow')} style={style('yellow')}>Yellow</button>
//     <h1 style={{color}}>Hello World</h1>
//     </div>
//   )
// }

// export default ChangeColor;







// const VoteCount = () => {
//   const [likedCount, setLikedCount] = useState(0);
//   const [dislikedCount, setDislikedCount] = useState(0);

//   const likeClickHandler = () => {
//     setLikedCount((value) => value + 1)
//   }
  
//   const dislikeClickHandler = () => {
//     setDislikedCount((value) => value + 1)
//   }
//   return (
//     <div>
//       <button className="btn-state" onClick={likeClickHandler} style={{marginRight: '1rem'}}>Like</button>
//       <button className="btn-state" onClick={dislikeClickHandler}>Dislike</button>
//       <h1>Liked Count - {likedCount}</h1>
//       <h1>Disliked Count - {dislikedCount}</h1>
//     </div>
//   )
// }

// export default VoteCount



