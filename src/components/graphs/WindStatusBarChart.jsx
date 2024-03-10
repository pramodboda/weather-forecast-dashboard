import React from 'react'
import {

    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
  } from "recharts";
  
  const data = [
    {
      name: "Page A",
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      pv: 2398,
      amt: 2210,
    },
    {
      name: "Page C",
      pv: 7800,
      amt: 2290,
    },
    {
      name: "Page D",
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      pv: 4300,
      amt: 2100,
    },  {
      name: "Page A",
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page D",
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      pv: 4300,
      amt: 2100,
    },
  ];

function WindStatusBarChart() {
  return (
    <ResponsiveContainer width="100%" height={50}>
    <BarChart width={730} height={250} data={data}>
<Tooltip />
<Bar dataKey="pv" fill="#8884d8" />
</BarChart>
</ResponsiveContainer>
  )
}

export default WindStatusBarChart