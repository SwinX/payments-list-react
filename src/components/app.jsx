import React from 'react';
import PropTypes from 'prop-types';

import PaymentsScreen from './payments-screen/index.jsx';

import injectSheet from 'react-jss';

const styles = {
    container: {
        width: '100%',
        height: '100%'
    }
};

const App = ({classes}) => {
    return <PaymentsScreen
        className={classes.container}
        payments={mkPayments(100)}
    />;
};

App.propTypes = {
    classes: PropTypes.object
};

export default injectSheet(styles)(App);

function mkPayments(amount) {
    const result = [];

    for (let i = 0; i < amount; i++) {
        result.push({
            id: `${i}`,
            amount: 40000 + i,
            date: new Date(),
            item: {
                id: `${i}`,
                name: `Иллюзия обмана ${i}`
            }
        });
    }

    return result;
}
