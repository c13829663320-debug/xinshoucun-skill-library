// Cloudflare Worker + D1 配套文件：不在GitHub Pages内运行
// D1绑定名为DB，修改 allowedOrigin 为网站来源（不含路径）
const allowedOrigin="https://c13829663320-debug.github.io";
export default { async fetch(req,env) {
 const cors={"Access-Control-Allow-Origin":allowedOrigin,"Access-Control-Allow-Methods":"POST,OPTIONS","Content-Type":"application/json","Cache-Control":"no-store"};
 if(req.method==="OPTIONS") return new Response(null,{status:204,headers:cors});
 const url=new URL(req.url), platform=url.searchParams.get("platform");
 if(req.method!=="POST"||url.pathname!=="/claim"||!["xhs","moments"].includes(platform)) return new Response(JSON.stringify({error:"bad_request"}),{status:400,headers:cors});
 try{
  const row=await env.DB.prepare("UPDATE counters SET next_id=next_id+1 WHERE platform=? AND next_id<1000 RETURNING next_id-1 AS id").bind(platform).first();
  if(!row)return new Response(JSON.stringify({error:"exhausted"}),{status:409,headers:cors});
  return new Response(JSON.stringify({id:row.id}),{headers:cors});
 }catch(e){return new Response(JSON.stringify({error:"internal"}),{status:500,headers:cors})}
}}