import { useState, useEffect } from 'react';
import firebase from '../utils/fb-config';

const useData = (fieldName) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        firebase
          .database()
          .ref()
          .child(fieldName)
          .once('value')
          .then(snap => setData(snap.val()));
    }, [fieldName]);

    return data;
}

export default useData;