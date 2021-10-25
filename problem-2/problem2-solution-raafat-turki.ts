// proper typing is not implement due to the required structure of said types
type Fridge = any
type Ingredients = any

function validateRecipeWithQuantity(fridge: Fridge, ingredients: Ingredients) {
    let ingredients_state: Ingredients = ingredients
 
    for (let item in ingredients_state) {
        if (item in fridge) ingredients_state[item] -= fridge[item]
    }

    let result: boolean = true
    for (let item in ingredients_state) {
        if (ingredients_state[item] > 0) result = false
    }
    return result
}

const input = await Deno.readTextFile("inputs.json");
const data = JSON.parse(input);
let ingredients: Ingredients = data.ingredients

let fridge: Fridge = {'banana': 1, 'tomato': 2, 'potato': 1}
let result: boolean = validateRecipeWithQuantity(fridge, ingredients)
console.log(result)

// Unit Tests
import { assertStrictEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts";

Deno.test("not enough ingredients in fridge", () => {
    let test_fridge: Fridge = {"banana": 1, "tomato": 2, "potato": 1}
    let test_ingredients: Ingredients = {"potato": 3}
    let test_result = validateRecipeWithQuantity(test_fridge, test_ingredients)
    assertStrictEquals(test_result, false)
})

Deno.test("enough ingredients in fridge", () => {
    let test_fridge: Fridge = {"banana": 1, "tomato": 2, "potato": 1}
    let test_ingredients: Ingredients = {"tomato": 2, "potato": 1}
    let test_result = validateRecipeWithQuantity(test_fridge, test_ingredients)
    assertStrictEquals(test_result, true)
})

Deno.test("ingredient and fridge match", () => {
    let test_fridge: Fridge = {"banana": 1, "tomato": 2, "potato": 1}
    let test_ingredients: Ingredients = {"banana": 1, "tomato": 2, "potato": 1}
    let test_result = validateRecipeWithQuantity(test_fridge, test_ingredients)
    assertStrictEquals(test_result, true)
})

Deno.test("ingredients empty", () => {
    let test_fridge: Fridge = {"banana": 1, "tomato": 2, "potato": 1}
    let test_ingredients: Ingredients = {}
    let test_result = validateRecipeWithQuantity(test_fridge, test_ingredients)
    assertStrictEquals(test_result, true)
})

Deno.test("ingredients and fridge empty", () => {
    let test_fridge: Fridge = {}
    let test_ingredients: Ingredients = {}
    let test_result = validateRecipeWithQuantity(test_fridge, test_ingredients)
    assertStrictEquals(test_result, true)
})

Deno.test("fridge empty", () => {
    let test_fridge: Fridge = {}
    let test_ingredients: Ingredients = {"banana": 1, "tomato": 2, "potato": 1}
    let test_result = validateRecipeWithQuantity(test_fridge, test_ingredients)
    assertStrictEquals(test_result, false)
})
