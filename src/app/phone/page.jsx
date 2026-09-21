'use client'

const Phone = () => {
  return (
    <>
      <header>
        <h1>Call Us</h1>
      </header>
      <main>
        <article>
          <h3>Europe</h3>
          <span>
            <a href="tel:+4917688864284" className="hyperlink">
              +4917688864284
            </a>
            <p>Austria, Belgium, Bulgaria, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Ireland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Netherlands, Norway, Poland, Portugal, Romania, Slovakia, Slovenia, Spain, and Sweden</p>
          </span>
        </article>
        <article>
          <h3>Africa</h3>
          <span>
            <a href="tel:+201026480686" className="hyperlink">
              +201026480686
            </a>
            <p>Egypt</p>
          </span>
        </article>
      </main>
    </>
  )
}

export default Phone