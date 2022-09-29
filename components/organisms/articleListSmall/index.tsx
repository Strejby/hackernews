import React from "react";
import Image from "next/image";

// Style.
import styles from "./style.module.scss";

// Atom.
import Hyperlink from "../../atoms/hyperlink";

// ----- Import end -----

function ArticleListSmall(props: any) {
    return (
        <Hyperlink href={props.url} externalLink={false}>
            <div className={styles.container}>
                <div className={styles.inner__container}>
                    <div className={styles.placement}>{props.placement}</div>
                    <div>
                        <div className={styles.author}>
                            <div className={styles.avatar}>
                                {props.by.slice(0, 2)}
                            </div>
                            <div className={styles.user__details}>
                                <p className={styles.user__details__username}>
                                    {props.by}
                                </p>
                                <p className={styles.user__details__karma}>
                                    Karma: {props.authorKarma}
                                </p>
                            </div>
                        </div>
                        <p className={styles.article__title}>{props.title}</p>
                        <div className={styles.article}>
                            <p className={styles.article__time}>{props.time}</p>
                            <p className={styles.article__type}>{props.type}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Hyperlink>
    );
}

export default ArticleListSmall;
