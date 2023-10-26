const ClientForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // You can add code here to handle form submission, like sending data to a server.
      console.log('Form submitted:', { name, email, phone });
      // Clear the form fields after submission
      setName('');
      setEmail('');
      setPhone('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>Contact Information</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  };
  