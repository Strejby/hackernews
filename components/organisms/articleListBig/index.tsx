import React from "react";
import Image from "next/image";

// Style.
import styles from "./style.module.scss";

// Atom.
import Hyperlink from "../../atoms/hyperlink";

// ----- Import end -----

function ArticleListBig(props: any) {
    return (
        <Hyperlink href={props.url} externalLink={false}>
            <div className={styles.container}>
                <div className={styles.inner__container}>
                    <div className={styles.left}>
                        <div className={styles.placement}>
                            0{props.placement}
                        </div>
                        <div className={styles.content}>
                            <div className={styles.author}>
                                <div className={styles.avatar}>
                                    {props.by.slice(0, 2)}
                                </div>
                                <div className={styles.user__details}>
                                    <p
                                        className={
                                            styles.user__details__username
                                        }
                                    >
                                        {props.by}
                                    </p>
                                    <p className={styles.user__details__karma}>
                                        Karma: {props.authorKarma}
                                    </p>
                                </div>
                            </div>
                            <p className={styles.article__title}>
                                {props.title}
                            </p>
                            <div className={styles.article}>
                                <p className={styles.article__time}>
                                    {props.time}
                                </p>
                                <p className={styles.article__type}>
                                    {props.type}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <Image
                            src={"/images/articles/" + props.placement + ".jpg"}
                            layout="fill"
                            objectFit="cover"
                            draggable={false}
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </Hyperlink>
    );
}

export default ArticleListBig;
