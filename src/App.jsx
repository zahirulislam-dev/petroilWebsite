import About from "./Components/About/About"
import Banner from "./Components/Banner/Banner"
import Biggest from "./Components/Biggest/Biggest"
import Blog from "./Components/Blog/Blog"
import Footer from "./Components/Footer/Footer"
import Footernav from "./Components/Footernav/Footernav"
import Header from "./Components/Header/Header"
import Logo from "./Components/Logo/Logo"
import Maps from "./Components/Maps/Maps"
import Member from "./Components/Member/Member"
import Navbar from "./Components/Navbar/Navbar"
import Service from "./Components/Service/Service"
import Slider from "./Components/Slider/Slider"

function App() {

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Banner></Banner>
      <Biggest></Biggest>
      <Slider></Slider>
      <Service></Service>
      <About></About>
      <Logo></Logo>
      <Blog></Blog>
      <Maps></Maps>
      <Member></Member>
      <Footer></Footer>
      <Footernav></Footernav>
    </div>
  )
}

export default App
