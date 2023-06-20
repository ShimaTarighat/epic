import ImageSlider from "./ImageSlider";
import geralt from "./geralt.jpg";
import yennefer from "./yennefer.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>The Witcher</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Episodes</a>
            </li>
            <li>
              <a href="/">Characters</a>
            </li>
            <li>
              <a href="/">Gallery</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
        </nav>
      </header>
      <section id="hero">
        <div className="container">
          <h2>Enter the World of The Witcher</h2>
          <p>Experience the thrilling adventures of Geralt of Rivia.</p>
          <a href="/" className="button">
            Watch Now
          </a>
        </div>
      </section>
      <section id="about">
        <div className="container">
          <h2>About the Series</h2>
          <p>
            The Witcher is a fantasy drama series based on the book series of
            the same name by Andrzej Sapkowski. The show follows the story of
            Geralt of Rivia, a monster hunter in a world filled with
            supernatural creatures and political intrigues.
          </p>
        </div>
      </section>
      <section id="characters">
        <div className="container ">
          <h2>Main Characters</h2>
          <div className="character">
            <img
              src={geralt}
              alt="Geralt of Rivia"
              className="img-fluid rounded-1"
            />
            <h3>Geralt of Rivia</h3>
            <p>
              Geralt is a mutant monster hunter, known as a Witcher. He
              possesses superhuman abilities and is often caught in the middle
              of conflicts.
            </p>
          </div>
          <div className="character">
            <img
              src={yennefer}
              alt="Yennefer"
              className="img-fluid rounded-1"
            />
            <h3>Yennefer</h3>
            <p>
              Yennefer is a powerful sorceress with a tragic past. She becomes
              intertwined with Geralt's destiny.
            </p>
          </div>
        </div>
      </section>
      <section id="gallery">
        <div className="container">
          <h2>Gallery</h2>
          <div>
            <ImageSlider />
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <p>&copy; 2023 The Witcher. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
