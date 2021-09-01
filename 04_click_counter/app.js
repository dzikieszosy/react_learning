class Counter extends React.Component {
  state = {
    count: 0,
    result: this.props.result,
  };

  handleMathClick = (type, number = 1) => {
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
  };

  render() {
    return (
      <>
        {/* <button onClick={this.handleMathClick.bind(this, "substraction", 10)}>
          -10
        </button>
        <button onClick={() => this.handleMathClick("substraction")}>-1</button>
        <button onClick={this.handleMathClick.bind(this, "reset")}>
          Reset
        </button>
        <button onClick={this.handleMathClick.bind(this, "addition", 1)}>
          +1
        </button>
        <button onClick={this.handleMathClick.bind(this, "addition", 10)}>
          +10
        </button> */}
        <MathButton
          name="-10"
          number="10"
          type="substraction"
          click={this.handleMathClick}
        />
        <MathButton
          name="-1"
          number="1"
          type="substraction"
          click={this.handleMathClick}
        />
        <MathButton
          name="reset"
          // number="10"
          type="reset"
          click={this.handleMathClick}
        />
        <MathButton
          name="+1"
          number="1"
          type="addition"
          click={this.handleMathClick}
        />
        <MathButton
          name="+10"
          number="10"
          type="addition"
          click={this.handleMathClick}
        />
        <h1>Liczba kliknięć: {this.state.count}</h1>
        <h1>Wynik: {this.state.result}</h1>
      </>
    );
  }
}

const MathButton = (props) => {
  const number = parseInt(props.number);
  return (
    <button onClick={() => props.click(props.type, number)}>
      {props.name}
    </button>
  );
};

const startValue = 0;
ReactDOM.render(
  <Counter result={startValue} />,
  document.getElementById("root")
);
