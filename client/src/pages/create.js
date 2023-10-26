import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';

// const [form.Data, setFormData] = useState({
//     brand: '',
//     model: '',
//     color: '',
//     quantity: '',
// });

// const handleChange = (=) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//         prevData,
//         name : value,
//     }));
// };

// const handleSubmit = async (e) => {
//     e.preventDefault();

//     try { 
//         const response = await axios.post('YOUR_API_ENDPOINT', FormData);
//         console.log('Sneaker data submitted: ', response.data);
//         //Successful submission message here,
//     } catch (error) {
//         console.error('Error submitting data: ', error);

//     }

function CREATE() {
    const [title, setTitle ] = useState();
    const [type, setType ] = useState();
    const [size, setSize ] = useState();
    const [price, setPrice ] = useState();
    const [quantity, setQuantity ] = useState();

    const handleSubmit = () => { //handleSubmit onButton Click
        const payload = { //Schema layout how data is presented in the database
            title: title,
            type: type,
            size: size,
            price: price,
            quantity: quantity
        }
    
        //axios.post('http://localhost:5001/api/products', payload)
        try {
            const response = axios.post('http://localhost:5001/api/sofas', payload);
            console.log('Order submitted successfully:', response.data); //success response here
        } catch (error) {
            console.error('Error submitting data:', error); //handle error here
        }
    };
// 

// const getName = (e) => {
//     let value = e.target.value;
//     setName(value);
// }

// const getType = (e) => {
//     let value = e.target.value;
//     setType(value);
// }

// const getSize = (e) => {
//     let value = e.target.value;
//     setSize(value);
// }

// const getQuantity = (e) => {
//     let value = e.target.value;
//     setQuantity(value);
// }



return (
 <div>

    <Container> 
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
                <Form.Control
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                />
            </Form.Group>

            <Form.Group controlId="type">
            <Form.Label>Type</Form.Label>
            <Form.Control
            type="text"
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
            />
            </Form.Group> 
            
            <Form.Group controlId="size">
            <Form.label>Size</Form.label>
            <Form.Control
            type="text"
            name="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            required
            />
            </Form.Group>

            <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
            type="number"
            name="quantity"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            />
            </Form.Group>


            <Form.Group controlId="quantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
            type="number"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)} //what is this function? please update developer language
            required
            />
            </Form.Group>

     </Container> 
    </div>
)}

export default CREATE
