import { BrowserRouter, Route, Routes } from "react-router-dom"
import Condition from "./components/Condition"
import Events from "./components/Events/Events"
import List from "./components/List"
import Navbar from "./components/Navbar"
import MainComponent from "./components/Props"
import Slider from "./components/Slider"
import State from "./components/State/State"
import NoPage from "./components/NoPage"
import Form from "./components/Form/Form"
import FormEffect from "./components/Effect/Effect"
import { Navigate } from "./components/Navigate"

// function App() {
//   return (
//     <>
//     {/* <Navbar />
//     <Slider />
//     <Condition />
//     <MainComponent />
//     <Events />
//     <List /> */}
//     {/* <State /> */}
//     {/* <Form /> */}
//     {/* <FormEffect /> */}
//     </>
//   )
// }

// export default App














function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="slider" element={<Slider />} />
        <Route path="condition" element={<Condition />} />
        <Route path="component" element={<MainComponent />} />
        <Route path="events" element={<Events />} />
        <Route path="list" element={<List />} />
        <Route path="navigate" element={<Navigate />} />
        <Route path="effect" element={<FormEffect />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
