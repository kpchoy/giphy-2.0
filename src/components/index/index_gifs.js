import React from 'react';
import GifItem from './gif_item';

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
    let gifs = this.props.gifs
    if (!gifs) {
      gifs = <li>hello world</li>
    } else {
      gifs = Object.values(this.props.gifs).map(gif => {
        return (
          <GifItem key={gif.id} gif={gif} />
        )
      })
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