import React, { Component, Fragment } from "react";

import YouTubeComp from '../../../component/YouTubeComp/YouTubeComp';

class Youtube extends Component {
    render() {
        return (
            <Fragment>
                <p>Youtube</p>
                <hr />
                <YouTubeComp
                    time="7.15"
                    title="Pekerjaan Disainer Part 1"
                    desc="10 x ditonton. 1 bulan yang lalu"
                />
                <YouTubeComp
                    time="8.15"
                    title="Pekerjaan Disainer Part 2"
                    desc="20 x ditonton 2 bulan yang lalu"
                />
                <YouTubeComp
                    time="9.15"
                    title="Pekerjaan Disainer Part 3"
                    desc="30 x ditonton 3 bulan yang lalu"
                />
                <YouTubeComp
                    time="10.15"
                    title="Pekerjaan Disainer Part 4"
                    desc="40 x ditonton 4 bulan yang lalu"
                />
                <YouTubeComp />
            </Fragment>
        )
    }
}

export default Youtube