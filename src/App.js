import { NavLink, Route, Routes, useParams } from "react-router-dom";

const App = () => {
  const contents = [
    { id: 1, title: "HTML", desc: "HTML is..." },
    { id: 2, title: "JS", desc: "JS is..." },
    { id: 3, title: "React", desc: "React is..." },
  ];
  return (
    <div className="App">
      <h1>Hello, React Router DOM!</h1>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/topics"}>Topics</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/topics/*"} element={<Topics contents={contents} />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"*"} element={<>Not Found</>} />
      </Routes>
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

const Topics = (props) => {
  const { contents } = props;
  const navLinkList = contents.map((el) => (
    <li key={el.id}>
      <NavLink to={"/topics/" + el.id}>{el.title}</NavLink>
    </li>
  ));

  return (
    <div>
      <h2>Topics</h2>
      <ul>{navLinkList}</ul>
      <Routes>
        <Route path={"/:id"} element={<Topic contents={contents} />} />
      </Routes>
    </div>
  );
};

const Topic = (props) => {
  const { contents } = props;
  const params = useParams();
  const { id } = params;
  const idx = contents.map((el) => el.id).indexOf(parseInt(id));
  const content = contents[idx];
  return (
    <div>
      <h3>{content.title}</h3>
      {content.desc}
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
