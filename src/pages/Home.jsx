import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Component/Navbar';
import hosts from '../../public/hosts.png';
import techno from '../../public/techno.png';
import clothes from '../../public/clothes.png';
import ferrari from '../../public/ferrari.png';
import Footer from '../Component/Footer';

const Home = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [countdown, setCountdown] = useState(10);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [currentContentIndex, setCurrentContentIndex] = useState(0);
    const [contentTransition, setContentTransition] = useState(false);
    const videoRef = useRef(null);

    const videos = [
        {
            src: "./public/Video Mobil.mp4",
            theme: "SPORTS CAR",
            description: "Experience the thrill of speed with our latest models. Designed for those who demand the best in power and luxury."
        },
        {
            src: "./public/Clothes.mp4",
            theme: "COLLECTION",
            description: "Explore our exclusive Ferrari merchandise, combining quality and style, embodying the spirit of Ferrari."
        },
        {
            src: "./public/Ferrari.mp4",
            theme: "RACING",
            description: "Feel the adrenaline of Ferrari racing. Experience the innovation and speed that define our legacy in motorsport."
        }
    ];

    const contents = [
        {
            title: "FIGHTING BACK",
            description: "Join us in a celebration of resilience and strength. This event brings together individuals from all walks of life who have faced challenges and come out stronger. Through dynamic discussions, inspiring stories, and powerful experiences, we honor the spirit of perseverance and the power of community.",
            image: hosts,
        },
        {
            title: "TECHNOLOGICAL MASTERCLASS",
            description: "Discover the innovations that drive our performance. Our commitment to pushing the boundaries of technology and design is at the heart of everything we do. From cutting-edge engines to state-of-the-art materials, each innovation is meticulously crafted to ensure unparalleled performance.",
            image: techno,
        }
    ];

    const additionalContent = [
        {
            title: "ELEGANT CLOTHING",
            description: "Indulge in our exquisite range of Ferrari clothing, where every piece is crafted with precision and designed to reflect the elegance and spirit of Ferrari.",
            image: clothes,
        },
        {
            title: "FERRARI SPIRIT",
            description: "Experience the passion and performance of Ferrari through our premium accessories that embody the essence of luxury and style.",
            image: ferrari,
        }
    ];

    useEffect(() => {
        const videoSwitchInterval = setInterval(handleNextVideo, 10000);
        return () => clearInterval(videoSwitchInterval);
    }, [videos.length]);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(countdownInterval);
                    handleNextVideo();
                    return 10;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(countdownInterval);
    }, [currentVideoIndex]);

    useEffect(() => {
        const contentSwitchInterval = setInterval(handleNextContent, 15000); 
        return () => clearInterval(contentSwitchInterval);
    }, [currentContentIndex]);

    const handleNextVideo = () => {
        setIsTransitioning(true);
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        setCountdown(10);
        
        setTimeout(() => {
            setIsTransitioning(false);
        }, 1000);
    };

    const handleNextContent = () => {
        setContentTransition(true);
        setTimeout(() => {
            setCurrentContentIndex((prevIndex) => (prevIndex + 1) % contents.length);
            setContentTransition(false);
        }, 500);
    };

    const handlePrevContent = () => {
        setContentTransition(true);
        setTimeout(() => {
            setCurrentContentIndex((prevIndex) => (prevIndex - 1 + contents.length) % contents.length);
            setContentTransition(false);
        }, 500);
    };

    const currentVideo = videos[currentVideoIndex];
    const currentContent = contents[currentContentIndex];

    return (
        <div className="bg-black min-h-screen text-white flex flex-col">
            <div className="relative z-50">
                <Navbar />
            </div>

            <section className="relative flex flex-col items-center justify-center h-screen">
                <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover brightness-50"
                    src={currentVideo.src}
                    autoPlay
                    loop
                    muted
                ></video>

                <div className="absolute inset-0 flex flex-col justify-end items-center text-center z-10 pb-12">
                    <h2 className="text-2xl font-bold mb-2">{currentVideo.theme}</h2>
                    <p className="text-2xl mb-6 max-w-[700px] px-4">{currentVideo.description}</p>
                    
                    <div className="w-1/2 bg-gray-300 h-2 rounded-full overflow-hidden mt-4">
                        <div
                            className={`bg-red-600 h-full transition-all duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
                            style={{
                                width: `${isTransitioning ? 0 : ((10 - countdown) / 10) * 100}%`,
                                transition: isTransitioning ? 'none' : 'width 1s linear',
                            }} 
                        ></div>
                    </div>
                </div>
            </section>


            <section className="flex flex-col items-center py-16 h-auto w-full">
                <div className={`flex flex-row items-center justify-between w-full max-w-full gap-8`}>
                   
                    <div className="flex items-center">
                        <span onClick={handlePrevContent} className="cursor-pointer text-4xl hover:text-gray-400">{'<'}</span>
                    </div>

               
                    <div className={`flex flex-col w-1/2 pr-8 transition-all duration-700 ease-in-out ${contentTransition ? 'transform translate-y-full opacity-0' : 'transform translate-y-0 opacity-100'}`}>
                        <h2 className="text-3xl font-bold mb-4">{currentContent.title}</h2>
                        <p className="text-lg">{currentContent.description}</p>
                    </div>

                 
                    <div className="w-1/2 h-[400px] relative overflow-hidden">
                        <img
                            src={currentContent.image}
                            alt={currentContent.title}
                            className={`w-full h-full object-cover transition-transform duration-1000 ease-in-out ${contentTransition ? 'transform translate-x-full scale-100 opacity-0' : 'transform translate-x-0 scale-110 opacity-100'}`}
                        />
                    </div>

        
                    <div className="flex items-center">
                        <span onClick={handleNextContent} className="cursor-pointer text-4xl hover:text-gray-400">{'>'}</span>
                    </div>
                </div>
            </section>

          
            <section className="flex flex-row justify-between py-16 w-full">
                {additionalContent.map((item, index) => (
                    <div key={index} className="relative w-1/2 h-[100vh] overflow-hidden">
                        <img
                            src={item.image}
                            alt={item.title}
                            className={`w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-105`} 
                            style={{ willChange: 'transform' }} 
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center text-white p-4">
                            <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                            <p className="text-lg">{item.description}</p>
                        </div>
                    </div>
                ))}
            </section>

            <Footer />
        </div>
    );
};

export default Home;
