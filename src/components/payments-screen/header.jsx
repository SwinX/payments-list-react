import React from 'react';
import PropTypes from 'prop-types';

import {concatClasses} from '../../utils/style-utils';
import injectSheet from 'react-jss';

const styles = theme => ({
    header: {
        color: theme.color.white,
        fontFamily: theme.text.fontFamily,
        fontSize: theme.text.size.default
    }
});

const PaymentListHeader = (props) => {
    const {classes, className, headerRef} = props;

    return (
        <span
            ref={headerRef}
            className={concatClasses(classes.header, className)}
        >
            История платежей
        </span>
    );
};

PaymentListHeader.propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string,
    headerRef: PropTypes.func
};

export default injectSheet(styles)(PaymentListHeader);
