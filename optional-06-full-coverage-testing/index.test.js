import { describe, it } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

describe("sum function tests", () => {
  it("should return the correct sum of two (positive or zero) numbers", () => {
    assert.strictEqual(sum(1, 2), 3);

    assert.strictEqual(sum(0, 5), 5);
    assert.strictEqual(sum(5, 0), 5);
    assert.strictEqual(sum(0, 0), 0);
  });

  it("should return 0 when one or both parameters are negative", () => {
    assert.strictEqual(sum(-1, 2), 0);
    assert.strictEqual(sum(1, -2), 0);
    assert.strictEqual(sum(-1, -1), 0);
  });

  it("should return 0 when one or both parameters are not numbers", () => {
    // String
    assert.strictEqual(sum("1", 2), 0);
    assert.strictEqual(sum(1, "2"), 0);
    assert.strictEqual(sum("1", "2"), 0);

    // Boolean
    assert.strictEqual(sum(true, 2), 0);
    assert.strictEqual(sum(1, false), 0);
    assert.strictEqual(sum(true, false), 0);

    // Null
    assert.strictEqual(sum(null, 2), 0);
    assert.strictEqual(sum(1, null), 0);
    assert.strictEqual(sum(null, null), 0);

    // Undefined
    assert.strictEqual(sum(undefined, 2), 0);
    assert.strictEqual(sum(1, undefined), 0);
    assert.strictEqual(sum(undefined, undefined), 0);

    // Array
    assert.strictEqual(sum([], 2), 0);
    assert.strictEqual(sum(1, []), 0);
    assert.strictEqual(sum([], []), 0);

    // Object
    assert.strictEqual(sum({}, 2), 0);
    assert.strictEqual(sum(1, {}), 0);
    assert.strictEqual(sum({}, {}), 0);

    // Combination of non number
    assert.strictEqual(sum([], {}), 0);
  });
});
