import './App.css'
import { Random } from './components/Random'
import { Tags } from './components/Tags'

function App() {
  return (
    <div className='polka h-full flex flex-col w-full items-center '>
      <h1 className='bg-white rounded-lg w-11/12 text-center mt-[40px] text-4xl font-bold px-10 py-2'>
      Generate Random Gifs
      </h1>
      <div className='flex flex-col w-full items-center'>
        <Random/>
        <Tags/>
      </div>
    </div>
  )
}

export default App
