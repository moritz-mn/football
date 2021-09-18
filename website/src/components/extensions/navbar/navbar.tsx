'use-strict';

import { ReactElement, PropsWithChildren } from 'react';
import './navbar.scss';

interface NavBarProps extends PropsWithChildren<unknown> {}

export default function Navbar({ children }: NavBarProps): ReactElement {
	return (
		<nav className="navbar">
			<ul className="navbar-nav">{children}</ul>
		</nav>
	);
}
