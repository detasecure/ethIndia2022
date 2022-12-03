import { NextPage } from 'next';
import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const Charts:NextPage = () => {

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;
interface renderProps {
  cx:number
  cy:number
  innerRadius:number
  outerRadius:number
  percent:number
  index:number
  midAngle:number
}
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }:renderProps) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + 1.4*radius * Math.cos(-midAngle * RADIAN);
  const y = cy + 1.4*radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
}


  return (
    <div className='mx-4'>
      <PieChart width={260} height={260} style={{paddingLeft: "12px"}}>
        <Pie
          data={data}
          cx={120}
          cy={120}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label={renderCustomizedLabel}
          >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
      </PieChart>
          </div>
  )
}

export default Charts