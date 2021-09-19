const ListItems = (props) => {
  const items = props.items.map((item) => (
    <Item key={item.id} name={item.name} active={item.active} />
  ));
  return (
    <div className="list">
      <h5>Twoje zamówienie:</h5>
      <ul>{items}</ul>
    </div>
  );
};
