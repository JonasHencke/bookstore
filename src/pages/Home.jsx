import banner from "../images/banner.jpeg";
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <div className="banner-container">
        <img className="banner-img" src={banner}></img>
        <Link className="banner-button" to="/bookstore/books?page=1">Einkaufen</Link>
      </div>
      <div className="text-block">
        <h2>Ein Laden - viel Leidenschaft</h2>
        <p>
          Hier auf unserer Webseite können Sie in unserem Sortiment an Büchern stöbern.
          Die passenden Bücher zusammenstellen und diese anschließend nach Hause bestellen.
          <br/><br/>
          Und das auch noch umweltfreundlich!
        </p>
        <h2>Mehr als nur einer von vielen</h2>
        <p>
          Als eigenständiger Laden mit Online-Präsenz ist unser Team mit voller Leidenschaft dabei.
          Uns liegt eines besonders am Herzen, die Zufriedenheit unserer Kunden.
          Wir laden Sie ein unser reiches Sortiment an Büchern zu durchstöbern. und wünschen Ihnen sehr viel Spaß!
        </p>
      </div>
    </>
  );
}
