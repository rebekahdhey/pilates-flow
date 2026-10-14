import hero from '../assets/images/hero.jpg'

function Hero() {
  return (
    <header className="relative h-[55vh] min-h-80 w-full overflow-hidden">
      <img src={hero} alt="A calm pilates studio" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/20 to-[#fdf8f6]" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl font-bold text-white drop-shadow-md sm:text-6xl">
          Pilates Flow
        </h1>
        <p className="mt-3 max-w-md text-lg font-semibold text-white/90 drop-shadow">
          Build your own session and move at your own pace.
        </p>
      </div>
    </header>
  )
}

export default Hero