import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer'; 
import Logo from '../../public/ferrari-logo.png'; 

const About = () => {
    return (
        <div className="bg-black text-white min-h-screen flex flex-col">
            <Navbar /> 
            <div className="flex-grow max-w-4xl mx-auto p-8 mt-10"> 
                <div className="flex justify-center mb-6">
                    <img src={Logo} alt="Ferrari Logo" className="w-40 h-auto" />
                </div>
                <h1 className="text-4xl font-bold mb-6 text-center">About Ferrari</h1>
                <p className="text-lg mb-4">
                    Founded in 1939 by Enzo Ferrari, Ferrari has become synonymous with luxury, performance, and innovation. 
                    The brand's legacy in the automotive world is marked by its commitment to excellence and its passion for racing. 
                    With its headquarters in Maranello, Italy, Ferrari not only produces high-performance sports cars but also participates in various motorsport events worldwide, particularly Formula 1.
                </p>
                <p className="text-lg mb-4">
                    At Ferrari, each car is a masterpiece of design and engineering. The company employs cutting-edge technology and superior craftsmanship to ensure that every vehicle delivers an unparalleled driving experience. 
                    The iconic Prancing Horse logo represents speed, power, and the spirit of competition, making Ferrari a dream brand for car enthusiasts around the globe.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-4">Our Values</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Performance: Uncompromising pursuit of speed and power.</li>
                    <li>Innovation: Continual advancement in technology and design.</li>
                    <li>Passion: A deep love for motorsport and automotive excellence.</li>
                    <li>Heritage: A rich history of racing and automotive achievement.</li>
                </ul>
                <h2 className="text-2xl font-semibold mt-6 mb-4">Join the Ferrari Family</h2>
                <p className="text-lg mb-4">
                    Whether you're a lifelong fan or new to the Ferrari world, we invite you to explore our collection and experience the thrill of driving a Ferrari. 
                    Become part of our legacy and enjoy a lifestyle defined by passion, performance, and elegance.
                </p>
            </div>
            <Footer /> 
        </div>
    );
};

export default About;
