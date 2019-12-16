import { Lesson } from '/js/lessonClass.mjs'


export let vowelLesson = new Lesson(
    //title
    "Vowel Lesson",
    //nepali
    ["अ", "आ", "इ", "ई", "उ", "ऊ", "ए", "ऐ", "ओ", "औ", "अं", "अ:"],
    //english
    ["a", "aa", "i", "ee", "u", "oo", "eh", "aih", "o", "au", "ahm", "aha"],
    //sound
    ["./sounds/vowels/mp3/a.mp3", "./sounds/vowels/mp3/aa.mp3", "./sounds/vowels/mp3/i.mp3", "./sounds/vowels/mp3/ee.mp3", "./sounds/vowels/mp3/u.mp3", "./sounds/vowels/mp3/oo.mp3", "./sounds/vowels/mp3/eh.mp3", "./sounds/vowels/mp3/aih.mp3", "./sounds/vowels/mp3/o.mp3", "./sounds/vowels/mp3/au.mp3", "./sounds/vowels/mp3/ahm.mp3", "./sounds/vowels/mp3/aha.mp3"],
    //picture
    ["a.png", "aa.png", "i.png", "ee.png", "u.png", "oo.png", "eh.png", "aih.png", "o.png", "au.png", "ahm.png", "aha.png"],
    //description
    "There are 12 vowels: अ, आ, इ, ई, उ, ऊ, ए, ऐ, ओ, औ, अं, अ:. These vowels are the main building blocks. "
)
vowelLesson.displayLesson("vowel-box")
export let rootLesson = new Lesson()
export let compoundLesson = new Lesson()
