import { Accordian } from './components/accordian/Accordian';
import { AccordianItem } from './components/accordian/AccordianItem';
import { AccordianSubItem } from './components/accordian/AccordianSubItem';

import { motion, AnimatePresence } from 'framer-motion';

function App() {
	return (
		<div className='App'>
			<Accordian header='Microsoft'>
				<AccordianItem header='Lanes' count={4}>
					<AccordianSubItem title='Product' />
					<AccordianSubItem title='Financials' />
					<AccordianSubItem title='People' />
					<AccordianSubItem title='Website' />
				</AccordianItem>
				<AccordianItem header='Links' count={3}>
					<AccordianSubItem title='Contact' />
					<AccordianSubItem title='About' />
					<AccordianSubItem title='Privacy' />
				</AccordianItem>
			</Accordian>
		</div>
	);
}

export default App;
