import Container from "../../../Components/Container";

const HappyCustomar = () => {
  return (
    <div>
      <Container>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="/src/assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png"
            className="max-w-sm  rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      </Container>
    </div>
  );
};

export default HappyCustomar;
