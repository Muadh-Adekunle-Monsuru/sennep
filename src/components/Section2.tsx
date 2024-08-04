import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Section2() {
	const h1ref = useRef(null);
	const containerRef = useRef(null);
	const h1Viewed = useInView(h1ref, { once: true });
	const containerViewd = useInView(containerRef, { once: true });
	return (
		<div className='py-20 lg:px-20 blur-[0.25px] overflow-hidden'>
			<motion.h1
				ref={h1ref}
				initial={{ rotate: '10deg' }}
				animate={{ rotate: h1Viewed ? 0 : '1deg' }}
				transition={{ duration: 1 }}
				className='py-4 text-xl uppercase '
			>
				What we do
			</motion.h1>
			<motion.div
				ref={containerRef}
				initial={{ rotate: '4deg' }}
				animate={{ rotate: containerViewd ? 0 : '4deg' }}
				transition={{ duration: 0.8 }}
				className='text-5xl  font-black font-VesterBro_Bold flex flex-col gap-9'
			>
				<h2>
					We design interfaces and user experiences that evoke trust, joy and
					brand loyalty.
				</h2>
				<h2>
					We supercharge your in-house product team with award-winning design
					skills, solid processes and fresh perspectives from outside your
					industry.
				</h2>
			</motion.div>
		</div>
	);
}
