import usePdfExists from './usePdfExists'
import { CheckIcon, ClockIcon, MinusIcon, FileIcon } from './Icons'

export default function WeekCard({ data }) {
  const { week, title, description, noTasks, message } = data
  const pdfState = usePdfExists(noTasks ? null : data.pdf)

  // Weeks 11 and 12 start as "Pending" and turn "Completed" once their PDF is found.
  let status = data.status
  if (data.status === 'Pending' && pdfState === 'found') status = 'Completed'

  const badge =
    status === 'Completed'
      ? { cls: 'badge-done', icon: <CheckIcon /> }
      : status === 'No Tasks Assigned'
      ? { cls: 'badge-none', icon: <MinusIcon /> }
      : { cls: 'badge-pending', icon: <ClockIcon /> }

  return (
    <article className={`week-card ${noTasks ? 'week-card-none' : ''}`}>
      <div className="week-top">
        <span className="week-number">Week {week}</span>
        <span className={`badge ${badge.cls}`}>
          {badge.icon}
          {status}
        </span>
      </div>

      <h3>{title}</h3>

      {noTasks ? (
        <p className="no-tasks">{message}</p>
      ) : (
        <>
          <p className="week-desc">{description}</p>

          <div className="week-action">
            {pdfState === 'found' && (
              <a className="btn btn-primary btn-sm" href={data.pdf} target="_blank" rel="noopener noreferrer">
                <FileIcon />
                View PDF
              </a>
            )}
            {pdfState === 'missing' && <p className="pdf-missing">PDF not added yet.</p>}
            {pdfState === 'checking' && <p className="pdf-checking">Checking for PDF…</p>}
          </div>
        </>
      )}
    </article>
  )
}
