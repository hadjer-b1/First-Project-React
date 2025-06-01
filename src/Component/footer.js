import './footer.css';

function footer() {
  return (
    <div className="App-footer">
      <footer>
        <ul className="footer-nav">
          <li>Home</li>
          <li>Contact</li>
        </ul>
        <div className = "contactUs">
        <h2 >Contact us</h2>
            <ul className='contact-info'>
                <li>+0123456789</li>
                <li>+0123456789</li>
                <li>This.is.an@email.com</li>
            </ul>
        </div>
      </footer>
    </div>
  );
}

export default footer;
