const ListItems = (props) => {
  const items = props.items.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      name={item.name}
      active={item.active}
      changeStatus={props.changeStatus}
    />
  ));
  return (
    <div className="list">
      <h5>Twoje zamówienie:</h5>
      <ul>{items}</ul>
    </div>
  );
};
