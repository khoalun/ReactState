import React, { Component } from 'react';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    // this.onAddProduct = this.onAddProduct.bind(this);  c1: bind this
    this.state = {
      products: [
        {
          id: 1,
          name: ' Apple Iphone 6 16gb',
          price: 150000000,
          image: 'https://www.mytrendyphone.fi/images2/iPhone-6-4-7-Repair-Diagnose-07102014-01-p.jpg',
          status: true
        },
        {
          id: 2,
          name: ' Oppo 5s',
          price: 160000000,
          image: 'https://image.oppo.com/content/dam/oppo/en/mkt/product-list/product-list-item/A92-white.png',
          status: true
        },
        {
          id: 3,
          name: ' Apple Iphone XS 512gb',
          price: 200000000,
          image: 'https://assets.kogan.com/files/product/HKI/apple/IphoneX_SLV.jpg?auto=webp&canvas=340%2C226&fit=bounds&height=226&quality=75&width=340',
          status: true
        },
      ],
        isActive: true
    };
    // this.onSetState = this.onSetState.bind(this)
  }
    onSetState = () => {
      // if(this.state.isActive === true) {
      //   this.setState({
      //       isActive: false
      //   });
      // }else {
      //   this.setState({
      //     isActive : true
      //   });
      // }

      this.setState({
        isActive: !this.state.isActive
      });
    }



  render() {
    let elements = this.state.products.map(( product, index ) => {
      let result = '';
      if (product.status) {
        result =
           <tr key = { product.id } >
            <td> { index } </td>
            <td> { product.name } </td>
            <td>   <span className="App-label"> { product.price } VND</span>
          
          </td>
              
              </tr>

      
      }
      return result;

      // return <Product
      //   key={product.id}
      //   price={product.price}
      //   image={product.image} >
      //   {product.name}

      // </Product>
    });
return (
  <div>
    <nav className="navbar navbar-inverse">
      <a className="navbar-brand"> State </a>
    </nav>

    <div className="container">
      <div className="row">
        <div className="App-row">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>STT</th>
                <th>Product Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              
              { elements }

            </tbody>
          </table>

          <button type="button" className="btn btn-warning" onClick= {this.onSetState}>
            Active : {this.state.isActive  === true ? 'true' : 'false'} 
          </button>


        </div>

      </div>
    </div>
  </div>
);
  }
}


export default App;
