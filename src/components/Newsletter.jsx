import "./Newsletter.css";

function Newsletter() {
  return (
    <>
      <div className="news">
        <div className="news-text">
          <h2>Newsletter</h2>
          <form>
            <input type="email" placeholder="Enter your mail" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
