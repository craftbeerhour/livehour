
import React from 'react';
import ClassNames from 'classnames';

class Header extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        var headerClass = ClassNames('page-header', 'page-title');
        return (<div className={headerClass}><h1>{this.props.hourName}</h1></div>);
    }
}

export default Header;