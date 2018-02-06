const Product = React.createClass({
  getInitialState:function(){
    return{qty:0};
  },
  
  buy:function(){
  this.setState({qty:this.state.qty+1});
  this.props.handleTotal(this.props.price);
  },
  show:function(){
   this.props.handleShow(this.props.name);
  },
  
  render: function(){
    return(
      <div>
        <h1>{this.props.name} - {this.props.price}$</h1>
        <button onClick={this.buy}>Buy</button>
        <button onClick={this.show}>Show</button>

        <h3>Qty:{this.state.qty} items</h3>
      </div>  
      );}
});

var Total = React.createClass({
  render:function(){
   return(
     <div>
     <h3>Total Cash:${this.props.total}</h3>
     </div>); 
  }
});

var ProductList = React.createClass({
  getInitialState:function(){
    return{total:0,
      productList:[
        {name:"android",price:"121"},
        {name:"apple",price:"123"},
        {name:"Nokia", price:"65"}
        ]
    };
  },
  calcaulateTotal:function(price){
    this.setState({total:this.state.total+Number(price)});
  },
  
  showProduct:function(name){
    alert("You selected " + name);
  },
  
  render:function(){
    var component= this;
    var products = this.state.productList.map(function(product){
      return(
      <Product name={product.name} price={product.price} handleShow={component.showProduct}
      handleTotal={component.calcaulateTotal}/>
      );
      
    });
    return(
      <div>
      {products}
      <Total total={this.state.total}/>
      </div>
      );
  }
});
React.render(<ProductList/>, document.getElementById("root"));