import {
  Dimensions,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

const WEEK_DAYS = 7
const SCREEN_HORIZONTAL_PADDING = 32 * 2
const DAY_SIZE_MARGIN = WEEK_DAYS * 8 // 8 -> m-1 (4px) on each day

export const DAY_SIZE =
  (Dimensions.get('screen').width -
    SCREEN_HORIZONTAL_PADDING -
    DAY_SIZE_MARGIN) /
  WEEK_DAYS

interface Props extends TouchableOpacityProps {}

function HabitDay({ ...rest }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800"
      style={{ width: DAY_SIZE, height: DAY_SIZE }}
      {...rest}
    />
  )
}

export { HabitDay }
