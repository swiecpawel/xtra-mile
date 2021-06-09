import React from "react";

export interface TableRowProps {
  index?: number;
  project: string;
  course: string;
  person: string;
  email: string;
  department: string;
  location: string;
  courseStartedDate: string;
  openedLessonsCount: number;
  completedDate: string;
  completedLessonsCount: number;
  totalLessonsCount: number;
  haveNotStarted: number;
  notOnSchedule: number;
  haveStarted: number;
  quizScore: number;
  quizScoreTotal: number;
  certificateTitle: null | string;
}

const TableRow: React.FC<TableRowProps> = ({
  index,
  project,
  course,
  person,
  email,
  department,
  location,
  courseStartedDate,
  openedLessonsCount,
  completedDate,
  completedLessonsCount,
  totalLessonsCount,
  haveNotStarted,
  notOnSchedule,
  haveStarted,
  quizScore,
  quizScoreTotal,
  certificateTitle,
}) => {
  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{project}</td>
      <td>{course}</td>
      <td>{person}</td>
      <td>{email}</td>
      <td>{department}</td>
      <td>{location}</td>
      <td>{courseStartedDate}</td>
      <td>{openedLessonsCount}</td>
      <td>{completedDate}</td>
      <td>{completedLessonsCount}</td>
      <td>{totalLessonsCount}</td>
      <td>{haveNotStarted}</td>
      <td>{notOnSchedule}</td>
      <td>{haveStarted}</td>
      <td>{quizScore}</td>
      <td>{quizScoreTotal}</td>
      <td>{certificateTitle}</td>
    </tr>
  );
};
export default TableRow;
