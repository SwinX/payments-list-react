import React from 'react';
import {render} from 'react-dom';
import App from './components/App.jsx';

import {ThemeProvider} from 'react-jss';
import theme from './theme';

render(
    <ThemeProvider theme={theme}>
        <App/>
    </ThemeProvider>,
    document.getElementById('app')
);
