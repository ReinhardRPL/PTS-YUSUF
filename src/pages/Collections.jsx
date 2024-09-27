import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import ClothesImage from '../../public/clothes1.png'; 
import ClothesVideo from '../../public/clothes.mp4';
import MenImage from '../../public/Men.png';
import WomenImage from '../../public/Women.png';

const Collections = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <div className="relative">
                <video
                    src={ClothesVideo}
                    autoPlay
                    loop
                    muted
                    className="w-full h-auto object-cover"
                />
                
              
                <div className="absolute bottom-0 left-0 p-6">
                    <h1 className="text-4xl font-bold text-white">
                        Discover the Elegance of Ferrari
                    </h1>
                    <p className="text-lg mt-2 text-gray-300">
                        Immerse yourself in the luxurious world of Ferrari fashion. 
                        Explore our exclusive collection that embodies the spirit of speed, style, and sophistication. 
                        Follow us on this journey of elegance and craftsmanship as we reveal the artistry behind each piece.
                    </p>
                    <p className="text-lg mt-2 text-gray-300">
                        Our collection is designed not just to be worn, but to inspire a lifestyle that reflects the Ferrari ethos—passion, innovation, and performance. 
                        Experience timeless designs that blend modern trends with classic elegance, each item crafted with the finest materials to ensure both comfort and style.
                    </p>
                </div>
            </div>


            <div className="flex items-center justify-center">
                <div className="relative">
                    <img 
                        src={ClothesImage} 
                        alt="Clothes Collection" 
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                    />
          
                    <div className="absolute bottom-0 left-0 p-6">
                        <h2 className="text-3xl font-bold text-white">
                            Ferrari Collection
                        </h2>
                        <p className="text-md mt-2 text-gray-300">
                            Experience the artistry and performance that define our apparel.
                        </p>
                    </div>
                </div>
            </div>

           
            <div className="flex flex-row">
                <div className="relative w-1/2 h-screen">
                    <img 
                        src={MenImage} 
                        alt="Men's Collection" 
                        className="w-full h-full object-cover" 
                    />
                    <h3 className="absolute bottom-0 left-0 p-4 text-2xl font-bold text-white">
                        Men's Collection
                    </h3>
                </div>
                <div className="relative w-1/2 h-screen">
                    <img 
                        src={WomenImage} 
                        alt="Women's Collection" 
                        className="w-full h-full object-cover" 
                    />
                    <h3 className="absolute bottom-0 left-0 p-4 text-2xl font-bold text-white">
                        Women's Collection
                    </h3>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Collections;
