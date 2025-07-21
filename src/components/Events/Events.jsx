// React Events
import "./Events.css";

const Events = () => {
  const clickHandler = () => {
    alert("Hello world!");
    // console.log('Hello world!')
  };
  return (
    <button className="button-event" onClick={clickHandler}>
      Click Me!
    </button>
  );
};

export default Events;
