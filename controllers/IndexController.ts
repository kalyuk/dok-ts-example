import { WebController } from 'dok-ts/web/WebController';
import { BaseContext } from 'dok-ts/base/BaseContext';

export class IndexController extends WebController {

  indexAction(context: BaseContext) {
    return this.renderPUG(200, 'index', {message: 'Hello world'});
  }

  jsonAction(context: BaseContext) {
    return this.renderJSON(200, ['Hello world '])
  }

}