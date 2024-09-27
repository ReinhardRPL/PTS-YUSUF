import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import SportsCarsImage from '../../public/Sports Cars.png'; 
import VideoMobil from '../../public/Video Mobil.mp4'; 

const Sports_Cars = () => {
    const lamborghiniCars = [
        {
            name: 'Lamborghini Aventador',
            description: 'The Lamborghini Aventador combines luxury and power, featuring a V12 engine with 730 hp. Perfect for adrenaline seekers who also want comfort and style.',
            price: '$517,770',
            specs: [
                'Top speed: 217 mph',
                '0-60 mph: 2.9 seconds',
                'Horsepower: 730 hp',
                'Transmission: 7-speed ISR automatic'
            ]
        },
        {
            name: 'Lamborghini Huracán EVO',
            description: 'The Huracán EVO redefines performance with a naturally aspirated V10 engine. Its dynamic design and cutting-edge technology ensure a thrilling driving experience.',
            price: '$261,274',
            specs: [
                'Top speed: 202 mph',
                '0-60 mph: 2.5 seconds',
                'Horsepower: 640 hp',
                'Transmission: 7-speed dual-clutch'
            ]
        },
        {
            name: 'Lamborghini Urus',
            description: 'A luxury SUV like no other, the Lamborghini Urus combines Lamborghini’s sports car performance with the comfort of an SUV, featuring a twin-turbo V8 engine.',
            price: '$225,500',
            specs: [
                'Top speed: 190 mph',
                '0-60 mph: 3.5 seconds',
                'Horsepower: 641 hp',
                'Transmission: 8-speed automatic'
            ]
        },
    ];

    return (
        <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
            <Navbar />
            <div className="video-section" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
                <video 
                    src={VideoMobil} 
                    autoPlay 
                    loop 
                    muted 
                    style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', 
                        position: 'absolute', 
                        top: 0, 
                        left: 0 
                    }} 
                />
                <div style={{ 
                    position: 'absolute', 
                    bottom: '20px', 
                    left: '20px', 
                    textAlign: 'left', 
                    color: '#fff', 
                    zIndex: 1 
                }}>
                    <h1 style={{ 
                        fontSize: '48px', 
                        fontWeight: 'bold', 
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                        letterSpacing: '2px'
                    }}>
                        Ferrari
                    </h1>
                    <p style={{ 
                        fontSize: '24px', 
                        marginTop: '10px', 
                        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
                        letterSpacing: '1px'
                    }}>
                        Experience the unparalleled luxury and performance of the legendary Italian sports cars.
                    </p>
                </div>
            </div>
            <div className="sports-cars-section" style={{ padding: '20px', textAlign: 'center' }}>
                {lamborghiniCars.map((car, index) => (
                    <div 
                        key={index} 
                        style={{ 
                            marginBottom: '60px', 
                            textAlign: 'left', 
                            border: '1px solid #444', 
                            padding: '20px', 
                            borderRadius: '10px', 
                            backgroundColor: '#111' 
                        }}
                    >
                        <img 
                            src={SportsCarsImage} 
                            alt={`${car.name}`} 
                            style={{ width: '100%', height: 'auto', marginBottom: '20px' }} 
                        />
                        <h2 style={{ color: '#ffcc00', fontSize: '28px', marginBottom: '15px' }}>{car.name}</h2>
                        <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '10px' }}>{car.description}</p>
                        <p style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Price: {car.price}</p>
                        <ul style={{ paddingLeft: '20px' }}>
                            {car.specs.map((spec, idx) => (
                                <li key={idx} style={{ fontSize: '16px', lineHeight: '1.5' }}>{spec}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Sports_Cars;
