import Head from './head'
import styles from './styles.module.css'
export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <>
    <Head />
    <nav>
        About Navbar
    </nav>
    <main className={styles.main}>
        {children}
    </main>
    </>
  )
}
