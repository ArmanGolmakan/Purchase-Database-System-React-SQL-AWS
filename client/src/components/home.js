import React from 'react';
import './home.css';
import ReactTable from 'react-table-v6';
import './react-table.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
    }
  }

  componentDidMount() {
    this.callAPI();
  }

  async callAPI() {
    const data = {
      bang: 'this is just to satisfy the code'
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    const response = await fetch('/api', options);
    const answer = await response.json();
    this.setState({ arr: answer.status })
  }


  renderTable() {
    console.log(this.state.arr);
    return (
      <div>
        <ReactTable
          data={this.state.arr}
          filterable
          columns={[
            {
              Header: "ID",
              accessor: "ID",
            },
            {
              Header: "First Name",
              accessor: "firstname"
            },
            {
              Header: "Last Name",
              accessor: "lastname"
            },
            {
              Header: "Date",
              accessor: "tarikh"
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }

  render() {
    return (
      <div className="mainContainer">
        {this.renderTable()}
      </div>
    );
  }
}




export default App;
