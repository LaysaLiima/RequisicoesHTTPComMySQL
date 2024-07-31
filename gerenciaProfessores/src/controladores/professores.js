const knex = require('../conexao');
const { connect } = require('../rotas');

const listarProfessores = async (req, res) => {
    try {
        const listarProfessores = await knex('professor');
        return res.status(200).json(listarProfessores)
    } catch (error) {
        return res.status(500).json("Erro interno do servidor")
    }
};

const ObterUmProfessor = async (req, res) => {  
    const { id } = req.params;

    try {
        const ObterUmProfessor = await knex('professor').where({id}).first()
        return res.status(200).json(ObterUmProfessor)
    } catch (error) {
        return res.status(500).json("Erro interno do servidor")
    }
};

const cadastrarProfessor = async (req, res) =>{
    const {nome, disciplina,carga_horaria} = req.body;
    try {
        const cadastrarProfessor = await knex('professor').insert({nome, disciplina,carga_horaria}).returning('*')
        return res.status(201).json("Professor cadastrado")
    } catch (error) {
        return res.status(500).json("Erro interno do servidor")
    }
};

const AtualizarUmProfessor = async (req, res) => {
    const { id } = req.params;
    const {nome, disciplina,carga_horaria} = req.body;

    try {
        const AtualizarUmProfessor = await knex('professor').update({nome, disciplina,carga_horaria}).where({id});
        return res.status(200).json("Professor atualizado")
    } catch (error) {
        console.log(error)
        return res.status(500).json("Erro interno do servidor")
    }
}
const DeletarUmProfessor = async (req, res) => {
    const { id } = req.params;

    try {
        const DeletarUmProfessor = await knex('professor').delete().where({id});
        return res.status(200).json("Professor deletado")
    } catch (error) {
        console.log(error)
        return res.status(500).json("Erro interno do servidor")
    }
}



module.exports = {
    listarProfessores,
    ObterUmProfessor,
    cadastrarProfessor,
    AtualizarUmProfessor,
    DeletarUmProfessor
}