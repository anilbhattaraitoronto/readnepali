import { Lesson } from '/js/lessonClass.mjs'
import { vowelLesson, rootLesson, compoundLesson } from '/js/lessons/letterLessons.mjs'
import { nounLesson, pronounLesson, verbLesson, adjectiveLesson, adverbLesson, prepositionLesson, conjunctionLesson, interjectionLesson } from '/js/lessons/wordLessons.mjs'
import { pastLesson, presentLesson, futureLesson } from '/js/lessons/sentenceLessons.mjs'
import { beginnerReadLesson, intermediateReadLesson, advancedReadLesson } from '/js/lessons/reads.mjs'

export function getCopyRightYear() {
    let copyRightContainer = document.querySelector('.copy-right-year')
    let year = new Date().getFullYear()
    copyRightContainer.innerHTML = year
}
getCopyRightYear()

export function buttonEvents(prevId, nextId, lesson, lessonBoxId) {
    let prevButton = document.getElementById(prevId)
    prevButton.addEventListener("click", function () {
        lesson.getPrevLesson(lessonBoxId)
    })
    let nextButton = document.getElementById(nextId)
    nextButton.addEventListener("click", function () {
        lesson.getNextLesson(lessonBoxId)
    })
}
buttonEvents('prevVowel', 'nextVowel', vowelLesson, 'vowel-box')