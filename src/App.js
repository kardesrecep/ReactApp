import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/00-home/header/Header";
import Menu from "./components/00-home/menu/Menu";
import HelloWorld from "./components/01-hello-world/hello-world";
import HelloReact from "./components/02-hello-react/hello-react";
import Jsx1 from "./components/03-jsx/Jsx1";
import Jsx2 from "./components/03-jsx/Jsx2";
import Jsx3 from "./components/03-jsx/Jsx3"; 
import Jsx4 from "./components/03-jsx/Jsx4"; 
import Jsx5 from "./components/03-jsx/Jsx5"; 
import Jsx6 from "./components/03-jsx/Jsx6";
import Jsx7 from "./components/03-jsx/Jsx7"
/*import Style1 from "./components/04-styles/Style1";
import Style2 from "./components/04-styles/Style2";
import Style3 from "./components/04-styles/Style3";
import Style4 from "./components/04-styles/Style4"
import Clock1 from "./components/05-clock1/Clock1";
import Greeting from "./components/06-props/Greeting"; 
import Products from "./components/07-props2/Products";
import Clock2 from "./components/08-clock2/Clock2"; 
import Image from "./components/09-image/Image"; 
import Gallery from "./components/09-image/Gallery"; 
import ProfileCard from "./components/10-profile-card/ProfileCard"; 
import BootstrapStatic from "./components/11-bootstrap/BootstrapStatic";    
import BootstrapDynamic from "./components/11-bootstrap/BootstrapDynamic"; 
import Icons from "./components/12-icons/Icons"; 
import Events from "./components/13-events/Events"; 
import Shop from "./components/14-products/Shop"; 
import Stateless from "./components/15-usestate/Stateless"; 
import State from "./components/15-usestate/State"; 
import Counter from "./components/16-counter/Counter";  
import Birthday from "./components/17-birthday/Birthday"; 
import UseEffect from "./components/18-useeffect/UseEffect";
import Clock3 from "./components/19-clock3/Clock3";  
import UseEffect2 from "./components/18-useeffect/UseEffect2"; 
import CountryFilter from "./components/21-country-filter/CountryFilter"; 
import Scroll from "./components/21-useref/Scroll";
import UseRef from "./components/21-useref/UseRef"; 
import ClassComp from "./components/22-class-type-component/ClassComp"; 
import UserCards from "./components/23-fetch/UserCards";
import Countries from "./components/24-axios/Countries";
import Form1 from "./components/26-forms/Form1";
import Form3 from "./components/26-forms/Form3";
import Form4 from "./components/26-forms/Form4";
import Form5 from "./components/26-forms/Form5";
import Form6 from "./components/26-forms/Form6";*/



const App = () => {
  return (

    <BrowserRouter>
    <Header />

    <Container fluid>
      <Row>
        <Col sm={2}>
          <Menu />
        </Col>
        <Col sm={10}>
          <Routes>
            <Route path="/hello-world" element={<HelloWorld />} />
            <Route path="/hello-react" element={<HelloReact />} />
            <Route path="/jsx1" element={<Jsx1 />} />
            <Route path="/jsx2" element={<Jsx2 />} />
            <Route path="/jsx3" element={<Jsx3 />} />
            <Route path="/jsx4" element={<Jsx4 />} />
            <Route path="/jsx5" element={<Jsx5 />} />
            <Route path="/jsx6" element={<Jsx6 />} />
          </Routes>
        </Col>
      </Row>
    </Container>
















  {/*    

   
  <Jsx6 />
 <Jsx7/>
       
        <Style1/>
        <Style2/>
        <Style3/>
        <Style4/>
        <Clock1/>
        <Greetings/>
        <Products/>
        <Clock2 textColor="#56ff33" bgColor="#0012C3"/>
        <Image/>
        <Gallery/>
        <ProfileCard avatar="profile.jpg" name="Ali Gel" location="Turkey, Istanbul" shot="3" followers="23432" following="234"/>
        <BootstrapStatic/>
        <BootstrapDynamic/>
        <Icon/>
        <Events/>
        <Shop/>
        <Stateless/>
        <State/>
        <Counter/>
        <Birthday/>
        <UseEffect1/>
        <Clock3/>
        <UseEffect2/>
        <CountryFilter/>
        <UseRef/>
        <Scroll/>
        <ClassComp/>
        <UserCards/>
        <Countries/>
        <ParentComp/>
        <Form1/>
        <Form2/>
        <Form3/>
        <Form4/>
        <Form5/>
        <Form6/>
 */}
    </BrowserRouter>
  );
};
export default App;
















/*
 <Jsx6 />
        <Jsx7/>
        <Style1/>
        <Style2/>
        <Style3/>
        <Style4/>
        <Clock1/>
        <Greetings/>
        <Products/>
        <Clock2 textColor="#56ff33" bgColor="#0012C3"/>
        <Image/>
        <Gallery/>
        <ProfileCard avatar="profile.jpg" name="Ali Gel" location="Turkey, Istanbul" shot="3" followers="23432" following="234"/>
        <BootstrapStatic/>
        <BootstrapDynamic/>
        <Icon/>
        <Events/>
        <Shop/>
        <Stateless/>
        <State/>
        <Counter/>
        <Birthday/>
        <UseEffect1/>
        <Clock3/>
        <UseEffect2/>
        <CountryFilter/>
        <UseRef/>
        <Scroll/>
        <ClassComp/>
        <UserCards/>
        <Countries/>
        <ParentComp/>
        <Form1/>
        <Form2/>
        <Form3/>
        <Form4/>
        <Form5/>
        <Form6/>



*/