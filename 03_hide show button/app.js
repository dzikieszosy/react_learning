class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageIsActive: false,
    };
    this.handleMessageButton = this.handleMessageButton.bind(this);
  }

  handleMessageButton() {
    this.setState({
      messageIsActive: !this.state.messageIsActive,
    });
  }

  render() {
    const text =
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur iusto facilis, tempore eaque maiores dolores! Amet, veritatis doloremque quasi fugiat debitis magni dolorum facilis voluptate ipsa, blanditiis ducimus error officia!";
    return (
      <React.Fragment>
        <button onClick={this.handleMessageButton}>
          {this.state.messageIsActive ? "Ukryj" : "Pokaż"}
        </button>
        <p>{this.state.messageIsActive && text}</p>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Message />, document.getElementById("root"));
