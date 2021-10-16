import { getDoc, addDoc, collection, doc, getDocs, query, where, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { startLoader, stopLoader } from '../components/loader'

export async function getNote(id, setState) {
    const docSnap = await getDoc(doc(db, 'notes', id))
    setState(docSnap.data())
}

export async function saveNote(titleRef, noteRef, uid) {

    const title = titleRef.current.value;
    const note = noteRef.current.value;

    if (!title || !note) return;
    startLoader()

    try {
        await addDoc(collection(db, 'notes'), {
            title, note, uid,
            time: new Date().toLocaleString()
        }).then(() => {
            stopLoader();
            window.location = '/'
        })
    } catch (err) {
        stopLoader();
        console.log(err.message);
    }
}

export async function getAllNotes(uid, setState) {
    const q = query(collection(db, "notes"), where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }))
    setState(data)
}

export async function deleteNote(id) {
    try {
        startLoader()
        await deleteDoc(doc(db, 'notes', id)).then(() => {
            stopLoader()
            window.location = '/';
        })
    } catch (err) {
        stopLoader()
        console.log(err.message);
    }
}