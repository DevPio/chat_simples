exports.notFoun = (req, res)=> {
    res.status(404);

    return res.render('not-found',{title:'Pagina nao encontrada'})
}

exports.error = (error, req, res)=> {
    res.status(500);

    return res.render('errorO',{title:'Algo de terrivel aconteceu.',error:JSON.stringify(error)})
}