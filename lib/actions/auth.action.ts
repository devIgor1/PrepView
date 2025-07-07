"use server"

import { db } from "@/firebase/admin"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"

export async function signUp(params: SignUpParams) {
  const { uid, name, email } = params
  const auth = getAuth()

  try {
    const userRecord = await db.collection("users").doc(uid).get()
    if (userRecord.exists) {
      return {
        success: false,
        message: "User already exists. Please sign in.",
      }
    }
    await db.collection("users").doc(uid).set({
      name,
      email,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    })
  } catch (error: any) {
    console.error("Error creating user", error)
    if (error.code === "auth/email-already-exists") {
      return {
        success: false,
        message: "Email already exists.",
      }
    }
    return {
      success: false,
      message: "Failed to create an account.",
    }
  }
}
