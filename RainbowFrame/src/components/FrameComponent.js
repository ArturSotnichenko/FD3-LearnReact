import React from 'react';
import PropTypes from 'prop-types';



class Rainbow extends React.Component {
    static propTypes = {
        colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    };

    render() {
        let frame = this.props.children;

        this.props.colors.forEach( color => frame = <div style={{border:"solid 5px "+ color, padding:"5px"}}>{frame}</div> );

        return (frame);
    }


}
export default Rainbow;