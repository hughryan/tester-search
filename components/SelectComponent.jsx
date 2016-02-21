SelectComponent = React.createClass({

  propTypes: {
    selections: React.PropTypes.array.isRequired,
  },

  render() {
    return(
      <div>
          <fieldset>
            <input type="checkbox" name="All" value="All" key="All"
              readOnly={true}
              checked={this.props.allChecked}
              onChange={this.props.onAllChange}/>All
            {this.props.selections.map((option, index) => {
                return <OptionComponent key={index} option={option} onChange={this.props.onChange}/>;
            })}
          </fieldset>
    </div>
    );
  }
});
