import React, { useEffect, useState } from "react";
import style from "./Body.module.css";
import axios from "axios";
import Spinner from "../../Spinner/Spinner";

const Body: React.FC = () => {
  interface Result {
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
  let isError = false;
  const [data, setData] = useState<Result[]>();
  const fetchData = async () => {
    try {
      await axios
        .get<Result[]>(
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
    return <div className={style.Content}>{data[0].person}</div>;
  }
  return <Spinner />;
};
export default Body;
