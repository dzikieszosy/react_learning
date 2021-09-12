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
    const { shoppingCart, availableProducts } = this.state;
    const style = shoppingCart === 0 ? { opacity: 0.3 } : {};

    return (
      <div>
        <button
          disabled={shoppingCart === 0 ? true : false}
          onClick={this.handleRemoveFromCart}
        >
          -
        </button>

        <span style={style}> {shoppingCart} </span>

        <button
          disabled={shoppingCart === availableProducts}
          onClick={this.handleAddFromCart}
        >
          +
        </button>
        {shoppingCart > 0 && <button onClick={this.handleBuy}>Kup</button>}
        {/* show only if
        shoppingCart > 0 */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
