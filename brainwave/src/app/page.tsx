import Menu from "./menu";
import 'bootstrap/dist/css/bootstrap.css'
import Plans from "./plans";
import Features from "./features";

export default function Home() {
  return (
    <div className="p-4 w-75 m-auto">
      <Menu />
      <Plans />
      <Features />
    </div>
  );
}
