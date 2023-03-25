import { NextResponse } from "next/server";
import moment from "moment";
export async function GET(request) {
  let todayDate = moment();
  return NextResponse.json({
    data: [
      {
        open: true,
        designation: "Tech Lead",
        company: "SFLHUB",
        startDate: "1/1/2023",
        endDate: todayDate,
        companyLocation: "Delhi",
        achievements: [
          {
            achievement:
              "Requirement analysis and interaction with the commerce client to comprehend the modifications in the current module.",
          },
          {
            achievement:
              "Managing a squad of 5 developers and distributing the task accordingly.",
          },
          {
            achievement:
              "Development of different components using React JS with use of array of react js libraries like Axios, Material UI, Chartjs, React Router, Redux Context API etc.",
          },
        ],
        companyDescription:
          "SFL is a company that provides logistics services to businesses through technology.",
      },
      {
        open: false,
        designation: "Software Engineer",
        company: "Snehix",
        startDate: "7/1/2020",
        endDate: "12/31/2022",
        companyLocation: "Bengaluru",
        achievements: [
          {
            achievement:
              "Building Web portals for school admin, teacher, student, and admin with Nextjs on top of Reactjs with the use of multiple libraries like material UI v4, axios, jwt-decode, lscache, react-big-calender etc.",
          },
          {
            achievement:
              "Portals consist of array of components with responsive design.",
          },
        ],
        companyDescription:
          "Snehix is developing an ecosystem around E-ink tablet (The Blackboard).",
      },
      {
        open: false,
        designation: "Quality Assurance Engineer",
        company: "Codemasters",
        startDate: "2/1/2020",
        endDate: "6/1/2022",
        companyLocation: "Pune",
        achievements: [],
        companyDescription:
          "Codemasters is a game development company that makes the infamous F1 series games.",
      },
    ],
  });
}
