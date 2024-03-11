import React from 'react'

import { PieChart, Pie, Cell , ResponsiveContainer} from 'recharts';

const RADIAN = Math.PI / 180;
const data = [
  { name: 'Low', value: 25, color: '#4caf50' },
  { name: 'Moderate', value: 37, color: '#ffc107' },
  { name: 'High', value: 25, color: '#ff9800' },
  { name: 'Very High', value: 37, color: '#ff5722' },
  { name: 'Extereme', value: 25, color: '#673ab7' },
];
const cx = 100;
const cy = 120;
const iR = 70;
const oR = 100;
const value = 35;

const needle = (value, data, cx, cy, iR, oR, color) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="#none" fill={color} />,
  ];
};


function UVIndexPieChart() {
  return (
    <ResponsiveContainer width="100%" height={130}>
    <PieChart width={400} height={500}>
    <Pie
      dataKey="value"
      startAngle={180}
      endAngle={0}
      data={data}
      cx={cx}
      cy={cy}
      innerRadius={iR}
      outerRadius={oR}
      fill="#8884d8"
      stroke="none"
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={entry.color} />
      ))}
    </Pie>
    {needle(value, data, cx, cy, iR, oR, '#424242')}
  </PieChart>
  </ResponsiveContainer>
  )
}

export default UVIndexPieChart