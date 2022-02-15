const Nav = (props) => {
  const { list } = props;

  return (
    <nav>
      <ul>
        {list.map((el) => (
          <li key={el.id}>
            <a
              href={el.id}
              data-id={el.id}
              onClick={(event) => {
                event.preventDefault();
                console.log("trigger");
                props.onClick(event.target.dataset.id);
              }}
            >
              {el.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
