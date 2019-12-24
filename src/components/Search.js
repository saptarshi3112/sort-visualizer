import React, { 
  Component,
  Fragment
} from 'react';

import './Home.css';

import {
  generateRandomArrayMini
} from '../implementation/randomArray';

import {
  linearSearch
} from '../implementation/linearSearch';
import {
  binarySearch
} from '../implementation/binarySearch';

import {
  quickSort
} from '../implementation/quicksort';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: 'linearSearch',
      size: '40',
      array: [],
      keyIndexLinearSearch: ''
    }

    this.PaintBlocks = this.PaintBlocks.bind(this);
    this.searchClick = this.searchClick.bind(this);
    this.generateRandomArray = this.generateRandomArray.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  generateRandomArray(e) {
    e.preventDefault();

    this.setState({
      array: [],
      keyIndexLinearSearch: ''
    })

    generateRandomArrayMini(Number.parseInt(50))
    .then(res => {
      quickSort(res)
        .then(result => {
          this.setState({
            array: result.array
          });
        });
    });

  }

  PaintBlocks() {
    if (this.state.array.length > 0) {
      return this.state.array.map((item, key) => {
        if (key === this.state.keyIndexLinearSearch)
        return <div style={{
          backgroundColor: '#FF1744',
          height: `${item*6}px`,
          marginLeft: '5px',
          transition: '.3s',
          padding: '10px 5px',
          color: 'white',
          fontWeight: 'bolder',
          border: '1px solid black',
        }} key={key}>{item}</div>
        else
          return <div style={{
            backgroundColor: 'yellow',
            height: `${item*6}px`,
            marginLeft: '5px',
            transition: '.3s',
            padding: '10px 5px',
            color: 'black',
            fontWeight: 'bolder',
            border: '1px solid black'
          }} key={key}>{item}</div>
      });
    } else {
      return null;
    }
  }

  searchClick(e) {
    let input = window.prompt("Enter a number to search");
    e.preventDefault();

    this.setState({
      array: []
    })

    switch (this.state.searchName) {
      case ("linearSearch"): 
        // use the random array as it is.
        linearSearch(this.state.array, Number.parseInt(input))
        .then(result => {
          console.log(result);

          let resultSize = result.arrayStates.length;

          for (let i = 0; i < resultSize; i++) {
            setTimeout(() => {
              this.setState({
                keyIndexLinearSearch: result.arrayStates[i].idx,
                array: result.arrayStates[i].arr
              });
            }, 200*i);
          }

          this.setState({
            array: result.array
          });
        });
        break;
      case ("binarySearch"):
        binarySearch(this.state.array, Number.parseInt(input))
          .then(result => {
            let size = result.arrayStates.length;
            for (let i = 0; i < size; i++) {
              setTimeout(() => {
                this.setState({
                  keyIndexLinearSearch: result.arrayStates[i].idx,
                  array: result.arrayStates[i].arr
                });
              }, 200*i);
            }
          });
        break;
      default:
        break;
    }

  }
  
  render() { 
    return (
      <Fragment>
        <header className="navbar">
          <div className="logo">Sort and Search Visualizer</div>
          <div className="sort-form">
            <select name="searchName" onChange={this.onChange} className="pill form-select">
              <option disabled>Select a name</option>
              <option value="linearSearch">Linear Search</option>
              <option value="binarySearch">Binary Search</option>
            </select>
            <button 
              onClick={this.generateRandomArray} 
              className="pill sort-button"
              >Generate Array
            </button>
            <button 
              onClick={this.searchClick} 
              className="pill sort-button"
              >Search
            </button>
          </div>
          <div className="timer">
            Time Taken: 
          </div>
          <div className="nav-pills">
            <a href="/">Go to Sort</a>
          </div>
        </header>
        <div className="container-div">
          <div className="display-div">
            <div className="inner-div">
              <this.PaintBlocks />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
 
export default Search;
