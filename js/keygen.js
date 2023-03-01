function generateKey(un,pw){
    return btoa(JSON.stringify({
        email: un,
        pass: pw
    }))
}