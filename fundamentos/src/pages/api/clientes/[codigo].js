export default function handler(req, res){
    const codigo = req.query.codigo
    res.status(200).send({
        id: codigo,
        nome: `Maria ${codigo}`,
        email: `marinamaria${codigo}@gmail.com`
    })
}
