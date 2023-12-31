import { Media } from "@model/Media"
import style from "./BannerCard.module.scss"
import { imageUrl } from "@api/config"
import { useNavigate } from "react-router-dom"
import { Button } from "@radix-ui/themes"

export interface BannerCardProps {
    model: Media
}
export function BannerCard({model}: BannerCardProps) {
    const navigate = useNavigate()
    const type = model.Type
    return (
        <div className={style["banner-item"]}>
            <img src={imageUrl(model.Id, { maxWidth: 1920, maxHeight: 1080, tag: model.BackdropImageTags[0] }, "Backdrop/0")} />
            <p className={style["banner-title"]}>{model.Name}</p>
            <article>{model.Overview}</article>
            <Button 
                onClick={() => navigate(`/${type === "Series" ? "series" : "play"}/${model.Id}`)}
                className={style["watch"]}>立即观看</Button>
        </div>
    )
}