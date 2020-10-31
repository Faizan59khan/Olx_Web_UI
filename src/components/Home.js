import React from 'react';
import Additem from './Additem';
import { Link } from 'react-router-dom';
import Cover from '../images/c1.png'
import Add1 from '../images/a1.jpg'
import Products from './Products';
import firebase from '../config/Firebase'
import { connect } from 'react-redux';
import { set_data } from '../store/action'

import { Details } from '@material-ui/icons';
import { act } from 'react-dom/test-utils';
import { AccordionActions } from '@material-ui/core';



class Home extends React.Component {

  static getDerivedStateFromProps(props, state) {
    console.log("Props===> ", props);     //it rerurn the updated object of state                                
  }


  render() {




    console.log("user==>", this.props.users) //globally access horha

    return (
      <React.Fragment>

        <div className="centre">
          <img src={Cover} className="img-fluid image" alt="Responsive image" />
        </div>

        <div style={{ marginTop: "25px" }} className="centre">
          <a href="#"><img src={Add1} className="img-fluid p10" alt="Responsive image" /></a>
        </div>





        <div className="home-page">
          <div className="add-list">

            <Link to="/Products" onClick={() => this.props.set_data("https://apollo-singapore.akamaized.net/v1/files/jazfjo6dr3se-PK/image;s=1080x1080")}>
              <Additem image="https://apollo-singapore.akamaized.net/v1/files/jazfjo6dr3se-PK/image;s=1080x1080"
                price="Rs 180,000 - 5 Years" name="Suzuki"
                location="Rawalpindi"
              /></Link>

            <Link to="/Products" onClick={() => this.props.set_data("https://apollo-singapore.akamaized.net/v1/files/jazfjo6dr3se-PK/image;s=1080x1080")}>
              <Additem image="https://apollo-singapore.akamaized.net/v1/files/jazfjo6dr3se-PK/image;s=1080x1080"
                price="Rs 180,000 - 5 Years" name="Suzuki"
                location="Rawalpindi"
              ></Additem></Link>


            <Link to="/Products" onClick={() => this.props.set_data("https://apollo-singapore.akamaized.net/v1/files/jazfjo6dr3se-PK/image;s=1080x1080")}>
              <Additem image="https://apollo-singapore.akamaized.net/v1/files/jazfjo6dr3se-PK/image;s=1080x1080"
                price="Rs 180,000 - 5 Years" name="Suzuki"
                location="Rawalpindi"
              ></Additem></Link>

            <Link to="/Products" onClick={() => this.props.set_data("https://apollo-singapore.akamaized.net/v1/files/jazfjo6dr3se-PK/image;s=1080x1080"), () => this.props.set_details("hello")}>
              <Additem image="https://apollo-singapore.akamaized.net/v1/files/jazfjo6dr3se-PK/image;s=1080x1080"
                price="Rs 180,000 - 5 Years" name="Suzuki"
                location="Rawalpindi"
              ></Additem></Link>

            <Link to="/Products" onClick={() => this.props.set_data("https://apollo-singapore.akamaized.net/v1/files/jazfjo6dr3se-PK/image;s=1080x1080")}>
              <Additem image="https://apollo-singapore.akamaized.net/v1/files/jazfjo6dr3se-PK/image;s=1080x1080"
                price="Rs 180,000 - 5 Years" name="Suzuki"
                location="Rawalpindi"
              ></Additem></Link>

            <Link to="/Products" onClick={() => this.props.set_data("https://apollo-singapore.akamaized.net/v1/files/jazfjo6dr3se-PK/image;s=1080x1080")}>
              <Additem image="https://apollo-singapore.akamaized.net/v1/files/jazfjo6dr3se-PK/image;s=1080x1080"
                price="Rs 180,000 - 5 Years" name="Suzuki"
                location="Rawalpindi"
              ></Additem></Link>

            <Link to="/Products" onClick={() => this.props.set_data("https://apollo-singapore.akamaized.net/v1/files/jazfjo6dr3se-PK/image;s=1080x1080")}>
              <Additem image="https://apollo-singapore.akamaized.net/v1/files/jazfjo6dr3se-PK/image;s=1080x1080"
                price="Rs 180,000 - 5 Years" name="Suzuki"
                location="Rawalpindi"
              ></Additem></Link>

            <Link to="/Products" onClick={() => this.props.set_data("https://apollo-singapore.akamaized.net/v1/files/jazfjo6dr3se-PK/image;s=1080x1080")}>
              <Additem image="https://apollo-singapore.akamaized.net/v1/files/jazfjo6dr3se-PK/image;s=1080x1080"
                price="Rs 180,000 - 5 Years" name="Suzuki"
                location="Rawalpindi"
              ></Additem></Link>

            <Link to="/Products" onClick={() => this.props.set_data("https://apollo-singapore.akamaized.net/v1/files/jazfjo6dr3se-PK/image;s=1080x1080")}>
              <Additem image="https://apollo-singapore.akamaized.net/v1/files/jazfjo6dr3se-PK/image;s=1080x1080"
                price="Rs 180,000 - 5 Years" name="Suzuki"
                location="Rawalpindi"
              ></Additem></Link>

            <Link to="/Products" onClick={() => this.props.set_data("https://apollo-singapore.akamaized.net/v1/files/jazfjo6dr3se-PK/image;s=1080x1080")}>
              <Additem image="https://apollo-singapore.akamaized.net/v1/files/jazfjo6dr3se-PK/image;s=1080x1080"
                price="Rs 180,000 - 5 Years" name="Suzuki"
                location="Rawalpindi"
              ></Additem></Link>

            <Link to="/Products" onClick={() => this.props.set_data("https://apollo-singapore.akamaized.net/v1/files/jazfjo6dr3se-PK/image;s=1080x1080")}>
              <Additem image="https://apollo-singapore.akamaized.net/v1/files/jazfjo6dr3se-PK/image;s=1080x1080"
                price="Rs 180,000 - 5 Years" name="Suzuki"
                location="Rawalpindi"
              ></Additem></Link>



          </div>

          <button className="load-more fontb anim">
            Load More
         </button>
        </div>
      </React.Fragment>
    )


  }
}

const mapStateToProps = (state) => ({  //es function ke saare properties home component mai ajayege jo props mai 
                                         //save hojaege
  users: state.users,
})

const mapDispatchToProp = (dispatch) => (  //it is used to update state and functions are make in mDTP

  {

    set_data: (data) => dispatch(set_data(data)), //to connect with redux


  }




)


export default connect(mapStateToProps, mapDispatchToProp)(Home);
