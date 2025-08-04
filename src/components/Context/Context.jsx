import {
  createContext,
  useContext,
  useState
} from "react";

// Props drilling
// const Context = () => {
//   const [user] = useState("John Doe");

//   return (
//     <>
//       <h1>{`Hello ${user}!`}</h1>
//       <Component2 user={user} />
//     </>
//   );
// }

// const Component2 = ({ user }) => {
//   return (
//     <>
//       <h1>Component 2</h1>
//       <Component3 user={user} />
//     </>
//   );
// }

// const Component3 = ({ user }) => {
//   return (
//     <>
//       <h1>Component 3</h1>
//       <Component4 user={user} />
//     </>
//   );
// }

// const Component4 = ({ user }) => {
//   return (
//     <>
//       <h1>Component 4</h1>
//       <Component5 user={user} />
//     </>
//   );
// }

// const Component5 = ({ user }) => {
//   return (
//     <>
//       <h1>Component 5</h1>
//       <h2>{`Hello ${user} again!`}</h2>
//     </>
//   );
// }

// export default Context;
























const UserContext = createContext();

const Context = () => {
  const [user] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

const Component2 = () => {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

const Component3 = () => {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

const Component4 = () => {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

const Component5 = () => {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

export default Context;