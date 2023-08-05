import { initializeApp } from "@firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "@firebase/storage";
import { type Icon } from "../types/Icon";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

export async function getIcons(category: string): Promise<Icon[]> {
  const icons: Icon[] = [];

  initializeApp(firebaseConfig);
  const storage = getStorage();

  const storageRef = ref(storage, `icons/${category}`);
  const fileList = await listAll(storageRef);

  await Promise.all(
    fileList.items.map(async (item) => {
      const url = await getDownloadURL(item);
      icons.push({ name: item.name, url: url, category: category });
    })
  );

  return icons;
}
