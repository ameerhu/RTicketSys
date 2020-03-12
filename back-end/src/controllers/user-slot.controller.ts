import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  User,
  Slot,
} from '../models';
import {UserRepository} from '../repositories';

export class UserSlotController {
  constructor(
    @repository(UserRepository) protected userRepository: UserRepository,
  ) { }

  @get('/users/{id}/slot', {
    responses: {
      '200': {
        description: 'User has one Slot',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Slot),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Slot>,
  ): Promise<Slot> {
    return this.userRepository.slot(id).get(filter);
  }

  @post('/users/{id}/slot', {
    responses: {
      '200': {
        description: 'User model instance',
        content: {'application/json': {schema: getModelSchemaRef(Slot)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof User.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Slot, {
            title: 'NewSlotInUser',
            exclude: ['id'],
            optional: ['userId']
          }),
        },
      },
    }) slot: Omit<Slot, 'id'>,
  ): Promise<Slot> {
    return this.userRepository.slot(id).create(slot);
  }

  @patch('/users/{id}/slot', {
    responses: {
      '200': {
        description: 'User.Slot PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Slot, {partial: true}),
        },
      },
    })
    slot: Partial<Slot>,
    @param.query.object('where', getWhereSchemaFor(Slot)) where?: Where<Slot>,
  ): Promise<Count> {
    return this.userRepository.slot(id).patch(slot, where);
  }

  @del('/users/{id}/slot', {
    responses: {
      '200': {
        description: 'User.Slot DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Slot)) where?: Where<Slot>,
  ): Promise<Count> {
    return this.userRepository.slot(id).delete(where);
  }
}
