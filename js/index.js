let url = location.href
let parama = (new URL(url)).searchParams
if(parama.get('q')){
    let q = parama.get('q')
    let d = JSON.parse(atob(q))
    app(d)
}else{
    keyGen()
}

function app(d){
    signin(d.email,d.pass)
}

function keyGen(){
    
}