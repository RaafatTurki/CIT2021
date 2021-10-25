type Fridge = Array<string>
type Ingredients = Array<string>

function validateRecipe(fridge: Fridge, ingredients: Ingredients) {
    let ingredients_state: any = {}
    
    ingredients.forEach(item => {
        ingredients_state[item] = false
    })

    fridge.forEach(item => {
        if (ingredients_state[item] == false) ingredients_state[item] = true
    })

    let result: boolean = true
    for (let item in ingredients_state) {
        if (ingredients_state[item] == false) result = false
    }
    return result
}

const input = await Deno.readTextFile("inputs.json");
const data = JSON.parse(input);
let ingredients: Ingredients = data.ingredients

let fridge: Fridge = ["banana", "tomato", "potato"]
let result: boolean = validateRecipe(fridge, ingredients)
console.log(result)

// Unit Tests
import { assertStrictEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts";

Deno.test("no ingredient match", () => {
    let test_fridge: Fridge = ["banana", "tomato", "potato"]
    let test_ingredients: Ingredients = ["eggs"]
    let test_result = validateRecipe(test_fridge, test_ingredients)
    assertStrictEquals(test_result, false)
})

Deno.test("ingredient match", () => {
    let test_fridge: Fridge = ["banana", "tomato", "potato"]
    let test_ingredients: Ingredients = ["potato", "tomato"]
    let test_result = validateRecipe(test_fridge, test_ingredients)
    assertStrictEquals(test_result, true)
})

Deno.test("ingredient and fridge match", () => {
    let test_fridge: Fridge = ["banana", "tomato", "potato"]
    let test_ingredients: Ingredients = ["banana", "tomato", "potato"]
    let test_result = validateRecipe(test_fridge, test_ingredients)
    assertStrictEquals(test_result, true)
})

Deno.test("ingredients empty", () => {
    let test_fridge: Fridge = ["banana", "tomato", "potato"]
    let test_ingredients: Ingredients = []
    let test_result = validateRecipe(test_fridge, test_ingredients)
    assertStrictEquals(test_result, true)
})

Deno.test("ingredients and fridge empty", () => {
    let test_fridge: Fridge = []
    let test_ingredients: Ingredients = []
    let test_result = validateRecipe(test_fridge, test_ingredients)
    assertStrictEquals(test_result, true)
})

Deno.test("fridge empty", () => {
    let test_fridge: Fridge = []
    let test_ingredients: Ingredients = ["potato"]
    let test_result = validateRecipe(test_fridge, test_ingredients)
    assertStrictEquals(test_result, false)
})
