
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, listAll, getDownloadURL, ref} from "firebase/storage";
import {Howl, Howler} from  'howler';

const firebaseConfig = {
  apiKey: "AIzaSyAy9Xts8hx3u6MoXHSW4ZijM68u2pGshoI",
  authDomain: "bounce-beta.firebaseapp.com",
  projectId: "bounce-beta",
  storageBucket: "bounce-beta.appspot.com",
  messagingSenderId: "897309801355",
  appId: "1:897309801355:web:5aa009fc3ec92ea0a58d8e",
  measurementId: "G-TN3X0E80GL"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const analytics = getAnalytics(app);

export let clickSoundRef;
export let prologAudioRef;
export let cartoonJumpRef;
const click = ref(storage, 'Audio/click.mp3');
const prologAudio = ref(storage, 'Audio/prolog.mp3')
const cartoonJump = ref(storage, 'Audio/cartoon-jump.mp3')
const list = ref(storage, "gs://bounce-beta.appspot.com")

listAll(list).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

getDownloadURL(click)
.then((url) => {
  const clickSound = new Audio(url)
  clickSoundRef = clickSound 
})
.catch((error) => {
    console.log(error);
});

getDownloadURL(cartoonJump)
.then((url) => {
  cartoonJumpRef = new Howl({
    src: [url],
    volume: 0.1,
    rate: 2
  })
})
.catch((error) => {
    console.log(error);
});

// getDownloadURL(prologAudio)
// .then((url) =>{
//   prologAudioRef = new Howl({
//     src: [url],
//   })
// })
// .catch((err) => {
//   console.log(err);
// });
