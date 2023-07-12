import { initializeApp } from "@firebase/app";
import { getStorage, ref, getDownloadURL } from "@firebase/storage";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

export async function getFileByName(category: string, fileName: string) {
  initializeApp(firebaseConfig);
  const storage = getStorage();

  const storageRef = ref(storage, `icons/${category}/${fileName}`);
  const file = await getDownloadURL(storageRef);

  return { url: file, name: fileName, category: category };
}
