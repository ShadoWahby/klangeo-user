const About = () => {
  const team = [
    {
      name: 'Younis Wahby',
      role: 'Founder, CEO, Audio Hardware and Software Engineer',
    },
    {
      name: 'Brian Riad',
      role: 'Co-Founder, CHRO',
    },
    {
      name: 'Moussa Aboubasha',
      role: 'Co-Founder, CPO',
    },
    {
      name: 'Mohamed Askar',
      role: 'Co-Founder, CMO',
    },
    {
      name: 'Seif Ibrahim',
      role: 'Co-Founder, CFO'
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