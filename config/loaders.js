module.exports = function getLoaders (env) {
  const loaders = [
    {
      test: /\.jsx$/,
      use: ['babel-loader'],
      exclude: /node_modules/
    },{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      include: __dirname,
      query: {
        presets: [ "es2015", "react", "react-hmre" , 'stage-2']
      }
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader']
    },
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    },
    {
      test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
      exclude: /\/favicon.ico$/,
      use: [
        // {
        //   loader: 'url-loader',
        //   options: {
        //     limit: 10000,
        //     name: 'static/media/[name].[hash:8].[ext]'
        //   }
        // }
        {
          loader: 'file-loader',
          options: {
            name: 'static/media/[name].[hash:8].[ext]'
          }
        }
      ]
    },
    {
      test: /\/favicon.ico$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'favicon.ico?[hash:8]'
          }
        }
      ]
    },
    {
      test: /\.(mp4|webm)(\?.*)?$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'static/media/[name].[hash:8].[ext]'
          }
        }
      ]
    }
  ]

  return loaders
}
