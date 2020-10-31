import React from 'react';

class Additem extends React.Component{
  render(){
    return(
      <div className="add-item">

          
        <img src={this.props.image} className="poster"/>
    
    <div className="title s17">{this.props.price}</div>
      <div className="tagline s15">{this.props.name}</div>

   <div className="ftr flex">
          <div className="location s12">{this.props.location}</div>
          <div className="stamp">{this.props.date}</div>

   </div>

  </div>
    )
  }
}

export default Additem;