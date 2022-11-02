"use client";
import MainNavigation from "../Components/MainNavigation";
import Products from "../Components/Products";
import TopSection from "../Components/TopSection";
import { notFound } from 'next/navigation';
import { Feature, FeaturesGrid } from "../Components/Features";
import OurShooter from "../Components/OurShooter";
export default function MainPage(){
   
    return(
        <div>
        
            <TopSection />
            <Products />
            <FeaturesGrid />
            <OurShooter />
        </div>
    )
}