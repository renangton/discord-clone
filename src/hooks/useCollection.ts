import { useEffect, useState } from 'react'
import { db } from "../firebase";
import {
  collection,
  query,
  onSnapshot,
  DocumentData,
  Query,
} from "firebase/firestore";

interface Channels {
  id: string;
  channel: DocumentData;
}

export const useCollection = (data: string) => {
  const [documents, setDcuments] = useState<Channels[]>([]);
  const collectionRef: Query<DocumentData> = query(collection(db, data));

  useEffect(() => {
    onSnapshot(collectionRef, (querySnapshot) => {
      const channelsResult: Channels[] = [];
      querySnapshot.docs.forEach((doc) =>
        channelsResult.push({
          id: doc.id,
          channel: doc.data(),
        })
      );
      setDcuments(channelsResult);
    });
  }, []);

  return { documents };
};
