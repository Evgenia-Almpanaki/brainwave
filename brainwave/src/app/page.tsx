import Menu from "./menu";
import HeroPanel from "./heroPanel";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
    <div className="p-4">
      <Menu />
      <HeroPanel />
    </div>
  );
}
