import player from "../assets/player.jpg"

function Player({name}) {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
            <a href="#">
                <img className="rounded-t-lg" src={player} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </a>
            </div>
        </div>
    )
}

export default Player