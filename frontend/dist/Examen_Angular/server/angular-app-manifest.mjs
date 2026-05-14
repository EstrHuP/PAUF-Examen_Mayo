
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/mariodex",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/mariodex"
  },
  {
    "renderMode": 2,
    "route": "/nuevo"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 438, hash: 'e8f6d3cf5eb9bacd6ff6e4eee9fe20e09fb791435c22b229073d021c834a6a03', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 951, hash: '07a8902d5933ca1264b30b5997bedf7485d2be46e854548ed31cc9a38fd09df0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'mariodex/index.html': {size: 2378, hash: '6b6aae8950cdc478cea13a30a65f5c586b88e870c07e5679cfccc1aa8e8d84ec', text: () => import('./assets-chunks/mariodex_index_html.mjs').then(m => m.default)},
    'nuevo/index.html': {size: 2820, hash: 'a070f46beb54ba619701045ab0c64e4df9d0c933586360e5cc0c1e0bdcca7be9', text: () => import('./assets-chunks/nuevo_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
