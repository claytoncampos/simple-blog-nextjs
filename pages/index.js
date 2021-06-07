import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData,
		},
	}
}

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>Hello world, I'm Clayton</p>
				<h3>Front-End Developer | Programador Jr 🤖</h3>

				<h5>Estudando para se tornar um Programador Full Stack!</h5>

				<div className={utilStyles.description}>
					💻 Trabalhando com Js, Html, Css e React
					<br />
					📚 Estudando Node, React, React Native, MongoDB, PostgreSQL
					<br />
					Apaixonado por programação e tecnologia, ajudando os outros dev's da
					melhor forma possível.
					<br />
					<h4>Cursos Concluidos (Certificados)</h4>
					Bootcamp SPTesch Dessenvolvimento FullStack 109 Hrs (DIO)
					<br />
					DevOps Essentials (4Linux)
					<br />
					Linux Beginners in Clound (4Linx)
					<br />
					Customer Experience – 40hrs (FIAP)
					<br />
					Design Thinking – 40hrs (FIAP)
					<br />
					User Experience – 60hrs (FIAP)
					<br />
					Estação Hack Facebook - Front End Coding - 105 Hrs (Digital House)
					<br />
					Web Moderno 2020 - 87,5 Hrs (Udemy)
					<br />
					Web Developer 120 Hrs (DIO)
					<br />
					Bootcamp SPTech Desenvolvimento Front-end 82Hrs (DIO)
					<br />
					Bootcamp React Web Developer - 80 Hrs (DIO)
					<br />
					Bootcamp HTML Web Developer - 27 Hrs (DIO)
					<br />
					Bootcamp Avanade Decola Dev 2021 - 85 Hrs (DIO)
					<br />
					Bootcamp GFT START_UNI 2021 - 46 Hrs (DIO)
					<br />
					Scrum Foundation SFPC - (CertiProf)
					<br />
					Lógica de Programação 14Hrs (SENAI)
					<br />
				</div>
				<p>
					(This is a sample website - you’ll be building a site like this on{' '}
					<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
				</p>
			</section>

			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	)
}
;<br />
