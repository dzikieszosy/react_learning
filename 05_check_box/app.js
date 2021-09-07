const ValidationMessage = (props) => <p>{props.txt}</p>;

// const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy!</p>;
// const NegativeMessage = () => <p>Nie możesz obejrzeć tego filmu...</p>;

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmitted: false,
  };

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false,
    });
  };

  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <ValidationMessage txt="Możesz obejrzeć film. Zapraszamy!" />;
      } else {
        return <ValidationMessage txt="Nie możesz obejrzeć tego filmu..." />;
      }
    } else {
      return null;
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault(); //powstrzyma przeładowanie strony
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true,
      });
    }
  };
  render() {
    //  console.log(this.state.isConfirmed);
    const { isConfirmed } = this.state; //pobiera obiekt this.state a z niego tylko właściwość isConfirmed

    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="checkbox"
            id="age"
            onChange={this.handleCheckboxChange}
            checked={isConfirmed}
          />
          <label htmlFor="age">Mam co najmniej 16 lat</label>
          <br /> <br />
          <button type="submit">Kup Bilet</button>
        </form>
        {this.displayMessage()}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
