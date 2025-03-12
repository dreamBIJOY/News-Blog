import { useState } from "react";
import Blogs from "./components/Body Section/Hero Section/Blog Section/Blogs";
import Category from "./components/Body Section/Hero Section/Category Section/Category";
import Profile from "./components/Body Section/Hero Section/Profile Section/Profile";
import LastSection from "./components/Header  Section/Last Section/LastSection";
import NavbarSection from "./components/Header  Section/Navbar Section/NavbarSection";
import TopSection from "./components/Header  Section/Top Section/TopSection";

function App() {

  const [categoryName, setCategoryName] = useState([]);

  const handelCategory = (name) => {
    setCategoryName(name)
  }
  return (
    <>
      <TopSection></TopSection>
      <NavbarSection></NavbarSection>
      <LastSection></LastSection>


      <div className="flex gap-8 w-11/12 mx-auto py-20">
        <Category handelCategory={handelCategory}></Category>
        <Blogs categoryName={categoryName}></Blogs>
        <Profile></Profile>
      </div>

    </>
  );
}

export default App;
