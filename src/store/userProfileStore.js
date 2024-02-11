import { create } from "zustand";

const useUserprofileStore = create((set) => ({
    userProfile:null,
    setUserProfile:(userProfile) => set({ userProfile }),
    // addPost:()
}))

export default useUserprofileStore;