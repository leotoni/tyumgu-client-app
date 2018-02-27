import React from "react";
import List from "../../../users/list";
import Cookies from 'universal-cookie';

const Grouplearning = React.createClass({
    cookies: new Cookies(),
    componentWillMount() {
        this.state = {
            group:""
        }    
        this.setState({ group: this.cookies.get('user').deprTitle })
    },
    componentDidMount(){  
        
    },
    render() {
    return (

        <div className="tab-pane fade" id="grouplearning">
            <List filter={false} nameList={"Учебная группа: "+this.state.group} group={this.state.group} />    
        </div>

    )
  }
})

export default Grouplearning;