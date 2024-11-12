import IconRating from "../assets/rating.png";
import IconRatingHalf from "../assets/rating-half.png";
import ImgTemp from "../assets/temp-1.jpeg";
import IconPlay from "../assets/play-button.png";
const Banner = () => {
    return (
        <div className="w-full h-[600px] bg-banner bg-center bg-no-repeat bg-cover relative">
            <div className="absolute w-full h-full top-0 left-0 bg-black opacity-30" />
            <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-30">
                <div className="flex flex-col space-y-5 items-baseline w-[50%]">
                    <p className="bg-red-600 flex items-center justify-center space-x-[30px] text-md pv-2 px-3 p-4">
                        TV Show
                    </p>
                    <div className="flex flex-col space-y-4">
                        <h1 className="text-white text-[40px] font-bold">Rèm ngọc châu sa</h1>
                        <div className="flex items-center space-x-3">
                            <img src={IconRating} alt = "rating" className=" w-8 h-8"/>
                            <img src={IconRating} alt = "rating" className=" w-8 h-8"/>
                            <img src={IconRating} alt = "rating" className=" w-8 h-8"/>
                            <img src={IconRating} alt = "rating" className=" w-8 h-8"/>
                            <img src={IconRatingHalf} alt = "ratinghalf" className=" w-8 h-8"/>
                        </div>
                        <p className="text-white">Rèm Ngọc Châu Sa lấy bối cảnh đầu thời nhà Đường. Nội dung phim kể về cô gái làm nghề bắt ngọc trai ở Hợp phố tên Đoan Ngọ vì muốn làm sáng tỏ thân thế của mình đã đồng ý gia nhập đội buôn của Yến Tử Kinh. Đoan Ngọ có một đầu óc vô cùng nhanh nhạy và tài năng kinh doanh không phải dạng vừa. Nhờ đó, nàng đã giúp việc làm ăn của đoàn buôn trở nên phát đạt.</p>
                        <div className="flex items-center space-x-4">
                            <button className="p-3 text-white bg-black font-bold text-sm"> Chi tiết</button>
                            <button className="p-3 text-white bg-red-600 font-bold text-sm"> Xem phim</button>
                        </div>
                    </div>
                </div>
                <div className="w-[50%] flex items-center justify-center">
                    <div className="w-[500px] h-[500px] relative group cursor-pointer">
                        <img src={ImgTemp} className="w-full h-full object-cover"/>
                        <div className=" w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <img src={IconPlay} className="w-16 h-16 relative z-20"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
