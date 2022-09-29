import React, { Fragment, useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

// Libraries.
import axios from "axios";
import moment from "moment";

// Template.
import Homepage from "../components/templates/homepage";

// Atoms.
import Hyperlink from "../components/atoms/hyperlink";

// Organisms.
import ArticleListBig from "../components/organisms/articleListBig";
import ArticleListSmall from "../components/organisms/articleListSmall";
import ArticleListMedium from "../components/organisms/articleListMedium";

// Molecules.
import Loading from "../components/molecules/loading";

// ----- Import end -----

interface hackerNews {
    score: number;
    by: string;
    title: string;
    type: string;
    url: string;
    time: string;
}

interface hackerNewsData {
    score: number;
    by: string;
    title: string;
    type: string;
    url: string;
    time: string;
    author: {
        id: string;
        karma: number;
    };
}

interface author {
    id: string;
    karma: number;
}

const Home: NextPage = () => {
    const [newsList, setNewsList] = useState<hackerNewsData[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Fetching data from the api.
    function fetchTopStories() {
        setIsLoading(true);
        return axios.get(
            "https://hacker-news.firebaseio.com/v0/topstories.json"
        );
    }

    // After fetching data, get 14 random id's from the list, and make each api call.
    function getTenRandomTopStories() {
        fetchTopStories().then((idsList) => {
            const shuffled = idsList.data.sort(() => 0.5 - Math.random());
            let selected = shuffled.slice(0, 7);
            selected.map((id: number) => getHackerNews(id));
        });

        // Call the v0/item/ and /v0/user/" endpoints, calls the generateHackerNews function.
        function getHackerNews(id: number) {
            axios
                .get<hackerNews>(
                    "https://hacker-news.firebaseio.com/v0/item/" + id + ".json"
                )
                .then(function (hackerNews) {
                    axios
                        .get<author>(
                            "https://hacker-news.firebaseio.com/v0/user/" +
                                hackerNews.data.by +
                                ".json"
                        )
                        .then((authorObj) => {
                            generateHackerNews(authorObj.data, hackerNews.data);
                            setIsLoading(false);
                        })
                        .catch(function (error) {
                            setIsLoading(false);
                            console.log(error.message);
                        });
                });
        }
    }

    // Generate the final object adds them to useState.
    function generateHackerNews(author: author, hackerNewsObject: hackerNews) {
        const dateString = moment
            .unix(parseInt(hackerNewsObject.time))
            .format("MM/DD/YYYY")
            .toString();
        console.table(dateString);
        setNewsList((oldArray) => [
            ...oldArray,
            {
                score: hackerNewsObject.score,
                by: hackerNewsObject.by,
                title: hackerNewsObject.title,
                type: hackerNewsObject.type,
                url: hackerNewsObject.url,
                time: dateString,
                author: author,
            },
        ]);
    }

    // Being called once.
    useEffect(() => {
        getTenRandomTopStories();
    }, []);

    // Sorting the list first by from the highest score to lowest and lopping them though.
    return (
        <Fragment>
            <Head>
                <title>Latest tech news</title>
            </Head>
            {isLoading ? (
                <Loading />
            ) : (
                <Homepage
                    headerBannerData={newsList
                        .map((element, index) => (
                            <Hyperlink
                                href={`${element.url}`}
                                externalLink={true}
                                key={index}
                            >
                                {element.title}
                            </Hyperlink>
                        ))
                        .slice(0, 5)}
                >
                    <Fragment>
                        <div className="article__grid">
                            {newsList
                                .sort(({ score: a }, { score: b }) => b - a)
                                .map((element, index) => (
                                    <>
                                        {index === 0 ? (
                                            <div className="article__grid__span__two">
                                                <ArticleListBig
                                                    url={`${element.url}`}
                                                    placement={index + 1}
                                                    by={element.by}
                                                    authorKarma={
                                                        element.author.karma
                                                    }
                                                    title={element.title}
                                                    type={element.type}
                                                    time={element.time}
                                                />
                                            </div>
                                        ) : index <= 8 ? (
                                            <ArticleListMedium
                                                url={`${element.url}`}
                                                placement={
                                                    index > 8 ? null : index + 1
                                                }
                                                by={element.by}
                                                authorKarma={
                                                    element.author.karma
                                                }
                                                title={element.title}
                                                type={element.type}
                                                time={element.time}
                                            />
                                        ) : (
                                            <div className="article__grid__span__two">
                                                <ArticleListSmall
                                                    url={`${element.url}`}
                                                    placement={index + 1}
                                                    by={element.by}
                                                    authorKarma={
                                                        element.author.karma
                                                    }
                                                    title={element.title}
                                                    type={element.type}
                                                    time={element.time}
                                                />
                                            </div>
                                        )}
                                    </>
                                ))}
                        </div>
                    </Fragment>
                </Homepage>
            )}
        </Fragment>
    );
};

export default Home;
