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
        this.remainingWord = this.removeSubstringIfAtStart(this.original, data)
    }

    checkAndFinish() {
        if (this.original === this.value.trim()) {

        } else {
            this.isCorrect = false
        }

        this.isActive = false
    }

    checkWordCorrectnes() {
        if (!this.value) return true
        
        return this.original.startsWith(this.value);
    }

    removeSubstringIfAtStart(originalString, substringToRemove) {
        if (originalString.startsWith(substringToRemove)) {
            return originalString.slice(substringToRemove.length);
        }
        return originalString;
    }

    resetActiveWord() {
        this.remainingWord = this.original
        this.value = null
        this.isCorrect = true
    }
}

export default Word