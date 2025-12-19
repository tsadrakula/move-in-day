---
name: prd-generator
description: Generate comprehensive Product Requirement Documents (PRDs) for new features, API endpoints, UI components, architecture changes, or any development work. This skill should be used when the user requests a PRD, asks to document requirements, or says phrases like "create a PRD for", "generate a PRD", "write requirements for", or "document the requirements for" a feature or project.
---

# PRD Generator

## Overview

Generate comprehensive, actionable Product Requirement Documents (PRDs) that provide Claude Code with sufficient context to create todos and implement the requested work. PRDs are saved as markdown files in the `docs/prd/` directory with a filename based on the feature name.

## When to Use This Skill

Use this skill when the user:
- Explicitly requests a PRD: "Create a PRD for adding CSV export"
- Wants to document requirements: "Write requirements for the WordPress multisite scraper"
- Plans a new feature: "Generate a PRD for the dashboard feature"
- Asks to formalize specifications: "Document the requirements for the new API endpoint"

This skill is appropriate for:
- New features (web scraping capabilities, export functionality, etc.)
- API endpoints and integrations
- UI components and pages
- System architecture changes
- Refactoring or optimization projects
- Bug fixes requiring detailed analysis

## PRD Generation Workflow

### Step 1: Gather Information Interactively

Before generating the PRD, gather essential information from the user using the `AskUserQuestion` tool. Ask targeted questions to understand:

1. **Feature Name**: What should this feature/project be called?
2. **Feature Type**: What type of work is this?
   - New feature
   - API endpoint
   - UI component
   - Architecture change
   - Bug fix
   - Refactoring/Optimization

3. **Problem/Goal**: What problem does this solve or what goal does it achieve?

4. **Target Users**: Who will use this feature? (Internal team, end users, API consumers, etc.)

5. **Key Requirements**: What are the must-have requirements? (Can be multiple questions if needed)

6. **Dependencies**: Does this depend on other systems, APIs, or features?

7. **Success Criteria**: How will we know this is successful?

**Interactive Question Pattern:**
```
Use AskUserQuestion tool to gather 3-4 questions at a time. Start with:
- Feature name and type
- Problem/goal
- Key requirements overview

Then follow up with:
- Specific technical requirements
- Dependencies and integrations
- Success criteria and constraints
```

Adapt questions based on the feature type. For example:
- **API endpoints**: Ask about authentication, rate limiting, request/response format
- **UI components**: Ask about responsive design, accessibility, user interactions
- **Scrapers**: Ask about target sites, data structure, handling edge cases
- **Architecture**: Ask about scalability, performance requirements, backwards compatibility

### Step 2: Generate the PRD Document

Create a comprehensive markdown document with the following sections:

#### Required Sections

**1. Feature Overview**
- Feature name and type
- Brief 2-3 sentence summary
- Link to related work (GitHub issues, related PRDs, etc.)

**2. Problem Statement**
- What problem does this solve?
- Why is this important?
- Who is affected by this problem?
- Current workarounds or limitations

**3. Goals and Objectives**
- Primary goal (the main thing this achieves)
- Secondary goals (nice-to-haves)
- Non-goals (explicitly out of scope)

**4. User Stories / Use Cases**
- Who will use this?
- What will they do with it?
- Example scenarios in "As a [user], I want to [action] so that [benefit]" format
- Include 2-4 concrete examples

**5. Technical Requirements**

**Functional Requirements:**
- What must the system do?
- Input/output specifications
- Business logic and rules
- Edge cases and error handling

**Non-Functional Requirements:**
- Performance expectations (response times, throughput)
- Scalability needs
- Security considerations
- Accessibility requirements (if UI)
- Browser/device compatibility (if frontend)

**6. Architecture and Design Considerations**
- High-level architecture approach
- Key components and their interactions
- Data models or schema changes
- API contracts (if applicable)
- File structure or module organization
- Design patterns to use

**7. Implementation Details**
- Suggested implementation approach
- Key files to create or modify
- Third-party libraries or tools needed
- Configuration changes required
- Migration steps (if applicable)

**8. Dependencies**
- External APIs or services
- Other features or systems this depends on
- Prerequisite work that must be completed first
- Team dependencies (design, backend, infrastructure, etc.)

**9. Success Criteria**
- How will we measure success?
- What metrics matter?
- Acceptance criteria (checkable conditions for "done")
- Testing requirements

**10. Risks and Challenges**
- Technical risks
- Implementation challenges
- Potential blockers
- Mitigation strategies

**11. Timeline and Phases (Optional)**
- If the work can be broken into phases, outline them
- Note: Do NOT include hour estimates or sprint planning
- Focus on logical phases (MVP → Enhancement → Polish)

