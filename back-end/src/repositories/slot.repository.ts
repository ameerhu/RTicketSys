import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Slot, SlotRelations, User} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {UserRepository} from './user.repository';

export class SlotRepository extends DefaultCrudRepository<
  Slot,
  typeof Slot.prototype.id,
  SlotRelations
> {

  public readonly user: BelongsToAccessor<User, typeof Slot.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>,
  ) {
    super(Slot, dataSource);
    this.user = this.createBelongsToAccessorFor('user', userRepositoryGetter,);
    this.registerInclusionResolver('user', this.user.inclusionResolver);
  }
}
