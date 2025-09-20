import express from 'express';
import {
  createEvent,
  deleteEvent,
  getAllEvents,
  getSingleEvent,
  updateEvent,
} from '../../controller/event/controller.js';

const EventRoutes = express.Router();

EventRoutes.post('/events', createEvent);
EventRoutes.put('/events/:eventId', updateEvent);
EventRoutes.delete('/events/:eventId', deleteEvent);
EventRoutes.get('/events', getAllEvents);
EventRoutes.get('/events/:eventId', getSingleEvent);

export default EventRoutes;
