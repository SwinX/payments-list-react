import React from 'react';
import PropTypes from 'prop-types';

class PaymentInfoIcon extends React.Component {
    render() {
        const {className} = this.props;

        return (
            <img
                className={className}
                src={'images/wallet.svg'}
            />
        );
    }
}

PaymentInfoIcon.propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string
};

export default PaymentInfoIcon;
