const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy!</p>;
const NegativeMessage = () => <p>Nie możesz obejrzeć tego filmu...</p>;

class CheckBoxAgeConfirmation extends React.Component {
  state = {
    inConfirmed: false,
  };

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
    });
  };

  displayMessage = () => {
    if (this.state.isConfirmed) {
      return <PositiveMessage />;
    } else {
      return <NegativeMessage />;
    }
  };
  render() {
    //  console.log(this.state.isConfirmed);
    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <input
          type="checkbox"
          id="age"
          onChange={this.handleCheckboxChange}
          checked={this.state.isConfirmed}
        />
        <label htmlFor="age">Mam co najmniej 16 lat</label>
        {this.displayMessage()}
      </>
    );
  }
}

ReactDOM.render(<CheckBoxAgeConfirmation />, document.getElementById("root"));
