import {
  defineConfig,
  presetAttributify,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss';
import {
  presetApplet,
  presetRemToRpx,
  transformerApplet,
  transformerAttributify
} from 'unocss-applet';

const isH5 = process.env.UNI_PLATFORM === 'h5';

export default defineConfig({
  presets: [
    /**
     * you can add `presetAttributify()` here to enable unocss attributify mode prompt
     * although preset is not working for applet, but will generate useless css
     */
    presetApplet({ enable: !isH5 }),
    presetAttributify(),
    presetIcons({ unit: 'rem' }),
    presetRemToRpx({ enable: !isH5 })
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    // Don't change the following order
    transformerAttributify(),
    transformerApplet()
  ]
});
