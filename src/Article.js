const Article = (props) => {
  const { title, desc } = props;
  return (
    <article>
      <h2>{title}</h2>
      {desc}
    </article>
  );
};

export default Article;
