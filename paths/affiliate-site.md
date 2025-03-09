You are an expert in TypeScript, Node.js, Next.js App Router, React, Shadcn UI, Radix UI and Tailwind. Follow Next.js docs for Data Fetching, Rendering, and Routing. We use Vercel's AI SDK

# Casino Affiliate Website - Product Requirements Document


## Project Overview

**Goal:** Create a fully functional, SEO-optimized, mobile-responsive casino affiliate website with centralized content management.

When starting to build this project please ask for any information you need before starting the build. 

**Input Resources:**
- Screenshots of desired design/layout
- URL for web scraping via Firecrawl
- This PRD document

## Core Requirements

### Technical Requirements
- SEO optimization throughout the site
- Mobile-responsive design using a mobile-first approach
- Centralized CMS for efficient content management
- Clean, maintainable architecture
- Performance optimization for fast loading times
- Secure implementation of user data handling

### Functional Requirements
- Casino listing and comparison functionality
- Bonus/promotion tracking and display
- Content management for articles and reviews
- Search functionality with filtering options
- User-friendly navigation structure
- Affiliate link tracking
- Rating and review system

## Development Roadmap

### Phase 1: Foundation & Structure
1. Set up project with SEO considerations
   - Implement proper metadata structure
   - Consider URL formatting for SEO
   - Plan for sitemap and robots.txt implementation

2. Establish responsive design framework
   - Define breakpoints for different device sizes
   - Create flexible grid system
   - Implement fluid typography

3. Design component architecture
   - Plan reusable UI components
   - Define data flow patterns
   - Establish style guidelines

4. Plan SEO strategy
   - Determine keyword targeting approach
   - Structure heading hierarchy
   - Plan for structured data implementation

### Phase 2: Core Component Development
1. Design header and navigation
   - Create responsive navigation menu
   - Implement search functionality
   - Design user interaction elements

2. Build footer structure
   - Organize site links and categories
   - Include necessary legal information
   - Add compliance and regulatory content

3. Create casino listing components
   - Design card layout for casino information
   - Implement rating visualization
   - Create bonus highlight sections

4. Develop comparison features
   - Build comparison table structure
   - Create feature comparison indicators
   - Design side-by-side casino evaluation tools

5. Build review components
   - Create rating system visualization
   - Design pros/cons comparison layout
   - Implement user review display

### Phase 3: Page Structure Development
1. Design homepage layout
   - Create featured casino section
   - Implement category navigation
   - Design promotional content areas
   - Add latest content section

2. Build casino review page template
   - Create detailed casino information layout
   - Design bonus information display
   - Implement user review section
   - Add related casino recommendations

3. Develop listing page template
   - Create filterable casino grid
   - Implement sorting controls
   - Design category-specific content areas

4. Create content page templates
   - Design article layout
   - Implement table of contents
   - Create related content sections

5. Build supporting pages
   - About page structure
   - Contact page with form
   - FAQ page with accordion functionality
   - Legal and compliance pages

### Phase 4: Content Management System
1. Design data models
   - Create casino entity structure
   - Design bonus and promotion models
   - Develop content and article schemas
   - Plan relationships between entities

2. Develop admin interfaces
   - Create dashboard for content management
   - Build casino and bonus editing tools
   - Implement content creation interface
   - Design reporting and analytics views

3. Implement authentication system
   - Create secure login functionality
   - Set up role-based permissions
   - Implement password protection

4. Build content editor
   - Create rich text editing capabilities
   - Implement image upload and management
   - Build SEO metadata editor

### Phase 5: Advanced Features
1. Implement search and filtering
   - Create advanced search algorithm
   - Build filter interface for casinos
   - Implement category and tag filtering
   - Design sort functionality

2. Develop user preference features
   - Create saved preferences functionality
   - Implement recently viewed tracking
   - Build favorites/bookmarking system

3. Create affiliate link tracking
   - Implement click tracking
   - Build conversion attribution
   - Create reporting dashboard

4. Add performance monitoring
   - Set up analytics integration
   - Implement user behavior tracking
   - Create performance metrics reporting

### Phase 6: Optimization and Testing
1. Perform SEO audit
   - Validate metadata implementation
   - Check structured data
   - Verify heading hierarchy
   - Analyze keyword usage
   - Test internal linking structure

2. Test responsiveness
   - Verify layouts on various devices
   - Test touch interactions on mobile
   - Ensure consistent experience across platforms

3. Optimize performance
   - Improve page loading speed
   - Optimize image delivery
   - Implement caching strategies
   - Reduce unnecessary code

4. Conduct accessibility review
   - Check color contrast
   - Verify keyboard navigation
   - Test screen reader compatibility
   - Ensure proper ARIA attributes

## Key Components

### UI Components
- Header with navigation
- Footer with site map
- Casino card for listings
- Comparison table
- Rating and review display
- Bonus highlight
- Search and filter controls
- Category navigation
- Content display

### Page Templates
- Homepage with featured content
- Casino listing pages
- Detailed casino review pages
- Article and content pages
- Category pages
- About and contact pages

## Data Structure Considerations

### Casino Information
- Basic information (name, logo, description)
- Rating and user reviews
- Available bonuses and promotions
- Features and unique selling points
- Payment methods
- Terms and conditions
- Affiliate link data

### Content Structure
- Articles and reviews
- Categories and tags
- Author information
- Publication data
- SEO metadata
- Related content

## Implementation Guidelines

### SEO Considerations
- Implement proper page titles and meta descriptions
- Create consistent URL structure
- Use appropriate heading hierarchy
- Include structured data for rich snippets
- Optimize image alt text
- Generate XML sitemap
- Create robots.txt file

### Mobile Responsiveness
- Design for mobile-first
- Consider touch interactions
- Ensure readable text sizes
- Optimize navigation for smaller screens
- Test on various device sizes

### Performance Optimization
- Optimize image loading
- Implement lazy loading
- Consider code splitting
- Minimize HTTP requests
- Utilize efficient caching

## Acceptance Criteria

- Website loads in under 3 seconds on desktop and mobile
- SEO score of 90+ on Lighthouse
- Fully responsive across mobile, tablet, and desktop
- Content can be updated through CMS without code changes
- Casino listings can be filtered and sorted by multiple criteria
- All affiliate links are properly tracked
- Admin can add/edit/remove content and listings easily
- Site passes WCAG 2.1 AA accessibility standards
- All pages validate with W3C standards


Remember to use TypeScript for type safety, including proper type definitions for all components, functions, and API responses. Utilize Tailwind CSS for responsive and consistent styling across the application. Leverage Next.js App Router for efficient routing and data fetching, implementing server-side rendering or static generation where appropriate to optimize performance.

We have supabase set up for the backend if its needed - api keys should be in the .env file
Firecrawl API keys should be in the .env file 