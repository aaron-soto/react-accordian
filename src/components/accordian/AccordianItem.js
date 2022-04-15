import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const AccordianItem = ({ header, count, children }) => {
	const [opened, setOpened] = useState(false);

	const list = {
		visible: {
			opacity: 1,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.3,
			},
		},
		hidden: {
			opacity: 0,
			transition: {
				when: 'afterChildren',
			},
		},
	};

	return (
		<motion.ul
			initial='hidden'
			animate='visible'
			variants={list}
			className='accordian_item'
		>
			<div
				className='accordian_item_header'
				onClick={(e) => setOpened(!opened)}
			>
				{header} {count > 0 ? <>({count})</> : ''}
				{count > 0 ? (
					<div className={`arrow ${opened ? 'opened' : ''}`}></div>
				) : (
					''
				)}
			</div>
			{opened && <>{children}</>}
		</motion.ul>
	);
};
