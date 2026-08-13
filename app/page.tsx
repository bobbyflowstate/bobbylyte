import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import SetsSection from "@/components/SetsSection";
import ShowsSection from "@/components/ShowsSection";
import SignalSection from "@/components/SignalSection";
import PressSection from "@/components/PressSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ticker />
      <SetsSection />
      <ShowsSection />
      <SignalSection />
      <PressSection />
      <BookingSection />
      <Footer />
    </main>
  );
}
