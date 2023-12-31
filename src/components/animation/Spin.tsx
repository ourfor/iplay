import { ReactNode } from "react"
import style from "./Spin.module.scss"
import { animated, useSpring } from "@react-spring/web"
export function Spin() {
    return (
        <div className={style["animation-spin"]}>
            <svg width="1rem" height="1rem" viewBox="0 0 128 128"><path d="M64 0L40.08 21.9a10.98 10.98 0 00-5.05 8.75C34.37 44.85 64 60.63 64 60.63V0z" fill="#ffb118"></path><path d="M128 64l-21.88-23.9a10.97 10.97 0 00-8.75-5.05C83.17 34.4 67.4 64 67.4 64H128z" fill="#80c141"></path><path d="M63.7 69.73a110.97 110.97 0 01-5.04-20.54c-1.16-8.7.68-14.17.68-14.17h38.03s-4.3-.86-14.47 10.1c-3.06 3.3-19.2 24.58-19.2 24.58z" fill="#cadc28"></path><path d="M64 128l23.9-21.88a10.97 10.97 0 005.05-8.75C93.6 83.17 64 67.4 64 67.4V128z" fill="#cf171f"></path><path d="M58.27 63.7a110.97 110.97 0 0120.54-5.04c8.7-1.16 14.17.68 14.17.68v38.03s.86-4.3-10.1-14.47c-3.3-3.06-24.58-19.2-24.58-19.2z" fill="#ec1b21"></path><path d="M0 64l21.88 23.9a10.97 10.97 0 008.75 5.05C44.83 93.6 60.6 64 60.6 64H0z" fill="#018ed5"></path><path d="M64.3 58.27a110.97 110.97 0 015.04 20.54c1.16 8.7-.68 14.17-.68 14.17H30.63s4.3.86 14.47-10.1c3.06-3.3 19.2-24.58 19.2-24.58z" fill="#00bbf2"></path><path d="M69.73 64.34a111.02 111.02 0 01-20.55 5.05c-8.7 1.14-14.15-.7-14.15-.7V30.65s-.86 4.3 10.1 14.5c3.3 3.05 24.6 19.2 24.6 19.2z" fill="#f8f400"></path><circle cx="64" cy="64" r="2.03"></circle></svg>
        </div>
    )

}

export interface SpinBoxProps {
    children: ReactNode|ReactNode[]
}

export function SpinBox({children}: SpinBoxProps) {
    const styles = useSpring({
        from: {rotate: "0"},
        to: {rotate: "360deg"},
        config: {
            duration: 1500
        },
        loop: true
    })
    return (
        <animated.div className={style.inner} style={{margin: 0, padding: 0, ...styles}}>
            {children}
        </animated.div>
    )
}