import React from 'react';
import Heading from '@/app/components/UI/Heading';
import styles from '@/app/components/elements/About_Me/techTable.module.css';
import Icon, { css, html, javascript, php, typescript } from '../../icons';
import { PSIcon } from '../../icons/PS';

type Props = {};

export default function TechTable({}: Props) {
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th>
						<Heading as="h3">Tech Stack</Heading>
					</th>
					<th>
						<Heading as="h3">Design Stack</Heading>
					</th>
					<th>
						<Heading as="h3">Other</Heading>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						<div>
							<Heading as="h4">Languages</Heading>
							<p>
								<Icon>{html}</Icon>
								<Icon>{css}</Icon> HTML & CSS
							</p>
							<p>
								<Icon>{javascript}</Icon>JavaScript
							</p>
							<p>
								<Icon>{typescript}</Icon>typeScript
							</p>
							<p>
								<Icon>{php}</Icon>php
							</p>
							<p>
								<Icon>{}</Icon>
							</p>
						</div>

						<div>
							<Heading as="h4">Frameworks</Heading>
							<Icon className="w6 aspect-square me-2">{PSIcon}</Icon>
						</div>
						<div>
							<Heading as="h4">Databases</Heading>
							<Icon className="w6 aspect-square me-2">{PSIcon}</Icon>
						</div>
						<div>
							<Heading as="h4">APIS</Heading>
							<Icon className="w6 aspect-square me-2">{PSIcon}</Icon>
						</div>
						<div>
							<Heading as="h4">CI/CD</Heading>
							<Icon className="w6 aspect-square me-2">{PSIcon}</Icon>
						</div>
					</td>
					<td>
						<div>
							<Icon className="w6 aspect-square me-2">{PSIcon}</Icon>
						</div>
						<div>
							<Heading as="h4">Web Tools</Heading>
							<Icon className="w6 aspect-square me-2">{PSIcon}</Icon>
						</div>
					</td>
					<td>
						<div>
							<Heading as="h4">Commerce</Heading>
							<Icon className="w6 aspect-square me-2">{PSIcon}</Icon>
						</div>
						<div>
							<Heading as="h4">CMS</Heading>
							<Icon className="w6 aspect-square me-2">{PSIcon}</Icon>
						</div>
						<div>
							<Heading as="h4">DAM</Heading>
							<Icon className="w6 aspect-square me-2">{PSIcon}</Icon>
						</div>
						<div>
							<Heading as="h4">Mailing</Heading>
							<Icon className="w6 aspect-square me-2">{PSIcon}</Icon>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	);
}
