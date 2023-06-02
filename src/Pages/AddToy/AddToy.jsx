import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-hot-toast';

const AddToy = () => {
    const {user} = useContext(AuthContext)
    const [img, setimg] = useState('');
    const [name, setName] = useState('');
    const [sellerName, setSellerName] = useState('');
    const [sellerEmail, setSellerEmail] = useState(user?.email);
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState(100);
    const [rating, setRating] = useState(5);
    const [quantity, setQuantity] = useState(10);
    const [description, setDescription] = useState('');
    // console.log(user)


    const resetForm = () => {
        setimg('');
        setName('');
        setSellerName('');
        setSellerEmail('');
        setCategory('');
        setPrice(100);
        setRating(5);
        setQuantity(10);
        setDescription('');
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Perform form submission logic here
        const toyData = {
            img,
            name,
            sellerName,
            sellerEmail,
            category,
            price,
            rating,
            quantity,
            description,
        };

        // post toyData to the server
        try{
            const response = await fetch('https://toy-server-site-xi.vercel.app/toy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(toyData),
            });
            const data = await response.json();
            // console.log(data);
            if (data.acknowledged) {
                toast.success('Toy added successfully');
                resetForm();
            } else {
                alert('Something went wrong!');
            }

        }
        catch(error){
            console.log(error)
        }

       
    };

    return (
        <div className="container mx-auto p-2 md:p-5 border my-5 shadow-xl rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Add A Toy</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="flex gap-5 w-full">
                   
                    <div className="mb-4 w-full">
                        <label htmlFor="name" className="block mb-2 font-medium">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="mb-4 w-full">
                        <label htmlFor="img" className="block mb-2 font-medium">
                            Picture URL of the toy:
                        </label>
                        <input
                            type="text"
                            id="picture"
                            value={img}
                            onChange={(e) => setimg(e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                </div>
                <div className="flex gap-5 w-full">
                    <div className="mb-4 w-full">
                        <label htmlFor="sellerName" className="block mb-2 font-medium">
                            Seller Name:
                        </label>
                        <input
                            type="text"
                            id="sellerName"
                            value={sellerName}
                            onChange={(e) => setSellerName(e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="mb-4 w-full">
                        <label htmlFor="sellerEmail" className="block mb-2 font-medium">
                            Seller Email:
                        </label>
                        <input
                            type="email"
                            id="sellerEmail"
                            value={sellerEmail}
                            onChange={(e) => setSellerEmail(e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                </div>
                <div className="flex gap-5 w-full">
                    <div className="mb-4 w-full">
                        <label htmlFor="subcategory" className="block mb-2 font-medium">
                            Category:
                        </label>
                        <input
                            type="text"
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="mb-4 w-full">
                        <label htmlFor="price" className="block mb-2 font-medium">
                            Price:
                        </label>
                        <input
                            type="number"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(parseFloat(e.target.value))}
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                </div>
                <div className="flex gap-5 w-full">
                    <div className="mb-4 w-full">
                        <label htmlFor="rating" className="block mb-2 font-medium">
                            Rating:
                        </label>
                        <input
                            type="number"
                            id="rating"
                            value={rating}
                            onChange={(e) => setRating(parseFloat(e.target.value))}
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="mb-4 w-full">
                        <label htmlFor="quantity" className="block mb-2 font-medium">
                            Available Quantity:
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block mb-2 font-medium">
                        Detail Description:
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddToy;
