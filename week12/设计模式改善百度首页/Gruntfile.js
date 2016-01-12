/* npm install */
/* 进入到当前目录下执行 grunt命令 */

module.exports=function (grunt) {
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		uglify:{
			options:{
				banner:'/*!create by <%=grunt.template.today("yyyy-mm-dd")%>*/\n'
			},
			static_mappings:{
				files:[{
					src:'js/app.js',
					dest:'build/index.min.js'
				},{
					src:'js/jquery-2.1.4.min.js',
					dest:'build/jquery.min.js'
				}]
			}
		},
		concat:{
			bar:{
				// src:['build/*.js'],
				// dest:'gen/all.min.js',
			}
		},
		watch:{
			files:['js/index.js'],
			tasks:['uglify','concat'],
			files:['js/main.js'],
			tasks:['uglify','concat'],

		}
	})
	//加载包含“uglify”任务的插件
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//默认执行的任务列表
	grunt.registerTask('default',['uglify','concat','watch'])
}