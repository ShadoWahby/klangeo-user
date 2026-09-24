const About = () => {
  const team = [
    {
      name: 'Younis Wahby',
      role: 'Co-Founder, CEO, CTO',
    },
    {
      name: 'Brian Riad',
      role: 'Co-Founder, CBO, CHRO, CPO',
    },
    {
      name: 'Mohamed Askar',
      role: 'CMO',
    },
    {
      name: 'Seif Ibrahim',
      role: 'CFO'
    },
  ]

  return (
    <>
      <header>
        <h1>Klangeo Team</h1>
      </header>
      <main>
        <section>
          {team.map((member) => (
            <card key={member.name}>
              <img src={`/team/${member.name}.jpg`} alt={member.name} />
              <h2>{member.name}</h2>
              <p>{member.role}</p>
            </card>
          ))}
        </section>
      </main>
    </>
  )
}

export default About