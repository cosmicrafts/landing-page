import {React, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./css/font.css";
import "./css/html.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import wou_logo from "./resources/footer/LogoWoU.svg";

import * as serviceWorker from "./serviceWorker";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
    Home,
    About,
    NoPage,
    Leaderboards,
    Contact,
    Blog,
    Posts,
    Post,
} from "./pages";

import {
    Header,
    Footer,
} from "./components";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/coming-soon" element={<NoPage />} />
            <Route path="/leaderboards" element={<Leaderboards />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />}>
            <Route path="" element={<Posts />} />
            <Route path=":postSlug" element={<Post />} />
            </Route>
        </Routes>
        <Footer />
    </Router>
);

serviceWorker.unregister();
reportWebVitals();
