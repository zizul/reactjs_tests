ReactDOM.render(<h1>Witaj World</h1>, document.getElementById('header1'));

var ToggleText = React.createClass({
  getInitialState: function () {
    return {
      showDefault: true
    }
  },
  
  toggle: function (e) {
    // Prevent following the link.
    e.preventDefault();
    
    // Invert the chosen default.
    // This will trigger an intelligent re-render of the component.
    this.setState({ showDefault: !this.state.showDefault })
  },
  
  render: function () {
    // Default to the default message.
    var message = this.props.default;
    
    // If toggled, show the alternate message.
    if (!this.state.showDefault) {
      message = this.props.alt;
    }
    
    return (
      <div>
        <h2>Hello {message}!</h2>
        <a href="" onClick={this.toggle}>Toggle</a>
      </div>
    );
  }
});

ReactDOM.render(<ToggleText default="World" alt="Mars" />, document.getElementById('header2'));