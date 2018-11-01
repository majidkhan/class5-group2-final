import React from "react";
import { Link } from "react-router-dom";


class Networking extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
   componentDidMount() {
     fetch('/api/networking')
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          items: data,
        })
      });
  }

  render() {

    const { isLoaded, items } = this.state;
    console.log(items);
    if (!isLoaded) {
      return <div> Loading.... </div>;
    }
    else {
      return (
            <div className="container"> 
              <h1>NETWORKING</h1> 
              <br/>
                <a className="btn btn-outline-danger btn-lg btn-block mentor-add-button" href="/Networking/add">Add Network</a>
                {items.map(item => (
                  <div key={item.id} className="card mb-4 networking-item">
                    <div className="card-header">
                    <h2 className="card-title pricing-card-title"> {item.organisation_name}</h2>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-8">
                            <div><strong>Org. Address:</strong> {item.organisation_address}</div>
                            <div><strong>Contact Person:</strong> {item.contact_person}</div>
                            <div><strong>Contact Email:</strong> {item.contact_email}</div>
                            <div><strong>Contact Number:</strong> {item.contact_phone}</div>
                        </div>
                        <div className="col-md-4">
                          <img className="my-0 font-weight-normal networking-image" src={item.organisation_logo} width="100%" alt="Organization Logo"/>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                        <a href={item.organisation_url} className="btn btn-outline-danger btn-sm">Read more..</a>
                        <div className="row network-edit-button">
                        <a href={`/Networking/details/${item.id}`} className="btn btn-outline-danger btn-sm"> Edit</a>
                        {/* <a href={`/Networking/delete/${item.id}`} className="btn btn-outline-danger btn-sm"> Delete</a> */}
                       {/* <button className="btn btn-outline-danger btn-sm" onClick={this.deleteNetwork}> Delete</button> */}
                      </div>
                        
                    </div>
                  </div>  
                ))}                                  
                </div>
      );
    }
  }
}

export default Networking;
