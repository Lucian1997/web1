module.exports = {
  devServer: {
    port: 80,
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= 'Arshcoo雅仕格-人工智能|消费/城市/供应链物联网'
        return args
      })
  },
  lintOnSave: false,   // 取消 eslint 验证
  configureWebpack: {
    resolve: {
      extensions: [],
      //配置别名
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        // 'network': '@/network',
        'views': '@/views',
      }
    }
  },
}