import { ref, watchEffect } from "vue";

import { db } from "../firebase/config";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  where,
} from "firebase/firestore";

import slide1 from "../assets/slide1.jpg";

const getCollection = (c, q) => {
  const documents = ref(null);

  // collection reference
  let colRef = query(collection(db, c), orderBy("createdAt", "desc"));

  if (q) {
    colRef = query(colRef, where(...q));
  }

  const unsub = onSnapshot(colRef, (snapshot) => {
    let results = [];

    snapshot.docs.forEach((doc) => {
      results.push({ ...doc.data(), id: doc.id, image: slide1 });
    });

    // update values
    documents.value = results;
  });

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { documents };
};

export default getCollection;
