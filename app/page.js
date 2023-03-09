import Right from "@/components/Right";
import Left from "../components/Left";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <div className="flex flex-row justify-items-stretch p-2 gap-2">
        <div className="grow h-6">
          <Left />
        </div>
        <div className="">
          <Right />
        </div>
      </div>
    </main>
  );
}
