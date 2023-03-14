#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const viewName = process.argv[2];

if (!viewName) {
    console.error('Você precisa fornecer um nome válido para a nova View.');
    process.exit(1);
}

const view = viewName.charAt(0).toUpperCase().concat(viewName.slice(1));

const dir = path.join(process.cwd(), "src", "views", view);

/**
 * - viewName
 *   - /assets
 *   - /components
 *   - /views
 *   - viewName.vue
 */

try {
    if (fs.existsSync(dir)) {
        console.log('Esta view já existe!');
    } else {
        fs.mkdirSync(dir);
        fs.mkdirSync(dir.concat('/assets'));
        fs.mkdirSync(dir.concat('/components'));
        fs.mkdirSync(dir.concat('/views'));
        fs.readFile(path.join(process.cwd(), "_plataforma", "make", "view", "_viewModel.vue"), function (err, data) {
            if (err) {
                console.error(err);
                return;
            }

            fs.writeFile(path.join(dir, view.concat('.vue')), data, function (err) {
                if (err) {
                    console.error(err);
                    return;
                }
            });
        });

        console.log(`Pasta ${viewName} criada com sucesso!`);
    }
} catch (err) {
    console.error(err);
    process.exit(1);
}