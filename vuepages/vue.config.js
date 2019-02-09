module.exports = {
	devServer: {
	  port:3000, //随便改端口号
	  proxy: {

	  	'/data/product': {
	           target: 'http://localhost:9000',
	           host: '9000',
	           changeOrigin:true,
	           // pathRewrite: {
	           //     '^/v4/api': '/v4/api'
	           //   }
	       },
	  		
	       '/data/product1list': {
	           target: 'localhost:9000/',
	           changeOrigin:true,
	           // pathRewrite: {
	           //     '^/v4/api': '/v4/api'
	           //   }
	       },
	        '/data/product2list': {
	           target: 'localhost:9000/',
	           changeOrigin:true,
	           // pathRewrite: {
	           //     '^/v4/api': '/v4/api'
	           //   }
	       },
	        '/data/product3list': {
	           target: 'localhost:9000/',
	           changeOrigin:true,
	           // pathRewrite: {
	           //     '^/v4/api': '/v4/api'
	           //   }
	       }

	  		// '/data/product': {
	    //        target: 'http://172.20.10.3:9000/',
	    //        changeOrigin:true,
	    //        // pathRewrite: {
	    //        //     '^/v4/api': '/v4/api'
	    //        //   }
	    //    },
	  		
	    //    '/data/product1list': {
	    //        target: 'http://172.20.10.3:9000/',
	    //        changeOrigin:true,
	    //        // pathRewrite: {
	    //        //     '^/v4/api': '/v4/api'
	    //        //   }
	    //    },
	    //     '/data/product2list': {
	    //        target: 'http://172.20.10.3:9000/',
	    //        changeOrigin:true,
	    //        // pathRewrite: {
	    //        //     '^/v4/api': '/v4/api'
	    //        //   }
	    //    },
	    //     '/data/product3list': {
	    //        target: 'http://172.20.10.3:9000/',
	    //        changeOrigin:true,
	    //        // pathRewrite: {
	    //        //     '^/v4/api': '/v4/api'
	    //        //   }
	    //    }


	 }
	}
}

//https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=31.230416&longitude=121.473701&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5