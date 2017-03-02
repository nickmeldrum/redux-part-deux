import { connect } from 'react-redux'
import Products from '../components/products.js'
import { getProducts } from '../actions/products.js'

function mapStateToProps(state) {
  return {
    fetching: state.product.fetching,
    products: state.product.products
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getProducts: (query) => {
      dispatch(getProducts(query))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
