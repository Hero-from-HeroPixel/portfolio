import React from 'react';
import Heading from '@/app/components/UI/Heading';
import styles from '@/app/components/elements/About_Me/techTable.module.css';
import Icon, {
	canva,
	cloudinary,
	contentful,
	css,
	digitalOcean,
	elementor,
	figma,
	framer,
	git,
	graphql,
	html,
	javascript,
	mongo,
	mysql,
	netlify,
	nextJS,
	pgsql,
	php,
	postmark,
	prismic,
	react,
	redis,
	rest,
	shopify,
	tailwind,
	typescript,
	webflow,
	woocommerce,
	wordpress,
} from '../../icons';
import { PSIcon } from '../../icons/PS';
import Image from 'next/image';
import { Github } from '../../icons/Github';

type Props = {};

export default function TechTable({}: Props) {
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th className="col-span-3">
						<Heading as="h3">Tech Stack</Heading>
					</th>
					<th className="col-span-1">
						<Heading as="h3">Design</Heading>
					</th>
					<th className="col-span-2">
						<Heading as="h3">Other</Heading>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className="col-span-3">
						<div>
							<Heading as="h4">Languages</Heading>
							<p>
								<Icon>{html}</Icon>HTML5
							</p>
							<p>
								<Icon>{css}</Icon>
								CSS3
							</p>
							<p>
								<Icon>{javascript}</Icon>JavaScript
							</p>
							<p>
								<Icon>{typescript}</Icon>typeScript
							</p>
							<p>
								<Image
									src="https://www.php.net//images/logos/new-php-logo.svg"
									alt="php"
									width={64}
									height={64}
								/>
								php
							</p>
							<p>
								<Image src="/icons/sql.png" alt="sql" width={32} height={32} />
								SQL
							</p>
						</div>

						<div>
							<Heading as="h4">Frameworks</Heading>
							<p>
								<Image
									src="/icons/react.svg"
									alt="sql"
									width={32}
									height={32}
								/>
								React
							</p>
							<p>
								<Image
									src="/icons/nextjs.svg"
									alt="sql"
									width={32}
									height={32}
								/>
								NextJS 13
							</p>
							<p>
								<Image
									src="/icons/node.svg"
									alt="sql"
									width={32}
									height={32}
								/>
								Node
							</p>
							<p>
								<Image
									src="/icons/express.svg"
									alt="sql"
									width={32}
									height={32}
								/>
								Express
							</p>
							<p>
								<Image
									src="/icons/tailwind.svg"
									alt="sql"
									width={32}
									height={32}
								/>
								Tailwind CSS
							</p>
							<p>
								<Image
									src="/icons/wordpress.svg"
									alt="sql"
									width={32}
									height={32}
								/>
								WordPress
							</p>
						</div>
						<div>
							<Heading as="h4">Databases</Heading>
							<p>
								<Image
									src="/icons/pgsql.svg"
									alt="sql"
									width={32}
									height={32}
								/>
								PostgreSQL
							</p>
							<p>
								<Image
									src="/icons/mysql.svg"
									alt="sql"
									width={32}
									height={32}
								/>
								MySQL
							</p>
							<p>
								<Image
									src="/icons/mongo.svg"
									alt="sql"
									width={32}
									height={32}
								/>
								MongoDB
							</p>
							<p>
								<Image
									src="/icons/redis.svg"
									alt="sql"
									width={32}
									height={32}
								/>
								Redis
							</p>
						</div>
						<div>
							<Heading as="h4">APIS</Heading>
							<p>
								<Image
									src="/icons/rest.svg"
									alt="sql"
									width={32}
									height={32}
								/>
								RESTful
							</p>
							<p>
								<Image
									src="/icons/graphql.svg"
									alt="sql"
									width={32}
									height={32}
								/>
								GraphQL
							</p>
						</div>
						<div>
							<Heading as="h4">CI/CD</Heading>
							<p>
								<Image src="/icons/git.svg" alt="sql" width={32} height={32} />
								Git
							</p>
							<p>
								<Github />
								GitHub
							</p>
							<p>
								<Image
									src="/icons/netlify.svg"
									alt="sql"
									width={32}
									height={32}
								/>
								Netlify
							</p>
							<p>
								<Image src="/icons/do.svg" alt="sql" width={32} height={32} />
								Digital Ocean
							</p>
							<p>
								<Image
									src="/icons/cpanel.svg"
									alt="sql"
									width={32}
									height={32}
								/>
								cPanel
							</p>
						</div>
					</td>
					<td className="col-span-1">
						<div>
							<p>
								<Icon>{figma}</Icon>Figma
							</p>
							<p>
								<Icon>{PSIcon}</Icon>Photoshop
							</p>
							<p>
								<Icon>{canva}</Icon>Canva
							</p>
						</div>
						<div>
							<Heading as="h4">Web Tools</Heading>
							<p>
								<Icon>{elementor}</Icon>Elementor
							</p>
							<p>
								<Icon>{framer}</Icon>Framer
							</p>
							<p>
								<Icon>{webflow}</Icon>Webflow
							</p>
							<p>
								<Icon>{prismic}</Icon>Prismic
							</p>
						</div>
					</td>
					<td className="col-span-2">
						<div>
							<Heading as="h4">Commerce</Heading>
							<p>
								<Image
									src="/icons/medusa.svg"
									alt="sql"
									width={32}
									height={32}
								/>
								MedusaJS
							</p>
							<p>
								<Image src="/icons/woo.svg" alt="sql" width={32} height={32} />
								WooCommerce
							</p>
							<p>
								<Icon>{shopify}</Icon>Shopify
							</p>
						</div>
						<div>
							<Heading as="h4">CMS</Heading>
							<p>
								<Icon>{contentful}</Icon>Contentful
							</p>
							<p>
								<Icon>{wordpress}</Icon>WordPress
							</p>
							<p>
								<Icon>{prismic}</Icon>Prismic
							</p>
						</div>
						<div>
							<Heading as="h4">DAM</Heading>
							<p>
								<Icon>{cloudinary}</Icon>Cloudinary
							</p>
						</div>
						<div>
							<Heading as="h4">Mailing</Heading>
							<p>
								<Image
									src="/icons/postmark.svg"
									alt="sql"
									width={32}
									height={32}
								/>
								Postmark
							</p>
							<p>
								<Image
									src="/icons/nodemailer.svg"
									alt="sql"
									width={32}
									height={32}
								/>
								Nodemailer
							</p>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	);
}
