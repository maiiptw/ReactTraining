import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


class Home extends Component {
    render(){
        return(
            <div>
                <h1>this is my content. Hello World!</h1>
                <FontAwesomeIcon icon={faMapMarkerAlt} size='2x' />
            </div>
        );
    }
}
export default Home;