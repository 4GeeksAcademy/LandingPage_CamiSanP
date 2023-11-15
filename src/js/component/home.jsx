import React from "react";
import Navbar from "./Navbar";
import Title from "./Title";
import Cards from "./Cards";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar></Navbar>
			<Title></Title>
			<Cards></Cards>
			<Footer></Footer>
		</div>
	);
};

export default Home;