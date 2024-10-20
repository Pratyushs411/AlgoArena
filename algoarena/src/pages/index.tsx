import Head from "next/head"
import Topbar from "@/components/topbar/topbar";
export default function Home() {
  return (
    <>
    <main className="bg-white min-h-screen">
      <Topbar/>
    </main>
    </>
  );
}
