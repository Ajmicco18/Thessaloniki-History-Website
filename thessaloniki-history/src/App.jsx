import whiteTower from './assets/white-tower.jpg';

function App() {

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <h1>Jewish History of Thessaloniki</h1>
        <img src={whiteTower} alt="White Tower" width={"1000px"} />

      </div>
    </>
  )
}

export default App
