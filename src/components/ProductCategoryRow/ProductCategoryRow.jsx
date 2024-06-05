import PropTypes from 'prop-types';
import './ProductCategoryRow.css';

function ProductCategoryRow({ category }) {
  return (
    <tr className="ProductCategoryRow">
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

ProductCategoryRow.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ProductCategoryRow;
