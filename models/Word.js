class Word {
    constructor() {
        this.original = null
        this.remainingWord = null
        this.value = null
        this.isCorrect = true
        this.isActive = false
    }

    init(original) {
        this.original = original
        this.remainingWord = original
    }

    makeActive() {
        this.isActive = true
    }

    setValue(data) {
        this.value = data
        console.log(data)
        this.remainingWord = this.removeSubstringIfAtStart(this.original, data)
    }

    checkAndFinish() {
        if (this.original === this.value.trim()) {

        } else {
            this.isCorrect = false

        }
        this.isActive = false
    }

    removeSubstringIfAtStart(originalString, substringToRemove) {
        if (originalString.startsWith(substringToRemove)) {
            // Remove the substring from the start
            return originalString.slice(substringToRemove.length);
        }
        // Return the original string if it doesn't start with the substring
        return originalString;
    }

    resetActiveWord() {
        this.remainingWord = this.original
        this.value = null
        this.isCorrect = true
    }
}

export default Word