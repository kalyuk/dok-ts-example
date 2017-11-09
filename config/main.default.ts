import * as path from 'path';

export const config = {
  basePath: path.join(__dirname, '..'),
  id: 'example',
  services: {
    RouteService: {
      options: {
        routes: {
          'GET /': {
            actionName: 'index',
            controllerName: 'index'
          },
          'GET /json': {
            actionName: 'json',
            controllerName: 'index'
          },
          'GET /assets/<filePath:.*>': {
            moduleName: 'StaticModule',
            actionName: 'index',
            controllerName: 'index',
            props: {
              viewPath: path.join(__dirname, '..', 'templates', 'default', 'assets')
            }
          },
        }
      }
    },
    HttpService: {
      options: {
        port: 8080
      }
    },

    ResponseService: {
      options: {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, Authorization, Campaign-Hash'
        }
      }
    }
  }
};