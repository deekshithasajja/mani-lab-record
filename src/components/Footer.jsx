import { student } from '../data/student'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">{student.name}</p>
          <p>Roll Number: {student.rollNo}</p>
          <p>{student.subject}</p>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} {student.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
