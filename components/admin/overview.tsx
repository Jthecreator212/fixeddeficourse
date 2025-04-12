"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    name: "Jan",
    users: 45,
    completions: 12,
  },
  {
    name: "Feb",
    users: 62,
    completions: 18,
  },
  {
    name: "Mar",
    users: 78,
    completions: 24,
  },
  {
    name: "Apr",
    users: 91,
    completions: 31,
  },
  {
    name: "May",
    users: 120,
    completions: 42,
  },
  {
    name: "Jun",
    users: 158,
    completions: 50,
  },
  {
    name: "Jul",
    users: 201,
    completions: 65,
  },
  {
    name: "Aug",
    users: 243,
    completions: 78,
  },
  {
    name: "Sep",
    users: 274,
    completions: 94,
  },
  {
    name: "Oct",
    users: 296,
    completions: 108,
  },
  {
    name: "Nov",
    users: 310,
    completions: 119,
  },
  {
    name: "Dec",
    users: 329,
    completions: 124,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Bar dataKey="users" fill="hsl(267, 83%, 66%)" radius={[4, 4, 0, 0]} className="fill-primary" />
        <Bar dataKey="completions" fill="hsl(267, 83%, 40%)" radius={[4, 4, 0, 0]} className="fill-primary/70" />
      </BarChart>
    </ResponsiveContainer>
  )
}
