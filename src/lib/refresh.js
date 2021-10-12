const fs = require('fs')
const http = require('http')
const path = require('path')
const { exec } = require('child_process')
const { cwd } = require('process')
const { io } = require('socket.io-client')


const socket = io("http://localhost:8000");

var a = 111;

socket.on('refreshClientConfig', (d)=>{
  console.log('client refreshClientConfig')
  fs.writeFile(
    path.resolve(cwd(), './src/.zkt/.eslintrc.json'),
    d,(err)=>{
      if(err) throw err
      return
      // exec('webpack serve --port 3000 --open',(error, stdout, stderr) => {
      //   if(error) throw err
      //   console.log('stdout: ' + stdout);
      //   console.log('stderr: ' + typeof stderr);
      // })
    })

})

// http.get('http://localhost:3010', (res) => {
//   console.log('load success')

//   res.on('data', (d) => {
//     fs.writeFile(
//       path.resolve(cwd(), './src/.zkt/eslint/.eslintrc.json'),
//       d,
//       (err) => {
//         if (err) throw err
//         // 重启ESLint服务
//         // exec(`eslint ${path.resolve(cwd(), './src/*')}`, (err, stdout) => {
//         //   if (err) throw err
//         //   console.log('stdout', stdout)
//         // })
//       }
//     )
//   })
// })
