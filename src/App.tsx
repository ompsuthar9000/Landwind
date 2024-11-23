import DropDownMenu from "./components/DropDownMenu";
import CTA from "./sections/CTA";
import FAQ from "./sections/FAQ";
import FeatureSection from "./sections/FeatureSection";
import Footer from "./sections/FooterSection";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Logos from "./sections/Logos";
import Pricing from "./sections/Pricing";
import SocialProof from "./sections/SocialProof ";
import Testimonials from "./sections/Testimonials";

function App() {
	return (
		<main>
			<Header />
			<Hero />
			<Logos />
			
			<div className="bg-feature-0">
			<FeatureSection />
			</div>
			<SocialProof/>
			<Testimonials/>
			<Pricing/>
			<FAQ/>
			<CTA/>
			<Footer/>
		</main>
	);
}

export default App;
