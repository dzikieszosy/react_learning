//Przycisk - po kliknięciu dodawana jest litera do tekstu
class App extends React.Component {
  state = {
    text: "",
  };

  handleClick = () => {
    // alert(this.state.text);
    const letter = "A";
    this.setState({
      text: this.state.text + letter,
    });
  };
  render() {
    return (
      <>
        <button onClick={this.handleClick}>Dodaj "A"</button>
        <h1>{this.state.text}</h1>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
