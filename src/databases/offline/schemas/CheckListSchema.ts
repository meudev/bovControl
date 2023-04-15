import Realm from 'realm';

export class CheckListSchema extends Realm.Object {
  static schema = {
    name: 'CheckList',
    primaryKey: '_id',
    properties: {
        _id: 'string',
        type: 'string',
        amount_of_milk_produced: 'int',
        farmer: 'Farmer?',
        from: 'From?',
        to: 'To?',
        number_of_cows_head: 'int',
        had_supervision: 'bool',
        location: 'Location?',
        created_at: 'string',
        updated_at: 'string',
    }
  };
}