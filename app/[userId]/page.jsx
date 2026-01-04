'use client'

import { doc, getDoc, getFirestore } from 'firebase/firestore'
import app from '../Shared/firebaseConfig'
import React, { useEffect, useState, use } from 'react'
import UserInfo from '../components/UserInfo';

function Profile({ params }) {
  const db = getFirestore(app);
  const [userInfo, setUserInfo] = useState(null);

  const { userId } = use(params); // ✅ unwrap params promise

  useEffect(() => {
    const decodedUserId = decodeURIComponent(userId);
    getUserInfo(decodedUserId);
  }, [userId]);

  const getUserInfo = async (decodedUserId) => {
    const docRef = doc(db, "user", decodedUserId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUserInfo(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  return (
    <div>
      {userInfo && <UserInfo userInfo={userInfo} />}
    </div>
  );
}

export default Profile;
