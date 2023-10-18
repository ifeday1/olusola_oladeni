import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// eslint-disable-next-line
import { BrowserRouter, HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
// import { GlobalProvider } from './Context';
// import "primereact/resources/themes/lara-light-indigo/theme.css";
// import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";

const activeLabelStyles = {
	transform: "scale(0.85) translateY(-24px)"
};

export const theme = extendTheme({
	components: {
		Form: {
			variants: {
				floating: {
					container: {
						_focusWithin: {
							label: {
								...activeLabelStyles
							}
						},
						"input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label": {
							...activeLabelStyles
						},
						label: {
							top: 0,
							left: 0,
							zIndex: 2,
							position: "absolute",
							backgroundColor: "white",
							pointerEvents: "none",
							mx: 3,
							px: 4,
							my: 2,
							transformOrigin: "left top"
						}
					}
				}
			}
		}
	}
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{/* <BrowserRouter> */}
		<HashRouter>
				<ChakraProvider theme={theme}>
					<App />
				</ChakraProvider>
		</HashRouter>
		{/* </BrowserRouter> */}
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
