import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';

function App() {
	const [scrolling, setScrolling] = useState(false);
	const { scrollY } = useScroll();
	const { ref, inView } = useInView({ threshold: 0.4 });

	useMotionValueEvent(scrollY, 'change', (latest) => {
		const prevValue = scrollY.getPrevious();
		if (latest > prevValue! && latest > 150) {
			setScrolling(true);
		} else {
			setScrolling(false);
		}
	});
	return (
		<main
			className={`${
				inView ? 'bg-black' : ' bg-[#F2C744]'
			}   transition duration-1000 `}
		>
			<Header scrolling={scrolling} />
			<Section1 scrolling={scrolling} />
			<Section2 />
			<div ref={ref}>
				<Section3 />
			</div>
			<Section4 />
		</main>
	);
}

export default App;
