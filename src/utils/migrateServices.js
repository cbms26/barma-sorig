// Run: node src/utils/migrateServices.js
import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig.js";
import servicesData from "../data/servicesData.js";

const migrateServices = async () => {
  console.log("Starting migration...");

  const servicesCollection = collection(db, "servicesData");

  for (const service of servicesData) {
    const serviceDoc = {
      name: service.title,
      subServices: service.subServices,
    };

    const docId = service.title.toLowerCase().replace(/\s+/g, "-");

    try {
      console.log(`Uploading service: ${service.title}`);
      await setDoc(doc(servicesCollection, docId), serviceDoc);
      console.log(`Uploaded service: ${service.title}`);
    } catch (error) {
      console.error(`Error uploading service: ${service.title}`, error);
    }
  }

  console.log("Migration completed.");
};

migrateServices();
