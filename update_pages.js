const fs = require('fs');

const files = ['contact.html', 'offerte.html', 'portfolio.html', 'project.html'];

const tailwindConfigScript = `<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">\n    <script>
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary:     '#1B2B4B',
        accent:      '#2D6BE4',
        accentHover: '#1A55C8',
        dark:        '#1B2B4B',
        cta:         '#E87722',
        body:        '#111111',
        sectionAlt:  '#F5F6F8'
      },
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      }
    }
  }
}
</script>`;

const getHeader = (activePage) => {
  return `<header class="fixed w-full top-0 bg-white/95 backdrop-blur-sm z-50 
               border-b border-gray-100 shadow-sm">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex 
              items-center justify-between">

    <!-- Logo -->
    <a href="index.html" class="flex items-center gap-2 font-display 
       font-bold text-2xl tracking-tight group">
      <div class="bg-primary p-2 rounded-xl group-hover:bg-accent 
                  transition-colors">
        <svg class="w-5 h-5 text-white transition-colors" fill="none" 
             stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" 
                stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      </div>
      <span class="text-body">Bit<span class="text-accent">Breez</span></span>
    </a>

    <!-- Desktop nav -->
    <div class="hidden md:flex items-center space-x-8">
      <nav class="flex space-x-6 text-sm font-medium text-gray-600">
        <a href="index.html#about"    class="hover:text-primary transition-colors">Over ons</a>
        <a href="index.html#pricing"  class="hover:text-primary transition-colors">Prijzen</a>
        <a href="portfolio.html"      class="${activePage === 'portfolio' ? 'text-primary font-semibold' : 'hover:text-primary transition-colors'}">Portfolio</a>
        <a href="contact.html"        class="${activePage === 'contact' ? 'text-primary font-semibold' : 'hover:text-primary transition-colors'}">Contact</a>
      </nav>
      <a href="offerte.html" 
         class="bg-primary text-white px-5 py-2.5 rounded-full text-sm 
                font-semibold hover:bg-accentHover transition-colors ${activePage === 'offerte' ? 'ring-2 ring-primary ring-offset-2' : ''}">
        Offerte aanvragen
      </a>
    </div>

    <!-- Mobile hamburger -->
    <button id="mobile-menu-btn" class="md:hidden text-primary p-2" 
            aria-label="Menu">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" 
           viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" 
              stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>
  </div>

  <!-- Mobile menu dropdown -->
  <div id="mobile-menu" class="md:hidden bg-white border-b border-gray-100 
                                max-h-0 overflow-hidden transition-all 
                                duration-300 ease-in-out">
    <div class="px-4 pt-2 pb-6 space-y-2 flex flex-col">
      <a href="index.html#about"   class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md">Over ons</a>
      <a href="index.html#pricing" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md">Prijzen</a>
      <a href="portfolio.html"     class="block px-3 py-2 text-base font-medium ${activePage === 'portfolio' ? 'text-primary bg-gray-50' : 'text-gray-700 hover:text-primary hover:bg-gray-50'} rounded-md">Portfolio</a>
      <a href="contact.html"       class="block px-3 py-2 text-base font-medium ${activePage === 'contact' ? 'text-primary bg-gray-50' : 'text-gray-700 hover:text-primary hover:bg-gray-50'} rounded-md">Contact</a>
      <a href="offerte.html" 
         class="mt-4 block text-center bg-primary text-white px-5 py-3 
                rounded-full text-base font-semibold hover:bg-accentHover 
                transition-colors">
        Offerte aanvragen
      </a>
    </div>
  </div>
</header>`;
}

const jsFooter = `
<!-- Mobile menu JS — add before </body> on each page -->
<script>
  const mobileBtn  = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  mobileBtn.addEventListener('click', () => {
    mobileMenu.style.maxHeight = mobileMenu.style.maxHeight 
      ? null 
      : mobileMenu.scrollHeight + 'px';
  });
</script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
  AOS.init({ once: true, offset: 50 });
</script>
</body>`;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // 1. replace tailwind config script
  const tailwindRegex = /<script>\s*tailwind\.config =[\s\S]*?<\/script>/;
  content = content.replace(tailwindRegex, tailwindConfigScript);

  // 2. replace header
  // Note: the header might have a comment before it like <!-- Header -->
  // This regex matches from <header> to </header>
  const headerRegex = /<header[\s\S]*?<\/header>/;
  
  let activePage = '';
  if (file === 'contact.html') activePage = 'contact';
  if (file === 'portfolio.html') activePage = 'portfolio';
  if (file === 'project.html') activePage = 'portfolio'; // project highlights "Portfolio"
  if (file === 'offerte.html') activePage = 'offerte';

  content = content.replace(headerRegex, getHeader(activePage));

  // 4. buttons & accents
  content = content.replace(/bg-dark/g, 'bg-primary');
  content = content.replace(/hover:bg-gray-800/g, 'hover:bg-accentHover');

  // Apply AOS fade-up to the main page h1
  content = content.replace(/(<h1[^>]*?)>/, '$1 data-aos="fade-up">');

  // JS footer
  content = content.replace(/<\/body>/, jsFooter);

  fs.writeFileSync(file, content);
}

console.log("Pages updated successfully.");
