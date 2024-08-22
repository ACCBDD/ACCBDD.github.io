function generateJson() {
    form = document.forms["bee_form"]
    const object = {
        dominant: form["dominant"].checked,
        color: form["color"].value,
        nest_color: form["nest_color"].value,
        products: [],
        specialty_products: [],
        default_chromosome: {
        }
    }
    object.default_chromosome['complicated_bees:lifespan'] = {
        data: form['lifespan'].value,
        dominant: form['life_dom'].checked
    }
    object.default_chromosome['complicated_bees:temperature'] = {
        data: form['temp'].value,
        tolerance: form['temp_tol'].value,
        dominant: form['temp_dom'].checked
    }
    object.default_chromosome['complicated_bees:humidity'] = {
        data: form['humid'].value,
        tolerance: form['humid_tol'].value,
        dominant: form['humid_dom'].checked
    }
    object.default_chromosome['complicated_bees:productivity'] = {
        data: form['productivity'].value,
        dominant: form['prod_dom'].checked
    }
    if (form.fertility.value == "") form.fertility.value = 2
    object.default_chromosome['complicated_bees:fertility'] = {
        data: form['fertility'].value,
        dominant: form['fertile_dom'].checked
    }
    if (form.flower.value != "") {
        object.default_chromosome['complicated_bees:flower'] = {
            data: form['flower'].value,
            dominant: form['flower_dom'].checked
        }
    }
    if (form.effect.value != "") {
        object.default_chromosome['complicated_bees:effect'] = {
            data: form['effect'].value,
            dominant: form['effect_dom'].checked
        }
    }
    object.default_chromosome['complicated_bees:nocturnal'] = {
        data: form['nocturnal'].checked,
        dominant: form['nocturnal_dom'].checked
    }
    object.default_chromosome['complicated_bees:cave_dwelling'] = {
        data: form['cave_dwelling'].checked,
        dominant: form['cave_dom'].checked
    }
    object.default_chromosome['complicated_bees:weatherproof'] = {
        data: form['weatherproof'].checked,
        dominant: form['weather_dom'].checked
    }
    console.log(JSON.stringify(object))
    console.log(document.getElementById('output'))
    document.getElementById('output').value = JSON.stringify(object, null, 2)
}

function syncColor() {
    document.getElementById('nest_color').value = document.getElementById('color').value
}