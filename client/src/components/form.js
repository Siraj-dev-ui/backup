import React, { useEffect, useState } from 'react';
import { axios } from '../utils/axios';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

function Form() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productStock, setProductStock] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productImage, setProductImage] = useState('');
  const [products, setProducts] = useState([]);

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: productName,
        price: parseFloat(productPrice),
        stock: parseInt(productStock),
        category: productCategory,
        image: productImage,
      };
      const response = await axios.post('/api/product', payload);
      // Clear input fields after successful submission
      setProductName('');
      setProductPrice('');
      setProductStock('');
      setProductCategory('');
      setProductImage('');
      // Refresh the list of products
      fetchProducts();
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const handleDelete = (id) => {
    console.log('delete item');
  };
  const onDelete = (id) => {
    console.log('deleted item', id);
    setProducts(products.filter((item) => item._id !== id));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/product');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <>
      <div
        style={{
          border: '2px black solid',
          margin: 'auto',
          borderRadius: '5px',
          width: '70%',
        }}
        className='container'
      >
        <form onSubmit={addProduct}>
          <div className='form'>
            <h1 style={{ color: 'black' }}>Add Product</h1>
            <div>
              <input
                type='text'
                placeholder='Product Name'
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
              <input
                type='number'
                placeholder='Price'
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                required
              />
              <input
                type='number'
                placeholder='Stock'
                value={productStock}
                onChange={(e) => setProductStock(e.target.value)}
                required
              />
              <input
                type='text'
                placeholder='Image Url'
                value={productImage}
                onChange={(e) => setProductImage(e.target.value)}
                required
              />
              <input
                type='text'
                placeholder='Category'
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                required
              />
              <button
                type='submit'
                style={{
                  backgroundColor: 'green',
                  color: 'white',
                  cursor: 'pointer',
                }}
              >
                Add Product
              </button>
            </div>
          </div>
        </form>
      </div>

      <div>
        <table class='table mx-auto'>
          //{' '}
          <tbody>
            {products.map((product) => {
              return (
                <tr onClick={() => console.log('clicked on product')}>
                  <td id='name'>{product.name}</td>
                  <td id='price'>{product.price}</td>
                  <td id='stock'>{product.stock}</td>
                  <td id='category'>{product.category}</td>
                  {/* <td><a class="btn btn-primary" role="button">Update</a></td>   */}{' '}
                  {/* <Link
                    to={`/update/${product._id}`}
                    className="btn btn-sm btn-success me-2"
                  >
                    Update
                  </Link> */}
                  <td>
                    <a
                      className='btn btn-success me-2'
                      onClick={() => handleDelete(product._id)}
                      role='button'
                    >
                      Update
                    </a>
                  </td>
                  <td>
                    <a
                      class='btn btn-danger'
                      onClick={() => onDelete(product._id)}
                      role='button'
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              );
            })}
            //{' '}
          </tbody>
        </table>
        {/* {products.map((product) => {
          return <ProductCard product={product} onDelete={onDelete} />;
        })} */}
      </div>
    </>
  );
}

export default Form;

//BACKUP CODE / ORIGINAL CODE
// import React, { useEffect, useState } from 'react';
// import axios from 'axios'
// import { Link } from 'react-router-dom';

// function Form() {

//   const [productName, setProductName] = useState();
//   const [productPrice, setProductPrice] = useState();
//   const [productStock, setProductStock] = useState();
//   const [productCategory, setProductCategory] = useState();

//   const [products, setProducts] = useState([]);

//   const style = {
//     margin: "10px",
//   }

//   const addProduct = (e) => {
//     let payload = { name: productName, price: productPrice, stock: productStock, category: productCategory }
//     axios.post('http://localhost:5000/api/form', payload)
//       .then()
//       .catch()

//   }

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/form/')
//       .then((res) => {
//         setProducts(res.data)
//       })
//       .catch()
//   })

// const handleDelete=(id)=>{
//   axios.delete('http://localhost:5000/api/form/'+id)
// }

//   return (

//     <div style={{ border: "2px black solid", margin: 'auto', borderRadius: '5px', width: "50%" }} className="container">
//       <form onSubmit={addProduct}>
//         <div className="form">
//           <h1 style={{ color: "black" }} >Products</h1>
//           <div >
//             <input style={style}
//               type="text"
//               placeholder="Product Name"
//               onChange={(e => setProductName(e.target.value))}
//             />
//             <input style={style}
//               type="number"
//               placeholder="Price"
//               onChange={(e => setProductPrice(e.target.value))}
//             />
//             <input style={style}
//               type="number"
//               placeholder="Stock"
//               onChange={(e => setProductStock(e.target.value))}
//             />
//             <input style={style}
//               type="text"
//               placeholder="Category"
//               onChange={(e => setProductCategory(e.target.value))}
//             />
//             <button type='submit' style={style}>Add Product</button>
//             <button style={style}>Update Product</button>
//             <button style={style}>Delete Product</button>
//           </div>
//         </div>
//       </form>

//       <div>
//         <table class="table mx-auto">
//           <tbody>
//             <th>Product Name</th>
//             <th>Price</th>
//             <th>Stock</th>
//             <th>Category</th>
//             {products.map(product => {
//               return (
//                 <tr>
//                   <td id='name'>{product.name}</td>
//                   <td id='price'>{product.price}</td>
//                   <td id='stock'>{product.stock}</td>
//                   <td id='category'>{product.category}</td>
//                   {/* <td><a class="btn btn-primary" role="button">Update</a></td>   */} <Link to={`/update/${product._id}`} className="btn btn-sm btn-success me-2">Update</Link>
//                   <td><a class="btn btn-danger" onClick={()=>handleDelete(product._id)} role="button">Delete</a></td>
//                 </tr>
//               )
//             })}

//           </tbody>

//         </table>
//       </div>

//     </div>
//   );
// }

// export default Form;
