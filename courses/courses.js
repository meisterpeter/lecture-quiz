/* =====================================================================
   LIST OF COURSES
   ---------------------------------------------------------------------
   One line per course file in this folder.
     id      must match the first argument of QUIZ.course('<id>', …) in the file
             (lower-case letters, digits, -; it appears in links: ?course=<id>)
     file    the file name in this folder
     active  true  = students see the course
             false = hidden (the file can already be uploaded and checked at <site>/#check)
   ===================================================================== */
QUIZ.courses([
  { id: 'sysbio',   file: 'sysbio.js',   active: false  },
  { id: 'devbio',   file: 'devbio.js',   active: false  },
  { id: 'dummy101', file: 'dummy101.js', active: false  },
  { id: 'example', file: 'example.js', active: false },
  { id: 'transgenic', file: 'transgenic.js', active: false },
  { id: 'genetics2', file: 'genetics2.js', active: true },
]);
