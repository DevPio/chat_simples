module.exports = io => {
    io.on('connection',client=> {
        client.on('send-server',data=>{
            const resposta = `<b>${data.nome}:<br>${data.msg}</b>`
            client.emit('send-client', resposta)
            client.broadcast.emit('send-client',resposta)
        })
    })
    
}