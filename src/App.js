import "./styles.css";
import Search from "./Components/Search";
import WeeklyReport from "./Components/WeeklyReport";
import DailyCard from "./Components/DailyCard";

export default function App() {
  return (
    <div className="App">
      <Search />
      <WeeklyReport />
      <DailyCard />
    </div>
  );
}
