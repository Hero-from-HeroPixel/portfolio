'use client';
import React, { useState } from 'react';
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
} from '@nextui-org/navbar';
import NavigationLink from '@/app/components/Navigation/NavigationLink';
import LogoIcon from '@/app/assets/Logo';
import { Link } from '@nextui-org/link';
import { Button } from '@nextui-org/button';
import { NavigationDocumentData, Simplify } from '@/prismicio-types';

type Props = {
	theme?: 'dark' | 'light';
	data: Simplify<NavigationDocumentData>;
};

export default function HeroNavbar({ data, theme = 'dark' }: Props) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<Navbar
			onMenuOpenChange={setIsMenuOpen}
			className={`text-foreground bg-background ${theme}`}>
			<NavbarMenuToggle
				aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				className="sm:hidden"
			/>
			<NavbarBrand>
				<LogoIcon width={117} height={79} className="w-20" />
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem>
					<NavigationLink color="foreground" href="#">
						Features
					</NavigationLink>
				</NavbarItem>
				<NavbarItem isActive>
					<NavigationLink href="#" aria-current="page">
						Customers
					</NavigationLink>
				</NavbarItem>
				<NavbarItem>
					<NavigationLink color="foreground" href="#">
						Integrations
					</NavigationLink>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem className="hidden lg:flex">
					<NavigationLink href="#">Login</NavigationLink>
				</NavbarItem>
				<NavbarItem>
					<Button as={Link} color="primary" href="#" variant="flat">
						Sign Up
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
