"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    date: "Jan 1",
    progress: 10,
    activity: 2,
  },
  {
    date: "Jan 15",
    progress: 15,
    activity: 5,
  },
  {
    date: "Feb 1",
    progress: 20,
    activity: 8,
  },
  {
    date: "Feb 15",
    progress: 25,
    activity: 12,
  },
  {
    date: "Mar 1",
    progress: 35,
    activity: 15,
  },
  {
    date: "Mar 15",
    progress: 40,
    activity: 18,
  },
  {
    date: "Apr 1",
    progress: 50,
    activity: 22,
  },
  {
    date: "Apr 15",
    progress: 60,
    activity: 25,
  },
  {
    date: "May 1",
    progress: 65,
    activity: 28,
  },
  {
    date: "May 15",
    progress: 70,
    activity: 30,
  },
  {
    date: "Jun 1",
    progress: 75,
    activity: 32,
  },
]

export function UserProgressChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="progress"
          stroke="hsl(267, 83%, 66%)"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="activity"
          stroke="hsl(267, 83%, 40%)"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
          style={{ opacity: 0.7 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
