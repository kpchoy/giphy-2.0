import React from 'react';

class IndexGifs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ""
    }

    this.handlefetchGifs = this.handlefetchGifs.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
  }

  handlefetchGifs() {

    this.props.fetchGifs(this.state.query)
  }

  updateQuery(e) {
    this.setState({ query: e.target.value }, () => {
      console.log(this.state)
    })

  }

  render() {
    let gifs
    if (!gifs) {
      gifs = () => (<li>gifs are loading at this time</li>)
    } else {
      gifs = this.props.gifs.map(gif => (
        <li>
          {gif.slug}
        </li>
      )
      )
    }

    return (
      <div>
        Welcome to the index gifs page

        <form onSubmit={this.handlefetchGifs}>
          <input type="text"
            onChange={this.updateQuery}
            value={this.state.query}
          />
          <button>Search</button>
        </form>

        <ul>
          {gifs}
        </ul>
      </div>
    )
  }
}

export default IndexGifs;