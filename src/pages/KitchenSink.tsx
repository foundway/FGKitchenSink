import { useState } from 'react';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { Button } from '../components/ui/Button';
import { CodeSnippetModal } from '../components/ui/CodeSnippetModal';
import { ButtonDemo } from '../demos/ButtonDemo';
import buttonDemoCode from '../demos/ButtonDemo.tsx?raw';
import { TypographyDemo } from '../demos/TypographyDemo';
import typographyDemoCode from '../demos/TypographyDemo.tsx?raw';
import { ColorsDemo } from '../demos/ColorsDemo';
import colorsDemoCode from '../demos/ColorsDemo.tsx?raw';
import { SpacingDemo } from '../demos/SpacingDemo';
import spacingDemoCode from '../demos/SpacingDemo.tsx?raw';
import { FormsDemo } from '../demos/FormsDemo';
import formsDemoCode from '../demos/FormsDemo.tsx?raw';
import { CardsDemo } from '../demos/CardsDemo';
import cardsDemoCode from '../demos/CardsDemo.tsx?raw';
import { BadgesDemo } from '../demos/BadgesDemo';
import badgesDemoCode from '../demos/BadgesDemo.tsx?raw';
import { TablesDemo } from '../demos/TablesDemo';
import tablesDemoCode from '../demos/TablesDemo.tsx?raw';
import { ModalsDemo } from '../demos/ModalsDemo';
import modalsDemoCode from '../demos/ModalsDemo.tsx?raw';
import { TabsDemo } from '../demos/TabsDemo';
import tabsDemoCode from '../demos/TabsDemo.tsx?raw';
import { SettingTreeDemo } from '../demos/SettingTreeDemo';
import settingTreeDemoCode from '../demos/SettingTreeDemo.tsx?raw';
import { TemplatesDemo } from '../demos/TemplatesDemo';
import templatesDemoCode from '../demos/TemplatesDemo.tsx?raw';
import { Container } from '../components/layout/Container';
import './KitchenSink.css';

