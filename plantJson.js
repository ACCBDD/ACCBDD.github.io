function generateJson() {
    form = document.forms["bee_form"]
    console.log("{'array':" + form["stages"].value + "}")
    const plant_json = {
        cloneable: form["cloneable"].checked,
        growth_bonus: Number(form["growth_bonus"].value),
        growth_chance: Number(form["growth_chance"].value),
        harvest_stage: Number(form["harvest_stage"].value),
        mods: [],
        products: [
            {
                chance: Number(form["prod_chance"].value),
                item: form["prod_item"].value,
                max: Number(form["prod_max"].value),
                min: Number(form["prod_min"].value),
                required: true
            }
        ],
        requirement: {
            light_tolerance_factor: Number(form["light_tol"].value),
            max_light: Number(form["max_light"].value),
            min_light: Number(form["min_light"].value),
            seasons: ["summer", "autumn"],
            soil_acidity: {
                type: form["acid_type"].value,
                tolerance_factor: Number(form["acid_tol"].value),
                value: form["acid_val"].value
            },
            soil_humidity: {
                type: form["humid_type"].value,
                tolerance_factor: Number(form["humid_tol"].value),
                value: form["humid_val"].value
            },
            soil_nutrients: {
                type: form["nutrient_type"].value,
                tolerance_factor: Number(form["nutrient_tol"].value),
                value: form["nutrient_val"].value
            }
        },
        seeds: [],
        spread_chance: Number(form["spread_chance"]),
        stages: JSON.parse('{"array":' + form["stages"].value + "}").array
    }
    console.log(JSON.stringify(plant_json))
    console.log(document.getElementById('output'))
    document.getElementById('output').value = JSON.stringify(plant_json, null, 2)
    var speciesName = form.name.value.toLowerCase()
    var namespace = form.namespace.value
    if (namespace == "") namespace = "complicated_bees"
    lang = {}
    lang['plant.agricraft.' + namespace + '.' + speciesName] = capitalize(speciesName)
    lang['seed.agricraft.' + namespace + '.' + speciesName] = capitalize(speciesName) + " Seeds"
    lang['description.agricraft.' + namespace + '.' + speciesName] = ""
    document.getElementById('lang_output').value = JSON.stringify(lang, null, 2)

}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}