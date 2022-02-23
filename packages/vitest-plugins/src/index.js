/**
 * requires each plugin and assigns the global symbols exported
 */

async function setup(plugins) {
  const configure = {
    addGlobal(name, block) {
      // @todo add in code to consult with vitest configuration to see if globals is actually enabled.
      global[name] = block;
    },
  };

  await Promise.all(plugins.map(async (plugin) => {
    await import(plugin).then((exports => {
      if ('register' in exports) {
        exports.register(configure);
      } else {
        for (let name in exports) {
          configure.addGlobal(name, exports[name]);
        }
      }
    })).catch((error) => {
      throw new Error(
        `Unable to find vitest plugin: '${plugin}'. Check that your ` +
        `dependencies are installed correctly and that '${plugin}' is a ` +
        `valid vitest plugin. Full error below:\n\n${error.message}\n\n${error.stack}`,
      );
    });
  }));
}

export default setup;
