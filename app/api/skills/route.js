import { NextResponse } from "next/server";
export async function GET(request) {
  return NextResponse.json({
    data: [
      "Reactjs",
      "Nextjs",
      "HTML",
      "CSS",
      "MaterialUI",
      "Tailwind CSS",
      "React-Router",
      "ContextAPI",
      "ChartJS",
      "Axios",
      "React-Hooks",
    ],
  });
}
