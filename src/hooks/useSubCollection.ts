import { useEffect, useState } from 'react'
import { db } from "../firebase";
import {
  collection,
  query,
  onSnapshot,
  DocumentData,
  Query,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { useAppSelector } from '../app/hooks';

interface Messages {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    phote: string;
    email: string;
    displayName: string;
  };
}

export const useSubCollection = (collectionName: string, subCollectionName: string) => {
  const [subDocuments, setSubDcuments] = useState<Messages[]>([]);
  const channelId = useAppSelector((state) => state.channel.channelId);

  useEffect(() => {
    let collectionRef = collection(
      db,
      collectionName,
      String(channelId),
      subCollectionName
    );

    const collectionRefOrderBy = query(
      collectionRef,
      orderBy("timestamp", "desc")
    );

    onSnapshot(collectionRefOrderBy, (snapshot) => {
      let results: Messages[] = [];
      snapshot.docs.forEach((doc) => {
        results.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        });
      });

      setSubDcuments(results);
    });
  }, [channelId]);

  return { subDocuments };
};
