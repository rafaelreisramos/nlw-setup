import {
  Dimensions,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import clsx from 'clsx'
import dayjs from 'dayjs'

import { generateProgressPercentage } from '../utils/generate-progress-percentage'

const WEEK_DAYS = 7
const SCREEN_HORIZONTAL_PADDING = 32 * 2
const DAY_SIZE_MARGIN = WEEK_DAYS * 8 // 8 -> m-1 (4px) on each day

export const DAY_SIZE =
  (Dimensions.get('screen').width -
    SCREEN_HORIZONTAL_PADDING -
    DAY_SIZE_MARGIN) /
  WEEK_DAYS

interface Props extends TouchableOpacityProps {
  date: Date
  amount?: number
  completed?: number
}

function HabitDay({ amount = 0, completed = 0, date, ...rest }: Props) {
  const completedPercentage =
    amount > 0 ? generateProgressPercentage(amount, completed) : 0
  const today = dayjs().startOf('day').toDate()
  const isCurrentDay = dayjs(date).isSame(today)

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={clsx('bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800', {
        'bg-zinc-900 border-2 border-zinc-800': completedPercentage === 0,
        'bg-violet-900 border-violet-800':
          completedPercentage > 0 && completedPercentage < 20,
        'bg-violet-800 border-violet-700':
          completedPercentage >= 20 && completedPercentage < 40,
        'bg-violet-700 border-violet-600':
          completedPercentage >= 40 && completedPercentage < 60,
        'bg-violet-600 border-violet-500':
          completedPercentage >= 60 && completedPercentage < 80,
        'bg-violet-500 border-violet-400': completedPercentage >= 80,
        'border-white border-4': isCurrentDay,
      })}
      style={{ width: DAY_SIZE, height: DAY_SIZE }}
      {...rest}
    />
  )
}

export { HabitDay }
