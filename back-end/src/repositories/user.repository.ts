import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {User, UserRelations, Slot} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {SlotRepository} from './slot.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {

  public readonly slot: HasOneRepositoryFactory<Slot, typeof User.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('SlotRepository') protected slotRepositoryGetter: Getter<SlotRepository>,
  ) {
    super(User, dataSource);
    this.slot = this.createHasOneRepositoryFactoryFor('slot', slotRepositoryGetter);
    this.registerInclusionResolver('slot', this.slot.inclusionResolver);
  }
}
