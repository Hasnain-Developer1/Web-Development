import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"

function App() {

  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title='Card1' description='card 1 description' />
        <Card title='Card2' description='card 2 description' />
        <Card title='Card3' description='card 3 description' />
        <Card title='Card4' description='card 4 description' />
      </div>
      <Footer />
    </>


  )
}

export default App
