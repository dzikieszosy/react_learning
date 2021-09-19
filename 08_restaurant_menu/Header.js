const Header = (props) => {
  const activeItems = props.items.filter((item) => item.active);

  const number = activeItems.length;

  return (
    <header>
      <h4>Wielkość zamówienia: {number}</h4>
      <h4>
        Do zapłaty:{" "}
        {number ? `${number * 10} złotych` : "nie kupujesz to nie płacisz"}{" "}
        złotych
      </h4>
    </header>
  );
};
