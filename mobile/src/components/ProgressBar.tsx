import { View } from 'react-native'

interface Props {
  progress?: number
}

export function ProgressBar({ progress = 0 }: Props) {
  return (
    <View className="w-full h-3 mt-4 rounded-xl bg-zinc-700">
      <View
        className="h-3 rounded-xl bg-violet-500"
        style={{ width: `${progress}%` }}
      />
    </View>
  )
}
