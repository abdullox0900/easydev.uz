import { collection, getFirestore } from 'firebase/firestore'
import { app } from './firebase'

// FireStore
export const firestore = getFirestore(app)

// Collections
export const AllData = collection(firestore, 'all')
