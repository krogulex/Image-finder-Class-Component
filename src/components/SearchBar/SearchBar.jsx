import { Component } from "react"

export class SearchBar extends Component {


  render() {

    const { onSubmit } = this.props
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={onSubmit}>
          <button type="Submit" className="Button">
            <span className="Button-label">Search</span>
          </button>

          <input
            name="input"
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"

          />
        </form>
      </header>
    );
  }
}
