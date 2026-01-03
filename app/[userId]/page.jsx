'use client'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import app from '../Shared/firebaseConfig'
import React, { useEffect, use } from 'react'

function Profile({ params }) {
    const db=getFirestore(app);
  const { userId } = use(params)

  useEffect(() => {
    console.log(userId.replace('%40', '@'))
    getUserInfo();
  }, [userId])

  const getUserInfo =async ()=>{
    const docRef = doc(db, "user", userId.replace('%40', '@'));
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  return <div>profile</div>
}

export default Profile
