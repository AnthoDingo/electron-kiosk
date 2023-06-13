import Store from 'electron-store'

const store = new Store({
	watch: true, // watch config changes https://github.com/sindresorhus/electron-store#watch
	schema: {
		settings: {
			type: 'object',
			properties: {
				url: {
					type: 'string',
					default: 'https://www.on-system.net'
				},
				urls: {
					type: 'array',
					items: {
						type: 'string',
						default: 'https://www.on-system.net'
					}
				},
				autoLoad: {
					type: 'boolean',
					default: false
				},
				dark: {
					type: 'boolean',
					default: true
				},
				cacheLimit: {
					type: 'number',
					default: 500
				},
				urlRotation: {
					type: 'number',
					default: 180
				},
				autoReload: {
					type: 'boolean',
					default: false
				},
				autoReloadMode: {
					type: 'string',
					default: 'every'
				},
				autoReloadHour: {
					type: 'number',
					default: 0
				},
				autoReloadEvery: {
					type: 'string',
					default: '1h30m'
				}
			}
		}
	},
	defaults: {
		settings: {
			url: 'https://www.on-system.net',
			urls: ['https://www.on-system.net'],
			autoLoad: false,
			dark: true,
			cacheLimit: 500,
			urlRotation: 180,
			autoReload: false,
			autoReloadMode: 'every',
			autoReloadHour: 0, // midnight
			autoReloadEvery: '1h30m'
		}
	},
	migrations: {
		// eslint-disable-next-line no-shadow
		'0.6.0': store => {
			store.set('urls', [])
			store.set('urlRotation', 180)
			store.delete('url')
		}
	}
})

export default store
