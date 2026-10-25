// All weekly records live here.
//
// pdf:     path of the PDF inside public/pdfs/. Set to null if no PDF applies.
// noTasks: true for weeks where no tasks were assigned (no PDF button is ever shown).
// title / description: replace with the real topic of each week whenever you like.
//
// To add a PDF: drop the file into public/pdfs/ using the filename below.
// The website checks automatically whether the file exists.

const describe = (n) => `Java laboratory exercises and observations for Week ${n}.`

export const weeks = [
  { week: 1,  title: 'Week 1 Record',  description: describe(1),  status: 'Completed', pdf: '/pdfs/week1.pdf' },
  { week: 2,  title: 'Week 2 Record',  description: describe(2),  status: 'Completed', pdf: '/pdfs/week2.pdf' },
  { week: 3,  title: 'Week 3 Record',  description: describe(3),  status: 'Completed', pdf: '/pdfs/week3.pdf' },
  { week: 4,  title: 'Week 4 Record',  description: '', status: 'No Tasks Assigned', pdf: null, noTasks: true,
    message: 'No tasks were assigned in Week 4.' },
  { week: 5,  title: 'Week 5 Record',  description: '', status: 'No Tasks Assigned', pdf: null, noTasks: true,
    message: 'No tasks were assigned in Week 5.' },
  { week: 6,  title: 'Week 6 Record',  description: describe(6),  status: 'Completed', pdf: '/pdfs/week6.pdf' },
  { week: 7,  title: 'Week 7 Record',  description: describe(7),  status: 'Completed', pdf: '/pdfs/week7.pdf' },
  { week: 8,  title: 'Week 8 Record',  description: describe(8),  status: 'Completed', pdf: '/pdfs/week8.pdf' },
  { week: 9,  title: 'Week 9 Record',  description: describe(9),  status: 'Completed', pdf: '/pdfs/week9.pdf' },
  { week: 10, title: 'Week 10 Record', description: describe(10), status: 'Completed', pdf: '/pdfs/week10.pdf' },
  // Weeks 11 and 12: status becomes "Completed" automatically once the PDF is found.
  { week: 11, title: 'Week 11 Record', description: describe(11), status: 'Pending', pdf: '/pdfs/week11.pdf' },
  { week: 12, title: 'Week 12 Record', description: describe(12), status: 'Pending', pdf: '/pdfs/week12.pdf' },
]
