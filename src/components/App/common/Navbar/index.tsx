import React from 'react';
import './style.css';

function Navbar() {
	const [active, setActive] = React.useState(false);

	React.useEffect(() => {
		const scrollHandler = () => {
			if (window.scrollY > 40 && !active) setActive(true);
			else if (window.scrollY <= 40 && active) setActive(false);
		};

		window.addEventListener('scroll', scrollHandler);

		return () => {
			window.removeEventListener('scroll', scrollHandler);
		};
	});

	return (
		<div className={`navbar ${active ? 'dark-bg' : ''}`}>
			<div className='inner-container'>
				<div className='img-container'>
					<img src='/twitter.svg'></img>
				</div>
				<div className={`name ${active ? 'scrolled' : ''} `}>Twitter</div>
				<div className='sign-in-menu'>
					<div className='sign-up'>Signup</div>
					<div className='sign-in'>Login</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
