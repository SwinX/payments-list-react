import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import {concatClasses} from '../../../../utils/style-utils';

import injectSheet from 'react-jss';

const styles = theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    name: {
        color: theme.color.white,
        fontFamily: theme.text.fontFamily,
        fontSize: theme.text.size.default,
        fontWeight: 'bold',
        alignSelf: 'flex-start'
    },
    date: {
        color: theme.color.lightGray,
        fontFamily: theme.text.fontFamily,
        fontSize: theme.text.size.default,
        alignSelf: 'flex-start'
    }
});

class PaymentInfo extends React.Component {
    render() {
        const {classes, className, name, date} = this.props;

        return (
            <div className={concatClasses(classes.container, className)}>
                <span className={classes.name}>{`Фильм «${name}»`}</span>
                <span className={classes.date}>{this._formatDate(date)}</span>
            </div>
        );
    }

    _formatDate(date) {
        return moment(date).format('DD.MM.YYYY HH:mm');
    }
}

PaymentInfo.propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.instanceOf(Date)
};

export default injectSheet(styles)(PaymentInfo);
