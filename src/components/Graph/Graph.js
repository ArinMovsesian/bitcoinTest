import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import fetchGraphData from "../../store/graph-action";
import { graphActions } from "../../store/graph-slice";
const Graph = () => {
  const dispatch = useDispatch();
  const allData = useSelector((state) => state.graph.allData);
  const data = useSelector((state) => state.graph.data);
  useEffect(() => {
    dispatch(fetchGraphData())
  }, [dispatch]);
  const oneMonthH = () => {
    dispatch(graphActions.oneMonthH())  
  }
  const sevenDayH = () => {
    dispatch(graphActions.sevenDayH())
  }
  const lastDayH = () => {
    dispatch(graphActions.lastDayH());
  }
  return (
    <>
      <LineChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
      </LineChart>
      <button onClick={lastDayH}>24 hour</button>
      <button onClick={sevenDayH}>7 days</button>
      <button onClick={oneMonthH}>1 month</button>
    </>
  );
};
export default Graph;
