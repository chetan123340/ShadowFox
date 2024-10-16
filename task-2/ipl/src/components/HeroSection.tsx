import trophy from "../assets/trophy.png"

function HeroSection() {
  return (
    <section className="bg-white dark:bg-gray-900" id="home">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Welcome to IPL 2024 - Where Cricket Meets Entertainment!</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Experience the thrill, passion, and glory as the biggest cricket stars battle it out for supremacy in the world's most exciting T20 league! Follow your favorite teams, stay updated with live scores, match highlights, and exclusive behind-the-scenes moments. From breathtaking sixes to stunning wickets, IPL 2024 promises unforgettable action that will keep you on the edge of your seat.</p>
            <p className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Gear up for the Ultimate Cricket Carnival!
            </p>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={trophy} alt="mockup" className=" h-[350px]"/>
        </div>                
    </div>
</section>
  )
}

export default HeroSection