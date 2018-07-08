//Not sure how to setup these tests and get them to pass. We could use some more instruction on this.

describe("myFunction", function() {
    it("returns 'about me' and 'projects' when clicked", function() {
        expect(myFunction()).toContain("projects")
    })
})

describe("openModalButton", function() {
    it("returns #modal-mask.open class when clicked", function() {
        expect(openModalButton()).toHaveBeenCalled();
    })
})

describe("displaySlide", function() {
    it("returns collection of slides", function() {
        expect(displaySlide().)
    })
})