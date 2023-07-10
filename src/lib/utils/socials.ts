export enum SocialsLinks {
	linkedin = 'https://www.linkedin.com/in/augustosardinha',
	github = 'https://www.github.com/augustosardinha',
	whatsapp = '5573981693296',
	gmail = 'mailto:ssardinhaaugusto@gmail.com'
}

export const socials = {
	linkedin: {
		label: 'LinkedIn',
		url: SocialsLinks.linkedin,
		color: '#0e76a8',
		icon: 'ri:linkedin-fill'
	},
	github: {
		label: 'Github',
		url: SocialsLinks.github,
		color: '#333333',
		icon: 'ri:github-fill'
	},
	whatsapp: {
		label: 'WhatsApp',
		url: `https://api.whatsapp.com/send?phone=${SocialsLinks.whatsapp}`,
		color: '#25D366',
		icon: 'ri:whatsapp-fill'
	},
	gmail: {
		label: 'Gmail',
		url: SocialsLinks.gmail,
		color: '#C71610',
		icon: 'mdi:gmail'
	}
}