export function KitchenSink() {
  const [codeSnippet, setCodeSnippet] = useState<{ title: string; code: string } | null>(null);

  const sections = [
    { id: 'typography', label: 'Typography' },
    { id: 'colors', label: 'Colors' },
    { id: 'spacing', label: 'Spacing' },
    { id: 'buttons', label: 'Buttons' },
    { id: 'forms', label: 'Forms' },
    { id: 'cards', label: 'Cards' },
    { id: 'badges', label: 'Badges' },
    { id: 'tables', label: 'Tables' },
    { id: 'modals', label: 'Modals' },
    { id: 'tabs', label: 'Tabs' },
    { id: 'setting-tree', label: 'Setting Tree' },
    { id: 'templates', label: 'Templates' },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="kitchen-sink">
      <header className="kitchen-sink-header">
        <Container>
          <div className="header-content">
            <h1 className="header-title">Foxglove Design System</h1>
            <ThemeToggle />
          </div>
          <nav className="header-nav">
            {sections.map((section) => (
              <button
                key={section.id}
                className="nav-link"
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </Container>
      </header>

      <main className="kitchen-sink-main">
        <Container>
          <section id="typography" className="section">
            <div className="section-header-row">
              <h2 className="section-title">Typography</h2>
              <Button variant="ghost" size="sm" onClick={() => setCodeSnippet({ title: 'Typography', code: typographyDemoCode })}>
                View code
              </Button>
            </div>
            <div className="section-content">
              <TypographyDemo />
            </div>
          </section>

          <section id="colors" className="section">
            <div className="section-header-row">
              <h2 className="section-title">Color Palette</h2>
              <Button variant="ghost" size="sm" onClick={() => setCodeSnippet({ title: 'Color Palette', code: colorsDemoCode })}>
                View code
              </Button>
            </div>
            <div className="section-content">
              <ColorsDemo />
            </div>
          </section>

          <section id="spacing" className="section">
            <div className="section-header-row">
              <h2 className="section-title">Spacing Scale</h2>
              <Button variant="ghost" size="sm" onClick={() => setCodeSnippet({ title: 'Spacing Scale', code: spacingDemoCode })}>
                View code
              </Button>
            </div>
            <div className="section-content">
              <SpacingDemo />
            </div>
          </section>

          <section id="buttons" className="section">
            <div className="section-header-row">
              <h2 className="section-title">Buttons</h2>
              <Button variant="ghost" size="sm" onClick={() => setCodeSnippet({ title: 'Buttons', code: buttonDemoCode })}>
                View code
              </Button>
            </div>
            <div className="section-content">
              <ButtonDemo />
            </div>
          </section>

          <section id="forms" className="section">
            <div className="section-header-row">
              <h2 className="section-title">Form Controls</h2>
              <Button variant="ghost" size="sm" onClick={() => setCodeSnippet({ title: 'Form Controls', code: formsDemoCode })}>
                View code
              </Button>
            </div>
            <div className="section-content">
              <FormsDemo />
            </div>
          </section>

          <section id="cards" className="section">
            <div className="section-header-row">
              <h2 className="section-title">Cards</h2>
              <Button variant="ghost" size="sm" onClick={() => setCodeSnippet({ title: 'Cards', code: cardsDemoCode })}>
                View code
              </Button>
            </div>
            <div className="section-content">
              <CardsDemo />
            </div>
          </section>

          <section id="badges" className="section">
            <div className="section-header-row">
              <h2 className="section-title">Badges</h2>
              <Button variant="ghost" size="sm" onClick={() => setCodeSnippet({ title: 'Badges', code: badgesDemoCode })}>
                View code
              </Button>
            </div>
            <div className="section-content">
              <BadgesDemo />
            </div>
          </section>

          <section id="tables" className="section">
            <div className="section-header-row">
              <h2 className="section-title">Tables</h2>
              <Button variant="ghost" size="sm" onClick={() => setCodeSnippet({ title: 'Tables', code: tablesDemoCode })}>
                View code
              </Button>
            </div>
            <div className="section-content">
              <TablesDemo />
            </div>
          </section>

          <section id="modals" className="section">
            <div className="section-header-row">
              <h2 className="section-title">Modals</h2>
              <Button variant="ghost" size="sm" onClick={() => setCodeSnippet({ title: 'Modals', code: modalsDemoCode })}>
                View code
              </Button>
            </div>
            <div className="section-content">
              <ModalsDemo />
            </div>
          </section>

          <section id="tabs" className="section">
            <div className="section-header-row">
              <h2 className="section-title">Tabs</h2>
              <Button variant="ghost" size="sm" onClick={() => setCodeSnippet({ title: 'Tabs', code: tabsDemoCode })}>
                View code
              </Button>
            </div>
            <div className="section-content">
              <TabsDemo />
            </div>
          </section>

          <section id="setting-tree" className="section">
            <div className="section-header-row">
              <h2 className="section-title">Setting Tree</h2>
              <Button variant="ghost" size="sm" onClick={() => setCodeSnippet({ title: 'Setting Tree', code: settingTreeDemoCode })}>
                View code
              </Button>
            </div>
            <div className="section-content">
              <p className="text-secondary" style={{ marginBottom: 'var(--spacing-md)' }}>
                Panel-style settings with tabs, search, and collapsible sections. Matches design_mirror (light/dark). Toggle theme to see both modes.
              </p>
              <div className="setting-tree-demo-wrap">
                <SettingTreeDemo />
              </div>
            </div>
          </section>

          <section id="templates" className="section">
            <div className="section-header-row">
              <h2 className="section-title">Layout Templates</h2>
              <Button variant="ghost" size="sm" onClick={() => setCodeSnippet({ title: 'Layout Templates', code: templatesDemoCode })}>
                View code
              </Button>
            </div>
            <div className="section-content">
              <TemplatesDemo />
            </div>
          </section>
        </Container>
      </main>
      {codeSnippet && (
        <CodeSnippetModal
          isOpen={true}
          onClose={() => setCodeSnippet(null)}
          title={codeSnippet.title}
          code={codeSnippet.code}
        />
      )}
    </div>
  );
}
