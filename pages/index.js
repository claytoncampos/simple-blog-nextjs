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
      allPostsData
    }
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
<   h3>Front-End Developer | Programador Jr 🤖</h3>

    <p>Estudando para se tornar Full Stack!</p>

    <div>   
        <p>💻 Trabalhando com Js, Html, Css e React</p>
        <p>📚 Estudando Node, React, React Native, MongoDB, PostgreSQL</p>
        <p>Apaixonado por programação e tecnologia, ajudando os outros dev's da melhor forma possível</p>
        <p>Cursos Concluidos (Certificados)</p>
        <p>Estação Hack Facebook - Front End Coding - 105 Hrs (Digital House)
        Web Moderno 2020 - 87,5 Hrs (Udemy)
        Bootcamp React Web Developer - 80 Hrs (DIO)
        Bootcamp HTML Web Developer - 27 Hrs (DIO)
        Scrum Foundation SFPC - (CertiProf)
        Lógica de Programação 14Hrs (SENAI)</p>
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