export function Lesson(title, nepali, english, sound, picture, description) {
    this.index = 0
    this.title = title
    this.nepali = nepali
    this.english = english
    this.picture = picture
    this.sound = sound
    this.description = description

    this.displayLesson = function (id) {
        let lessonBoxContainer = document.getElementById(id)
        let lesson = `
        <h2 class="lesson-title">${this.title}</h2>
        <div class="lesson">
            <span class="nepali">${this.nepali[this.index]}</span>
            <span class="english">${this.english[this.index]}</span>
            <span class="picture">${this.picture[this.index]}</span>
            <span class="sound">${this.sound[this.index]}</span>
        </div>
        `
        lessonBoxContainer.innerHTML = lesson
    }
    this.getNextLesson = function (id) {

        this.index++
        let length = this.nepali.length

        if (this.index === length) {
            this.index = 0
        }
        this.displayLesson(id = id)
    }
    this.getPrevLesson = function (id) {
        this.index--
        let length = this.nepali.length
        if (this.index < 0) {
            this.index = length - 1
        }
        this.displayLesson(id = id)
    }
    this.getDescription = function (id) {
        let descriptionBox = document.getElementById(id)
        let description = `<p>${this.description}</p>`
    }
}