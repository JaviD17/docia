import { ref } from "vue";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

// refs
const user = ref(auth.currentUser);

// auth changes
onAuthStateChanged(auth, (_user) => {
  console.log("Auth state changed, current user is: ", _user);
  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;
