import { useState } from 'react'
import './App.css'

const PAGES = [
  { name: 'Accueil', content: <Accueil /> },
  { name: 'Notre histoire', content: <NotreHistoire /> },
  { name: 'Services', content: <Services /> },
  { name: 'Contact', content: <Contact /> },
]

function Accueil() {
  return <section className="fade-in"><h2>Bienvenue chez Québeco!</h2><p>Entreprise québécoise innovante, fière de ses racines.</p></section>;
}
function NotreHistoire() {
  return <section className="fade-in"><h2>Notre histoire</h2><p>Fondée en 2024, Québeco incarne l’esprit d’innovation du Québec.</p></section>;
}
function Services() {
  return <section className="fade-in"><h2>Nos services</h2><ul><li>Conseil</li><li>Développement web</li><li>Formation</li></ul></section>;
}
function Contact() {
  return <section className="fade-in"><h2>Contact</h2><p>Contactez-nous à info@quebeco.ca</p></section>;
}

function App() {
  const [page, setPage] = useState(0)
  return (
    <div className="site-container">
      <header className="header">
        <h1>Québéco</h1>
        <nav>
          {PAGES.map((p, i) => (
            <button key={p.name} className={page===i?"active":""} onClick={()=>setPage(i)}>{p.name}</button>
          ))}
        </nav>
      </header>
      <main>
        {PAGES[page].content}
      </main>
      <footer className="footer">© 2025 Québeco. Projet scolaire.</footer>
    </div>
  )
}

export default App
