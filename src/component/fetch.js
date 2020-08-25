import React from "react";
import './mycss.css';
import { Cascader } from 'antd';
import { Input } from 'antd';
import { Divider } from 'antd';

const options = [
  {
    value: 'Ascending',
    label: 'Ascending',
  },
  {
    value: 'Descecding',
    label: 'Descecding',
  },
  {
    value: 'Confirmed',
    label: 'Confirmed',
  },
];

function onChange(value) {
  console.log(value);
}

export class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('http://disease.sh/v3/covid-19/countries')
      .then(res => res.json())
      .then(json => {
        this.setState({

          isLoaded: true,
          items: json,

        }
        )

      })
  }
  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading....  </div>;
    } else {

      return (
        <div>
          <div className="Datadisplay-style">
          <h1> <span style={{ color: "red" }}>Coronavirus  Disease </span> (COVID-19) Countries Data </h1>
                    <Divider style={{ marginLeft: -10 }} />
          <div class="Cascader-style">
          <p> <b>Sort By : </b> <Cascader options={options} onChange={onChange} placeholder="Please select" />
            
           <span style={{marginLeft:250}}> <b> Search By : </b> <Input style={{width: 300}}placeholder="Search ... " /></span></p>
          </div >

          <table>

            <tr>
                <th> Ranking </th>
                <th> Country </th>
                <th> Cases </th>
                <th> Active </th>
                <th> Death </th>
                <th> Critical </th>
                <th> Recovered </th>
            </tr>

          </table>


          {items.map((postdetails, index) => {
            return <div>

            <table>
              <tr>
                <td> 01 </td>
                <td> {postdetails.country} </td>
                <td> {postdetails.cases} </td>
                <td> {postdetails.active} </td>
                <td> {postdetails.deaths} </td>
                <td> {postdetails.critical} </td>
                <td> {postdetails.recovered} </td>
            </tr>
          </table>
             
            </div>
            
          })}

        </div>
      
        </div>

      );
    }
  }
}