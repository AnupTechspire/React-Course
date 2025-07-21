import "./List.css";

// const List = () => {
//   return (
//     <>
//     <h1 className="h1-list">List of users</h1>
//     <ul className="ul-list">
//         <li className="li-list">- User 1</li>
//         <li className="li-list">- User 2</li>
//         <li className="li-list">- User 3</li>
//         <li className="li-list">- User 4</li>
//     </ul>
//     </>
//   )
// }

// export default List



















// const List = () => {
//   const userData = ["User 1", "User 2", "User 3", "User 4", "User 5"];
//   return (
//     <>
//       <h1 className="h1-list">List of users</h1>
//       <ul className="ul-list">
//         {userData.map((data, index) => <ChildList  value={data}/>)}
//       </ul>
//     </>
//   );
// };

// const ChildList = (props) => {
//   return <li className="li-list">- {props.value}</li>;
// };

// export default List;





















const List = () => {
const userData = [
    {
        id: 1,
        value: "User1"
    },
        {
        id: 2,
        value: "User2"
    },
        {
        id: 3,
        value: "User3"
    },
        {
        id: 4,
        value: "User4"
    }
]
  return (
    <>
      <h1 className="h1-list">List of users</h1>
      <ul className="ul-list">
        {userData.map((data) => <ChildList key={data.id} value={data.value}/>)}
      </ul>
    </>
  );
};

const ChildList = (props) => {
  return <li className="li-list">- {props.value}</li>;
};

export default List;