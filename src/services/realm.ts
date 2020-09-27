import Realm from 'realm';

import RepositoryScrema from '../schemas/repository';

function getRealm() {
  return Realm.open({
    schema: [RepositoryScrema],
  });
}

export default getRealm;
