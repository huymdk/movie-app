import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { MovieContext } from "../context/MovieProvider";
import YouTube from 'react-youtube';
import Modal from 'react-modal';

const opts = {
    height: '390',
    width: '640',
    playerVars: {
        autoplay: 1,
    },
};

const MovieSearch = ({ data }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [trailerKey, setTrailerKey] = useState("");
    const { handleVideoTrailer } = useContext(MovieContext);

    const handleTrailer = async (id) => {
        setTrailerKey('');
        try {
            const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
                }
            };
            const response = await fetch(url, options);
            const data = await response.json();
            setTrailerKey(data.results[0].key);
            setModalIsOpen(true);
        } catch (error) {
            setModalIsOpen(false);
            console.log(error);
        }
    }

    return (
        <div className="my-10 px-10 max-w-full">
            <h2 className="text-xl uppercase mb-4">Kết quả tìm kiếm</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {data && data.map((item) => (
                    <div
                        key={item.id}
                        className="bg-cover bg-no-repeat bg-center w-[200px] h-[300px] relative hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer"
                        style={{
                            backgroundImage: `url(${import.meta.env.VITE_IMG_URL}${item.poster_path})`,
                        }}
                        onClick={() => handleTrailer(item.id)}
                    >
                        <div className="bg-black w-full h-full opacity-40 absolute top-0 left-0 z-0" />
                        <div className="relative p-4 flex flex-col items-center justify-end h-full">
                            <h3 className="text-md uppercase">{item.name || item.title || item.original_title}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={{
                    overlay: {
                        position: "fixed",
                        zIndex: 9999,
                    },
                    content: {
                        top: "50%",
                        left: "50%",
                        right: "auto",
                        bottom: "auto",
                        marginRight: "-50%",
                        transform: "translate(-50%, -50%)",
                    }
                }}
                contentLabel="Example Modal"
            >
                <YouTube videoId={trailerKey} opts={opts} />
            </Modal>
        </div>
    );
};

MovieSearch.propTypes = {
    data: PropTypes.array.isRequired,
};

export default MovieSearch;
