const cfg = {
	headers2: {
		static2: [

		],
		csp: {
			defaultSrc: "'self' https:",
			connectSrc: "'self' wss://nexus-websocket-a.intercom.io/ wss://nexus-websocket-b.intercom.io/ https://nexus-websocket-a.intercom.io/ https://nexus-websocket-b.intercom.io/ https://fg8vvsvnieiv3ej16jby.litix.io/ https://www.google-analytics.com/j/collect https://stats.g.doubleclick.net/j/collect https://api-iam.intercom.io/messenger/web/ping",
			fontSrc: "'self' data: https://fonts.gstatic.com/s/ https://js.intercomcdn.com/fonts/ https://fast.wistia.com/fonts/",
			frameSrc: "'self' ",
//			manifestSrc: "'self'",
			mediaSrc: "'self' blob: data: ",
			imgSrc: "'self' data: https://stats.g.doubleclick.net/r/collect https://www.google-analytics.com/collect https://www.google-analytics.com/r/collect https://www.google.com/ads/ga-audiences https://www.google.com.au/ads/ga-audiences ",
			objectSrc: "'none'",
//			workerSrc: "'self'",
			formAction: "'self' https:",
			frameAncestors: "'self'",
			scriptSrc: "'self' https://www.google-analytics.com/analytics.js https://www.googletagmanager.com/ https://fast.wistia.com/ https://widget.intercom.io/widget/ https://js.intercomcdn.com/shim.c7e379fd.js https://js.intercomcdn.com/frame.695901a8.js",
			reportUri: "https://bitgenics.report-uri.com/r/d/csp/enforce"
		}
	}
}

module.exports = cfg