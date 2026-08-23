import React, { useState, useEffect } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { QuoteModal } from './components/common/QuoteModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { MessageSquare, ArrowUp } from 'lucide-react';
import { contactInfo } from './data/teamData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [currentProjectSlug, setCurrentProjectSlug] = useState<string>('');
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [quoteInitialTopic, setQuoteInitialTopic] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Sync with browser hash on load and back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash || hash === '' || hash === 'home') {
        setCurrentPage('home');
        setCurrentProjectSlug('');
      } else if (hash.startsWith('projects/')) {
        const slug = hash.replace('projects/', '');
        setCurrentPage('project-detail');
        setCurrentProjectSlug(slug);
      } else if (['about', 'services', 'projects', 'contact'].includes(hash)) {
        setCurrentPage(hash);
        setCurrentProjectSlug('');
      } else {
        setCurrentPage('404');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Monitor scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page: string, projectSlug?: string) => {
    if (page === 'project-detail' && projectSlug) {
      window.location.hash = `projects/${projectSlug}`;
      setCurrentPage('project-detail');
      setCurrentProjectSlug(projectSlug);
    } else {
      window.location.hash = page;
      setCurrentPage(page);
      setCurrentProjectSlug('');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (initialTopic?: string) => {
    setQuoteInitialTopic(initialTopic || '');
    setQuoteModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render active page
  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateTo} onOpenQuote={() => handleOpenQuote()} />;
      case 'about':
        return <AboutPage onNavigate={navigateTo} onOpenQuote={() => handleOpenQuote()} />;
      case 'services':
        return <ServicesPage onNavigate={navigateTo} onOpenQuote={(service) => handleOpenQuote(service)} />;
      case 'projects':
        return <ProjectsPage onNavigate={navigateTo} onOpenQuote={() => handleOpenQuote()} />;
      case 'project-detail':
        return <ProjectDetailPage slug={currentProjectSlug} onNavigate={navigateTo} onOpenQuote={(proj) => handleOpenQuote(proj)} />;
      case 'contact':
        return <ContactPage onNavigate={navigateTo} />;
      default:
        return <NotFoundPage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F4EC] text-[#20221A] selection:bg-[#3F4728] selection:text-[#F7F4EC]">
      {/* Global Navigation Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        {renderContent()}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Floating Action Buttons (WhatsApp & Scroll Top) */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end space-y-3">
        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#FCFAF5] border border-[#E7E0D0] text-[#3F4728] shadow-md flex items-center justify-center hover:bg-[#3F4728] hover:text-[#F7F4EC] transition-all hover:scale-105"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* WhatsApp Direct Floating Bubble */}
        <a
          href={contactInfo.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center bg-[#25D366] text-white px-3.5 py-2.5 rounded-full shadow-xl hover:bg-[#20ba59] transition-all hover:scale-105"
          aria-label="Chat with SCALE on WhatsApp"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out group-hover:ml-2 text-xs font-semibold tracking-wider">
            WhatsApp Studio
          </span>
        </a>
      </div>

      {/* Quote / Project Intake Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialProject={quoteInitialTopic}
      />
    </div>
  );
}
