import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

function FormUpdate() {
  const { id } = useParams(); // Get the id parameter from the URL
  const history = useHistory();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
  });

  useEffect(() => {
    // Fetch the existing data for the item using the provided id
    // You can make an API request here to get the data
    // Update the state with the fetched data
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${id}`); // Assuming this is your API endpoint
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make an API request to update the data
      const response = await fetch(`/api/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        history.push('/'); // Redirect to the home page after successful update
      } else {
        console.error('Error updating data');
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name='description'
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type='number'
            name='price'
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
        <button type='submit'>Update Product</button>
      </form>
    </div>
  );
}

export default FormUpdate;