**12. Open Questions**
- Unresolved decisions
- Areas needing further research
- Questions for stakeholders

#### Formatting Guidelines

- Use clear, concise language
- Include code examples where helpful (API responses, data structures, etc.)
- Use bullet points and numbered lists for readability
- Add tables for structured information (requirements matrix, API endpoints, etc.)
- Use appropriate markdown formatting (headings, bold, code blocks)
- Include links to relevant documentation, issues, or related PRDs

### Step 3: Save the PRD

Save the PRD document following these conventions:

**Directory:** `docs/prd/`

**Filename:** Use kebab-case based on the feature name:
- `csv-export-functionality.md`
- `wordpress-multisite-scraping.md`
- `dashboard-analytics-page.md`

**File Creation:**
1. Ensure the `docs/prd/` directory exists (create if needed)
2. Use the `Write` tool to save the complete PRD
3. Inform the user of the file location

### Step 4: Create Implementation Todos

After generating and saving the PRD, automatically create a todo list using the `TodoWrite` tool based on the PRD's requirements. The todos should:

- Break down the work into actionable, specific tasks
- Follow a logical implementation order (setup → core → testing → polish)
- Reference specific sections or requirements from the PRD
- Be granular enough for Claude Code to execute (avoid vague tasks like "implement feature")

**Example Todo Structure:**
```
1. Set up [component/module] structure
2. Implement [specific functionality from requirements]
3. Add [specific integration or API endpoint]
4. Create [data model or schema changes]
5. Implement error handling for [edge cases]
6. Add validation for [inputs/outputs]
7. Write tests for [critical paths]
8. Update documentation
```

Present the todo list to the user and ask: "Would you like me to start implementing these tasks, or would you like to review/modify the PRD first?"

## Best Practices

**Be Comprehensive But Concise:**
- Include all necessary context without being overly verbose
- Focus on information Claude Code needs to implement the work
- Omit project management details like story points, sprint assignments, or business metrics

**Make It Actionable:**
- Write requirements that can be directly translated to code
- Include specific examples and edge cases
- Provide enough technical detail for implementation

**Assume Claude Code as the Audience:**
- The PRD should give another Claude Code instance sufficient context to implement
- Include technical details, file paths, and code structure guidance
- Reference existing patterns in the codebase when applicable

**Keep It Living:**
- PRDs can be updated as requirements evolve
- Mention that open questions should be resolved before implementation
- Note dependencies that may affect the implementation approach

## Example PRD Structure

```markdown
# Feature Name: CSV Export Functionality

## Feature Overview
- **Type:** New Feature
- **Summary:** Add ability to export scraped content to CSV format
- **Related:** [Link to GitHub issue #123]

## Problem Statement
Users currently can only view scraped data in the UI or export to JSON. Many users need to import scraped blog posts into Excel or Google Sheets for content planning, requiring CSV format with customizable column selection.

## Goals and Objectives

### Primary Goal
Enable users to export scraped blog content to CSV format with customizable columns.

### Secondary Goals
- Support bulk export of multiple scraped posts
- Include metadata (scrape timestamp, source URL)
- Allow column ordering customization

### Non-Goals
- Excel file format (.xlsx) - out of scope for MVP
- Scheduled exports or automation
- Export of WordPress-specific data structures

## User Stories

**As a content manager**, I want to export 50 scraped blog posts to CSV so that I can review them in Excel and plan our content calendar.

**As a data analyst**, I want to select which fields to include in the CSV so that I only export relevant columns for my analysis.

## Technical Requirements

### Functional Requirements
- Generate CSV from ScraperResult<BlogScraperSchema> data
- Support column selection: title, content, author, publishDate, featuredImage, excerpt
- Include metadata columns: sourceUrl, scrapedAt
- Handle special characters and escaping
- Support UTF-8 encoding

### Non-Functional Requirements
- Export up to 1000 posts without timeout
- CSV generation should complete within 5 seconds for 100 posts
- File size limit: 50MB

[... continue with remaining sections ...]
```

## Tips for Different Feature Types

**For API Endpoints:**
- Include request/response examples
- Document authentication requirements
- Specify rate limiting rules
- Detail error response codes

**For UI Components:**
- Include mockups or wireframes descriptions
- Specify responsive breakpoints
- Detail accessibility requirements (ARIA, keyboard navigation)
- Describe user interactions and state management

**For Scrapers:**
- Detail target site structure
- Specify data extraction rules
- Document handling of lazy loading, pagination, edge cases
- Include example URLs for testing

**For Architecture Changes:**
- Explain current vs. proposed architecture
- Detail migration path
- Specify backwards compatibility requirements
- Include rollback strategy
