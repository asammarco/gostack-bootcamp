import * as Yup from 'yup';
import Deliveryman from '../models/Deliveryman';

class DeliverymanController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    if (await Deliveryman.findOne({ where: { name: req.body.name } })) {
      return res.status(400).json({ error: 'Deliveryman name already exists' });
    }

    if (await Deliveryman.findOne({ where: { email: req.body.email } })) {
      return res
        .status(400)
        .json({ error: 'Deliveryman email already exists' });
    }

    const deliveryman = await Deliveryman.create({
      ...req.body,
      createdByUserId: req.userId,
    });

    return res.json(deliveryman);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string(),
    });

    const { name } = req.body;

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const deliveryman = await Deliveryman.findByPk(req.params.id);

    if (!deliveryman) {
      return res.status(401).json({ error: "Deliveryman doesn't exists" });
    }

    if (name && name !== deliveryman.name) {
      const deliverymanExist = await Deliveryman.findOne({ where: { name } });
      if (deliverymanExist) {
        return res
          .status(401)
          .json({ error: 'Deliveryman name already exists' });
      }
    }

    await deliveryman.update({
      ...req.body,
      updatedByUserId: req.userId,
    });

    return res.json(deliveryman);
  }
}
export default new DeliverymanController();
