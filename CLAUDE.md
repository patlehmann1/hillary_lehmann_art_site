# Development Guidelines

## Code Principles

### YAGNI (You Aren't Gonna Need It)
- Build only what is currently needed
- Avoid premature optimization
- Don't add features "just in case"

### Clean Code Standards
- Self-documenting code over comments
- Minimal comments (only for complex logic)
- Descriptive variable and function names
- Single responsibility principle

### React Best Practices
- Functional components with hooks
- Proper key props in lists
- Avoid inline functions in JSX where performance matters
- Use TypeScript for type safety
- Colocate related logic

### Next.js Best Practices
- Use App Router conventions
- Server components by default
- Client components only when necessary ('use client')
- Proper metadata for SEO
- Static generation for performance

### Maintainability
- Consistent file structure
- Reusable components
- Clear separation of concerns
- Type-safe props and data structures
