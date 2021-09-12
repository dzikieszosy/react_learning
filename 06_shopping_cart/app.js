class App extends React.Component {
  state = {
    availableProducts: 7,
    shoppingCart: 0,
  };

  handleRemoveFromCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart - 1,
    });
  };

  handleAddFromCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1,
    });
  };

  handleBuy = () => {
    // console.log("kupione");
    this.setState({
      availableProducts: this.state.availableProducts - this.state.shoppingCart,
      shoppingCart: 0,
    });
  };

  render() {
    return (
      <div>
        <button
          disabled={this.state.shoppingCart === 0 ? true : false}
          onClick={this.handleRemoveFromCart}
        >
          -
        </button>
        <span> {this.state.shoppingCart} </span>
        <button
          disabled={this.state.shoppingCart === this.state.availableProducts}
          onClick={this.handleAddFromCart}
        >
          +
        </button>
        {this.state.shoppingCart > 0 && (
          <button onClick={this.handleBuy}>Kup</button>
        )}
        {/* show only if
        shoppingCart > 0 */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
