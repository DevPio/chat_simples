
exports.principal = (req, res, next) => {
    const {usuario} = req.session;
    res.render('index', { title: 'Express', user:usuario });
}

exports.entrar = (req, res)=>{

  
    if(Object.values(req.body).includes('')) {
      
        return res.redirect('/')
    }


        
        req.session.usuario = req.body;
        req.session.usuario.contatos = [];
       return res.render('contato',{title:'Contatos',user:req.session.usuario})
    
    
   
}

exports.sair = (req, res, next)=>{

}


exports.getContatos = (req, res)=>{
    



    return res.render('components/CreateContato',{title:'Criar contato'});

}

exports.inserContato = (req, res)=>{
    const {email, nome } = req.body;
   
   
 
    if(req.session.usuario.contatos){
        req.session.usuario.contatos = [];
    }
    const {contatos} = req.session.usuario;
    const id = contatos.length + 1;
    contatos.push({id,email, nome});

    return res.render('listarContatos',{title:'Listar Contatos',contatos});
    
}


exports.totalContatos = (req,res)=>{
 
    const {contatos} = req.session.usuario;
  

    return res.render('listarContatos',{title:'Listar Contatos',contatos});

}

exports.updateContato = (req, res)=>{
    const {id } = req.params;
    const {email, nome} = req.body;
    const {contatos} = req.session.usuario;
  
    contatos[Number(id) -1] = {id,email, nome};

    return res.render('listarContatos',{title:'Listar Contatos',contatos});
}


exports.deleteContato = (req, res)=>{
    const {id} = req.params;
    const {contatos} = req.session.usuario;

    contatos.slice(Number(id) - 1,1)

 
    return res.redirect('/');
}

exports.getContatoID = (req, res) => {
    const { id } = req.params;

    const {contatos} = req.session.usuario;

    const contatoMomento = contatos[id - 1];


    return res.render('getContatoId',
    {title:`Editando o contado com o id ${id}`,
    data:contatoMomento})
}


exports.chat = (req, res) =>{
    const {usuario } = req.session;


    return res.render('chat',{title:'Conversas', usuario})
}