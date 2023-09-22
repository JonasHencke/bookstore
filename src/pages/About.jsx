import EarthSVG from "../images/earth.svg";
import CustomerSVG from "../images/customer.svg";
import BooksSVG from "../images/books.svg";

export default function About() {
  return (
    <div className="about">
      <div className="about-banner">
        <h1>Über BookNook</h1>
        <p className="about-quote">
          Von allen Welten, die der Mensch erschaffen hat, ist die der Bücher
          die Gewaltigste.
        </p>
        <p className="about-author">Heinrich Heine</p>
      </div>
      <div className="about-display">
        <h2>Unsere Versprechen</h2>
        <div className="promises-display">
          <div className="promise-card">
            <img src={CustomerSVG} className="about-SVG"></img>
            <p className="promise-card-head">Rücksicht auf die Kunden</p>
            <p className="promise-card-text">
              zuvorkommend, verständisvoll, freundlich
            </p>
          </div>
          <div className="promise-card">
            <img src={EarthSVG} className="about-SVG"></img>
            <p className="promise-card-head">Rücksicht auf die Umwelt</p>
            <p className="promise-card-text">
              nachhaltiger Versand,
              <br /> Abholung in der Filliale möglich
            </p>
          </div>
          <div className="promise-card">
            <img src={BooksSVG} className="about-SVG"></img>
            <p className="promise-card-head">Rücksicht auf die Literatur</p>
            <p className="promise-card-text">
              vielfältiges Sortiment,
              Erhaltung von Kultur
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="about-description">
        <div className="about-description-left">
          <h2>Die Leidenschaft zum Lesen</h2>
          <p>
            Wir von BookNook wollen Lesen an jeden Menschen nahe bringen. Lesen ist ein Hobby, eine Leidenschaft und voller Kultur.
            Uns ist wichtig, dieses Stück Kultur zu erhalten und an nachfolgende Generationen weiter zu vermitteln.
          </p>
          <br />
          <p>
            Aus diesem Grund haben wir es uns zur Aufgabe gemacht wertvolle Bücher auf nachhaltige Art und Weise an die Menschen zu bringen.
            Sie können uns jederzeit in unserer Filiale antreffen und werden von unseren Mitarbeitern liebend gerne beraten.
            
          </p>
        </div>
        <div className="about-description-right">
          <p className="about-description-bold">Uns verbindet eine Sache:</p>
          <p>die Leidenschaft zum Lesen</p>
          <br/>
          <p className="about-description-bold">Kommen Sie uns gerne besuchen.</p>
          <p>Wir freuen uns auf Sie!</p>
        </div>
      </div>
    </div>
  );
}
