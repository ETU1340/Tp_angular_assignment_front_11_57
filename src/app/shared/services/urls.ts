// export const baseurl = 'http://localhost:8010/api/';
export const baseurl = 'https://angular-m2-backend.onrender.com/api/';
export const urls = {
  students: {
    get: baseurl + 'students',
  },
  subjects: {
    get: baseurl + 'subjects',
  },
  assignments: {
    post: baseurl + 'assignments',
    get: baseurl + 'assignments',
    put: baseurl + 'assignments',
    delete: baseurl + 'assignments',
    returned: baseurl + 'assignmentReturned',
    notReturned: baseurl + 'assignmentNotReturned',
  },
  stat: {
    get: baseurl + 'stat',
  },
  searchReturned: {
    get: baseurl + 'searchReturned',
  },
  searchNotReturned: {
    get: baseurl + 'searchNotReturned',
  },
  auth: {
    login: baseurl + 'teachers',
  },
};
