import Nav from "./Nav";
import { useEffect, useState } from "react";
import Article from "./Article";

const Loading = () => <div>Now Loading...</div>;

const App = () => {
  const [article, setArticle] = useState({
    id: 0,
    title: "Welcome",
    desc: "Hello, React & Ajax",
  });
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("list.json")
      .then((res) => res.json())
      .then((json) => setList(json))
      .then(() => setLoading(false));
  }, []);

  return (
    <div className="App">
      <h1>WEB</h1>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Nav
            list={list}
            onClick={(id) => {
              fetch(id + ".json")
                .then((res) => res.json())
                .then((json) => setArticle({ ...json }));
            }}
          />
          <Article title={article.title} desc={article.desc} />
        </>
      )}
    </div>
  );
};

export default App;
