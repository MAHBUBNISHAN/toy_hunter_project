import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-hot-toast';

const MyToys = () => {
  const [toys, setToys] = useState([]);
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {

    // fetch my toys from database

    const fetchToys = async () => {
      const response = await fetch(`https://toy-server-site-xi.vercel.app/toys/${user.email}`);
      const data = await response.json();
      setToys(data);
      setIsLoading(false);
    }
    fetchToys();


  }, [])
  const handleDeleteToy = (id) => {
  };



  if (isLoading) {
    return (
      <div className="text-center min-h-screen items-center justify-center text-2xl text-red-500 flex ">Loading...</div>
    )
  }

  const deleteToy = async (toyid) => {

    // first confirm if the user wants to delete the toy
    const confirmDelete = window.confirm('Are you sure you want to delete this toy?');
    if (confirmDelete) {
      const response = await fetch(`https://toy-server-site-xi.vercel.app/toy/${toyid}`, {
        method: 'DELETE',
      });
      const res = await response.json();
      console.log(res);
      if (res.acknowledged) {
        setToys((prevToys) => prevToys.filter((toy) => toy._id !== toyid));

        toast.success('Toy deleted successfully');
      }
    }
  }

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">My Toys</h2>
      <table className="min-w-full divide-y divide-gray-200 px-12">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Picture
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Seller Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Seller Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Sub-category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rating
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Quantity
            </th>

            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        {
          toys.length === 0 ? <div className="text-center items-center justify-center text-2xl text-red-500 flex py-8">No Toys Found</div> :
            <tbody className="bg-white divide-y divide-gray-200">
              {toys.map((toy) => (
                <tr key={toy._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={toy.img}
                      alt={toy.name}
                      className="w-12 h-12 rounded-full"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{toy.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{toy.sellerName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{toy.sellerEmail}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{toy.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{toy.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{toy.rating}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{toy.quantity}</td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link
                      to={`/toy/update/${toy._id}`}
                      className="text-blue-500 hover:underline mr-2"
                    >
                      Update
                    </Link>
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => deleteToy(toy._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
        }
      </table>
    </div>
  );
};

export default MyToys;
