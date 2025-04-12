import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';



/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <div className="flex items-center gap-2">
          {/* Light mode logo */}
          <img
            src="/assets/images/logos/white-mode-logo-w-text.png"
            alt="Logo"
            width={80}
            height={14}
            className="block dark:hidden"
          />
  
          {/* Dark mode logo */}
          <img
            src="/assets/images/logos/dark-mode-logo-w-text.png"
            alt="Logo"
            width={80}
            height={14}
            className="hidden dark:block"
          />
  
          
        </div>
      </>
    ),
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
  ],
};
