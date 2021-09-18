'use-strict';

import { ReactElement } from 'react';
import Navbar from '../../extensions/navbar/navbar';
import NavItem from '../../extensions/navbar/navitem';

import { ReactComponent as Bell } from '../../../icons/bell.svg';
import { ReactComponent as Bolt } from '../../../icons/bolt.svg';
import { ReactComponent as Caret } from '../../../icons/caret.svg';
import { ReactComponent as Chevron } from '../../../icons/chevron.svg';
import { home } from '../../../config/routes';
import NavbarDropdown from '../../extensions/navbar/navbardropdown';

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
