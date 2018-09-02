import React from 'react';
import PropTypes from 'prop-types';

import Icon from './icon.jsx';
import Info from './info.jsx';
import Amount from './amount.jsx';

import {concatClasses} from '../../../../utils/style-utils';

import injectSheet from 'react-jss';

const ROW_HEIGHT = 110;
const VERTICAL_SPACING = 50;

const styles = theme => ({
    container: {
        width: '100%',
        height: `${ROW_HEIGHT}px`,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: theme.color.transparentBlack,
        outline: `1px solid ${theme.black}`
    },
    containerSelected: {
        outline: `5px solid ${theme.color.orange}`
    },
    leftContainer: {
        marginLeft: `${VERTICAL_SPACING}px`,
        display: 'flex'
    },
    icon: {
        marginRight: `${VERTICAL_SPACING}px`
    },
    rightContainer: {
        marginRight: `${VERTICAL_SPACING}px`
    }
});

class PaymentListRow extends React.Component {
    render() {
        const {payment, classes} = this.props;

        return (
            <div className={this._containerClasses()}>
                <div className={classes.leftContainer}>
                    <Icon className={classes.icon}/>
                    <Info name={payment.item.name} date={payment.date}/>
                </div>
                <div className={classes.rightContainer}>
                    <Amount amount={payment.amount}/>
                </div>
            </div>
        );
    }

    _containerClasses() {
        const {classes, className, isSelected} = this.props;

        return concatClasses(
            classes.container,
            isSelected && classes.containerSelected,
            className
        );
    }
}

PaymentListRow.propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string,
    payment: PropTypes.shape({
        id: PropTypes.string,
        amount: PropTypes.number,
        date: PropTypes.instanceOf(Date),
        item: PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string
        })
    }).isRequired,
    isSelected: PropTypes.bool
};

PaymentListRow.ROW_HEIGHT = ROW_HEIGHT;

export default injectSheet(styles)(PaymentListRow);
