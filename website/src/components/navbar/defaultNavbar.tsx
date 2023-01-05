'use-strict';

import { ReactElement } from 'react';
import Navbar from './navbar';
import NavItem from './navitem';

import { ReactComponent as Bell } from '../../icons/bell.svg';
import { ReactComponent as Bolt } from '../../icons/bolt.svg';
import { ReactComponent as Caret } from '../../icons/caret.svg';
import { ReactComponent as Chevron } from '../../icons/chevron.svg';
import { home } from '../../routes/routes';
import NavbarDropdown from './navbardropdown';

export default function DefaultNavbar(): ReactElement {
	return (
		<Navbar>
			<NavItem to={home} icon={<Bell />} />
			<NavItem to={'/kek'} icon={<Bolt />} />
			<NavItem to={home} icon={<Chevron />} />

			<NavItem icon={<Caret />}>
				<NavbarDropdown />
			</NavItem>
		</Navbar>
	);
}
