import { student } from '../data/student'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <p className="hero-subject">{student.subject}</p>
        <h1>
          JAVA PROGRAMMING
          <br />
          LABORATORY RECORD
        </h1>

        <div className="hero-id">
          <span className="hero-name">{student.nameUpper}</span>
          <span className="hero-roll">{student.rollNo}</span>
          <span className="hero-branch">{student.branchShort} • SECTION {student.section}</span>
        </div>

        <p className="hero-intro">
          This website contains my Java laboratory exercises and weekly practical records.
          Open any week below to view the submitted record as a PDF.
        </p>

        <a href="#weekly-labs" className="btn btn-primary btn-lg">Explore Weekly Labs</a>
      </div>
    </section>
  )
}
