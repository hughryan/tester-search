TesterSearch = React.createClass({

  mixins: [ReactMeteorData],

  getInitialState() {
    return {
      query: {},
      results: [],
      countries: [],
      devices: [],
      allCountriesChecked: false,
      allDevicesChecked: false,
      selectedCountries: new Set(),
      selectedDevices: new Set()
    };
  },

  updateQuery() {
    if (this.state.allCountriesChecked) {
      this.setState((state) => {delete state.query.country;});
    } else {
      this.setState((state) => {state.query.country = {$in: Array.from(state.selectedCountries)};});
    }
    if (this.state.allDevicesChecked) {
      this.setState((state) => {delete state.query.devices;}, () => {this.getResults();});
    } else {
      this.setState((state) => {state.query.devices = {$in: Array.from(state.selectedDevices)};}, () => {this.getResults();});
    }
  },

  getResults() {
    Meteor.call('searchAndSort', this.state.query, (error, result) =>{
      if (error) {
        console.log(error.reason);
        return;
      }
      console.log("Results:", result.map((tester) => { return "(" + tester.count + ")" + tester._id; }));
      this.setState((state) => {state.results = result.map((item) => { return item._id; });});
    });
  },

  onAllCountriesChange() {
    this.setState({allCountriesChecked: !this.state.allCountriesChecked}, () => {this.updateQuery();});
  },

  onAllDevicesChange() {
    this.setState({allDevicesChecked: !this.state.allDevicesChecked}, () => {this.updateQuery();});
  },

  onCountryChange(country, checked) {
    if (checked) {
      this.setState((state) => {state.selectedCountries.add(country);}, () => {this.updateQuery();});
    } else {
      this.setState((state) => {state.selectedCountries.delete(country);}, () => {this.updateQuery();});
    }
  },

  onDeviceChange(device, checked) {
    if (checked) {
      this.setState((state) => {state.selectedDevices.add(device);}, () => {this.updateQuery();});
    } else {
      this.setState((state) => {state.selectedDevices.delete(device);}, () => {this.updateQuery();});
    }
  },

  componentWillMount() {
    Meteor.call('getCountries', (error, result) => {
      if (error) {
        console.log(error.reason);
        return;
      }
      this.setState({
        countries: result.map((item) => {
          return item._id;
        })
      });
    });

    Meteor.call('getDevices', (error, result) => {
      if (error) {
        console.log(error.reason);
        return;
      }
      this.setState({
        devices: result.map((item) => {
          return item._id;
        })
      });
    });
  },

  componentDidMount() {
    this.updateQuery();
  },

  getMeteorData() {
    return { };
  },

  render() {
    return (
      <div className="tester-search">
        <header>
          <h1>Tester Search</h1>
        </header>
        <div className="options">
          <h3>Country:</h3>
          <SelectComponent allChecked={this.state.allCountriesChecked} selections={this.state.countries} onChange={this.onCountryChange} onAllChange={this.onAllCountriesChange}/>
          <h3>Device:</h3>
          <SelectComponent allChecked={this.state.allDevicesChecked} selections={this.state.devices} onChange={this.onDeviceChange} onAllChange={this.onAllDevicesChange}/>
        </div>
        <div className="results">
          {this.state.results.length > 0 ? <h3>Results:</h3> : <h3>No Results.</h3>}
          <ResultComponent results={this.state.results}/>
        </div>
      </div>
    );
  }
});
