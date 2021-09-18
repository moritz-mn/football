'use-strict';

import { ReactElement, PropsWithChildren, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './navbar.scss';
import { ReactComponent as Cog } from '../../../icons/cog.svg';
import { ReactComponent as Arrow } from '../../../icons/arrow.svg';
import { ReactComponent as Chevron } from '../../../icons/chevron.svg';
import { ReactComponent as Germany } from '../../../icons/countries/germany.svg';
import { Link, NavLink } from 'react-router-dom';

interface DropdownItemProps extends PropsWithChildren<unknown> {
	leftIcon?: string | ReactElement;
	rightIcon?: string | ReactElement;
	goToMenu?: string;
}

interface DropdownLinkProps extends PropsWithChildren<unknown> {
	leftIcon?: string | ReactElement;
	rightIcon?: string | ReactElement;
	to: string;
}

export default function NavbarDropdown(): ReactElement {
	const [activeMenu, setActiveMenu] = useState<string>('main');
	const [menuHeight, setMenuHeight] = useState<number | null>(null);

	const calcHeight = (element: HTMLElement) => setMenuHeight(element.offsetHeight);

	const DropdownItem = ({
		children,
		goToMenu,
		leftIcon,
		rightIcon,
	}: DropdownItemProps): ReactElement => (
		<span className="menu-item" onClick={() => goToMenu && setActiveMenu(goToMenu)}>
			<span className="icon-button"> {leftIcon} </span>
			{children}
			{rightIcon && <span className="icon-button icon-right"> {rightIcon} </span>}
		</span>
	);

	const DropdownLink = ({ children, to, leftIcon, rightIcon }: DropdownLinkProps): ReactElement => (
		<NavLink className="menu-link" to={to}>
			<span className="menu-item">
				<span className="icon-button"> {leftIcon} </span>
				{children}
				{rightIcon && <span className="icon-button icon-right"> {rightIcon} </span>}
			</span>
		</NavLink>
	);

	return (
		<div className="dropdown dropdown-left" style={{ height: menuHeight! }}>
			<CSSTransition
				in={activeMenu === 'main'}
				unmountOnExit
				timeout={500}
				classNames="menu-primary"
				onEnter={calcHeight}>
				<div className="menu">
					<DropdownItem rightIcon={<Chevron />} goToMenu="settings">
						Settings
					</DropdownItem>
					<DropdownItem rightIcon={<Chevron />} goToMenu="countries">
						Countries
					</DropdownItem>
				</div>
			</CSSTransition>

			<CSSTransition
				in={activeMenu === 'settings'}
				unmountOnExit
				timeout={500}
				classNames="menu-secondary"
				onEnter={calcHeight}>
				<div className="menu">
					<DropdownItem leftIcon={<Arrow />} goToMenu="main">
						Go Back
					</DropdownItem>
					<DropdownItem leftIcon={<Cog />}>Following</DropdownItem>
					<DropdownItem leftIcon={<Cog />}>Appearance</DropdownItem>
					<DropdownItem>Log Out</DropdownItem>
				</div>
			</CSSTransition>

			<CSSTransition
				in={activeMenu === 'countries'}
				unmountOnExit
				timeout={500}
				classNames="menu-secondary"
				onEnter={calcHeight}>
				<div className="menu">
					<DropdownItem leftIcon={<Arrow />} goToMenu="main">
						Go Back
					</DropdownItem>
					<DropdownItem leftIcon={<Germany />} goToMenu="germany">
						Germany
					</DropdownItem>
					<DropdownItem>LogOut</DropdownItem>
				</div>
			</CSSTransition>

			<CSSTransition
				in={activeMenu === 'germany'}
				unmountOnExit
				timeout={500}
				classNames="menu-secondary"
				onEnter={calcHeight}>
				<div className="menu">
					<DropdownItem leftIcon={<Arrow />} goToMenu="countries">
						Go Back
					</DropdownItem>
					<DropdownLink to="/germany/leagues/bundesliga">Bundesliga</DropdownLink>
					<DropdownItem>DFB Pokal</DropdownItem>
				</div>
			</CSSTransition>
		</div>
	);
}
