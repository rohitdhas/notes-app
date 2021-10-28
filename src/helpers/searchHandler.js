import { collection, getDocs, query, where } from 'firebase/firestore'
import { startLoader, stopLoader } from '../components/loader';
import { db } from '../firebase/firebase'

export async function searchFor(searchString, uid, setState) {
    startLoader()
    const q = query(collection(db, "notes"), where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }))

    let filteredData = data.filter(item => {
        const title = item.data.title.toLowerCase();
        return title.includes(searchString);
    })

    setState(filteredData)
    stopLoader();
}