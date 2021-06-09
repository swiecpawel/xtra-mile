import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../Spinner/Spinner";
import { Table } from "reactstrap";
import TableRow, { TableRowProps } from "../TableRow/TableRow";

const Body: React.FC = () => {
  const [data, setData] = useState<TableRowProps[]>();
  const fetchData = async () => {
    try {
      await axios
        .get<TableRowProps[]>(
          `https://xtramile.azure-api.net/stats/lukaszcoding?apiSecret=i34nvn324gdfg5 `
        )
        .then((res) => {
          setData(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (data !== undefined) {
/*    let onlyProjects = data.map(({ project }) => project );
    let allProjects =  Array.from(new Set(onlyProjects));
    let statistics = [] ;
    allProjects.forEach(project => {
      let p = project
      let projectObject: any = {};
      projectObject["project"] = p;
      let newDataForExactProject = data.filter(row => row.project === p);
      let onlyCourses = newDataForExactProject.map(({ course }) => course );
      let allCourses =  Array.from(new Set(onlyCourses));
      allCourses.forEach(course =>{
        let newDataForExactCourse = newDataForExactProject.filter(row => row.course === course);

      })
    })*/
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Project</th>
            <th>Course</th>
            <th>Person</th>
            <th>Email</th>
            <th>Department</th>
            <th>Location</th>
            <th>Course Started Date</th>
            <th>Opened Lessons Count</th>
            <th>Opened Lessons Count</th>
            <th>Completed Date</th>
            <th>Completed Lessons Count</th>
            <th>Total Lessons Count</th>
            <th>Have Not Started</th>
            <th>Not On Schedule</th>
            <th>Have Started</th>
            <th>Quiz Score</th>
            <th>Quiz Score Total</th>
            <th>Certificate Title</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row: TableRowProps, index) => (
            <TableRow
              key={`${index}${row.person}`}
              index={index}
              project={row.project}
              course={row.course}
              person={row.person}
              email={row.email}
              department={row.department}
              location={row.location}
              courseStartedDate={row.courseStartedDate}
              openedLessonsCount={row.openedLessonsCount}
              completedDate={row.completedDate}
              completedLessonsCount={row.completedLessonsCount}
              totalLessonsCount={row.totalLessonsCount}
              haveNotStarted={row.haveNotStarted}
              notOnSchedule={row.notOnSchedule}
              haveStarted={row.haveStarted}
              quizScore={row.quizScore}
              quizScoreTotal={row.quizScoreTotal}
              certificateTitle={row.certificateTitle}
            />
          ))}
        </tbody>
      </Table>


    );
  }
  return <Spinner />;
};
export default Body;
