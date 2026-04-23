import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// All routes to pre-render
const routes = [
  '/',
  '/company',
  '/contact',
  '/login',
  '/register',
  '/dashboard',
  '/services/ai-machine-learning',
  '/services/ai-custom-development-automation',
  '/services/custom-ai-hardware',
  '/services/it-network-infrastructure',
  '/services/custom-server-design-deployment',
  '/services/custom-nas-storage',
  '/services/rack-and-roll-services',
  '/services/cloud-hosting-deployment',
  '/services/custom-crm-erp-solutions',
  '/services/asset-lifecycle-management',
  '/services/professional-it-consulting',
  '/services/security-data-protection',
  '/services/av-smart-workspaces',
  '/services/custom-websites-design',
  '/services/online-marketing-services',
];

async function prerender() {
  // Import the server entry
  const { render } = await import('./dist/server/entry-server.js');
  
  // Read the client build HTML template
  const template = fs.readFileSync(
    path.resolve(__dirname, './dist/client/index.html'),
    'utf-8'
  );

  // Create a directory for prerendered pages if needed
  const prerenderDir = path.resolve(__dirname, './dist/client');

  for (const route of routes) {
    try {
      console.log(`Pre-rendering: ${route}`);
      
      // Render the route
      const { html: appHtml, helmetContext } = render(route);
      const { helmet } = helmetContext;
      
      // Inject the app HTML into template
      let html = template.replace('<!--app-html-->', appHtml);
      
      // Inject helmet meta tags if available
      if (helmet) {
        html = html.replace(
          '</head>',
          `${helmet.title?.toString() || ''}${helmet.meta?.toString() || ''}${helmet.link?.toString() || ''}${helmet.script?.toString() || ''}</head>`
        );
      }

      // Determine output path
      const routePath = route === '/' ? '/index.html' : `${route}/index.html`;
      const filePath = path.resolve(prerenderDir, `.${routePath}`);
      
      // Create directory if it doesn't exist
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      // Write the pre-rendered HTML
      fs.writeFileSync(filePath, html);
      console.log(`✓ Pre-rendered: ${route} -> ${routePath}`);
    } catch (error) {
      console.error(`Error pre-rendering ${route}:`, error);
    }
  }

  console.log('\n✅ Pre-rendering complete!');
}

prerender().catch(err => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});
