"use client";
import MainNavigation from "../Components/MainNavigation";
import Products from "../Components/Products";
import TopSection from "../Components/TopSection";
import { notFound } from 'next/navigation';
import { Feature, FeaturesGrid } from "../Components/Features";
import OurShooter from "../Components/OurShooter";
import AboutUs from "../Components/AboutUs";
import ContactUs from "../Components/ContactUs";
export default function MainPage(){
   
    return(
        <div style={{display: "flex", flexDirection: "column", gap:" 5vh"}}>
        
            <TopSection />
            <AboutUs />
            <FeaturesGrid />
            <Products />
           
            <OurShooter />
            <ContactUs />
        </div>
    )
}