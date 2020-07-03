module.exports = {
  pages: {
    popup: {
      template: 'public/browser-extension.html',
      entry: './src/popup/main.ts',
      title: 'Popup'
    },
    options: {
      template: 'public/browser-extension.html',
      entry: './src/options/main.ts',
      title: 'Options'
    },
    override: {
      template: 'public/browser-extension.html',
      entry: './src/override/main.ts',
      title: 'Override'
    }
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: 'src/background.ts'
        },
        contentScripts: {
          entries: {
            'content-script': ['src/content-scripts/content-script.ts']
          }
        }
      }
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
