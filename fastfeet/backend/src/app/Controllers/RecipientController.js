import * as Yup from 'yup';

import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string()
        .required()
        .min(6),
      rua: Yup.string().required(),
      numero: Yup.number()
        .integer()
        .required(),
      complemento: Yup.string(),
      bairro: Yup.string().required(),
      cidade: Yup.string().required(),
      estado: Yup.string().required(),
      cep: Yup.string().required(),
    });

    // Valida os dados de entrada

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // Valida se o Recipient já existe

    if (await Recipient.findOne({ where: { name: req.body.name } })) {
      return res.status(400).json({ error: 'Recipient already exists' });
    }

    // Cria um novo Recipient
    // Observação: Cria um relacionamento de associação
    // Em que createdByUserId recebe o id do admin oriundo do
    // auth middleware

    const recipient = await Recipient.create({
      ...req.body,
      createdByUserId: req.userId,
    });

    return res.json(recipient);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().min(6),
      rua: Yup.string(),
      numero: Yup.number().integer(),
      complemento: Yup.string(),
      bairro: Yup.string(),
      cidade: Yup.string(),
      estado: Yup.string(),
      cep: Yup.string(),
    });

    const { name } = req.body;

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const recipient = await Recipient.findByPk(req.params.id);

    if (!recipient) {
      return res.status(401).json({ error: "Recipient doesn't exists" });
    }

    // Valida se o Recipient já existe
    if (name && name !== recipient.name) {
      const recipientExist = await Recipient.findOne({ where: { name } });
      if (recipientExist) {
        res.status(400).json({ error: 'Recipient already exists.' });
      }
    }

    const {
      id,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      cep,
    } = await recipient.update(req.body);

    return res.json({
      id,
      name,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      cep,
    });
  }

  async index(req, res) {
    return res.json(await Recipient.findAll());
  }

  async delete(req, res) {
    const { id } = req.params;
    const recipient = await Recipient.findByPk(id);

    if (!recipient) {
      return res.status(401).json({ error: `User ${id} doesn't exists.` });
    }

    await recipient.destroy();
    return res.json({ message: `Recipient ${recipient.name} deleted.` });
  }
}

export default new RecipientController();
