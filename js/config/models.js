import Realm from 'realm';

const FaveSchema = {
    name: 'Fave',
    primaryKey: 'id',
    properties: {
        id: 'string',
        faved_on: 'date'
    }
};

const realm = new Realm({ schema: [FaveSchema] });

export const createFave = (faveId) => {
    try {
        realm.write(() => {
            realm.create('Fave', { id: faveId, faved_on: new Date() });
        });
        
    } catch (e) {
        return "Error on creation";
    }
}

export const deleteFave = (faveId) => {
    try {
        realm.write(() => {
            let fave = realm.objects('Fave').filtered('id == $0', faveId);
            realm.delete(fave);
        });
    } catch (e) {
        return "Error on deletion";
    }
}

export const queryFaves = () => {
    try {
        let faves = realm.objects('Fave').map(fave => fave);
        return faves;
    } catch (e) {
        return "Error querying database";
    }
}

export default realm;
