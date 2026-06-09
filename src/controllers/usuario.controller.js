import Usuario from '../models/usuario.model.js';
import bcrypt from 'bcryptjs';


export const perfil = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.usuario.id, {
      attributes: { exclude: ['senha'] },
    });

    return res.status(200).json(usuario);
  } catch (error) {
    return res.status(500).json({ erro: 'Erro ao buscar perfil' });
  }
};


export const atualizarPerfil = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    const usuario = await Usuario.findByPk(req.usuario.id);

    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }

    
    if (nome) usuario.nome = nome;
    if (email) usuario.email = email;

    
    if (senha) {
      usuario.senha = await bcrypt.hash(senha, 10);
    }

    await usuario.save();

    return res.status(200).json({
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      updatedAt: usuario.updatedAt,
    });
  } catch (error) {
    return res.status(500).json({ erro: 'Erro ao atualizar perfil' });
  }
};


export const desativarConta = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.usuario.id);

    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }

    usuario.ativo = false;
    await usuario.save();

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ erro: 'Erro ao desativar conta' });
  }
};