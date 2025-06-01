import './form.css';

function Form() {
  
  return (
    <div className="form">
      <h2>Please Fill Your information</h2>
      <form className="App-form">
          <input type="text" placeholder="Enter your First name" />
          <input type="text" placeholder="Enter your Second name" />
          <input type="email" placeholder="Enter your email" />
          <input type="number" placeholder="Enter your phone number" />
          <textarea className='Message' placeholder="Enter your message"></textarea>
          <button type="submit">Submit</button>
       </form>
    </div>
  );
}

export default Form;
