import PropTypes from 'prop-types';
import './ProductRow.css';

function ProductRow({ product }) {
  const name = product.stocked ? 
    product.name : 
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr className="ProductRow">
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

ProductRow.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    stocked: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ProductRow;
