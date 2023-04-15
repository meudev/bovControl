import Realm, { schemaVersion } from 'realm';

import { CheckListSchema } from './schemas/CheckListSchema';
import { FarmerSchema } from './schemas/FarmerSchema';
import { FromSchema } from './schemas/FromSchema';
import { LocationSchema } from './schemas/LocationSchema';
import { ToSchema } from './schemas/ToSchema';

export const getRealm = async () => await Realm.open({
    path: 'bov-control-app',
    schema: [
        CheckListSchema,
        FarmerSchema,
        FromSchema,
        LocationSchema,
        ToSchema
    ],
})