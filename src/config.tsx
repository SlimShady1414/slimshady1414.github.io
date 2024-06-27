import React from 'react'
const github_username = 'SlimShady1414'
const discord_usertag = 'notAbot.notAhuman#9748'
const discord_userid = '1124379052791308398'
const email = 'adhinandanj@gmail.com'

const projects = [
	'slimshady1414/chatbot-multiple-files',
	'slimshady1414/chat-with-image',
	'slimshady1414/pandafs',
	'slimshady1414/xG',
	'slimshady1414/MLGA_MiniProject',
	'slimshady1414/CryptoVortexX',
	'slimshady1414/Lost-and-Found-DBMS',
	'slimshady1414/NoDues',
	'slimshady1414/Auction-House-Using-Socket-Programming',
]

const links = [
	{
		name: 'GitHub',
		icon: 'fab fa-fw fa-github',
		link: 'https://github.com/SlimShady1414',
		description: 'My profile on GitHub',
	},
	{
		name: 'Website',
		icon: 'fas fa-fw fa-coffee',
		link: 'https://slimshady1414.github.io/',
		description: 'Personal website, you are looking at it now',
	},
	{
		name: 'E-mail',
		icon: 'fas fa-fw fa-at',
		link: `mailto:${email}`,
		description: 'Lets get in touch!',
	},
	{
    name: 'LinkedIn',
    icon: 'fab fa-fw fa-linkedin',
    link: `https://www.linkedin.com/in/adhinandanj/`,
    description: 'My LinkedIn Profile',
	},
	{
    name: 'Resume',
    icon: 'fas fa-fw fa-link',
    link: `https://drive.google.com/file/d/1sjNv6jkKVozo40KoJeMD8H8vm8hI8DLh/view?usp=sharing`,
    description: 'My Resume',
	},
	{
		name: 'Discord',
		link: `https://discord.com/users/${discord_userid}`,
		icon: 'fab fa-fw fa-discord',
		description: `${discord_usertag} | Add me as friend!`,
	},
]

const info = (
	<>
		<p>
			Hey! I am Adhi Nandan J, a final year undergraduate in PES
			University, Bengaluru.
		</p>
		<p>
			I've got intermediate experience in Programming languages such as{' '}
			<span className="highlighted">Python</span> ,{' '}
			<span className="highlighted">C++</span> and{' '}
			<span className="highlighted">Java.</span>
		</p>
		<p>
			I've been looking into{' '}
			<span className="highlighted">LLMS and Gen AI.</span>
		</p>
		<p>
			Aside from that, I have basic knowledge of{' '}
			<span className="highlighted">Javascript</span>,{' '}
			<span className="highlighted">Node.js</span> and{' '}
			<span className="highlighted">shell scripting.</span>
		</p>
	</>
)

export {
	github_username,
	discord_usertag,
	discord_userid,
	email,
	projects,
	links,
	info,
}
