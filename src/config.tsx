import React from 'react'
const github_username = 'slimshady1414'
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
	'slimshady1414/Auction-House-Using-Socket-Programming'
]

const links = [
	{
		name: 'GitHub',
		icon: 'fab fa-fw fa-github',
		link: 'https://github.com/slimshady1414',
		description: 'My profile on GitHub',
	},
	{
		name: 'Website',
		icon: 'fas fa-fw fa-coffee',
		link: 'https://slimshady1414.github.io/',
		description: 'Personal website',
	},
	{
		name: 'LinkedIn',
		link: `https://www.linkedin.com/in/adhinandanj/`,
		icon: 'fab fa-fw fa-linkedin',
	},

	{
		name: 'E-mail',
		icon: 'fas fa-fw fa-at',
		link: `mailto:${email}`,
		description: 'Lets get in touch!',
	},
]

const info = (
	<>
		<p>Hey! I am Adhi Nandan J, a final year student in PES University, Bengaluru.</p>
		<p>
			I've got intermediate experience with{' '}
			<span className="highlighted">Python</span>
		</p>
		<p>I know a little bit of everything. Currently, I'm learning{' '}
			<span className="highlighted">LLMs</span> and{' '}
			<span className="highlighted">Gen AI</span>
		</p>
		<p>
			Aside from that, I have decent knowledge of{' '}
			<span className="highlighted">c++</span>,{' '}
			<span className="highlighted">java</span> and{' '}
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
