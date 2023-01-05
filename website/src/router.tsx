'use-strict';

import { ReactElement, StrictMode } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { home, notfound } from './routes/routes';
import Home from './pages/home/home';
import NotFound from './pages/notFound/notFound';
import Navbar from './components/navbar/defaultNavbar';

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
