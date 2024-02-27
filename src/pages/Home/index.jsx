import BtnTheme from "../../components/BtnTheme"
import bg from "../../../public/background.mp4"
import "./Home.css"

function Home(){
    return(
        <div className="h-screen">
            <video src={bg} autoPlay muted loop class="video-bg"/>
            <div className="bg-overlay">
            <div className="home-text">
                <h1 className=" text-white">NBA</h1>
                <p className="text-white">Sitio oficial del NBA</p>
                <div className="flex justify-between w-full px-10">
                    <button className="bg-red-500 text-white rounded-full p-2">Ir a la boleteria</button>
                    <button className="bg-white  rounded-full p-2">Ir a la tienda</button>

                </div>
            </div>

            </div>
            {/* <BtnTheme></BtnTheme> */}
        </div>
        
    )
}

export default Home