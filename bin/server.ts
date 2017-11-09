import { WebApplication } from 'dok-ts/web/WebApplication';
import * as path from 'path';

const configPath = path.join(__dirname, '..', 'config', 'main.ts');

const app = new WebApplication(configPath);

app.listen();