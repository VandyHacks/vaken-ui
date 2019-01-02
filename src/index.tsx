import React from 'react'; // syntheticDefaultImports allowed because of babel-loader
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import stringsJson from '../assets/strings.json';
import Welcome from './welcome/Welcome';

const App = (): JSX.Element => (
	<div>
		<Helmet>
			<title>{stringsJson.WEBSITE_TITLE}</title>
		</Helmet>

		<Welcome />
	</div>
);

ReactDOM.render(<App />, document.getElementById('App'));
