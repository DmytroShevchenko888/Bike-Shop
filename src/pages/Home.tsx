import React from "react";
import Title from '../components/home/Title.tsx';


interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    return (
    <section className='home'>
        <Title/>
    </section>
)};

export default Home;
