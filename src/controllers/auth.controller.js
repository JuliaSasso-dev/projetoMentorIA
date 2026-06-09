import bcrypt from 'bcryptjs';
import Usuario from '../models/usuario.model.js';
import jwt from 'jsonwebtoken';

export const cadastrar = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    
    if (!nome || !email || !senha) {
      return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
    }

    
    const usuarioExistente = await Usuario.findOne({
      where: { email },
    });

    if (usuarioExistente) {
      return res.status(409).json({ erro: 'E-mail já cadastrado' });
    }

    
    const senhaHash = await bcrypt.hash(senha, 10);

    
    const novoUsuario = await Usuario.create({
      nome,
      email,
      senha: senhaHash,
    });

    
    return res.status(201).json({
      id: novoUsuario.id,
      nome: novoUsuario.nome,
      email: novoUsuario.email,
      createdAt: novoUsuario.createdAt,
    });
  } catch (error) {
    return res.status(500).json({ erro: 'Erro ao cadastrar usuário' });
  }
};


// LOGIN
export const login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    
    if (!email || !senha) {
      return res.status(400).json({ erro: 'Email e senha são obrigatórios' });
    }

   
    const usuario = await Usuario.findOne({
      where: { email },
    });

    if (!usuario) {
      return res.status(401).json({ erro: 'Credenciais inválidas' });
    }

    
    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      return res.status(401).json({ erro: 'Credenciais inválidas' });
    }

    
    const token = jwt.sign(
      {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );

    
    return res.status(200).json({
      token,
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
      },
    });
  } catch (error) {
    return res.status(500).json({ erro: 'Erro ao fazer login' });
  }
};