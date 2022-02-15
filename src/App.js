const App = () => {
  return (
    <div className="App">
      <h1>Hello, React Router DOM!</h1>
      <Home />
      <Topics />
      <Contact />
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <h2>Home</h2>Home...
    </div>
  );
};

const Topics = () => {
  return (
    <div>
      <h2>Topics</h2>Topics...
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>Contact...
    </div>
  );
};

export default App;
