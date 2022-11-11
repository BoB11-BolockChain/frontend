import Dropdown from "src/components/Dropdown";
import "src/components/Layout/module.scss";
import "src/routes/home.scss";

const Home = () => {
  return (
    <main>
      <div class="H_main">
        <div class="jumbotron">
          <div class="container">
            <h1>BoB 11th Project</h1>
            <a href="#" class="btn-main">
              Get Started
            </a>
          </div>
        </div>
      </div>

      <section class="supporting">
        <div class="container">
          <div class="col">
            <img src="https://content.codecademy.com/projects/broadway/design.svg" />
            <h2>Training</h2>
            <p>Make your own scenario Challenges beautifully.</p>
            <a href="#"> Learn More</a>
            <br />
          </div>

          <div class="col">
            <img src="https://content.codecademy.com/projects/broadway/develop.svg" />
            <h2>Challenges</h2>
            <p>Make your own scenario Challenges beautifully.</p>
            <a href="#"> Learn More</a>
            <br />
          </div>

          <div class="col">
            <img src="https://content.codecademy.com/projects/broadway/deploy.svg" />
            <h2>Scenario</h2>
            <p>Make your own scenario Challenges beautifully.</p>
            <a href="#"> Learn More</a>
            <br />
          </div>
        </div>
      </section>

      <Dropdown />
    </main>
  );
};

export default Home;
