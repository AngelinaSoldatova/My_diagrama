import "./App.css";
import {Chart} from "react-google-charts";

export const options = {
  title: "Мой день",
  colors: [
    "#eb1b10",
    "#35eb10",
    "#0a0a0a",
    "#a2a3a2",
    "#fa50b6",
    "#faf450",
  ],
};
export const data = [
  ["Дела", "Процент от всех дел"],
  ["Сон", 16],
  ["Занятие вокалом", 3],
  ["Занятие курсом", 4],
  ["Еда", 4],
  ["Зарядка", 3],
  ["Общение с друзьями", 3],
];

function App() {
  return (
    <div className="App">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="100%"
        height="400px"
      />
    </div>
  );
}

export default App;