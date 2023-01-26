
export {}
interface NoteList {
  id: number;
  heading: string;
  note: string;
  importance: string;
  date: string;
}

const notesList: NoteList[] = [
  {
    id: 0,
    heading: "Velikost postele",
    note: "lorem bla fjkfk ed iiidifkdlk dkfd jdjf d dflorem bla fjkfk ed iiidifkdlk dkfd jdjf d dflorem bla fjkfk ed iiidifkdlk dkfd jdjf d dflorem bla fjkfk ed iiidifkdlk dkfd jdjf d dflorem bla fjkfk ed iiidifkdlk dkfd jdjf d df",
    importance: "orange",
    date: new Date("2020-05-12T23:50:21.817Z").toLocaleString(),
  },
];
