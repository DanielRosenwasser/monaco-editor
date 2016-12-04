(function() {

	var METADATA = {
		CORE: {
			paths: {
				npm: 'node_modules/monaco-editor-core/min/vs',
				dev: '/vscode/out/vs',
				built: '/vscode/out-monaco-editor-core/min/vs',
				releaseDev: 'release/dev/vs',
				releaseMin: 'release/min/vs',
			}
		},
		PLUGINS: [{
			name: 'monaco-typescript',
			contrib: 'vs/language/typescript/src/monaco.contribution',
			modulePrefix: 'vs/language/typescript',
			paths: {
				npm: 'node_modules/monaco-typescript/release',
				dev: '/monaco-typescript/out'
			}
		}]
	}

	if (typeof exports !== 'undefined') {
		exports.METADATA = METADATA
	} else {
		self.METADATA = METADATA;
	}

})();