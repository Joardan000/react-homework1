import { products } from "../data/baseData.js";
import { useState } from "react";

import favIcon from "../assets/fav.svg";
import promotionIcon from "../assets/promotion.svg";
import starIcon from "../assets/star.svg";
import buyIcon from "../assets/buy.svg";
import arrowIcon from "../assets/arrow.svg";
import redFav from "../assets/redFav.svg";

function Products() {
    const [isTrue, setIsTrue] = useState(false);
    const [seeAll, setSeeAll] = useState("Yana ko'rsatish");

    const [likedIds, setLikedIds] = useState([]);

    function isLike(id){
        likedIds.includes(id)? setLikedIds(likedIds.filter(x=> x !== id)) : setLikedIds([...likedIds, id]);
    }

    function toggleAll() {
        setIsTrue(!isTrue);
        isTrue ? setSeeAll("Yana ko'rsatish") : setSeeAll("Yopish");
    }

    const product = isTrue ? products : products.slice(0, 12);

    const mapData = product.map((a) => (
        <div className="cursor-pointer hover:shadow-lg max-w-[264px] max-[650px]:max-w-[400px] anime2 p-3 hover:max-w-[350px] flex justify-center mx-auto w-full transition-all duration-300 ease-in-out bg-purple-200 rounded-lg"
             key={a.id}>
            <div>
                <div className="relative h-[309.33px] object-cover">
                    <img className="rounded-lg max-w-full w-full h-[309.32px] mx-auto object-cover" src={a.img} alt={'img' + a.id}/>
                    <img onClick={()=>isLike(a.id)} className="absolute top-[10px] right-[9px]" src={likedIds.includes(a.id) ? redFav : favIcon} alt={'favicon' + a.id}/>
                    {a.discount && <img className="absolute left-0 bottom-0" src={promotionIcon} alt={'promotion' + a.id}/>}
                </div>
                <div className="max-w-full px-2 pt-3 pb-2">
                    <p className="text-[12.8px] leading-[15.36px] text-[#1F2026] font-normal mb-1">{a.name}</p>
                    <div className="flex gap-1 items-center mb-2">
                        <div className="flex items-center gap-[3.15px]">
                            <img src={starIcon} alt={'star-icon-' + a.id}/>
                            <p className="font-light text-[11.2px] text-[#8B8E99]">{a.rating}</p>
                        </div>
                        <p className="font-light text-[11.2px] leading-[11.2px] text-[#8B8E99]">({a.reviews} sharx)</p>
                    </div>
                    <div className="mb-[2px] bg-[#FFFF00] text-center rounded text-[11px] leading-[17px] text-[#1F1F26] max-w-[105.94px] w-full">{a.installment}</div>
                    <div className="mt-[17.3px] flex items-end justify-between">
                        <div>
                            <p className="text-[11.2px] leading-[13.44px] text-[#8B8E99] line-through mb-[2px]">{a.oldPrice}</p>
                            <p className="mb-[2.4px] text-[#1F2026] text-[14px] leading-[16.8px]">{a.newPrice}</p>
                        </div>
                        <img src={buyIcon} alt={'buy-icon-' + a.id}/>
                    </div>
                </div>
            </div>
        </div>
    ));

    return (
        <>
            <section className="max-w-[1240px] mx-auto w-full m-10">
                <div className="px-3 font-bold mb-5 text-[28px] leaidng-[36px] flex items-center text-[#1F2026]">
                    <p>Arzon Narxlar</p>
                    <img src={arrowIcon} alt="arrow-icon"/>
                </div>
                <div className="flex justify-center flex-wrap gap-x-5 gap-y-8 mb-[52px]">{mapData}</div>
                <div className="px-3">
                    <button onClick={toggleAll} className="max-w-[740px] w-full rounded-lg py-5 flex mx-auto bg-[#F2F4F7] justify-center font-semibold text-base leading-[100%] text-[#1F2026]">{seeAll}</button>
                </div>
            </section>
        </>
    )
}

export default Products;