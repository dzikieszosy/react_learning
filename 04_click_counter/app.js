class Counter extends React.Component {
  state = {
    count: 0,
    result: 0,
  };

  handlMathClick(type, number = 1) {
    if (type === "substraction") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: prevState.result - number,
      }));
    } else if (type === "reset") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: 0,
      }));
    } else if (type === "addition") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: prevState.result + number,
      }));
    }
  }

  render() {
    return (
      <>
        <button onClick={this.handlMathClick.bind(this, "substraction", 10)}>
          -10
        </button>
        <button onClick={() => this.handlMathClick("substraction")}>-1</button>
        <button onClick={this.handlMathClick.bind(this, "reset")}>Reset</button>
        <button onClick={this.handlMathClick.bind(this, "addition")}>+1</button>
        <button onClick={this.handlMathClick.bind(this, "addition", 10)}>
          +10
        </button>
        <h1>Liczba kliknięć: {this.state.count}</h1>
        <h1>Wynik: {this.state.result}</h1>
      </>
    );
  }
}
ReactDOM.render(<Counter />, document.getElementById("root"));
