import {
	Alignment,
	Fit,
	Layout,
	useRive,
	useStateMachineInput,
} from '@rive-app/react-canvas';
import { useEffect } from 'react';

export default function Section1({
	scrolling = false,
}: {
	scrolling: boolean;
}) {
	const { RiveComponent, rive } = useRive({
		src: '/section1final.riv',
		stateMachines: 'State Machine 1',
		artboard: 'Artboard',
		layout: new Layout({
			fit: Fit.FitWidth, // Change to: rive.Fit.Contain, or Cover
			alignment: Alignment.Center,
		}),
		autoplay: true,
	});

	const statemachineInput = useStateMachineInput(
		rive,
		'State Machine 1',
		'Trigger 1'
	);

	if (scrolling) {
	}
	useEffect(() => {
		statemachineInput?.fire();
	}, [scrolling]);

	return (
		<section className='relative h-screen  w-full'>
			<RiveComponent />
		</section>
	);
}
