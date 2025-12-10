import { Metadata } from "next"
import Aboutdesc from "../components/Aboutdesc";

export const metadata: Metadata = {
  title: {
    default: "About",
    template: "%s | My Next App"
  },
  description: "About this APP",
 
};

function about() {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black">
      <Aboutdesc/>
    </div>
  )
}

export default about

