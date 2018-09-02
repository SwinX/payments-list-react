import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import Row from './row/index.jsx';

import {concatClasses} from '../../../utils/style-utils';

import injectSheet from 'react-jss';

const ArrowKeyCodes = {
    UP: 38,
    DOWN: 40
};

const ROW_SPACING = 20;
const SCROLL_DELAY = 300;

const styles = theme => ({
    container: {
        overflowY: 'scroll',
        scrollBehavior: 'smooth',
        pointerEvents: 'none',
        '&::-webkit-scrollbar': {
            width: '5px',
            background: theme.color.transparentBlack,
            borderRadius: '10px'
        },
        '&::-webkit-scrollbar-track': {
            borderRadius: '10px'
        },
        '&::-webkit-scrollbar-thumb': {
            background: theme.color.lightGray,
            borderRadius: '10px'
        }
    },
    content: {
        margin: `5px 70px 0px`
    },
    row: {
        marginBottom: `${ROW_SPACING}px`
    }
});

class PaymentList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {selectedPaymentIndex: 0};
        this._listContainer = null;

        this._tryToScroll = _.throttle(this._tryToScroll, SCROLL_DELAY);
    }
    componentDidMount() {
        document.addEventListener('keydown', this._onKeyPress);
    }

    render() {
        const {classes, className, style, payments} = this.props;

        return (
            <div
                style={style}
                className={concatClasses(classes.container, className)}
                ref={ref => this._listContainer = ref}
            >
                <div className={classes.content}>
                    {payments.map((payment, index) => this._renderPayment(payment, index))}
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this._onKeyPress);
    }

    _renderPayment = (payment, index) => {
        const {classes} = this.props;
        const {selectedPaymentIndex} = this.state;

        return (
            <Row
                key={payment.id}
                className={classes.row}
                payment={payment}
                isSelected={selectedPaymentIndex === index}
            />
        );
    }

    _onKeyPress = (event) => {
        event.preventDefault();

        this._tryToScroll(event);
    }

    _tryToScroll = event => {
        if (event.keyCode === ArrowKeyCodes.DOWN) {
            return this._scrollDown();
        }

        if (event.keyCode === ArrowKeyCodes.UP) {
            return this._scrollUp();
        }
    }

    _scrollDown() {
        const paymentsAmount = this.props.payments.length - 1;

        this.setState(
            prevState => ({
                selectedPaymentIndex: Math.min(
                    prevState.selectedPaymentIndex + 1, paymentsAmount
                )
            }),
            () => this._scrollToPosition(this.state.selectedPaymentIndex));
    }

    _scrollUp() {
        this.setState(
            prevState => ({
                selectedPaymentIndex: Math.max(
                    prevState.selectedPaymentIndex - 1, 0
                )
            }),
            () => this._scrollToPosition(this.state.selectedPaymentIndex));
    }

    _scrollToPosition(position) {
        const rowsOffset = position * Row.ROW_HEIGHT;
        const spacingOffset = position * ROW_SPACING;
        const scrollDelay = this._listContainer.clientHeight / 3;

        this._listContainer.scrollTop = rowsOffset + spacingOffset - scrollDelay;
    }
}

PaymentList.propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string,
    style: PropTypes.object,
    payments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            amount: PropTypes.number,
            date: PropTypes.instanceOf(Date),
            item: PropTypes.shape({
                id: PropTypes.string,
                name: PropTypes.string
            })
        })
    ).isRequired
};

export default injectSheet(styles)(PaymentList);
