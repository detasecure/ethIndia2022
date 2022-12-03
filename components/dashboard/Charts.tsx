import { NextPage } from "next";
import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import Data from "../dashboard/sample.json";
const acc = Data.meta.results;
const wal = Data.meta.results;
const h_w = Data.meta.high_risk_wallet_count;
const h_a = Data.meta.high_risk_people;
const Charts: NextPage = () => {
  const data = [
    { name: "Group A", value: acc },
    { name: "Group B", value: wal },
    { name: "Group C", value: h_w },
    { name: "Group D", value: h_a },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const RADIAN = Math.PI / 180;
  interface renderProps {
    cx: number;
    cy: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
    index: number;
    midAngle: number;
  }
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: renderProps) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + 1.4 * radius * Math.cos(-midAngle * RADIAN);
    const y = cy + 1.4 * radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="flex justify-around w-full mt-6 gap-6 px-28  rounded-xl ">
      <div className="mix-blend-lighten shadow-xl bg-gray-900 rounded-xl shadow-cyan-500/30">
        <h1 className="text-center text-xl py-4">Data Distribion</h1>
        <PieChart
          width={600}
          height={600}
          className="text-center p-10 flex justify-center"
        >
          <Pie
            data={data}
            cx={280}
            cy={280}
            innerRadius={150}
            outerRadius={200}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label={renderCustomizedLabel}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>

      <div className="mix-blend-lighten shadow-xl w-full bg-gray-900 rounded-xl shadow-cyan-500/30"></div>
    </div>
  );
};

export default Charts;
