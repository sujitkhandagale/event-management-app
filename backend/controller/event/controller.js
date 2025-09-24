import { v4 as uuidv1 } from 'uuid';
import Event from '../../modal/event/Event.js';

export const createEvent = async (req, res) => {
  try {
    const { title, description, startDate, endDate, slots, status } =
      req.body || {};

    if (!title) {
      return res.status(400).send({ message: 'Title is required' });
    }

    const eventId = uuidv1();

    const event = await Event.create({
      eventId,
      title,
      description,
      startDate,
      endDate,
      slots,
      status,
      publishedAt: status === '1' ? new Date() : null, // published only if visible
    });

    return res.status(201).send({
      message: 'Event created successfully',
      event,
    });
  } catch (e) {
    return res
      .status(500)
      .send({ message: e?.message || 'Something went wrong' });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    const { title, description, startDate, endDate, slots, status } =
      req.body || {};
    if (!eventId) {
      return res.status(400).send({ message: 'Event ID is required' });
    }
    let updates = {};
    if (title) {
      updates.title = title;
    }
    if (description) {
      updates.description = description;
    }
    if (startDate) {
      updates.startDate = startDate;
    }
    if (endDate) {
      updates.endDate = endDate;
    }
    if (slots) {
      updates.slots = slots;
    }
    if (status) {
      updates.status = status;
      updates.publishedAt = status === '1' ? new Date() : null;
    }

    const event = await Event.findOneAndUpdate(
      { eventId },
      {
        ...updates,
      },
      { new: true },
    );

    if (!event) {
      return res.status(404).send({ message: 'Event not found' });
    }

    return res.status(200).send({
      message: 'Event updated successfully',
      event,
    });
  } catch (e) {
    return res
      .status(500)
      .send({ message: e?.message || 'Something went wrong' });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const { eventId } = req.query;

    if (!eventId) {
      return res.status(400).send({
        message: 'Event ID is required',
      });
    }

    const event = await Event.findOneAndDelete({ eventId });

    if (!event) {
      return res.status(404).send({
        message: 'Event not found',
      });
    }

    return res.status(200).send({
      message: 'Event deleted successfully',
    });
  } catch (e) {
    return res
      .status(500)
      .send({ message: e?.message || 'Something went wrong' });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });

    return res.status(200).send({
      message: 'Events fetched successfully',
      events,
    });
  } catch (e) {
    return res
      .status(500)
      .send({ message: e?.message || 'Something went wrong' });
  }
};

export const getSingleEvent = async (req, res) => {
  try {
    const { eventId } = req.params || {};

    if (!eventId) {
      return res.status(400).send({
        message: 'Event ID is required',
      });
    }

    const event = await Event.findOne({ eventId });

    if (!event) {
      return res.status(404).send({
        message: 'Event not found',
      });
    }

    return res.status(200).send({
      message: 'Event fetched successfully',
      event,
    });
  } catch (e) {
    return res
      .status(500)
      .send({ message: e?.message || 'Something went wrong' });
  }
};