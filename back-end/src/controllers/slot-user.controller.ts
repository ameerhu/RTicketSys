import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Slot,
  User,
} from '../models';
import {SlotRepository} from '../repositories';

export class SlotUserController {
  constructor(
    @repository(SlotRepository)
    public slotRepository: SlotRepository,
  ) { }

  @get('/slots/{id}/user', {
    responses: {
      '200': {
        description: 'User belonging to Slot',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(User)},
          },
        },
      },
    },
  })
  async getUser(
    @param.path.string('id') id: typeof Slot.prototype.id,
  ): Promise<User> {
    return this.slotRepository.user(id);
  }
}
