import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#4A6572',
            main: '#344955',
            dark: '232F34',
            contrastText: '#fff',
        },
        secondary: {
            light: '#e2f1f8',
            main: '#F9AA33',
            dark: '#808e95',
            contrastText: '#000',
        },
    },
});

ReactDOM.render(
    <React.StrictMode>
        <MuiThemeProvider theme={theme}>
            <div style={{display: 'flex', minHeight: '100vh', flexDirection: 'column'}}>
                <App />
            </div>
        </MuiThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
