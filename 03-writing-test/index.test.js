import { describe, it } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

describe("sum function test", () => {
  it("should sum correctly", () => {
    // Arrange
    const operandA = 1;
    const operandB = 2;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 3;
    assert.equal(actualValue, expectedValue);
  });
});
