import Feature from "../components/Feature";
import {featureCompoData} from "../constants/data"
const FeatureSection = () => {
	return (
		<section className="py-5">
			{featureCompoData.map((item)=>{
				return <Feature {...item} key={item.id} />
			})}
		</section>
	);
};

export default FeatureSection;
