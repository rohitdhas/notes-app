import { getDoc, addDoc, setDoc, collection, doc, getDocs, query, where, deleteDoc } from 'firebase/firestore'
import { startLoader, stopLoader } from '../components/loader'
import { useHistory } from 'react-router';
import { db } from '../firebase/firebase'
import { useState } from 'react';

export function useNoteHander() {
    const [data, setData] = useState({});
    const history = useHistory();

    async function getNote(id) {
        const docSnap = await getDoc(doc(db, 'notes', id))
        setData(docSnap.data())
    }

    async function saveNote(titleRef, noteRef, uid, docId) {

        const title = titleRef.current.value;
        const note = noteRef.current.value;

        if (!title || !note) return;
        startLoader()

        const dataToPost = {
            title, note, uid,
            time: new Date().toLocaleString()
        }
        try {
            if (docId) {
                await setDoc(doc(db, 'notes', docId), dataToPost, { merge: true })
                    .then(() => {
                        stopLoader();
                        history.push('/')
                    })
            } else {
                await addDoc(collection(db, 'notes'), dataToPost)
                    .then(() => {
                        stopLoader();
                        history.push('/')
                    })
            }
        } catch (err) {
            stopLoader();
            console.log(err.message);
        }
    }

    async function deleteNote(id) {
        try {
            startLoader()
            await deleteDoc(doc(db, 'notes', id)).then(() => {
                stopLoader()
                history.push('/')
            })
        } catch (err) {
            stopLoader()
            console.log(err.message);
        }
    }

    function discardNote() {
        history.push('/');
    }

    return { deleteNote, discardNote, saveNote, getNote, data };
}

export async function getAllNotes(uid, setState) {
    startLoader()
    const q = query(collection(db, "notes"), where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }))
    setState(data)
    stopLoader()
}