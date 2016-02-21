OptionComponent = React.createClass({

  propTypes: {
    option: React.PropTypes.string.isRequired,
  },

  getInitialState() {
    return {
      checked: false
    };
  },

  toggleOption(event) {
    this.setState({checked: !this.state.checked},
      () => {this.props.onChange(event.target.name, this.state.checked);});
  },

  render() {
    return(
      <div>
      <input type="checkbox"
              name={this.props.option}
              readOnly={true}
              checked={this.state.checked}
              onChange={this.toggleOption} />{this.props.option}
      </div>
    );
  }
});
