import about from '../assets/about.jpg'

function About() {
    return (
        <section className="bg-white dark:bg-gray-900" id='about'>
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={about} alt="mockup" className=" h-[350px]" />
                </div>
                <div className="mr-auto place-self-center lg:col-span-7 pl-4">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">About IPL - The Heartbeat of Cricket</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Since its inception in 2008, the Indian Premier League (IPL) has revolutionized the world of cricket. Bringing together the finest talent from across the globe, IPL is a fusion of sports and entertainment like no other. With its fast-paced T20 format, high-octane matches, and star-studded lineups, IPL has become a global phenomenon, captivating millions of fans each year.

Beyond just the game, IPL fosters a sense of unity, pride, and excitement that transcends borders and cultures. From emerging young cricketers to seasoned legends, IPL provides a platform for talent to shine on the world stage. With state-of-the-art stadiums, cutting-edge technology, and thrilling fan experiences, IPL continues to set new benchmarks in sports entertainment.

Whether you're a die-hard cricket fan or new to the game, IPL offers something for everyone. Join us in celebrating the spirit of cricket and witness the magic unfold every season!</p>
                    
                </div>
            </div>
        </section>
    )
}

export default About