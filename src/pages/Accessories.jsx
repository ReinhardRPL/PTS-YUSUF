import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import BanImage from '../../public/Ban.png'; 

const Contact = () => {
    const contacts = [
        {
            title: 'Sporty Tire',
            description: 'Tire designed for high performance with maximum traction.',
            price: '$100'
        },
        {
            title: 'Touring Tire',
            description: 'Tire designed for long journeys with maximum comfort.',
            price: '$120'
        },
        {
            title: 'Off-road Tire',
            description: 'Tire suitable for heavy terrain and off-road conditions.',
            price: '$140'
        },
        {
            title: 'Winter Tire',
            description: 'Tire specifically designed for cold weather and snow.',
            price: '$150'
        },
        {
            title: 'Racing Tire',
            description: 'Tire optimized for speed and sharp handling.',
            price: '$200'
        },
        {
            title: 'Cruiser Tire',
            description: 'Tire providing comfort and style for relaxed driving.',
            price: '$110'
        },
        {
            title: 'Trail Tire',
            description: 'Tire designed for trail motorcycles and difficult terrains.',
            price: '$180'
        },
        {
            title: 'City Tire',
            description: 'Tire ideal for everyday use in the city.',
            price: '$90'
        },
        {
            title: 'Eco Tire',
            description: 'Environmentally friendly tire with better fuel efficiency.',
            price: '$100'
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <div className="container mx-auto py-10">
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {contacts.map((contact, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-5 transition-transform transform hover:scale-105">
                            <img
                                src={BanImage}
                                alt={contact.title}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h2 className="text-2xl font-semibold mb-2">{contact.title}</h2>
                            <p className="text-gray-300 mb-2">{contact.description}</p>
                            <p className="text-lg font-bold mb-1">Price: <span className="text-gray-300">{contact.price}</span></p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
