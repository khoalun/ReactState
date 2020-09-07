import React, {Component} from 'react';


class Product extends Component {

  // constructor(props) {
  //   super(props);
  //   console.log(props) ;
    //  this.onAddtoCart = this.onAddtoCart.bind(this); 
  // }
  // onAddtoCart() {
  //   alert(this.props.children + '-' + this.props.price );
  // }

  onAddtoCart2 = () => {
    alert(this.props.children + '-' + this.props.price );
  }
  render() {
    return (
      <div>
       
        <h1>Product</h1>
      


    <div className="thumbnail">
        <img alt= {this.props.children}  src= {this.props.image} />
        <div className="caption">
            <h3>
            { this.props.children}
            </h3>
            <p>
              {this.props.price} VND
            </p>
          
            <p>
                <a  className="btn btn-primary" onClick= {this.onAddtoCart2} > Mua Ngay</a>
               
            </p>
        </div>
    </div>
 
          
      </div>
    );
  }
}


export default Product;
