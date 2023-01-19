type HabitProps = {
  completed: number
}

function Habit(props: HabitProps) {
  return (
    <div className="bg-zinc-900 w-10 h-10 text-white m-2 rounded m2 flex items-center justify-center">
      {props.completed}
    </div>
  )
}

export { Habit }
