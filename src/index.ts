import chalk from 'chalk';
import merge from 'lodash.merge';

import generator from '@/generators';

import { PLUGIN_NAME } from '@/constants';
import { HexoConfig } from '@/types';

console.log(chalk.bold.bgMagenta(`${PLUGIN_NAME} run, have fun!`));

const DefaultConfig: HexoConfig = {
  enable: true,
};

hexo.config[PLUGIN_NAME] = merge({}, DefaultConfig, hexo.config[PLUGIN_NAME]);

hexo.extend.generator.register(`${PLUGIN_NAME} generator`, generator);
