// Libraries
import React, { Component, Fragment, createContext } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Pages
import Product from "../Pages/Product/Product";
import LifeCycleComp from "../Pages/LifeCycleComp/LifeCycleComp";
import BlogPost from "../Pages/BlogPost/BlogPost";
import Youtube from "../Pages/Youtube/Youtube";
import DetailPost from "../Pages/BlogPost/DetailPost/DetailPost";
import GlobalProvider from "../../context/context";
import Hooks from "../Pages/Hooks/Hooks";

// Style
import './Home.css';


class Home extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <div className="navigation">
                        <Link to="/">Blog Post</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/life-cycle">Life Cycle</Link>
                        <Link to="/youtube">Youtube</Link>
                        <Link to="/hooks">Hooks</Link>
                    </div>
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/product" component={Product} />
                    <Route path="/life-cycle" component={LifeCycleComp} />
                    <Route path="/youtube" component={Youtube} />
                    <Route path="/detail-post/:id" component={DetailPost} />
                    <Route path="/hooks" component={Hooks} />
                </Fragment>
            </Router>
        )
    }
}

export default GlobalProvider(Home);