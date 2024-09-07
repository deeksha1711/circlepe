'use client';

import Tutorial from '@/Components/Tutorials/Tutorial';
import YellowBullet from '@/Assets/YellowBullet.svg';
import WhiteBullet from '@/Assets/WhiteBullet.svg';
import Image from 'next/image';
import Slider from '@/Components/Slider';
import HorizontalSlider from '@/Components/HorizontalSlider';
import { cn } from '@/libs/utils';
import { useEffect, useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import { BulletPoints, SingleLine, TwoLines } from './Description';

const steps = [
	{
		id: 0,
		title: 'How does it work?',
		description: (
			<SingleLine
				text="We make it possible in a quick and easy few steps process, takes max 5 mins."
				active={false}
			/>
		),
		arrowVisible: false,
		image: 'https://res.cloudinary.com/da1x0nwv3/image/upload/v1725031973/how-it-works_oaxb1q.png',
	},
	{
		id: 1,
		title: 'Step 1',
		description: (
			<TwoLines
				active
				text=""
				textArray={[
					'Tenant selects the property',
					'Tenant selects flexible rent tenure & corresponding amount',
				]}
				activeIndex={0}
			/>
		),
		image: 'https://res.cloudinary.com/da1x0nwv3/image/upload/v1725031973/how-it-works_oaxb1q.png',
		scaleImage: true,
		scaleImageNumber: 1.5,
		arrowVisible: true,
		arrowImage:
			'https://res.cloudinary.com/da1x0nwv3/image/upload/v1725062349/arrow_fcgub4.png',
		arrowTop: 'top-[200px]',
		arrowLeft: 'left-[-350px]',
	},
	{
		id: 2,
		title: 'Step 1.5',
		description: (
			<TwoLines
				text=""
				active
				textArray={[
					'Tenant selects the property',
					'Tenant selects flexible rent tenure & corresponding amount',
				]}
				activeIndex={1}
			/>
		),
		image: 'https://res.cloudinary.com/da1x0nwv3/image/upload/v1725034702/step-1_fwslws.png',
		scaleImage: true,
		scaleImageNumber: 1.5,
		arrowVisible: true,
		arrowImage:
			'https://res.cloudinary.com/da1x0nwv3/image/upload/v1725062349/arrow_fcgub4.png',
		arrowTop: 'top-[320px]',
		arrowLeft: 'left-[-250px]',
		arrowRight: '',
		arrowRotate: 'rotate-[-180deg]',
	},
	{
		id: 3,
		title: 'Step 2',
		description: (
			<BulletPoints
				active
				text="Tenant gets approved to move-in"
				bulletPoints={[
					'Zero security deposit move-in',
					'Reduceed rent offer',
					'3 months salary cover',
				]}
			/>
		),
		image: 'https://res.cloudinary.com/da1x0nwv3/image/upload/v1725034702/step-2_n4wyqj.png',
		arrowVisible: true,
		arrowTop: 'top-[350px]',
		arrowLeft: 'left-[-250px]',
		arrowRight: '',
		arrowImage:
			'https://res.cloudinary.com/da1x0nwv3/image/upload/v1725062349/arrow_fcgub4.png',
	},
	{
		id: 4,
		title: 'Step 3',
		description: (
			<SingleLine
				text="Smooth Onboarding for the Tenant begins"
				active={true}
			/>
		),
		image: 'https://res.cloudinary.com/da1x0nwv3/image/upload/v1725031973/step-3_cgbzyn.png',
		arrowVisible: true,
		arrowTop: 'top-[420px]',
		arrowLeft: 'left-[-130px]',
		arrowRight: '',
		arrowImage:
			'https://res.cloudinary.com/da1x0nwv3/image/upload/v1725062349/arrow_fcgub4.png',
	},
	{
		id: 5,
		title: 'Step 4',
		description: (
			<BulletPoints
				active
				text="Tenant gets approved to move-in"
				bulletPoints={[
					'Gets Zero-security deposit approval',
					'Zero cost EMI = Monthly Rent',
				]}
			/>
		),
		image: 'https://res.cloudinary.com/da1x0nwv3/image/upload/v1725185601/step-4_pvvkfe.png',
		arrowVisible: true,
		arrowTop: 'top-[230px]',
		arrowLeft: 'left-[-220px]',
		arrowRight: '',
		arrowImage:
			'https://res.cloudinary.com/da1x0nwv3/image/upload/v1725062349/arrow_fcgub4.png',
	},
];

export default function Home() {
	const container = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['end end', 'start start'],
	});

	const translateY = useTransform(scrollYProgress, [0, 1], [500, -100]);

	const gradient = {
		hidden: {
			scale: 0,
			opacity: 0,
		},
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				duration: 1,
				delay: 1.5,
				type: 'spring',
			},
		},
	};

	useEffect(() => {
		async () => {
			const LocomotiveScroll = (await import('locomotive-scroll'))
				.default;
			const locomotiveScroll = new LocomotiveScroll();
			locomotiveScroll.init();
		};
	}, []);

	return (
		<main ref={container} className="">
			<motion.div className="sticky top-0 right-0">
				<motion.div
					initial="hidden"
					animate="visible"
					variants={gradient}
					style={{ y: translateY }}
					transition={{
						repeat: Infinity,
						repeatType: 'mirror',
						ease: 'easeInOut',
						duration: 0.5,
					}}
					className={cn(
						'top-[-190px] left-[-400px] w-[1103px] h-[1017px]',
						'hidden md:flex absolute bg-[radial-gradient(35.19%_35.19%_at_50%_50%,rgba(59,149,255,0.17)_0%,rgba(28,106,197,0)_100%)] overflow-clip',
					)}
				></motion.div>
			</motion.div>
			<div className="hidden md:flex">
				<Slider />
			</div>
			<div className="flex md:hidden">
				<HorizontalSlider />
			</div>

			<div className="flex flex-col items-center justify-center">
				{steps.map((step) => (
					<Tutorial
						key={step.id}
						id={step.title}
						title={step.title}
						description={step.description}
						image={step.image}
						arrowImage={step.arrowImage}
						scaleImage={step.scaleImage}
						scaleImageNumber={step.scaleImageNumber}
						arrowVisible={step.arrowVisible}
						arrowTop={step.arrowTop}
						arrowLeft={step.arrowLeft}
					/>
				))}
			</div>
		</main>
	);
}
