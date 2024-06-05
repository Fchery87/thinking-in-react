import PropTypes from 'prop-types';
import './SearchBar.css';

function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockChange }) {
  return (
    <form className="SearchBar">
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockChange(e.target.checked)}
        />
        {' '}
        Only show products in stock
      </p>
    </form>
  );
}

SearchBar.propTypes = {
  filterText: PropTypes.string.isRequired,
  inStockOnly: PropTypes.bool.isRequired,
  onFilterTextChange: PropTypes.func.isRequired,
  onInStockChange: PropTypes.func.isRequired,
};

export default SearchBar;
