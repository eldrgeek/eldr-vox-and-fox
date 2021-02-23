import React from 'react';
import TextBlock from './TextBlock';
// import Player from './Player';
import { Box, Image, Text, Link, Slide } from '@chakra-ui/react';
// import RequestButton from './RequestButton';
// import { Element, scroller } from 'react-scroll';
// const scrollTo = () => {
// 	scroller.scrollTo('myScrollToElement', {
// 		duration: 1500,
// 		delay: 100,
// 		smooth: true,
// 		//   containerId: 'ContainerElementID',
// 		offset: 0 // Scrolls to element + 50 pixels down the page
// 		//   ...
// 	});
// 	// scroll.scrollToBottom()
// };

const Contents = (name, props) => {};

Contents('Fox', { image: 'Fox.png', title: 'Fox' });
Contents('FoxIn', { base: 'Fox', image: 'Vox.jpg', title: 'Fox in Vox' });

export default function HookForm() {
	return (
		<Box m={0} color="white" bg="black" h="600px" w="100%" align="center">
			<Image
				boxSize="400px"
				objectFit="cover"
				src="./img/Fox.png"
				alt="Stocks"
			/>
		</Box>
	);
}
