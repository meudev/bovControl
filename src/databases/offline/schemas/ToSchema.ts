import Realm from 'realm';

export class ToSchema extends Realm.Object {
    static schema = {
      name: 'To',
      properties: {
        "name": "string"
      }
    }
}