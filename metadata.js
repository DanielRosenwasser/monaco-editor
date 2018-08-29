(function () {

	var METADATA = {
		CORE: {
			paths: {
				src: '/vscode/out/vs',
				'npm/dev': 'node_modules/monaco-editor-core/dev/vs',
				'npm/min': 'node_modules/monaco-editor-core/min/vs',
				built: '/vscode/out-monaco-editor-core/min/vs',
				releaseDev: 'release/dev/vs',
				releaseMin: 'release/min/vs',
			}
		},
		PLUGINS: [
			{
				name: 'monaco-typescript',
				contrib: 'vs/language/typescript/monaco.contribution',
				modulePrefix: 'vs/language/typescript',
				thirdPartyNotices: 'node_modules/monaco-typescript/ThirdPartyNotices.txt',
				paths: {
					src: '/monaco-typescript/release/dev',
					'npm/dev': 'node_modules/monaco-typescript/release/dev',
					'npm/min': 'node_modules/monaco-typescript/release/min',
					esm: 'node_modules/monaco-typescript/release/esm',
				}
			}
		]
	}

	if (typeof exports !== 'undefined') {
		exports.METADATA = METADATA
	} else {
		self.METADATA = METADATA;
	}

})();
