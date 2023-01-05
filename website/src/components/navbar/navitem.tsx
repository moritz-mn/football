'use-strict';

import { ReactElement, PropsWithChildren, useState, MouseEvent } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

interface NavBarItemProps extends PropsWithChildren<unknown> {
	to?: string;
	icon?: string | ReactElement;
}

export default function NavItem({ children, icon, to }: NavBarItemProps): ReactElement {
	const [open, setOpen] = useState<boolean>(false);

	const onClick = (event: MouseEvent<HTMLButtonElement>) => {
		if (!children) return;
		event.preventDefault();
		setOpen(!open);
	};

	return (
		<li className="nav-item">
			{!!to ? (
				<NavLink to={to} className="icon-button">
					{icon}
				</NavLink>
			) : (
				<>
					<span className="icon-button" onClick={onClick}>
						{icon}
					</span>
					{open && children}
				</>
			)}
		</li>
	);
}
