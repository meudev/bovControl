import Realm from 'realm';

export class FromSchema extends Realm.Object {
    static schema = {
      name: 'From',
      properties: {
        "name": "string"
      }
    }
}