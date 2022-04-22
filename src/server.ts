import { api } from './api';
import config from './helpers/config';

api.listen(config.ServerPort, config.ServerHost, () => {
  console.info(`Server: running on http://${config.ServerHost}:${config.ServerPort}`);
}).on('error', (err: any) => {
  console.log(err);
});
