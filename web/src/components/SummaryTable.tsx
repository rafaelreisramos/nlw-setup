import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

import { api } from '../lib/axios'
import { generateDatesFromBeginningOfYear } from '../utils/generate-dates-from-beginning-of-year'

import { HabitDay } from './HabitDay'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const summaryDates = generateDatesFromBeginningOfYear()
const MINIMUM_SUMMARY_DATES_SIZE = 18 * 7 // 18 weeks
const amountOfDaysToFill = MINIMUM_SUMMARY_DATES_SIZE - summaryDates.length

type Summary = {
  id: string
  date: string
  amount: number
  completed: number
}[]

function SummaryTable() {
  const [summary, setSummary] = useState<Summary>([])

  useEffect(() => {
    api.get('summary').then((response) => setSummary(response.data))
  }, [])

  return (
    <main className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, i) => (
          <div
            key={`${weekDay}-${i}`}
            className="text-zinc-400 text-xl font-bold h-10 w-10 flex items-center justify-center"
          >
            {weekDay}
          </div>
        ))}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((date) => {
          const dayInSummary = summary.find((day) =>
            dayjs(date).isSame(day.date, 'day')
          )

          return (
            <HabitDay
              key={date.toString()}
              date={date}
              amount={dayInSummary?.amount}
              completed={dayInSummary?.completed}
            />
          )
        })}

        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, i) => (
            <div
              key={i}
              className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
            />
          ))}
      </div>
    </main>
  )
}

export { SummaryTable }
