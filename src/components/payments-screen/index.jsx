import React from 'react';
import PropTypes from 'prop-types';

import Header from './header.jsx';
import PaymentList from './payment-list/index.jsx';

import injectSheet from 'react-jss';

const HEADER_TOP_MARGIN = 70;
const HEADER_BOTTOM_MARGIN = 50;

const styles = {
    '@global': {
        body: {
            overflow: 'hidden',
            margin: '0'
        }
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(#6c3e4f, #000033)'
    },
    header: {
        width: '1560px',
        margin: `${HEADER_TOP_MARGIN}px 0px ${HEADER_BOTTOM_MARGIN}px`
    },
    list: {
        width: '1700px'
    }
};

class PaymentsScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            headerHeight: HEADER_TOP_MARGIN + HEADER_BOTTOM_MARGIN
        };

        this._header = null;
    }

    componentDidMount() {
        this.setState({
            headerHeight: HEADER_TOP_MARGIN + HEADER_BOTTOM_MARGIN + this._header.offsetHeight
        });
    }

    render() {
        const {classes, payments} = this.props;
        const {headerHeight} = this.state;

        return (
            <div className={classes.container}>
                <Header
                    headerRef={header => this._header = header}
                    className={classes.header}
                />
                <PaymentList
                    style={{height: `calc(100vh - ${headerHeight}px)`}}
                    className={classes.list}
                    payments={payments}
                />
            </div>
        );
    }
}

PaymentsScreen.propTypes = {
    classes: PropTypes.object,
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

export default injectSheet(styles)(PaymentsScreen);
