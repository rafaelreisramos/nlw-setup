import { Plus } from 'phosphor-react'

import logoImg from '../assets/logo.svg'

function Header() {
  return (
    <header className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={logoImg} alt="Habits" />
      <button
        className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300"
        type="button"
      >
        <Plus size={20} className="text-violet-500" />
        Novo hábito
      </button>
    </header>
  )
}

export { Header }
