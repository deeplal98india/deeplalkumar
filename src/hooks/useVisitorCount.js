import { useEffect, useState } from "react";
import {
  doc,
  getDoc,
  updateDoc,
  increment,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

export default function useVisitorCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateVisitor = async () => {
      try {
        const counterRef = doc(db, "portfolio", "counter");

        // Browser already counted?
        const hasVisited = localStorage.getItem("portfolio-visited");

        // First visit only
        if (!hasVisited) {
          await updateDoc(counterRef, {
            count: increment(1),
          });

          localStorage.setItem("portfolio-visited", "true");
        }

        // Always get latest count
        const snapshot = await getDoc(counterRef);

        if (snapshot.exists()) {
          setCount(snapshot.data().count);
        }
      } catch (error) {
        console.error("Visitor Count Error:", error);
      }
    };

    updateVisitor();
  }, []);

  return count;
}