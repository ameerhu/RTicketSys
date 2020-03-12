import {Entity, model, property, belongsTo} from '@loopback/repository';
import {User} from './user.model';

@model()
export class Slot extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'date',
    required: true,
  })
  available_time: string;

  @property({
    type: 'boolean',
    default: false,
  })
  reserved?: boolean;

  @belongsTo(() => User)
  userId: string;

  constructor(data?: Partial<Slot>) {
    super(data);
  }
}

export interface SlotRelations {
  // describe navigational properties here
}

export type SlotWithRelations = Slot & SlotRelations;
