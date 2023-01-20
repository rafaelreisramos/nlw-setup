import { View, Text, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { HabitDay, DAY_SIZE } from '../components/HabitDay'
import { Header } from '../components/Header'

import { generateDatesFromBeginningOfYear } from '../utils/generate-dates-from-beginning-of-year'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const summaryDates = generateDatesFromBeginningOfYear()
const MINIMUM_SUMMARY_DATES_SIZE = 18 * 7 // 18 weeks
const amountOfDaysToFill = MINIMUM_SUMMARY_DATES_SIZE - summaryDates.length

function Home() {
  const { navigate } = useNavigation()

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />

      <View className="flex-row mt-6 mb-2">
        {weekDays.map((weekDay, i) => (
          <Text
            key={`${weekDay}-${i}`}
            className="text-zinc-400 text-xl font-bold text-center mx-1"
            style={{ width: DAY_SIZE }}
          >
            {weekDay}
          </Text>
        ))}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="flex-row flex-wrap">
          {summaryDates.map((date) => (
            <HabitDay
              key={date.toString()}
              onPress={() => navigate('habit', { date: date.toISOString() })}
            />
          ))}

          {amountOfDaysToFill > 0 &&
            Array.from({ length: amountOfDaysToFill }).map((_, i) => (
              <View
                key={i}
                className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                style={{ width: DAY_SIZE, height: DAY_SIZE }}
              />
            ))}
        </View>
      </ScrollView>
    </View>
  )
}

export { Home }
