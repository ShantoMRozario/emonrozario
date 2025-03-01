
import coverImage from '/src/images/cover.jpg'



const Home = () => {
    return (
        <div>
            <div className="banner py-[50px]">
            <div>
            <div className="relative">
                <img src={coverImage} alt="" />
                <div className="absolute top-[50%] left-[10%] w-[500px]">
                    <h1 className="text-5xl font-bold">Bring Your Creativity Back To Life</h1>
                    <h2 className="text-2xl pt-5 ">A camera that puts a world of possibilities at your fingertips</h2>
                </div>
            </div>
        </div>
            </div>
            <div className="video">
                <iframe className="h-[800px] w-[1600px] mx-auto" src="https://www.youtube.com/embed/918e3QVXN0k?si=emv0Xa8EjTIaPdVs" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="bio max-w-[1600px] mx-auto">
                <h2 className="text-4xl font-bold text-center pt-5">Hey there, I’m Emon Rozario!</h2>
                <p className="text-xl pt-5 px-[300px] text-slate-400 ">Welcome to my photography world! I specialize in capturing the energy of live concerts, the magic of unforgettable weddings, and the creative essence of studio sessions Photography is not just my job—it’s my way of telling stories through images, whether it’s the thrill of a live show, the romance of a wedding day, or the artistry behind every studio shot.<br/>
                Explore my work and experience the moments I’ve captured. Got a project, event, or creative idea? Let’s chat and create something amazing together!</p>
            </div>

        </div>
    );
};

export default Home;
