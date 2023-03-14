#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const viewName = process.argv[2];
const subViewName = process.argv[3];

if (!viewName) {
    console.error('Você informar o nome da View pai.');
    process.exit(1);
} else if (!subViewName) {
    console.error('Você precisa fornecer um nome válido para a nova View.');
    process.exit(1);
}

const view = viewName.charAt(0).toUpperCase().concat(viewName.slice(1));
const subView = subViewName.charAt(0).toUpperCase().concat(subViewName.slice(1));

const dirView = path.join(process.cwd(), "src", "views", view);
const dirSubView = path.join(process.cwd(), "src", "views", view, "views", subView);

/**
 * - subViewName
 *   - /assets
 *   - /components
 *   - /views
 *   - subViewName.vue
 */

try {
    if (!fs.existsSync(dirView)) {
        console.log(`O caminho para a view pai não existe!`);
        console.log(`Caminho: ${dirView}`);
    } else if (fs.existsSync(dirSubView)) {
        console.log('Esta subview já existe!');
    } else {
        fs.mkdirSync(dirSubView);
        fs.mkdirSync(dirSubView.concat('/assets'));
        fs.mkdirSync(dirSubView.concat('/components'));
        fs.mkdirSync(dirSubView.concat('/views'));
        fs.readFile(path.join(process.cwd(), "_plataforma", "make", "subView", "_viewModel.vue"), function (err, data) {
            if (err) {
                console.error(err);
                return;
            }

            fs.writeFile(path.join(dirSubView, subView.concat('.vue')), data, function (err) {
                if (err) {
                    console.error(err);
                    return;
                }
            });
        });

        console.log(`Pasta ${subViewName} criada com sucesso!`);
    }
} catch (err) {
    console.error(err);
    process.exit(1);
}