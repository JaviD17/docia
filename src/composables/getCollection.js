import { ref, watchEffect } from "vue";

import { db } from "../firebase/config";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

import slide1 from "../assets/slide1.jpg";

const getCollection = (c) => {
  const documents = ref(null);

  // collection reference
  let colRef = query(collection(db, c), orderBy("price"));

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
