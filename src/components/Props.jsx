const MainComponent = () => {
  const location = "Kathmandu"
  const temperature = "28 C"
  return (
    <>
        <h1>Where do I live?</h1>
        <MyLocation location={location} temperature={temperature}  />
    </>
  )
}

const MyLocation = ({location, temperature}) => {
    return (
        <>
        <h1>My location is in {location}.</h1>
        <h2>It is {temperature} right now.</h2>
        </>
    )
}

export default MainComponent