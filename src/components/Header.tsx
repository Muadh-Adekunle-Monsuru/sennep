import { motion, useAnimate } from 'framer-motion';
import MenuIcon from './MenuIcon';

const variant = {
	show: { display: 'block', opacity: 1 },
	hide: { display: 'none', opacity: 0 },
};
export default function Header({ scrolling }: { scrolling: boolean }) {
	const [scope, animate] = useAnimate();

	const animateBorderEnter = () => {
		animate('div', { x: 30 });
	};
	const animateBorderLeave = () => {
		animate('div', { x: 0 });
	};
	return (
		<div className='px-8 py-4 flex items-center justify-between fixed top-0 left-0 w-full bg-transparent z-40'>
			<div
				className='text-[0.6rem] font-bold blur-[0.2px] cursor-pointer flex flex-col justify-center items-center  leading-3 uppercase'
				onMouseEnter={animateBorderEnter}
				onMouseLeave={animateBorderLeave}
			>
				<p
					className={`${
						scrolling ? 'text-sm' : ''
					} transition-all duration-300`}
				>
					S
				</p>
				<motion.p
					variants={variant}
					animate={scrolling ? 'hide' : 'visible'}
					className='flex flex-col items-center'
				>
					<span className='flex gap-1'>
						<span>e</span>
						<span>n</span>
					</span>
					<span className='w-full flex gap-2'>
						<span>n</span>
						<span>e</span>
						<span>p</span>
					</span>
				</motion.p>
				<motion.div
					transition={{ duration: 2, delay: 0.5, type: 'tween' }}
					ref={scope}
					className='flex gap-1 w-full px-2 overflow-hidden bg-black rounded-xl mt-1'
				>
					<div className='w-1 border-b-2 border-b-[#F2C744] rounded-xl ' />
				</motion.div>
			</div>
			<div className='h-14 flex items-center'>
				<div className='size-5 cursor-pointer'>
					<MenuIcon />
				</div>
			</div>
		</div>
	);
}
