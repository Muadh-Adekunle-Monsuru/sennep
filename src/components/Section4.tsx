import { useEffect, useState } from 'react';

import {
	Alignment,
	Fit,
	Layout,
	useRive,
	useStateMachineInput,
} from '@rive-app/react-canvas';
export default function Section4() {
	const [hover, setHover] = useState(false);

	const { RiveComponent, rive } = useRive({
		src: '/hover4.riv',
		stateMachines: 'State Machine 1',
		artboard: 'Hover',
		layout: new Layout({
			fit: Fit.Contain, // Change to: rive.Fit.Contain, or Cover
			alignment: Alignment.Center,
		}),
		autoplay: true,
	});

	const statemachineInput = useStateMachineInput(
		rive,
		'State Machine 1',
		'Trigger 1'
	);

	useEffect(() => {
		statemachineInput?.fire();
	}, [hover]);
	return (
		<div className='relative h-screen flex flex-col items-center justify-center gap-5'>
			<h1 className='text-7xl  font-black font-VesterBro_Bold flex flex-col gap-9'>
				Let&apos;s work together
			</h1>
			<button
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
				className='p-3 px-6 border-2 border-black text-sm uppercase font-mono rounded-3xl '
			>
				Say Hello
			</button>
			<div className='size-60 absolute bottom-0 '>
				<RiveComponent />
			</div>
		</div>
	);
}
