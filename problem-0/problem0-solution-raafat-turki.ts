type Fridge = Array<string>
type Item = string

function whereIsMyFood(fridge: Fridge, item: Item) {
    let result: number = -1
    for (let i = 0; i < fridge.length; i++) {
        if (fridge[i] === item) result = i
    }
    return result
}

const input = await Deno.readTextFile("inputs.json");
const data = JSON.parse(input);
const desired_item: Item = data.desired_item

let fridge: Fridge = ["banana", "tomato", "potato"]
let result: number = whereIsMyFood(fridge, desired_item)

if (result == -1) {
    console.log("there's no", desired_item, "in the fridge :C")
} else {
    console.log("your", desired_item, "is in position" ,result)
}


// Unit Tests
import { assertStrictEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts";

Deno.test("no item match", () => {
    let test_fridge: Fridge = ["banana", "tomato", "potato"]
    let test_result = whereIsMyFood(test_fridge, "yogurt")
    assertStrictEquals(test_result, -1)
})

Deno.test("item match", () => {
    let test_fridge: Fridge = ["banana", "tomato", "potato"]
    let test_result = whereIsMyFood(test_fridge, "potato")
    assertStrictEquals(test_result, 2)
})

Deno.test("two matching items exist", () => {
    let test_fridge: Fridge = ["potato", "potato", "tomato"]
    let test_result = whereIsMyFood(test_fridge, "potato")
    assertStrictEquals(test_result, 1)
})

Deno.test("fridge empty", () => {
    let test_fridge: Fridge = []
    let test_result = whereIsMyFood(test_fridge, "potato")
    assertStrictEquals(test_result, -1)
})

Deno.test("fridge has one matching item", () => {
    let test_fridge: Fridge = ["potato"]
    let test_result = whereIsMyFood(test_fridge, "potato")
    assertStrictEquals(test_result, 0)
})

Deno.test("fridge has one matching item", () => {
    let test_fridge: Fridge = ["potato"]
    let test_result = whereIsMyFood(test_fridge, "potato")
    assertStrictEquals(test_result, 0)
})

Deno.test("fridge has one non-matching item", () => {
    let test_fridge: Fridge = ["tomato"]
    let test_result = whereIsMyFood(test_fridge, "potato")
    assertStrictEquals(test_result, -1)
})
