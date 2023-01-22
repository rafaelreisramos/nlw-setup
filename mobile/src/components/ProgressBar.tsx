import { useEffect } from 'react'
import { View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

interface Props {
  progress?: number
}

export function ProgressBar({ progress = 0 }: Props) {
  const sharedProgress = useSharedValue(progress)

  useEffect(() => {
    sharedProgress.value = withTiming(progress)
  }, [progress])

  const style = useAnimatedStyle(() => {
    return { width: `${sharedProgress.value}%` }
  })

  return (
    <View className="w-full h-3 mt-4 rounded-xl bg-zinc-700">
      <Animated.View className="h-3 rounded-xl bg-violet-500" style={style} />
    </View>
  )
}
