ResultComponent = React.createClass({
  render() {
    return(
      <div>
        <ol>
          {this.props.results.map((result) => {
            return(
              <li key={result}>
                {result}
              </li>
            );
          })}
        </ol>
      </div>
    );}
});
