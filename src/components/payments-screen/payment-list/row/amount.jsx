import React from 'react';
import PropTypes from 'prop-types';

import {concatClasses} from '../../../../utils/style-utils';

import injectSheet from 'react-jss';

const styles = theme => ({
    payment: {
        color: theme.color.white,
        fontFamily: theme.text.fontFamily,
        fontSize: theme.text.size.big
    }
});

class PaymentAmount extends React.Component {
    render() {
        const {classes, className, amount} = this.props;

        return (
            <p className={concatClasses(classes.payment, className)}>
                {`- ${amount}₽`}
            </p>
        );
    }
}

PaymentAmount.propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string,
    amount: PropTypes.number.isRequired
};

export default injectSheet(styles)(PaymentAmount);
