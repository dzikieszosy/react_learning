//Przycisk - po kliknięciu dodawana jest litera do tekstu
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  // state = {
  //   text: "",
  // };

  handleClick() {
    // alert(this.state.text);
    const number = Math.floor(Math.random() * 10);

    // this.setState({
    //   text: this.state.text + letter,
    // });

    this.setState((prevState) => {
      return {
        text: this.state.text + number,
      };
    });
  }
  render() {
    return (
      <>
        <button onClick={this.handleClick}>Losuj od 1 do 9</button>
        <h1>{this.state.text}</h1>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
