var calculator = require("../src/calculator")

describe("Calculator", () => {
  it("should return 2 when add 1 and 1", () => {
    var expectResult = 2
    expect(calculator.add(1, 1)).toEqual(expectResult)
  })

  it("should return an error when adding non-number", () => {
    var expectResult = new Error("Can not handle Non-number")
    expect(calculator.add(1, "a")).toEqual(expectResult)
  })
})
