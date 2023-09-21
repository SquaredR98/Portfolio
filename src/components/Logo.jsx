import React from 'react';

const Logo = () => {
	return (
		<div className='flex flex-col justify-center'>
			<div className='flex border border-slate-950 dark:border-cyan-300'>
				<div className='bg-slate-950 dark:bg-cyan-300 text-white dark:text-slate-950 px-4 text-2xl'>
					RAVI
				</div>
				<div className='px-2 text-2xl dark:text-cyan-300'>
					RANJAN
				</div>
			</div>
			<p className='tracking-wide flex justify-center dark:text-cyan-300 dark:font-light'>
				DESIGNER & DEVELOPER
			</p>
		</div>
	);
};

export default Logo;
