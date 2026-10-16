import { build, preview } from 'vite'
// Rollup watch avoids native esbuild directory scanning restrictions on this host.
const watcher=await build({configLoader:'native',build:{watch:{}}})
let server
watcher.on('event',async event=>{
 if(event.code==='END'){
  if(!server){server=await preview({configLoader:'native',preview:{host:'127.0.0.1',port:Number(process.env.PORT||5173),strictPort:true}});server.printUrls()}
  else console.log('Rebuilt successfully. Refresh the browser to see changes.')
 }
 if(event.code==='ERROR')console.error(event.error)
})
process.on('SIGINT',async()=>{await watcher.close();server?.httpServer.close();process.exit(0)})
