import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const UpdateToy = () => {
    const { id } = useParams(); // Get the toy ID from the URL params
    const [fetchedToy, setFetchedToy] = useState({}); // Store the fetched toy data
    const [toy, setToy] = useState({
        _id: 0,
        picture: '',
        name: '',
        sellerName: '',
        sellerEmail: '',
        category: '',
        price: 0,
        rating: 0,
        quantity: 0,
        description: '',
    });

    useEffect(() => {
        // Simulating API call to fetch the toy data by ID
        const fetchToyById = async () => {
            try {

                fetch(`https://toy-server-site-xi.vercel.app/categories/${id}`)
                    .then(res => res.json())
                    .then(data => {
                        setToy(data);
                        setFetchedToy(data);
                    })
                    .catch(error => console.error(error))


                // const res = await fetch(`https://toy-server-site-xi.vercel.app/toy/${id}`,{
                //     headers: {
                //         'Content-Type': 'application/json',
                //         'Accept': 'application/json'
                //     }
                // });
                // // console.log(response)

                // const toyData = await res.json();
                // console.log(toyData)
                // setToy(toyData);
                // setFetchedToy(toyData);

            } catch (error) {
                console.error(error);
            }
        };

        fetchToyById();
    }, [id]);

    const updateToy = async (updatedToy) => {
        const response = await fetch(`https://toy-server-site-xi.vercel.app/toy/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedToy),
        });
        const res = await response.json();
        console.log(res);
        if (res.acknowledged) {
            toast.success('Toy updated successfully');
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // filter only the data that has changed
        const updatedToy = Object.keys(toy).reduce((acc, key) => {
            if (toy[key] !== fetchedToy[key]) {
                acc[key] = toy[key];
            }
            return acc;
        }, {});
        console.log('Updated toy data:', updatedToy);
        updateToy(updatedToy);


    };



    return (
        <div className="container mx-auto px-12 my-8">
            <h2 className="text-2xl font-semibold mb-4">Update Toy</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                    <label htmlFor="picture" className="block mb-2 font-medium">
                        Picture URL of the toy:
                    </label>
                    <input
                        type="text"
                        id="picture"
                        value={toy.img}
                        onChange={(e) =>
                            setToy((prevToy) => ({
                                ...prevToy,
                                picture: e.target.value,
                            }))
                        }
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2 font-medium">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={toy.name}
                        onChange={(e) =>
                            setToy((prevToy) => ({
                                ...prevToy,
                                name: e.target.value,
                            }))
                        }
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="sellerName" className="block mb-2 font-medium">
                        Seller Name:
                    </label>
                    <input
                        type="text"
                        id="sellerName"
                        value={toy.sellerName}
                        onChange={(e) =>
                            setToy((prevToy) => ({
                                ...prevToy,
                                sellerName: e.target.value,
                            }))
                        }
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="sellerEmail" className="block mb-2 font-medium">
                        Seller Email:
                    </label>
                    <input
                        type="email"
                        id="sellerEmail"
                        value={toy.sellerEmail}
                        onChange={(e) =>
                            setToy((prevToy) => ({
                                ...prevToy,
                                sellerEmail: e.target.value,
                            }))
                        }
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block mb-2 font-medium">
                        Ccategory:
                    </label>
                    <input
                        type="text"
                        id="category"
                        value={toy.category}
                        onChange={(e) =>
                            setToy((prevToy) => ({
                                ...prevToy,
                                category: e.target.value,
                            }))
                        }
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block mb-2 font-medium">
                        Price:
                    </label>
                    <input
                        type="number"
                        id="price"
                        value={toy.price}
                        onChange={(e) =>
                            setToy((prevToy) => ({
                                ...prevToy,
                                price: parseFloat(e.target.value),
                            }))
                        }
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="rating" className="block mb-2 font-medium">
                        Rating:
                    </label>
                    <input
                        type="number"
                        id="rating"
                        value={toy.rating}
                        onChange={(e) =>
                            setToy((prevToy) => ({
                                ...prevToy,
                                rating: parseFloat(e.target.value),
                            }))
                        }
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="quantity" className="block mb-2 font-medium">
                        Available Quantity:
                    </label>
                    <input
                        type="number"
                        id="quantity"
                        value={toy.quantity}
                        onChange={(e) =>
                            setToy((prevToy) => ({
                                ...prevToy,
                                quantity: parseInt(e.target.value),
                            }))
                        }
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block mb-2 font-medium">
                        Detail Description:
                    </label>
                    <textarea
                        id="description"
                        value={toy.description}
                        onChange={(e) =>
                            setToy((prevToy) => ({
                                ...prevToy,
                                description: e.target.value,
                            }))
                        }
                        className="w-full border border-gray-300 rounded-md p-2"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateToy;
