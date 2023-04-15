import Realm from 'realm';

export class LocationSchema extends Realm.Object {
    static schema = {
      name: 'Location',
      properties: {
        "latitude": 'double',
        "longitude": 'double'
      }
    }
}