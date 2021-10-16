import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/firebase'

export async function searchFor(searchString, setState) {
    const q = query(collection(db, "notes"), where("title", "==", searchString));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }))
    setState(data)
}