import ImageSlider from "./ImageSlider";
import yennefer from "./yennefer.jpg";
import "./App.css";

function App() {
  return (
    <div className="App ">
      <div className="container-fluid">
        <section>
        <div className="row">
          <header>
        <h1>The Witcher</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Main Characters</a>
            </li>
            <li>
              <a href="/">Gallery</a>
            </li>
          </ul>
        </nav>
      </header>
</div>
</section>
    <section >
  <div className="row">
    <div className="col-md-6 bg-dark ">
  <img src="https://flxt.tmsimg.com/assets/p17580215_b_v13_ac.jpg" alt=" IMDB" className="img-fluid"/></div>
      <div className="col-md-6 " id="hero">
        <h2>Enter the World of The Witcher</h2>
        <p>Witchernetflix</p>
        <p>The witcher Season 3 begins on the 29th of June 2023</p>
        <p>Experience the thrilling adventures of Geralt of Rivia.</p>
        <a href="https://www.imdb.com/title/tt5180504/" className="btn btn-secondary" title="Click here to watch">
          Watch Now
        </a>
      </div>
      </div>
    </section>
      <section id="about">
        <div className="">
          <h2 className="text-3d">About the Series</h2>
          <p>
            The Witcher is a fantasy drama series based on the book series of
            the same name by Andrzej Sapkowski. The show follows the story of
            Geralt of Rivia, a monster hunter in a world filled with
            supernatural creatures and political intrigues.
          </p>
        </div>
      </section>
      <section id="characters">
        <div className="container-fluid ">
          <h2 className="text-3d">Main Characters</h2>
  <div class="row text-center">
    <div class="col">
      <img
        src="https://hips.hearstapps.com/hmg-prod/images/henry-cavill-the-witcher-season-2-1639401516.jpg"
        alt="Geralt of Rivia"
        class="img-fluid rounded-2"
      />


      <h3>Geralt of Rivia</h3>
      <p>
        Geralt is a mutant monster hunter, known as a Witcher. He possesses
        superhuman abilities and is often caught in the middle of conflicts.
      </p>
</div>
          <div className="col">
            <img
              src={yennefer}
              alt="Yennefer"
              className="img-fluid rounded-2"
            />
            <h3>Yennefer</h3>
            <p>
              Yennefer is a powerful sorceress with a tragic past. She becomes
              intertwined with Geralt's destiny.
            </p>
          </div>
          </div>
        </div>
      </section>
      <section id="gallery">
        <div >
          <h2 className="text-3d">Gallery</h2>
          <div>
< ImageSlider/>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <p>&copy; 2023 The Witcher. All rights reserved.</p>
        </div>
      </footer>
      </div>
    </div>
  );
}

export default App;
