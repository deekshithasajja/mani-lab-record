import { weeks } from '../data/weeks'
import WeekCard from './WeekCard'

export default function WeeklyLabs() {
  return (
    <section id="weekly-labs" className="section">
      <div className="container">
        <h2 className="section-title">Weekly Laboratory Records</h2>
        <p className="section-lead">Twelve weeks of Java practicals. Each record opens in a new tab.</p>

        <div className="week-grid">
          {weeks.map((w) => (
            <WeekCard key={w.week} data={w} />
          ))}
        </div>
      </div>
    </section>
  )
}
