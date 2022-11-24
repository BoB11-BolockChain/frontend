import "src/components/Layout/module.scss";
import "src/routes/home.scss";

const Home = () => {
  return (
    <main>
      <div className="H_main">
        <div className="jumbotron">
          <div className="container">
            <h1>BoB 11th Project</h1>
            <a href="#" className="btn-main">
              Get Started
            </a>
          </div>
        </div>
      </div>

      <section className="supporting">
        <div className="container">
          <div className="col">
            <img src="https://content.codecademy.com/projects/broadway/design.svg" />
            <h2>Training</h2>
            <p>Make your own scenario Challenges beautifully.</p>
            <a href="#"> Learn More</a>
            <br />
          </div>

          <div className="col">
            <img src="https://content.codecademy.com/projects/broadway/develop.svg" />
            <h2>Challenges</h2>
            <p>Make your own scenario Challenges beautifully.</p>
            <a href="#"> Learn More</a>
            <br />
          </div>

          <div className="col">
            <img src="https://content.codecademy.com/projects/broadway/deploy.svg" />
            <h2>Scenario</h2>
            <p>Make your own scenario Challenges beautifully.</p>
            <a href="#"> Learn More</a>
            <br />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
