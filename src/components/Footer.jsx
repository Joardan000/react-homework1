import appstore from "../assets/appstore.svg"
import playMarket from "../assets/playmarket.svg"
import ins from "../assets/ins.svg"
import tg from "../assets/tg.svg"
import yt from "../assets/yt.svg"
import fc from "../assets/fc.svg"

function Footer() {
    return (
        <>
            <footer>
                <div className="max-w-[1240px] w-full mx-auto">
                    <div className="grid grid-cols-4 px-3 max-[833px]:grid-cols-2 max-[410px]:grid-cols-1 max-[833px]:gap-10 max-[833px]:justify-center pt-6 items-start justify-between mb-[75.2px]">
                        <div className="max-w-[310px] mx-auto w-full max-[833px]:grid justify-center max-[833px]:text-center">
                            <p className="footer-title font-medium text-[14px] leading-[19px] text-[#1F2026] mb-4">Biz haqimizda</p>
                            <p className="footer-text text-xs leading-4 text-[#8B8E99] mb-[19px]">Topshirish punktlari</p>
                            <p className="footer-text text-xs leading-4 text-[#8B8E99]">Vakansiyalar</p>
                        </div>
                        <div className="max-w-[310px] mx-auto w-full max-[833px]:grid justify-center max-[833px]:text-center">
                            <p className="footer-title font-medium text-[14px] leading-[19px] text-[#1F2026] mb-4">Foydalanuvchilarga</p>
                            <p className="footer-text text-xs leading-4 text-[#8B8E99] mb-[19px]">Biz bilan bog'lanish</p>
                            <p className="footer-text text-xs leading-4 text-[#8B8E99]">Savol javob</p>
                        </div>
                        <div className="max-w-[310px] mx-auto w-full max-[833px]:grid justify-center max-[833px]:text-center">
                            <p className="footer-title font-medium text-[14px] leading-[19px] text-[#1F2026] mb-4">Tadbirkorlarga</p>
                            <p className="footer-text text-xs leading-4 text-[#8B8E99] mb-[19px]">Uzumda soting</p>
                            <p className="footer-text text-xs leading-4 text-[#8B8E99]">Sotuvchi kabinetiga kirish</p>
                        </div>
                        <div className="socials max-w-[310px] mx-auto w-full max-[833px]:grid justify-center max-[833px]:text-center">
                            <p className="font-medium text-[14px] leading-[19px] text-[#1F2026] mb-4">Ilovani yuklab olish</p>
                            <div className="flex gap-6 items-center mb-12">
                                <div className="flex items-center">
                                    <img src={appstore} alt="appstore-icon"/>
                                    <p className="font-medium text-[12.8px] leading-[15.36px] text-[#1F2026]">AppStore</p>
                                </div>
                                <div className="flex items-center">
                                    <img src={playMarket} alt="play-market-icon"/>
                                    <p className="font-medium text-[12.8px] leading-[15.36px] text-[#1F2026]">Google Play</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-medium text-[14px] leading-[18px] text-[#1F2026] mb-4">
                                    Uzum ijtimoiy tarmoqlarda
                                </p>
                                <div className="flex max-[833px]:justify-center items-center gap-3">
                                    <img src={ins} alt="instagram-icon"/>
                                    <img src={tg} alt="telegram-icon"/>
                                    <img src={yt} alt="youtube-icon"/>
                                    <img src={fc} alt="facebook-icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-full py-[0.4px] px-3 rounded bg-[#36364033]"></div>
                    <div className="max-w-full px-3 flex justify-between items-start py-4 max-[833px]:flex-wrap max-[833px]:justify-center max-[833px]:gap-5">
                        <div className="flex text-center max-[410px]:justify-center items-center gap-4 text-[14px] leading-[18px] text-[#1F2026] font-medium">
                            <p>Maxfiylik kelishuvi</p>
                            <p>Foydalanuvchi kelishuvi</p>
                        </div>
                        <p className="text-[11px] leading-[14px] text-[#8B8E99] text-center">«2024© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;