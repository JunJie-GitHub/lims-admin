const port = process.env.port || process.env.npm_config_port || 9528 // dev port

module.exports = {
    devServer: {
        port: port,
        open: true,
        proxy: {
            '/prefix': {
                target: `http://localhost:8080/`,
                changeOrigin: true,
                pathRewrite: {
                    '^/prefix': ''
                }
            },
        }
    }

}