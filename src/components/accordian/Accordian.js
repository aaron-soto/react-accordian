import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './accordian.scss';

export const Accordian = ({ header, children }) => {
	return (
		<AnimatePresence>
			<div className='accordian'>
				<div className='accordian_header'>{header}</div>
				{children}
			</div>
		</AnimatePresence>
	);
};
