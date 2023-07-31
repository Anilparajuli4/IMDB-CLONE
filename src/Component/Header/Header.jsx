import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img
            className="header_icon"
            src="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbkZxU2kxd3c4QjNuem4tT3Z4NHV1VGpIdlJ3QXxBQ3Jtc0tsMF9uZl9KRlFlanBIejc3NTdzQktadWpHOVVxYXQzVjE5SHJpbXVlRUxsV0F2WFV4bTFZZEJaVmFDb052ZmNZcEJoQm1ZcWVoZW51RFRzOUczT2dSbmI3b0E5allUQXNtaGpRUHc4WDNjN1BITkxSTQ&q=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F69%2FIMDB_Logo_2016.svg%2F2560px-IMDB_Logo_2016.svg.png&v=KH-pw1cv34E"
            alt="logo"
          />
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span> Top rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
