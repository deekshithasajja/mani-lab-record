import { student } from '../data/student'
import { UserIcon, IdIcon, BranchIcon, SectionIcon, CodeIcon } from './Icons'

const rows = [
  { icon: <UserIcon />,    label: 'Student Name',       value: student.name },
  { icon: <IdIcon />,      label: 'Roll Number',        value: student.rollNo },
  { icon: <BranchIcon />,  label: 'Branch',             value: student.branch },
  { icon: <SectionIcon />, label: 'Section',            value: student.section },
  { icon: <CodeIcon />,    label: 'Laboratory Subject', value: student.subject },
]

export default function Profile() {
  return (
    <section id="profile" className="section section-tint">
      <div className="container">
        <h2 className="section-title">Student Profile</h2>
        <p className="section-lead">Details of the student maintaining this record.</p>

        <div className="profile-card">
          <dl className="profile-list">
            {rows.map((r) => (
              <div className="profile-row" key={r.label}>
                <span className="profile-icon">{r.icon}</span>
                <div>
                  <dt>{r.label}</dt>
                  <dd>{r.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
