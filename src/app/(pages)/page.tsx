import Image from "next/image";
import Hero from "./_components/Hero";
import Categories from "./_components/Categories";
import Collections from "./_components/Collections";
import Deals from "./_components/Deals";
import Rules from "./_components/Rules";
import Footer from "./_components/Footer";

export default function Home() {
    return (
        <>
            <Hero />
            <Categories />
            <Collections />
            <Deals />
            <Rules />
            <Footer />
        </>
    );
}
