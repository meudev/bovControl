import Realm from 'realm';

export class FarmerSchema extends Realm.Object {
    static schema = {
      name: 'Farmer',
      properties: {
        "name": "string",
        "city": "string"
      }
    }
}