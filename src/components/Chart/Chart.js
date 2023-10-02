import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {

    const datapointvalue = props.datapoints.map((datapoint)=>datapoint.value);
    const maxdatapointvalue=Math.max(...datapointvalue);

  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={maxdatapointvalue}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
