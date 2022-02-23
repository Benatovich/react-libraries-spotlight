import DataGrid from 'react-data-grid';
import data from './data';
import { generateColumns, makeCountByAge, genderCountByCarAge } from './data-utils';
import * as V from 'victory';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <><DataGrid
      columns={generateColumns(data)}
      rows={data} />
    <V.VictoryChart domainPadding={20}>
      <V.VictoryAxis
        tickValues={[1, 2, 3, 4]}
        style={{
          axis: { stroke: '#E0F2F1' },
          axisLabel: { fontSize: 14 },
          ticks: { stroke: '#ccc' },
          tickLabels: { fontSize: 10, angle: 0, fill: 'red', fontWeight: 'bold' }
        }} />
      <V.VictoryAxis
        dependentAxis
      />
      <V.VictoryBar data={genderCountByCarAge(data)} x='gender' y='averageCarAge' />
    </V.VictoryChart>
    <V.VictoryChart domainPadding={20}>
      <V.VictoryAxis
        tickValues={[1, 2, 3, 4]}
        style={{
          axis: { stroke: '#E0F2F1' },
          axisLabel: { fontSize: 14 },
          ticks: { stroke: '#ccc' },
          tickLabels: { fontSize: 10, angle: 90, fill: 'blue', fontWeight: 'bold', verticalAnchor: 'bottom' }
        }} />
      <V.VictoryAxis
        dependentAxis
      />

      <V.VictoryBar data={makeCountByAge(data)} x='make' y='averageAge' />
    </V.VictoryChart>
    </>
  );
}
console.log(genderCountByCarAge(data));
console.log(makeCountByAge(data));
export default App;