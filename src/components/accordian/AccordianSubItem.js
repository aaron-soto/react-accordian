import { motion, AnimatePresence } from 'framer-motion';

export const AccordianSubItem = ({ title }) => {
	const item = {
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.05,
			},
		},
		hidden: {
			opacity: 0,
			y: -50,
			transition: {
				delay: 0.05,
			},
		},
	};

	return (
		<motion.li variants={item} className='accordian_item_sub'>
			<p className='accordian_item_sub_title'>{title}</p>
		</motion.li>
	);
};
