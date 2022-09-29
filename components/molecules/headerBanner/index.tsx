import React from "react";

// Libraries.
import Marquee from "react-fast-marquee";

// Style.
import styles from "./style.module.scss";

// ----- Import end -----

function HeaderBanner({ children }: any) {
    return (
        <div className={styles.banner}>
            <Marquee
                pauseOnHover={true}
                gradient={false}
                speed={40}
                className={styles.marquee}
            >
                {children}
            </Marquee>
        </div>
    );
}

export default HeaderBanner;
