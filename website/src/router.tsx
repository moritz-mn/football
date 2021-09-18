'use-strict';

import { ReactElement, StrictMode } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { home, notfound } from './config/routes';
import Home from './components/base/home/home';
import NotFound from './components/base/notFound/notFound';
import Navbar from './components/extensions/navbar/defaultNavbar';

export default function Router(): ReactElement {
	return (
		<StrictMode>
			<HashRouter>
				<Navbar />

				<Switch>
					<Route path={home} exact component={Home} />

					<Route path={notfound} component={NotFound} />
				</Switch>
			</HashRouter>
		</StrictMode>
	);
}
