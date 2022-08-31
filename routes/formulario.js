const {conexao, conteudo} = require("../config/database")
module.exports = (app)=>{
    app.get('/formulario',(req,res)=>{
        res.render("formulario.ejs")
    })
    app.post('/formulario',async(req,res)=>{
        const dados = req.body
        conexao()
        const documento = await new conteudo({
            estilo:dados.estilo,
            imagem:dados.imagem,
            titulo:dados.titulo,
            texto:dados.texto
        }).save()

        res.redirect('/formulario')
    })
}