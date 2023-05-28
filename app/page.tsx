"use client";
import HomePage from "./Components/Pages/HomePage/HomePage";
import React from "react";
import Loader from "./Components/Molecules/Loader/Loader";

// show loader compoent for 2 seconds, then show the home page
const Loader_ = () => {
    return (
        <div>
            <Loader />
        </div>
    );
}

export default function Home() {

    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIsLoading(false);
        },0);

        return () => clearInterval(interval);
    }, []);

    return (isLoading ? <Loader /> : <HomePage />);
}
