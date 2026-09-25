'use client'

import { ReactSVG } from 'react-svg'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <span>
        <ReactSVG src="../icon.svg" />
        <h2>© 2026<br />Klangeo</h2>
      </span>
      <span>
        <ul>
          <h3>Contact Us</h3>
          <li>
            <span className="material-symbols-rounded">mail</span>
            <a href="mailto:support@klangeo.com" className="hyperlink">
              support@klangeo.com
            </a>
          </li>
          <li>
            <span className="material-symbols-rounded">call</span>
            <Link href="/phone" className="hyperlink">
              Call Us from 30+ countries
            </Link>
          </li>
        </ul>
        <ul>
          <h3>Links</h3>
          <li>
            <Link href="/about">
              <span className="material-symbols-rounded">info</span>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/team">
              <span className="material-symbols-rounded">people</span>
              Team
            </Link>
          </li>
          <li>
            <Link href="/careers">
              <span className="material-symbols-rounded">work</span>
              Careers
            </Link>
          </li>
        </ul>
      </span>
    </footer>
  )
}